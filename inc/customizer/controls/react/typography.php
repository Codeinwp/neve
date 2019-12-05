<?php
/**
 * Typography control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Typography
 *
 * @package Neve\Customizer\Controls\React
 */
class Typography extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_typeface_control';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $input_attrs = [];

	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['input_attrs'] = is_array( $this->input_attrs ) ? json_encode( $this->input_attrs ) : $this->input_attrs;
	}
}
