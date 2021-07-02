wp --allow-root plugin install amp --activate
wp menu create sample-menu --allow-root
wp menu location assign sample-menu primary --allow-root
wp menu item add-post sample-menu 1 --title="Parent menu" --allow-root
wp menu item add-post sample-menu 1 --title="Submenu Item" --allow-root  --parent-id="$(wp menu item list sample-menu --allow-root --format=ids)"
wp --allow-root rewrite structure /%postname%/