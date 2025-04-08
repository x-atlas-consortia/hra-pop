#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION
JNL=$DIR/blazegraph.jnl
rm -f $JNL

HRA=https://purl.humanatlas.io/collection/hra-api
HRA_POP=https://purl.humanatlas.io/graph/hra-pop
HRA_POP_LQ=https://purl.humanatlas.io/graph/hra-pop-lq
HRA_POP_FULL=https://purl.humanatlas.io/ds-graph/hra-pop-full
CTANN_CROSSWALKS=https://purl.humanatlas.io/graph/ctann-crosswalks

run_ndjsonld() {
  QUADS=${1%.jsonl}.nq
  ndjsonld canonize $1 $QUADS -c ccf-context.jsonld 
  blazegraph-runner load --journal=$JNL "--graph=${2}" $QUADS
}

run_jsonld() {
  QUADS=${1%.jsonl}.nq
  ./src/jsonld-to-nq.js ccf-context.jsonld $1 $QUADS
  blazegraph-runner load --journal=$JNL "--graph=${2}" $QUADS
}

# Atlas
run_ndjsonld $DIR/atlas-enriched-dataset-graph.jsonl $HRA_POP
run_ndjsonld $DIR/atlas-as-cell-summaries.jsonl $HRA_POP

# Test Data
run_ndjsonld $DIR/test-atlas-enriched-dataset-graph.jsonl "${HRA_POP}#test-data"

# Full Dataset
run_ndjsonld $DIR/full-dataset-graph.jsonl "${HRA_POP_FULL}"

# Precomputed Atlas distances and similarities
blazegraph-runner load --journal=$JNL "--graph=${HRA_POP}#distances" $DIR/euclidean-distances.ttl
blazegraph-runner load --journal=$JNL "--graph=${HRA_POP}#similarities" $DIR/atlas-cell-summary-similarities.ttl
blazegraph-runner load --journal=$JNL "--graph=${HRA_POP}#similarities-local" $DIR/atlas-cell-summary-similarities-local.ttl
blazegraph-runner load --journal=$JNL "--graph=${HRA_POP}#as-as-sims" $DIR/atlas-as-as-cell-summary-similarities.ttl

if [ "$COMPUTE_LQ" == "true" ]; then
  # Atlas LQ
  run_ndjsonld $DIR/atlas-lq-enriched-dataset-graph.jsonl $HRA_POP_LQ
  run_ndjsonld $DIR/atlas-lq-as-cell-summaries.jsonl $HRA_POP_LQ

  # Test Data LQ
  run_ndjsonld $DIR/test-atlas-lq-enriched-dataset-graph.jsonl "${HRA_POP_LQ}#test-data"

  # Precomputed Atlas LQ distances and similarities
  blazegraph-runner load --journal=$JNL "--graph=${HRA_POP_LQ}#distances" $DIR/euclidean-distances.ttl
  blazegraph-runner load --journal=$JNL "--graph=${HRA_POP_LQ}#similarities" $DIR/atlas-lq-cell-summary-similarities.ttl
  blazegraph-runner load --journal=$JNL "--graph=${HRA_POP_LQ}#as-as-sims" $DIR/atlas-lq-as-as-cell-summary-similarities.ttl
fi

# Import HRA
curl --retry 3 --retry-connrefused -s $HRA -H "Accept: application/rdf+xml" > $DIR/hra.owl
blazegraph-runner load --journal=$JNL "--graph=${HRA}" $DIR/hra.owl

# Import ctann-crosswalks
curl --retry 3 --retry-connrefused -s $CTANN_CROSSWALKS -H "Accept: text/turtle" > $DIR/ctann-crosswalks.ttl
blazegraph-runner load --journal=$JNL "--graph=${CTANN_CROSSWALKS}" $DIR/ctann-crosswalks.ttl
