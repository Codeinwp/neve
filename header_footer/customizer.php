<?php

class  Hf_Customizer {
	static $config;
	static $_instance;
	static $has_icon = false;
	static $has_font = false;
	public $devices = array( 'desktop', 'tablet', 'mobile' );
	private $selective_settings = array();

	/**
	 * Main initial
	 */
	function init() {

		require_once get_template_directory() . '/header_footer/customizer/class-customizer-sanitize.php';
		require_once get_template_directory() . '/header_footer/customizer/class-customizer-auto-css.php';

		if ( is_admin() || is_customize_preview() ) {
			add_action( 'customize_register', array( $this, 'register' ), 666 );
			add_action( 'customize_preview_init', array( $this, 'preview_js' ) );
			add_action( 'wp_ajax_Hf/customizer/ajax/get_icons', array( $this, 'get_icons' ) );

			require_once get_template_directory() . '/header_footer/customizer/class-customizer-fonts.php';
			require_once get_template_directory() . '/header_footer/customizer/class-customizer.php';
		}

		add_action( 'wp_ajax_Hf__reset_section', array( 'Hf_Customizer', 'reset_customize_section' ) );
	}

	/**
	 * Instance.
	 *
	 * @return Hf_Customizer
	 */
	static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Reset Customize section
	 */
	static function reset_customize_section() {
		if ( ! current_user_can( 'customize' ) ) {
			wp_send_json_error();
		}

		$settings = isset( $_POST['settings'] ) ? wp_unslash( $_POST['settings'] ) : array(); // phpcs:ignore

		foreach ( $settings as $k ) {
			$k = sanitize_text_field( $k );
			remove_theme_mod( $k );
		}

		wp_send_json_success();
	}

	/**
	 * Reset Customize section
	 */
	function get_icons() {
		if ( ! current_user_can( 'customize' ) ) {
			wp_send_json_error();
		}

		wp_send_json_success( Hf_Font_Icons::get_instance()->get_icons() );
		die();
	}

	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 */
	function preview_js() {
		if ( is_customize_preview() ) {
			$suffix = Hf()->get_asset_suffix();

			wp_enqueue_script( 'Hf-customizer-auto-css', esc_url( get_template_directory_uri() ) . '/assets/js/customizer/auto-css' . $suffix . '.js', array( 'customize-preview' ), '20151215', true );
			wp_enqueue_script(
				'Hf-customizer',
				esc_url( get_template_directory_uri() ) . '/assets/js/customizer/customizer' . $suffix . '.js',
				array(
					'customize-preview',
					'customize-selective-refresh',
				),
				'20151215',
				true
			);
			wp_localize_script(
				'Hf-customizer-auto-css',
				'Hf_Preview_Config',
				array(
					'fields'         => $this->get_config(),
					'devices'        => $this->devices,
					'typo_fields'    => $this->get_typo_fields(),
					'styling_config' => $this->get_styling_config(),
				)
			);
		}
	}

	/**
	 * Get all customizer settings/control that added via `Hf/customizer/config` hook
	 *
	 *  Ensure you call this method after all config files loaded
	 *
	 * @param WP_Customize_Manager $wp_customize
	 *
	 * @return array
	 */
	static function get_config( $wp_customize = null ) {
		if ( is_null( self::$config ) ) {

			$_config = apply_filters( 'Hf/customizer/config', array(), $wp_customize );
			$config  = array();
			foreach ( $_config as $f ) {

				$f = wp_parse_args(
					$f,
					array(

						'priority'    => null,
						'title'       => null,
						'label'       => null,
						'name'        => null,
						'type'        => null,
						'description' => null,
						'capability'  => null,
						'mod'         => null, // Can be theme_mod or option, default theme_mod.
						'settings'    => null,

						'active_callback'      => null, // For control.

						/**
						 * For settings
						 */
						'sanitize_callback'    => array( 'Hf_Sanitize_Input', 'sanitize_customizer_input' ),
						'sanitize_js_callback' => null,
						'theme_supports'       => null,
						'default'              => null,

						/**
						 * For selective refresh
						 */
						'selector'             => null,
						'render'               => null, // same render_callback.
						'render_callback'      => null,
						'css_format'           => null,

						'device'          => null,
						'device_settings' => null,

						'field_class' => null, // Custom class for control.
					)
				);

				if ( ! isset( $f['type'] ) ) {
					$f['type'] = null;
				}

				switch ( $f['type'] ) {
					case 'panel':
						$config[ 'panel|' . $f['name'] ] = $f;
						break;
					case 'section':
						$config[ 'section|' . $f['name'] ] = $f;
						break;
					default:
						if ( 'icon' == $f['type'] ) {
							self::$has_icon = true;
						}

						if ( 'font' == $f['type'] ) {
							self::$has_font = true;
						}

						if ( isset( $f['fields'] ) ) {
							if ( ! in_array( $f['type'], array( 'typography', 'styling', 'modal' ) ) ) { //phpcs:ignore
								$types = wp_list_pluck( $f['fields'], 'type' );
								if ( in_array( 'icon', $types ) ) { //phpcs:ignore
									self::$has_icon = true;
								}

								if ( in_array( 'font', $types ) ) { //phpcs:ignore
									self::$has_font = true;
								}
							}
						}

						$config[ 'setting|' . $f['name'] ] = $f;

				}
			}

			self::$config = $config;
		}

		return self::$config;
	}

