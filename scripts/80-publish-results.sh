#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION
OUT=$OUTPUT_DIR/$VERSION

mkdir -p $OUT

cp $DIR/atlas-enriched-dataset-graph.jsonld $OUT
cp $DIR/atlas-as-cell-summaries.jsonld $OUT

if [ "$COMPUTE_LQ" == "true" ]; then
  cp $DIR/atlas-lq-enriched-dataset-graph.jsonld $OUT
  cp $DIR/atlas-lq-as-cell-summaries.jsonld $OUT
fi

cp $DIR/non-atlas-dataset-graph.csv $OUT

cp -r $DIR/reports $OUT

echo `date` > $OUT/CREATION_DATE
