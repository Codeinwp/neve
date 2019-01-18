<?php
/**
 * Colors / Background section.
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
 * Class Colors_Background
 *
 * @package Neve\Customizer\Options
 */
class Colors_Background extends Base_Customizer {
	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_colors_background();
		$this->controls_colors();
	}

	/**
	 * Add customize section
	 */
	private function section_colors_background() {
		$this->add_section(
			new Section(
				'neve_colors_background_section',
				array(
					'priority' => 27,
					'title'    => esc_html__( 'Colors & Background', 'neve' ),
				)
			)
		);
	}

	/**
	 * Add colors controls.
	 */
	private function controls_colors() {
		$color_controls = array(
			'neve_button_color'          => array(
				'default'  => '#0366d6',
				'priority' => 10,
				'label'    => __( 'Primary Button Color', 'neve' ),
			),
			'neve_link_color'            => array(
				'default'  => '#0366d6',
				'priority' => 15,
				'label'    => __( 'Link Color', 'neve' ),
			),
			'neve_link_hover_color'      => array(
				'default'  => '#0366d6',
				'priority' => 20,
				'label'    => __( 'Link Hover Color', 'neve' ),
			),
			'neve_text_color'            => array(
				'default'  => '#404248',
				'priority' => 25,
				'label'    => __( 'Text Color', 'neve' ),
			),
			'neve_menu_item_color'       => array(
				'default'  => '#404248',
				'priority' => 25,
				'label'    => __( 'Primary Menu Items Color', 'neve' ),
			),
			'neve_menu_item_hover_color' => array(
				'default'  => '#0366d6',
				'priority' => 25,
				'label'    => __( 'Primary Menu Items Hover Color', 'neve' ),
			),
		);

		foreach ( $color_controls as $control_id => $control_properties ) {
			$this->add_control(
				new Control(
					$control_id,
					array(
						'sanitize_callback' => 'neve_sanitize_colors',
						'default'           => $control_properties['default'],
					),
					array(
						'label'    => $control_properties['label'],
						'section'  => 'neve_colors_background_section',
						'priority' => $control_properties['priority'],
					),
					'WP_Customize_Color_Control'
				)
			);
		}
	}

	/**
	 * Change controls.
	 */
	public function change_controls() {
		$priority         = 30;
		$controls_to_move = array(
			'background_color',
			'background_image',
			'background_preset',
			'background_position',
			'background_size',
			'background_repeat',
			'background_attachment',
		);

		foreach ( $controls_to_move as $control_slug ) {
			$control           = $this->get_customizer_object( 'control', $control_slug );
			$control->priority = $priority;
			$control->section  = 'neve_colors_background_section';
			$priority         += 5;
		}
	}
}
