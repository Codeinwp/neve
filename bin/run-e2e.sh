#!/usr/bin/env bash
export DOCKER_FILE=docker-compose.yml

# Install composer dependencies.
composer install --no-dev

# Bring stack up.
docker-compose -f $DOCKER_FILE up -d
sleep 15

# Setup WP Core.
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp core install --url=http://localhost:8080 --title=SandboxSite --admin_user=admin --admin_password=admin --admin_email=admin@admin.com
# Activate theme.
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp theme activate neve

# Run Cypress
#npm run cypress:open
npm run cypress:run || exit 1

# Bring stack down.
docker-compose -f $DOCKER_FILE down
