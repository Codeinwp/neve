<?php
/**
 * Main Hooks.
 *
 * @package Neve/Hooks
 */

/* Header ( Navigation ) area */
/**
 * Hook just before the header ( navigation ) area.
 *
 * @deprecated 2.11 Use do_action( 'neve_before_header_hook' ) instead.
 */
function neve_before_header_trigger() {
	do_action( 'neve_before_header_hook' );
}

/**
 * Hook at the beginning of header ( navigation ) area.
 *
 * @deprecated 2.11 Use do_action( 'neve_before_header_wrapper_hook' ) instead.
 */
function neve_before_header_wrapper_trigger() {
	do_action( 'neve_before_header_wrapper_hook' );
}

/**
 * Hook just after the header ( navigation ) area.
 *
 * @deprecated 2.11 Use do_action( 'neve_after_header_hook' ) instead.
 */
function neve_after_header_trigger() {
	do_action( 'neve_after_header_hook' );
}

/**
 * Hook just after the header content ( navigation ) area
 *
 * @deprecated 2.11 Use do_action( 'neve_after_header_wrapper_hook' ) instead.
 */
function neve_after_header_wrapper_trigger() {
	do_action( 'neve_after_header_wrapper_hook' );
}

/**
 * Hook just before the footer area
 *
 * @deprecated 2.11 Use do_action( 'neve_before_footer_hook' ) instead.
 */
function neve_before_footer_trigger() {
	do_action( 'neve_before_footer_hook' );
}

/**
 * Hook just after the footer area
 *
 * HTML context: after `footer`
 *
 * @deprecated 2.11 Use do_action( 'neve_after_footer_hook' ) instead.
 */
function neve_after_footer_trigger() {
	do_action( 'neve_after_footer_hook' );
}

if ( ! function_exists( 'wp_body_open' ) ) {
	/**
	 * Body open hook.
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
}
