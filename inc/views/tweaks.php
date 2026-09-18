<?php
/**
 * Generic Tweaks
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Tweaks
 */
class Tweaks extends Base_View {
	/**
	 * Add hooks for the front end.
	 */
	public function init() {
		// Remove gallery default style.
		add_filter( 'use_default_gallery_style', '__return_false' );
		add_filter( 'neve_filter_toggle_content_parts', array( $this, 'filter_global_visibility' ), 200, 2 );
	}

	/**
	 * Hide the header or the footer when they are turned off for the whole site.
	 *
	 * This runs after the post meta filter. A post can still turn the parts off on its
	 * own, but it cannot turn them back on, because the metabox writes 'off' by default
	 * and that value does not tell an untouched post from a deliberate one.
	 *
	 * @param bool   $status Whether the part is rendered or not.
	 * @param string $context The part name.
	 *
	 * @return bool
	 */
	public function filter_global_visibility( $status, $context ) {
		if ( $context !== 'header' && $context !== 'footer' ) {
			return $status;
		}

		if ( get_theme_mod( 'neve_disable_' . $context, false ) ) {
			return false;
		}

		return $status;
	}
}
