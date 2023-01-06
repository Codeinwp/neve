#!/usr/bin/env bash

yarn dist

docker run \
  --user root \
  --rm \
  --volume  "$(pwd):/var/www/html/neve" \
  wordpress:cli bash -c 'php -d memory_limit=1024M "$(which wp)" i18n make-pot ./neve/dist ./neve/languages/neve.pot --headers={\"Last-Translator\":\"friends@themeisle.com\"\,\"Project-Id-Version\":\"Neve\"\,\"Report-Msgid-Bugs-To\":\"https://github.com/Codeinwp/neve/issues\"\} --allow-root '
