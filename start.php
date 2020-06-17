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
		'NEVE_FILE_TREE',
		[
			1 => 1,
			2 => 1,
			3 => 2,
			4 => 2,
			5 => 3,
			6 => 3,
			7 => 1,
			8 => 2,
			9 => 3,
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
		if ( defined( 'NEVE_PRO_BASEFILE' ) ) {
			$slug  = basename( dirname( NEVE_PRO_BASEFILE ) );
			$slug  = str_replace( '-', '_', strtolower( trim( $slug ) ) );
			$value = get_option( $slug . '_license_data' );

			if ( ! empty( $value ) ) {
				add_filter(
					'product_neve_license_status',
					function ( $v ) use ( $value ) {
						return isset( $value->license ) ? $value->license : 'free';
					} 
				);
				add_filter(
					'product_neve_license_plan',
					function( $v ) use ( $value ) {
						return isset( $value->plan ) ? $value->plan : -1;
					} 
				);
			}
		}
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
