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

		if ( ! neve_is_new_skin() ) {
			$this->add_legacy_controls();

			return;
		}


		$this->add_control(
			new Control(
				'neve_buttons_generic_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
				],
				[
					'label'            => esc_html__( 'General', 'neve' ),
					'section'          => $this->section_id,
					'class'            => 'buttons-general-accordion',
					'accordion'        => true,
					'expanded'         => true,
					'controls_to_wrap' => 2,
				],
				'Neve\Customizer\Controls\Heading'
			)
		);

		$mod_key  = Config::MODS_BUTTON_PRIMARY_PADDING;
		$defaults = Mods::get_alternative_mod_default( Config::MODS_BUTTON_PRIMARY_PADDING );
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
						'min'   => 0,
					],
					'default'           => $defaults,
				),
				'\Neve\Customizer\Controls\React\Spacing'
			)
		);

		$this->add_control(
			new Control(
				Config::MODS_BUTTON_TYPEFACE,
				[
					'transport' => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Button Text', 'neve' ),
					'section'               => $this->section_id,
					'input_attrs'           => array(
						'size_units'             => [ 'px' ],
						'weight_default'         => 700,
						'size_default'           => array(
							'suffix'  => array(
								'mobile'  => 'px',
								'tablet'  => 'px',
								'desktop' => 'px',
							),
							'mobile'  => '',
							'tablet'  => '',
							'desktop' => '',
						),
						'line_height_default'    => array(
							'mobile'  => '',
							'tablet'  => '',
							'desktop' => '',
						),
						'letter_spacing_default' => array(
							'mobile'  => '',
							'tablet'  => '',
							'desktop' => '',
						),
					),
					'type'                  => 'neve_typeface_control',
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => [
								'--btnFs'            => [
									'key'        => 'fontSize',
									'responsive' => true,
									'suffix'     => 'px',
								],
								'--btnLineHeight'    => [
									'key'        => 'lineHeight',
									'responsive' => true,
								],
								'--btnLetterSpacing' => [
									'key'        => 'letterSpacing',
									'responsive' => true,
									'suffix'     => 'px',
								],
								'--btnTextTransform' => [
									'key' => 'textTransform',
								],
								'--btnFontWeight'    => [
									'key' => 'fontWeight',
								],
							],
							'selector' => 'body',
						],
					],
					'refresh_on_reset'      => true,
				],
				'\Neve\Customizer\Controls\React\Typography'
			)
		);

		$buttons = [
			'button'           => __( 'Primary Button', 'neve' ),
			'secondary_button' => __( 'Secondary Button', 'neve' ),
		];

		foreach ( $buttons as $button => $heading_text ) {
			$this->add_control(
				new Control(
					'neve_' . $button . '_appearance_heading',
					[
						'sanitize_callback' => 'sanitize_text_field',
					],
					[
						'label'            => esc_html( $heading_text ),
						'section'          => $this->section_id,
						'class'            => 'buttons-' . $button . '-appearance-accordion',
						'accordion'        => true,
						'controls_to_wrap' => 1,
						'expanded'         => false,
					],
					'Neve\Customizer\Controls\Heading'
				)
			);

			$mod_key  = 'neve_' . $button . '_appearance';
			$defaults = neve_get_button_appearance_default( $button );

			$this->add_control(
				new Control(
					$mod_key,
					[
						'sanitize_callback' => 'neve_sanitize_button_appearance',
						'default'           => $defaults,
					],
					[
						'default_vals' => $defaults,
						'label'        => __( 'Button Appearance', 'neve' ),
						'section'      => $this->section_id,
					],
					'\Neve\Customizer\Controls\React\Button_Appearance'
				)
			);
		}
	}

	/**
	 * Adds Legacy Controls
	 */
	private function add_legacy_controls() {
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
							'neve_button_typeface_v2'   => array(),
						),
						'secondary_button' => array(
							'neve_secondary_button_appearance'    => array(),
							'neve_secondary_button_appearance_v2' => array(),
							'neve_secondary_button_padding'       => array(),
							'neve_secondary_button_padding_v2'    => array(),
							'neve_secondary_button_typeface'      => array(),
							'neve_secondary_button_typeface_v2'   => array(),
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
			$mod_key  = 'neve_' . $button . '_appearance';
			$defaults = neve_get_button_appearance_default( $button );

			$this->add_control(
				new Control(
					$mod_key,
					[
						'sanitize_callback' => 'neve_sanitize_button_appearance',
						'default'           => $defaults,
					],
					[
						'default_vals' => $defaults,
						'label'        => __( 'Button Appearance', 'neve' ),
						'section'      => $this->section_id,
						'priority'     => 0,
						'type'         => 'neve_button_appearance',
					]
				)
			);

			$mod_key  = 'neve_' . $button . '_padding';
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
							'min'   => 0,
						],
						'default'           => $defaults,
					),
					'\Neve\Customizer\Controls\React\Spacing'
				)
			);

			$new_skin = neve_is_new_skin();

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
								'mobile'  => $new_skin ? '' : 15,
								'tablet'  => $new_skin ? '' : 16,
								'desktop' => $new_skin ? '' : 16,
							),
							'line_height_default'    => array(
								'mobile'  => $new_skin ? '' : 1.6,
								'tablet'  => $new_skin ? '' : 1.6,
								'desktop' => $new_skin ? '' : 1.6,
							),
							'letter_spacing_default' => array(
								'mobile'  => $new_skin ? '' : 0,
								'tablet'  => $new_skin ? '' : 0,
								'desktop' => $new_skin ? '' : 0,
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
