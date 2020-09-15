<?php
/**
 * Gallery with title and button.
 *
 * @package Neve
 */

return array(
	'title'      => __( 'Gallery with title and button', 'neve' ),
	'content'    => '<!-- wp:group -->
<div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":66.66} -->
<div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:heading -->
<h2>Gallery with title and button</h2>
<!-- /wp:heading -->
</div>
<!-- /wp:column -->

<!-- wp:column {"width":33.33} -->
<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:buttons {"align":"right"} -->
<div class="wp-block-buttons alignright"><!-- wp:button {"className":"is-style-primary"} -->
<div class="wp-block-button is-style-primary"><a class="wp-block-button__link">This is primary button</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->
</div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:gallery {"ids":[],"columns":4} -->
<figure class="wp-block-gallery columns-4 is-cropped"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-22.jpg" alt="" data-full-url="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-22.jpg" data-link="#"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-20.jpg" alt="" data-full-url="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-20.jpg" data-link="#"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-21.jpg" alt="" data-full-url="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-21.jpg" data-link="#"/></figure></li><li class="blocks-gallery-item"><figure><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-19.jpg" alt="" data-full-url="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-19.jpg" data-link="#"/></figure></li></ul></figure>
<!-- /wp:gallery --></div></div>
<!-- /wp:group -->',
	'categories' => array( 'gallery' ),
);
