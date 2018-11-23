<?php
/**
 *
 * Sanitize functions.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      20/08/2018
 *
 * @package Neve\Globals
 */

/**
 * Function to sanitize alpha color.
 *
 * @param string $value Hex or RGBA color.
 *
 * @return string
 */
function neve_sanitize_colors( $value ) {
	// Is this an rgba color or a hex?
	$mode = ( false === strpos( $value, 'rgba' ) ) ? 'hex' : 'rgba';

	if ( 'rgba' === $mode ) {
		return neve_sanitize_rgba( $value );
	} else {
		return sanitize_hex_color( $value );
	}
}

/**
 * Sanitize rgba color.
 *
 * @param string $value Color in rgba format.
 *
 * @return string
 */
function neve_sanitize_rgba( $value ) {
	$red   = 'rgba(0,0,0,0)';
	$green = 'rgba(0,0,0,0)';
	$blue  = 'rgba(0,0,0,0)';
	$alpha = 'rgba(0,0,0,0)';   // If empty or an array return transparent
	if ( empty( $value ) || is_array( $value ) ) {
		return '';
	}

	// By now we know the string is formatted as an rgba color so we need to further sanitize it.
	$value = str_replace( ' ', '', $value );
	sscanf( $value, 'rgba(%d,%d,%d,%f)', $red, $green, $blue, $alpha );

	return 'rgba(' . $red . ',' . $green . ',' . $blue . ',' . $alpha . ')';
}

/**
 * Sanitize checkbox output.
 *
 * @param bool $value value to be sanitized.
 *
 * @return string
 */
function neve_sanitize_checkbox( $value ) {
	return isset( $value ) && true === (bool) $value;
}

/**
 * Check if a string is in json format
 *
 * @param  string $string Input.
 *
 * @since 1.1.38
 * @return bool
 */
function neve_is_json( $string ) {
	return is_string( $string ) && is_array( json_decode( $string, true ) ) ? true : false;
}

/**
 * Sanitize values for range inputs.
 *
 * @param string $input Control input.
 *
 * @return float
 */
function neve_sanitize_range_value( $input ) {
	if ( ! neve_is_json( $input ) ) {
		return floatval( $input );
	}
	$range_value            = json_decode( $input, true );
	$range_value['desktop'] = ! empty( $range_value['desktop'] ) || $range_value['desktop'] === '0' ? floatval( $range_value['desktop'] ) : '';
	$range_value['tablet']  = ! empty( $range_value['tablet'] ) || $range_value['tablet'] === '0' ? floatval( $range_value['tablet'] ) : '';
	$range_value['mobile']  = ! empty( $range_value['mobile'] ) || $range_value['mobile'] === '0' ? floatval( $range_value['mobile'] ) : '';

	return json_encode( $range_value );
}
