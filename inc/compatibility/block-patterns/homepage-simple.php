<?php
/**
 * Simple homepage pattern.
 *
 * @package Neve
 */

$img_dir = trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/';

return array(
	'title'       => __( 'Homepage: simple', 'neve' ),
	'description' => __( 'A short homepage with an intro, a wide image, three features and a call to action.', 'neve' ),
	'keywords'    => array( __( 'homepage', 'neve' ), __( 'front page', 'neve' ), __( 'landing', 'neve' ) ),
	// lists the pattern in the "Choose a pattern" modal when a new page is created
	'blockTypes'  => array( 'core/post-content' ),
	'postTypes'   => array( 'page' ),
	'content'     => '<!-- wp:group {"style":{"spacing":{"padding":{"top":"80px","bottom":"40px"}}}} -->
<div class="wp-block-group" style="padding-top:80px;padding-bottom:40px"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center">' . esc_html__( 'Hello, welcome to my site', 'neve' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">' . esc_html__( 'Use this space to say who you are and what visitors will find here.', 'neve' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#">' . esc_html__( 'Get in touch', 'neve' ) . '</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->

<!-- wp:image {"align":"wide","sizeSlug":"large"} -->
<figure class="wp-block-image alignwide size-large"><img src="' . esc_url( $img_dir . 'neve-patterns-6.jpg' ) . '" alt="' . esc_attr__( 'Orange light bulb on a teal background', 'neve' ) . '"/></figure>
<!-- /wp:image -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"80px","bottom":"80px"}}}} -->
<div class="wp-block-group" style="padding-top:80px;padding-bottom:80px"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">' . esc_html__( 'Simple', 'neve' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Explain the first thing that makes your work worth a look.', 'neve' ) . '</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">' . esc_html__( 'Fast', 'neve' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Explain the second thing people should know about you.', 'neve' ) . '</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">' . esc_html__( 'Flexible', 'neve' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Explain the third reason to choose you over someone else.', 'neve' ) . '</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","backgroundColor":"nv-light-bg","style":{"spacing":{"padding":{"top":"80px","bottom":"80px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1160px"}} -->
<div class="wp-block-group alignfull has-nv-light-bg-background-color has-background" style="padding-top:80px;padding-right:24px;padding-bottom:80px;padding-left:24px"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center">' . esc_html__( 'Let us work together', 'neve' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">' . esc_html__( 'Have a project in mind? Send a message and start the conversation.', 'neve' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#">' . esc_html__( 'Contact me', 'neve' ) . '</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->',
);
