#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

MERGED=$RAW_DIR/$VERSION/cell-summaries.jsonld
node ./src/concatenate-jsonld.js $CELL_SUMMARIES $MERGED

MERGED_DATASETS=$RAW_DIR/$VERSION/cell-summary-dataset-graph.jsonld
node ./src/unflatten-dataset-graph.js $CELL_SUMMARY_DATASETS $MERGED_DATASETS
