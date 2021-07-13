<?php
/**
 * Single post layout section.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      20/08/2018
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use HFG\Traits\Core;
use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Defaults\Single_Post;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Layout_Single_Post
 *
 * @package Neve\Customizer\Options
 */
class Layout_Single_Post extends Base_Customizer {
	use Core;
	use Single_Post;

	/**
	 * Customizer section id.
	 *
	 * @var string
	 */
	private $section = 'neve_single_post_layout';

	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_single_post();
		$this->control_content_order();

		if ( neve_is_new_skin() ) {
			$this->add_subsections();
			$this->header_layout();
			$this->post_meta();
			$this->comments();
			add_action( 'customize_register', [ $this, 'adjust_headings' ], PHP_INT_MAX );
		}
	}

	/**
	 * Add customize section
	 */
	private function section_single_post() {
		$this->add_section(
			new Section(
				$this->section,
				[
					'priority' => 40,
					'title'    => esc_html__( 'Single Post', 'neve' ),
					'panel'    => 'neve_layout',
				]
			)
		);
	}

	/**
	 * Add sections headings.
	 */
	private function add_subsections() {
		$headings = [
			'header_layout'    => [
				'title'            => esc_html__( 'Header Layout', 'neve' ),
				'priority'         => 5,
				'controls_to_wrap' => 15,
			],
			'page_elements'    => [
				'title'            => esc_html__( 'Page Elements', 'neve' ),
				'priority'         => 7,
				'controls_to_wrap' => 2,
				'expanded'         => false,
			],
			'meta'             => [
				'title'            => esc_html__( 'Post Meta', 'neve' ),
				'priority'         => 9,
				'controls_to_wrap' => 5,
				'expanded'         => false,
			],
			'comments_section' => [
				'title'           => esc_html__( 'Comments Section', 'neve' ),
				'priority'        => 70,
				'expanded'        => true,
				'accordion'       => false,
				'active_callback' => function() {
					return $this->element_is_enabled( 'comments' );
				},
			],
			'comments_form'    => [
				'title'           => esc_html__( 'Submit Form Section', 'neve' ),
				'priority'        => 71,
				'expanded'        => true,
				'accordion'       => false,
				'active_callback' => function() {
					return $this->element_is_enabled( 'comments' );
				},
			],
		];

		foreach ( $headings as $heading_id => $heading_data ) {
			$this->add_control(
				new Control(
					'neve_post_' . $heading_id . '_heading',
					[
						'sanitize_callback' => 'sanitize_text_field',
					],
					[
						'label'            => $heading_data['title'],
						'section'          => $this->section,
						'priority'         => $heading_data['priority'],
						'class'            => $heading_id . '-accordion',
						'expanded'         => array_key_exists( 'expanded', $heading_data ) ? $heading_data['expanded'] : true,
						'accordion'        => array_key_exists( 'accordion', $heading_data ) ? $heading_data['accordion'] : true,
						'controls_to_wrap' => array_key_exists( 'controls_to_wrap', $heading_data ) ? $heading_data['controls_to_wrap'] : 0,
						'active_callback'  => array_key_exists( 'active_callback', $heading_data ) ? $heading_data['active_callback'] : '__return_true',
					],
					'Neve\Customizer\Controls\Heading'
				)
			);
		}
	}

	/**
	 * Add header layout controls.
	 */
	private function header_layout() {

		$this->add_control(
			new Control(
				'neve_post_header_layout',
				[
					'sanitize_callback' => 'wp_filter_nohtml_kses',
					'default'           => 'normal',
				],
				[
					'section'  => $this->section,
					'priority' => 6,
					'choices'  => [
						'normal' => [
							'name'  => esc_html__( 'Normal', 'neve' ),
							'image' => 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODUiIGhlaWdodD0iMTE4IiB2aWV3Qm94PSIwIDAgODUgMTE4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHJlY3QgeD0iMi4yNSIgeT0iMi40NjM4NyIgd2lkdGg9IjgwIiBoZWlnaHQ9IjExMyIgZmlsbD0id2hpdGUiLz4KICAgIDxyZWN0IHg9IjE3LjI1IiB5PSIxNC42MDQ1IiB3aWR0aD0iNTAiIGhlaWdodD0iMzQuNTUzNyIgZmlsbD0iIzc4QjZGRiIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KICAgIDxsaW5lIHgxPSIxNy4yNSIgeTE9IjYyLjY5MjQiIHgyPSI2Ny4wNzkyIiB5Mj0iNjIuNjkyNCIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxNy4yNSIgeTE9IjY3Ljc2OTUiIHgyPSIyNS4yNSIgeTI9IjY3Ljc2OTUiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTcuMjUiIHkxPSI1Ny40OTcxIiB4Mj0iNTEuMDA1MyIgeTI9IjU3LjQ5NzEiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTcuMjUiIHkxPSI4Ny4zODA5IiB4Mj0iNjcuMDc5MiIgeTI9Ijg3LjM4MDkiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTcuMjUiIHkxPSI5Mi41NzYyIiB4Mj0iNjcuMDc5MiIgeTI9IjkyLjU3NjIiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTcuMjUiIHkxPSI5OC4wNjE1IiB4Mj0iNjcuMDc5MiIgeTI9Ijk4LjA2MTUiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=',
						],
						'cover'  => [
							'name'  => esc_html__( 'Cover', 'neve' ),
							'image' => 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgODYgMTIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHJlY3QgeD0iMyIgeT0iMy40NjM4NyIgd2lkdGg9IjgwIiBoZWlnaHQ9IjExMyIgZmlsbD0id2hpdGUiLz4KICAgIDxyZWN0IHg9IjMiIHk9IjMuNDYzODciIHdpZHRoPSI4MCIgaGVpZ2h0PSI1MS4zNjM2IiBmaWxsPSIjNzhCNkZGIiBmaWxsLW9wYWNpdHk9IjAuNCIvPgogICAgPGxpbmUgeDE9IjE5IiB5MT0iNjcuNDI4NyIgeDI9IjY4LjgyOTIiIHkyPSI2Ny40Mjg3IiBzdHJva2U9IiNDNEM0QzQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjE5IiB5MT0iODMuNzExOSIgeDI9IjY4LjgyOTIiIHkyPSI4My43MTE5IiBzdHJva2U9IiNDNEM0QzQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjE5IiB5MT0iNzIuNjI0IiB4Mj0iNjguODI5MiIgeTI9IjcyLjYyNCIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9Ijg4LjkwNzIiIHgyPSI2OC44MjkyIiB5Mj0iODguOTA3MiIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9Ijc4LjEwODQiIHgyPSI2OC44MjkyIiB5Mj0iNzguMTA4NCIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9Ijk0LjM5MjYiIHgyPSI2OC44MjkyIiB5Mj0iOTQuMzkyNiIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9IjgzLjcxMTkiIHgyPSI0OCIgeTI9IjgzLjcxMTkiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTkiIHkxPSI5OS45OTYxIiB4Mj0iNDgiIHkyPSI5OS45OTYxIiBzdHJva2U9IiNDNEM0QzQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjE5IiB5MT0iNDQuNDg5MyIgeDI9IjUyLjc1NTMiIHkyPSI0NC40ODkzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9IjM4Ljg4NTciIHgyPSI2OSIgeTI9IjM4Ljg4NTciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHJlY3QgeD0iMS41IiB5PSIxLjk2Mzg3IiB3aWR0aD0iODMiIGhlaWdodD0iMTE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==',
						],
					],
				],
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_height',
				[
					'sanitize_callback' => 'neve_sanitize_range_value',
					'transport'         => $this->selective_refresh,
					'default'           => '{ "mobile": 400, "tablet": 400, "desktop": 400 }',
				],
				[
					'label'                 => esc_html__( 'Cover height', 'neve' ),
					'section'               => $this->section,
					'type'                  => 'neve_responsive_range_control',
					'input_attrs'           => [
						'max'        => 700,
						'units'      => [ 'px', 'vh' ],
						'defaultVal' => [
							'mobile'  => 400,
							'tablet'  => 400,
							'desktop' => 400,
							'suffix'  => [
								'mobile'  => 'px',
								'tablet'  => 'px',
								'desktop' => 'px',
							],
						],
					],
					'priority'              => 6,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'responsive' => true,
							'vars'       => '--height',
							'selector'   => '.nv-post-cover',
							'suffix'     => 'px',
						],
					],
					'active_callback'       => [ get_called_class(), 'is_cover_layout' ],
				],
				'\Neve\Customizer\Controls\React\Responsive_Range'
			)
		);


		$this->add_control(
			new Control(
				'neve_post_cover_padding',
				[
					'sanitize_callback' => [ $this, 'sanitize_spacing_array' ],
					'transport'         => $this->selective_refresh,
					'default'           => $this->padding_default( 'cover' ),
				],
				[
					'label'                 => esc_html__( 'Cover padding', 'neve' ),
					'section'               => $this->section,
					'input_attrs'           => [
						'units' => [ 'em', 'px' ],
						'min'   => 0,
					],
					'default'               => $this->padding_default( 'cover' ),
					'priority'              => 6,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => array(
							'vars'       => '--padding',
							'selector'   => '.nv-post-cover',
							'responsive' => true,
						),
					],
					'active_callback'       => [ get_called_class(), 'is_cover_layout' ],
				],
				'\Neve\Customizer\Controls\React\Spacing'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_title_alignment',
				[
					'sanitize_callback' => 'neve_sanitize_alignment',
					'transport'         => $this->selective_refresh,
					'default'           => $this->post_title_alignment(),
				],
				[
					'label'                 => esc_html__( 'Title Alignment', 'neve' ),
					'section'               => 'neve_single_post_layout',
					'priority'              => 6,
					'choices'               => [
						'left'   => [
							'tooltip' => esc_html__( 'Left', 'neve' ),
							'icon'    => 'editor-alignleft',
						],
						'center' => [
							'tooltip' => esc_html__( 'Center', 'neve' ),
							'icon'    => 'editor-aligncenter',
						],
						'right'  => [
							'tooltip' => esc_html__( 'Right', 'neve' ),
							'icon'    => 'editor-alignright',
						],
					],
					'show_labels'           => true,
					'live_refresh_selector' => '.nv-post-cover .nv-title-meta-wrap,.entry-header .entry-title',
					'live_refresh_css_prop' => [
						'remove_classes' => [
							'mobile-left',
							'mobile-right',
							'mobile-center',
							'tablet-left',
							'tablet-right',
							'tablet-center',
							'desktop-left',
							'desktop-right',
							'desktop-center',
						],
					],
				],
				'\Neve\Customizer\Controls\React\Responsive_Radio_Buttons'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_title_position',
				[
					'sanitize_callback' => 'neve_sanitize_position',
					'transport'         => $this->selective_refresh,
					'default'           => [
						'mobile'  => 'center',
						'tablet'  => 'center',
						'desktop' => 'center',
					],
				],
				[
					'label'                 => esc_html__( 'Title Position', 'neve' ),
					'section'               => 'neve_single_post_layout',
					'priority'              => 6,
					'choices'               => [
						'flex-start' => [
							'tooltip' => esc_html__( 'Top', 'neve' ),
							'icon'    => 'arrow-up',
						],
						'center'     => [
							'tooltip' => esc_html__( 'Middle', 'neve' ),
							'icon'    => 'sort',
						],
						'flex-end'   => [
							'tooltip' => esc_html__( 'Bottom', 'neve' ),
							'icon'    => 'arrow-down',
						],
					],
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'       => '--vAlign',
							'responsive' => true,
							'selector'   => '.nv-post-cover',
						],
					],
					'show_labels'           => true,
					'active_callback'       => [ get_called_class(), 'is_cover_layout' ],
				],
				'\Neve\Customizer\Controls\React\Responsive_Radio_Buttons'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_meta_before_title',
				[
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				],
				[
					'label'           => esc_html__( 'Display meta before title', 'neve' ),
					'section'         => $this->section,
					'type'            => 'neve_toggle_control',
					'priority'        => 6,
					'active_callback' => [ get_called_class(), 'is_cover_layout' ],
				],
				'Neve\Customizer\Controls\Checkbox'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_background_color',
				[
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => 'var(--nv-dark-bg)',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Overlay color', 'neve' ),
					'section'               => $this->section,
					'priority'              => 6,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => array(
							'vars'     => '--bgColor',
							'selector' => '.nv-overlay',
						),
					],
					'active_callback'       => [ get_called_class(), 'is_cover_layout' ],
				],
				'Neve\Customizer\Controls\React\Color'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_text_color',
				[
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => 'var(--nv-text-dark-bg)',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Text color', 'neve' ),
					'section'               => $this->section,
					'priority'              => 6,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--color',
							'selector' => '.nv-post-cover .nv-title-meta-wrap',
						],
					],
					'active_callback'       => [ get_called_class(), 'is_cover_layout' ],
				],
				'Neve\Customizer\Controls\React\Color'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_overlay_opacity',
				[
					'sanitize_callback' => 'neve_sanitize_range_value',
					'transport'         => $this->selective_refresh,
					'default'           => 50,
				],
				[
					'label'                 => esc_html__( 'Overlay opacity', 'neve' ) . '(%)',
					'section'               => $this->section,
					'input_attrs'           => [
						'min'        => 0,
						'max'        => 100,
						'step'       => 1,
						'defaultVal' => 50,
					],
					'priority'              => 6,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--opacity',
							'selector' => '.nv-overlay',
						],
					],
					'active_callback'       => [ get_called_class(), 'is_cover_layout' ],
				],
				'Neve\Customizer\Controls\React\Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_hide_thumbnail',
				[
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				],
				[
					'label'           => esc_html__( 'Hide featured image', 'neve' ),
					'section'         => $this->section,
					'type'            => 'neve_toggle_control',
					'priority'        => 6,
					'active_callback' => [ get_called_class(), 'is_cover_layout' ],
				],
				'Neve\Customizer\Controls\Checkbox'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_blend_mode',
				[
					'default'           => 'normal',
					'sanitize_callback' => 'neve_sanitize_blend_mode',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Blend mode', 'neve' ),
					'section'               => $this->section,
					'priority'              => 6,
					'type'                  => 'select',
					'choices'               => [
						'normal'      => esc_html__( 'Normal', 'neve' ),
						'multiply'    => esc_html__( 'Multiply', 'neve' ),
						'screen'      => esc_html__( 'Screen', 'neve' ),
						'overlay'     => esc_html__( 'Overlay', 'neve' ),
						'darken'      => esc_html__( 'Darken', 'neve' ),
						'lighten'     => esc_html__( 'Lighten', 'neve' ),
						'color-dodge' => esc_html__( 'Color Dodge', 'neve' ),
						'saturation'  => esc_html__( 'Saturation', 'neve' ),
						'color'       => esc_html__( 'Color', 'neve' ),
						'difference'  => esc_html__( 'Difference', 'neve' ),
						'exclusion'   => esc_html__( 'Exclusion', 'neve' ),
						'hue'         => esc_html__( 'Hue', 'neve' ),
						'luminosity'  => esc_html__( 'Luminosity', 'neve' ),
					],
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--blendMode',
							'selector' => '.nv-overlay',
						],
					],
					'active_callback'       => [ get_called_class(), 'is_cover_layout' ],
				]
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_container',
				[
					'default'           => 'contained',
					'sanitize_callback' => 'neve_sanitize_container_layout',
				],
				[
					'label'           => esc_html__( 'Cover container', 'neve' ),
					'section'         => $this->section,
					'priority'        => 6,
					'type'            => 'select',
					'choices'         => [
						'contained'  => esc_html__( 'Contained', 'neve' ),
						'full-width' => esc_html__( 'Full width', 'neve' ),
					],
					'active_callback' => [ get_called_class(), 'is_cover_layout' ],
				]
			)
		);

		$this->add_boxed_layout_controls(
			'post_cover_title',
			[
				'priority'               => 6,
				'section'                => $this->section,
				'has_text_color'         => false,
				'padding_default'        => $this->padding_default( 'cover' ),
				'background_default'     => 'var(--nv-dark-bg)',
				'boxed_selector'         => '.nv-is-boxed.nv-title-meta-wrap',
				'toggle_active_callback' => function() {
					return get_theme_mod( 'neve_post_header_layout' ) === 'cover';
				},
				'active_callback'        => function() {
					return get_theme_mod( 'neve_post_header_layout' ) === 'cover' && get_theme_mod( 'neve_post_cover_title_boxed_layout', false );
				},
			]
		);
	}

	/**
	 * Add content order control.
	 */
	private function control_content_order() {

		$all_components = [
			'title-meta'      => __( 'Title & Meta', 'neve' ),
			'thumbnail'       => __( 'Thumbnail', 'neve' ),
			'content'         => __( 'Content', 'neve' ),
			'tags'            => __( 'Tags', 'neve' ),
			'post-navigation' => __( 'Post navigation', 'neve' ),
			'comments'        => __( 'Comments', 'neve' ),
		];

		if ( self::is_cover_layout() ) {
			$all_components = [
				'content'         => __( 'Content', 'neve' ),
				'tags'            => __( 'Tags', 'neve' ),
				'post-navigation' => __( 'Post navigation', 'neve' ),
				'comments'        => __( 'Comments', 'neve' ),
			];
		}

		$order_default_components = $this->post_ordering();

		/**
		 * Filters the elements on the single post page.
		 *
		 * @param array $all_components Single post page components.
		 *
		 * @since 2.11.4
		 */
		$components = apply_filters( 'neve_single_post_elements', $all_components );

		$this->add_control(
			new Control(
				'neve_layout_single_post_elements_order',
				[
					'sanitize_callback' => [ $this, 'sanitize_post_elements_ordering' ],
					'default'           => wp_json_encode( $order_default_components ),
				],
				[
					'label'      => esc_html__( 'Elements Order', 'neve' ),
					'section'    => 'neve_single_post_layout',
					'components' => $components,
					'priority'   => 8,
				],
				'Neve\Customizer\Controls\React\Ordering'
			)
		);

		if ( neve_is_new_skin() ) {
			$this->add_control(
				new Control(
					'neve_single_post_elements_spacing',
					[
						'sanitize_callback' => 'neve_sanitize_range_value',
						'transport'         => $this->selective_refresh,
						'default'           => '{"desktop":60,"tablet":60,"mobile":60}',
					],
					[
						'label'                 => esc_html__( 'Spacing between elements', 'neve' ),
						'section'               => $this->section,
						'type'                  => 'neve_responsive_range_control',
						'input_attrs'           => [
							'max'        => 500,
							'units'      => [ 'px' ],
							'defaultVal' => [
								'mobile'  => 60,
								'tablet'  => 60,
								'desktop' => 60,
								'suffix'  => [
									'mobile'  => 'px',
									'tablet'  => 'px',
									'desktop' => 'px',
								],
							],
						],
						'priority'              => 8,
						'live_refresh_selector' => true,
						'live_refresh_css_prop' => [
							'cssVar' => [
								'responsive' => true,
								'vars'       => '--spacing',
								'selector'   => '.nv-single-post-wrap',
								'suffix'     => 'px',
							],
						],
					],
					'\Neve\Customizer\Controls\React\Responsive_Range'
				)
			);

		}
	}

	/**
	 * Add post meta controls.
	 */
	private function post_meta() {

		$order_default_components = get_theme_mod( 'neve_post_meta_ordering', wp_json_encode( [ 'author', 'date', 'comments' ] ) );

		/**
		 * Filters the elements that appears in meta.
		 *
		 * @param array $elements Array of meta elements.
		 *
		 * @since 2.11.4
		 */
		$components = apply_filters(
			'neve_meta_filter',
			[
				'author'   => __( 'Author', 'neve' ),
				'category' => __( 'Category', 'neve' ),
				'date'     => __( 'Date', 'neve' ),
				'comments' => __( 'Comments', 'neve' ),
			]
		);

		$this->add_control(
			new Control(
				'neve_single_post_meta_ordering',
				[
					'sanitize_callback' => 'neve_sanitize_meta_ordering',
					'default'           => $order_default_components,
				],
				[
					'label'      => esc_html__( 'Meta Order', 'neve' ),
					'section'    => $this->section,
					'components' => $components,
					'priority'   => 10,
				],
				'Neve\Customizer\Controls\React\Ordering'
			)
		);

		$default_separator = get_theme_mod( 'neve_metadata_separator', esc_html( '/' ) );
		$this->add_control(
			new Control(
				'neve_single_post_metadata_separator',
				[
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => $default_separator,
				],
				[
					'priority'    => 10,
					'section'     => $this->section,
					'label'       => esc_html__( 'Separator', 'neve' ),
					'description' => esc_html__( 'For special characters make sure to use Unicode. For example > can be displayed using \003E.', 'neve' ),
					'type'        => 'text',
				]
			)
		);

		$author_avatar_default = get_theme_mod( 'neve_author_avatar', false );
		$this->add_control(
			new Control(
				'neve_single_post_author_avatar',
				[
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => $author_avatar_default,
				],
				[
					'label'    => esc_html__( 'Show Author Avatar', 'neve' ),
					'section'  => $this->section,
					'type'     => 'neve_toggle_control',
					'priority' => 10,
				]
			)
		);

		$avatar_size_default = get_theme_mod( 'neve_author_avatar_size', '{ "mobile": 20, "tablet": 20, "desktop": 20 }' );
		$this->add_control(
			new Control(
				'neve_single_post_avatar_size',
				[
					'sanitize_callback' => 'neve_sanitize_range_value',
					'default'           => $avatar_size_default,
				],
				[
					'label'           => esc_html__( 'Avatar Size', 'neve' ),
					'section'         => $this->section,
					'units'           => [ 'px' ],
					'input_attr'      => [
						'mobile'  => [
							'min'          => 20,
							'max'          => 50,
							'default'      => 20,
							'default_unit' => 'px',
						],
						'tablet'  => [
							'min'          => 20,
							'max'          => 50,
							'default'      => 20,
							'default_unit' => 'px',
						],
						'desktop' => [
							'min'          => 20,
							'max'          => 50,
							'default'      => 20,
							'default_unit' => 'px',
						],
					],
					'input_attrs'     => [
						'step'       => 1,
						'min'        => 20,
						'max'        => 50,
						'defaultVal' => [
							'mobile'  => 20,
							'tablet'  => 20,
							'desktop' => 20,
						],
						'units'      => [ 'px' ],
					],
					'priority'        => 10,
					'active_callback' => function () {
						return get_theme_mod( 'neve_single_post_author_avatar', false );
					},
					'responsive'      => true,
				],
				'Neve\Customizer\Controls\React\Responsive_Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_single_post_show_last_updated_date',
				[
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => get_theme_mod( 'neve_show_last_updated_date', false ),
				],
				[
					'label'    => esc_html__( 'Use last updated date instead of the published one', 'neve' ),
					'section'  => $this->section,
					'type'     => 'neve_toggle_control',
					'priority' => 10,
				]
			)
		);
	}

	/**
	 * Add comments controls.
	 */
	private function comments() {

		$this->add_control(
			new Control(
				'neve_post_comment_section_title',
				[
					'sanitize_callback' => 'sanitize_text_field',
				],
				[
					'label'           => esc_html__( 'Section title', 'neve' ),
					'description'     => esc_html__( 'The following magic tags are available for this field: {title} and {comments_number}. Leave this field empty for default behavior.', 'neve' ),
					'priority'        => 70,
					'section'         => $this->section,
					'type'            => 'text',
					'active_callback' => function() {
						return $this->element_is_enabled( 'comments' );
					},
				]
			)
		);

		$this->add_boxed_layout_controls(
			'comments',
			[
				'priority'                  => 70,
				'section'                   => $this->section,
				'padding_default'           => $this->padding_default(),
				'background_default'        => 'var(--nv-light-bg)',
				'color_default'             => 'var(--nv-text-color)',
				'boxed_selector'            => '.nv-is-boxed.nv-comments-wrap',
				'text_color_css_selector'   => '.nv-comments-wrap.nv-is-boxed, .nv-comments-wrap.nv-is-boxed a',
				'border_color_css_selector' => '.nv-comments-wrap.nv-is-boxed .nv-comment-article',
				'toggle_active_callback'    => function() {
					return $this->element_is_enabled( 'comments' );
				},
				'active_callback'           => function() {
					return $this->element_is_enabled( 'comments' ) && get_theme_mod( 'neve_comments_boxed_layout', false );
				},
			]
		);

		$this->add_control(
			new Control(
				'neve_post_comment_form_title',
				[
					'sanitize_callback' => 'sanitize_text_field',
				],
				[
					'label'           => esc_html__( 'Section title', 'neve' ),
					'priority'        => 71,
					'section'         => $this->section,
					'type'            => 'text',
					'active_callback' => function() {
						return $this->element_is_enabled( 'comments' );
					},
				]
			)
		);

		$this->add_control(
			new Control(
				'neve_post_comment_form_button_style',
				[
					'default'           => 'primary',
					'sanitize_callback' => 'neve_sanitize_button_type',
				],
				[
					'label'           => esc_html__( 'Button style', 'neve' ),
					'section'         => $this->section,
					'priority'        => 71,
					'type'            => 'select',
					'choices'         => [
						'primary'   => esc_html__( 'Primary', 'neve' ),
						'secondary' => esc_html__( 'Secondary', 'neve' ),
					],
					'active_callback' => function() {
						return $this->element_is_enabled( 'comments' );
					},
				]
			)
		);

		$this->add_control(
			new Control(
				'neve_post_comment_form_button_text',
				[
					'sanitize_callback' => 'sanitize_text_field',
				],
				[
					'label'           => esc_html__( 'Button text', 'neve' ),
					'priority'        => 71,
					'section'         => $this->section,
					'type'            => 'text',
					'active_callback' => function() {
						return $this->element_is_enabled( 'comments' );
					},
				]
			)
		);

		$this->add_boxed_layout_controls(
			'comments_form',
			[
				'priority'                => 71,
				'section'                 => $this->section,
				'padding_default'         => $this->padding_default(),
				'is_boxed_default'        => true,
				'background_default'      => 'var(--nv-light-bg)',
				'color_default'           => 'var(--nv-text-color)',
				'boxed_selector'          => '.nv-is-boxed.comment-respond',
				'text_color_css_selector' => '.comment-respond.nv-is-boxed, .comment-respond.nv-is-boxed a',
				'toggle_active_callback'  => function() {
					return $this->element_is_enabled( 'comments' );
				},
				'active_callback'         => function() {
					return $this->element_is_enabled( 'comments' ) && get_theme_mod( 'neve_comments_form_boxed_layout', neve_is_new_skin() );
				},
			]
		);
	}

	/**
	 * Change heading controls properties.
	 */
	public function adjust_headings() {
		$this->change_customizer_object( 'control', 'neve_comments_heading', 'controls_to_wrap', 15 );
	}

	/**
	 * Active callback for sharing controls.
	 *
	 * @param string $element Post page element.
	 *
	 * @return bool
	 */
	public function element_is_enabled( $element ) {
		$default_order = apply_filters(
			'neve_single_post_elements_default_order',
			array(
				'title-meta',
				'thumbnail',
				'content',
				'tags',
				'comments',
			)
		);

		$content_order = get_theme_mod( 'neve_layout_single_post_elements_order', wp_json_encode( $default_order ) );
		$content_order = json_decode( $content_order, true );
		if ( ! in_array( $element, $content_order, true ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Sanitize content order control.
	 */
	public function sanitize_post_elements_ordering( $value ) {
		$allowed = [
			'thumbnail',
			'title-meta',
			'content',
			'tags',
			'post-navigation',
			'comments',
			'author-biography',
			'related-posts',
			'sharing-icons',
		];

		if ( empty( $value ) ) {
			return $allowed;
		}

		$decoded = json_decode( $value, true );

		foreach ( $decoded as $val ) {
			if ( ! in_array( $val, $allowed, true ) ) {
				return $allowed;
			}
		}

		return $value;
	}

	/**
	 * Fuction used for active_callback control property.
	 *
	 * @return bool
	 */
	public static function is_cover_layout() {
		return get_theme_mod( 'neve_post_header_layout' ) === 'cover' && neve_is_new_skin();
	}

	/**
	 *  Fuction used for active_callback control property for boxed title.
	 *
	 * @return bool
	 */
	public function is_boxed_title() {
		if ( ! self::is_cover_layout() ) {
			return false;
		}
		return get_theme_mod( 'neve_post_cover_title_boxed_layout', false );
	}
}
