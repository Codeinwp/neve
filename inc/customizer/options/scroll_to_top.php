<?php
/**
 * Author:          Stefan Cotitosu <stefan@themeisle.com>
 * Created on:      2019-02-06
 *
 * @package Neve Pro Addon
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Scroll_To_Top
 *
 * @package Neve_Pro\Customizer\Options
 */
class Scroll_To_Top extends Base_Customizer {
	/**
	 * The minimum value of some customizer controls is 0 to able to allow usability relative to CSS units.
	 * That can be removed after the https://github.com/Codeinwp/neve/issues/3609 issue is handled.
	 *
	 * That is defined here against the usage of old Neve versions, Base_Customizer class of the stable Neve version already has the RELATIVE_CSS_UNIT_SUPPORTED_MIN_VALUE constant.
	 */
	const RELATIVE_CSS_UNIT_SUPPORTED_MIN_VALUE = 0;

	/**
	 * Base initialization.
	 * 
	 * @return void
	 */
	public function init() {
		parent::init();
		add_action( 'wp_head', array( $this, 'live_refresh_scripts' ) );
	}

	/**
	 * Live refresh for scroll to top controls.
	 * 
	 * @return void
	 */
	public function live_refresh_scripts() {
		if ( ! is_customize_preview() ) {
			return;
		}
		?>
		<script type="text/javascript">
		jQuery(document).ready(function () {

			const target = jQuery('#scroll-to-top');
			// Choose Side
			wp.customize('neve_scroll_to_top_side', function (value) {
				value.bind(function ( newval ) {
					if ( newval === 'right' ) {
						target.removeClass( 'scroll-to-top-left' ).addClass( 'scroll-to-top-right' );
					}
					if ( newval === 'left' ) {
						target.removeClass( 'scroll-to-top-right' ).addClass( 'scroll-to-top-left' );
					}
				});
			});
			// Label
			wp.customize( 'neve_scroll_to_top_label', function (value) {
				value.bind(function ( newval ) {
					var hasLabel = jQuery('.scroll-to-top-label').length > 0;
					if ( hasLabel ) {
						jQuery('.scroll-to-top-label' ).text( newval );
					} else {
						jQuery( '.scroll-to-top' ).append( '<p class="scroll-to-top-label">' + newval + '</p>' );
					}
				});
			});
			// Hide on mobile
			wp.customize( 'neve_scroll_to_top_on_mobile', function (value) {
				value.bind(function ( newval ) {
					if( newval ){
						target.removeClass('scroll-show-mobile');
					}else{
						target.addClass('scroll-show-mobile');
					}
				});
			});
		});
		</script>
		<?php
	}

	/**
	 * Add customizer section and controls
	 */
	public function add_controls() {
		$this->scroll_to_top_section();
		$this->scroll_to_top_options();
		$this->scroll_to_top_style_controls();
	}

	/**
	 * Register customizer section for the module
	 *
	 * @return void
	 */
	private function scroll_to_top_section() {
		$this->add_section(
			new Section(
				'neve_scroll_to_top',
				array(
					'priority' => 80,
					'title'    => esc_html__( 'Scroll To Top', 'neve' ),
					'panel'    => 'neve_layout',
				)
			)
		);

	}

