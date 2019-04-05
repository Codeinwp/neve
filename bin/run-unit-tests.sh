#!/usr/bin/env bash
composer global require "phpunit/phpunit=4.8.*|5.7.*"
composer install --no-dev
bash bin/install-wp-tests.sh wordpress_test root '' localhost $WP_VERSION
phpunit --version
php -v
phpunit || exit 1
