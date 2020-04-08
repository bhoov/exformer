"""Download new supported models onto server.

Specify the `.hjson` config file that follows the example below:

INSIDE `sample.hjson`
{ models: [
    { name: "bert-base-cased", kind: "bidirectional" },
    { name: "gpt2", kind: "autoregressive" },
    // { name: "xlm-mlm-enfr-1024", kind: "bidirectional" },
    // { name: "ctrl", kind: "bidirectional" },
]}
"""
import hjson
import click
from pathlib import Path
from model_api import get_details, get_supported_model_names
import multiprocessing as mp

def download_model(mname):
    print(f"Checking {mname}")
    get_details(mname)
    return None

@click.command()
@click.option("--fname", "-f", help="File location of supported model list")
def main(fname):
    model_names = get_supported_model_names(fname)

    with mp.Pool() as p:
        p.map(download_model, model_names)

if __name__ == "__main__":
    main()