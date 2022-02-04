<?php
/**
 * Responsive_Range Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Responsive_Range
 *
 * @package Neve\Customizer\Controls\React
 */
class Responsive_Range extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_responsive_range_control';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $input_attrs = [];

	/**
	 * Send to JS.
	 */
	public function json() {
		$json                = parent::json();
		$json['input_attrs'] = $this->input_attrs;
		return $json;
	}
}
