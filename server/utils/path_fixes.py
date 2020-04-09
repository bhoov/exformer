from pathlib import Path
import os

FAISS_LAYER_PATTERN = 'layer_*.faiss'
LAYER_TEMPLATE = 'layer_{:02d}.faiss' 

ROOT_DIR = Path(os.path.abspath(__file__)).parent.parent.parent
CORPORA = ROOT_DIR / "corpora"
DATA_DIR = ROOT_DIR / 'server' / 'data'
DATASET_DIR = Path.home() / 'Datasets'
ROOT_DIR = Path(os.path.abspath(__file__)).parent.parent.parent
SERVER = ROOT_DIR / "server"
CLIENT = ROOT_DIR / "client"
CLIENT_DIST = CLIENT / "dist"
CLIENT_SRC = CLIENT / "src"
CLIENT_CONF = CLIENT_SRC / "conf"
SUPPORTED_MODELS = CLIENT_CONF / "supportedModels.hjson"
DEMO = CLIENT_SRC / "demo"
