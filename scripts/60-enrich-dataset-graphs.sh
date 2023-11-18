#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION

node ./src/enrich-dataset-graph.js $DIR/atlas-dataset-graph.jsonld $DIR/collisions.jsonld $DIR/corridors.jsonld $DIR/cell-summaries.jsonld $DIR/atlas-extraction-site-cell-summaries.jsonld $DIR/atlas-enriched-dataset-graph.jsonld
node ./src/enrich-dataset-graph.js $DIR/full-dataset-graph.jsonld $DIR/collisions.jsonld $DIR/corridors.jsonld $DIR/cell-summaries.jsonld $DIR/full-extraction-site-cell-summaries.jsonld $DIR/full-enriched-dataset-graph.jsonld
