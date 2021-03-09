<?php
/**
 * PHPUnit bootstrap file
 *
 * @package Test_Travis
 */
define('NEVE_IGNORE_SOURCE_CHECK', true);
$_tests_dir = getenv( 'WP_TESTS_DIR' );
if ( ! $_tests_dir ) {
	$_tests_dir = '/tmp/wordpress-tests-lib';
}

// Give access to tests_add_filter() function.
require_once $_tests_dir . '/includes/functions.php';

/**
 * Register theme files.
 */
function _register_theme() {
	$theme_dir                   = dirname( dirname( dirname( __FILE__ ) ) );
	$current_theme               = basename( dirname( dirname( __FILE__ ) ) );
	$transient                   = get_site_transient( 'theme_roots' );
	$transient[ $current_theme ] = $theme_dir;
	register_theme_directory( $theme_dir );
	set_site_transient( 'theme_roots', $transient );
	switch_theme( $current_theme );
}

tests_add_filter( 'muplugins_loaded', '_register_theme' );

// Start up the WP testing environment.
require $_tests_dir . '/includes/bootstrap.php';
global $current_user;
$current_user = new WP_User( 1 );
$current_user->set_role( 'administrator' );
wp_update_user(
	array(
		'ID'         => 1,
		'first_name' => 'Admin',
		'last_name'  => 'User',
	)
);
