<?php
/**
 * Repeater Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Repeater
 *
 * @package Neve\Customizer\Controls\React
 */
class Repeater extends \WP_Customize_Control {

	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_repeater_control';

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $fields = [];

	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['fields'] = $this->fields;
	}
}
