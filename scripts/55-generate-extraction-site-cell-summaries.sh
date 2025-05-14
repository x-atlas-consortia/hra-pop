#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

COLLISIONS=$DIR/collisions.jsonl
SUMMARIES=$DIR/cell-summaries.jsonl

node ./src/compute-extraction-site-cell-summaries.js \
  $DIR/atlas-dataset-graph.csv \
  $SUMMARIES $DIR/atlas-extraction-site-cell-summaries.jsonl

node ./src/compute-extraction-site-as-cell-summaries.js \
  $DIR/atlas-dataset-graph.csv \
  $COLLISIONS $DIR/atlas-as-cell-summaries.jsonl \
  $DIR/atlas-extraction-site-as-cell-summaries.jsonl

node ./src/compute-extraction-site-as-cell-summaries.js \
  $DIR/test-dataset-graph.csv \
  $COLLISIONS \
  $DIR/atlas-as-cell-summaries.jsonl \
  $DIR/test-atlas-extraction-site-as-cell-summaries.jsonl

if [ "$COMPUTE_LQ" == "true" ]; then
  node ./src/compute-extraction-site-cell-summaries.js \
    $DIR/atlas-lq-dataset-graph.csv \
    $SUMMARIES $DIR/atlas-lq-extraction-site-cell-summaries.jsonl

  node ./src/compute-extraction-site-as-cell-summaries.js \
    $DIR/atlas-lq-dataset-graph.csv \
    $COLLISIONS \
    $DIR/atlas-lq-as-cell-summaries.jsonl \
    $DIR/atlas-lq-extraction-site-as-cell-summaries.jsonl

  node ./src/compute-extraction-site-as-cell-summaries.js \
    $DIR/test-dataset-graph.csv \
    $COLLISIONS \
    $DIR/atlas-lq-as-cell-summaries.jsonl \
    $DIR/test-atlas-lq-extraction-site-as-cell-summaries.jsonl
fi
