NEVE_LOCATION=$1
WP_VERSION=$2
WP_ENV=$3
WP_CACHED_ENV="/var/www/html/wp-content/${WP_ENV}.sql"
SKIP_CACHE=$4

init_environment(){
	#Setup core
	wp --allow-root core update --version=$WP_VERSION
	wp --allow-root core update-db
	rm -rf  /var/www/html/wp-content/themes/*
	chmod 0777 -R /var/www/html/wp-content/
  chown -R www-data:www-data /var/www
  find /var/www/ -type d -exec chmod 0755 {} \;
  find /var/www/ -type f -exec chmod 644 {} \;
	echo "Installing Neve theme from $NEVE_LOCATION"
	wp --allow-root theme install --activate $NEVE_LOCATION
	wp --allow-root option update fresh_site 0
  echo "Installing Theme API Plugin"
  wp --allow-root plugin install https://github.com/Codeinwp/wp-thememods-api/archive/main.zip --force --activate
  echo "Installing JWT Auth Plugin"
  wp --allow-root plugin install api-bearer-auth --force --activate
}


if [ -f $WP_CACHED_ENV ] && [ $SKIP_CACHE == "no" ]; then
    echo "Database exists."
    wp --allow-root db import  $WP_CACHED_ENV
    init_environment
		wp --allow-root cache flush
		wp --allow-root transient delete --all
		wp --allow-root transient delete --all --network
    exit 0;
fi

wp  --allow-root core install --url=http://localhost:8080 --title=SandboxSite --admin_user=admin --admin_password=admin --admin_email=admin@admin.com
mkdir -p /var/www/html/wp-content/uploads
rm -rf /var/www/html/wp-content/plugins/akismet

init_environment


bash /var/www/html/bin/envs/$WP_ENV/start.sh

wp --allow-root cache flush

if [ $SKIP_CACHE == "no" ]; then
	wp --allow-root db export $WP_CACHED_ENV
fi
