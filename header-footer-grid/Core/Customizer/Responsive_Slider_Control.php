<?php
namespace HFG\Core\Customizer;

use HFG\Traits\Responsive;

class Responsive_Slider_Control extends Slider_Control {
	use Responsive;

	/**
	 * Render the control in the customizer
	 */
	public function render_content() {

		$html  = '<div class="responsive-slider-custom-control" >';
		$html .= '<span class="control-title"><b>' . esc_html( $this->label ) . '</b></span>';
		$html .= '
		<ul class="responsive-switchers">
			' . $this->render_responsive_toggles( $this->responsive->get_devices() ) . '
		</ul>
		';
		$html .= '</div>';

		$html .= '<div class="has-media-queries" >';

		$first = true;
		foreach ( $this->responsive->get_devices() as $device ) {
			$html .= '<div class="' . $device . ' control-wrap ' . ( ($first) ? 'active' : '' ) . '" >';
			$html .= $this->render_control( '_' . $device );
			$html .= '</div>';
			$first = false;
		}
		$html .= '</div>';

		echo $html;
	}
}
