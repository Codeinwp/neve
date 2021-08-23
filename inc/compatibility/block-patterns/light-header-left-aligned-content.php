<?php
/**
 * Light header with left-aligned content pattern.
 *
 * @package Neve
 */

return array(
	'title'      => __( 'Light header with left-aligned content', 'neve' ),
	'content'    => '<!-- wp:cover {"url":"' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-18.jpg","dimRatio":80,"overlayColor":"nv-light-bg","focalPoint":{"x":"0.16","y":"0.91"},"minHeight":500,"align":"full"} -->
<div class="wp-block-cover alignfull has-background-dim-80 has-nv-light-bg-background-color has-background-dim" style="min-height:500px"><img class="wp-block-cover__image-background" alt="" src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-18.jpg" style="object-position:16% 91%" data-object-fit="cover" data-object-position="16% 91%"/><div class="wp-block-cover__inner-container"><!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide"><!-- wp:column {"verticalAlignment":"center","width":"66.66%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:66.66%"><!-- wp:heading {"textAlign":"left","level":1,"textColor":"neve-text-color"} -->
<h1 class="has-text-align-left has-neve-text-color-color has-text-color">A Hero section over a light background</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color">The quick brown fox jumps over the lazy dog" is an English-language pangram</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"contentJustification":"left"} -->
<div class="wp-block-buttons is-content-justification-left"><!-- wp:button {"className":"is-style-primary"} -->
<div class="wp-block-button is-style-primary"><a class="wp-block-button__link">This is Primary Button</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"33.33%"} -->
<div class="wp-block-column" style="flex-basis:33.33%"></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div>
<!-- /wp:cover -->',
	'categories' => array( 'header' ),
);
