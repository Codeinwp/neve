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
		$this->add_global_colors();
		$color_controls = array(
			'neve_link_color'       => array(
				'default'  => '#0366d6',
				'priority' => 15,
				'label'    => __( 'Link Color', 'neve' ),
			),
			'neve_link_hover_color' => array(
				'default'  => '#0366d6',
				'priority' => 20,
				'label'    => __( 'Link Hover Color', 'neve' ),
			),
			'neve_text_color'       => array(
				'default'  => '#404248',
				'priority' => 25,
				'label'    => __( 'Text Color', 'neve' ),
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
					'Neve\Customizer\Controls\React\Color'
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

	/**
	 * Add global colors.
	 */
	private function add_global_colors() {
		$defaults = $this->get_global_colors_default();
		$this->add_control(
			new Control(
				'neve_global_colors',
				[
					'sanitize_callback' => [ $this, 'sanitize_global_colors' ],
					'default'           => $defaults,
				],
				[
					'label'          => __( 'Global Colors', 'neve' ),
					'priority'       => 10,
					'section'        => 'neve_colors_background_section',
					'type'           => 'neve_global_colors',
					'default_values' => $defaults,
				],
				'Neve\Customizer\Controls\React\Global_Colors'
			)
		);
	}

	/**
	 * Get global colors default.
	 */
	public function get_global_colors_default() {
		return [
			'activePalette' => 'base',
			'palettes'      => [
				'base'     => [
					'name'          => __( 'Base', 'neve' ),
					'allowDeletion' => false,
					'customColors'  => [],
					'colors'        => [
						'primaryAccent'      => '#357BE3',
						'secondaryAccent'    => '#1F519D',
						'siteBackground'     => '#FFFFFF',
						'lightBackground'    => '#EDEDED',
						'darkBackground'     => '#14171C',
						'textColor'          => '#393939',
						'textDarkBackground' => '#FFFFFF',
					],
				],
				'darkMode' => [
					'name'          => __( 'Dark Mode', 'neve' ),
					'allowDeletion' => false,
					'customColors'  => [],
					'colors'        => [
						'primaryAccent'      => '#4BB68F',
						'secondaryAccent'    => '#FFCF52',
						'siteBackground'     => '#000000',
						'lightBackground'    => '#282828',
						'darkBackground'     => '#000000',
						'textColor'          => '#FFFFFF',
						'textDarkBackground' => '#FFFFFF',
					],
				],
			],
		];
	}

	/**
	 * @param $value
	 * @return mixed
	 */
	public function sanitize_global_colors( $value ) {
		return $value;
	}
}
