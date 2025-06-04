
INPUT_DIR="./input-data"
OUTPUT_DIR="./output-data"
RAW_DIR="./raw-data"

export API_ENDPOINT=${API_ENDPOINT:-"https://apps.humanatlas.io/api/"}
export PATH=./node_modules/.bin:${PATH}
export NODE_OPTIONS="--max-old-space-size=192000"

source input-data/v1.0/config.sh

export VERSION

mkdir -p $RAW_DIR/$VERSION
mkdir -p $INPUT_DIR/$VERSION
mkdir -p $OUTPUT_DIR/$VERSION

JAVA_OPTS="-Xms2g -Xmx64g"
