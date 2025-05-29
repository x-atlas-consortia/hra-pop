#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION
OUT=$OUTPUT_DIR/$VERSION

mkdir -p $OUT

node src/pretty-jsonld.js ccf-context.jsonld $DIR/full-dataset-graph.jsonl $OUT/full-dataset-graph.jsonld
node src/pretty-jsonld.js ccf-context.jsonld $DIR/atlas-dataset-graph.jsonl $OUT/atlas-dataset-graph.jsonld
node src/pretty-jsonld.js ccf-context.jsonld $DIR/atlas-enriched-dataset-graph.jsonl $OUT/atlas-enriched-dataset-graph.jsonld
node src/pretty-jsonld.js ccf-context.jsonld $DIR/atlas-as-cell-summaries.jsonl $OUT/atlas-as-cell-summaries.jsonld

if [ "$COMPUTE_LQ" == "true" ]; then
  node src/pretty-jsonld.js ccf-context.jsonld $DIR/atlas-lq-enriched-dataset-graph.jsonl $OUT/atlas-lq-enriched-dataset-graph.jsonld
  node src/pretty-jsonld.js ccf-context.jsonld $DIR/atlas-lq-as-cell-summaries.jsonl $OUT/atlas-lq-as-cell-summaries.jsonld
fi

cp $DIR/non-atlas-dataset-graph.csv $OUT
cp $DIR/all-dataset-graph.csv $OUT

cp -r $DIR/reports $OUT
cp -r $DIR/corridors $OUT

node src/gen-report-markdown.js $OUT/REPORTS.md queries $OUT/reports

for file in `find $OUT -name "*.*" -size +95M`; do
  zip -j ${file}.zip $file
  rm $file
done

CREATION_DATE=$(date)
echo "$CREATION_DATE" > $OUT/CREATION_DATE

node src/gen-readme.js $VERSION "$CREATION_DATE" $OUT/README.md
