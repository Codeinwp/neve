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
				'priority' => 25,
			),
			'neve_typography_body'     => array(
				'title'    => __( 'Body', 'neve' ),
				'priority' => 30,
			),
			'neve_typography_headings' => array(
				'title'    => __( 'Headings', 'neve' ),
				'priority' => 35,
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
	 * Add general typography controls [font subsets]
	 */
	private function controls_typography_general() {
		$this->add_control(
			new Control(
				'neve_font_subsets',
				array(
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

	/**
	 * Add body typography controls.
	 */
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
					'default'           => 'Graphik,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
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
				'neve_body_font_size',
				array(
					'sanitize_callback' => 'neve_sanitize_range_value',
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'       => esc_html__( 'Font Size', 'neve' ),
					'section'     => 'neve_typography_body',
					'input_attr'  => array(
						'mobile'  => array(
							'min'     => 10,
							'max'     => 30,
							'default' => 14,
						),
						'tablet'  => array(
							'min'     => 10,
							'max'     => 30,
							'default' => 14,
						),
						'desktop' => array(
							'min'     => 10,
							'max'     => 30,
							'default' => 16,
						),
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
				'neve_body_line_height',
				array(
					'sanitize_callback' => 'neve_sanitize_range_value',
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'       => esc_html__( 'Line Height', 'neve' ),
					'section'     => 'neve_typography_body',
					'step'        => 0.1,
					'input_attr'  => array(
						'mobile'  => array(
							'min'     => 0.5,
							'max'     => 4,
							'default' => 1.6,
						),
						'tablet'  => array(
							'min'     => 0.5,
							'max'     => 4,
							'default' => 1.6,
						),
						'desktop' => array(
							'min'     => 0.5,
							'max'     => 4,
							'default' => 1.6,
						),
					),
					'priority'    => 15,
					'media_query' => true,
				),
				'Neve\Customizer\Controls\Range'
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
					'default'           => 'Graphik,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
				),
				array(
					'label'    => esc_html__( 'Font Family', 'neve' ),
					'section'  => 'neve_typography_headings',
					'priority' => 10,
				),
				'Neve\Customizer\Controls\Font_Selector'
			)
		);

		$controls = $this->get_headings_controls();

		foreach ( $controls as $control_id => $control ) {
			/**
			 * Heading
			 */
			$this->add_control(
				new Control(
					$control_id . '_ui_heading',
					array(
						'sanitize_callback' => 'sanitize_text_field',
						'transport'         => $this->selective_refresh,
					),
					array(
						'label'            => $control['heading'],
						'section'          => 'neve_typography_headings',
						'priority'         => $control['priority'],
						'class'            => 'headings-accordion',
						'accordion'        => true,
						'controls_to_wrap' => 2,
						'expanded'         => $control_id === 'neve_h1' ? true : false,
					),
					'Neve\Customizer\Controls\Heading'
				)
			);

			/**
			 * Font size
			 */
			$this->add_control(
				new Control(
					$control_id . '_font_size',
					array(
						'sanitize_callback' => 'neve_sanitize_range_value',
						'transport'         => $this->selective_refresh,
					),
					array(
						'label'       => esc_html__( 'Font Size', 'neve' ) . '(rem)',
						'section'     => 'neve_typography_headings',
						'step'        => 0.1,
						'input_attr'  => array(
							'mobile'  => array(
								'min'     => 1,
								'max'     => 10,
								'default' => $control['default_tablet_size'],
							),
							'tablet'  => array(
								'min'     => 1,
								'max'     => 10,
								'default' => $control['default_tablet_size'],
							),
							'desktop' => array(
								'min'     => 1,
								'max'     => 10,
								'default' => $control['default_size'],
							),
						),
						'priority'    => $control['priority'] + 1,
						'media_query' => true,
					),
					'Neve\Customizer\Controls\Range'
				)
			);

			/**
			 * Line height
			 */
			$this->add_control(
				new Control(
					$control_id . '_line_height',
					array(
						'sanitize_callback' => 'neve_sanitize_range_value',
						'transport'         => $this->selective_refresh,
					),
					array(
						'label'       => esc_html__( 'Line Height', 'neve' ),
						'section'     => 'neve_typography_headings',
						'step'        => 0.1,
						'input_attr'  => array(
							'mobile'  => array(
								'min'     => 0.5,
								'max'     => 4,
								'default' => $control['default_line_height'],
							),
							'desktop' => array(
								'min'     => 0.5,
								'max'     => 4,
								'default' => $control['default_line_height'],
							),
							'tablet'  => array(
								'min'     => 0.5,
								'max'     => 4,
								'default' => $control['default_line_height'],
							),
						),
						'priority'    => $control['priority'] + 2,
						'media_query' => true,
					),
					'Neve\Customizer\Controls\Range'
				)
			);
		}
	}

	/**
	 * Get the controls for the headings.
	 *
	 * @return array
	 */
	private function get_headings_controls() {
		return array(
			'neve_h1' => array(
				'priority'            => 20,
				'default_size'        => '2.25',
				'default_tablet_size' => '2',
				'default_line_height' => 1.6,
				'heading'             => 'H1',
			),
			'neve_h2' => array(
				'priority'            => 30,
				'default_size'        => '2',
				'default_tablet_size' => '1.75',
				'default_line_height' => 1.6,
				'heading'             => 'H2',
			),
			'neve_h3' => array(
				'priority'            => 40,
				'default_size'        => '1.75',
				'default_tablet_size' => '1.5',
				'default_line_height' => 1.6,
				'heading'             => 'H3',
			),
			'neve_h4' => array(
				'priority'            => 50,
				'default_size'        => '1.5',
				'default_tablet_size' => '1.25',
				'default_line_height' => 1.6,
				'heading'             => 'H4',
			),
			'neve_h5' => array(
				'priority'            => 60,
				'default_size'        => '1.25',
				'default_tablet_size' => '1',
				'default_line_height' => 1.6,
				'heading'             => 'H5',
			),
			'neve_h6' => array(
				'priority'            => 70,
				'default_size'        => '1',
				'default_tablet_size' => '0.75',
				'default_line_height' => 1.6,
				'heading'             => 'H6',
			),
		);
	}
}

