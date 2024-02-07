#!/bin/bash
source constants.sh
shopt -s extglob
set -ev

DIR=$RAW_DIR/$VERSION
JNL=$DIR/blazegraph.jnl
rm -f $JNL

HRA_POP=https://purl.humanatlas.io/graph/hra-pop
HRA_POP_LQ=https://purl.humanatlas.io/graph/hra-pop-lq
HRA_POP_FULL=https://purl.humanatlas.io/ds-graph/hra-pop-full
CCF=https://purl.humanatlas.io/graph/ccf
CTANN_CROSSWALKS=https://purl.humanatlas.io/graph/ctann-crosswalks

run_ndjsonld() {
  QUADS=${1%.jsonld}.nq
  ndjsonld canonize $1 $QUADS -c ccf-context.jsonld 
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

# Test Data
run_jsonld $DIR/test-atlas-enriched-dataset-graph.jsonld "${HRA_POP}#test-data"

# Full Dataset
run_jsonld $DIR/full-dataset-graph.jsonld "${HRA_POP_FULL}"

# Precomputed Atlas distances and similarities
blazegraph-runner load --journal=$JNL "--graph=${HRA_POP}#distances" $DIR/euclidean-distances.ttl
blazegraph-runner load --journal=$JNL "--graph=${HRA_POP}#similarities" $DIR/atlas-cell-summary-similarities.ttl
blazegraph-runner load --journal=$JNL "--graph=${HRA_POP}#as-as-sims" $DIR/atlas-as-as-cell-summary-similarities.ttl

if [ "$COMPUTE_LQ" == "true" ]; then
  # Atlas LQ
  run_jsonld $DIR/atlas-lq-enriched-dataset-graph.jsonld $HRA_POP_LQ
  run_jsonld $DIR/atlas-lq-as-cell-summaries.jsonld $HRA_POP_LQ

  # Test Data LQ
  run_jsonld $DIR/test-atlas-lq-enriched-dataset-graph.jsonld "${HRA_POP_LQ}#test-data"

  # Precomputed Atlas LQ distances and similarities
  blazegraph-runner load --journal=$JNL "--graph=${HRA_POP_LQ}#distances" $DIR/euclidean-distances.ttl
  blazegraph-runner load --journal=$JNL "--graph=${HRA_POP_LQ}#similarities" $DIR/atlas-lq-cell-summary-similarities.ttl
  blazegraph-runner load --journal=$JNL "--graph=${HRA_POP_LQ}#as-as-sims" $DIR/atlas-lq-as-as-cell-summary-similarities.ttl
fi

# Import CCF.OWL
curl -s $CCF -H "Accept: application/rdf+xml" > $DIR/ccf.owl
blazegraph-runner load --journal=$JNL "--graph=${CCF}" $DIR/ccf.owl

# Import ctann-crosswalks
curl -s $CTANN_CROSSWALKS -H "Accept: application/rdf+xml" > $DIR/ctann-crosswalks.xml
blazegraph-runner load --journal=$JNL "--graph=${CTANN_CROSSWALKS}" $DIR/ctann-crosswalks.xml
