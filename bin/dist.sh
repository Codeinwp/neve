#!/usr/bin/env bash

BUILD_VERSION=$(node -pe "require('./package.json').version")
export BUILD_VERSION
BUILD_NAME=$(node -pe "require('./package.json').name")
export BUILD_NAME

echo "::set-env name=BUILD_NAME::$BUILD_NAME"
echo "::set-env name=BUILD_VERSION::$BUILD_VERSION"

if [ ! -d "dist" ]; then
  mkdir "dist"
fi

if [ ! -d "artifact" ]; then
  mkdir "artifact"
fi

rsync -rc --exclude-from ".distignore" "./" "dist/$BUILD_NAME"

cd dist
zip -r "../artifact/$BUILD_NAME" "./$BUILD_NAME/"
cd -

