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
			'mega_menu'             => true,
			'scroll_to_top_icons'   => true,
			'palette_logo'          => true,
		]
	);
	$vendor_file = trailingslashit( get_template_directory() ) . 'vendor/autoload.php';
	if ( is_readable( $vendor_file ) ) {
		require_once $vendor_file;
	}

	require_once 'autoloader.php';
	$autoloader = new \Neve\Autoloader();
	$autoloader->add_namespace( 'Neve', get_template_directory() . '/inc/' );

	if ( defined( 'NEVE_PRO_SPL_ROOT' ) ) {
		$autoloader->add_namespace( 'Neve_Pro', NEVE_PRO_SPL_ROOT );
	}

	$autoloader->register();

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
