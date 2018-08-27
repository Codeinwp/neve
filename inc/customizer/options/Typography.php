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
	 * Add controls
	 */
	public function add_controls() {
		$this->sections_typography();
		$this->controls_typography_general();
		$this->controls_typography_body();
		$this->controls_typography_headings();
	}

	/**
	 * Add the customizer section.
	 */
	private function sections_typography() {
		$typography_sections = array(
			'neve_typography_general'  => array(
				'title'    => __( 'General', 'neve' ),
				'priority' => 25
			),
			'neve_typography_body'     => array(
				'title'    => __( 'Body', 'neve' ),
				'priority' => 30
			),
			'neve_typography_headings' => array(
				'title'    => __( 'Headings', 'neve' ),
				'priority' => 35
			),
		);

		foreach ( $typography_sections as $section_id => $section_data ) {
			$this->add_section(
				new Section(
					$section_id, array(
						'title'    => $section_data['title'],
						'panel'    => 'neve_typography',
						'priority' => $section_data['priority'],
					)
				)
			);
		}
	}

	/**
	 * Add general typography controls [font subsets]
	 */
	private function controls_typography_general() {
		$this->add_control(
			new Control(
				'neve_font_subsets', array(
				'sanitize_callback' => 'neve_sanitize_array',
				'default'           => array( 'latin' ),
			),
				array(
					'section'  => 'neve_typography_general',
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
					'priority' => 25,
				),
				'Neve\Customizer\Controls\Multi_Select'
			)
		);
	}

	private function controls_typography_body() {
		/**
		 * Body font family
		 */
		$this->add_control(
			new Control(
				'neve_body_font_family',
				array(
					'transport'         => $this->selective_refresh,
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'    => esc_html__( 'Font Family', 'neve' ),
					'section'  => 'neve_typography_body',
					'priority' => 10,
				),
				'Neve\Customizer\Controls\Font_Selector'
			)
		);

		/**
		 * Body font size
		 */
		$this->add_control(
			new Control(
				'neve_body_font_size', array(
				'sanitize_callback' => 'neve_sanitize_range_value',
				'default'           => '16',
				'transport'         => $this->selective_refresh,
			),
				array(
					'label'       => esc_html__( 'Font Size', 'neve' ),
					'section'     => 'neve_typography_body',
					'input_attr'  => array(
						'min'  => 10,
						'max'  => 30,
						'step' => 1,
					),
					'priority'    => 15,
					'media_query' => true,
				),
				'Neve\Customizer\Controls\Range'
			)
		);

		/**
		 * Body line height
		 */
		$this->add_control(
			new Control(
				'neve_body_line_height', array(
				'sanitize_callback' => 'neve_sanitize_range_value',
				'default'           => 1.6,
				'transport'         => $this->selective_refresh,
			),
				array(
					'label'       => esc_html__( 'Line Height', 'neve' ),
					'section'     => 'neve_typography_body',
					'input_attr'  => array(
						'min'  => 0.5,
						'max'  => 4,
						'step' => 0.1,
					),
					'priority'    => 15,
					'media_query' => true,
				),
				'Neve\Customizer\Controls\Range'
			)
		);
	}

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
					'label'    => esc_html__( 'Font Family', 'neve' ),
					'section'  => 'neve_typography_headings',
					'priority' => 10,
				),
				'Neve\Customizer\Controls\Font_Selector'
			)
		);

		/**
		 * Headings font size
		 */
		$this->add_control(
			new Control(
				'neve_headings_font_size', array(
				'sanitize_callback' => 'neve_sanitize_range_value',
				'default'           => '16',
				'transport'         => $this->selective_refresh,
			),
				array(
					'label'       => esc_html__( 'Font Size', 'neve' ),
					'section'     => 'neve_typography_headings',
					'input_attr'  => array(
						'min'  => 10,
						'max'  => 30,
						'step' => 1,
					),
					'priority'    => 15,
					'media_query' => true,
				),
				'Neve\Customizer\Controls\Range'
			)
		);

		/**
		 * Headings line height
		 */
		$this->add_control(
			new Control(
				'neve_headings_line_height', array(
				'sanitize_callback' => 'neve_sanitize_range_value',
				'default'           => 1.6,
				'transport'         => $this->selective_refresh,
			),
				array(
					'label'       => esc_html__( 'Line Height', 'neve' ),
					'section'     => 'neve_typography_headings',
					'input_attr'  => array(
						'min'  => 0.5,
						'max'  => 4,
						'step' => 0.1,
					),
					'priority'    => 15,
					'media_query' => true,
				),
				'Neve\Customizer\Controls\Range'
			)
		);
	}
}

