php -d memory_limit=1024M "$(which wp)" package install Codeinwp/wp-cli-themecheck --allow-root
wp plugin install theme-check --activate --allow-root
wp themecheck --theme=neve --no-interactive --allow-root
