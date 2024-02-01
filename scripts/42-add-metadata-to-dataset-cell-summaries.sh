#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

node ./src/add-metadata-to-dataset-cell-summaries.js \
  $DIR/full-dataset-graph.csv \
  $DIR/cell-summaries-no-metadata.jsonld \
  $DIR/cell-summaries.jsonld
