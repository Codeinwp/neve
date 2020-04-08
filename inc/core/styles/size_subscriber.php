<?php
/**
 * Define size subscriber.
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;

/**
 * Class Size_Unit
 * @package Neve\Core\Styles
 */
class Size_Subscriber extends Responsive_Subscriber {

	/**
	 * Transform value into a CSS rule. Selectors should not be included.
	 *
	 * @param string $css_prop
	 * @param string $context
	 *
	 * @return string
	 */
	protected function transform( $css_prop, $context ) {
		return sprintf( "%s: %spx;", ( $css_prop ), (int) ( $this->get_value() ) );
	}
}
