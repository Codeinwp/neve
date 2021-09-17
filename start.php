<?php
/**
 * Start file handles bootstrap.
 *
 * @package Neve
 */

/**
 * Run theme functionality
 */
function neve_run() {
	define(
		'NEVE_COMPATIBILITY_FEATURES',
		[
			'single_customizer'     => true,
			'repeater_control'      => true,
			'malformed_div_on_shop' => true,
		]
	);
	$vendor_file = trailingslashit( get_template_directory() ) . 'vendor/autoload.php';
	if ( is_readable( $vendor_file ) ) {
		require_once $vendor_file;
	}

	if ( defined( 'NEVE_PRO_SPL_ROOT' ) ) {
		require NEVE_PRO_SPL_ROOT  . '/autoload.php';
	}

	if ( class_exists( '\\Neve\\Core\\Core_Loader' ) ) {
		new \Neve\Core\Core_Loader();
	}

	if ( class_exists( '\\Neve_Pro\\Core\\Loader' ) ) {
		/**
		 * Legacy code, compatibility with old pro version.
		 */
		if ( is_file( NEVE_PRO_SPL_ROOT . 'modules/header_footer_grid/components/Yoast_Breadcrumbs.php' ) ) {
			require_once NEVE_PRO_SPL_ROOT . 'modules/header_footer_grid/components/Yoast_Breadcrumbs.php';
		}
		if ( is_file( NEVE_PRO_SPL_ROOT . 'modules/header_footer_grid/components/Language_Switcher.php' ) ) {
			require_once NEVE_PRO_SPL_ROOT . 'modules/header_footer_grid/components/Language_Switcher.php';
		}
		\Neve_Pro\Core\Loader::instance();
	}
}

neve_run();
