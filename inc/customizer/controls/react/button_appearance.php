<?php
/**
 * Button_Appearance Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Button_Appearance
 *
 * @package Neve\Customizer\Controls\React
 */
class Button_Appearance extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_button_appearance';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var bool
	 */
	public $no_hover = false;
	/**
	 * Default values.
	 *
	 * @var array
	 */
	public $default_vals = [];

	/**
	 * Send to JS.
	 */
	public function json() {
		$json                = parent::json();
		$json['no_hover']    = $this->no_hover;
		$json['defaultVals'] = $this->default_vals;
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
