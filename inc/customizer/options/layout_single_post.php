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
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Layout_Single_Post
 *
 * @package Neve\Customizer\Options
 */
class Layout_Single_Post extends Base_Customizer {
	use Core;

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
		$this->add_subsections();
		$this->header_layout();
		$this->control_content_order();
		$this->post_meta();
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
			'header_layout' => [
				'title'            => esc_html__( 'Header Layout', 'neve' ),
				'priority'         => 1,
				'controls_to_wrap' => 16,
			],
			'page_elements' => [
				'title'            => esc_html__( 'Page Elements', 'neve' ),
				'priority'         => 17,
				'controls_to_wrap' => 1,
				'expanded'         => false,
			],
			'meta'          => [
				'title'            => esc_html__( 'Post Meta', 'neve' ),
				'priority'         => 19,
				'controls_to_wrap' => 5,
				'expanded'         => false,
			],
		];

		foreach ( $headings as $heading_id => $heading_data ) {
			$this->add_control(
				new Control(
					'neve_post_' . $heading_id . '_headeing',
					[
						'sanitize_callback' => 'sanitize_text_field',
					],
					[
						'label'            => $heading_data['title'],
						'section'          => $this->section,
						'priority'         => $heading_data['priority'],
						'class'            => $heading_id . '-accordion',
						'accordion'        => true,
						'expanded'         => array_key_exists( 'expanded', $heading_data ) ? $heading_data['expanded'] : true,
						'controls_to_wrap' => $heading_data['controls_to_wrap'],
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
					'sanitize_callback' => [ $this, 'sanitize_header_layout' ],
					'default'           => 'normal',
				],
				[
					'section'  => $this->section,
					'priority' => 2,
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
					'priority'              => 3,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'responsive' => true,
						'prop'       => 'min-height',
						'suffix'     => [
							'mobile'  => 'px',
							'desktop' => 'px',
							'tablet'  => 'px',
						],
						'template'   => 'body.single-post .nv-post-cover{
							min-height: {{value}};
						}',
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
					'default'           => self::cover_padding_default(),
				],
				[
					'label'                 => esc_html__( 'Cover padding', 'neve' ),
					'section'               => $this->section,
					'input_attrs'           => [
						'units' => [ 'em', 'px' ],
					],

					'priority'              => 4,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'responsive'  => true,
						'directional' => true,
						'template'    =>
							'body.single-post .nv-post-cover .nv-cover-container {
							padding-top: {{value.top}};
							padding-right: {{value.right}};
							padding-bottom: {{value.bottom}};
							padding-left: {{value.left}};
						}',
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
					'sanitize_callback' => 'sanitize_alignment',
					'transport'         => $this->selective_refresh,
					'default'           => self::post_title_alignment_default(),
				],
				[
					'label'                 => esc_html__( 'Title Alignment', 'neve' ),
					'section'               => 'neve_single_post_layout',
					'priority'              => 5,
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
					'live_refresh_selector' => 'body.single-post .nv-post-cover .nv-cover-container, .entry-header .entry-title',
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
					'sanitize_callback' => 'sanitize_position',
					'transport'         => $this->selective_refresh,
					'default'           => self::post_title_position_default(),
				],
				[
					'label'                 => esc_html__( 'Title Position', 'neve' ),
					'section'               => 'neve_single_post_layout',
					'priority'              => 6,
					'choices'               => [
						'top'    => [
							'tooltip' => esc_html__( 'Top', 'neve' ),
							'icon'    => 'arrow-up',
						],
						'middle' => [
							'tooltip' => esc_html__( 'Middle', 'neve' ),
							'icon'    => 'sort',
						],
						'bottom' => [
							'tooltip' => esc_html__( 'Bottom', 'neve' ),
							'icon'    => 'arrow-down',
						],
					],
					'live_refresh_selector' => 'body.single-post .nv-post-cover .nv-title-meta-wrap',
					'live_refresh_css_prop' => [
						'remove_classes' => [
							'mobile-top',
							'mobile-middle',
							'mobile-bottom',
							'tablet-top',
							'tablet-middle',
							'tablet-bottom',
							'desktop-top',
							'desktop-middle',
							'desktop-bottom',
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
					'priority'        => 7,
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
					'priority'              => 8,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'template' => '
							body.single-post .nv-post-cover .nv-overlay {
							    background-color: {{value}};
						    }',

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
					'priority'              => 9,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'template' => '
							body.single-post .nv-post-cover,
							body.single-post .nv-post-cover .nv-meta-list li,
							body.single-post .nv-post-cover .nv-meta-list a{
							   color: {{value}};
						    }',
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
					'default'           => '{ "mobile": 0.5, "tablet": 0.5, "desktop": 0.5 }',
				],
				[
					'label'                 => esc_html__( 'Overlay opacity', 'neve' ),
					'section'               => $this->section,
					'type'                  => 'neve_responsive_range_control',
					'input_attrs'           => [
						'min'        => 0,
						'max'        => 1,
						'defaultVal' => [
							'mobile'  => 0,
							'tablet'  => 0,
							'desktop' => 0,
						],
						'step'       => 0.1,
					],
					'priority'              => 10,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'responsive' => true,
						'prop'       => 'opacity',
						'template'   => 'body.single-post .nv-post-cover .nv-overlay {
							opacity: {{value}};
						}',
					],
					'active_callback'       => [ get_called_class(), 'is_cover_layout' ],
				],
				'\Neve\Customizer\Controls\React\Responsive_Range'
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
					'priority'        => 11,
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
					'sanitize_callback' => [ $this, 'sanitize_blend_mode' ],
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Blend mode', 'neve' ),
					'section'               => $this->section,
					'priority'              => 12,
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
						'template' => '
							body.single-post .nv-post-cover .nv-overlay{
							   mix-blend-mode: {{value}};
						    }',

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
					'sanitize_callback' => [ $this, 'sanitize_container' ],
				],
				[
					'label'           => esc_html__( 'Cover container', 'neve' ),
					'section'         => $this->section,
					'priority'        => 13,
					'type'            => 'select',
					'choices'         => [
						'contained'  => esc_html__( 'Contained', 'neve' ),
						'full-width' => esc_html__( 'Full width', 'neve' ),
					],
					'active_callback' => [ get_called_class(), 'is_cover_layout' ],
				]
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_boxed_title',
				[
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				],
				[
					'label'           => esc_html__( 'Boxed title', 'neve' ),
					'section'         => $this->section,
					'type'            => 'neve_toggle_control',
					'priority'        => 14,
					'active_callback' => [ get_called_class(), 'is_cover_layout' ],
				],
				'Neve\Customizer\Controls\Checkbox'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_boxed_title_padding',
				[
					'sanitize_callback' => [ $this, 'sanitize_spacing_array' ],
					'transport'         => $this->selective_refresh,
					'default'           => self::cover_padding_default(),
				],
				[
					'label'                 => esc_html__( 'Section padding', 'neve' ),
					'section'               => $this->section,
					'input_attrs'           => [
						'units' => [ 'em', 'px' ],
					],

					'priority'              => 15,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'responsive'  => true,
						'directional' => true,
						'template'    =>
							'body.single-post .nv-post-cover .nv-title-meta-wrap.is-boxed {
							padding-top: {{value.top}};
							padding-right: {{value.right}};
							padding-bottom: {{value.bottom}};
							padding-left: {{value.left}};
						}',
					],
					'active_callback'       => [ $this, 'is_boxed_title' ],
				],
				'\Neve\Customizer\Controls\React\Spacing'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_boxed_title_background',
				[
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => 'var(--nv-dark-bg)',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Section background', 'neve' ),
					'section'               => $this->section,
					'priority'              => 16,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'template' => '
							.nv-title-meta-wrap.is-boxed {
							   background-color: {{value}};
						    }',

					],
					'active_callback'       => [ $this, 'is_boxed_title' ],
				],
				'Neve\Customizer\Controls\React\Color'
			)
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

		$order_default_components = self::ordering_default();
		$components               = apply_filters( 'neve_single_post_elements', $all_components );

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
					'priority'   => 18,
				],
				'Neve\Customizer\Controls\React\Ordering'
			)
		);
	}

	/**
	 * Add post meta controls.
	 */
	private function post_meta() {

		$order_default_components = get_theme_mod( 'neve_post_meta_ordering', wp_json_encode( [ 'author', 'date', 'comments' ] ) );
		$components               = apply_filters(
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
					'sanitize_callback' => 'sanitize_meta_ordering',
					'default'           => $order_default_components,
				],
				[
					'label'      => esc_html__( 'Meta Order', 'neve' ),
					'section'    => $this->section,
					'components' => $components,
					'priority'   => 20,
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
					'priority'    => 21,
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
					'priority' => 22,
				]
			)
		);

		$avatar_size_default = get_theme_mod(
			'neve_author_avatar_size',
			wp_json_encode(
				[
					'desktop' => 20,
					'tablet'  => 20,
					'mobile'  => 20,
				]
			)
		);
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
					'priority'        => 23,
					'active_callback' => function () {
						return get_theme_mod( 'neve_single_post_author_avatar', false );
					},
					'responsive'      => true,
				],
				'Neve\Customizer\Controls\React\Responsive_Range'
			)
		);

		$show_updated_time_default = get_theme_mod( 'neve_show_last_updated_date', false );
		$this->add_control(
			new Control(
				'neve_single_post_show_last_updated_date',
				[
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => $show_updated_time_default,
				],
				[
					'label'    => esc_html__( 'Use last updated date instead of the published one', 'neve' ),
					'section'  => $this->section,
					'type'     => 'neve_toggle_control',
					'priority' => 24,
				]
			)
		);
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
		return get_theme_mod( 'neve_post_header_layout' ) === 'cover';
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
		return get_theme_mod( 'neve_post_cover_boxed_title', false );
	}

	/**
	 * Sanitize the header layout control.
	 *
	 * @param string $input Control input.
	 *
	 * @return string
	 */
	public function sanitize_header_layout( $input ) {
		$header_layout_options = [ 'normal', 'cover' ];
		if ( ! in_array( $input, $header_layout_options, true ) ) {
			return 'normal';
		}
		return $input;
	}

	/**
	 * Sanitize blend mode option.
	 *
	 * @param string $input Control input.
	 *
	 * @return string
	 */
	public function sanitize_blend_mode( $input ) {
		$blend_mode_options = [ 'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'saturation', 'color', 'difference', 'exclusion', 'hue', 'luminosity' ];
		if ( ! in_array( $input, $blend_mode_options, true ) ) {
			return 'normal';
		}
		return $input;
	}

	/**
	 * Sanitize container option.
	 *
	 * @param string $input Control input.
	 *
	 * @return string
	 */
	public function sanitize_container( $input ) {
		$container_options = [ 'full-width', 'contained' ];
		if ( ! in_array( $input, $container_options, true ) ) {
			return 'contained';
		}
		return $input;
	}

	/**
	 * Get default values for cover padding.
	 *
	 * @return array
	 */
	public static function cover_padding_default() {
		return [
			'mobile'       => [
				'top'    => 40,
				'right'  => 15,
				'bottom' => 40,
				'left'   => 15,
			],
			'tablet'       => [
				'top'    => 60,
				'right'  => 15,
				'bottom' => 60,
				'left'   => 15,
			],
			'desktop'      => [
				'top'    => 60,
				'right'  => 15,
				'bottom' => 60,
				'left'   => 15,
			],
			'mobile-unit'  => 'px',
			'tablet-unit'  => 'px',
			'desktop-unit' => 'px',
		];
	}

	/**
	 * Get the default value for title alignment.
	 *
	 * @return array
	 */
	public static function post_title_alignment_default() {
		$default_position = is_rtl() ? 'right' : 'left';
		return [
			'mobile'  => $default_position,
			'tablet'  => $default_position,
			'desktop' => $default_position,
		];
	}

	/**
	 * Get the default value for title vertical position.
	 *
	 * @return array
	 */
	public static function post_title_position_default() {
		return [
			'mobile'  => 'bottom',
			'tablet'  => 'bottom',
			'desktop' => 'bottom',
		];
	}

	/**
	 * Get default values for ordering control
	 *
	 * @return array
	 */
	public static function ordering_default() {
		$default_components = [
			'title-meta',
			'thumbnail',
			'content',
			'tags',
			'comments',
		];

		if ( get_theme_mod( 'neve_post_header_layout' ) === 'cover' ) {
			$default_components = [
				'content',
				'tags',
				'comments',
			];
		}

		return apply_filters( 'neve_single_post_elements_default_order', $default_components );
	}
}
