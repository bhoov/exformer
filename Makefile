ENV_NAME="exformer"

env:
	conda env create -f ./environment.yml; \
	conda activate $(ENV_NAME); \
	pip install -e server/transformers; \
	pip install -e server; \

env-dev:
	conda env create -f ./environment.yml; \
	conda activate $(ENV_NAME); \
	pip install -e server/transformers; \
	pip install -e server; \
	conda env update -f ./environment-dev.yml
