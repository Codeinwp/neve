#!/usr/bin/env bash

docker run \
  --user root \
  --rm \
  --volume  "$(pwd):/var/www/html/neve" \
  wordpress:cli bash -c 'php -d memory_limit=1024M "$(which wp)" i18n make-pot ./neve/ ./neve/languages/neve.pot --headers={\"Last-Translator\":\"friends@themeisle.com\"\,\"Project-Id-Version\":\"Neve\"\,\"Report-Msgid-Bugs-To\":\"https://github.com/Codeinwp/neve/issues\"\} --allow-root --exclude=dist,src,e2e-tests '
