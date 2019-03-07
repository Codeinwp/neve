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
 * Class Image_Radio_Control
 *
 * @package HFG\Core\Customizer
 */
class Image_Radio_Control extends Abstract_Control {
	/**
	 * The type of control being rendered
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var string $type
	 */
	public $type = 'image_radio_button';

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
		$html = '<div class="image_radio_button_control">';
		if ( ! empty( $this->label ) ) {
			$html .= '<span class="customize-control-title">' . esc_html( $this->label ) . '</span>';
		}

		if ( ! empty( $this->description ) ) {
			$html .= '<span class="customize-control-description">' . esc_html( $this->description ) . '</span>';
		}

		foreach ( $this->choices as $key => $value ) {
			$html .= '<label class="radio-button-label">';
			$html .= '<input type="radio" name="' . esc_attr( $this->id ) . '" value="' . esc_attr( $key ) . '" ' . $this->safe_echo( array( $this, 'link' ) ) . ' ' . checked( esc_attr( $key ), $this->value(), false ) . '/>';
			$html .= '<img style="max-width: 64px; width: 100%;" src="' . esc_attr( $value['image'] ) . '" alt="' . esc_attr( $value['name'] ) . '" title="' . esc_attr( $value['name'] ) . '" />';
			$html .= '</label>';
		}
		$html .= '</div>';

		echo $html;
	}
}
