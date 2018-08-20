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

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

class Typography extends Base_Customizer {
	/**
	 * Initialize the scripts and anything needed.
	 */
	public function init() {
		parent::init();
		add_action( 'customize_preview_init', array( $this, 'enqueue_customizer_script' ) );
	}

	/**
	 * Add controls
	 */
	public function add_controls() {
		$this->add_typography_section();
		$this->add_section_ui_tabs();
		$this->add_font_family_selectors();
		$this->add_font_subsets_control();
		$this->add_section_ui_headings();
		$this->add_posts_pages_controls();
	}

	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 *
	 * @since 1.1.38
	 */
	public function enqueue_customizer_script() {
//		wp_enqueue_script( 'hestia_customizer_typography', get_template_directory_uri() . '/assets/js/admin/typography-customizer-preview.js', array(), HESTIA_VERSION, true );
	}

	/**
	 * Add the customizer section.
	 */
	private function add_typography_section() {
		$this->add_section(
			new Section(
				'neve_typography', array(
					'title'    => esc_html__( 'Typography', 'neve' ),
					'panel'    => 'neve_appearance_settings',
					'priority' => 25,
				)
			)
		);
	}

	/**
	 * Add ui tabs
	 */
	private function add_section_ui_tabs() {
		$this->add_control(
			new Control(
				'neve_typography_tabs', array(
				'sanitize_callback' => 'sanitize_text_field',
			),
				array(
					'section'  => 'neve_typography',
					'priority' => 1,
					'tabs'     => array(
						'font_family' => array(
							'label' => esc_html__( 'font family', 'neve' ),
							'icon'  => 'font',
						),
						'font_sizes'  => array(
							'label' => esc_html__( 'font size', 'neve' ),
							'icon'  => 'text-height',
						),
					),
					'controls' => array(
						'font_family' => array(
							'neve_headings_font'     => array(),
							'neve_body_font'         => array(),
							'neve_font_subsets'      => array(),
							'neve_typography_upsell' => array(),
						),
						'font_sizes'  => array(
							'neve_posts_and_pages_title'         => array(),
							'neve_header_titles_fs'              => array(),
							'neve_post_page_headings_fs'         => array(),
							'neve_post_page_content_fs'          => array(),
							'neve_frontpage_sections_title'      => array(),
							'neve_big_title_fs'                  => array(),
							'neve_section_primary_headings_fs'   => array(),
							'neve_section_secondary_headings_fs' => array(),
							'neve_section_content_fs'            => array(),
							'neve_generic_title'                 => array(),
							'neve_menu_fs'                       => array(),
							'neve_typography_upsell'             => array(),
						),
					),
				),
				'Neve\Customizer\Controls\Tabs'
			)
		);
	}

	/**
	 *
	 * ---------------------------------
	 * 1.a. Headings font family control
	 * This control allows the user to choose a font family for all Headings used in the theme ( h1 - h6 )
	 * ---------------------------------
	 * 1.b. Body font family control
	 * This control allows the user to choose a font family for all elements in the body tag
	 * --------------------------------
	 */
	private function add_font_family_selectors() {

		$this->add_control(
			new Control(
				'neve_headings_font', array(
				'type'              => 'theme_mod',
				'sanitize_callback' => 'sanitize_text_field',
			),
				array(
					'label'    => esc_html__( 'Headings', 'neve' ) . ' ' . esc_html__( 'font family', 'neve' ),
					'section'  => 'neve_typography',
					'priority' => 5,
					'type'     => 'select',
				),
				'Neve\Customizer\Controls\Font_Selector'
			)
		);

		$this->add_control(
			new Control(
				'neve_body_font',
				array(
					'type'              => 'theme_mod',
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'    => esc_html__( 'Body', 'neve' ) . ' ' . esc_html__( 'font family', 'neve' ),
					'section'  => 'neve_typography',
					'priority' => 10,
					'type'     => 'select',
				),
				'Neve\Customizer\Controls\Font_Selector'
			)
		);
	}

