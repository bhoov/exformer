import argparse
import numpy as np
from fastapi import FastAPI
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import uvicorn
from async_lru import alru_cache

import api

import utils.path_fixes as pf
from utils.f import ifnone
from model_api import get_details

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Flask main routes
@app.get("/")
def index():
    return RedirectResponse(url="client/exBERT.html")

# the `file_path:path` says to accept any path as a string here. Otherwise, `file_paths` containing `/` will not be served properly
@app.get("/client/{file_path:path}")
def send_static_client(file_path:str):
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
async def get_model_details(model:str):
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

    payload_out = {
        "nlayers": nlayers,
        "nheads": nheads,
    }

    return {
        "status": 200,
        "payload": payload_out,
    }

@app.get("/api/attend-with-meta")
@alru_cache(maxsize=1024)
async def get_attentions_and_preds(model:str, sentence:str, layer:int):
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

    return {
        "status": 200,
        "payload": payload_out
    }

@app.post("/api/update-mask")
@alru_cache(maxsize=1024)
async def update_masked_attention(payload:api.MaskUpdatePayload):
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

    details = get_details(model)

    MASK = details.tok.mask_token
    mask_tokens = lambda toks, maskinds: [
        t if i not in maskinds else ifnone(MASK, t) for (i, t) in enumerate(toks)
    ]

    token_inputs = mask_tokens(tokens, mask)

    deets = details.from_tokens(token_inputs, sentence)
    payload_out = deets.to_json(layer)

    return {
        "status": 200,
        "payload": payload_out,
    }

if __name__ != "__main__":
    print("Initializing as the main script") # Is never printed
else:
    # This file is not run as __main__ in the uvicorn environment
    uvicorn.run(app, host='127.0.0.1', port=8000)
