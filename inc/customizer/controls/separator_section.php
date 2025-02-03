<?php
/**
 * Separator section.
 *
 * @package neve/neve-pro
 */
namespace Neve\Customizer\Controls;

/**
 * Customizer section.
 */
class Separator_Section extends \WP_Customize_Section {
	/**
	 * Type of this section.
	 *
	 * @var string
	 */
	public $type = 'neve_separator';

	/**
	 * Render the separator.
	 * 
	 * @return void
	 */
	public function render() {
		$output  = '<li id="accordion-section-' . $this->id . '" class="neve-separator-section">';
		$output .= '<hr/>';
		$output .= '</li>';

		echo wp_kses_post( $output );
	}
}
