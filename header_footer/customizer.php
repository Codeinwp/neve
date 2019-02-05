<?php
class HeaderFooterCustomizer {

	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 */
	function preview_js() {
		if ( is_customize_preview() ) {
			//$suffix = Customify()->get_asset_suffix();
			$suffix = '';

			wp_enqueue_script( 'hf-customizer-auto-css', esc_url( get_template_directory_uri() ) . '/header_footer/assets/js/customizer/auto-css' . $suffix . '.js', array( 'customize-preview' ), '20151215', true );
			wp_enqueue_script(
				'hf-customizer',
				esc_url( get_template_directory_uri() ) . '/header_footer/assets/js/customizer/customizer' . $suffix . '.js',
				array(
					'customize-preview',
					'customize-selective-refresh',
				),
				'20151215',
				true
			);
			wp_localize_script(
				'hf-customizer-auto-css',
				'HFPreviewConfig',
				array(
					'fields'         => [],//$this->get_config(),
					'devices'        => [],//$this->devices,
					'typo_fields'    => [],//$this->get_typo_fields(),
					'styling_config' => [],//$this->get_styling_config(),
				)
			);
		}
	}
}