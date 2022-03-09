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
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Layout_Sidebar
 *
 * @package Neve\Customizer\Options
 */
class Layout_Sidebar extends Base_Customizer {

	use Layout;

	/**
	 * Advanced controls.
	 *
	 * @var array
	 */
	private $advanced_controls = [];

	/**
	 * New skin.
	 *
	 * @var boolean
	 */
	private $new_skin;

	/**
	 * Layout_Sidebar constructor.
	 */
	public function __construct() {
		$this->new_skin = neve_is_new_skin();

		$this->advanced_controls = [
			'blog_archive' => __( 'Blog / Archive', 'neve' ),
			'single_post'  => __( 'Single Post', 'neve' ),
		];

		$this->add_woocommerce_controls();

		$this->advanced_controls['other_pages'] = __( 'Others', 'neve' );
	}

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

		$this->add_control(
			new Control(
				'neve_advanced_layout_options',
				array(
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => $this->new_skin,
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

	/**
	 * Get the sidebar layout choices.
	 *
	 * @param string $control_id Name of the control.
	 *
	 * @return array
	 */
	private function sidebar_layout_choices( $control_id ) {
		$options = apply_filters(
			'neve_sidebar_layout_choices',
			array(
				'full-width' => array(
					'name' => __( 'Full Width', 'neve' ),
					'url'  => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAQMAAABknzrDAAAABlBMVEX////V1dXUdjOkAAAAPUlEQVRIx2NgGAUkAcb////Y/+d/+P8AdcQoc8vhH/X/5P+j2kG+GA3CCgrwi43aMWrHqB2jdowEO4YpAACyKSE0IzIuBgAAAABJRU5ErkJggg==',
				),
				'left'       => array(
					'name' => __( 'Left', 'neve' ),
					'url'  => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAWElEQVR42mNgGAXDE4RCQMDAKONaBQINWqtWrWBatQDIaxg8ygYqQIAOYwC6bwHUmYNH2eBPSMhgBQXKRr0w6oVRL4x6YdQLo14Y9cKoF0a9QCO3jYLhBADvmFlNY69qsQAAAABJRU5ErkJggg==',
				),
				'right'      => array(
					'name' => __( 'Right', 'neve' ),
					'url'  => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAWUlEQVR42mNgGAUjB4iGgkEIzZStAoEVTECiQWsVkLdiECkboAABOmwBF9BtUGcOImUDEiCkJCQU0ECBslEvjHph1AujXhj1wqgXRr0w6oVRLwyEF0bBUAUAz/FTNXm+R/MAAAAASUVORK5CYII=',
				),
			),
			$control_id
		);

		foreach ( $options as $slug => $args ) {
			if ( ! isset( $args['name'] ) ) {
				$options[ $slug ]['name'] = ucwords( str_replace( '-', ' ', $slug ) );
			}
		}

		return $options;
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
		$this->advanced_controls = apply_filters( 'neve_sidebar_controls_filter', $this->advanced_controls );
		foreach ( $this->advanced_controls as $id => $heading_label ) {
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
	 * Get the description for sidebar position.
	 *
	 * @param string $control_id Control id.
	 *
	 * @return string
	 */
	private function get_sidebar_control_description( $control_id ) {
		if ( $control_id !== 'neve_shop_archive_sidebar_layout' ) {
			return '';
		}

		$shop_id = get_option( 'woocommerce_shop_page_id' );
		if ( empty( $shop_id ) ) {
			return '';
		}

		$meta = get_post_meta( $shop_id, 'neve_meta_sidebar', true );
		if ( empty( $meta ) || $meta === 'default' ) {
			return '';
		}

		/* translators: %s is Notice text */
		$template = '<p class="notice notice-info">%s</p>';

		return sprintf(
			$template,
			sprintf(
			/* translators: %s is edit page link */
				esc_html__( 'Note: It seems that the shop page has an individual sidebar layout already set. To be able to control the layout from here, %s your page and set the sidebar to "Inherit".', 'neve' ),
				sprintf(
				/* translators: %s is edit label */
					'<a target="_blank" href="' . get_edit_post_link( $shop_id ) . '">%s</a>',
					__( 'edit', 'neve' )
				)
			)
		);

	}

	/**
	 * Sanitize the sidebar layout value
	 *
	 * @param string $value value from the control.
	 *
	 * @return string
	 */
	public function sanitize_sidebar_layout( $value ) {
		$allowed_values = array( 'left', 'right', 'full-width', 'off-canvas' );
		if ( ! in_array( $value, $allowed_values, true ) ) {
			return 'right';
		}

		return esc_html( $value );
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
		return get_theme_mod( 'neve_advanced_layout_options', false );
	}
}
