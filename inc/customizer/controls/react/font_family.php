<?php
/**
 * Font_Family Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Button_Appearance
 *
 * @package Neve\Customizer\Controls\React
 */
class Font_Family extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_font_family_control';
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
		$this->json['input_attrs'] = $this->input_attrs;
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
