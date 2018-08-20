<?php
/**
 * Neve functions.php file
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 * @package Neve
 */

define( 'NEVE_VERSION', '1.0.0' );
define( 'NEVE_INC_DIR', trailingslashit( get_template_directory() ) . 'inc/' );
define( 'NEVE_ASSETS_URL', trailingslashit( get_template_directory_uri() ) . 'assets/' );
if ( ! defined( 'NEVE_DEBUG' ) ) {
	define( 'NEVE_DEBUG', true );
}

/**
 * Adds notice for PHP < 5.3.29 hosts.
 */
function neve_php_support() {
	$message = __( 'Hey, we\'ve noticed that you\'re running an outdated version of PHP which is no longer supported. Make sure your site is fast and secure, by upgrading PHP to the latest version.', 'neve' );

	printf( '<div class="error"><p>%1$s</p></div>', esc_html( $message ) );
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

require_once 'globals/hooks.php';
require_once 'globals/sanitize-functions.php';

/**
 * Run theme functionality
 */
function neve_run() {
	require_once 'Autoloader.php';

	$autoloader = new \Neve\Autoloader();

	$autoloader->add_namespace( 'Neve', __DIR__ . '/inc/' );

	$autoloader->register();

	new Neve\Core\Main();
}

add_action( 'init', 'neve_run' );