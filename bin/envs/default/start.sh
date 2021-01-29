#Generic setup
wp --allow-root media import /tmp/repo/neve/cypress/fixtures/image.jpg
wp --allow-root rewrite structure /%postname%/
wp --allow-root plugin is-installed templates-patterns-collection  && wp --allow-root plugin update templates-patterns-collection  ||  wp --allow-root plugin install templates-patterns-collection 
wp --allow-root plugin activate templates-patterns-collection 