<?php
/**
 * Global_Colors Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Global_Colors
 *
 * @package Neve\Customizer\Controls\React
 */
class Global_Colors extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_global_colors';
	/**
	 * Default values.
	 *
	 * @var string
	 */
	public $default_values = '';

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var string
	 */
	public $input_attrs = [];

	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['defaultValues'] = $this->default_values;
		$this->json['input_attrs']   = $this->input_attrs;
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