	/**
	 * Check if has icon field;
	 *
	 * @return bool
	 */
	function has_icon() {
		return self::$has_icon;
	}

	/**
	 * Check if has font field;
	 *
	 * @return bool
	 */
	function has_font() {
		return self::$has_icon;
	}

	/**
	 *  Get Customizer setting.
	 *
	 * @param string      $name   Customize setting id.
	 * @param string      $device Device type for settings.
	 * @param string|bool $key    Value of this array key that you want to get.
	 *
	 * @return array|bool|string
	 */
	function get_setting( $name, $device = 'desktop', $key = false ) {
		$config    = self::get_config();
		$get_value = null;
		if ( isset( $config[ 'setting|' . $name ] ) ) {
			$default = isset( $config[ 'setting|' . $name ]['default'] ) ? $config[ 'setting|' . $name ]['default'] : false;
			$default = apply_filters( 'Hf/customize/settings-default', $default, $name );

			if ( 'option' == $config[ 'setting|' . $name ]['mod'] ) {
				$value = get_option( $name, $default );
			} else {
				$value = get_theme_mod( $name, $default );
			}

			// Maybe need merge defined items with saved item for defined list.
			if (
				'repeater' == $config[ 'setting|' . $name ]['type']
				&& isset( $config[ 'setting|' . $name ]['addable'] )
				&& false == $config[ 'setting|' . $name ]['addable']
			) {
				$value = self::merge_items( $value, $default );
			}

			if ( ! $config[ 'setting|' . $name ]['device_settings'] ) {
				return $value;
			}
		} else {
			$value = get_theme_mod( $name, null );
		}

		if ( ! $key ) {
			if ( 'all' != $device ) {
				if ( is_array( $value ) && isset( $value[ $device ] ) ) {
					$get_value = $value[ $device ];
				} else {
					$get_value = $value;
				}
			} else {
				$get_value = $value;
			}
		} else {
			$value_by_key = isset( $value[ $key ] ) ? $value[ $key ] : false;
			if ( 'all' != $device && is_array( $value_by_key ) ) {
				if ( is_array( $value_by_key ) && isset( $value_by_key[ $device ] ) ) {
					$get_value = $value_by_key[ $device ];
				} else {
					$get_value = $value_by_key;
				}
			} else {
				$get_value = $value_by_key;
			}
		}

		return $get_value;
	}


