#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

PUBS_GRAPH=$RAW_DIR/$VERSION/publications-dataset-graph.jsonl
node ./src/unflatten-dataset-graph.js $PUBLICATIONS $PUBS_GRAPH
