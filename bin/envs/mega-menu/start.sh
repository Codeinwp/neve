wp --allow-root plugin is-installed wordpress-importer && wp --allow-root plugin update wordpress-importer ||  wp --allow-root plugin install wordpress-importer
##Setup core content.
wp --allow-root plugin activate wordpress-importer
curl -O https://gist.githubusercontent.com/abaicus/371542fbe92a27a88b176b0ed196094c/raw/f888b08fe6fc19cf78b0b73acc19a77a12a5c2a8/mega-menu.xml
wp --allow-root import ./mega-menu.xml --authors=skip  --skip=image_resize

#Generic setup
wp --allow-root rewrite structure /%postname%/
wp --allow-root menu location assign mega-menu primary
