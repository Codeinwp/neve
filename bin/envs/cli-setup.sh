#!/usr/bin/env bash
set -e
NEVE_LOCATION=$1
WP_VERSION=$2
WP_ENV=$3
WP_CACHED_ENV="${WP_SITE_PATH}wp-content/${WP_ENV}.sql"
SKIP_CACHE=$4
export NEVE_REPO_PATH=${NEVE_REPO_PATH:=/tmp/repo/neve}
SITE_URL="${BASE_URL:=http://localhost:8080}"


init_environment(){
	#Setup core
	wp --allow-root core update --version=$WP_VERSION
	wp --allow-root core update-db

	if [ $NEVE_LOCATION != "neve" ]; then
		rm -rf  /var/www/html/wp-content/themes/*
		chmod 0777 -R /var/www/html/wp-content/
	fi
	echo "Installing Neve theme from $NEVE_LOCATION"
	wp --allow-root theme install --activate $NEVE_LOCATION
	wp --allow-root option update fresh_site 0
  echo "Installing Theme API Plugin"
  wp --allow-root plugin install https://github.com/cristian-ungureanu/wp-thememods-api/archive/refs/heads/main.zip --force --activate
  wp --allow-root plugin install https://gist.github.com/cristian-ungureanu/ecae7d531e8fdaeb6e18a745b9544bf5/archive/29884d432f14287c280ab884ebbadb4cf6506c43.zip --force --activate
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

if ! wp core is-installed --allow-root; then
	wp  --allow-root core install --url="$SITE_URL" --title=SandboxSite --admin_user=admin --admin_password=admin --admin_email=admin@admin.com
	mkdir -p /var/www/html/wp-content/uploads
	rm -rf /var/www/html/wp-content/plugins/akismet
fi


WP_SITE_PATH=$(wp eval 'echo ABSPATH;' --allow-root);


init_environment

bash ${NEVE_REPO_PATH}/bin/envs/$WP_ENV/start.sh

wp --allow-root cache flush

if [ $SKIP_CACHE == "no" ]; then
	wp --allow-root db export $WP_CACHED_ENV
fi
