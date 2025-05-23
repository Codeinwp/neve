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
use Neve\Customizer\Controls\React\Typography_Extra_Section;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;
use Neve\Core\Traits\Theme_Mods;

/**
 * Class Typography
 *
 * @package Neve\Customizer\Options
 */
class Typography extends Base_Customizer {
	use Theme_Mods;

	const HEADINGS_FONT_FAMILY_SELECTORS = 'h1:not(.site-title), .single h1.entry-title, h2, h3, .woocommerce-checkout h3, h4, h5, h6';

	/**
	 * Add controls
	 */
	public function add_controls() {
		$this->sections_typography();
		$this->controls_font_pairs();
		$this->controls_typography_general();
		$this->controls_typography_headings();
		$this->controls_typography_blog();
		$this->section_extra();
	}

	/**
	 * Add controls for font pair section
	 *
	 * @return void
	 */
	private function controls_font_pairs() {
		/**
		 * Filters the font pairs that are available inside Customizer.
		 *
		 * @param array $pairs The font pairs array.
		 *
		 * @since 3.5.0
		 */
		$pairs = apply_filters( 'neve_font_pairings', Mods::get( Config::MODS_TPOGRAPHY_FONT_PAIRS, Config::$typography_default_pairs ) );

		/**
		 * Font Pairs Control
		 */
		$this->add_control(
			new Control(
				Config::MODS_TPOGRAPHY_FONT_PAIRS,
				[
					'transport'         => $this->selective_refresh,
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => $pairs,
				],
				array(
					'input_attrs' => array(
						'pairs'       => $pairs,
						'description' => array(
							'text' => __( 'Choose Font family presets for your Headings and Text.', 'neve' ),
							'link' => apply_filters( 'neve_external_link', 'https://docs.themeisle.com/article/1340-neve-typography', esc_html__( 'Learn more', 'neve' ) ),
						),
					),
					'label'       => esc_html__( 'Font presets', 'neve' ),
					'section'     => 'typography_font_pair_section',
					'priority'    => 10,
					'type'        => 'neve_font_pairings_control',
				),
				'\Neve\Customizer\Controls\React\Font_Pairings'
			)
		);
	}

