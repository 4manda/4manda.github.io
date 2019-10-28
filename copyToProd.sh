#!/bin/bash

set -ex

echo "[INFO] Copying build files to dist/prod";

rm -r ./dist/prod/* && cp -r ./build/* ./dist/prod/;

set +x;

echo "[INFO] Done";
