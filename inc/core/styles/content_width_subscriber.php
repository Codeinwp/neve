<?php


namespace Neve\Core\Styles;

/**
 * Class Content_Width_Subscriber
 * @package Neve\Core\Styles
 */
class Content_Width_Subscriber extends Mod_Subscriber {
	const SIDEBAR = 'sidebar';
	const CONTENT = 'content';
	/**
	 * Generate CSS for the content area.
	 *
	 * @param string $css_prop
	 * @param string $context
	 *
	 * @return string|void
	 */
	protected function transform( $css_prop, $context ) {
		$value = (int) $this->get_value();

		if ( $context === self::CONTENT ) {
			return sprintf( "%s: %s%%;", ( $css_prop ), ( $value ) );
		}
		if ( $context === self::SIDEBAR ) {
			return sprintf( "%s: %s%%;", ( $css_prop ), ( 100 - $value ) );
		}
	}
}