	/**
	 * Merge 2 array width `_key` is key of each item
	 *
	 * @since 0.2.5
	 *
	 * @param array $destination
	 * @param array $new_array
	 *
	 * @return array
	 */
	public static function merge_items( $destination = array(), $new_array = array() ) {

		$keys     = array();
		$new_keys = array();

		foreach ( $destination as $item ) {
			if ( isset( $item['_key'] ) ) {
				$keys[ $item['_key'] ] = $item['_key'];
			}
		}

		if ( empty( $keys ) ) {
			return $destination;
		}

		// Add item if it not in saved list.
		foreach ( $new_array as $item ) {
			if ( isset( $item['_key'] ) ) {
				$new_keys[ $item['_key'] ] = $item['_key'];
				if ( ! isset( $keys[ $item['_key'] ] ) ) {
					$destination[] = $item;
				}
			}
		}

		// Remove the item not in the defined list.
		$new_destination = array();
		foreach ( $destination as $_dk => $item ) {
			if ( isset( $item['_key'] ) ) {
				if ( isset( $new_keys[ $item['_key'] ] ) ) {
					$new_destination[] = $item;
				}
			} else {
				$new_destination[] = $item;
			}
		}

		return $new_destination;
	}

	/**
	 * Get customizer setting data when the field type is `modal`
	 *
	 * @param string      $name Setting name.
	 * @param string|bool $tab  String tab name.
	 *
	 * @return array|bool
	 */
	function get_setting_tab( $name, $tab = null ) {
		$values = $this->get_setting( $name, 'all' );
		if ( ! $tab ) {
			return $values;
		}
		if ( is_array( $values ) && isset( $values[ $tab ] ) ) {
			return $values[ $tab ];
		}

		return false;
	}

	/**
	 * Get typography fields
	 *
	 * @return array
	 */
	function get_typo_fields() {
		$typo_fields = array(
			array(
				'name'    => 'font',
				'type'    => 'select',
				'label'   => __( 'Font Family', 'Hf' ),
				'choices' => array(),
			),
			array(
				'name'    => 'font_weight',
				'type'    => 'select',
				'label'   => __( 'Font Weight', 'Hf' ),
				'choices' => array(),
			),
			array(
				'name'  => 'languages',
				'type'  => 'checkboxes',
				'label' => __( 'Font Languages', 'Hf' ),
			),
			array(
				'name'            => 'font_size',
				'type'            => 'slider',
				'label'           => __( 'Font Size', 'Hf' ),
				'device_settings' => true,
				'min'             => 9,
				'max'             => 80,
				'step'            => 1,
			),
			array(
				'name'            => 'line_height',
				'type'            => 'slider',
				'label'           => __( 'Line Height', 'Hf' ),
				'device_settings' => true,
				'min'             => 9,
				'max'             => 80,
				'step'            => 1,
			),
			array(
				'name'  => 'letter_spacing',
				'type'  => 'slider',
				'label' => __( 'Letter Spacing', 'Hf' ),
				'min'   => - 10,
				'max'   => 10,
				'step'  => 0.1,
			),
			array(
				'name'    => 'style',
				'type'    => 'select',
				'label'   => __( 'Font Style', 'Hf' ),
				'choices' => array(
					''        => __( 'Default', 'Hf' ),
					'normal'  => __( 'Normal', 'Hf' ),
					'italic'  => __( 'Italic', 'Hf' ),
					'oblique' => __( 'Oblique', 'Hf' ),
				),
			),
			array(
				'name'    => 'text_decoration',
				'type'    => 'select',
				'label'   => __( 'Text Decoration', 'Hf' ),
				'choices' => array(
					''             => __( 'Default', 'Hf' ),
					'underline'    => __( 'Underline', 'Hf' ),
					'overline'     => __( 'Overline', 'Hf' ),
					'line-through' => __( 'Line through', 'Hf' ),
					'none'         => __( 'None', 'Hf' ),
				),
			),
			array(
				'name'    => 'text_transform',
				'type'    => 'select',
				'label'   => __( 'Text Transform', 'Hf' ),
				'choices' => array(
					''           => __( 'Default', 'Hf' ),
					'uppercase'  => __( 'Uppercase', 'Hf' ),
					'lowercase'  => __( 'Lowercase', 'Hf' ),
					'capitalize' => __( 'Capitalize', 'Hf' ),
					'none'       => __( 'None', 'Hf' ),
				),
			),
		);

		return $typo_fields;
	}

