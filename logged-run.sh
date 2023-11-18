#!/bin/bash
source constants.sh

LOG=$OUTPUT_DIR/$VERSION/log.txt
rm $OUTPUT_DIR/$VERSION/*
rm -rf $RAW_DIR/$VERSION/*

time ./run.sh &> $LOG
