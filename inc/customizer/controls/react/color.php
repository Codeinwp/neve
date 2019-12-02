<?php
/**
 * Color Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Button_Appearance
 *
 * @package Neve\Customizer\Controls\React
 */
class Color extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_color_control';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $default = [];
	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['default'] = $this->default;
	}
}
