#!/usr/bin/env bash

BUILD_VERSION=$(node -pe "require('./package.json').version")
export BUILD_VERSION
BUILD_NAME=$(node -pe "require('./package.json').name")
export BUILD_NAME

if [ ! -d "dist" ]; then
  mkdir "dist"
fi

if [ ! -d "artifact" ]; then
  mkdir "artifact"
fi

rsync -rc --exclude-from ".distignore" "./" "dist/neve"

cd dist
zip -r "../artifact/neve" "./neve/"
cd -
