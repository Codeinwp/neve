<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve
 */

$default_order = array(
	'title-meta',
	'thumbnail',
	'content',
	'tags',
);

$content_order = get_theme_mod( 'neve_single_post_elements_order', json_encode( $default_order ) );
$content_order = json_decode( $content_order );

if ( ! has_post_thumbnail() ) {
	$thumb_index = array_search( 'thumbnail', $content_order );
	if ( $thumb_index !== false ) {
		unset( $content_order[ $thumb_index ] );
	}
}

foreach ( $content_order as $item ) {
	switch ( $item ) {
		case 'title-meta':
			do_action( 'neve_before_content', 'single-post' );
			break;
		case 'thumbnail':
			echo '<div class="nv-thumb-wrap">';
			echo get_the_post_thumbnail(
				null,
				'neve-blog'
			);
			echo '</div>';
			break;
		case 'content':
			echo '<div class="nv-content-wrap entry-content">';
			the_content();
			echo '</div>';
			break;
		case 'post-navigation':
			do_action( 'neve_post_navigation' );
			break;
		case 'tags':
			do_action( 'neve_do_tags' );
			break;
	}
}
do_action( 'neve_do_pagination', 'single' );
do_action( 'neve_after_content', 'single-post' );
