wp --allow-root plugin is-installed wordpress-importer && wp --allow-root plugin update wordpress-importer ||  wp --allow-root plugin install wordpress-importer
##Setup core content.
wp --allow-root plugin activate wordpress-importer
curl -O https://wpcom-themes.svn.automattic.com/demo/theme-unit-test-data.xml
wp --allow-root import ./theme-unit-test-data.xml --authors=skip  --skip=image_resize

#Generic setup
wp --allow-root rewrite structure /%postname%/
wp --allow-root menu location assign all-pages primary