	/**
	 * Register option toggle in customizer
	 * 
	 * @return void
	 */
	private function scroll_to_top_options() {
		$this->add_control(
			new Control(
				'neve_scroll_to_top_status',
				array(
					'sanitize_callback' => array( $this, 'sanitize_module_status' ),
					'default'           => '1',
				),
				array(
					'label'    => esc_html__( 'Enable', 'neve' ),
					'section'  => 'neve_scroll_to_top',
					'type'     => 'neve_toggle_control',
					'priority' => 5,
				)
			)
		);

		$this->add_control(
			new Control(
				'neve_scroll_to_top_general',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'General', 'neve' ),
					'section'          => 'neve_scroll_to_top',
					'priority'         => 10,
					'class'            => 'scroll-to-top-general',
					'accordion'        => true,
					'expanded'         => true,
					'controls_to_wrap' => 6,
					'active_callback'  => array( $this, 'is_module_enabled' ),
				),
				'Neve\Customizer\Controls\Heading'
			)
		);

		/**
		 * Button side
		 */
		$this->add_control(
			new Control(
				'neve_scroll_to_top_side',
				array(
					'default'           => 'right',
					'sanitize_callback' => array( $this, 'sanitize_scroll_to_top_side' ),
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'           => esc_html__( 'Choose Side', 'neve' ),
					'section'         => 'neve_scroll_to_top',
					'priority'        => 20,
					'type'            => 'select',
					'choices'         => array(
						'left'  => esc_html__( 'Left', 'neve' ),
						'right' => esc_html__( 'Right', 'neve' ),
					),
					'active_callback' => array( $this, 'is_module_enabled' ),
				)
			)
		);

		/**
		 * Scroll to top type
		 */
		$this->add_control(
			new Control(
				'neve_scroll_to_top_type',
				array(
					'default'           => 'icon',
					'sanitize_callback' => array( $this, 'sanitize_scroll_to_top_type' ),
				),
				array(
					'label'           => esc_html__( 'Type', 'neve' ),
					'section'         => 'neve_scroll_to_top',
					'priority'        => 30,
					'type'            => 'select',
					'choices'         => array(
						'icon'  => esc_html__( 'Icon', 'neve' ),
						'image' => esc_html__( 'Image', 'neve' ),
					),
					'active_callback' => array( $this, 'is_module_enabled' ),
				)
			)
		);

		/**
		 * Scroll to top icon
		 */
		$this->add_control(
			new Control(
				'neve_scroll_to_top_icon',
				array(
					'sanitize_callback' => 'wp_filter_nohtml_kses',
					'default'           => 'stt-icon-style-1',
				),
				array(
					'label'           => esc_html__( 'Icon', 'neve' ),
					'section'         => 'neve_scroll_to_top',
					'priority'        => 35,
					'active_callback' => array( $this, 'is_icon_type_control' ),
					'is_for'          => 'scroll_to_top',
					'large_buttons'   => false,
					'type'            => 'neve_radio_buttons_control',
				),
				'\Neve\Customizer\Controls\React\Radio_Buttons'
			)
		);

		/**
		 * Image button
		 */
		$this->add_control(
			new Control(
				'neve_scroll_to_top_image',
				array(
					'sanitize_callback' => 'absint',
				),
				array(
					'label'           => esc_html__( 'Image', 'neve' ),
					'section'         => 'neve_scroll_to_top',
					'priority'        => 40,
					'active_callback' => array( $this, 'is_image_type_control' ),
					'flex_height'     => true,
					'flex_width'      => true,
				),
				'\WP_Customize_Cropped_Image_Control'
			)
		);

		/*
		 * Label
		 */
		$this->add_control(
			new Control(
				'neve_scroll_to_top_label',
				array(
					'sanitize_callback' => 'sanitize_text_field',
					'transport'         => $this->selective_refresh,
				),
				array(
					'priority'        => 50,
					'section'         => 'neve_scroll_to_top',
					'label'           => esc_html__( 'Label', 'neve' ),
					'type'            => 'text',
					'active_callback' => array( $this, 'is_module_enabled' ),
				)
			)
		);

		/**
		 * Offset
		 */
		$this->add_control(
			new Control(
				'neve_scroll_to_top_offset',
				array(
					'sanitize_callback' => 'absint',
					'default'           => 0,
				),
				array(
					'label'           => esc_html__( 'Offset (px)', 'neve' ),
					'section'         => 'neve_scroll_to_top',
					'step'            => 1,
					'input_attr'      => array(
						'min'     => 0,
						'max'     => 1000,
						'default' => 0,
					),
					'input_attrs'     => array(
						'min'        => 0,
						'max'        => 1000,
						'defaultVal' => 0,
					),
					'priority'        => 60,
					'active_callback' => array( $this, 'is_module_enabled' ),
				),
				class_exists( 'Neve\Customizer\Controls\React\Range' ) ? 'Neve\Customizer\Controls\React\Range' : 'Neve\Customizer\Controls\Range'
			)
		);

		/**
		 * Hide on mobile
		 */
		$this->add_control(
			new Control(
				'neve_scroll_to_top_on_mobile',
				array(
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'           => esc_html__( 'Hide on mobile', 'neve' ),
					'section'         => 'neve_scroll_to_top',
					'type'            => 'neve_toggle_control',
					'priority'        => 70,
					'active_callback' => array( $this, 'is_module_enabled' ),
				),
				'Neve\Customizer\Controls\Checkbox'
			)
		);
	}

	/**
	 * Add style controls for Scroll to top module.
	 * 
	 * @return void
	 */
	private function scroll_to_top_style_controls() {
		$this->add_control(
			new Control(
				'neve_scroll_to_top_style',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Style', 'neve' ),
					'section'          => 'neve_scroll_to_top',
					'priority'         => 80,
					'class'            => 'scroll-to-top-accordion',
					'accordion'        => true,
					'expanded'         => false,
					'controls_to_wrap' => 3,
					'active_callback'  => array( $this, 'is_module_enabled' ),
				),
				'Neve\Customizer\Controls\Heading'
			)
		);

		$default_padding_values = array(
			'desktop'      => array(
				'top'    => 8,
				'right'  => 10,
				'bottom' => 8,
				'left'   => 10,
			),
			'tablet'       => array(
				'top'    => 8,
				'right'  => 10,
				'bottom' => 8,
				'left'   => 10,
			),
			'mobile'       => array(
				'top'    => 8,
				'right'  => 10,
				'bottom' => 8,
				'left'   => 10,
			),
			'desktop-unit' => 'px',
			'tablet-unit'  => 'px',
			'mobile-unit'  => 'px',
		);
		$this->add_control(
			new Control(
				'neve_scroll_to_top_padding',
				array(
					'default'   => $default_padding_values,
					'transport' => $this->selective_refresh,
				),
				array(
					'label'                 => __( 'Padding', 'neve' ),
					'sanitize_callback'     => array( $this, 'sanitize_spacing_array' ),
					'section'               => 'neve_scroll_to_top',
					'input_attrs'           => array(
						'units' => array( 'px', 'em', 'rem' ),
					),
					'default'               => $default_padding_values,
					'priority'              => 90,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => array(
						'cssVar'      => array(
							'vars'       => '--padding',
							'selector'   => '#scroll-to-top',
							'responsive' => true,
						),
						'responsive'  => true,
						'directional' => true,
						'template'    =>
							'#scroll-to-top {
							padding-top: {{value.top}};
							padding-right: {{value.right}};
							padding-bottom: {{value.bottom}};
							padding-left: {{value.left}};
						}',
					),
					'active_callback'       => array( $this, 'is_module_enabled' ),
				),
				'\Neve\Customizer\Controls\React\Spacing'
			)
		);

		/**
		 * Icon size
		 */
		$this->add_control(
			new Control(
				'neve_scroll_to_top_icon_size',
				array(
					'sanitize_callback' => 'neve_sanitize_range_value',
					'default'           => '{ "mobile": "16", "tablet": "16", "desktop": "16" }',
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'                 => esc_html__( 'Icon Size', 'neve' ),
					'section'               => 'neve_scroll_to_top',
					'media_query'           => true,
					'step'                  => 1,
					'input_attr'            => array(
						'mobile'  => array(
							'min'     => 10,
							'max'     => 100,
							'default' => 16,
						),
						'tablet'  => array(
							'min'     => 10,
							'max'     => 100,
							'default' => 16,
						),
						'desktop' => array(
							'min'     => 10,
							'max'     => 100,
							'default' => 16,
						),
					),
					'input_attrs'           => array(
						'step'       => 1,
						'min'        => self::RELATIVE_CSS_UNIT_SUPPORTED_MIN_VALUE,
						'max'        => 100,
						'defaultVal' => array(
							'mobile'  => 16,
							'tablet'  => 16,
							'desktop' => 16,
							'suffix'  => [
								'mobile'  => 'px',
								'tablet'  => 'px',
								'desktop' => 'px',
							],
						),
						'units'      => array( 'px', 'em', 'rem' ),
					),
					'priority'              => 100,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => array(
						'cssVar'     => array(
							'vars'       => '--size',
							'selector'   => '.scroll-to-top-icon, .scroll-to-top-image',
							'responsive' => true,
							'suffix'     => 'px',
						),
						'responsive' => true,
						'template'   => 'body .scroll-to-top.icon .scroll-to-top-icon, body .scroll-to-top.image .scroll-to-top-image {
							width: {{value}}px;
							height: {{value}}px;
						}',
					),
					'active_callback'       => array( $this, 'is_module_enabled' ),
				),
				class_exists( 'Neve\Customizer\Controls\React\Responsive_Range', false ) ? 'Neve\Customizer\Controls\React\Responsive_Range' : 'Neve\Customizer\Controls\Range'
			)
		);

		/**
		 * Button border radius
		 */
		$this->add_control(
			new Control(
				'neve_scroll_to_top_border_radius',
				array(
					'sanitize_callback' => 'absint',
					'default'           => 3,
					'transport'         => $this->selective_refresh,
				),
				array(
					'label'                 => esc_html__( 'Border Radius', 'neve' ),
					'section'               => 'neve_scroll_to_top',
					'step'                  => 1,
					'input_attr'            => array(
						'min'     => 0,
						'max'     => 200,
						'default' => 3,
					),
					'input_attrs'           => array(
						'min'        => 0,
						'max'        => 200,
						'defaultVal' => 3,
					),
					'priority'              => 110,
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => array(
						'cssVar'   => array(
							'fallback' => '0',
							'vars'     => '--borderradius',
							'selector' => '.scroll-to-top',
							'suffix'   => 'px',
						),
						'template' => 'body .scroll-to-top {
							border-radius: {{value}}px;
						}',
						'fallback' => '0',
					),
					'active_callback'       => array( $this, 'is_module_enabled' ),
				),
				class_exists( 'Neve\Customizer\Controls\React\Range' ) ? 'Neve\Customizer\Controls\React\Range' : 'Neve\Customizer\Controls\Range'
			)
		);

		/**
		 * Colors heading
		 */
		$this->add_control(
			new Control(
				'neve_scroll_to_top_colors',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Color', 'neve' ),
					'section'          => 'neve_scroll_to_top',
					'priority'         => 110,
					'class'            => 'scroll-top-colors-accordion',
					'accordion'        => true,
					'expanded'         => false,
					'controls_to_wrap' => 4,
					'active_callback'  => array( $this, 'is_module_enabled' ),
				),
				'Neve\Customizer\Controls\Heading'
			)
		);

		$color_controls = array(
			'neve_scroll_to_top_icon_color'             => array(
				'default'               => 'var(--nv-text-dark-bg)',
				'priority'              => 120,
				'label'                 => esc_html__( 'Color', 'neve' ),
				'live_refresh_css_prop' => array(
					'cssVar'   => array(
						'vars'     => '--color',
						'selector' => '.scroll-to-top',
					),
					'template' => '
					body .scroll-to-top {
						color: {{value}};
					}',
				),
			),
			'neve_scroll_to_top_icon_hover_color'       => array(
				'default'               => 'var(--nv-text-dark-bg)',
				'priority'              => 130,
				'label'                 => esc_html__( 'Hover Color', 'neve' ),
				'live_refresh_css_prop' => array(
					'cssVar'   => array(
						'vars'     => '--hovercolor',
						'selector' => '.scroll-to-top:hover',
					),
					'template' => '
					body .scroll-to-top:hover {
						color: {{value}};
					}',
				),
			),
			'neve_scroll_to_top_background_color'       => array(
				'default'               => 'var(--nv-primary-accent)',
				'priority'              => 140,
				'label'                 => esc_html__( 'Background Color', 'neve' ),
				'input_attrs'           => [
					'allow_gradient' => true,
				],
				'live_refresh_css_prop' => array(
					'cssVar'   => array(
						'vars'     => '--bgcolor',
						'selector' => '.scroll-to-top',
					),
					'template' => '
					body .scroll-to-top {
						background: {{value}};
					}',
				),
			),
			'neve_scroll_to_top_background_hover_color' => array(
				'default'               => 'var(--nv-primary-accent)',
				'priority'              => 150,
				'label'                 => esc_html__( 'Background Hover Color', 'neve' ),
				'input_attrs'           => [
					'allow_gradient' => true,
				],
				'live_refresh_css_prop' => array(
					'cssVar'   => array(
						'vars'     => '--hoverbgcolor',
						'selector' => '.scroll-to-top:hover',
					),
					'template' => '
					body .scroll-to-top:hover {
						background: {{value}};
					}',
				),
			),
		);

		/**
		 * Color controls
		 */
		foreach ( $color_controls as $control_id => $control_properties ) {
			$this->add_control(
				new Control(
					$control_id,
					array(
						'sanitize_callback' => 'neve_sanitize_colors',
						'default'           => $control_properties['default'],
						'transport'         => $this->selective_refresh,
					),
					array(
						'label'                 => $control_properties['label'],
						'section'               => 'neve_scroll_to_top',
						'priority'              => $control_properties['priority'],
						'input_attrs'           => isset( $control_properties['input_attrs'] ) ? $control_properties['input_attrs'] : [],
						'live_refresh_selector' => true,
						'live_refresh_css_prop' => $control_properties['live_refresh_css_prop'],
						'active_callback'       => array( $this, 'is_module_enabled' ),
					),
					'\Neve\Customizer\Controls\React\Color'
				)
			);
		}
	}

	/**
	 * Active callback for controls that are available only if scroll to top is an image
	 * 
	 * @return bool
	 */
	public function is_image_type_control() {
		if ( ! $this->is_module_enabled() ) {
			return false;
		}

		return get_theme_mod( 'neve_scroll_to_top_type', 'icon' ) === 'image';
	}

	/**
	 * Active callback for controls that are available only if scroll to top is an icon
	 *
	 * @return bool
	 */
	public function is_icon_type_control() {
		if ( ! $this->is_module_enabled() ) {
			return false;
		}

		return get_theme_mod( 'neve_scroll_to_top_type', 'icon' ) === 'icon';
	}

	/**
	 * Sanitize scroll to top type
	 *
	 * @param string $value - value of the control.
	 *
	 * @return string
	 */
	public function sanitize_scroll_to_top_type( $value ) {
		$allowed_values = array( 'icon', 'image' );
		if ( ! in_array( $value, $allowed_values, true ) ) {
			return 'icon';
		}

		return esc_html( $value );
	}

	/**
	 * Sanitize scroll to top side
	 *
	 * @param string $value - value of the control.
	 *
	 * @return string
	 */
	public function sanitize_scroll_to_top_side( $value ) {
		$allowed_values = array( 'left', 'right' );
		if ( ! in_array( $value, $allowed_values, true ) ) {
			return 'right';
		}

		return esc_html( $value );
	}

	/**
	 * Check if Scroll to Top is enabled.
	 *
	 * @return bool
	 */
	public static function is_enabled() {
		// Check old option first for backward compatibility.
		$old_value  = get_option( 'nv_pro_scroll_to_top_status', null );
		$is_enabled = false;

		if ( null !== $old_value ) {
			// Option exists — use it and migrate to the new theme_mod for future.
			$is_enabled = $old_value === '1';

			set_theme_mod( 'neve_scroll_to_top_status', $old_value );
			delete_option( 'nv_pro_scroll_to_top_status' );
		} else {
			// Otherwise, use the new theme_mod.
			$is_enabled = get_theme_mod( 'neve_scroll_to_top_status', '1' ) === '1';
		}

		/**
		 * Filter to allow conditional loading of the scroll to top feature.
		 *
		 * @param bool $is_enabled Whether the scroll to top feature is enabled.
		 */
		return apply_filters( 'neve_scroll_to_top_is_enabled', $is_enabled );
	}

	/**
	 * Active callback for scroll to top controls.
	 *
	 * @return bool
	 */
	public function is_module_enabled() {
		return self::is_enabled();
	}

	/**
	 * Sanitize module status. The toggle in neve options returns '1' or '' so our control should return the same thing.
	 *
	 * @param bool|string $value Current value.
	 *
	 * @return string
	 */
	public function sanitize_module_status( $value ) {
		if ( $value === true ) {
			return '1';
		}
		if ( $value === false ) {
			return '';
		}
		return $value;
	}

}
