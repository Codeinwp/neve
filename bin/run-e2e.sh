#!/usr/bin/env bash
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
if [ ! -n "$ZIP_URL" ]
then
	# Install dependencies.
	composer install --no-dev
	yarn install --frozen-lockfile
	yarn run dist
fi
export DOCKER_FILE=docker-compose.ci.yml

# Bring stack up.
docker-compose -f $DOCKER_FILE up -d
sleep 15
# Run setup
docker-compose -f $DOCKER_FILE run  --rm -u root cli /var/www/html/bin/cli-setup.sh