	/**
	 * Get styling field
	 *
	 * @return array
	 */
	function get_styling_config() {
		$fields = array(
			'tabs'          => array(
				'normal' => __( 'Normal', 'Hf' ),  // null or false to disable.
				'hover'  => __( 'Hover', 'Hf' ), // null or false to disable.
			),
			'normal_fields' => array(
				array(
					'name'       => 'text_color',
					'type'       => 'color',
					'label'      => __( 'Color', 'Hf' ),
					'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
				),
				array(
					'name'       => 'link_color',
					'type'       => 'color',
					'label'      => __( 'Link Color', 'Hf' ),
					'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
				),

				array(
					'name'            => 'margin',
					'type'            => 'css_ruler',
					'device_settings' => true,
					'css_format'      => array(
						'top'    => 'margin-top: {{value}};',
						'right'  => 'margin-right: {{value}};',
						'bottom' => 'margin-bottom: {{value}};',
						'left'   => 'margin-left: {{value}};',
					),
					'label'           => __( 'Margin', 'Hf' ),
				),

				array(
					'name'            => 'padding',
					'type'            => 'css_ruler',
					'device_settings' => true,
					'css_format'      => array(
						'top'    => 'padding-top: {{value}};',
						'right'  => 'padding-right: {{value}};',
						'bottom' => 'padding-bottom: {{value}};',
						'left'   => 'padding-left: {{value}};',
					),
					'label'           => __( 'Padding', 'Hf' ),
				),

				array(
					'name'  => 'bg_heading',
					'type'  => 'heading',
					'label' => __( 'Background', 'Hf' ),
				),

				array(
					'name'       => 'bg_color',
					'type'       => 'color',
					'label'      => __( 'Background Color', 'Hf' ),
					'css_format' => 'background-color: {{value}};',
				),
				array(
					'name'       => 'bg_image',
					'type'       => 'image',
					'label'      => __( 'Background Image', 'Hf' ),
					'css_format' => 'background-image: url("{{value}}");',
				),
				array(
					'name'       => 'bg_cover',
					'type'       => 'select',
					'choices'    => array(
						''        => __( 'Default', 'Hf' ),
						'auto'    => __( 'Auto', 'Hf' ),
						'cover'   => __( 'Cover', 'Hf' ),
						'contain' => __( 'Contain', 'Hf' ),
					),
					'required'   => array( 'bg_image', 'not_empty', '' ),
					'label'      => __( 'Size', 'Hf' ),
					'class'      => 'field-half-left',
					'css_format' => '-webkit-background-size: {{value}}; -moz-background-size: {{value}}; -o-background-size: {{value}}; background-size: {{value}};',
				),
				array(
					'name'       => 'bg_position',
					'type'       => 'select',
					'label'      => __( 'Position', 'Hf' ),
					'required'   => array( 'bg_image', 'not_empty', '' ),
					'class'      => 'field-half-right',
					'choices'    => array(
						''              => __( 'Default', 'Hf' ),
						'center'        => __( 'Center', 'Hf' ),
						'top left'      => __( 'Top Left', 'Hf' ),
						'top right'     => __( 'Top Right', 'Hf' ),
						'top center'    => __( 'Top Center', 'Hf' ),
						'bottom left'   => __( 'Bottom Left', 'Hf' ),
						'bottom center' => __( 'Bottom Center', 'Hf' ),
						'bottom right'  => __( 'Bottom Right', 'Hf' ),
					),
					'css_format' => 'background-position: {{value}};',
				),
				array(
					'name'       => 'bg_repeat',
					'type'       => 'select',
					'label'      => __( 'Repeat', 'Hf' ),
					'class'      => 'field-half-left',
					'required'   => array(
						array( 'bg_image', 'not_empty', '' ),
					),
					'choices'    => array(
						'repeat'    => __( 'Default', 'Hf' ),
						'no-repeat' => __( 'No repeat', 'Hf' ),
						'repeat-x'  => __( 'Repeat horizontal', 'Hf' ),
						'repeat-y'  => __( 'Repeat vertical', 'Hf' ),
					),
					'css_format' => 'background-repeat: {{value}};',
				),

				array(
					'name'       => 'bg_attachment',
					'type'       => 'select',
					'label'      => __( 'Attachment', 'Hf' ),
					'class'      => 'field-half-right',
					'required'   => array(
						array( 'bg_image', 'not_empty', '' ),
					),
					'choices'    => array(
						''       => __( 'Default', 'Hf' ),
						'scroll' => __( 'Scroll', 'Hf' ),
						'fixed'  => __( 'Fixed', 'Hf' ),
					),
					'css_format' => 'background-attachment: {{value}};',
				),

				array(
					'name'  => 'border_heading',
					'type'  => 'heading',
					'label' => __( 'Border', 'Hf' ),
				),

				array(
					'name'       => 'border_style',
					'type'       => 'select',
					'class'      => 'clear',
					'label'      => __( 'Border Style', 'Hf' ),
					'default'    => '',
					'choices'    => array(
						''       => __( 'Default', 'Hf' ),
						'none'   => __( 'None', 'Hf' ),
						'solid'  => __( 'Solid', 'Hf' ),
						'dotted' => __( 'Dotted', 'Hf' ),
						'dashed' => __( 'Dashed', 'Hf' ),
						'double' => __( 'Double', 'Hf' ),
						'ridge'  => __( 'Ridge', 'Hf' ),
						'inset'  => __( 'Inset', 'Hf' ),
						'outset' => __( 'Outset', 'Hf' ),
					),
					'css_format' => 'border-style: {{value}};',
				),

				array(
					'name'       => 'border_width',
					'type'       => 'css_ruler',
					'label'      => __( 'Border Width', 'Hf' ),
					'required'   => array(
						array( 'border_style', '!=', 'none' ),
						array( 'border_style', '!=', '' ),
					),
					'css_format' => array(
						'top'    => 'border-top-width: {{value}};',
						'right'  => 'border-right-width: {{value}};',
						'bottom' => 'border-bottom-width: {{value}};',
						'left'   => 'border-left-width: {{value}};',
					),
				),
				array(
					'name'       => 'border_color',
					'type'       => 'color',
					'label'      => __( 'Border Color', 'Hf' ),
					'required'   => array(
						array( 'border_style', '!=', 'none' ),
						array( 'border_style', '!=', '' ),
					),
					'css_format' => 'border-color: {{value}};',
				),

				array(
					'name'       => 'border_radius',
					'type'       => 'css_ruler',
					'label'      => __( 'Border Radius', 'Hf' ),
					'css_format' => array(
						'top'    => 'border-top-left-radius: {{value}};',
						'right'  => 'border-top-right-radius: {{value}};',
						'bottom' => 'border-bottom-right-radius: {{value}};',
						'left'   => 'border-bottom-left-radius: {{value}};',
					),
				),

				array(
					'name'       => 'box_shadow',
					'type'       => 'shadow',
					'label'      => __( 'Box Shadow', 'Hf' ),
					'css_format' => 'box-shadow: {{value}};',
				),

			),

			'hover_fields' => array(
				array(
					'name'       => 'text_color',
					'type'       => 'color',
					'label'      => __( 'Color', 'Hf' ),
					'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
				),
				array(
					'name'       => 'link_color',
					'type'       => 'color',
					'label'      => __( 'Link Color', 'Hf' ),
					'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
				),
				array(
					'name'  => 'bg_heading',
					'type'  => 'heading',
					'label' => __( 'Background', 'Hf' ),
				),
				array(
					'name'       => 'bg_color',
					'type'       => 'color',
					'label'      => __( 'Background Color', 'Hf' ),
					'css_format' => 'background-color: {{value}};',
				),
				array(
					'name'  => 'border_heading',
					'type'  => 'heading',
					'label' => __( 'Border', 'Hf' ),
				),
				array(
					'name'       => 'border_style',
					'type'       => 'select',
					'label'      => __( 'Border Style', 'Hf' ),
					'default'    => '',
					'choices'    => array(
						''       => __( 'Default', 'Hf' ),
						'none'   => __( 'None', 'Hf' ),
						'solid'  => __( 'Solid', 'Hf' ),
						'dotted' => __( 'Dotted', 'Hf' ),
						'dashed' => __( 'Dashed', 'Hf' ),
						'double' => __( 'Double', 'Hf' ),
						'ridge'  => __( 'Ridge', 'Hf' ),
						'inset'  => __( 'Inset', 'Hf' ),
						'outset' => __( 'Outset', 'Hf' ),
					),
					'css_format' => 'border-style: {{value}};',
				),
				array(
					'name'       => 'border_width',
					'type'       => 'css_ruler',
					'label'      => __( 'Border Width', 'Hf' ),
					'required'   => array( 'border_style', '!=', 'none' ),
					'css_format' => array(
						'top'    => 'border-top-width: {{value}};',
						'right'  => 'border-right-width: {{value}};',
						'bottom' => 'border-bottom-width: {{value}};',
						'left'   => 'border-left-width: {{value}};',
					),
				),
				array(
					'name'       => 'border_color',
					'type'       => 'color',
					'label'      => __( 'Border Color', 'Hf' ),
					'required'   => array( 'border_style', '!=', 'none' ),
					'css_format' => 'border-color: {{value}};',
				),
				array(
					'name'       => 'border_radius',
					'type'       => 'css_ruler',
					'label'      => __( 'Border Radius', 'Hf' ),
					'css_format' => array(
						'top'    => 'border-top-left-radius: {{value}};',
						'right'  => 'border-top-right-radius: {{value}};',
						'bottom' => 'border-bottom-right-radius: {{value}};',
						'left'   => 'border-bottom-left-radius: {{value}};',
					),
				),
				array(
					'name'       => 'box_shadow',
					'type'       => 'shadow',
					'label'      => __( 'Box Shadow', 'Hf' ),
					'css_format' => 'box-shadow: {{value}};',
				),

			),

		);

		return apply_filters( 'Hf/get_styling_config', $fields );
	}

