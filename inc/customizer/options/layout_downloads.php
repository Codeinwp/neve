<?php
/**
 * Author:          Uriahs Victor
 * Created on:      15/09/2021 (d/m/y)
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Defaults\Layout;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Layout_Blog
 *
 * @package Neve\Customizer\Options
 */
class Layout_Downloads extends Base_Customizer {
	use Layout;

	/**
	 * Check if Easy Digital Downloads is active.
	 * 
	 * @return bool
	 */
	private function is_edd_active() {
		return class_exists( 'Easy_Digital_Downloads' );
	}

	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		if ( ! $this->is_edd_active() ) {
			return;
		}

		$this->section_downloads();
		$this->add_layout_controls();
	}

	/**
	 * Add customize section
	 */
	private function section_downloads() {
		$this->add_section(
			new Section(
				'neve_edd_archive',
				array(
					'priority' => 10,
					'title'    => esc_html__( 'Archive', 'neve' ),
					'panel'    => 'neve_download',
				)
			)
		);

		$this->add_section(
			new Section(
				'neve_edd_single_posts',
				array(
					'priority' => 20,
					'title'    => esc_html__( 'Single Posts', 'neve' ),
					'panel'    => 'neve_download',
				)
			)
		);
	}

	/**
	 * Add EDD layout controls.
	 */
	private function add_layout_controls() {
	
		$this->add_control(
			new Control(
				'neve_edd_grid_layout',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Download Grid', 'neve' ),
					'section'          => 'neve_edd_archive',
					'priority'         => 10,
					'class'            => 'grid-layout-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 2,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_edd_grid_columns',
				[
					'sanitize_callback' => 'neve_sanitize_range_value',
					'transport'         => 'postMessage',
					'default'           => '{"desktop":3,"tablet":2,"mobile":1}',
				],
				[
					'label'                 => esc_html__( 'Columns', 'neve' ),
					'section'               => 'neve_edd_archive',
					'type'                  => 'neve_responsive_range_control',
					'input_attrs'           => [
						'max'        => 6,
						'defaultVal' => [
							'mobile'  => 1,
							'tablet'  => 2,
							'desktop' => 3,
						],
					],
					'priority'              => 20,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'responsive' => true,
							'vars'       => '--grid-cols',
							'selector'   => '#neve-edd-download-archive-container #neve-edd-grid-container',
						],
					],
				],
				'Neve\Customizer\Controls\React\Responsive_Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_edd_grid_spacing',
				[
					'sanitize_callback' => 'neve_sanitize_range_value',
					'transport'         => 'postMessage',
					'default'           => '{"desktop":40,"tablet":30,"mobile":20}',
				],
				[
					'label'                 => esc_html__( 'Grid Spacing', 'neve' ),
					'section'               => 'neve_edd_archive',
					'type'                  => 'neve_responsive_range_control',
					'input_attrs'           => [
						'max'        => 80,
						'units'      => [ 'px' ],
						'defaultVal' => [
							'mobile'  => 20,
							'tablet'  => 30,
							'desktop' => 40,
						],
					],
					'priority'              => 30,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'responsive' => true,
							'vars'       => '--grid-cols-spacing',
							'selector'   => '#neve-edd-download-archive-container #neve-edd-grid-container',
							'suffix'     => 'px',
						],
					],
				],
				'Neve\Customizer\Controls\React\Responsive_Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_edd_buy_button_color',
				array(
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => '#2f5aae',
					'transport'         => 'postMessage',
				),
				array(
					'label'                 => esc_html__( 'Button Color', 'neve' ),
					'section'               => 'neve_edd_archive',
					'priority'              => 40,
					'default'               => '#ffffff',
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--edd-btn-color',
							'selector' => '.neve-edd-download-buy-btn a',
						],
					],
				),
				'Neve\Customizer\Controls\React\Color'
			)
		);

		$this->add_control(
			new Control(
				'neve_edd_single_post_layout',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Single Post', 'neve' ),
					'section'          => 'neve_edd_single_posts',
					'priority'         => 10,
					'class'            => 'single-post-layout-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 5,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);
	}

}
