#!/usr/bin/env bash

export DOCKER_FILE=docker-compose.travis.yml

npm install
npm run-script build
composer install --no-dev

docker-compose -f $DOCKER_FILE up -d
sleep 10
docker-compose -f $DOCKER_FILE run --rm cli wp core install --url=http://localhost:8055 --title=SandboxSite --admin_user=admin --admin_email=admin@admin.com
docker-compose -f $DOCKER_FILE run --rm -u root cli chmod 0777 -R /var/www/html
docker-compose -f $DOCKER_FILE run --rm cli wp site empty --yes
docker-compose -f $DOCKER_FILE run --rm cli wp theme mod remove --all
docker-compose -f $DOCKER_FILE run --rm cli wp theme activate neve
docker-compose -f $DOCKER_FILE run --rm cli wp themeisle-si list
docker-compose -f $DOCKER_FILE run --rm cli wp themeisle-si import $1

curl -s 'http://localhost:8055' >  /dev/null

npm run backstop:test -- --filter=$1\$ || export BUILD_EXIT=1

docker-compose -f $DOCKER_FILE down

exit $BUILD_EXIT
