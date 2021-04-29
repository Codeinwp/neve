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

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Layout_Single_Post
 *
 * @package Neve\Customizer\Options
 */
class Layout_Single_Post extends Base_Customizer {

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
				'priority'         => 10,
				'controls_to_wrap' => 3,
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
				array(
					// 'sanitize_callback' => array( $this, 'sanitize_header_layout' ),
																			'default' => 'normal',
				),
				array(
					'section'  => $this->section,
					'priority' => 15,
					'choices'  => array(
						'normal' => [
							'name'  => esc_html__( 'Normal', 'neve' ),
							'image' => 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODUiIGhlaWdodD0iMTE4IiB2aWV3Qm94PSIwIDAgODUgMTE4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHJlY3QgeD0iMi4yNSIgeT0iMi40NjM4NyIgd2lkdGg9IjgwIiBoZWlnaHQ9IjExMyIgZmlsbD0id2hpdGUiLz4KICAgIDxyZWN0IHg9IjE3LjI1IiB5PSIxNC42MDQ1IiB3aWR0aD0iNTAiIGhlaWdodD0iMzQuNTUzNyIgZmlsbD0iIzc4QjZGRiIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KICAgIDxsaW5lIHgxPSIxNy4yNSIgeTE9IjYyLjY5MjQiIHgyPSI2Ny4wNzkyIiB5Mj0iNjIuNjkyNCIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxNy4yNSIgeTE9IjY3Ljc2OTUiIHgyPSIyNS4yNSIgeTI9IjY3Ljc2OTUiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTcuMjUiIHkxPSI1Ny40OTcxIiB4Mj0iNTEuMDA1MyIgeTI9IjU3LjQ5NzEiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTcuMjUiIHkxPSI4Ny4zODA5IiB4Mj0iNjcuMDc5MiIgeTI9Ijg3LjM4MDkiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTcuMjUiIHkxPSI5Mi41NzYyIiB4Mj0iNjcuMDc5MiIgeTI9IjkyLjU3NjIiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTcuMjUiIHkxPSI5OC4wNjE1IiB4Mj0iNjcuMDc5MiIgeTI9Ijk4LjA2MTUiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=',
						],
						'cover'  => [
							'name'  => esc_html__( 'Cover', 'neve' ),
							'image' => 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgODYgMTIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHJlY3QgeD0iMyIgeT0iMy40NjM4NyIgd2lkdGg9IjgwIiBoZWlnaHQ9IjExMyIgZmlsbD0id2hpdGUiLz4KICAgIDxyZWN0IHg9IjMiIHk9IjMuNDYzODciIHdpZHRoPSI4MCIgaGVpZ2h0PSI1MS4zNjM2IiBmaWxsPSIjNzhCNkZGIiBmaWxsLW9wYWNpdHk9IjAuNCIvPgogICAgPGxpbmUgeDE9IjE5IiB5MT0iNjcuNDI4NyIgeDI9IjY4LjgyOTIiIHkyPSI2Ny40Mjg3IiBzdHJva2U9IiNDNEM0QzQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjE5IiB5MT0iODMuNzExOSIgeDI9IjY4LjgyOTIiIHkyPSI4My43MTE5IiBzdHJva2U9IiNDNEM0QzQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjE5IiB5MT0iNzIuNjI0IiB4Mj0iNjguODI5MiIgeTI9IjcyLjYyNCIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9Ijg4LjkwNzIiIHgyPSI2OC44MjkyIiB5Mj0iODguOTA3MiIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9Ijc4LjEwODQiIHgyPSI2OC44MjkyIiB5Mj0iNzguMTA4NCIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9Ijk0LjM5MjYiIHgyPSI2OC44MjkyIiB5Mj0iOTQuMzkyNiIgc3Ryb2tlPSIjQzRDNEM0IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9IjgzLjcxMTkiIHgyPSI0OCIgeTI9IjgzLjcxMTkiIHN0cm9rZT0iI0M0QzRDNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iMTkiIHkxPSI5OS45OTYxIiB4Mj0iNDgiIHkyPSI5OS45OTYxIiBzdHJva2U9IiNDNEM0QzQiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPGxpbmUgeDE9IjE5IiB5MT0iNDQuNDg5MyIgeDI9IjUyLjc1NTMiIHkyPSI0NC40ODkzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSIxOSIgeTE9IjM4Ljg4NTciIHgyPSI2OSIgeTI9IjM4Ljg4NTciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHJlY3QgeD0iMS41IiB5PSIxLjk2Mzg3IiB3aWR0aD0iODMiIGhlaWdodD0iMTE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==',
						],
					),
				),
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_image_height',
				[
					'sanitize_callback' => 'neve_sanitize_range_value',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Image height', 'neve' ),
					'section'               => $this->section,
					'type'                  => 'neve_responsive_range_control',
					'input_attrs'           => [
						'min'        => 200,
						'max'        => 2000,
						'units'      => [ 'px', 'vh' ],
						'defaultVal' => [
							'mobile'  => 748,
							'tablet'  => 992,
							'desktop' => 1170,
						],
					],
					'priority'              => 20,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'responsive' => true,
						'prop'       => 'height',
						'suffix'     => [
							'mobile'  => 'px',
							'desktop' => 'px',
							'tablet'  => 'px',
						],
						'template'   => '.nv-thumb-wrap img{
							height: {{value}};
						}',
					],
				],
				'\Neve\Customizer\Controls\React\Responsive_Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_title_alignment',
				array(
					'sanitize_callback' => array( $this, 'sanitize_title_alignment' ),
					'default'           => is_rtl() ? 'right' : 'left',
				),
				array(
					'label'       => esc_html__( 'Title Alignment', 'neve' ),
					'section'     => 'neve_single_post_layout',
					'priority'    => 25,
					'choices'     => array(
						'left'   => array(
							'tooltip' => esc_html__( 'Left', 'neve' ),
							'icon'    => 'editor-alignleft',
						),
						'center' => array(
							'tooltip' => esc_html__( 'Center', 'neve' ),
							'icon'    => 'editor-aligncenter',
						),
						'right'  => array(
							'tooltip' => esc_html__( 'Right', 'neve' ),
							'icon'    => 'editor-alignright',
						),
					),
					'show_labels' => true,
				),
				'\Neve\Customizer\Controls\React\Radio_Buttons'
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
					'priority'   => 100,
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
	 * Sanitize the alignment of the title.
	 *
	 * @param string $input Control input.
	 *
	 * @return string
	 */
	public function sanitize_title_alignment( $input ) {
		$alignment_options = array( 'left', 'center', 'right' );
		if ( ! in_array( $input, $alignment_options, true ) ) {
			return is_rtl() ? 'right' : 'left';
		}
		return $input;
	}
}
