<?php
/**
 * Radio Buttons Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Spacing
 *
 * @package Neve\Customizer\Controls\React
 */
class Radio_Buttons extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_radio_buttons_control';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $choices = [];
	/**
	 * Send context to the control that will handle the choices differently.
	 *
	 * @var bool|string
	 */
	public $is_for = false;
	/**
	 * Should have larger buttons.
	 *
	 * @var bool
	 */
	public $large_buttons = false;
	/**
	 * Show the labels.
	 *
	 * @var bool
	 */
	public $show_labels = false;

	/**
	 * Footer description.
	 *
	 * @var string
	 */
	public $footer_description = '';

	/**
	 * Send to JS.
	 */
	public function json() {
		$json                      = parent::json();
		$json['choices']           = $this->choices;
		$json['is_for']            = $this->is_for;
		$json['large_buttons']     = $this->large_buttons;
		$json['showLabels']        = $this->show_labels;
		$json['footerDescription'] = $this->footer_description;
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
