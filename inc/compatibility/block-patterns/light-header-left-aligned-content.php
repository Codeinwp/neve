<?php
/**
 * Light header with left-aligned content pattern.
 *
 * @package Neve
 */

return array(
	'title'      => __( 'Light header with left-aligned content', 'neve' ),
	'content'    => '<!-- wp:cover {"url":"' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-18.jpg","dimRatio":73,"overlayColor":"white","minHeight":500,"align":"full"} -->
<div class="wp-block-cover alignfull has-background-dim-70 has-white-background-color has-background-dim" style="background-image:url(' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-18.jpg);min-height:500px"><div class="wp-block-cover__inner-container"><!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide"><!-- wp:column {"verticalAlignment":"center","width":66.66} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:66.66%"><!-- wp:heading {"align":"left","level":1,"textColor":"black"} -->
<h1 class="has-text-align-left has-black-color has-text-color">A Hero section over a light background</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"black"} -->
<p class="has-text-align-left has-black-color has-text-color">The quick brown fox jumps over the lazy dog" is an English-language pangram</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"align":"left"} -->
<div class="wp-block-buttons alignleft"><!-- wp:button {"className":"is-style-primary"} -->
<div class="wp-block-button is-style-primary"><a class="wp-block-button__link">This is Primary Button</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"width":33.33} -->
<div class="wp-block-column" style="flex-basis:33.33%"></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div>
<!-- /wp:cover -->',
	'categories' => array( 'header' ),
);
