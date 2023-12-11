#!/bin/bash
source constants.sh
shopt -s extglob
# set -ev

DIR=$OUTPUT_DIR/$VERSION
FILTER="$1"

# SPARQL endpoint with hra-pop data loaded
SPARQL_ENDPOINT=https://lod.humanatlas.io/sparql

node ./src/run-reports-remote.js $SPARQL_ENDPOINT $DIR/reports "$COMPUTE_LQ" $FILTER
