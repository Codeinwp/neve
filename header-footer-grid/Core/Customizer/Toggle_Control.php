<?php
namespace HFG\Core\Customizer;

use HFG\Core\Settings;
use WP_Customize_Control;
use WP_Customize_Manager;

class Toggle_Control extends WP_Customize_Control {
	/**
	 * The type of control being rendered
	 */
	public $type = 'toggle_switch';

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

		$html = '<div class="toggle-switch-control">';
		$html .= '<div class="toggle-switch">';
		$html .= '<input type="checkbox" id="' . esc_attr( $this->id ) . '" name="' . esc_attr( $this->id ) . '" class="toggle-switch-checkbox" value="' . esc_attr( $this->value() ) . '" ' . $this->safe_echo( array( $this, 'link' ) ) . ' ' . checked( $this->value(), 0, false ) . '>';
		$html .= '<label class="toggle-switch-label" for="' . esc_attr( $this->id ) . '">';
		$html .= '<span class="toggle-switch-inner"></span>';
		$html .= '<span class="toggle-switch-switch"></span>';
		$html .= '</label>';
		$html .= '</div>';
		$html .= '<span class="customize-control-title">' . esc_html( $this->label ) . '</span>';
		if ( ! empty( $this->description ) ) {
			$html .= '<span class="customize-control-description">' . esc_html( $this->description ) . '</span>';
		}
		$html .= '</div>';

		echo $html;
	}
}
