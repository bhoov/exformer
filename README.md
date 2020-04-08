# exFormer

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
This repository contains the attention visualization component from exBERT and a minimalized server that does not support corpus indexing or search by embedding.

The performance of this app will exceed that of exBERT on a slower internet connection as signifcantly less information (like that of the embeddings and results from FAISS searches) is needed to be sent over the REST API.


## Getting Started
You can install the environment needed to run the server with conda:

`conda env create -f environment.yml`

This will create an environment named `exformer`.

## Backend
### From Scratch
To start the server, run `.startserver.sh`. This will start a redis server for Ray's multiprocessing (if it hasn't started already), and run the python application. Make sure you have the correct conda environment activated.

### From Connexion to FastAPI
Unfortunately, because of the sheer number of models that need to be loaded into memory, we cannot use `gunicorn` to start many separate python processes. Instead, we needed to employ a solution that would share the memory containing these loaded models but still provide production-like capabilities using multiple processes.

To this end, we switched from [`connexion`](https://connexion.readthedocs.io/en/latest/) to [`fastapi`](https://fastapi.tiangolo.com/).

A few gotchas:
- Do not put any characters that would need to be URL-Escaped into the main path (i.e., not query) paramters. FastAPI doesn't handle these well.
- FastAPI tries to be smart about paths, and it will not match the `{path}` in `@app.get("/serve/{path}")` to any string containing the character `/`. This edge case is documented [here](https://fastapi.tiangolo.com/tutorial/path-params/#path-parameters-containing-paths).

### Multiprocessing with Ray
Load balancing inside Python is difficult to do across multiple CPUs because of the GIL. To fix this, we tried [`ray`](https://ray.io/) to load the models into separate CPUs while still sharing the memory in RAM. This requires a redis server to run behind the scenes, before the python script is started.

You can start the `ray` server with:

`ray start --node-ip-address=127.0.0.1 --redis-port=6379 --head`

And then connect to it in the running application with:

`ray.init(address="auto", redis_password="PASSWORD", ignore_reinit_error=True)`

where `PASSWORD` is the password that you are given by the `ray start` command on first startup. This has a smart default as the host defaults to `localhost`

## Frontend
The compiled versions of the frontend are already included in the `client/dist` folder. You can get setup to develop on the frontend by the following:

1. `cd client/src`
2. `npm install`
3. `npm run watch`

This will allow you to change the typescript files and see the changes in your browser on refresh.

You can interact with the api by going to `http://HOST:PORT/docs`
