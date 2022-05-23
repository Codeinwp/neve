<?php
/**
 * Common functionalities for pages and posts.
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Defaults\Single_Post;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Base_Layout_Single
 *
 * @package Neve\Customizer\Options
 */
abstract class Base_Layout_Single extends Base_Customizer {

	use Single_Post;
	/**
	 * Post type slug
	 *
	 * @var string
	 */
	private $post_type;

	/**
	 * Controls section
	 *
	 * @var string
	 */
	public $section;

	/**
	 * Cover selector
	 *
	 * @var string
	 */
	private $cover_selector;

	/**
	 * Get the value for the $post_type.
	 *
	 * @return mixed
	 */
	abstract public function get_post_type();

	/**
	 * Get the value for the $post_type.
	 *
	 * @return mixed
	 */
	abstract public function get_cover_selector();

	/**
	 * Base_Layout_Single constructor.
	 */
	public function __construct() {
		$this->post_type      = $this->get_post_type();
		$this->cover_selector = $this->get_cover_selector();
		$this->section        = 'neve_single_' . $this->post_type . '_layout';
	}

	/**
	 * Get the label for sections.
	 */
	private function get_section_label() {
		$labels = [
			'post' => esc_html__( 'Single Post', 'neve' ),
			'page' => esc_html__( 'Page', 'neve' ),
		];

		if ( array_key_exists( $this->post_type, $labels ) ) {
			return $labels[ $this->post_type ];
		}

		return '';
	}

	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		if ( ! neve_is_new_skin() && $this->post_type !== 'post' ) {
			return;
		}
		$this->create_section();
		if ( neve_is_new_skin() ) {
			$this->add_header_layout_subsection();
			$this->add_header_layout_controls();
		}
	}

	/**
	 * Create the section
	 */
	private function create_section() {
		$this->add_section(
			new Section(
				'neve_single_' . $this->post_type . '_layout',
				[
					'priority' => 40,
					'title'    => $this->get_section_label(),
					'panel'    => 'neve_layout',
				]
			)
		);
	}

	/**
	 * Add header layout accordion.
	 */
	private function add_header_layout_subsection() {
		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_header_layout_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
				],
				[
					'label'            => esc_html__( 'Header Layout', 'neve' ),
					'section'          => $this->section,
					'priority'         => 5,
					'class'            => 'header_layout-accordion',
					'expanded'         => true,
					'accordion'        => true,
					'controls_to_wrap' => 15,
				],
				'Neve\Customizer\Controls\Heading'
			)
		);
	}

	/**
	 * Add controls for header layout.
	 */
	private function add_header_layout_controls() {

		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_header_layout',
				[
					'sanitize_callback' => 'wp_filter_nohtml_kses',
					'default'           => 'normal',
				],
				[
					'section'  => $this->section,
					'priority' => 10,
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
				'neve_' . $this->post_type . '_cover_height',
				[
					'sanitize_callback' => 'neve_sanitize_range_value',
					'transport'         => $this->selective_refresh,
					'default'           => '{ "mobile": 250, "tablet": 320, "desktop": 400 }',
				],
				[
					'label'                 => esc_html__( 'Cover height', 'neve' ),
					'section'               => $this->section,
					'type'                  => 'neve_responsive_range_control',
					'input_attrs'           => [
						'max'        => 700,
						'units'      => [ 'px', 'vh' ],
						'defaultVal' => [
							'mobile'  => 250,
							'tablet'  => 320,
							'desktop' => 400,
							'suffix'  => [
								'mobile'  => 'px',
								'tablet'  => 'px',
								'desktop' => 'px',
							],
						],
					],
					'priority'              => 15,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'responsive' => true,
							'vars'       => '--height',
							'selector'   => $this->cover_selector,
							'suffix'     => 'px',
						],
					],
					'active_callback'       => [ $this, 'is_cover_layout' ],
				],
				'\Neve\Customizer\Controls\React\Responsive_Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_cover_padding',
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
					'priority'              => 20,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => array(
							'vars'       => '--padding',
							'selector'   => $this->cover_selector,
							'responsive' => true,
						),
					],
					'active_callback'       => [ $this, 'is_cover_layout' ],
				],
				'\Neve\Customizer\Controls\React\Spacing'
			)
		);

		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_title_alignment',
				[
					'sanitize_callback' => 'neve_sanitize_alignment',
					'transport'         => $this->selective_refresh,
					'default'           => self::post_title_alignment(),
				],
				[
					'label'                 => esc_html__( 'Title Alignment', 'neve' ),
					'section'               => $this->section,
					'priority'              => 30,
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
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'       => [
								'--textalign',
								'--justify',
							],
							'valueRemap' => [
								'--justify' => [
									'left'   => 'flex-start',
									'center' => 'center',
									'right'  => 'flex-end',
								],
							],
							'responsive' => true,
							'selector'   => $this->cover_selector . ',' . $this->cover_selector . ' .container, ' . ( $this->post_type === 'post' ? '.entry-header' : '.nv-page-title-wrap' ),
						],
					],
					'active_callback'       => $this->post_type === 'post' ? '__return_true' : function() {
						return ! get_theme_mod( 'neve_page_hide_title', false );
					},
				],
				'\Neve\Customizer\Controls\React\Responsive_Radio_Buttons'
			)
		);

		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_title_position',
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
					'section'               => $this->section,
					'priority'              => 35,
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
							'vars'       => '--valign',
							'responsive' => true,
							'selector'   => $this->cover_selector,
						],
					],
					'show_labels'           => true,
					'active_callback'       => function() {
						return $this->post_type === 'post' ? $this->is_cover_layout() : $this->is_cover_layout() && ! get_theme_mod( 'neve_page_hide_title', false );
					},
				],
				'\Neve\Customizer\Controls\React\Responsive_Radio_Buttons'
			)
		);

		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_cover_background_color',
				[
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => 'var(--nv-dark-bg)',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Overlay color', 'neve' ),
					'section'               => $this->section,
					'priority'              => 45,
					'input_attrs'           => [
						'allow_gradient' => true,
					],
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => array(
							'vars'     => '--bgcolor',
							'selector' => $this->cover_selector . ' .nv-overlay',
						),
					],
					'active_callback'       => [ $this, 'is_cover_layout' ],
				],
				'Neve\Customizer\Controls\React\Color'
			)
		);

		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_cover_text_color',
				[
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => 'var(--nv-text-dark-bg)',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Text color', 'neve' ),
					'section'               => $this->section,
					'priority'              => 50,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--color',
							'selector' => $this->cover_selector . ' .nv-title-meta-wrap',
						],
					],
					'active_callback'       => function() {
						return $this->post_type === 'post' ? $this->is_cover_layout() : $this->is_cover_layout() && ! get_theme_mod( 'neve_page_hide_title', false );
					},
				],
				'Neve\Customizer\Controls\React\Color'
			)
		);

		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_cover_overlay_opacity',
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
					'priority'              => 55,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--opacity',
							'selector' => $this->cover_selector . ' .nv-overlay',
						],
					],
					'active_callback'       => [ $this, 'is_cover_layout' ],
				],
				'Neve\Customizer\Controls\React\Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_cover_hide_thumbnail',
				[
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				],
				[
					'label'           => esc_html__( 'Hide featured image', 'neve' ),
					'section'         => $this->section,
					'type'            => 'neve_toggle_control',
					'priority'        => 60,
					'active_callback' => [ $this, 'is_cover_layout' ],
				],
				'Neve\Customizer\Controls\Checkbox'
			)
		);

		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_cover_blend_mode',
				[
					'default'           => 'normal',
					'sanitize_callback' => 'neve_sanitize_blend_mode',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Blend mode', 'neve' ),
					'section'               => $this->section,
					'priority'              => 65,
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
							'vars'     => '--blendmode',
							'selector' => $this->cover_selector . ' .nv-overlay',
						],
					],
					'active_callback'       => [ $this, 'is_cover_layout' ],
				]
			)
		);

		$this->add_control(
			new Control(
				'neve_' . $this->post_type . '_cover_container',
				[
					'default'           => 'contained',
					'sanitize_callback' => 'neve_sanitize_container_layout',
				],
				[
					'label'           => esc_html__( 'Cover container', 'neve' ),
					'section'         => $this->section,
					'priority'        => 70,
					'type'            => 'select',
					'choices'         => [
						'contained'  => esc_html__( 'Contained', 'neve' ),
						'full-width' => esc_html__( 'Full width', 'neve' ),
					],
					'active_callback' => function() {
						return $this->post_type === 'post' ? $this->is_cover_layout() : $this->is_cover_layout() && ! get_theme_mod( 'neve_page_hide_title', false );
					},
				]
			)
		);

		$this->add_boxed_layout_controls(
			$this->post_type . '_cover_title',
			[
				'priority'               => 75,
				'section'                => $this->section,
				'has_text_color'         => false,
				'padding_default'        => $this->padding_default( 'cover' ),
				'background_default'     => 'var(--nv-dark-bg)',
				'boxed_selector'         => $this->cover_selector . ' .nv-is-boxed.nv-title-meta-wrap',
				'toggle_active_callback' => function() {
					return $this->post_type === 'post' ? $this->is_cover_layout() : $this->is_cover_layout() && ! get_theme_mod( 'neve_page_hide_title', false );
				},
				'active_callback'        => function() {
					$is_cover = $this->post_type === 'post' ? $this->is_cover_layout() : $this->is_cover_layout() && ! get_theme_mod( 'neve_page_hide_title', false );
					return $is_cover && get_theme_mod( 'neve_' . $this->post_type . '_cover_title_boxed_layout', false );
				},
			]
		);
	}

	/**
	 * Fuction used for active_callback control property.
	 *
	 * @return bool
	 */
	abstract public static function is_cover_layout();
}