	/**
	 * Setup icon args
	 *
	 * @param array $icon
	 *
	 * @return array
	 */
	function setup_icon( $icon ) {
		if ( ! is_array( $icon ) ) {
			$icon = array();
		}

		return wp_parse_args(
			$icon,
			array(
				'type' => '',
				'icon' => '',
			)
		);
	}

	/**
	 * Get customize setting data
	 *
	 * @param string $key Setting name.
	 *
	 * @return bool|mixed
	 */
	function get_field_setting( $key ) {
		$config = self::get_config();
		if ( isset( $config[ 'setting|' . $key ] ) ) {
			return $config[ 'setting|' . $key ];
		}

		return false;
	}

	/**
	 * Get Media url from data
	 *
	 * @param string/array $value   media data.
	 * @param null|string  $size WordPress image size name.
	 *
	 * @return string|false Media url or empty
	 */
	function get_media( $value, $size = null ) {

		if ( empty( $value ) ) {
			return false;
		}

		if ( ! $size ) {
			$size = 'full';
		}

		if ( is_numeric( $value ) ) {
			$image_attributes = wp_get_attachment_image_src( $value, $size );
			if ( $image_attributes ) {
				return $image_attributes[0];
			} else {
				return false;
			}
		} elseif ( is_string( $value ) ) {
			$img_id = attachment_url_to_postid( $value );
			if ( $img_id ) {
				$image_attributes = wp_get_attachment_image_src( $img_id, $size );
				if ( $image_attributes ) {
					return $image_attributes[0];
				} else {
					return false;
				}
			}

			return $value;
		} elseif ( is_array( $value ) ) {
			$value = wp_parse_args(
				$value,
				array(
					'id'   => '',
					'url'  => '',
					'mime' => '',
				)
			);

			if ( empty( $value['id'] ) && empty( $value['url'] ) ) {
				return false;
			}

			$url = '';

			if ( strpos( $value['mime'], 'image/' ) !== false ) {
				$image_attributes = wp_get_attachment_image_src( $value['id'], $size );
				if ( $image_attributes ) {
					$url = $image_attributes[0];
				}
			} else {
				$url = wp_get_attachment_url( $value['id'] );
			}

			if ( ! $url ) {
				$url = $value['url'];
				if ( $url ) {
					$img_id = attachment_url_to_postid( $url );
					if ( $img_id ) {
						return wp_get_attachment_url( $img_id );
					}
				}
			}

			return $url;
		}

		return false;
	}

