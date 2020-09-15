<?php
/**
 * Two Columns with image and text pattern.
 *
 * @package Neve
 */

return array(
	'title'      => __( 'Two columns with image and text', 'neve' ),
	'content'    => '<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {} -->
<figure class="wp-block-image"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-6.jpg" alt="" /></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading -->
<h2>The quick brown fox jumps over the lazy dog"</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-primary"} -->
<div class="wp-block-button is-style-primary"><a class="wp-block-button__link">This is Primary Button</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->',
	'categories' => array( 'columns' ),
);
