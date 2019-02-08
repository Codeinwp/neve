<?php
namespace HFG\Core;

use HFG\Config\Customizer\Style;
use HFG\Config\Customizer\Typography;
use HFG\Traits\Core;

class Customizer {
	use Core;
	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 */
	function preview_js() {
		if ( is_customize_preview() ) {
			$suffix = $this->get_assets_suffix();

			wp_enqueue_script( 'hfg-customizer-auto-css', esc_url( get_template_directory_uri() ) . '/header-footer-grid/assets/js/customizer/auto-css' . $suffix . '.js', array( 'customize-preview' ), '20151215', true );
			wp_enqueue_script(
				'hfg-customizer',
				esc_url( get_template_directory_uri() ) . '/header-footer-grid/assets/js/customizer/customizer' . $suffix . '.js',
				array(
					'customize-preview',
					'customize-selective-refresh',
				),
				'20151215',
				true
			);
			wp_localize_script(
				'hfg-customizer-auto-css',
				'HFPreviewConfig',
				array(
					'fields'         => [],//$this->get_config(),
					'devices'        => array( 'desktop', 'tablet', 'mobile' ),//$this->devices,
					'typo_fields'    => $this->get_typo_fields(),
					'styling_config' => $this->get_styling_config(),
				)
			);
		}
	}

	public function get_typo_fields() {
		return new Typography();
	}

	public function get_styling_config() {
		$fields = new Style();

		return apply_filters( 'customify/get_styling_config', $fields );
	}
}