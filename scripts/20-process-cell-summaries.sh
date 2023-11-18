#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

MERGED=$RAW_DIR/$VERSION/cell-summaries.jsonld
node ./src/concatenate-jsonld.js $CELL_SUMMARIES $MERGED
