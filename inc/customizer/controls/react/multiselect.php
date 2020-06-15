<?php
/**
 * Multiselect Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Button_Appearance
 *
 * @package Neve\Customizer\Controls\React
 */
class Multiselect extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_multiselect';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $choices = [];
	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['choices'] = $this->choices;
	}
}
