#!/bin/bash
source constants.sh
shopt -s extglob
# set -ev

DIR=$RAW_DIR/$VERSION
FILTER="$1"

node ./src/run-reports-blazegraph.js $DIR/blazegraph.jnl $DIR/reports "$COMPUTE_LQ" $FILTER
