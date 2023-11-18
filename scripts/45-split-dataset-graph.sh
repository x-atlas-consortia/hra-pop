#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

node ./src/split-atlas-data.js $MINIMUM_DIAMONDS $DIR/full-dataset-graph.csv $DIR/cell-summaries.jsonld $DIR/atlas-dataset-graph.csv $DIR/non-atlas-dataset-graph.csv

node ./src/unflatten-dataset-graph.js $DIR/atlas-dataset-graph.csv $DIR/atlas-dataset-graph.jsonld
