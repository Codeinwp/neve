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
	 * The control that holds the font family used by this control
	 *
	 * @var string
	 */
	public $font_family_control = '';

	/**
	 * Send to JS.
	 */
	public function json() {
		$json                        = parent::json();
		$json['input_attrs']         = is_array( $this->input_attrs ) ? wp_json_encode( $this->input_attrs ) : $this->input_attrs;
		$json['refresh_on_reset']    = $this->refresh_on_reset;
		$json['font_family_control'] = $this->font_family_control;
		return $json;
	}
}
