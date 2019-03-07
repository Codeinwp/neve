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
 * Class Heading_Control
 *
 * @package HFG\Core\Customizer
 */
class Heading_Control extends Abstract_Control {

	/**
	 * The control type
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var string $type
	 */
	public $type = 'heading';

	/**
	 * The render content.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_content() {
		$html  = '';
		$html .= '<div class="hfg-control--heading">';
		$html .= '<label>';
		if ( ! empty( $this->label ) ) {
			$html .= '<span class="customize-control-title">' . esc_html( $this->label ) . '</span>';
		}
		$html .= '</label>';
		$html .= '</div>';
		if ( ! empty( $this->description ) ) {
			$html .= '<span class="description customize-control-description">' . wp_kses_post( $this->description ) . '</span>';
		}

		echo $html;
	}
}
