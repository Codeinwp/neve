<?php
/**
 * Form Fields section.
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Core\Settings\Config;
use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Form_Fields
 *
 * @package Neve\Customizer\Options
 */
class Form_Fields extends Base_Customizer {

	/**
	 * Customizer section slug.
	 *
	 * @var string
	 */
	private $section_id = 'neve_form_fields_section';

	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->add_form_section();
		$this->add_form_fields_controls();
		$this->add_input_text_controls();
		$this->add_form_labels_controls();
		$this->add_button_controls();
	}

	/**
	 * Add section.
	 */
	private function add_form_section() {
		$this->add_section( new Section(
			$this->section_id,
			[
				'priority' => 45,
				'title'    => esc_html__( 'Form Fields', 'neve' ),
			]
		) );
	}

	private function add_form_fields_controls() {
		$this->add_control(
			new Control(
				'neve_form_fields_heading',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Form Fields', 'neve' ),
					'section'          => $this->section_id,
					'priority'         => 10,
					'class'            => 'form-fields-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 0,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_form_fields_padding',
				array(
					'sanitize_callback' => array( $this, 'sanitize_spacing_array' ),
					'transport'         => 'postMessage',
					'default'           => [
						'top'    => '',
						'right'  => '',
						'left'   => '',
						'bottom' => '',
						'unit'   => 'px'
					],
				),
				array(
					'label'                 => esc_html__( 'Field Padding', 'neve' ),
					'section'               => $this->section_id,
					'priority'              => 15,
					'units'                 => [ 'px', 'em' ],
					'default'               => [
						'top'    => '',
						'right'  => '',
						'left'   => '',
						'bottom' => '',
						'unit'   => 'px'
					],
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => array(
						'responsive'  => false,
						'directional' => true,
//						'template'    =>
//							'body  {
//							padding-top: {{value.top}};
//							padding-right: {{value.right}};
//							padding-bottom: {{value.bottom}};
//							padding-left: {{value.left}};
//						}',
					),
				),
				'\Neve\Customizer\Controls\React\Nr_Spacing'
			)
		);
	}

	private function add_input_text_controls() {
		$this->add_control(
			new Control(
				'neve_input_text_heading',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Input Text', 'neve' ),
					'section'          => $this->section_id,
					'priority'         => 30,
					'class'            => 'form-fields-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 0,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);
	}

	private function add_form_labels_controls() {
		$this->add_control(
			new Control(
				'neve_form_labels_heading',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Form Labels', 'neve' ),
					'section'          => $this->section_id,
					'priority'         => 50,
					'class'            => 'form-labels-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 0,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);
	}

	private function add_button_controls() {
		$this->add_control(
			new Control(
				'neve_form_button_heading',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Button', 'neve' ),
					'section'          => $this->section_id,
					'priority'         => 70,
					'class'            => 'form-button-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 0,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);
	}
}
