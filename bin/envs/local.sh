#!/usr/bin/env bash
ENV="${1:-default}"
NEVE_REPO_PATH=$(pwd) bash $(pwd)/bin/envs/cli-setup.sh neve latest $ENV yes
