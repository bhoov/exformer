from pathlib import Path
from .corpus_data_wrapper import CorpusDataWrapper
from .index_wrapper import Indexes, ContextIndexes
from config import CORPORA
from utils.f import memoize, delegates, GetAttr
from typing import List

def get_dir_names(path: Path) -> List[str]:
    available = [g.name for g in filter(lambda g: g.is_dir(), path.glob("*"))]
    return available


@memoize
def from_model(model_name, corpus_name):
    """Get the convenience corpus wrapper for a model and a corpus"""
    model_dir = Path(CORPORA) / model_name
    available = get_dir_names(model_dir)
    if not model_dir.exists() or len(available) == 0:
        raise FileNotFoundError("There are no corpora present for this model")

    base_dir = model_dir / corpus_name

    if not base_dir.exists(): 
        raise FileNotFoundError(f"Desired corpus '{corpus_name}' not available")

    return ConvenienceCorpus(base_dir)

def files_available(base_dir, glob_pattern="*.faiss"):
    """Determine whether the base_dir contains indexed files"""
    if not base_dir.exists() or len(list(base_dir.glob(glob_pattern))) == 0:
        return False

    return True
class ConvenienceCorpus(GetAttr):
    def __init__(self, base_dir):
        bd = Path(base_dir)
        self.base_dir = bd
        self.model_dir = bd.parent
        self.available_corpora = get_dir_names(self.model_dir)

        self.model_name = self.model_dir.name
        self.corpus_name = bd.name
        self.name = f"{self.model_name}_{self.corpus_name}"

        self.corpus_f = bd / 'data.hdf5'
        self.embedding_dir = bd / 'embedding_faiss'
        self.context_dir = bd / 'context_faiss'

        # Define whether these different files exist or not
        if not self.corpus_f.exists(): 
            raise FileNotFoundError("Main HDF5 file does not exist")

        self.embeddings_available = files_available(self.embedding_dir)
        self.contexts_available = files_available(self.context_dir)

        self.corpus = CorpusDataWrapper(self.corpus_f, self.name)
        self.embedding_faiss = Indexes(self.embedding_dir)
        self.context_faiss = ContextIndexes(self.context_dir)

        self.default = self.corpus # Almost acts like an inherited class, but is rather a composed class

    def search_embeddings(self, layer, query, k):
        D, I = self.embedding_faiss.search(layer, query, k)
        return self.find2d(I)[0]

    def search_contexts(self, layer, heads, query, k):
        D, I = self.context_faiss.search(layer, heads, query, k)
        return self.find2d(I)[0]

    def __repr__(self):
        return f"ConvenienceCorpus({self.name})"