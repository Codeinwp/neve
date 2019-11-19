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
							'neve_button_appearance' => array(),
							'neve_button_padding'    => array(),
						),
						'secondary_button' => array(
							'neve_secondary_button_appearance' => array(),
							'neve_secondary_button_padding'    => array(),
						),
					),
				),
				'Neve\Customizer\Controls\Tabs'
			)
		);

		$buttons = [ 'button', 'secondary_button' ];

		foreach ( $buttons as $button ) {
			$defaults = neve_get_button_appearance_default( $button );
			$this->add_control(
				new Control(
					'neve_' . $button . '_appearance',
					[
						'sanitize_callback' => 'neve_sanitize_button_appearance',
						'default'           => $defaults,
					],
					[
						'label'   => __( 'Button Appearance', 'neve' ),
						'section' => $this->section_id,
						'type'    => 'neve_button_appearance',
					]
				)
			);
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
