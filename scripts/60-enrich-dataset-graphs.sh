#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

node ./src/enrich-dataset-graph.js \
  $DIR/atlas-dataset-graph.jsonld \
  $DIR/collisions.jsonld \
  $DIR/corridors.jsonld $DIR/cell-summaries.jsonld \
  $DIR/atlas-extraction-site-cell-summaries.jsonld \
  $DIR/atlas-enriched-dataset-graph.jsonld

node ./src/enrich-dataset-graph.js \
  $DIR/atlas-lq-dataset-graph.jsonld \
  $DIR/collisions.jsonld \
  $DIR/corridors.jsonld $DIR/cell-summaries.jsonld \
  $DIR/atlas-lq-extraction-site-cell-summaries.jsonld \
  $DIR/atlas-lq-enriched-dataset-graph.jsonld

node ./src/enrich-dataset-graph.js \
  $DIR/test-dataset-graph.jsonld \
  $DIR/collisions.jsonld \
  $DIR/corridors.jsonld $DIR/cell-summaries.jsonld \
  $DIR/test-atlas-extraction-site-as-cell-summaries.jsonld \
  $DIR/test-atlas-enriched-dataset-graph.jsonld

node ./src/enrich-dataset-graph.js \
  $DIR/test-dataset-graph.jsonld \
  $DIR/collisions.jsonld \
  $DIR/corridors.jsonld $DIR/cell-summaries.jsonld \
  $DIR/test-atlas-lq-extraction-site-as-cell-summaries.jsonld \
  $DIR/test-atlas-lq-enriched-dataset-graph.jsonld
