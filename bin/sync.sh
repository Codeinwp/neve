#!/usr/bin/env bash
if [ -z "$1" ]
  then
    echo "No environment provided..."
    exit 1
fi

LOCATION="$1"

if [[ "$LOCATION" != "qa" && "$LOCATION" != "import" ]];
then
  echo "No valid environment provided"
  exit 1
fi


if [ ! -d "dist" ]; then
  echo "Distribution files ( /dist folder ) are not present. Creating it ... "
  npm install
  composer install --no-dev --no-interaction --ignore-platform-reqs
  npm run-script build
  npm run-script dist
fi

openssl aes-256-cbc -K $encrypted_c0a6f152ac27_key -iv $encrypted_c0a6f152ac27_iv -in themeisle.enc -out /tmp/key -d

if [ ! -f  "/tmp/key" ]; then
  echo "Fails to decrypt key"
  exit 1
fi

eval "$(ssh-agent -s)"
chmod 600 /tmp/key
ssh-add /tmp/key

if [ "$LOCATION" == "qa" ]; then
  rsync -e "ssh -o StrictHostKeyChecking=no" -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist/ "$DEMO_THEMEISLE_USER@$DEMO_THEMEISLE_HOST:$QA_ROOT/wp-content/themes"
fi

if [ "$LOCATION" == "import" ]; then
  rsync -e "ssh -o StrictHostKeyChecking=no" -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist/ "$DEMO_THEMEISLE_USER@$DEMO_THEMEISLE_HOST:$IMPORT_ROOT/wp-content/themes"
fi
