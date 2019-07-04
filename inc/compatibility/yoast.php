<?php
/**
 * Yoast Compatibility.
 *
 * @package Amp.php
 */

namespace Neve\Compatibility;

/**
 * Class Yoast
 *
 * @package Neve\Compatibility
 */
class Yoast {

	/**
	 * Module init.
	 */
	public function init(){
		$this->load_breadcrumbs();
	}

	/**
	 * Load hooks and filters.
	 */
	private function load_breadcrumbs() {
		if ( ! function_exists('yoast_breadcrumb') ){
			return;
		}
		$breadcrumbs_hooks = apply_filters(
			'neve_breadcrumbs_locations',
			array(
				'neve_before_loop',
				'neve_before_page_header',
				'neve_before_post_content'
			)
		);

		foreach ( $breadcrumbs_hooks as $hook ){
			add_action( $hook, array( $this, 'render_yoast_breadcrumbs') );
		}
	}

	/**
	 * Render Yoast Bredcrumbs.
	 */
	public function render_yoast_breadcrumbs(){
		yoast_breadcrumb( '<small id="breadcrumbs" style="margin-bottom: 20px; display: block;">','</small>' );
	}

}
