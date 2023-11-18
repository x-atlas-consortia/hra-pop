#!/bin/bash
source constants.sh

LOG=$OUTPUT_DIR/$VERSION/log.txt

time ./run.sh &> $LOG
