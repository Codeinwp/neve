<?php
/**
 * Main Hooks.
 *
 * @package Neve/Hooks
 */

/* Header ( Navigation ) area */

if ( ! function_exists( 'wp_body_open' ) ) {
	/**
	 * Body open hook.
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
}
