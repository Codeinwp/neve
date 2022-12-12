php -d memory_limit=1024M "$(which wp)" package install cristian-ungureanu/wp-cli-themecheck:dev-master#fcefc156d1eb7101d36b216e7c830ad7c2ade4b4 --allow-root
wp plugin install theme-check --activate --allow-root
wp themecheck --theme=neve --no-interactive --allow-root