	/**
	 * Load support controls
	 */
	function load_controls() {
		$fields = array(
			'base',
			'select',
			'font',
			'font_style',
			'text_align',
			'text_align_no_justify',
			'checkbox',
			'css_ruler',
			'shadow',
			'icon',
			'slider',
			'color',
			'textarea',
			'radio',

			'media',
			'image',
			'video',

			'text',
			'hidden',
			'heading',
			'typography',
			'modal',
			'styling',
			'hr',

			'repeater',

			'pro',
		);

		$fields = apply_filters( 'Hf/customize/register-controls', $fields );

		foreach ( $fields as $k => $f ) {

			if ( is_numeric( $k ) ) {
				$field_type = $f;
				$file       = get_template_directory() . '/header_footer/customizer/controls/class-control-' . str_replace( '_', '-', $field_type ) . '.php';
			} else {
				$field_type = $k;
				$file       = $f;
			}

			if ( file_exists( $file ) ) {

				$control_class_name = 'Hf_Customizer_Control_';
				$tpl_type           = str_replace( '_', ' ', $field_type );
				$tpl_type           = str_replace( ' ', '_', ucfirst( $tpl_type ) );
				$control_class_name .= $tpl_type;
				require_once $file;

				if ( $control_class_name ) {
					if ( method_exists( $control_class_name, 'field_template' ) ) {
						add_action(
							'customize_controls_print_footer_scripts',
							array(
								$control_class_name,
								'field_template',
							)
						);
					}
				}
			}
		}

	}


