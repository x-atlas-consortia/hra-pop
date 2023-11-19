#!/bin/bash
source constants.sh

LOG=$OUTPUT_DIR/$VERSION/log.txt
rm $OUTPUT_DIR/$VERSION/*
rm -rf $RAW_DIR/$VERSION/*

time bash -c "time ./run.sh 2>&1" | tee $LOG
