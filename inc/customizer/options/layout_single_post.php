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
		$this->add_sections_heading();
		$this->header_layout();
		$this->control_content_order();
	}

	/**
	 * Add customize section
	 */
	private function section_single_post() {
		$this->add_section(
			new Section(
				$this->section,
				array(
					'priority' => 40,
					'title'    => esc_html__( 'Single Post', 'neve' ),
					'panel'    => 'neve_layout',
				)
			)
		);
	}

	/**
	 * Add sections headings.
	 */
	private function add_sections_heading() {
		$headings = array(
			'header_layout' => array(
				'title'            => esc_html__( 'Header Layout', 'neve' ),
				'priority'         => 1,
				'controls_to_wrap' => 14,
			),
			'page_elements' => array(
				'title'            => esc_html__( 'Page elements', 'neve' ),
				'priority'         => 16,
				'controls_to_wrap' => 1,
			),
		);

		foreach ( $headings as $heading_id => $heading_data ) {
			$this->add_control(
				new Control(
					'neve_post_' . $heading_id . '_headeing',
					array(
						'sanitize_callback' => 'sanitize_text_field',
					),
					array(
						'label'            => $heading_data['title'],
						'section'          => $this->section,
						'priority'         => $heading_data['priority'],
						'class'            => $heading_id . '-accordion',
						'accordion'        => true,
						'controls_to_wrap' => $heading_data['controls_to_wrap'],
					),
					'Neve\Customizer\Controls\Heading'
				)
			);
		}
	}

	/**
	 * Add header layout controls
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
					'default'           => '{ "mobile": "300", "tablet": "300", "desktop": "300" }',
				],
				[
					'label'                 => esc_html__( 'Cover height', 'neve' ),
					'section'               => $this->section,
					'type'                  => 'neve_responsive_range_control',
					'input_attrs'           => [
						'min'        => 50,
						'max'        => 700,
						'units'      => [ 'px', 'vh' ],
						'defaultVal' => [
							'mobile'  => 300,
							'tablet'  => 300,
							'desktop' => 300,
							'suffix'  => array(
								'mobile'  => 'px',
								'tablet'  => 'px',
								'desktop' => 'px',
							),
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
					'active_callback'       => [ $this, 'is_cover_layout' ],
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
					'live_refresh_css_prop' => array(
						'responsive'  => true,
						'directional' => true,
						'template'    =>
							'body.single-post .nv-post-cover .nv-cover-container {
							padding-top: {{value.top}};
							padding-right: {{value.right}};
							padding-bottom: {{value.bottom}};
							padding-left: {{value.left}};
						}',
					),
					'active_callback'       => [ $this, 'is_cover_layout' ],
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
					'active_callback'       => [ $this, 'is_cover_layout' ],
				],
				'\Neve\Customizer\Controls\React\Responsive_Radio_Buttons'
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
					'priority'              => 7,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'template' => '
							body.single-post .nv-post-cover .nv-overlay {
							    background-color: {{value}};
						    }',

					],
					'active_callback'       => [ $this, 'is_cover_layout' ],
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
					'priority'              => 8,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'template' => '
							body.single-post .nv-post-cover,
							body.single-post .nv-post-cover .nv-meta-list li,
							body.single-post .nv-post-cover .nv-meta-list a{
							   color: {{value}};
						    }',
					],
					'active_callback'       => [ $this, 'is_cover_layout' ],
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
					'default'           => '{ "mobile": "0", "tablet": "0", "desktop": "0" }',
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
					'priority'              => 9,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'responsive' => true,
						'prop'       => 'opacity',
						'template'   => 'body.single-post .nv-post-cover .nv-overlay {
							opacity: {{value}};
						}',
					],
					'active_callback'       => [ $this, 'is_cover_layout' ],
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
					'priority'        => 10,
					'active_callback' => [ $this, 'is_cover_layout' ],
				],
				'Neve\Customizer\Controls\Checkbox'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_blend_mode',
				[
					'default'           => 'overlay',
					'sanitize_callback' => array( $this, 'sanitize_blend_mode' ),
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Blend mode', 'neve' ),
					'section'               => $this->section,
					'priority'              => 11,
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
					'active_callback'       => [ $this, 'is_cover_layout' ],
				]
			)
		);

		$this->add_control(
			new Control(
				'neve_post_cover_container',
				[
					'default'           => 'contained',
					'sanitize_callback' => array( $this, 'sanitize_container' ),
				],
				[
					'label'           => esc_html__( 'Cover container', 'neve' ),
					'section'         => $this->section,
					'priority'        => 12,
					'type'            => 'select',
					'choices'         => [
						'contained'  => esc_html__( 'Contained', 'neve' ),
						'full-width' => esc_html__( 'Full width', 'neve' ),
					],
					'active_callback' => [ $this, 'is_cover_layout' ],
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
					'priority'        => 13,
					'active_callback' => [ $this, 'is_cover_layout' ],
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

					'priority'              => 14,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => array(
						'responsive'  => true,
						'directional' => true,
						'template'    =>
							'body.single-post .nv-post-cover .nv-title-meta-wrap.is-boxed {
							padding-top: {{value.top}};
							padding-right: {{value.right}};
							padding-bottom: {{value.bottom}};
							padding-left: {{value.left}};
						}',
					),
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
					'priority'              => 15,
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
		$order_default_components = apply_filters(
			'neve_single_post_elements_default_order',
			array(
				'title-meta',
				'thumbnail',
				'content',
				'tags',
				'comments',
			)
		);

		$components = apply_filters(
			'neve_single_post_elements',
			array(
				'title-meta'      => __( 'Title & Meta', 'neve' ),
				'thumbnail'       => __( 'Thumbnail', 'neve' ),
				'content'         => __( 'Content', 'neve' ),
				'tags'            => __( 'Tags', 'neve' ),
				'post-navigation' => __( 'Post navigation', 'neve' ),
				'comments'        => __( 'Comments', 'neve' ),
			)
		);

		$this->add_control(
			new Control(
				'neve_layout_single_post_elements_order',
				array(
					'sanitize_callback' => array( $this, 'sanitize_post_elements_ordering' ),
					'default'           => wp_json_encode( $order_default_components ),
				),
				array(
					'label'      => esc_html__( 'Elements Order', 'neve' ),
					'section'    => 'neve_single_post_layout',
					'components' => $components,
					'priority'   => 17,
				),
				'Neve\Customizer\Controls\React\Ordering'
			)
		);
	}

	/**
	 * Sanitize content order control.
	 */
	public function sanitize_post_elements_ordering( $value ) {
		$allowed = array(
			'thumbnail',
			'title-meta',
			'content',
			'tags',
			'post-navigation',
			'comments',
			'author-biography',
			'related-posts',
			'sharing-icons',
		);

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
	public function is_cover_layout() {
		return get_theme_mod( 'neve_post_header_layout' ) === 'cover';
	}

	/**
	 *  Fuction used for active_callback control property for boxed title.
	 *
	 * @return bool
	 */
	public function is_boxed_title() {
		if ( ! $this->is_cover_layout() ) {
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
		$header_layout_options = array( 'normal', 'cover' );
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
				'top'    => 20,
				'right'  => 0,
				'bottom' => 20,
				'left'   => 0,
			],
			'tablet'       => [
				'top'    => 40,
				'right'  => 0,
				'bottom' => 40,
				'left'   => 0,
			],
			'desktop'      => [
				'top'    => 60,
				'right'  => 0,
				'bottom' => 60,
				'left'   => 0,
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
			'mobile'  => 'middle',
			'tablet'  => 'middle',
			'desktop' => 'middle',
		];
	}
}
