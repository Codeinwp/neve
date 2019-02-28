<?php
namespace HFG\Core\Customizer;

use HFG\Core\Settings;
use WP_Customize_Control;
use WP_Customize_Manager;

class Slider_Control extends WP_Customize_Control {
	/**
	 * The type of control being rendered
	 */
	public $type = 'slider_control';

	public $hfg_settings;

	/**
	 * Constructor
	 *
	 * @param WP_Customize_Manager $manager
	 * @param string $id
	 * @param array $args
	 */
	public function __construct( WP_Customize_Manager $manager, string $id, array $args = array() ) {
		parent::__construct( $manager, $id, $args );

		$this->hfg_settings = Settings::get_instance();
	}

	private function safe_echo( $function ) {
		ob_start();
		call_user_func( $function );
		return  ob_get_clean();
	}

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

		$html = '<div class="slider-custom-control">';
		$html .= '<span class="customize-control-title">' . esc_html( $this->label ) . '</span>';
		$html .= '<input type="number" id="<' . esc_attr( $this->id ) . '" name="' . esc_attr( $this->id ) . '" value="' . esc_attr( $this->value() ) . '" class="customize-control-slider-value" ' . $this->safe_echo( array( $this, 'link' ) ) . ' />';
		$html .= '<div class="slider" slider-min-value="' . esc_attr( $this->input_attrs['min'] ) . '" slider-max-value="' . esc_attr( $this->input_attrs['max'] ) . '" slider-step-value="' . esc_attr( $this->input_attrs['step'] ) . '"></div>';
		$html .= '<span class="slider-reset dashicons dashicons-image-rotate" slider-reset-value="' . esc_attr( $this->value() ) . '"></span>';
		$html .= '</div>';

		echo  $html;
	}
}