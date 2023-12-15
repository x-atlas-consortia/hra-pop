#!/bin/bash
source constants.sh
shopt -s extglob
set -e

if [ ! -e "node_modules" ]; then
  npm ci
fi

# Install Blazegraph Runner
ENV="./node_modules/.bin"
if [ ! -e "$ENV/opt/blazegraph-runner" ]; then
  mkdir -p $ENV/opt
  BR=1.7
  wget -nv https://github.com/balhoff/blazegraph-runner/releases/download/v$BR/blazegraph-runner-$BR.tgz &&
    tar -zxf blazegraph-runner-$BR.tgz &&
    mv blazegraph-runner-$BR $ENV/opt/blazegraph-runner
  ln -s opt/blazegraph-runner/bin/blazegraph-runner $ENV/blazegraph-runner
  rm -f blazegraph-runner-$BR.tgz
fi
