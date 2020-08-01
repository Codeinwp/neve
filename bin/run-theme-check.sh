#!/usr/bin/env bash

# Install dependencies.
composer install --no-dev
yarn run dist

export DOCKER_FILE=docker-compose.ci.yml

# Bring stack up.
docker-compose -f $DOCKER_FILE up -d
sleep 15

# Run setup
docker-compose -f $DOCKER_FILE run --rm -u root cli /var/www/html/bin/install-theme-check.sh
