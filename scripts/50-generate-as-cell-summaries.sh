#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

COLLISIONS=$DIR/collisions.jsonld
SUMMARIES=$DIR/cell-summaries.jsonld

node ./src/compute-as-cell-summaries.js \
  $DIR/atlas-dataset-graph.csv \
  $COLLISIONS \
  $SUMMARIES \
  $DIR/atlas-as-cell-summaries.jsonld

if [ "$COMPUTE_LQ" == "true" ]; then
  node ./src/compute-as-cell-summaries.js \
    $DIR/atlas-lq-dataset-graph.csv \
    $COLLISIONS \
    $SUMMARIES \
    $DIR/atlas-lq-as-cell-summaries.jsonld
fi

echo '{"@graph":[]}' > $DIR/test-as-cell-summaries.jsonld
