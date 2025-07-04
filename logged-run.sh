#!/bin/bash
source constants.sh

LOG=$OUTPUT_DIR/$VERSION/log.txt
rm -r $OUTPUT_DIR/$VERSION/*
rm -rf $RAW_DIR/$VERSION/*

time bash -c "time ./run.sh --from 00 --to 99 2>&1" | tee $LOG
