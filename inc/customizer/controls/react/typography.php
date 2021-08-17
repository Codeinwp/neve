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
	 * @var array|mixed
	 */
	public $input_attrs = [];
	/**
	 * Refresh on reset flag.
	 *
	 * @var bool
	 */
	public $refresh_on_reset = false;

	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['input_attrs']      = is_array( $this->input_attrs ) ? wp_json_encode( $this->input_attrs ) : $this->input_attrs;
		$this->json['refresh_on_reset'] = $this->refresh_on_reset;
	}
}
