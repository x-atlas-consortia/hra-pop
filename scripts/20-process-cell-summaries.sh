#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

MERGED=$RAW_DIR/$VERSION/cell-summaries-no-metadata.jsonl
node ./src/concatenate-jsonld-to-jsonl.js $CELL_SUMMARIES $MERGED

MERGED_DATASETS=$RAW_DIR/$VERSION/cell-summary-dataset-graph.jsonl
node ./src/unflatten-dataset-graph.js $CELL_SUMMARY_DATASETS $MERGED_DATASETS
