#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION
OUT=$OUTPUT_DIR/$VERSION

mkdir -p $OUT
rm -rf $OUT/*

cp $DIR/atlas-enriched-dataset-graph.jsonld $OUT
cp $DIR/atlas-as-cell-summaries.jsonld $OUT

cp $DIR/full-enriched-dataset-graph.jsonld $OUT
cp $DIR/full-as-cell-summaries.jsonld $OUT

cp $DIR/non-atlas-dataset-graph.csv $OUT

cp -r $DIR/reports $OUT

echo `date` > $OUT/CREATION_DATE
