<?php
/**
 * Hf builder init
 *
 * @since 0.2.7
 * @package Hf
 */
class Hf_Panel_Builder {
	public function __construct() {
		$this->include();
		$this->init();
	}

	public function include() {
		$path = get_template_directory();
		require_once $path . '/header_footer/panel-builder/class-abstract-layout-frontend.php';
		require_once $path . '/header_footer/panel-builder/class-builder-panel.php';
		require_once $path . '/header_footer/panel-builder/class-layout-builder.php';
		require_once $path . '/header_footer/panel-builder/class-layout-builder-frontend.php';
		require_once $path . '/header_footer/panel-builder/class-layout-builder-frontend-v2.php';
		require_once $path . '/header_footer/panel-builder/builder-functions.php';
	}

	private function init() {
		/**
		 * Initial Layout Builder
		 */
		Hf_Customize_Layout_Builder()->init();

		/**
		 * Add Header Content To Frontend
		 */
		add_action( 'Hf/site-start', 'Hf_customize_render_header' );
		/**
		 * Add Footer Content To Frontend
		 */
		add_action( 'Hf/site-end', 'Hf_customize_render_footer' );
	}

}

new Hf_Panel_Builder();

