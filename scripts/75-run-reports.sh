#!/bin/bash
source constants.sh
shopt -s extglob
# set -ev

DIR=$RAW_DIR/$VERSION
FILTER="$1"

node ./src/run-reports-blazegraph.js $DIR/blazegraph.jnl $DIR/reports "$COMPUTE_LQ" $FILTER

# Create Level Mapping ASCT+B tables
mkdir -p $DIR/asctb-tables
for f in $DIR/reports/*/*-level-mapping.csv; do
  table=$DIR/asctb-tables/$(basename ${f%.csv})-table.csv
  src/mapping-table.sh $f $table
done
