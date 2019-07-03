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

pip install --user awscli > /dev/null 2>&1

aws configure set aws_access_key_id $AWS_ACCESS_KEY
aws configure set aws_secret_access_key $AWS_SECRET_KEY
aws configure set default.region "us-east-1"

cd backstop/backstop_data && aws s3 sync . s3://$BACKSTOP_BUCKET/$TRAVIS_REPO_SLUG/$1/$TRAVIS_BUILD_NUMBER/$TRAVIS_JOB_NUMBER

echo -e "Link -> \e[32mhttp://backstop-reports.s3-website-us-east-1.amazonaws.com/$TRAVIS_REPO_SLUG/$1/$TRAVIS_BUILD_NUMBER/$TRAVIS_JOB_NUMBER/html_report/index.html"

exit $BUILD_EXIT
