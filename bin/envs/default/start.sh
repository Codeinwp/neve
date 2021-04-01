#Generic setup
wp --allow-root media import /tmp/repo/neve/e2e-tests/cypress/fixtures/image.jpg
wp --allow-root rewrite structure /%postname%/

wp --allow-root plugin install feedzy-rss-feeds
wp --allow-root plugin install weglot --activate