#!/usr/bin/env bash

# Install dependencies.
npm install --only=dev --prefix ./cypress/
composer install --no-dev

export DOCKER_FILE=docker-compose.yml

# Bring stack up.
docker-compose -f $DOCKER_FILE up -d
sleep 15

# Setup WP Core.
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp core install --url=http://localhost:8080 --title=SandboxSite --admin_user=admin --admin_password=admin --admin_email=admin@admin.com
# Set up permissions.
docker-compose -f $DOCKER_FILE run --rm -u root wordpress mkdir /var/www/html/wp-content/uploads
docker-compose -f $DOCKER_FILE run --rm -u root wordpress chmod 0777 -R /var/www/html/wp-content/uploads
# Activate theme.
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp theme activate neve
# Update core.
#docker-compose -f $DOCKER_FILE run --rm wordpress bash wp theme mod remove --all
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp core update

# Run Cypress
#npm run cypress:open
npm run cypress:run || exit 1

# Bring stack down.
docker-compose -f $DOCKER_FILE down
