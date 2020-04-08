<?php


namespace Neve\Core\Styles;


use Neve\Core\Settings\Config;

class Color_Subscriber extends Mod_Subscriber {


	/**
	 * Transform value into a CSS rule. Selectors should not be included.
	 *
	 * @param string $css_prop
	 * @param string $context
	 *
	 * @return string
	 */
	protected function transform( $css_prop, $context ) {
		return sprintf( "%s: %s;", ( $css_prop ), sanitize_hex_color( $this->get_value() ) );
	}
}