	/**
	 * This control allows the user to choose a subset for the font family ( for e.g. lating, cyrillic etc )
	 */
	private function add_font_subsets_control() {

		/**
		 * Font Subsets control
		 */
		$this->add_control(
			new Control(
				'neve_font_subsets', array(
				'sanitize_callback' => 'neve_sanitize_array',
				'default'           => array( 'latin' ),
			),
				array(
					'section'  => 'neve_typography',
					'label'    => esc_html__( 'Font Subsets', 'neve' ),
					'choices'  => array(
						'latin'        => 'latin',
						'latin-ext'    => 'latin-ext',
						'cyrillic'     => 'cyrillic',
						'cyrillic-ext' => 'cyrillic-ext',
						'greek'        => 'greek',
						'greek-ext'    => 'greek-ext',
						'vietnamese'   => 'vietnamese',
					),
					'priority' => 45,
				),
				'Neve\Customizer\Controls\Multi_Select'
			)
		);
	}

	/**
	 * Add headings
	 */
	private function add_section_ui_headings() {
		$this->add_control(
			new Control(
				'neve_posts_and_pages_title',
				array(
					'sanitize_callback' => 'wp_kses',
				),
				array(
					'label'    => esc_html__( 'Posts & Pages', 'neve' ),
					'section'  => 'neve_typography',
					'priority' => 100,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);
	}

	/**
	 * Font size controls for Posts & Pages
	 */
	private function add_posts_pages_controls() {
		/**
		 * Title control [Posts & Pages]
		 * This control allows the user to choose a font size for the main titles
		 * that appear in the header for pages and posts.
		 *
		 * The values area between -25 and +25 px.
		 */
		$this->add_control(
			new Control(
				'neve_header_titles_fs', array(
				'sanitize_callback' => 'neve_sanitize_range_value',
				'default'           => '0',
				'transport'         => $this->selective_refresh,
			),
				array(
					'label'       => esc_html__( 'Title', 'neve' ),
					'section'     => 'neve_typography',
					'type'        => 'range-value',
					'input_attr'  => array(
						'min'  => - 25,
						'max'  => 25,
						'step' => 1,
					),
					'priority'    => 110,
					'media_query' => true,
					'sum_type'    => true,
				),
				'Neve\Customizer\Controls\Range'
			)
		);

		/**
		 * Headings control [Posts & Pages]
		 *
		 * This control allows the user to choose a font size for all headings
		 * ( h1 - h6 ) from pages and posts.
		 *
		 * The values area between -25 and +25 px.
		 */
		$this->add_control(
			new Control(
				'neve_post_page_headings_fs', array(
				'sanitize_callback' => 'neve_sanitize_range_value',
				'default'           => 0,
				'transport'         => $this->selective_refresh,
			),
				array(
					'label'       => esc_html__( 'Headings', 'neve' ),
					'section'     => 'neve_typography',
					'type'        => 'range-value',
					'input_attr'  => array(
						'min'  => - 25,
						'max'  => 25,
						'step' => 1,
					),
					'priority'    => 115,
					'sum_type'    => true,
					'media_query' => true,
				),
				'Neve\Customizer\Controls\Range'
			)
		);

		/**
		 * Content control [Posts & Pages]
		 *
		 * This control allows the user to choose a font size for the main content
		 * area in pages and posts.
		 *
		 * The values area between -25 and +25 px.
		 */
		$this->add_control(
			new Control(
				'neve_post_page_content_fs',
				array(
					'sanitize_callback' => 'neve_sanitize_range_value',
					'default'           => 0,
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'       => esc_html__( 'Content', 'neve' ),
					'section'     => 'neve_typography',
					'type'        => 'range-value',
					'input_attr'  => array(
						'min'  => - 25,
						'max'  => 25,
						'step' => 1,
					),
					'priority'    => 120,
					'sum_type'    => true,
					'media_query' => true,
				),
				'Neve\Customizer\Controls\Range'
			)
		);
	}
}

