#!/usr/bin/env bash


if [ -z "$BLACKFIRE_CLIENT_TOKEN" ]
then
      echo "Missing BLACKFIRE_CLIENT_TOKEN variable. Bail..."
      exit 1;
fi
if [ -z "$BLACKFIRE_CLIENT_ID" ]
then
      echo "Missing BLACKFIRE_CLIENT_ID variable. Bail..."
      exit 1;
fi
if [ -z "$BLACKFIRE_SERVER_ID" ]
then
      echo "Missing BLACKFIRE_SERVER_ID variable. Bail..."
      exit 1;
fi
if [ -z "$BLACKFIRE_SERVER_TOKEN" ]
then
      echo "Missing BLACKFIRE_SERVER_TOKEN variable. Bail..."
      exit 1;
fi

# Generate the dist folder used in testing.

if [ ! -d "dist" ]; then
  echo "Distribution files ( /dist folder ) are not present. Creating it ... "
  npm install
  composer install --no-dev
  npm run-script build
  npm run-script dist
fi

BLACKFIRE_TEST_NAME="Local test for $(hostname)";

if [ -n "$TRAVIS_JOB_NUMBER" ]
then
      BLACKFIRE_TEST_NAME="Travis job: #$TRAVIS_JOB_NUMBER";
fi

cd blackfire;

docker-compose up -d --build
sleep 10

docker-compose run --user root --rm cli wp core install  --url=http://wordpress --title=BlackfireTest --admin_email=admin@admin.com --admin_user=admin --admin_password=admin  --skip-email --allow-root
docker-compose run --user root --rm cli wp theme activate neve --allow-root
docker-compose run --rm --user root cli wp config set WP_SITEURL '"http://" . $_SERVER["HTTP_HOST"]'  --type=constant --add --raw --allow-root
docker-compose run --rm --user root cli wp config set WP_HOME '"http://" . $_SERVER["HTTP_HOST"]'  --type=constant --add --raw --allow-root

BLACKFIRE_OUTPUT=$(docker-compose exec blackfire blackfire --samples 10 --title "$BLACKFIRE_TEST_NAME:home" curl http://wordpress)
BLACKFIRE_OUTPUT="$BLACKFIRE_OUTPUT"$(docker-compose exec blackfire blackfire --samples 10 --title "$BLACKFIRE_TEST_NAME:sample page" curl http://wordpress/sample-page)
BLACKFIRE_OUTPUT="$BLACKFIRE_OUTPUT"$(docker-compose exec blackfire blackfire --samples 10 --title "$BLACKFIRE_TEST_NAME:archive" curl http://wordpress/category/uncategorized/)

echo "$BLACKFIRE_OUTPUT"

if [[ $BLACKFIRE_OUTPUT == *"failing"* ]]; then
  echo "BLACKFIRE test is failing...";
  exit 1;
fi

docker-compose down

exit 0;



