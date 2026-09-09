<?php
/**
 * Custom navwalker for secondary menu.
 *
 * Author:          Soare Robert <robert.soare@themeisle.com>
 * Created on:      25/04/2024
 *
 * @package Neve\Views
 */

namespace Neve\Views;

// Bail when the parent walker file is missing, so extending it cannot fatal.
if ( ! class_exists( 'Neve\Views\Nav_Walker' ) ) {
	return;
}

/**
 * Class Secondary_Nav_Walker
 *
 * @package Neve\Views
 */
class Secondary_Nav_Walker extends Nav_Walker {

	/**
	 * Secondary_Nav_Walker constructor.
	 */
	public function __construct() {
		add_action( 'neve_after_header_wrapper_hook', [ $this, 'inline_style_for_sidebar' ], 9 );
	}
}
