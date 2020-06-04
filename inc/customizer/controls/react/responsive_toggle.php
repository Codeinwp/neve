<?php
/**
 * Responsive Toggle. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Button_Appearance
 *
 * @package Neve\Customizer\Controls\React
 */
class Responsive_Toggle extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_responsive_toggle_control';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $excluded_devices = [];
	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['excluded'] = $this->excluded_devices;
	}
}
