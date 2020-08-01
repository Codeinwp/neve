
wp  --allow-root core install --url=http://localhost:8080 --title=SandboxSite --admin_user=admin --admin_password=admin --admin_email=admin@admin.com
mkdir /var/www/html/wp-content/uploads
chmod 0777 -R /var/www/html/wp-content/
rm -rf /var/www/html/wp-content/plugins/akismet


#Setup core
wp --allow-root core update
wp --allow-root core update-db
wp --allow-root option update admin_email_lifespan 1763469022
#Setup Environment

wp --allow-root plugin is-installed wordpress-importer && wp --allow-root plugin update wordpress-importer ||  wp --allow-root plugin install wordpress-importer
wp --allow-root plugin is-installed amp && wp --allow-root plugin update amp ||  wp --allow-root plugin install amp

rm -rf  /var/www/html/wp-content/themes/*

if [ ! -n "$ZIP_URL" ]
then
	echo "Installing Neve theme from local artifact"
	wp --allow-root theme install --activate /var/www/html/wp-content/neve.zip
else
	echo "Installing Neve theme from $ZIP_URL"
	wp --allow-root theme install --activate $ZIP_URL
fi

wp --allow-root plugin activate --all

wp --allow-root option patch update amp-options theme_support 'transitional'

##Setup core content.
curl -O https://wpcom-themes.svn.automattic.com/demo/theme-unit-test-data.xml
wp --allow-root import ./theme-unit-test-data.xml --authors=skip  --skip=image_resize

#Generic setup
wp --allow-root rewrite structure /%postname%/
wp --allow-root menu location assign all-pages primary
