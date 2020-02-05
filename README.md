# exFormer

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
This repository contains the attention visualization component from exBERT and a minimalized server that does not support corpus indexing or search by embedding.

The performance of this app will exceed that of exBERT on a slower internet connection as signifcantly less information (like that of the embeddings and results from FAISS searches) is needed to be sent over the REST API.


## Getting Started
### Install the environment
You can install the environment needed to run the server with conda:

`conda env create -f environment.yml`

This will create an environment named `exformer`.

### Backend
You can start the server by `conda activate exformer` followed by `python server/main.py`.

### Frontend
The compiled versions of the frontend are already included in the `client/dist` folder. You can get setup to develop on the frontend by the following:

1. `cd client/src`
2. `npm install`
3. `npm run ww`

This will allow you to change the typescript files and see the changes in your browser on refresh.
