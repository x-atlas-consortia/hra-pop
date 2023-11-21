#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

if [ "${DEPRECATED_REGISTRATIONS}" ]; then
  node ./src/gen-deprecated-registrations.js $DEPRECATED_REGISTRATIONS
fi
