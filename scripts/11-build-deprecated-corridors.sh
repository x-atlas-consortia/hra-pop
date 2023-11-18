#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

if [ "${DEPRECATED_CORRIDORS}" ]; then
  node ./src/gen-deprecated-corridors.js $DEPRECATED_CORRIDORS
fi
