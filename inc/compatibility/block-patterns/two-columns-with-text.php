<?php
/**
 * Two columns with text pattern.
 *
 * @package Neve
 */

return array(
	'title'      => __( 'Two columns with text', 'neve' ),
	'content'    => '<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading -->
<h2>This is a heading on the left, more text on the right!</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><a href="#">Learn More</a></strong></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3>This is Heading 3</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>This is Heading 3</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->',
	'categories' => array( 'text' ),
);
