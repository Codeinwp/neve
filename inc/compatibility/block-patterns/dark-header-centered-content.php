<?php
/**
 * Dark header with centered content pattern.
 *
 * @package Neve
 */

return array(
	'title'      => __( 'Dark header with centered content', 'neve' ),
	'content'    => '<!-- wp:cover {"url":"' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-8.jpg","dimRatio":26,"focalPoint":{"x":"0.50","y":"0.50"},"minHeight":700,"align":"full"} -->
<div class="wp-block-cover alignfull has-background-dim-30 has-background-dim" style="background-image:url(' . trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/neve-patterns-8.jpg);background-position:50% 50%;min-height:700px"><div class="wp-block-cover__inner-container"><!-- wp:heading {"align":"center","level":1,"textColor":"white"} -->
<h1 class="has-text-align-center has-white-color has-text-color">Welcome to Neve.This is a hero section. </h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"white","style":{"typography":{"fontSize":23} } } -->
<p class="has-text-align-center has-white-color has-text-color" style="font-size:23px">This is a description text of the cover</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":40} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group -->
<div class="wp-block-group"><div class="wp-block-group__inner-container"><!-- wp:buttons {"align":"center", "layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons aligncenter"><!-- wp:button {"className":"is-style-primary"} -->
<div class="wp-block-button is-style-primary"><a class="wp-block-button__link">This is Primary Button</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->',
	'categories' => array( 'header' ),
);
