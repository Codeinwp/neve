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
