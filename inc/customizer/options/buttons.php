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

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
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
						),
						'secondary_button' => array(
							'label' => esc_html__( 'Secondary', 'neve' ),
						),
					),
					'controls' => array(
						'button'           => array(
							'neve_button_appearance'    => array(),
							'neve_button_appearance_v2' => array(),
							'neve_button_padding'       => array(),
							'neve_button_padding_v2'    => array(),
							'neve_button_typeface'      => array(),
						),
						'secondary_button' => array(
							'neve_secondary_button_appearance'    => array(),
							'neve_secondary_button_appearance_v2' => array(),
							'neve_secondary_button_padding'       => array(),
							'neve_secondary_button_padding_v2'    => array(),
							'neve_secondary_button_typeface'      => array(),
						),
					),
				),
				'Neve\Customizer\Controls\Tabs'
			)
		);

		$buttons                = [ 'button', 'secondary_button' ];
		$live_refresh_selectors = [
			'button'           => apply_filters( 'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_NORMAL, Config::$css_selectors_map[ Config::CSS_SELECTOR_BTN_PRIMARY_NORMAL ] ),
			'secondary_button' => apply_filters( 'neve_selectors_' . Config::CSS_SELECTOR_BTN_SECONDARY_NORMAL, Config::$css_selectors_map[ Config::CSS_SELECTOR_BTN_SECONDARY_NORMAL ] ),
		];
		foreach ( $buttons as $button ) {
			$mod_key  = Mods::get_alternative_mod( 'neve_' . $button . '_appearance' );
			$defaults = Mods::get_alternative_mod_default( 'neve_' . $button . '_appearance' );

			$this->add_control(
				new Control(
					$mod_key,
					[
						'sanitize_callback' => 'neve_sanitize_button_appearance',
						'default'           => $defaults,
					],
					[
						'defaultVals' => $defaults,
						'label'       => __( 'Button Appearance', 'neve' ),
						'section'     => $this->section_id,
						'priority'    => 0,
						'type'        => 'neve_button_appearance',
					]
				)
			);

			$mod_key  = Mods::get_alternative_mod( 'neve_' . $button . '_padding' );
			$defaults = Mods::get_alternative_mod_default( 'neve_' . $button . '_padding' );
			$this->add_control(
				new Control(
					$mod_key,
					array(
						'default' => $defaults,
					),
					array(
						'label'             => __( 'Padding', 'neve' ),
						'sanitize_callback' => array( $this, 'sanitize_spacing_array' ),
						'section'           => $this->section_id,
						'input_attrs'       => [
							'units' => [ 'px' ],
						],
						'default'           => $defaults,
					),
					'\Neve\Customizer\Controls\React\Spacing'
				)
			);

			$this->add_control(
				new Control(
					'neve_' . $button . '_typeface',
					[
						'transport' => $this->selective_refresh,
					],
					[
						'label'                 => esc_html__( 'Button Text', 'neve' ),
						'section'               => $this->section_id,
						'input_attrs'           => array(
							'size_units'             => [ 'px' ],
							'weight_default'         => 400,
							'size_default'           => array(
								'suffix'  => array(
									'mobile'  => 'px',
									'tablet'  => 'px',
									'desktop' => 'px',
								),
								'mobile'  => 15,
								'tablet'  => 16,
								'desktop' => 16,
							),
							'line_height_default'    => array(
								'mobile'  => 1.6,
								'tablet'  => 1.6,
								'desktop' => 1.6,
							),
							'letter_spacing_default' => array(
								'mobile'  => 0,
								'tablet'  => 0,
								'desktop' => 0,
							),
						),
						'type'                  => 'neve_typeface_control',
						'live_refresh_selector' => $live_refresh_selectors[ $button ],
					],
					'\Neve\Customizer\Controls\React\Typography'
				)
			);
		}
	}
}
