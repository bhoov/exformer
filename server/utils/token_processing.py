import numpy as np
from transformers.tokenization_bert import BertTokenizer
from .f import flatten_, assoc, memoize, GetAttr

from typing import List

def fix_byte_spaces(toks: List[str]) -> List[str]:
        return [t.replace("\u0120", " ").replace("\u010A", "\\n") for t in toks]

@memoize
def get_bpe(bpe_pretrained_name_or_path):
    return BertTokenizer.from_pretrained(bpe_pretrained_name_or_path)

# [String] -> [String]
def remove_CLS_SEP(toks):
    return [t for t in toks if t not in set(["[CLS]", "[SEP]"])]

# torch.Tensor -> np.Array
def process_hidden_tensors(t):
    """Embeddings are returned from the BERT model in a non-ideal embedding shape:
        - unnecessary batch dimension
        - Undesired second sentence "[SEP]".
    
    Drop the unnecessary information and just return what we need for the first sentence
    """
    # Drop unnecessary batch dim and second sent
    t = t.squeeze(0)[:-1]

    # Drop second sentence sep ??
    t = t[1:-1]

    # Convert to numpy
    return t.data.numpy()


# np.Array -> np.Array
def normalize(a):
    """Divide each head by its norm"""
    norms = np.linalg.norm(a, axis=-1, keepdims=True)
    return a / norms


# np.Array:<a,b,c,d> -> np.Array<a,b,c*d>
def reshape(a):
    """Combine the last two dimensions of a numpy array"""
    all_head_size = a.shape[-2] * a.shape[-1]
    new_shape = a.shape[:-2] + (all_head_size,)
    return a.reshape(new_shape)