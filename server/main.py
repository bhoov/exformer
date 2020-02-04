import argparse
import numpy as np
import connexion
from flask_cors import CORS
from flask import render_template, redirect, send_from_directory

import utils.path_fixes as pf
from utils.f import ifnone

from data_processing import from_model
from model_api import get_details

app = connexion.FlaskApp(__name__, static_folder="client/dist", specification_dir=".")
flask_app = app.app
CORS(flask_app)

parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("--debug", action="store_true", help=" Debug mode")
parser.add_argument("--port", default=5050, help="Port to run the app. ")

# Flask main routes
@app.route("/")
def hello_world():
    return redirect("client/exBERT.html")

# send everything from client as static content
@app.route("/client/<path:path>")
def send_static_client(path):
    """ serves all files from ./client/ to ``/client/<path:path>``

    :param path: path from api call
    """
    return send_from_directory(str(pf.CLIENT_DIST), path)

# ======================================================================
## CONNEXION API ##
# ======================================================================
def get_model_details(**request):
    """Get important information about a model, like the number of layers and heads
    
    Args:
        request['model']: The model name

    Returns:
        {
            status: 200,
            payload: {
                nlayers (int)
                nheads (int)
            }
        }
    """
    mname = request['model']
    deets = get_details(mname)

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

def get_attentions_and_preds(**request):
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
    model = request["model"]
    details = get_details(model)

    sentence = request["sentence"]
    layer = int(request["layer"])

    deets = details.att_from_sentence(sentence)

    payload_out = deets.to_json(layer)

    return {
        "status": 200,
        "payload": payload_out
    }

def update_masked_attention(**request):
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
    payload = request["payload"]

    model = payload['model']
    details = get_details(model)

    tokens = payload["tokens"]
    sentence = payload["sentence"]
    mask = payload["mask"]
    layer = int(payload["layer"])

    MASK = details.aligner.mask_token
    mask_tokens = lambda toks, maskinds: [
        t if i not in maskinds else ifnone(MASK, t) for (i, t) in enumerate(toks)
    ]

    token_inputs = mask_tokens(tokens, mask)

    deets = details.att_from_tokens(token_inputs, sentence)
    payload_out = deets.to_json(layer)

    return {
        "status": 200,
        "payload": payload_out,
    }

app.add_api("swagger.yaml")

# Setup code
if __name__ != "__main__":
    print("SETTING UP ENDPOINTS")

# Then deploy app
else:
    args, _ = parser.parse_known_args()
    print("Initiating app")
    app.run(port=args.port, use_reloader=False, debug=args.debug)
