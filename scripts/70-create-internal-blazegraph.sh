#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION
JNL=$DIR/blazegraph.jnl
rm -f $JNL

HRA_POP=https://purl.humanatlas.io/graph/hra-pop
HRA_POP_LQ=https://purl.humanatlas.io/graph/hra-pop-lq
CCF=https://purl.humanatlas.io/graph/ccf

run_ndjsonld() {
  QUADS=${1%.jsonld}.nq
  zcat $1 | ndjsonld canonize - $QUADS -c ccf-context.jsonld 
  blazegraph-runner load --journal=$JNL "--graph=${2}" $QUADS
}

run_jsonld() {
  QUADS=${1%.jsonld}.nq
  jsonld canonize $1 > $QUADS
  blazegraph-runner load --journal=$JNL "--graph=${2}" $QUADS
}

# Atlas
run_jsonld $DIR/atlas-enriched-dataset-graph.jsonld $HRA_POP
run_jsonld $DIR/atlas-as-cell-summaries.jsonld $HRA_POP

# Atlas LQ
run_jsonld $DIR/full-enriched-dataset-graph.jsonld $HRA_POP_LQ
run_jsonld $DIR/full-as-cell-summaries.jsonld $HRA_POP_LQ

# Precomputed Atlas distances and similarities
#run_jsonld $DIR/euclidean-distances.jsonld "${HRA_POP}#distances"
#run_ndjsonld $DIR/atlas-cell-summary-similarities.jsonl.gz "${HRA_POP}#similarities"

# Precomputed Atlas LQ distances and similarities
#run_jsonld $DIR/euclidean-distances.jsonld "${HRA_POP_LQ}#distances"
#run_ndjsonld $DIR/full-cell-summary-similarities.jsonl.gz "${HRA_POP_LQ}#similarities"

# Import CCF.OWL
curl -s -H "Accept: text/turtle" -L $CCF > $DIR/ccf.ttl
blazegraph-runner load --journal=$JNL "--graph=${CCF}" $DIR/ccf.ttl
