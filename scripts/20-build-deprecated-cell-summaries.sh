#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

if [ "${DEPRECATED_SPATIAL_CELL_SUMMARIES}" != "" ]; then
  node ./src/gen-deprecated-cell-summaries-spatial.js $DEPRECATED_SPATIAL_CELL_SUMMARIES
fi

if [ "${DEPRECATED_BULK_CELL_SUMMARIES}" != "" ]; then
  node ./src/gen-deprecated-cell-summaries-bulk.js $DEPRECATED_BULK_CELL_SUMMARIES
fi
