
INPUT_DIR="./input-data"
OUTPUT_DIR="./output-data"
RAW_DIR="./raw-data"

export PATH=./node_modules/.bin:${PATH}

source input-data/v0.5.1/config.sh

mkdir -p $RAW_DIR/$VERSION
mkdir -p $INPUT_DIR/$VERSION
mkdir -p $OUTPUT_DIR/$VERSION

JAVA_OPTS="-Xms2g -Xmx32g"
