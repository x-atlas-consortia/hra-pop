#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

node ./src/enrich-dataset-graph.js \
  $DIR/atlas-dataset-graph.jsonl \
  $DIR/collisions.jsonl \
  $DIR/corridors.jsonl $DIR/cell-summaries.jsonl \
  $DIR/atlas-extraction-site-cell-summaries.jsonl \
  $DIR/atlas-enriched-dataset-graph.jsonl

node ./src/enrich-dataset-graph.js \
  $DIR/test-dataset-graph.jsonl \
  $DIR/collisions.jsonl \
  $DIR/corridors.jsonl $DIR/cell-summaries.jsonl \
  $DIR/test-atlas-extraction-site-as-cell-summaries.jsonl \
  $DIR/test-atlas-enriched-dataset-graph.jsonl

if [ "$COMPUTE_LQ" == "true" ]; then
  node ./src/enrich-dataset-graph.js \
    $DIR/atlas-lq-dataset-graph.jsonl \
    $DIR/collisions.jsonl \
    $DIR/corridors.jsonl $DIR/cell-summaries.jsonl \
    $DIR/atlas-lq-extraction-site-cell-summaries.jsonl \
    $DIR/atlas-lq-enriched-dataset-graph.jsonl

  node ./src/enrich-dataset-graph.js \
    $DIR/test-dataset-graph.jsonl \
    $DIR/collisions.jsonl \
    $DIR/corridors.jsonl $DIR/cell-summaries.jsonl \
    $DIR/test-atlas-lq-extraction-site-as-cell-summaries.jsonl \
    $DIR/test-atlas-lq-enriched-dataset-graph.jsonl
fi
