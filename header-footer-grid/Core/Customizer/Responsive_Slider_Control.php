<?php
namespace HFG\Core\Customizer;

class Responsive_Slider_Control extends Slider_Control {
	/**
	 * Render the control in the customizer
	 */
	public function render_content() {

		$html = '<div class="responsive-slider-custom-control" >';
		$html  .= '
		<ul class="responsive-switchers">
			<li class="desktop">
				<button type="button" class="preview-desktop active" data-device="desktop">
					<i class="dashicons dashicons-desktop"></i>
				</button>
			</li>
			<li class="tablet">
				<button type="button" class="preview-tablet" data-device="tablet">
					<i class="dashicons dashicons-tablet"></i>
				</button>
			</li>
			<li class="mobile">
				<button type="button" class="preview-mobile" data-device="mobile">
					<i class="dashicons dashicons-smartphone"></i>
				</button>
			</li>
		</ul>
		';
		$html .= $this->safe_echo( 'parent::render_content' );
		$html .= '</div>';

		echo $html;
	}
}