	/**
	 * Register Customize Settings
	 *
	 * @param WP_Customize_Manager $wp_customize Customize manager.
	 */
	function register( $wp_customize ) {

		// Custom panel.
		require_once get_template_directory() . '/header_footer/customizer/class-Hf-panel.php';
		// Load custom section.
		require_once get_template_directory() . '/header_footer/customizer/class-Hf-section.php';

		// Load custom section pro.
		require_once get_template_directory() . '/header_footer/customizer/class-Hf-section-pro.php';

		// Register new panel and section type.
		$wp_customize->register_panel_type( 'Hf_WP_Customize_Panel' );
		$wp_customize->register_section_type( 'Hf_WP_Customize_Section' );

		// Register section type.
		$wp_customize->register_section_type( 'Hf_WP_Customize_Section_Pro' );

		$this->load_controls();

		foreach ( self::get_config( $wp_customize ) as $args ) {
			switch ( $args['type'] ) {
				case 'panel':
					$name = $args['name'];
					unset( $args['name'] );
					if ( ! $args['title'] ) {
						$args['title'] = $args['label'];
					}
					if ( ! $name ) {
						$name = $args['title'];
					}
					unset( $args['name'] );
					unset( $args['type'] );
					$panel = new Hf_WP_Customize_Panel( $wp_customize, $name, $args );
					$wp_customize->add_panel( $panel );
					break;
				case 'section':
					$name = $args['name'];
					unset( $args['name'] );
					if ( ! $args['title'] ) {
						$args['title'] = $args['label'];
					}
					if ( ! $name ) {
						$name = $args['title'];
					}
					unset( $args['name'] );
					unset( $args['type'] );
					if ( isset( $args['section_class'] ) && class_exists( $args['section_class'] ) ) { // Allow custom class.
						$wp_customize->add_section( new $args['section_class']( $wp_customize, $name, $args ) );
					} else {
						$wp_customize->add_section( new Hf_WP_Customize_Section( $wp_customize, $name, $args ) );
					}

					break;
				default:
					switch ( $args['type'] ) {
						case 'image_select':
							$args['setting_type'] = 'radio';
							$args['field_class']  = 'custom-control-image_select' . ( $args['field_class'] ? ' ' . $args['field_class'] : '' );
							break;
						case 'radio_group':
							$args['setting_type'] = 'radio';
							$args['field_class']  = 'custom-control-radio_group' . ( $args['field_class'] ? ' ' . $args['field_class'] : '' );
							break;
						default:
							$args['setting_type'] = $args['type'];
					}

					$args['default_value']    = $args['default'];
					$settings_args            = array(
						'sanitize_callback'    => $args['sanitize_callback'],
						'sanitize_js_callback' => $args['sanitize_js_callback'],
						'theme_supports'       => $args['theme_supports'],
						'type'                 => $args['mod'],
					);
					$settings_args['default'] = apply_filters( 'Hf/customize/settings-default', $args['default'], $args['name'] );

					$settings_args['transport'] = 'refresh';
					if ( ! $settings_args['sanitize_callback'] ) {
						$settings_args['sanitize_callback'] = array(
							'Hf_Sanitize_Input',
							'sanitize_customizer_input',
						);
					}

					foreach ( $settings_args as $k => $v ) {
						unset( $args[ $k ] );
					}

					unset( $args['mod'] );
					$name = $args['name'];
					unset( $args['name'] );

					unset( $args['type'] );
					if ( ! $args['label'] ) {
						$args['label'] = $args['title'];
					}

					$selective_refresh = null;
					if ( $args['selector'] && ( ( $args['render_callback'] || $args['render'] ) || $args['css_format'] ) ) {
						$selective_refresh = array(
							'selector'        => $args['selector'],
							'render_callback' => ( $args['render'] ) ? $args['render'] : $args['render_callback'],
						);

						if ( $args['css_format'] ) {
							$settings_args['transport'] = 'postMessage';
							$selective_refresh          = null;
						} else {
							$settings_args['transport'] = 'postMessage';
						}
					}
					unset( $args['default'] );

					$wp_customize->add_setting(
						$name,
						array_merge(
							array(
								'sanitize_callback' => array(
									'Hf_Sanitize_Input',
									'sanitize_customizer_input',
								),
							),
							$settings_args
						)
					);

					$control_class_name = 'Hf_Customizer_Control_';
					$tpl_type           = str_replace( '_', ' ', $args['setting_type'] );
					$tpl_type           = str_replace( ' ', '_', ucfirst( $tpl_type ) );
					$control_class_name .= $tpl_type;

					if ( 'js_raw' != $settings_args['type'] ) {
						if ( class_exists( $control_class_name ) ) {
							$wp_customize->add_control( new $control_class_name( $wp_customize, $name, $args ) );
						} else {
							$wp_customize->add_control( new Hf_Customizer_Control_Base( $wp_customize, $name, $args ) );
						}
					}

					if ( $selective_refresh ) {
						$s_id = $selective_refresh['render_callback'];
						if ( is_array( $s_id ) ) {
							if ( is_string( $s_id[0] ) ) {
								$__id = $s_id[0] . '__' . $s_id[1];
							} else {
								$__id = get_class( $s_id[0] ) . '__' . $s_id[1];
							}
						} else {
							$__id = $s_id;
						}
						if ( ! isset( $this->selective_settings[ $__id ] ) ) {
							$this->selective_settings[ $__id ] = array(
								'settings'            => array(),
								'selector'            => $selective_refresh['selector'],
								'container_inclusive' => ( strpos( $__id, 'Hf_Customizer_Auto_CSS' ) === false ) ? true : false,
								'render_callback'     => $s_id,
							);
						}

						$this->selective_settings[ $__id ]['settings'][] = $name;
					}

					break;
			}// end switch.
		} // End loop config.

		// Remove partial for default custom logo and add this by theme custom.
		$wp_customize->selective_refresh->remove_partial( 'custom_logo' );

		$wp_customize->get_section( 'title_tagline' )->panel        = 'header_settings';
		$wp_customize->get_section( 'title_tagline' )->title        = __( 'Logo & Site Identity', 'Hf' );
		$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
		// Add selective refresh.
		$wp_customize->get_setting( 'custom_logo' )->transport     = 'postMessage';
		$wp_customize->get_setting( 'blogname' )->transport        = 'postMessage';
		$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';

		foreach ( $this->selective_settings as $cb => $settings ) {
			reset( $settings['settings'] );
			if ( 'Hf_Builder_Item_Logo__render' == $cb ) {
				$settings['settings'][] = 'custom_logo';
				$settings['settings'][] = 'blogname';
				$settings['settings'][] = 'blogdescription';
			}
			$settings = apply_filters( $cb, $settings );
			$wp_customize->selective_refresh->add_partial( $cb, $settings );
		}

		// For live CSS.
		$wp_customize->add_setting(
			'Hf__css',
			array(
				'default'           => '',
				'transport'         => 'postMessage',
				'sanitize_callback' => array( 'Hf_Sanitize_Input', 'sanitize_css_code' ),
			)
		);

		do_action( 'Hf/customize/register_completed', $this );
	}

}