	/**
	 * Add the customizer section.
	 */
	private function sections_typography() {
		$typography_sections = array(
			'typography_globals_section'   => array(
				'title'    => __( 'Global', 'neve' ),
				'priority' => 10,
			),
			'typography_font_pair_section' => array(
				'title'    => __( 'Font presets', 'neve' ),
				'priority' => 15,
			),
			'neve_typography_general'      => array(
				'title'    => __( 'General', 'neve' ),
				'priority' => 25,
			),
			'neve_typography_headings'     => array(
				'title'    => __( 'Headings', 'neve' ),
				'priority' => 35,
			),
			'neve_typography_blog'         => array(
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
							'vars'     => '--bodyfontfamily',
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
						'size_units'             => [ 'px', 'em', 'rem' ],
						'weight_default'         => 400,
						'size_default'           => $defaults['fontSize'],
						'line_height_default'    => $defaults['lineHeight'],
						'letter_spacing_default' => $defaults['letterSpacing'],
					),
					'type'                  => 'neve_typeface_control',
					'font_family_control'   => 'neve_body_font_family',
					'live_refresh_selector' => 'body, .site-title',
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => [
								'--bodytexttransform' => 'textTransform',
								'--bodyfontweight'    => 'fontWeight',
								'--bodyfontsize'      => [
									'key'        => 'fontSize',
									'responsive' => true,
								],
								'--bodylineheight'    => [
									'key'        => 'lineHeight',
									'responsive' => true,
								],
								'--bodyletterspacing' => [
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
					'live_refresh_selector' => true,
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
					'live_refresh_selector' => apply_filters( 'neve_headings_font_family_selectors', self::HEADINGS_FONT_FAMILY_SELECTORS ),
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--headingsfontfamily',
							'selector' => 'body',
							'fallback' => 'var(--bodyfontfamily, var(--nv-fallback-ff))',
						],
						'type'   => 'svg-icon-size',
					],
					'input_attrs'           => [
						'default_is_inherit' => true,
					],
					'color_setting'         => Config::MODS_COLOR_HEADINGS,
				),
				'\Neve\Customizer\Controls\React\Font_Family'
			)
		);

		$this->add_control(
			new Control(
				Config::MODS_COLOR_HEADINGS,
				array(
					'transport'         => $this->selective_refresh,
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => '',
				),
				array(
					'section'               => 'neve_typography_headings',
					'type'                  => 'hidden',
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--headingcolor',
							'selector' => 'body',
						],
					],
				)
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
						'controls_to_wrap' => 2,
						'expanded'         => false,
					),
					'Neve\Customizer\Controls\React\Heading'
				)
			);

			$mod_key_font_family = $this->get_mod_key_heading_fontfamily( $heading_id );

			/**
			 * Headings font family
			 */
			$this->add_control(
				new Control(
					$mod_key_font_family,
					array(
						'transport'         => $this->selective_refresh,
						'sanitize_callback' => 'sanitize_text_field',
					),
					array(
						'section'               => 'neve_typography_headings',
						'priority'              => $priority += 1,
						'type'                  => 'neve_font_family_control',
						'live_refresh_selector' => apply_filters( $mod_key_font_family . '_selectors', self::HEADINGS_FONT_FAMILY_SELECTORS ),
						'live_refresh_css_prop' => [
							'cssVar' => [
								'vars'     => '--' . $heading_id . 'fontfamily',
								'selector' => 'body',
								'fallback' => 'var(--headingsfontfamily, var(--bodyfontfamily))',
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
						'priority'              => $priority += 2,
						'section'               => 'neve_typography_headings',
						'input_attrs'           => array(
							'size_units'             => [ 'em', 'px', 'rem' ],
							'weight_default'         => $default_values['fontWeight'],
							'size_default'           => $default_values['fontSize'],
							'line_height_default'    => $default_values['lineHeight'],
							'letter_spacing_default' => $default_values['letterSpacing'],
						),
						'type'                  => 'neve_typeface_control',
						'font_family_control'   => $mod_key_font_family,
						'live_refresh_selector' => $selectors[ $heading_id ],
						'live_refresh_css_prop' => [
							'cssVar' => [
								'vars'     => [
									'--' . $heading_id . 'texttransform' => 'textTransform',
									'--' . $heading_id . 'fontweight'    => 'fontWeight',
									'--' . $heading_id . 'fontsize'      => [
										'key'        => 'fontSize',
										'responsive' => true,
									],
									'--' . $heading_id . 'lineheight'    => [
										'key'        => 'lineHeight',
										'responsive' => true,
									],
									'--' . $heading_id . 'letterspacing' => [
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
				'category_label'        => __( 'Typography', 'neve' ),
				'priority'              => 500,
				'font_family_control'   => 'neve_headings_font_family',
				'live_refresh_selector' => '.blog .blog-entry-title, .archive .blog-entry-title',
				'section'               => 'neve_blog_archive_layout',
			),
			'neve_archive_typography_post_excerpt'       => array(
				'label'                 => __( 'Post excerpt', 'neve' ),
				'priority'              => 510,
				'font_family_control'   => 'neve_body_font_family',
				'live_refresh_selector' => '.blog .entry-summary, .archive .entry-summary, .blog .post-pages-links',
				'section'               => 'neve_blog_archive_layout',
			),
			'neve_archive_typography_post_meta'          => array(
				'label'                 => __( 'Post meta', 'neve' ),
				'priority'              => 520,
				'font_family_control'   => 'neve_body_font_family',
				'live_refresh_selector' => '.blog .nv-meta-list li, .archive .nv-meta-list li',
				'section'               => 'neve_blog_archive_layout',
			),
			'neve_single_post_typography_post_title'     => array(
				'label'                 => __( 'Post title', 'neve' ),
				'category_label'        => __( 'Typography', 'neve' ),
				'priority'              => 500,
				'font_family_control'   => 'neve_headings_font_family',
				'live_refresh_selector' => '.single h1.entry-title',
				'section'               => 'neve_single_post_layout',
			),
			'neve_single_post_typography_post_meta'      => array(
				'label'                 => __( 'Post meta', 'neve' ),
				'priority'              => 510,
				'font_family_control'   => 'neve_body_font_family',
				'live_refresh_selector' => '.single .nv-meta-list li',
				'section'               => 'neve_single_post_layout',
			),
			'neve_single_post_typography_comments_title' => array(
				'label'                 => __( 'Comments reply title', 'neve' ),
				'priority'              => 520,
				'font_family_control'   => 'neve_headings_font_family',
				'live_refresh_selector' => '.single .comment-reply-title',
				'section'               => 'neve_single_post_layout',
			),
		);

		foreach ( $controls as $control_id => $control_settings ) {
			$settings = array(
				'label'            => $control_settings['label'],
				'section'          => $control_settings['section'],
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
						'section'               => $control_settings['section'],
						'type'                  => 'neve_typeface_control',
						'font_family_control'   => $control_settings['font_family_control'],
						'live_refresh_selector' => true,
						'live_refresh_css_prop' => [
							'cssVar' => [
								'vars'     => [
									'--texttransform' => 'textTransform',
									'--fontweight'    => 'fontWeight',
									'--fontsize'      => [
										'key'        => 'fontSize',
										'responsive' => true,
									],
									'--lineheight'    => [
										'key'        => 'lineHeight',
										'responsive' => true,
									],
									'--letterspacing' => [
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
							'size_units'             => [ 'em', 'px', 'rem' ],
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

	/**
	 * Add section for extra inline controls
	 *
	 * @return void
	 */
	private function section_extra() {
		$this->wpc->add_section(
			new Typography_Extra_Section(
				$this->wpc,
				'typography_extra_section',
				[
					'priority' => 9999, // upsell priority(10000) - 1
					'panel'    => 'neve_typography',
				]
			)
		);
	}
}

