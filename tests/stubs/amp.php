<?php
/**
 * Minimal AMP stub, so the theme can be asked to render an AMP request.
 *
 * `neve_is_amp()` looks for this function; it reports whatever the test asked for
 * and stays false for every test that does not care.
 *
 * @package neve
 */

if ( ! function_exists( 'is_amp_endpoint' ) ) {
	/**
	 * Whether the current test asked for an AMP request.
	 *
	 * @return bool
	 */
	function is_amp_endpoint() {
		return ! empty( $GLOBALS['neve_tests_is_amp'] );
	}
}
