<?php
/**
 * Holds the compatibility logic for WPML plugin.
 *
 * Author:          Bogdan Preda <friends@themeisle.com>
 * Created on:      17/03/2023
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class WPML
 *
 * @package Neve\Compatibility
 */
class WPML {

	/**
	 * Init function.
	 *
	 * @return bool
	 */
	public function init() {
		if ( ! $this->should_load() ) {
			return false;
		}
		$this->load_hooks();

		return true;
	}

	/**
	 * Load hooks.
	 */
	public function load_hooks() {
		add_filter( 'neve_filter_featured_posts', array( $this, 'filter_posts_and_return_original' ), 10, 1 );
	}

	/**
	 * Decide if this class should load.
	 *
	 * @return bool
	 */
	private function should_load() {
		return defined( 'WPML_PLUGIN_PATH' );
	}

	/**
	 * This will return the original language posts.
	 * This hooks into `neve_filter_featured_posts` filter.
	 * We ensure that returned posts are in the original language.
	 *
	 * @param array $posts The posts to filter.
	 *
	 * @return array This returns an array of post id's. The filter also accepts an array of posts.
	 */
	final public function filter_posts_and_return_original( $posts ) {
		$original_post_ids = array();
		$current_language  = apply_filters( 'wpml_current_language', null );
		foreach ( $posts as $post ) {
			$original_post_id = apply_filters( 'wpml_object_id', $post['ID'], $post['post_type'], true, $current_language );
			if ( $original_post_id !== $post['ID'] ) {
				$original_post_ids[ $original_post_id ] = true;
				continue;
			}
			$original_post_ids[ $post['ID'] ] = true;
		}

		return array_keys( $original_post_ids );
	}
}
