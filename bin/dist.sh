#!/usr/bin/env bash
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
