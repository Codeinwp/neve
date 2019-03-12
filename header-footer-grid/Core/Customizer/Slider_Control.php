<?php
/**
 * Custom Control class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Customizer;

/**
 * Class Slider_Control
 *
 * @package HFG\Core\Customizer
 */
class Slider_Control extends Abstract_Control {
	/**
	 * The type of control being rendered
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var string $type
	 */
	public $type = 'slider_control';

	/**
	 * Enqueue our scripts and styles
	 */
	public function enqueue() {
		wp_enqueue_script( 'hfg-custom-controls-js', $this->hfg_settings->url . '/assets/js/customizer/hfg_controls.js', array( 'jquery', 'jquery-ui-core' ), '1.0', true );
		wp_enqueue_style( 'hfg-custom-controls-css', $this->hfg_settings->url . '/assets/css/admin/hfg_controls.css', array(), '1.0', 'all' );
	}

	/**
	 * Render the control in the customizer
	 */
	public function render_content() {
		$html  = '<div class="slider-custom-control">';
		$html .= '<span class="customize-control-title">' . esc_html( $this->label ) . '</span>';
		$html .= '<input type="number" id="<' . esc_attr( $this->id ) . '" name="' . esc_attr( $this->id ) . '" value="' . esc_attr( $this->value() ) . '" class="customize-control-slider-value" ' . $this->safe_echo( array( $this, 'link' ) ) . ' />';
		$html .= '<div class="slider" slider-min-value="' . esc_attr( $this->input_attrs['min'] ) . '" slider-max-value="' . esc_attr( $this->input_attrs['max'] ) . '" slider-step-value="' . esc_attr( $this->input_attrs['step'] ) . '"></div>';
		$html .= '<span class="slider-reset dashicons dashicons-image-rotate" slider-reset-value="' . esc_attr( $this->value() ) . '"></span>';
		$html .= '</div>';

		echo  $html;
	}
}
