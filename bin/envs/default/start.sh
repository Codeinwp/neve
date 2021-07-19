#Generic setup
wp --allow-root media import ${NEVE_REPO_PATH}/e2e-tests/cypress/fixtures/image.jpg
wp --allow-root rewrite structure /%postname%/
