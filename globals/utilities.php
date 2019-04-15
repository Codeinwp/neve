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

/**
 * Cart icon markup.
 *
 * The changes here might not be visible on front end due to woocommerce cart-fragments.js
 * In that case deactivate and reactivate WooCommerce.
 *
 * @param bool $echo should be echoed.
 *
 * @return string|null
 */
function neve_cart_icon( $echo = false ) {
	$svg = '<span class="nv-icon nv-cart"><svg width="15" height="15" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M704 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zm896 0q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zm128-1088v512q0 24-16.5 42.5t-40.5 21.5l-1044 122q13 60 13 70 0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-11 8-31.5t16-36 21.5-40 15.5-29.5l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t19.5 15.5 13 24.5 8 26 5.5 29.5 4.5 26h1201q26 0 45 19t19 45z"/></svg></span>';
	if ( $echo === false ) {
		return $svg;
	}
	echo neve_kses_svg( $svg ); // WPCS: XSS OK.
}

/**
 * Search Icon
 *
 * @param bool $echo should be echoed.
 *
 * @return string
 */
function neve_search_icon( $echo = false ) {
	$svg = '<span class="nv-icon nv-search"><svg width="15" height="15" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"/></svg></span>';
	if ( $echo === false ) {
		return $svg;
	}
	echo neve_kses_svg( $svg ); // WPCS: XSS OK.
}

/**
 *  Escape HTML strings containing SVG.
 *
 * @param string $input           the input string.
 * @param array  $additional_args additional allowed.
 *
 * @return string
 */
function neve_custom_kses_escape( $input, $additional_args ) {
	$kses_defaults = wp_kses_allowed_html( 'post' );
	$allowed_tags  = array_merge( $kses_defaults, $additional_args );

	return wp_kses( $input, $allowed_tags );
}

/**
 * Kses svg.
 *
 * @param string $input input string to escape.
 *
 * @return string
 */
function neve_kses_svg( $input ) {
	$svg_args = array(
		'svg'   => array(
			'class'           => true,
			'aria-hidden'     => true,
			'aria-labelledby' => true,
			'role'            => true,
			'xmlns'           => true,
			'width'           => true,
			'height'          => true,
			'viewbox'         => true, // <= Must be lower case!
		),
		'g'     => array( 'fill' => true ),
		'title' => array( 'title' => true ),
		'path'  => array(
			'd'    => true,
			'fill' => true,
		),
	);

	return neve_custom_kses_escape( $input, $svg_args );
}
