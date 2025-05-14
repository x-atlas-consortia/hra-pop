#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

MERGED=$RAW_DIR/$VERSION/registrations-dataset-graph.jsonl
COLLISIONS=$RAW_DIR/$VERSION/collisions.jsonl
CORRIDORS=$RAW_DIR/$VERSION/corridors.jsonl
DISTANCES=$RAW_DIR/$VERSION/euclidean-distances.ttl

node ./src/concatenate-jsonld.js $REGISTRATIONS $MERGED
node ./src/get-collisions.js $MERGED $COLLISIONS
node ./src/get-corridors.js $MERGED $CORRIDORS
node ./src/compute-extraction-site-distances.js $MERGED $DISTANCES
