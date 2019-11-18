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
docker-compose -f $DOCKER_FILE run --rm -u root wordpress chmod 0777 -R /var/www/html/wp-content/
# Activate theme.
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp theme activate neve
# Install necessary plugins
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp plugin install amp --activate
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp plugin install wordpress-importer --activate
# Configure amp
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp option patch update amp-options theme_support 'transitional'
# Import theme unit test data
docker-compose -f $DOCKER_FILE run --rm wordpress curl -O https://wpcom-themes.svn.automattic.com/demo/theme-unit-test-data.xml
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp import ./theme-unit-test-data.xml --authors=create
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp rewrite structure /%postname%/
# Set primary menu
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp menu location assign all-pages primary
# Update core.
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp core update

docker-compose -f $DOCKER_FILE run --rm wordpress bash wp core update-db
docker-compose -f $DOCKER_FILE run --rm wordpress bash wp option admin_email_lifespan 1763469022

export BUILD_INFO_MESSAGE="${BUILD_SPEC} \n ${COMMIT_INFO_MESSAGE}"
# Run Cypress
#npm run cypress:open
npm run cypress:run || exit 1

# Bring stack down.
docker-compose -f $DOCKER_FILE down
