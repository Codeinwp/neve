<?php
namespace HFG\Core\Customizer;

use HFG\Core\Settings;
use WP_Customize_Control;
use WP_Customize_Manager;

class Text_Radio_Control extends WP_Customize_Control {
	/**
	 * The type of control being rendered
	 */
	public $type = 'text_radio_button';

	public $hfg_settings;

	/**
	 * Constructor
	 *
	 * @param WP_Customize_Manager $manager
	 * @param string               $id
	 * @param array                $args
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
		wp_enqueue_style( 'hfg-custom-controls-css', $this->hfg_settings->url . '/assets/css/admin/hfg_controls.css', array(), '1.0', 'all' );
	}

	/**
	 * Render the control in the customizer
	 */
	public function render_content() {

		$html = '<div class="text_radio_button_control">';
		if ( ! empty( $this->label ) ) {
			$html .= '<span class="customize-control-title">' . esc_html( $this->label ) . '</span>';
		}
		if ( ! empty( $this->description ) ) {
			$html .= '<span class="customize-control-description">' . esc_html( $this->description ) . '</span>';
		}
		$html .= '<div class="radio-buttons">';
		foreach ( $this->choices as $key => $value ) {
			$html .= '<label class="radio-button-label">';
			$html .= '<input type="radio" name="' . esc_attr( $this->id ) . '" value="' . esc_attr( $key ) . '" ' . $this->safe_echo( array( $this, 'link' ) ) . ' ' . checked( esc_attr( $key ), $this->value(), false ) . '/>';
			$html .= '<span>' . esc_attr( $value ) . '</span>';
			$html .= '</label>';
		}
		$html .= '</div>';
		$html .= '</div>';

		echo $html;
	}
}
