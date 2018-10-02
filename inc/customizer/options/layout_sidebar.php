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
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Layout_Sidebar
 *
 * @package Neve\Customizer\Options
 */
class Layout_Sidebar extends Base_Customizer {
	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_sidebar();
		$this->control_sidebar_width();
		$this->accordion_heading();
		$this->control_sidebar_layout();
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
					'title'    => esc_html__( 'Sidebar', 'neve' ),
					'panel'    => 'neve_layout',
				)
			)
		);
	}

	/**
	 * Add sidebar width control
	 */
	private function control_sidebar_width() {
		$this->add_control(
			new Control(
				'neve_sidebar_width',
				array(
					'sanitize_callback' => 'absint',
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'      => esc_html__( 'Sidebar width (%)', 'neve' ),
					'section'    => 'neve_sidebar',
					'type'       => 'range-value',
					'step'       => 1,
					'input_attr' => array(
						'min'     => 10,
						'max'     => 50,
						'default' => 30,
					),
					'priority'   => 30,
				),
				'Neve\Customizer\Controls\Range'
			)
		);
	}

	/**
	 * Add accordion heading.
	 */
	private function accordion_heading() {
		$this->add_control(
			new Control(
				'sidebars_ui_heading',
				array(
					'sanitize_callback' => 'sanitize_text_field',
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'            => __( 'Advanced', 'neve' ),
					'section'          => 'neve_sidebar',
					'priority'         => 33,
					'class'            => 'advanced-sidebar-accordion',
					'accordion'        => true,
					'controls_to_wrap' => class_exists( 'WooCommerce' ) ? 4 : 2,
					'expanded'         => false,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);

	}

	/**
	 * Add sidebar layout controls
	 */
	private function control_sidebar_layout() {
		$sidebar_layout_controls = array(
			'neve_default_sidebar_layout'      => array(
				'priority' => 30,
				'label'    => __( 'Default Sidebar Layout', 'neve' ),
			),
			'neve_blog_archive_sidebar_layout' => array(
				'priority' => 35,
				'label'    => __( 'Blog / Archive Sidebar Layout', 'neve' ),
			),
			'neve_single_post_sidebar_layout'  => array(
				'priority' => 40,
				'label'    => __( 'Single Post Sidebar Layout', 'neve' ),
			),
		);

		if ( class_exists( 'WooCommerce' ) ) {
			$sidebar_layout_controls = array_merge(
				$sidebar_layout_controls,
				array(
					'neve_shop_archive_sidebar_layout'   => array(
						'priority' => 45,
						'label'    => __( 'Shop / Archive Sidebar Layout', 'neve' ),
					),
					'neve_single_product_sidebar_layout' => array(
						'priority' => 50,
						'label'    => __( 'Single Product Sidebar Layout', 'neve' ),
					),
				)
			);
		}

		foreach ( $sidebar_layout_controls as $control_id => $control ) {
			$this->add_control(
				new Control(
					$control_id,
					array(
						'sanitize_callback' => array( $this, 'sanitize_sidebar_layout' ),
						'default'           => 'right',
					),
					array(
						'label'    => $control['label'],
						'section'  => 'neve_sidebar',
						'priority' => $control['priority'],
						'choices'  => $this->sidebar_layout_choices(),
					),
					'Neve\Customizer\Controls\Radio_Image'
				)
			);
		}
	}

	/**
	 * Sanitize the sidebar layout value
	 *
	 * @param string $value value from the control.
	 *
	 * @return bool
	 */
	public function sanitize_sidebar_layout( $value ) {
		$allowed_values = array( 'left', 'right', 'full-width' );
		if ( ! in_array( $value, $allowed_values ) ) {
			return 'right';
		}

		return esc_html( $value );
	}

	/**
	 * Get the sidebar layout choices.
	 *
	 * @return array
	 */
	private function sidebar_layout_choices() {
		return array(
			'full-width' => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAQMAAABknzrDAAAABlBMVEX////V1dXUdjOkAAAAPUlEQVRIx2NgGAUkAcb////Y/+d/+P8AdcQoc8vhH/X/5P+j2kG+GA3CCgrwi43aMWrHqB2jdowEO4YpAACyKSE0IzIuBgAAAABJRU5ErkJggg==',
			),
			'left'       => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAWElEQVR42mNgGAXDE4RCQMDAKONaBQINWqtWrWBatQDIaxg8ygYqQIAOYwC6bwHUmYNH2eBPSMhgBQXKRr0w6oVRL4x6YdQLo14Y9cKoF0a9QCO3jYLhBADvmFlNY69qsQAAAABJRU5ErkJggg==',
			),
			'right'      => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAWUlEQVR42mNgGAUjB4iGgkEIzZStAoEVTECiQWsVkLdiECkboAABOmwBF9BtUGcOImUDEiCkJCQU0ECBslEvjHph1AujXhj1wqgXRr0w6oVRLwyEF0bBUAUAz/FTNXm+R/MAAAAASUVORK5CYII=',
			),
		);
	}
}
