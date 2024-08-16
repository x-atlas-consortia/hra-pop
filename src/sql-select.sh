#!/bin/bash
set -e

SQL=$1
IN_CSV=$2
OUT_CSV=$3

cat $IN_CSV | duckdb :memory: -init "${SQL}" > ${OUT_CSV}.tmp
mv ${OUT_CSV}.tmp $OUT_CSV
