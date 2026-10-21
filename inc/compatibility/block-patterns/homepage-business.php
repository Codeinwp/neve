<?php
/**
 * Business homepage pattern.
 *
 * @package Neve
 */

$img_dir = trailingslashit( get_template_directory_uri() ) . 'assets/img/patterns/';

return array(
	'title'       => __( 'Homepage: business', 'neve' ),
	'description' => __( 'A full homepage with a hero, services, about, testimonials and a call to action.', 'neve' ),
	'keywords'    => array( __( 'homepage', 'neve' ), __( 'front page', 'neve' ), __( 'landing', 'neve' ) ),
	// lists the pattern in the "Choose a pattern" modal when a new page is created
	'blockTypes'  => array( 'core/post-content' ),
	'postTypes'   => array( 'page' ),
	'content'     => '<!-- wp:cover {"url":"' . esc_url( $img_dir . 'neve-patterns-18.jpg' ) . '","dimRatio":70,"overlayColor":"nv-dark-bg","minHeight":600,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:600px"><img class="wp-block-cover__image-background" alt="" src="' . esc_url( $img_dir . 'neve-patterns-18.jpg' ) . '" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-nv-dark-bg-background-color has-background-dim-70 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:heading {"textAlign":"center","textColor":"nv-text-dark-bg"} -->
<h2 class="wp-block-heading has-text-align-center has-nv-text-dark-bg-color has-text-color">' . esc_html__( 'Grow your business with a website that works', 'neve' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"nv-text-dark-bg"} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color">' . esc_html__( 'Tell visitors who you are and what you do in one or two short sentences.', 'neve' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#">' . esc_html__( 'Get started', 'neve' ) . '</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div></div>
<!-- /wp:cover -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"80px","bottom":"80px"}}}} -->
<div class="wp-block-group" style="padding-top:80px;padding-bottom:80px"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center">' . esc_html__( 'What we do', 'neve' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">' . esc_html__( 'A short summary of the services you offer.', 'neve' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">' . esc_html__( 'Strategy', 'neve' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Describe the first service and how it helps your customers.', 'neve' ) . '</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">' . esc_html__( 'Design', 'neve' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Describe the second service and what makes it different.', 'neve' ) . '</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">' . esc_html__( 'Development', 'neve' ) . '</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Describe the third service and the results people can expect.', 'neve' ) . '</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","backgroundColor":"nv-light-bg","style":{"spacing":{"padding":{"top":"80px","bottom":"80px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1160px"}} -->
<div class="wp-block-group alignfull has-nv-light-bg-background-color has-background" style="padding-top:80px;padding-right:24px;padding-bottom:80px;padding-left:24px"><!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="' . esc_url( $img_dir . 'neve-patterns-12.jpg' ) . '" alt="' . esc_attr__( 'Person taking notes at a desk', 'neve' ) . '"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading -->
<h2 class="wp-block-heading">' . esc_html__( 'About us', 'neve' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Share a little about your story, your team and why you do what you do.', 'neve' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="#">' . esc_html__( 'Read our story', 'neve' ) . '</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"80px","bottom":"80px"}}}} -->
<div class="wp-block-group" style="padding-top:80px;padding-bottom:80px"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center">' . esc_html__( 'What our clients say', 'neve' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph -->
<p><em>' . esc_html__( '"Working with this team was easy from start to finish. We got exactly what we needed."', 'neve' ) . '</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>' . esc_html__( 'Jane Austin', 'neve' ) . '</strong></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph -->
<p><em>' . esc_html__( '"Fast, friendly and clear. Our new site brought in more leads in the first month."', 'neve' ) . '</em></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>' . esc_html__( 'Jason Stobbard', 'neve' ) . '</strong></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","backgroundColor":"nv-dark-bg","textColor":"nv-text-dark-bg","style":{"spacing":{"padding":{"top":"80px","bottom":"80px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1160px"}} -->
<div class="wp-block-group alignfull has-nv-text-dark-bg-color has-nv-dark-bg-background-color has-text-color has-background" style="padding-top:80px;padding-right:24px;padding-bottom:80px;padding-left:24px"><!-- wp:heading {"textAlign":"center","textColor":"nv-text-dark-bg"} -->
<h2 class="wp-block-heading has-text-align-center has-nv-text-dark-bg-color has-text-color">' . esc_html__( 'Ready to start your project?', 'neve' ) . '</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">' . esc_html__( 'Get in touch today and we will get back to you within one business day.', 'neve' ) . '</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#">' . esc_html__( 'Contact us', 'neve' ) . '</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->',
);
