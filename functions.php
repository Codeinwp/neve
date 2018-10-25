<?php
/**
 * Neve functions.php file
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve
 */

define( 'NEVE_VERSION', '1.0.5' );
define( 'NEVE_INC_DIR', trailingslashit( get_template_directory() ) . 'inc/' );
define( 'NEVE_ASSETS_URL', trailingslashit( get_template_directory_uri() ) . 'assets/' );

if ( ! defined( 'NEVE_DEBUG' ) ) {
	define( 'NEVE_DEBUG', false );
}

if ( ! defined( 'WPFORMS_SHAREASALE_ID' ) ) {
	define( 'WPFORMS_SHAREASALE_ID', '848264' );
}

if ( ! defined( 'ELEMENTOR_PARTNER_ID' ) ) {
	define( 'ELEMENTOR_PARTNER_ID', 2112 );
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
 * Welcome notice render
 */
function neve_welcome_notice() {

	if ( ! is_admin() ) {
		return;
	}

	if ( get_option( 'neve_welcome_notice_dismissed' ) === 'yes' ) {
		return;
	}

	echo '<div class="notice is-dismissible neve-welcome-notice">';
	echo '<h2>';
	echo esc_html__( 'Welcome to Neve!', 'neve' );
	echo '</h2>';
	echo '<p>';
	echo esc_html__( 'Are you tired of building your site from scratch?', 'neve' );
	echo '</p>';
	echo '<p>';
	echo esc_html__( 'With Neve, you can import one of our demos, and customize it as you wish.', 'neve' );
	echo '</p>';

	echo '<div class="neve-button-wrapper">';
	echo '<a class="button button-primary button-hero" href="' . esc_url( admin_url( 'themes.php?page=neve-welcome&onboarding=yes#sites-library' ) ) . '">';
	echo esc_html__( 'Let\'s start', 'neve' );
	echo '</a>';
	echo '</div>';
	echo '</div>';
}
add_action( 'admin_notices', 'neve_welcome_notice' );

/**
 * Welcome notice style
 */
function neve_welcome_notice_style() {
	wp_enqueue_style( 'neve-admin-style', get_template_directory_uri() . '/assets/css/admin-notice-style.css' );
}
add_action( 'admin_enqueue_scripts', 'neve_welcome_notice_style' );

/**
 * Welcome notice scripts
 */
function neve_welcome_notice_scripts() {
	if ( ! is_admin() ) {
		return;
	}

	wp_enqueue_script(
		'neve-welcome-notice',
		get_template_directory_uri() . '/assets/js/neve-welcome-notice-scripts.js',
		false,
		NEVE_VERSION,
		true
	);
	wp_localize_script(
		'neve-welcome-notice',
		'neveNotice',
		array(
			'ajaxurl'      => admin_url( 'admin-ajax.php' ),
			'dismissNonce' => wp_create_nonce( 'dismiss_neve_welcome_notice' ),
		)
	);
}
add_action( 'admin_enqueue_scripts', 'neve_welcome_notice_scripts' );

/**
 * Dismiss welcome notice
 */
function neve_welcome_notice_dismiss() {

	$params = $_REQUEST;
	if ( ! isset( $params['nonce'] ) || ! wp_verify_nonce( $params['nonce'], 'dismiss_neve_welcome_notice' ) ) {
		wp_send_json_error( 'Wrong nonce' );
	}
	update_option( 'neve_welcome_notice_dismissed', 'yes' );
	wp_send_json_success( 'Dismiss import' );
}
add_action( 'wp_ajax_neve_welcome_notice_dismiss', 'neve_welcome_notice_dismiss' );

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
	$autoloader->register();

	$core_loader_class = '\\Neve\\Core\\Core_Loader';
	if ( class_exists( $core_loader_class ) ) {
		new $core_loader_class;
	}
}

neve_run();
