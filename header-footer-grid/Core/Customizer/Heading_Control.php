<?php
namespace HFG\Core\Customizer;

use WP_Customize_Control;

class Heading_Control extends WP_Customize_Control {
	public $type = 'heading';

	public function render_content() {
		$html = '';
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