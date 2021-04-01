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

	/**
	 * Render the custom attributes for the control's input element.
	 */
	public function input_attrs() {
		foreach ( $this->input_attrs as $attr => $value ) {
			if ( is_array( $value ) && ! empty( $value ) ) {
				echo esc_html( $attr ) . '="' . wp_json_encode( $value ) . '" ';
			} else {
				echo esc_html( $attr ) . '="' . esc_attr( $value ) . '" ';
			}
		}
	}
}
