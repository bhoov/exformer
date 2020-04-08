from typing import List, Union, Tuple

import torch
from transformers import AutoConfig, AutoTokenizer, AutoModelWithLMHead, AutoModel

from transformer_formatter import TransformerOutputFormatter
from utils.f import delegates, pick, memoize

@memoize
def get_details(mname):
    return ModelDetails(mname)

def get_model_tok(mname):
    conf = AutoConfig.from_pretrained(mname, output_attentions=True, output_past=False)
    tok = AutoTokenizer.from_pretrained(mname, config=conf)
    model = AutoModelWithLMHead.from_pretrained(mname, config=conf)
    return model, tok

class ModelDetails:
    """Wraps a transformer model and tokenizer to prepare inputs to the frontend visualization"""
    def __init__(self, mname):
        self.mname = mname
        self.model, self.tok = get_model_tok(self.mname)
        self.model.eval()
        self.config = self.model.config
    
    def from_sentence(self, sentence: str) -> TransformerOutputFormatter:
        """Get attentions and word probabilities from a sentence. Special tokens are automatically added if a sentence is passed.
        
        Args:
            sentence: The input sentence to tokenize and analyze. 
        """
        tokens = self.tok.tokenize(sentence)

        return self.from_tokens(tokens, sentence, add_special_tokens=True)

    def from_tokens(
        self, tokens: List[str], orig_sentence:str, add_special_tokens:bool=False, mask_attentions:bool=False, topk:int=5
    ) -> TransformerOutputFormatter:
        """Get formatted attention and predictions from a list of tokens.

        Args:
            tokens: Tokens to analyze
            orig_sentence: The sentence the tokens came from (needed to help organize the output)
            add_special_tokens: Whether to add special tokens like CLS / <|endoftext|> to the tokens.
                If False, assume the tokens already have the special tokens
            mask_attentions: If True, do not pay attention to attention patterns to special tokens through the model.
            topk: How many top predictions to report
        """
        ids = self.tok.convert_tokens_to_ids(tokens)

        print("RUNNING TOKENS")

        # For GPT2, add the beginning of sentence token to the input. Note that this will work on all models but XLM

        if 'gpt' in self.mname and add_special_tokens:
            bost = self.tok.bos_token_id
            ids.insert(0, bost)

        inputs = self.tok.prepare_for_model(ids, add_special_tokens=add_special_tokens, return_tensors="pt")
        parsed_input = self.parse_inputs(inputs, mask_attentions=mask_attentions)
        in_ids = parsed_input['input_ids']

        if 't5' in self.mname:
            # Is this correct for T5?
            output = self.model(input_ids=in_ids, decoder_input_ids=in_ids, attention_mask=parsed_input['attention_mask'])
        else:
            output = self.model(input_ids=in_ids, attention_mask=parsed_input['attention_mask'])

        logits, atts = self.choose_logits_att(output)
        words, probs = self.logits2words(logits, topk)
        tokens = self.view_ids(inputs["input_ids"])

        formatted_output = TransformerOutputFormatter(
            orig_sentence,
            tokens,
            inputs["special_tokens_mask"],
            atts,
            words,
            probs.tolist(),
            self.config
        )

        return formatted_output

    def choose_logits_att(self, out:Tuple) -> Tuple:
        """Select from the model's output the logits and the attentions, switching on model name.

        For example, T5 and BART models have an output of (logits, decoder_attentions, encoder_embeddings, encoder_attentions).

        By default, we return encoder attentions
        
        Args:
            out: Output from the model's forward pass

        Returns:
            (logits: tensor((bs, N)), attentions: Tuple[tensor(())])
        """

        # Check dimensions of model output
        print("Len out: ", len(out))
        for i in range(len(out)):
            t = out[i]
            print(f"Len {i}: ", len(t))
            if type(t) is tuple or type(t) is list: 
                print(f"Iterable[0] Shape {i}: ", t[0].shape)
            else:
                print(f"Straight Shape {i}: ", t.shape)

        if 't5' in self.mname or 'bart' in self.mname:
            logits, _, _, atts = out
        else:
            logits, atts = out

        return logits, atts

    def logits2words(self, logits, topk):
        """Convert logit probabilities into words from the tokenizer's vocabulary.
        
        """
        probs, idxs = torch.topk(torch.softmax(logits.squeeze(0), 1), topk)
        words = [self.tok.convert_ids_to_tokens(i) for i in idxs]
        return words, probs

    def view_ids(self, ids: Union[List[int], torch.Tensor]) -> List[str]:
        """View what the tokenizer thinks certain ids are for a single input"""
        if type(ids) == torch.Tensor:
            # Remove batch dimension
            ids = ids.squeeze(0).tolist()

        out = self.tok.convert_ids_to_tokens(ids)
        return out

    def parse_inputs(self, inputs, mask_attentions=False):
        """Parse the output from `tokenizer.prepare_for_model` to the desired attention mask from special tokens

        Args:
            - inputs: The output of `tokenizer.prepare_for_model`.
                A dict with keys: {'special_token_mask', 'token_type_ids', 'input_ids'}
            - mask_attentions: Flag indicating whether to mask the attentions or not

        Returns:
            Dict with keys: {'input_ids', 'token_type_ids', 'attention_mask', 'special_tokens_mask'}

        Usage:

            ```
            s = "test sentence"

            # from raw sentence to tokens
            tokens = tokenizer.tokenize(s)

            # From tokens to ids
            ids = tokenizer.convert_tokens_to_ids(tokens)

            # From ids to input
            inputs = tokenizer.prepare_for_model(ids, return_tensors='pt')

            # Parse the input. Optionally mask the special tokens from the analysis.
            parsed_input = parse_inputs(inputs)

            # Run the model, pick from this output whatever inputs you want
            from utils.f import pick
            out = model(**pick(['input_ids'], parse_inputs(inputs)))
            ```
        """

        out = inputs.copy()

        # DEFINE SPECIAL TOKENS MASK
        if "special_tokens_mask" not in inputs.keys():
            special_tokens = set([self.tok.unk_token_id, self.tok.cls_token_id, self.tok.sep_token_id, self.tok.bos_token_id, self.tok.eos_token_id, self.tok.pad_token_id])
            in_ids = inputs['input_ids'][0]
            special_tok_mask = [1 if int(i) in special_tokens else 0 for i in in_ids]
            inputs['special_tokens_mask'] = special_tok_mask

        if mask_attentions:
            out["attention_mask"] = torch.tensor(
                [int(not i) for i in inputs.get("special_tokens_mask")]
            ).unsqueeze(0)
        else:
            out["attention_mask"] = torch.tensor(
                [1 for i in inputs.get("special_tokens_mask")]
            ).unsqueeze(0)

        return out