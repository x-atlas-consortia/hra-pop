#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION
FILTER="$1"

# SPARQL endpoint with hra-tpop data loaded
SPARQL_ENDPOINT=https://lod.humanatlas.io/sparql
# SPARQL_ENDPOINT=https://ukiemb6svh.us-east-2.awsapprunner.com/blazegraph/namespace/kb/sparql
# SPARQL_ENDPOINT=http://localhost:8080/blazegraph/namespace/kb/sparql

node ./src/run-reports.js $SPARQL_ENDPOINT $RAW_DIR/$VERSION/reports $FILTER
