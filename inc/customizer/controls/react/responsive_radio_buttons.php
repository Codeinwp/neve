<?php
/**
 * Responsive_Radio_Buttons Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Responsive_Range
 *
 * @package Neve\Customizer\Controls\React
 */
class Responsive_Radio_Buttons extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_responsive_radio_buttons_control';

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $choices = [];

	/**
	 * Send to JS.
	 */
	public function json() {
		$json            = parent::json();
		$json['choices'] = $this->choices;
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
