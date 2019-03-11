<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/10/2018
 *
 * @package utilities.php
 */

/**
 * Check if we're delivering AMP
 *
 * @return bool
 */
function neve_is_amp() {
	return function_exists( 'is_amp_endpoint' ) && is_amp_endpoint();
}

/**
 * Get hooks by location
 *
 * @return array $hooks - hooks locations and name
 */
function neve_hooks() {

	$hooks = array(
		'header' => array(
			'neve_before_header_hook',
			'neve_before_navbar_toggle_hook',
			'neve_after_navbar_toggle_hook',
			'neve_after_header_hook',
		),
		'footer' => array(
			'neve_before_footer_hook',
			'neve_after_footer_hook',
		),
	);

	return apply_filters( 'neve_hooks_list', $hooks );
}
