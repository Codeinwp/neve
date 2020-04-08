<?php
/**
 * Define size subscriber.
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;

/**
 * Class Group_Size_Subscriber
 * @package Neve\Core\Styles
 */
class Group_Size_Subscriber extends Responsive_Subscriber {

	/**
	 * Transform value into a CSS rule. Selectors should not be included.
	 *
	 * @param string $css_prop
	 * @param string $context
	 *
	 * @return string
	 */
	protected function transform( $css_prop, $context ) {
		$value = $this->get_value();
		return sprintf( "%s: %spx %spx %spx %spx;", ( $css_prop ), $value['top'], $value['right'], $value['bottom'], $value['left'] );
	}
}
