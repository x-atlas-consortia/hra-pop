#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

node ./src/compute-cell-summary-similarities.js $DIR/atlas-as-cell-summaries.jsonld \
  $DIR/cell-summaries.jsonld $DIR/atlas-extraction-site-cell-summaries.jsonld \
  $DIR/atlas-cell-summary-similarities-local.ttl

if [ "$COMPUTE_LQ" == "true" ]; then
  node ./src/compute-cell-summary-similarities.js $DIR/atlas-lq-as-cell-summaries.jsonld \
    $DIR/cell-summaries.jsonld $DIR/atlas-lq-extraction-site-cell-summaries.jsonld \
    $DIR/atlas-lq-cell-summary-similarities-local.ttl
fi
