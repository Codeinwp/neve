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
	 * Send to JS.
	 */
	public function json() {
		$json                  = parent::json();
		$json['choices']       = $this->choices;
		$json['is_for']        = $this->is_for;
		$json['large_buttons'] = $this->large_buttons;
		$json['showLabels']    = $this->show_labels;
		return $json;
	}
}
