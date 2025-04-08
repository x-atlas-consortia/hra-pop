#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

node ./src/flatten-dataset-graph.js \
  $DIR/registrations-dataset-graph.jsonl \
  $DIR/publications-dataset-graph.jsonl \
  $DIR/cell-summary-dataset-graph.jsonl \
  $DIR/full-dataset-graph.csv

node ./src/unflatten-dataset-graph.js $DIR/full-dataset-graph.csv $DIR/full-dataset-graph.jsonl
node ./src/flatten-dataset-graph.js $DIR/full-dataset-graph.jsonl $DIR/full-dataset-graph.csv
