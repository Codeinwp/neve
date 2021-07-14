php -d memory_limit=1024M "$(which wp)" package install anhskohbo/wp-cli-themecheck:dev-master#a53732bf056ee446a4b975d20914d0469e16ea59 --allow-root
wp plugin install theme-check --activate --allow-root
wp themecheck --theme=neve --no-interactive --allow-root
