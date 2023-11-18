#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

COLLISIONS=$DIR/collisions.jsonld
SUMMARIES=$DIR/cell-summaries.jsonld

node ./src/compute-extraction-site-cell-summaries.js \
  $DIR/atlas-dataset-graph.csv \
  $SUMMARIES $DIR/atlas-extraction-site-cell-summaries.jsonld

node ./src/compute-extraction-site-cell-summaries.js \
  $DIR/atlas-lq-dataset-graph.csv \
  $SUMMARIES $DIR/atlas-lq-extraction-site-cell-summaries.jsonld

node ./src/compute-extraction-site-as-cell-summaries.js \
  $DIR/atlas-dataset-graph.csv \
  $COLLISIONS $DIR/atlas-as-cell-summaries.jsonld \
  $DIR/atlas-extraction-site-as-cell-summaries.jsonld

node ./src/compute-extraction-site-as-cell-summaries.js \
  $DIR/atlas-lq-dataset-graph.csv \
  $COLLISIONS \
  $DIR/atlas-lq-as-cell-summaries.jsonld \
  $DIR/atlas-lq-extraction-site-as-cell-summaries.jsonld

node ./src/compute-extraction-site-as-cell-summaries.js \
  $DIR/test-dataset-graph.csv \
  $COLLISIONS \
  $DIR/test-as-cell-summaries.jsonld \
  $DIR/test-extraction-site-as-cell-summaries.jsonld
