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
	public function json() {
		$json             = parent::json();
		$json['excluded'] = $this->excluded_devices;
		return $json;
	}

	/**
	 * This method overrides the default render
	 * so that nothing is rendered.
	 * Previously it would try to put an input element where the value was `esc_attr()`
	 * This would trigger notices in PHP
	 * It is not required to have a render as it is being handled by React.
	 */
	final public function render_content() {
		// this is rendered from React
	}
}
