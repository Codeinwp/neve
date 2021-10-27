<?php
/**
 * Customizer typography controls.
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
 * Class Typography
 *
 * @package Neve\Customizer\Options
 */
class Typography extends Base_Customizer {
	/**
	 * Add controls
	 */
	public function add_controls() {
		$this->sections_typography();
		$this->controls_typography_general();
		$this->controls_typography_headings();
		$this->controls_typography_blog();
	}

	/**
	 * Add the customizer section.
	 */
	private function sections_typography() {
		$typography_sections = array(
			'neve_typography_general'  => array(
				'title'    => __( 'General', 'neve' ),
				'priority' => 25,
			),
			'neve_typography_headings' => array(
				'title'    => __( 'Headings', 'neve' ),
				'priority' => 35,
			),
			'neve_typography_blog'     => array(
				'title'    => __( 'Blog', 'neve' ),
				'priority' => 45,
			),
		);

		foreach ( $typography_sections as $section_id => $section_data ) {
			$this->add_section(
				new Section(
					$section_id,
					array(
						'title'    => $section_data['title'],
						'panel'    => 'neve_typography',
						'priority' => $section_data['priority'],
					)
				)
			);
		}
	}

	/**
	 * Add general typography controls
	 */
	private function controls_typography_general() {

		/**
		 * Body font family
		 */
		$this->add_control(
			new Control(
				Config::MODS_FONT_GENERAL,
				[
					'transport'         => $this->selective_refresh,
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => Mods::get_alternative_mod_default( Config::MODS_FONT_GENERAL ),
				],
				array(
					'settings'              => [
						'default'  => Config::MODS_FONT_GENERAL,
						'variants' => Config::MODS_FONT_GENERAL_VARIANTS,
					],
					'label'                 => esc_html__( 'Body', 'neve' ),
					'section'               => 'neve_typography_general',
					'priority'              => 10,
					'type'                  => 'neve_font_family_control',
					'live_refresh_selector' => apply_filters( 'neve_body_font_family_selectors', 'body, .site-title' ),
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--bodyFontFamily',
							'selector' => 'body',
							'fallback' => Mods::get_alternative_mod_default( Config::MODS_FONT_GENERAL ),
							'suffix'   => ', var(--nv-fallback-ff)',
						],
					],
				),
				'\Neve\Customizer\Controls\React\Font_Family'
			)
		);
		/**
		 * Body font family subsets.
		 */
		$this->wpc->add_setting(
			Config::MODS_FONT_GENERAL_VARIANTS,
			[
				'transport'         => $this->selective_refresh,
				'sanitize_callback' => 'neve_sanitize_font_variants',
				'default'           => [],
			]
		);


		$defaults = Mods::get_alternative_mod_default( Config::MODS_TYPEFACE_GENERAL );
		$this->add_control(
			new Control(
				Config::MODS_TYPEFACE_GENERAL,
				[
					'transport' => $this->selective_refresh,
					'default'   => $defaults,
				],
				[
					'priority'              => 11,
					'section'               => 'neve_typography_general',
					'input_attrs'           => array(
						'size_units'             => [ 'px' ],
						'weight_default'         => 400,
						'size_default'           => $defaults['fontSize'],
						'line_height_default'    => $defaults['lineHeight'],
						'letter_spacing_default' => $defaults['letterSpacing'],
					),
					'type'                  => 'neve_typeface_control',
					'live_refresh_selector' => 'body, .site-title',
				],
				'\Neve\Customizer\Controls\React\Typography'
			)
		);

		/**
		 * Fallback Font Family.
		 */
		$this->add_control(
			new Control(
				'neve_fallback_font_family',
				[
					'transport'         => $this->selective_refresh,
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => 'Arial, Helvetica, sans-serif',
				],
				[
					'label'                 => esc_html__( 'Fallback Font', 'neve' ),
					'section'               => 'neve_typography_general',
					'priority'              => 12,
					'type'                  => 'neve_font_family_control',
					'input_attrs'           => [
						'system' => true,
						'link'   => [
							'string'  => __( 'Learn more about fallback fonts', 'neve' ),
							'url'     => esc_url( 'https://docs.themeisle.com/article/1319-fallback-fonts' ),
							'new_tab' => true,
						],
					],
					'live_refresh_selector' => neve_is_new_skin(),
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--nv-fallback-ff',
							'selector' => 'body',
						],
					],
				],
				'\Neve\Customizer\Controls\React\Font_Family'
			)
		);

	}

	/**
	 * Add controls for typography headings.
	 */
	private function controls_typography_headings() {
		/**
		 * Headings font family
		 */
		$this->add_control(
			new Control(
				'neve_headings_font_family',
				array(
					'transport'         => $this->selective_refresh,
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'section'               => 'neve_typography_headings',
					'priority'              => 10,
					'type'                  => 'neve_font_family_control',
					'live_refresh_selector' => apply_filters( 'neve_headings_font_family_selectors', 'h1:not(.site-title), .single h1.entry-title, h2, h3, .woocommerce-checkout h3, h4, h5, h6' ),
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--headingsFontFamily',
							'selector' => 'body',
						],
						'type'   => 'svg-icon-size',
					],
					'input_attrs'           => [
						'default_is_inherit' => true,
					],
				),
				'\Neve\Customizer\Controls\React\Font_Family'
			)
		);

		$selectors = neve_get_headings_selectors();
		$priority  = 20;
		foreach ( [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ] as $heading_id ) {
			$this->add_control(
				new Control(
					'neve_' . $heading_id . '_accordion_wrap',
					array(
						'sanitize_callback' => 'sanitize_text_field',
						'transport'         => $this->selective_refresh,
					),
					array(
						'label'            => $heading_id,
						'section'          => 'neve_typography_headings',
						'priority'         => $priority += 1,
						'class'            => esc_attr( 'advanced-sidebar-accordion-' . $heading_id ),
						'accordion'        => true,
						'controls_to_wrap' => 1,
						'expanded'         => false,
					),
					'Neve\Customizer\Controls\React\Heading'
				)
			);

			$mod_key        = 'neve_' . $heading_id . '_typeface_general';
			$default_values = Mods::get_alternative_mod_default( $mod_key );
			$this->add_control(
				new Control(
					$mod_key,
					[
						'transport' => $this->selective_refresh,
						'default'   => $default_values,
					],
					[
						'priority'              => $priority += 1,
						'section'               => 'neve_typography_headings',
						'input_attrs'           => array(
							'size_units'             => [ 'em', 'px' ],
							'weight_default'         => $default_values['fontWeight'],
							'size_default'           => $default_values['fontSize'],
							'line_height_default'    => $default_values['lineHeight'],
							'letter_spacing_default' => $default_values['letterSpacing'],
						),
						'type'                  => 'neve_typeface_control',
						'live_refresh_selector' => $selectors[ $heading_id ],
						'live_refresh_css_prop' => [
							'cssVar' => [
								'vars'     => [
									'--' . $heading_id . 'TextTransform' => 'textTransform',
									'--' . $heading_id . 'FontWeight'    => 'fontWeight',
									'--' . $heading_id . 'FontSize'      => [
										'key'        => 'fontSize',
										'responsive' => true,
									],
									'--' . $heading_id . 'LineHeight'    => [
										'key'        => 'lineHeight',
										'responsive' => true,
									],
									'--' . $heading_id . 'LetterSpacing' => [
										'key'        => 'letterSpacing',
										'suffix'     => 'px',
										'responsive' => true,
									],
								],
								'selector' => 'body',
							],
						],
					],
					'\Neve\Customizer\Controls\React\Typography'
				)
			);
		}
	}

	/**
	 * Add controls for blog typography.
	 */
	private function controls_typography_blog() {
		$controls = array(
			'neve_archive_typography_post_title'         => array(
				'label'                 => __( 'Post title', 'neve' ),
				'category_label'        => __( 'Blog Archive', 'neve' ),
				'priority'              => 10,
				'live_refresh_selector' => '.blog .blog-entry-title, .archive .blog-entry-title',
			),
			'neve_archive_typography_post_excerpt'       => array(
				'label'                 => __( 'Post excerpt', 'neve' ),
				'priority'              => 20,
				'live_refresh_selector' => '.blog .entry-summary, .archive .entry-summary, .blog .post-pages-links',
			),
			'neve_archive_typography_post_meta'          => array(
				'label'                 => __( 'Post meta', 'neve' ),
				'priority'              => 30,
				'live_refresh_selector' => '.blog .nv-meta-list li, .archive .nv-meta-list li',
			),
			'neve_single_post_typography_post_title'     => array(
				'label'                 => __( 'Post title', 'neve' ),
				'category_label'        => __( 'Single Post', 'neve' ),
				'priority'              => 40,
				'live_refresh_selector' => '.single h1.entry-title',
			),
			'neve_single_post_typography_post_meta'      => array(
				'label'                 => __( 'Post meta', 'neve' ),
				'priority'              => 50,
				'live_refresh_selector' => '.single .nv-meta-list li',
			),
			'neve_single_post_typography_comments_title' => array(
				'label'                 => __( 'Comments reply title', 'neve' ),
				'priority'              => 60,
				'live_refresh_selector' => '.single .comment-reply-title',
			),
		);

		foreach ( $controls as $control_id => $control_settings ) {
			$settings = array(
				'label'            => $control_settings['label'],
				'section'          => 'neve_typography_blog',
				'priority'         => $control_settings['priority'],
				'class'            => esc_attr( 'typography-blog-' . $control_id ),
				'accordion'        => true,
				'controls_to_wrap' => 1,
				'expanded'         => false,
			);
			if ( array_key_exists( 'category_label', $control_settings ) ) {
				$settings['category_label'] = $control_settings['category_label'];
			}

			$this->add_control(
				new Control(
					$control_id . '_accordion_wrap',
					array(
						'sanitize_callback' => 'sanitize_text_field',
						'transport'         => $this->selective_refresh,
					),
					$settings,
					'Neve\Customizer\Controls\Heading'
				)
			);

			$this->add_control(
				new Control(
					$control_id,
					[
						'transport' => $this->selective_refresh,
					],
					[
						'priority'              => $control_settings['priority'] += 1,
						'section'               => 'neve_typography_blog',
						'type'                  => 'neve_typeface_control',
						'live_refresh_selector' => neve_is_new_skin() ? true : $control_settings['live_refresh_selector'],
						'live_refresh_css_prop' => [
							'cssVar' => [
								'vars'     => [
									'--textTransform' => 'textTransform',
									'--fontWeight'    => 'fontWeight',
									'--fontSize'      => [
										'key'        => 'fontSize',
										'responsive' => true,
									],
									'--lineHeight'    => [
										'key'        => 'lineHeight',
										'responsive' => true,
									],
									'--letterSpacing' => [
										'key'        => 'letterSpacing',
										'suffix'     => 'px',
										'responsive' => true,
									],
								],
								'selector' => $control_settings['live_refresh_selector'],
							],
						],
						'refresh_on_reset'      => true,
						'input_attrs'           => array(
							'default_is_empty'       => true,
							'size_units'             => [ 'em', 'px' ],
							'weight_default'         => 'none',
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
					],
					'\Neve\Customizer\Controls\React\Typography'
				)
			);
		}
	}
}

