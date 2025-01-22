<?php
/**
 * Sidebar layout section.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      20/08/2018
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Defaults\Layout;
use Neve\Customizer\Defaults\Utils;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Layout_Sidebar
 *
 * @package Neve\Customizer\Options
 */
class Layout_Sidebar extends Base_Customizer {

	use Layout;
	use Utils;

	/**
	 * Advanced controls.
	 *
	 * @var array
	 */
	private $advanced_controls = [];

	/**
	 * Add woo controls.
	 */
	private function add_woocommerce_controls() {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return;
		}

		$this->advanced_controls = array_merge(
			$this->advanced_controls,
			[
				'shop_archive'   => __( 'Shop / Archive', 'neve' ),
				'single_product' => __( 'Single Product', 'neve' ),
			]
		);
	}


	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_sidebar();
		$this->add_main_controls();
		$this->add_advanced_controls();
	}

	/**
	 * Add customize section
	 */
	private function section_sidebar() {
		$this->add_section(
			new Section(
				'neve_sidebar',
				array(
					'priority' => 30,
					'title'    => esc_html__( 'Content / Sidebar', 'neve' ),
					'panel'    => 'neve_layout',
				)
			)
		);
	}

	/**
	 * Site-wide controls that will affect all pages.
	 */
	private function add_main_controls() {
		$this->add_control(
			new Control(
				'neve_default_sidebar_layout',
				array(
					'sanitize_callback' => array( $this, 'sanitize_sidebar_layout' ),
					'default'           => 'right',
				),
				array(
					'label'           => __( 'Sitewide Sidebar Layout', 'neve' ),
					'section'         => 'neve_sidebar',
					'priority'        => 10,
					'choices'         => $this->sidebar_layout_choices( 'neve_default_sidebar_layout' ),
					'active_callback' => array( $this, 'sidewide_options_active_callback' ),
				),
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);

		$this->add_control(
			new Control(
				'neve_sitewide_content_width',
				[
					'sanitize_callback' => 'absint',
					'transport'         => $this->selective_refresh,
					'default'           => 70,
				],
				[
					'label'           => esc_html__( 'Sitewide Content Width (%)', 'neve' ),
					'section'         => 'neve_sidebar',
					'type'            => 'neve_range_control',
					'input_attrs'     => [
						'min'        => 50,
						'max'        => 100,
						'defaultVal' => 70,
					],
					'priority'        => 20,
					'active_callback' => [ $this, 'sidewide_options_active_callback' ],
				],
				'Neve\Customizer\Controls\React\Range'
			)
		);

		if ( ! get_theme_mod( 'neve_advanced_layout_options', true ) ) {
			$this->add_control(
				new Control(
					'neve_advanced_layout_options',
					array(
						'sanitize_callback' => 'neve_sanitize_checkbox',
						'default'           => true,
					),
					array(
						'label'    => esc_html__( 'Enable Advanced Options', 'neve' ),
						'section'  => 'neve_sidebar',
						'type'     => 'neve_toggle_control',
						'priority' => 30,
					)
				)
			);
		}
	}

	/**
	 * Retrieve the advanced controls for the sidebar layout.
	 *
	 * @return array The array of advanced controls.
	 */
	public function get_advanced_controls() {
		if ( empty( $this->advanced_controls ) ) {
			$this->advanced_controls = [];
			$this->add_woocommerce_controls();
			$this->advanced_controls['other_pages'] = __( 'Inner Pages', 'neve' );
		}
		return $this->advanced_controls;
	}
	/**
	 * Advanced controls.
	 */
	private function add_advanced_controls() {
		$priority = 40;

		/**
		 * Filters the sidebar advanced controls.
		 *
		 * @param array $advanced_controls Container style controls.
		 *
		 * @since 3.1.0
		 */
		$advanced_controls = apply_filters( 'neve_sidebar_controls_filter', $this->get_advanced_controls() );
		foreach ( $advanced_controls as $id => $heading_label ) {
			$heading_id = 'neve_' . $id . '_heading';
			$layout_id  = 'neve_' . $id . '_sidebar_layout';
			$width_id   = 'neve_' . $id . '_content_width';

			$this->add_control(
				new Control(
					$heading_id,
					array(
						'sanitize_callback' => 'sanitize_text_field',
						'transport'         => $this->selective_refresh,
					),
					array(
						'label'            => $heading_label,
						'section'          => 'neve_sidebar',
						'priority'         => $priority,
						'class'            => esc_attr( 'advanced-sidebar-accordion-' . $heading_id ),
						'accordion'        => true,
						'controls_to_wrap' => 2,
						'expanded'         => ( $priority === 40 ), // true or false
						'active_callback'  => array( $this, 'advanced_options_active_callback' ),
					),
					'Neve\Customizer\Controls\Heading'
				)
			);

			$priority += 30;

			$this->add_control(
				new Control(
					$layout_id,
					array(
						'sanitize_callback' => array( $this, 'sanitize_sidebar_layout' ),
						'default'           => $this->sidebar_layout_alignment_default( $layout_id ),
					),
					array(
						'label'           => __( 'Sidebar Layout', 'neve' ),
						'description'     => $this->get_sidebar_control_description( $layout_id ),
						'section'         => 'neve_sidebar',
						'priority'        => $priority,
						'choices'         => $this->sidebar_layout_choices( $layout_id ),
						'active_callback' => array( $this, 'advanced_options_active_callback' ),
					),
					'\Neve\Customizer\Controls\React\Radio_Image'
				)
			);

			$priority += 30;

			$width_default = $this->sidebar_layout_width_default( $width_id );

			$this->add_control(
				new Control(
					$width_id,
					array(
						'sanitize_callback' => 'absint',
						'transport'         => $this->selective_refresh,
						'default'           => $width_default,
					),
					array(
						'label'           => esc_html__( 'Content Width (%)', 'neve' ),
						'section'         => 'neve_sidebar',
						'type'            => 'neve_range_control',
						'input_attrs'     => [
							'min'        => 50,
							'max'        => 100,
							'defaultVal' => $width_default,
						],
						'priority'        => $priority,
						'active_callback' => array( $this, 'advanced_options_active_callback' ),
					),
					'Neve\Customizer\Controls\React\Range'
				)
			);

			$priority += 30;
		}
	}

	/**
	 * Active callback function for site-wide options
	 */
	public function sidewide_options_active_callback() {
		return ! $this->advanced_options_active_callback();
	}

	/**
	 * Active callback function for advanced controls
	 */
	public function advanced_options_active_callback() {
		return get_theme_mod( 'neve_advanced_layout_options', true );
	}
}
