""" Create JSON files to cache (on the frontend) the most common requests from the Drug Design Experience

This script (currently) loops over all available projects and all sort keys for the `topX` route,
saving them in JSON files named by the SHA1 hash of the following string:

`${project_name}_${sort_key}.json`

By doing a SHA1 hash on this string from the frontend you can find the correct JSON file
"""

import click
import requests
import json
from pathlib import Path
from hashlib import sha1


def make_resp(p_id: str, sort_key: str, x: int, k: int, filters=[]):
    return {"p_id": p_id, "x": x, "k": k, "sort": sort_key, "filters": filters}


def make_hash(request_data):
    pid = request_data["p_id"]
    sort_key = request_data["sort"]
    str_val = f"{pid}_{sort_key}".encode()
    return sha1(str_val).hexdigest()


def name_output(outdir, request_data):
    hashed_str = make_hash(request_data)
    outfile = outdir / (hashed_str + ".json")
    return outfile


@click.command()
@click.option(
    "--outdir",
    "-o",
    default=None,
    help="Where to store the JSON files. If none provided, assume CURRENTFOLDER/cached",
)
@click.option(
    "--url",
    "-u",
    default="http://0.0.0.0:5050/api",
    help="What server's base URL (ending in /api) to ping to make requests",
)
@click.option("--x", "-x", default=10, help="Default value for x for the `topX` route")
@click.option("--k", "-k", default=10, help="Default value for k for the `topX` route")
def main(outdir, url, x, k):

    if outdir is None:
        outdir = Path(".").absolute() / "cached"
    else:
        outdir = Path(outdir)
    if not outdir.exists():
        outdir.mkdir(parents=True)

    topx_url = url + "/topX"  # POST
    allproject_url = url + "/allProjects"  # GET
    allproperties_url = url + "/projectProperties"  # GET

    project_info = requests.get(allproject_url)
    project_names = [p["name"] for p in project_info.json()]
    # properties = ["AFF", "SEL", "TOX", "QED", "SA", "LogP", "MolW"]
    properties = requests.get(allproperties_url).json()
    print(properties)

    for pid in project_names:
        for sort_key in properties:
            data = make_resp(pid, sort_key, x, k)
            outfile = name_output(outdir, data)
            resp = requests.post(topx_url, json=data)
            resp_data = resp.json()

            print(f"Writing {{PID: {pid}, key: {sort_key}}} into {outfile.name}")
            with open(outfile, "w") as fp:
                json.dump(resp_data, fp)


if __name__ == "__main__":
    main()
