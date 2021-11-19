<?php
/**
 * Three columns with images, content and buttons pattern.
 *
 * @package Neve
 */

return array(
	'title'      => __( 'Three columns with images, content and buttons', 'neve' ),
	'content'    => '<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {} -->
<figure class="wp-block-image"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-10.jpg" alt="" /></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3>Heading three</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-primary"} -->
<div class="wp-block-button is-style-primary"><a class="wp-block-button__link">LEARN MORE</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:spacer {"height":30} -->
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {} -->
<figure class="wp-block-image"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-6.jpg" alt=""/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3>Heading three</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-primary"} -->
<div class="wp-block-button is-style-primary"><a class="wp-block-button__link">LEARN MORE</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:spacer {"height":30} -->
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {} -->
<figure class="wp-block-image"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-11.jpg" alt="" /></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3>Heading three</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-primary"} -->
<div class="wp-block-button is-style-primary"><a class="wp-block-button__link">LEARN MORE</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:spacer {"height":30} -->
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->',
	'categories' => array( 'columns' ),
);
