wp --allow-root rewrite structure /%postname%/
wp --allow-root plugin is-installed wordpress-importer && wp --allow-root plugin update wordpress-importer ||  wp --allow-root plugin install wordpress-importer
##Setup core content.
wp --allow-root plugin activate wordpress-importer
wp --allow-root plugin is-installed woocommerce && wp --allow-root plugin update woocommerce ||  wp --allow-root plugin install woocommerce
wp --allow-root plugin activate woocommerce
curl -O https://raw.githubusercontent.com/WPTT/theme-unit-test/master/themeunittestdata.wordpress.xml
wp --allow-root import ./themeunittestdata.wordpress.xml --authors=skip  --skip=image_resize

#Setup content for woo
curl -O https://raw.githubusercontent.com/woocommerce/woocommerce/master/sample-data/sample_products.xml
wp --allow-root import ./sample_products.xml --authors=skip --skip=image_resize