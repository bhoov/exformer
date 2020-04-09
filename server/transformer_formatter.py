from typing import List, Iterable, Tuple
from functools import partial
import numpy as np
import torch
import json

from utils.token_processing import fix_byte_spaces
from utils.gen_utils import map_nlist


def round_return_value(attentions, ndigits=5):
    """Rounding must happen right before it's passed back to the frontend because there is a little numerical error that's introduced converting back to lists
    
    attentions: {
        'aa': {
            left
            right
            att
        }
    }
    
    """
    rounder = partial(round, ndigits=ndigits)
    nested_rounder = partial(map_nlist, rounder)
    new_out = attentions  # Modify values to save memory
    new_out["aa"]["att"] = nested_rounder(attentions["aa"]["att"])

    return new_out

def flatten_batch(x: Tuple[torch.Tensor]) -> Tuple[torch.Tensor]:
    """Remove the batch dimension of every tensor inside the Iterable container `x`"""
    return tuple([x_.squeeze(0) for x_ in x])

def squeeze_contexts(x: Tuple[torch.Tensor]) -> Tuple[torch.Tensor]:
    """Combine the last two dimensions of the context."""
    shape = x[0].shape
    new_shape = shape[:-2] + (-1,)
    return tuple([x_.view(new_shape) for x_ in x])

def add_blank(xs: Tuple[torch.tensor]) -> Tuple[torch.Tensor]:
    """The embeddings have n_layers + 1, indicating the final output embedding."""

    return (torch.zeros_like(xs[0]),) + xs

class TransformerOutputFormatter:
    def __init__(
        self,
        sentence: str,
        tokens: List[str],
        special_tokens_mask: List[int],
        att: Tuple[torch.Tensor], 
        topk_words: List[List[str]],
        topk_probs: List[List[float]],
        model_config
    ):
        assert len(tokens) > 0, "Cannot have an empty token output!"

        modified_att = flatten_batch(att)

        self.sentence = sentence
        self.tokens = tokens
        self.special_tokens_mask = special_tokens_mask
        self.attentions = modified_att
        self.topk_words = topk_words
        self.topk_probs = topk_probs
        self.model_config = model_config

        try: 
            # GPT vals
            self.n_layer = self.model_config.n_layer
            self.n_head = self.model_config.n_head
            self.hidden_dim = self.model_config.n_embd
        except AttributeError:
            try: 
                # BERT vals
                self.n_layer = self.model_config.num_hidden_layers
                self.n_head = self.model_config.num_attention_heads
                self.hidden_dim = self.model_config.hidden_size
            except AttributeError: raise


        self.__len = len(tokens)# Get the number of tokens in the input
        assert self.__len == self.attentions[0].shape[-1], "Attentions don't represent the passed tokens!"
    
    def to_json(self, layer:int, ndigits=5):
        """The original API expects the following response:

        aa: {
            att: number[][][]
            left: List[info]
            right: List[info]
        }
        """
        # Convert the embeddings, attentions, and contexts into list. Perform rounding

        rounder = partial(round, ndigits=ndigits)
        nested_rounder = partial(map_nlist, rounder)

        def tolist(tens): return [t.tolist() for t in tens]

        def to_resp(tok: str, topk_words, topk_probs):
            return {
                "text": tok,
                "topk_words": topk_words,
                "topk_probs": nested_rounder(topk_probs)
            }

        side_info = [to_resp(t, w, p) for t,w,p in zip( self.tokens, 
                                                        self.topk_words,
                                                        self.topk_probs)]

        out = {"aa": {
            "att": nested_rounder(tolist(self.attentions[layer])),
            "left": side_info,
            "right": side_info
        }}

        return out

    def display_tokens(self, tokens):
        return fix_byte_spaces(tokens)

    def __repr__(self):
        lim = 50
        if len(self.sentence) > lim: s = self.sentence[:lim - 3] + "..."
        else: s = self.sentence[:lim]

        return f"TransformerOutput({s})"

    def __len__(self):
        return self.__len
        
def to_numpy(x): 
    """Embeddings, contexts, and attentions are stored as torch.Tensors in a tuple. Convert this to a numpy array
    for storage in hdf5"""
    return np.array([x_.detach().numpy() for x_ in x])

def to_searchable(t: Tuple[torch.Tensor]):
    return t.detach().numpy().astype(np.float32)