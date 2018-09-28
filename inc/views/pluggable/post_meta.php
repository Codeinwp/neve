<?php
/**
 * Handles post meta for metabox.
 *
 * @package Neve\Views\Pluggable
 */
// Todo: rename this class.
namespace Neve\Views\Pluggable;

/**
 * Class Post_Meta
 *
 * @package Neve\Views\Pluggable
 */
class Post_Meta {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_filter( 'neve_sidebar_position', array( $this, 'filter_sidebar_position' ) );
		add_filter( 'neve_container_class_filter', array( $this, 'filter_container_class' ), 100 );
	}

	/**
	 * Change sidebar position based on meta.
	 *
	 * @param string $position sidebar position coming from filter.
	 *
	 * @return mixed
	 */
	public function filter_sidebar_position( $position ) {
		global $post;

		if ( ! isset( $post->ID ) ) {
			return $position;
		}

		$meta_value = get_post_meta( $post->ID, 'neve_meta_sidebar', true );

		if ( empty( $meta_value ) ) {
			return $position;
		}

		return $meta_value;
	}

	/**
	 * Filter the container class based on meta.
	 *
	 * @param string $class container class.
	 *
	 * @return string
	 */
	public function filter_container_class( $class ) {
		global $post;

		if ( ! isset( $post->ID ) ) {
			return $class;
		}

		$meta_value = get_post_meta( $post->ID, 'neve_meta_container', true );

		if ( empty( $meta_value ) ) {
			return $class;
		}

		if ( $meta_value === 'contained' ) {
			return 'container';
		} elseif ( $meta_value === 'full-width' ) {
			return 'container-fluid';
		} else {
			return $class;
		}
	}
}
