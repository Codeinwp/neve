<?php
/**
 * Buttons section.
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
 * Class Buttons
 *
 * @package Neve\Customizer\Options
 */
class Buttons extends Base_Customizer {

	/**
	 * Customizer section slug.
	 *
	 * @var string
	 */
	private $section_id = 'neve_buttons_section';

	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->add_section(
			new Section(
				$this->section_id,
				array(
					'priority' => 40,
					'title'    => esc_html__( 'Buttons', 'neve' ),
				)
			)
		);

		$this->add_control(
			new Control(
				'buttons_tabs',
				array(
					'sanitize_callback' => 'wp_filter_nohtml_kses',
				),
				array(
					'priority' => - 100,
					'section'  => $this->section_id,
					'tabs'     => array(
						'button'           => array(
							'label' => esc_html__( 'Primary', 'neve' ),
							'icon'  => 'star-filled',
						),
						'secondary_button' => array(
							'label' => esc_html__( 'Secondary', 'neve' ),
							'icon'  => 'star-empty',
						),
					),
					'controls' => array(
						'button'           => array(
							'neve_button_color'            => array(),
							'neve_button_hover_color'      => array(),
							'neve_button_text_color'       => array(),
							'neve_button_hover_text_color' => array(),
							'neve_button_padding'          => array(),
							'neve_button_border_radius'    => array(),
						),
						'secondary_button' => array(
							'neve_secondary_button_color' => array(),
							'neve_secondary_button_hover_color' => array(),
							'neve_secondary_button_padding' => array(),
							'neve_secondary_button_border_radius' => array(),
						),
					),
				),
				'Neve\Customizer\Controls\Tabs'
			)
		);

		$buttons = array(
			'button'           => array(
				'color'            => array(
					'label'   => __( 'Background Color', 'neve' ),
					'default' => '#0366d6',
				),
				'text_color'       => array(
					'label'   => __( 'Text Color', 'neve' ),
					'default' => '#ffffff',
				),
				'hover_color'      => array(
					'label'   => __( 'Hover Background Color', 'neve' ),
					'default' => '#0366d6',
				),
				'hover_text_color' => array(
					'label'   => __( 'Hover Text Color', 'neve' ),
					'default' => '#ffffff',
				),
			),
			'secondary_button' => array(
				'color'       => array(
					'label'   => __( 'Color', 'neve' ),
					'default' => '#676767',
				),
				'hover_color' => array(
					'label'   => __( 'Hover Color', 'neve' ),
					'default' => '#676767',
				),
			),
		);

		foreach ( $buttons as $button => $settings ) {

			foreach ( $settings as $color_type => $args ) {
				$this->add_control(
					new Control(
						'neve_' . $button . '_' . $color_type,
						array(
							'sanitize_callback' => 'neve_sanitize_colors',
							'default'           => $args['default'],
						),
						array(
							'label'   => $args['label'],
							'section' => $this->section_id,
						),
						'WP_Customize_Color_Control'
					)
				);
			}

			$this->add_control(
				new Control(
					'neve_' . $button . '_padding',
					array(
						'default' => array(
							'desktop'      => array(
								'top'    => '',
								'right'  => '',
								'bottom' => '',
								'left'   => '',
							),
							'tablet'       => array(
								'top'    => '',
								'right'  => '',
								'bottom' => '',
								'left'   => '',
							),
							'mobile'       => array(
								'top'    => '',
								'right'  => '',
								'bottom' => '',
								'left'   => '',
							),
							'desktop-unit' => 'px',
							'tablet-unit'  => 'px',
							'mobile-unit'  => 'px',
						),
					),
					array(
						'label'          => __( 'Padding', 'neve' ),
						'section'        => $this->section_id,
						'linked_choices' => false,
						'choices'        => array(
							'top'    => __( 'Top', 'neve' ),
							'right'  => __( 'Right', 'neve' ),
							'bottom' => __( 'Bottom', 'neve' ),
							'left'   => __( 'Left', 'neve' ),
						),
					),
					'\HFG\Core\Customizer\SpacingControl'
				) 
			);

			$this->add_control(
				new Control(
					'neve_' . $button . '_border_radius',
					array(
						'sanitize_callback' => 'absint',
						'default'           => 3,
					),
					array(
						'label'      => esc_html__( 'Border radius', 'neve' ) . '(px)',
						'section'    => $this->section_id,
						'type'       => 'range-value',
						'step'       => 1,
						'input_attr' => array(
							'min'     => 0,
							'max'     => 50,
							'default' => 3,
						),
					),
					'Neve\Customizer\Controls\Range'
				)
			);
		}
	}
}
