<?php
/**
 * Container layout section.
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
 * Class Layout_Container
 *
 * @package Neve\Customizer\Options
 */
class Layout_Container extends Base_Customizer {
	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_container();
		$this->control_container_width();
		$this->control_container_style();
	}

	/**
	 * Add customize section
	 */
	private function section_container() {
		$this->add_section(
			new Section(
				'neve_container',
				array(
					'priority' => 25,
					'title'    => esc_html__( 'Container', 'neve' ),
					'panel'    => 'neve_layout',
				)
			)
		);
	}

	/**
	 * Add container width control
	 */
	private function control_container_width() {
		$this->add_control(
			new Control(
				'neve_container_width',
				array(
					'sanitize_callback' => 'neve_sanitize_range_value',
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'       => esc_html__( 'Container width (px)', 'neve' ),
					'section'     => 'neve_container',
					'type'        => 'range-value',
					'media_query' => true,
					'step'        => 1,
					'input_attr'  => array(
						'mobile'  => array(
							'min'     => 200,
							'max'     => 748,
							'default' => 748,
						),
						'tablet'  => array(
							'min'     => 300,
							'max'     => 992,
							'default' => 992,
						),
						'desktop' => array(
							'min'     => 700,
							'max'     => 2000,
							'default' => 1170,
						),
					),
					'priority'    => 25,
				),
				'Neve\Customizer\Controls\Range'
			)
		);
	}

	/**
	 * Add container style controls
	 */
	private function control_container_style() {
		$container_style_controls = array(
			'neve_default_container_style'      => array(
				'priority' => 30,
				'label'    => __( 'Default Container Style', 'neve' ),
			),
			'neve_blog_archive_container_style' => array(
				'priority' => 35,
				'label'    => __( 'Blog / Archive Container Style', 'neve' ),
			),
			'neve_single_post_container_style'  => array(
				'priority' => 40,
				'label'    => __( 'Single Post Container Style', 'neve' ),
			),
		);

		if ( class_exists( 'WooCommerce', false ) ) {
			$container_style_controls = array_merge(
				$container_style_controls,
				array(
					'neve_shop_archive_container_style'   => array(
						'priority' => 45,
						'label'    => __( 'Shop / Archive Container Style', 'neve' ),
					),
					'neve_single_product_container_style' => array(
						'priority' => 50,
						'label'    => __( 'Single Product Container Style', 'neve' ),
					),
				)
			);
		}

		foreach ( $container_style_controls as $control_id => $control ) {
			$this->add_control(
				new Control(
					$control_id,
					array(
						'sanitize_callback' => array( $this, 'sanitize_container_layout' ),
						'transport'         => $this->selective_refresh,
						'default'           => 'contained',
					),
					array(
						'label'    => $control['label'],
						'section'  => 'neve_container',
						'type'     => 'select',
						'priority' => $control['priority'],
						'choices'  => array(
							'contained'  => __( 'Contained', 'neve' ),
							'full-width' => __( 'Full Width', 'neve' ),
						),
					)
				)
			);
		}
	}

	/**
	 * Sanitize the container layout value
	 *
	 * @param string $value value from the control.
	 *
	 * @return bool
	 */
	public function sanitize_container_layout( $value ) {
		$allowed_values = array( 'contained', 'full-width' );
		if ( ! in_array( $value, $allowed_values, true ) ) {
			return 'contained';
		}

		return esc_html( $value );
	}
}
