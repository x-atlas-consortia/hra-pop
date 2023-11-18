#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

COLLISIONS=$DIR/collisions.jsonld
SUMMARIES=$DIR/cell-summaries.jsonld

node ./src/compute-extraction-site-cell-summaries.js $DIR/atlas-dataset-graph.csv $SUMMARIES $DIR/atlas-extraction-site-cell-summaries.jsonld
node ./src/compute-extraction-site-cell-summaries.js $DIR/full-dataset-graph.csv $SUMMARIES $DIR/full-extraction-site-cell-summaries.jsonld

node ./src/compute-extraction-site-as-cell-summaries.js $DIR/atlas-dataset-graph.csv $COLLISIONS $DIR/atlas-as-cell-summaries.jsonld $DIR/atlas-extraction-site-as-cell-summaries.jsonld
node ./src/compute-extraction-site-as-cell-summaries.js $DIR/full-dataset-graph.csv $COLLISIONS $DIR/full-as-cell-summaries.jsonld $DIR/full-extraction-site-as-cell-summaries.jsonld
