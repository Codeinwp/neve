#Generic setup
wp --allow-root media import /tmp/repo/neve/cypress/fixtures/image.jpg
wp --allow-root rewrite structure /%postname%/
