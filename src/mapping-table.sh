#!/bin/bash

cat $1 | duckdb -init queries/mapping-table.sql > $2
