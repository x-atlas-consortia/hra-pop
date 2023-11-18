#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

node ./src/flatten-dataset-graph.js \
  $DIR/registrations-dataset-graph.jsonld \
  $DIR/publications-dataset-graph.jsonld \
  $DIR/cell-summary-dataset-graph.jsonld \
  $DIR/full-dataset-graph.csv

node ./src/unflatten-dataset-graph.js $DIR/full-dataset-graph.csv $DIR/full-dataset-graph.jsonld
node ./src/flatten-dataset-graph.js $DIR/full-dataset-graph.jsonld $DIR/full-dataset-graph.csv
