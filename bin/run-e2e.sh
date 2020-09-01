#!/usr/bin/env bash
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
WP_ENV=${1-default}
WP_VERSION=${2-latest}
ZIP_URL=${3-"/tmp/repo/neve/artifact/neve.zip"}
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

# Wait for mysql container to be ready.
while ! docker-compose exec mysql mysql  --user=root --password=wordpress -e "SELECT 1" >/dev/null 2>&1; do
    sleep 1
done



# Run setup
echo "Setting up environment $WP_ENV"

docker-compose -f $DOCKER_FILE run  --rm -u root cli bash -c "/var/www/html/bin/cli-setup.sh $ZIP_URL $WP_VERSION $WP_ENV"

