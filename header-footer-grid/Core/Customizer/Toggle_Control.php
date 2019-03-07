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
 * Class Toggle_Control
 *
 * @package HFG\Core\Customizer
 */
class Toggle_Control extends Abstract_Control {
	/**
	 * The type of control being rendered
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var string $type
	 */
	public $type = 'toggle_switch';

	/**
	 * Enqueue our scripts and styles
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function enqueue() {
		wp_enqueue_style( 'hfg-custom-controls-css', $this->hfg_settings->url . '/assets/css/admin/hfg_controls.css', array(), '1.0', 'all' );
	}

	/**
	 * Render the control in the customizer
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_content() {

		$html  = '<div class="toggle-switch-control">';
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
