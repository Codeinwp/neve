<?php
/**
 * Spacing Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Spacing
 *
 * @package Neve\Customizer\Controls\React
 */
class Spacing extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_spacing';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $input_attrs = [];

	/**
	 * Default value.
	 *
	 * @var array
	 */
	public $default = [];

	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['input_attrs'] = $this->input_attrs;
		$this->json['default']     = $this->default;
	}

	/**
	 * Render the custom attributes for the control's input element.
	 */
	public function input_attrs() {
		foreach ( $this->input_attrs as $attr => $value ) {
			if ( is_array( $value ) && ! empty( $value ) ) {
				echo esc_html( $attr ) . '="' . esc_attr( wp_json_encode( $value ) ) . '" ';
			} else {
				echo esc_html( $attr ) . '="' . esc_attr( $value ) . '" ';
			}
		}
	}
}
