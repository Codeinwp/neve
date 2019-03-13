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
		$html .= '
		<ul class="responsive-switchers">
			' . $this->render_responsive_toggles( $this->responsive->get_devices() ) . '
		</ul>
		';
		$html .= '</div>';

		$html .= '<div class="has-media-queries" >';

		$html .= '<div class="desktop control-wrap active" >';
		$html .= $this->render_control( '_desktop' );
		$html .= '</div>';

		$html .= '<div class="tablet control-wrap" >';
		$html .= $this->render_control( '_tablet' );
		$html .= '</div>';

		$html .= '<div class="mobile control-wrap" >';
		$html .= $this->render_control( '_mobile' );
		$html .= '</div>';
		$html .= '</div>';

		echo $html;
	}
}
