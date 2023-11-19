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
CCF_OWL=https://ccf-ontology.hubmapconsortium.org/v2.2.1/ccf.owl

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

# Atlas LQ
run_jsonld $DIR/atlas-lq-enriched-dataset-graph.jsonld $HRA_POP_LQ
run_jsonld $DIR/atlas-lq-as-cell-summaries.jsonld $HRA_POP_LQ

# Test Data
run_jsonld $DIR/test-atlas-enriched-dataset-graph.jsonld "${HRA_POP}#test-data"
run_jsonld $DIR/test-atlas-lq-enriched-dataset-graph.jsonld "${HRA_POP_LQ}#test-data"

# Precomputed Atlas distances and similarities
run_jsonld $DIR/euclidean-distances.jsonld "${HRA_POP}#distances"
blazegraph-runner load --journal=$JNL "--graph=${HRA_POP}#similarities" $DIR/atlas-cell-summary-similarities.ttl

# Precomputed Atlas LQ distances and similarities
run_jsonld $DIR/euclidean-distances.jsonld "${HRA_POP_LQ}#distances"
blazegraph-runner load --journal=$JNL "--graph=${HRA_POP_LQ}#similarities" $DIR/atlas-lq-cell-summary-similarities.ttl

# Import CCF.OWL
curl -s -L $CCF_OWL > $DIR/ccf.owl
blazegraph-runner load --journal=$JNL "--graph=${CCF}" $DIR/ccf.owl
