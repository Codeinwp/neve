<?php
/**
 * Neve functions.php file
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve
 */

define( 'NEVE_VERSION', '1.0.26' );
define( 'NEVE_INC_DIR', trailingslashit( get_template_directory() ) . 'inc/' );
define( 'NEVE_ASSETS_URL', trailingslashit( get_template_directory_uri() ) . 'assets/' );

if ( ! defined( 'NEVE_DEBUG' ) ) {
	define( 'NEVE_DEBUG', false );
}

/**
 * Themeisle SDK filter.
 *
 * @param array $products products array.
 *
 * @return array
 */
function neve_filter_sdk( $products ) {
	$products[] = get_template_directory() . '/style.css';

	return $products;
}

add_filter( 'themeisle_sdk_products', 'neve_filter_sdk' );

/**
 * Adds notice for PHP < 5.3.29 hosts.
 */
function neve_php_support() {
	$message = sprintf(
		/* translators: %s message to upgrade PHP to the latest version */
		__( "Hey, we've noticed that you're running an outdated version of PHP which is no longer supported. Make sure your site is fast and secure, by %s. Neve's minimal requirement is PHP 5.4.0.", 'neve' ),
		sprintf(
			/* translators: %s message to upgrade PHP to the latest version */
			'<a target="_blank" href="https://wordpress.org/support/upgrade-php/">%s</a>',
			__( 'upgrading PHP to the latest version', 'neve' )
		)
	);

	printf( '<div class="error"><p>%1$s</p></div>', wp_kses_post( $message ) );
}

if ( version_compare( PHP_VERSION, '5.3.29' ) < 0 ) {
	/**
	 * Add notice for PHP upgrade.
	 */
	add_filter( 'template_include', '__return_null', 99 );
	switch_theme( WP_DEFAULT_THEME );
	unset( $_GET['activated'] );
	add_action( 'admin_notices', 'neve_php_support' );

	return;
}

require_once 'globals/utilities.php';
require_once 'globals/hooks.php';
require_once 'globals/sanitize-functions.php';

/**
 * Run theme functionality
 */
function neve_run() {
	$vendor_file = trailingslashit( get_template_directory() ) . 'vendor/autoload.php';
	if ( is_readable( $vendor_file ) ) {
		require_once $vendor_file;
	}

	require_once 'autoloader.php';
	$autoloader_class = '\\Neve\\Autoloader';
	$autoloader       = new $autoloader_class;
	$autoloader->add_namespace( 'Neve', get_template_directory() . '/inc/' );
	if ( defined( 'NEVE_PRO_SPL_ROOT' ) ) {
		$autoloader->add_namespace( 'Neve_Pro', NEVE_PRO_SPL_ROOT );
	}
	$autoloader->register();

	$core_loader_class = '\\Neve\\Core\\Core_Loader';
	if ( class_exists( $core_loader_class ) ) {
		new $core_loader_class;
	}

	$addon_loader_class = '\\Neve_Pro\\Core\\Loader';
	if ( class_exists( $addon_loader_class ) ) {
		$addon_loader_class::instance();
	}
}

neve_run();
