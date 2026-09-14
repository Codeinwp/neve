#!/usr/bin/env bash
# CI environment for the accessibility-ready e2e suite.
# Same base as sample-data, plus deterministic a11y fixtures.
DIR="$(dirname "$0")"

bash "$DIR/../sample-data/start.sh"

WP_CMD="wp --allow-root" bash "$DIR/fixtures.sh"
