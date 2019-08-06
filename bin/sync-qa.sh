#!/usr/bin/env bash

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

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist/ "$DEMO_THEMEISLE_USER@$DEMO_THEMEISLE_HOST:$QA_ROOT/wp-content/themes"
