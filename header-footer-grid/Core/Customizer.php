<?php
namespace HFG\Core;

use HFG\Config\Customizer\Style;
use HFG\Config\Customizer\Typography;
use HFG\Traits\Core;
use WP_Customize_Color_Control;
use WP_Customize_Manager;

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
				'HFGPreviewConfig',
				array(
					'fields'         => Settings::get_instance()->get_config(),
					'devices'        => array( 'desktop', 'tablet', 'mobile' ),//$this->devices,
					'typo_fields'    => $this->get_typo_fields(),
					'styling_config' => $this->get_styling_config(),
				)
			);
		}
	}

	public function register( WP_Customize_Manager $wp_customize ) {
		$wp_customize->add_section( 'header_button' , array(
			'title'    => __( 'Visible Section Name', 'starter' ),
			'priority' => 30,
			'panel' => 'neve_header',
		) );

		$wp_customize->add_setting( 'header_button_setting' , array(
			'default'   => '#000000',
			'transport' => 'refresh',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'link_color', array(
			'label'    => __( 'Header Color', 'starter' ),
			'section'  => 'header_button',
			'settings' => 'header_button_setting',
		) ) );
	}

	public function get_typo_fields() {
		return new Typography();
	}

	public function get_styling_config() {
		$fields = new Style();
		return apply_filters( 'hfg/get_styling_config', $fields );
	}
}