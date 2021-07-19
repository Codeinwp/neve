#!/usr/bin/env bash
export DOCKER_FILE=docker-compose.ci.yml
docker-compose -f $DOCKER_FILE down
docker volume prune --force
