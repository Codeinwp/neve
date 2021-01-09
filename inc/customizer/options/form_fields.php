<?php
/**
 * Form Fields section.
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use HFG\Traits\Core;
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
	use Core;

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
		$this->add_section(
			new Section(
				$this->section_id,
				[
					'priority' => 45,
					'title'    => esc_html__( 'Form Fields', 'neve' ),
				]
			)
		);
	}

	/**
	 * Form fields controls.
	 */
	private function add_form_fields_controls() {
		$this->add_control(
			new Control(
				'neve_form_fields_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
				],
				[
					'label'            => esc_html__( 'Form Fields', 'neve' ),
					'section'          => $this->section_id,
					'priority'         => 10,
					'class'            => 'form-fields-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 6,
				],
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_form_fields_padding',
				[
					'sanitize_callback' => [ $this, 'sanitize_spacing_array' ],
					'transport'         => $this->selective_refresh,
					'default'           => [
						'top'    => '7',
						'bottom' => '7',
						'left'   => '12',
						'right'  => '12',
						'unit'   => 'px',
					],
				],
				[
					'label'                 => esc_html__( 'Field Padding', 'neve' ),
					'section'               => $this->section_id,
					'priority'              => 15,
					'units'                 => [ 'px', 'em' ],
					'default'               => [
						'top'    => '7',
						'right'  => '12',
						'bottom' => '7',
						'left'   => '12',
						'unit'   => 'px',
					],
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'responsive'  => false,
						'directional' => true,
						'template'    =>
							'
							body form input:read-write,
							body form textarea,
							body form select,
							body form select option,
							body form.wp-block-search input.wp-block-search__input,
							.woocommerce-cart table.cart td.actions .coupon .input-text,
							.woocommerce-page .select2-container--default .select2-selection--single,
							.woocommerce-page .woocommerce form .form-row input.input-text,
							.woocommerce-page .woocommerce form .form-row textarea,
							.wc-block-product-search form input.wc-block-product-search__field {
								 padding-top: {{value.top}};
								 padding-right: {{value.right}};
								 padding-bottom: {{value.bottom}};
								 padding-left: {{value.left}};
					        }
					        form.search-form input[type="search"],
					        form.woocommerce-product-search input[type="search"] {
					             padding-right: calc({{value.right}} + 33px);
					        }',
					],
				],
				'\Neve\Customizer\Controls\React\Nr_Spacing'
			)
		);


		$this->add_control(
			new Control(
				'neve_form_fields_spacing',
				[
					'sanitize_callback' => 'absint',
					'transport'         => $this->selective_refresh,
					'default'           => 10,
				],
				[
					'label'                 => esc_html__( 'Field Spacing', 'neve' ),
					'section'               => $this->section_id,
					'type'                  => 'neve_range_control',
					'input_attrs'           => [
						'min'        => 50,
						'max'        => 100,
						'defaultVal' => 10,
						'units'      => [ 'px', 'em' ],
					],
					'priority'              => 16,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'template' => '
						 form:not([role="search"]):not(.woocommerce-cart-form):not(.woocommerce-ordering):not(.cart) input:read-write:not(#coupon_code),
						 form textarea,
						 form select,
						 .woocommerce-page .select2 {
						    margin-bottom: {{value}}px;
					     }',
					],
				],
				'Neve\Customizer\Controls\React\Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_form_fields_background_color',
				[
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => 'var(--nv-site-bg)',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Field Background Color', 'neve' ),
					'section'               => $this->section_id,
					'priority'              => 17,
					'default'               => 'var(--nv-site-bg)',
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'template' => '
							body form input:read-write,
							body form textarea,
							body form select,
							body form select option,
							body form.wp-block-search input.wp-block-search__input,
							.woocommerce-cart table.cart td.actions .coupon .input-text,
							.woocommerce-page .select2-container--default .select2-selection--single,
							.woocommerce-page .woocommerce form .form-row input.input-text,
							.woocommerce-page .woocommerce form .form-row textarea,
							.wc-block-product-search form input.wc-block-product-search__field {
							    background-color: {{value}};
						    }',

					],
				],
				'Neve\Customizer\Controls\React\Color'
			)
		);

		$this->add_control(
			new Control(
				'neve_form_fields_border_width',
				[
					'sanitize_callback' => [ $this, 'sanitize_spacing_array' ],
					'transport'         => $this->selective_refresh,
					'default'           => [
						'top'    => '1',
						'right'  => '1',
						'left'   => '1',
						'bottom' => '1',
						'unit'   => 'px',
					],
				],
				[
					'label'                 => esc_html__( 'Border Width', 'neve' ),
					'section'               => $this->section_id,
					'priority'              => 18,
					'units'                 => [ 'px', 'em' ],
					'default'               => [
						'top'    => '1',
						'right'  => '1',
						'left'   => '1',
						'bottom' => '1',
						'unit'   => 'px',
					],
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'responsive'  => false,
						'directional' => true,
						'template'    => '
							body form input:read-write,
							body form textarea,
							body form select,
							body form select option,
							body form.wp-block-search input.wp-block-search__input,
							.woocommerce-cart table.cart td.actions .coupon .input-text,
							.woocommerce-page .select2-container--default .select2-selection--single,
							.woocommerce-page .woocommerce form .form-row input.input-text,
							.woocommerce-page .woocommerce form .form-row textarea,
							.wc-block-product-search form input.wc-block-product-search__field {
                                border-top-width: {{value.top}};
							    border-right-width: {{value.right}};
						        border-bottom-width: {{value.bottom}};
						        border-left-width: {{value.left}};
					         }',
					],
				],
				'\Neve\Customizer\Controls\React\Nr_Spacing'
			)
		);

		$this->add_control(
			new Control(
				'neve_form_fields_border_radius',
				[
					'sanitize_callback' => [ $this, 'sanitize_spacing_array' ],
					'transport'         => $this->selective_refresh,
					'default'           => [
						'top'    => '',
						'right'  => '',
						'left'   => '',
						'bottom' => '',
						'unit'   => 'px',
					],
				],
				[
					'label'                 => esc_html__( 'Border Radius', 'neve' ),
					'section'               => $this->section_id,
					'priority'              => 19,
					'units'                 => [ 'px', 'em' ],
					'default'               => [
						'top'    => '3',
						'right'  => '3',
						'left'   => '3',
						'bottom' => '3',
						'unit'   => 'px',
					],
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'responsive'  => false,
						'directional' => true,
						'template'    => '
							body form input:read-write,
							body form textarea,
							body form select,
							body form select option,
							body form.wp-block-search input.wp-block-search__input,
							.woocommerce-cart table.cart td.actions .coupon .input-text,
							.woocommerce-page .select2-container--default .select2-selection--single,
							.woocommerce-page .woocommerce form .form-row input.input-text,
							.woocommerce-page .woocommerce form .form-row textarea,
							.wc-block-product-search form input.wc-block-product-search__field {
								border-top-right-radius: {{value.top}};
								border-bottom-right-radius: {{value.right}};
								border-bottom-left-radius: {{value.bottom}};
								border-top-left-radius: {{value.left}};
							}',
					],
				],
				'\Neve\Customizer\Controls\React\Nr_Spacing'
			)
		);

		$this->add_control(
			new Control(
				'neve_form_fields_border_color',
				[
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => '#dddddd',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Border Color', 'neve' ),
					'section'               => $this->section_id,
					'priority'              => 20,
					'default'               => '#dddddd',
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'template' => '
							body form input:read-write,
							body form textarea,
							body form select,
							body form select option,
							body form.wp-block-search input.wp-block-search__input,
							.woocommerce-cart table.cart td.actions .coupon .input-text,
							.woocommerce-page .select2-container--default .select2-selection--single,
							.woocommerce-page .woocommerce form .form-row input.input-text,
							.woocommerce-page .woocommerce form .form-row textarea,
							.wc-block-product-search form input.wc-block-product-search__field {
								border-color: {{value}};
							}',
					],
				],
				'Neve\Customizer\Controls\React\Color'
			)
		);
	}

	/**
	 * Form inputs controls.
	 */
	private function add_input_text_controls() {
		$this->add_control(
			new Control(
				'neve_input_text_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
				],
				[
					'label'            => esc_html__( 'Input Text', 'neve' ),
					'section'          => $this->section_id,
					'priority'         => 30,
					'class'            => 'form-input-accordion',
					'accordion'        => true,
					'expanded'         => false,
					'controls_to_wrap' => 2,
				],
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_input_text_color',
				[
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => 'var(--nv-text-color)',
					'transport'         => $this->selective_refresh,
				],
				[
					'label'                 => esc_html__( 'Color', 'neve' ),
					'section'               => $this->section_id,
					'priority'              => 31,
					'default'               => 'var(--nv-text-color)',
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'template' => '
							body form input:read-write,
							body form textarea,
							body form select,
							body form select option,
							body form.wp-block-search input.wp-block-search__input,
							.woocommerce-cart table.cart td.actions .coupon .input-text,
							.woocommerce-page .select2-container--default .select2-selection--single,
							.woocommerce-page .woocommerce form .form-row input.input-text,
							.woocommerce-page .woocommerce form .form-row textarea,
							.wc-block-product-search form input.wc-block-product-search__field {
								color: {{value}};
							}',
					],
				],
				'Neve\Customizer\Controls\React\Color'
			)
		);

		$this->add_control(
			new Control(
				'neve_input_typeface',
				[
					'transport' => $this->selective_refresh,
				],
				[
					'priority'              => 32,
					'section'               => $this->section_id,
					'input_attrs'           => array(
						'disable_transform'      => true,
						'default_is_empty'       => true,
						'size_units'             => [ 'px', 'em' ],
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
					'type'                  => 'neve_typeface_control',
					'refresh_on_reset'      => true,
					'live_refresh_selector' => '
						form input:read-write,
						form textarea,
						form select,
						form select option,
						form.wp-block-search input.wp-block-search__input,
						.woocommerce-cart table.cart td.actions .coupon .input-text,
						.woocommerce-page .select2-container--default .select2-selection--single,
						.woocommerce-page .woocommerce form .form-row input.input-text,
						.woocommerce-page .woocommerce form .form-row textarea,
						.wc-block-product-search form input.wc-block-product-search__field
					',
				],
				'\Neve\Customizer\Controls\React\Typography'
			)
		);
	}

	/**
	 * Form labels controls.
	 */
	private function add_form_labels_controls() {
		$this->add_control(
			new Control(
				'neve_form_labels_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
				],
				[
					'label'            => esc_html__( 'Form Labels', 'neve' ),
					'section'          => $this->section_id,
					'priority'         => 50,
					'class'            => 'form-labels-accordion',
					'accordion'        => true,
					'expanded'         => false,
					'controls_to_wrap' => 2,
				],
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_label_spacing',
				[
					'sanitize_callback' => 'absint',
					'transport'         => $this->selective_refresh,
					'default'           => 10,
				],
				[
					'label'                 => esc_html__( 'Label Spacing', 'neve' ),
					'section'               => $this->section_id,
					'type'                  => 'neve_range_control',
					'input_attrs'           => [
						'min'        => 50,
						'max'        => 100,
						'defaultVal' => 10,
					],
					'priority'              => 51,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'responsive' => false,
						'template'   => 'body form label, body .wpforms-container .wpforms-field-label, .woocommerce form .form-row label {margin-bottom: {{value}}px;}',
					],
				],
				'Neve\Customizer\Controls\React\Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_label_typeface',
				[
					'transport' => $this->selective_refresh,
				],
				[
					'priority'              => 52,
					'section'               => $this->section_id,
					'input_attrs'           => array(
						'default_is_empty'       => true,
						'size_units'             => [ 'px', 'em' ],
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
					'type'                  => 'neve_typeface_control',
					'refresh_on_reset'      => true,
					'live_refresh_selector' => 'form label, body .wpforms-container .wpforms-field-label, .woocommerce form .form-row label',
				],
				'\Neve\Customizer\Controls\React\Typography'
			)
		);
	}

	/**
	 * Form button controls.
	 */
	private function add_button_controls() {
		$this->add_control(
			new Control(
				'neve_form_button_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
				],
				array(
					'label'            => esc_html__( 'Button', 'neve' ),
					'section'          => $this->section_id,
					'priority'         => 70,
					'class'            => 'form-button-accordion',
					'accordion'        => true,
					'expanded'         => false,
					'controls_to_wrap' => 1,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_form_button_type',
				[
					'sanitize_callback' => [ $this, 'sanitize_button_type' ],
					'default'           => 'primary',
				],
				[
					'label'    => __( 'Button Style', 'neve' ),
					'priority' => 71,
					'section'  => $this->section_id,
					'type'     => 'neve_inline_select',
					'options'  => [
						'primary'   => __( 'Primary', 'neve' ),
						'secondary' => __( 'Secondary', 'neve' ),
					],
					'default'  => 'primary',
					'link'     => [
						'focus'  => [ 'section', 'neve_buttons_section' ],
						'string' => esc_html__( 'Customize the default button styles', 'neve' ),
					],
				],
				'Neve\Customizer\Controls\React\Inline_Select'
			)
		);
	}

	/**
	 * Sanitize Button Type option.
	 *
	 * @param string $value the control value.
	 *
	 * @return string
	 */
	public function sanitize_button_type( $value ) {
		if ( ! in_array( $value, [ 'primary', 'secondary' ], true ) ) {
			return 'primary';
		}

		return $value;
	}
}
