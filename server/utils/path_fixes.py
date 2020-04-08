from pathlib import Path
import os

ROOT_DIR = Path(os.path.abspath(__file__)).parent.parent.parent
SERVER = ROOT_DIR / "server"
CLIENT = ROOT_DIR / "client"
CLIENT_DIST = CLIENT / "dist"
CLIENT_SRC = CLIENT / "src"
CLIENT_CONF = CLIENT_SRC / "conf"
SUPPORTED_MODELS = CLIENT_CONF / "supportedModels.hjson"