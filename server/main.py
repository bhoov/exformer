import time
import argparse
from concurrent.futures import ThreadPoolExecutor as ThreadPool

import numpy as np
from pathlib import Path
from fastapi import FastAPI
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.encoders import jsonable_encoder
import uvicorn
from async_lru import alru_cache
from pydantic import BaseModel

import api
import json

import utils.path_fixes as pf
from utils.f import ifnone
from model_api import get_details, get_supported_model_names

parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("--port", default=8000, type=int, help="Port to run the app. ")
parser.add_argument(
    "--preload", action="store_true", help="If given, preload all models"
)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def to_static_file(hashname: str, obj: BaseModel):
    """Make a file named `hashname` out of a json_response"""
    fname = pf.DEMO / (hashname + ".json")
    print(f"SAVING TO {fname}")
    with open(fname, "w+") as fp:
        fp.write(obj.json())


def preload_model_info(mname):
    print(f"Loading {mname}...")
    get_details(mname)

def preload_supported_models(do_multi=False):
    model_names = get_supported_model_names(pf.SUPPORTED_MODELS)

    start = time.time()
    if do_multi:
        with ThreadPool() as executor:
            list(executor.map(preload_model_info, model_names))
    else:
        for mname in model_names:
            preload_model_info(mname)
    end = time.time()

    print(f"Preloading took {end-start} seconds")


@app.get("/api/_done-with-demos")
def done_demos():
    fnames = list(pf.DEMO.glob("*.json"))
    demo_api_f = pf.CLIENT_SRC / "ts" / "api" / "demoAPI.ts"

    def format_fname(fname):
        return f'    "{fname.stem}": "{fname.stem}.json"'

    contents = [format_fname(f) for f in fnames]
    header = r"export const DemoAPI = {"

    to_write = header + "\n" + ",\n".join(contents) + "\n}"
    print(to_write)

    with open(demo_api_f, "w+") as fp:
        fp.write(to_write)

    return 200


# Flask main routes
@app.get("/")
def index():
    return RedirectResponse(url="client/exBERT.html")


# the `file_path:path` says to accept any path as a string here. Otherwise, `file_paths` containing `/` will not be served properly
@app.get("/client/{file_path:path}")
def send_static_client(file_path: str):
    """ Serves (makes accessible) all files from ./client/ to ``/client/{path}``

    Args:
        path: Name of file in the client directory
    """
    print(f"\n\nPath: {file_path}")
    f = str(pf.CLIENT_DIST / file_path)
    print("Finding file: ", f)
    return FileResponse(f)


@app.get("/api/get-model-details")
@alru_cache(maxsize=80)
async def get_model_details(model: str, request_hash=None) -> api.ModelDetailResponse:
    """Get important information about a model, like the number of layers and heads
    
    Args:
        mname: The name of the model to look up the config for

    Returns:
        {
            status: 200,
            payload: {
                nlayers (int)
                nheads (int)
            }
        }
    """
    deets = get_details(model)

    info = deets.config
    nlayers = info.num_hidden_layers
    nheads = info.num_attention_heads

    payload_out = api.ModelDetailPayload(nlayers=nlayers, nheads=nheads)
    out = api.ModelDetailResponse(payload=payload_out)
    if request_hash is not None:
        to_static_file(request_hash, out)
    return out


@app.get("/api/attend-with-meta")
@alru_cache(maxsize=1024)
async def get_attentions_and_preds(
    model: str, sentence: str, layer: int, request_hash=None
) -> api.AttentionResponse:
    """For a sentence, at a layer, get the attentions and predictions
    
    Args:
        request['model']: Model name
        request['sentence']: Sentence to get the attentions for
        request['layer']: Which layer to extract from

    Returns:
        {
            status: 200
            payload: {
                aa: {
                    att: Array((nheads, ntoks, ntoks))
                    left: [{
                        text (str), 
                        topk_words (List[str]),
                        topk_probs (List[float])
                    }, ...]
                    right: [{
                        text (str), 
                        topk_words (List[str]),
                        topk_probs (List[float])
                    }, ...]
                }
            }
        }
    """
    details = get_details(model)
    deets = details.from_sentence(sentence)
    payload_out = deets.to_json(layer)
    out = api.AttentionResponse.from_transformer_output(payload_out)
    if request_hash is not None:
        to_static_file(request_hash, out)
    return out


@app.post("/api/update-mask")
@alru_cache(maxsize=1024)
async def update_masked_attention(
    payload: api.MaskUpdatePayload,
) -> api.AttentionResponse:
    """From tokens and indices of what should be masked, get the attentions and predictions
    
    payload = request['payload']

    Args:
        payload['model'] (str): Model name
        payload['tokens'] (List[str]): Tokens to pass through the model
        payload['sentence'] (str): Original sentence the tokens came from
        payload['mask'] (List[int]): Which indices to mask
        payload['layer'] (int): Which layer to extract information from

    Returns:
        {
            status: 200
            payload: {
                aa: {
                    att: Array((nheads, ntoks, ntoks))
                    left: [{
                        text (str), 
                        topk_words (List[str]),
                        topk_probs (List[float])
                    }, ...]
                    right: [{
                        text (str), 
                        topk_words (List[str]),
                        topk_probs (List[float])
                    }, ...]
                }
            }
        }
    """
    model = payload.model
    tokens = payload.tokens
    sentence = payload.sentence
    mask = payload.mask
    layer = payload.layer
    request_hash = payload.request_hash

    details = get_details(model)

    MASK = details.tok.mask_token
    mask_tokens = lambda toks, maskinds: [
        t if i not in maskinds else ifnone(MASK, t) for (i, t) in enumerate(toks)
    ]

    token_inputs = mask_tokens(tokens, mask)

    deets = details.from_tokens(token_inputs, sentence)
    payload_out = deets.to_json(layer)
    out = api.AttentionResponse.from_transformer_output(payload_out)
    if request_hash is not None:
        to_static_file(request_hash, out)
    return out


if __name__ == "__main__":
    print("Initializing as the main script")  # Is never printed
    args, _ = parser.parse_known_args()
    if args.preload: preload_supported_models(do_multi=False) # multi seems to almost double used memory for minimal speed improvement
    uvicorn.run(app, host='127.0.0.1', port=args.port)
else:
    print("Running from something else  =')")
