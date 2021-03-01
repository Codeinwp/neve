<?php
/**
 * Web_Stories compatibility.
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class PWA
 */
class Web_Stories {

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
	 * Is plugin available?.
	 */
	private function should_load() {
		return defined( 'WEBSTORIES_VERSION' );
	}

	/**
	 * Load hooks.
	 */
	private function load_hooks() {
		add_action( 'after_setup_theme', array( $this, 'setup' ) );
		add_action( 'wp_body_open', array( $this, 'embed' ) );
	}

	/**
	 * Setup theme support for web stories.
	 */
	public function setup() {
		add_theme_support(
			'web-stories',
			[
			// 'view-type'         => [ 'circles', 'carousel', 'grid', 'list' ]
			]
		);
	}

	/**
	 * Render the theme stories.
	 */
	public function embed() {
		if ( function_exists( '\Google\Web_Stories\render_theme_stories' ) ) {
			\Google\Web_Stories\render_theme_stories();
		}
	}
}
