<?php

class Hf_Customizer_Auto_CSS {

	static $_instance;
	public $fonts = array();
	public $custom_fonts = array();
	public $variants = array();
	public $subsets = array();

	static $code = null;
	static $font_url = null;
	/**
	 * CSS device query settings
	 *
	 * @var array
	 */
	public $media_queries = array(
		'all'     => '%s',
		'desktop' => '%s',
		'tablet'  => '@media screen and (max-width: 1024px) { %s }',
		'mobile'  => '@media screen and (max-width: 568px) { %s }',
	);

	/**
	 * CSS code for devices
	 *
	 * @var array
	 */
	private $css = array(
		'all'     => '',
		'desktop' => '',
		'tablet'  => '',
		'mobile'  => '',
	);

	/**
	 * Default shadow fields
	 *
	 * @var array
	 */
	private $box_shadow_fields = array(
		'color'  => null,
		'x'      => 0,
		'y'      => 0,
		'blur'   => 0,
		'spread' => 0,
		'inset'  => null,
	);

	/**
	 * Get intance.
	 *
	 * @return Hf_Customizer_Auto_CSS
	 */
	static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
			self::$code      = self::$_instance->auto_css();
		}

		return self::$_instance;
	}

	private function replace_value( $value, $format, $value_no_unit = null ) {
		$s = str_replace( '{{value}}', $value, $format );

		return str_replace( '{{value_no_unit}}', $value_no_unit, $s );
	}

	function setup_css_ruler( $value, $format ) {
		$value = wp_parse_args(
			$value,
			array(
				'unit'   => '',
				'top'    => null,
				'right'  => null,
				'bottom' => null,
				'left'   => null,
			)
		);

		if ( ! $value['unit'] ) {
			$value['unit'] = 'px';
		}

		$format = wp_parse_args(
			$format,
			array(
				'top'    => null,
				'right'  => null,
				'bottom' => null,
				'left'   => null,
			)
		);

		$code = array();
		foreach ( $format as $pos => $string ) {
			$v = $value[ $pos ];
			if ( $string ) {
				if ( ! is_null( $v ) && '' !== $v ) {
					$v            = $v . $value['unit'];
					$code[ $pos ] = $this->replace_value( $v, $string );
				}
			}
		}

		return join( "\n\t", $code );
	}

	function setup_shadow( $value, $format ) {

		if ( ! is_array( $value ) || ! $format ) {
			return '';
		}

		$p        = wp_parse_args( $value, $this->box_shadow_fields );
		$value    = Hf_Sanitize_Input::sanitize_color( $p['color'] );
		$color    = $value;
		$position = $p['inset'] ? 'inset' : '';
		if ( ! $color ) {
			return '';
		}
		if ( ! $p['blur'] ) {
			$p['blur'] = 0;
		}
		if ( ! $p['spread'] ) {
			$p['spread'] = 0;
		}
		if ( ! $p['x'] ) {
			$p['x'] = 0;
		}
		if ( ! $p['y'] ) {
			$p['y'] = 0;
		}

		$style = $p['x'] . 'px'
				 . ' ' . $p['y'] . 'px'
				 . ' ' . $p['blur'] . 'px'
				 . ' ' . $p['spread'] . 'px'
				 . ' ' . $color
				 . ' ' . $position
				 . ';';

		// offset-x | offset-y | blur-radius | spread-radius | color.
		// box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);.
		return $this->replace_value( $style, $format );
	}

	function setup_slider( $value, $format ) {
		$value = wp_parse_args(
			$value,
			array(
				'unit'  => '',
				'value' => null,
			)
		);

		if ( ! $value['unit'] ) {
			$value['unit'] = 'px';
		}

		if ( $format ) {
			if ( ! is_null( $value['value'] ) && '' !== $value['value'] ) {
				$v = $value['value'] . $value['unit'];
				$c = $this->replace_value( $v, $format, $value['value'] );

				return $c;
			}
		}

		return false;
	}

	function setup_color( $value, $format ) {
		$value = Hf_Sanitize_Input::sanitize_color( $value );
		if ( $format ) {
			if ( ! is_null( $value ) && '' !== $value ) {
				return $this->replace_value( $value, $format );
			}
		}

		return false;
	}

	function setup_checkbox( $value, $format ) {
		if ( $format ) {
			if ( $value ) {
				return $format;
			}
		}

		return false;
	}

	function setup_image( $value, $format ) {
		$image = Hf()->get_media( $value );
		if ( $format ) {
			if ( $image ) {
				return $this->replace_value( $image, $format ) . '';
			}
		}

		return false;
	}

	function setup_text_align( $value, $format ) {
		$value = sanitize_text_field( $value );
		if ( $format ) {
			if ( ! is_null( $value ) && '' !== $value ) {
				return $this->replace_value( $value, $format ) . ';';
			}
		}

		return false;
	}

	function css_ruler( $field, $values = null, $no_selector = null ) {
		$code = $this->maybe_devices_setup( $field, 'setup_css_ruler', $values, $no_selector );

		return $code;
	}

	function slider( $field, $values = null, $no_selector = null ) {
		$code = $this->maybe_devices_setup( $field, 'setup_slider', $values, $no_selector );

		return $code;
	}

	function color( $field, $values = null, $no_selector = null ) {
		$code = $this->maybe_devices_setup( $field, 'setup_color', $values, $no_selector );

		return $code;
	}

	function shadow( $field, $values = null, $no_selector = null ) {
		$code = $this->maybe_devices_setup( $field, 'setup_shadow', $values, $no_selector );

		return $code;
	}

	function checkbox( $field, $values = null, $no_selector = null ) {
		return $this->maybe_devices_setup( $field, 'setup_checkbox', $values, $no_selector );
	}

	function image( $field, $values = null, $no_selector = null ) {
		$code = $this->maybe_devices_setup( $field, 'setup_image', $values, $no_selector );

		return $code;
	}

	function text_align( $field, $values = null, $no_selector = null ) {
		$code = $this->maybe_devices_setup( $field, 'setup_default', $values, $no_selector );

		return $code;
	}

	function _join( $lists, $codeList, &$selectorCSSAll = array(), &$selectorCSSDevices = array() ) { //phpcs:ignore
		if ( ! is_array( $selectorCSSAll ) ) {
			$selectorCSSAll = array();
		}

		if ( ! is_array( $selectorCSSDevices ) ) {
			$selectorCSSDevices = array();
		}

		foreach ( (array) $lists as $name => $f ) {

			if ( isset( $f['selector'] ) && $f['selector'] ) {
				if ( ! isset( $selectorCSSAll[ $f['selector'] ] ) ) {
					$selectorCSSAll[ $f['selector'] ] = '';
				}

				if ( isset( $codeList[ $name ] ) ) {

					if ( isset( $codeList[ $name ]['no_devices'] ) ) {
						if ( $codeList[ $name ]['no_devices'] ) {
							$selectorCSSAll[ $f['selector'] ] .= $codeList[ $name ]['no_devices'];
						}
					} else {

						if ( is_array( $codeList[ $name ] ) ) {
							foreach ( $codeList[ $name ] as $device => $code ) {
								if ( ! isset( $selectorCSSDevices[ $device ] ) ) {
									$selectorCSSDevices[ $device ] = array();
								}

								if ( ! isset( $selectorCSSDevices[ $device ][ $f['selector'] ] ) ) {
									$selectorCSSDevices[ $device ][ $f['selector'] ] = '';
								}

								if ( $code ) {
									$selectorCSSDevices[ $device ][ $f['selector'] ] .= $code;
								}
							}
						}
					}
				}
			}
		}

	}

	function setup_styling_fields( $fields, $list, $selectors, $type ) {
		$newList = array();
		if ( ! is_array( $selectors ) ) {
			$selectors = array();
		}
		if ( false === $fields ) {
			$newList = null;
		} else {

			if ( ! is_array( $fields ) ) {
				$fields = array();
			}

			$newfs = array();
			$i     = 0;
			foreach ( $list as $f ) {
				$key = $f['name'];
				if ( ! isset( $fields[ $key ] ) || $fields[ $key ] ) {
					$newfs[ $key ] = $f;
					if ( isset( $selectors[ $type . '_' . $key ] ) ) {
						$newfs[ $key ]['selector'] = $selectors[ $type . '_' . $key ];
					} else {
						$newfs[ $key ]['selector'] = $selectors[ $type ];
					}
					$i ++;
				}
			}
			$newList = $newfs;

			return $newList;
		}
	}

	function styling( $field, $values = null ) {
		$values = Hf()->get_setting( $field['name'], 'all' );

		$values = wp_parse_args(
			$values,
			array(
				'normal' => array(),
				'hover'  => array(),
			)
		);

		$new_fields = array();
		$selectors  = array();

		if ( is_string( $field['selector'] ) ) {
			$selectors['normal'] = $field['selector'];
			$selectors['hover']  = $field['selector'];
		} else {
			$selectors = wp_parse_args(
				$field['selector'],
				array(
					'normal' => array(),
					'hover'  => array(),
				)
			);
		}
		$tabs          = null;
		$normal_fields = - 1;
		$hover_fields  = - 1;
		if ( isset( $field['fields'] ) && is_array( $field['fields'] ) ) {
			if ( isset( $field['fields']['tabs'] ) ) {
				$tabs = $field['fields']['tabs'];
			}
			if ( isset( $field['fields']['normal_fields'] ) ) {
				$normal_fields = $field['fields']['normal_fields'];
			}
			if ( isset( $field['fields']['hover_fields'] ) ) {
				$hover_fields = $field['fields']['hover_fields'];
			}
		}

		$styling_config     = Hf()->customizer->get_styling_config();
		$selectorCSSAll     = array();
		$selectorCSSDevices = array();
		$listNormalFields   = $this->setup_styling_fields( $normal_fields, $styling_config['normal_fields'], $selectors, 'normal' );
		$listHoverFields    = $this->setup_styling_fields( $hover_fields, $styling_config['hover_fields'], $selectors, 'hover' );

		$listTabs = $styling_config['tabs'];

		if ( false === $tabs ) {
			$listTabs['hover'] = false;
		} elseif ( is_array( $tabs ) ) {
			$listTabs = $tabs;
		}

		// Do no use bg settings if no bg.
		if ( isset( $values['normal']['bg_image'] ) ) {
			$image = Hf()->get_media( $values['normal']['bg_image'] );
			if ( ! $image ) {
				unset( $values['normal']['bg_repeat'] );
				unset( $values['normal']['bg_cover'] );
				unset( $values['normal']['bg_position'] );
				unset( $values['normal']['bg_attachment'] );
			}
		}

		$normal_style = $this->loop_fields( $listNormalFields, $values['normal'], true, true );
		$hover_style  = $this->loop_fields( $listHoverFields, $values['hover'], true, true );

		$this->_join( $listNormalFields, $normal_style, $selectorCSSAll, $selectorCSSDevices );
		$this->_join( $listHoverFields, $hover_style, $selectorCSSAll, $selectorCSSDevices );

		foreach ( $selectorCSSAll as $s => $code ) {
			if ( trim( $code ) ) {
				$this->css['all'] .= "\r\n{$s}  {\r\n\t{$code}\r\n} \r\n";
			}
		}

		foreach ( Hf()->customizer->devices as $device ) {
			$css = '';
			if ( isset( $selectorCSSDevices[ $device ] ) ) {
				$deviceCode = $selectorCSSDevices[ $device ];
				foreach ( $deviceCode as $s => $c ) {
					if ( ! empty( $c ) ) {
						if ( is_string( $c ) && trim( $c ) ) {
							$css .= "\r\n{$s}  {\r\n\t{$c}\r\n} \r\n";
						} else {
							if ( ! is_array( $c ) ) {
								$c = array();
							}
							$c = array_map( 'trim', $c );
							$c = array_filter( $c );
							if ( ! empty( $c ) ) {
								$css .= "\r\n{$s}  {\r\n\t" . join( $c, "\n" ) . "\r\n} \r\n";
							}
						}
					}
				}
			}
			$this->css[ $device ] .= $css;
		}
	}

	function modal( $field, $values = null ) {

		$values = Hf()->get_setting( $field['name'], 'all' );
		if ( ! is_array( $values ) ) {
			$values = array();
		}
		if ( isset( $field['fields']['tabs'] ) ) {
			foreach ( $field['fields']['tabs'] as $key => $title ) {
				if ( isset( $field['fields'][ $key . '_fields' ] ) ) {
					$this->loop_fields( $field['fields'][ $key . '_fields' ], isset( $values[ $key ] ) ? $values[ $key ] : array() );
				}
			}
		}
	}

	function setup_default( $value, $format ) {
		if ( is_string( $value ) && $value ) {
			$value = sanitize_text_field( $value );
			if ( $format ) {
				return $this->replace_value( $value, $format );
			}
		}

		return false;
	}

	function maybe_devices_setup( $field, $call_back, $values = null, $no_selector = false ) {
		$code       = '';
		$code_array = array();
		$has_device = false;
		$format     = isset( $field['css_format'] ) ? $field['css_format'] : false;
		if ( isset( $field['device_settings'] ) && $field['device_settings'] ) {
			$has_device = true;
			foreach ( Hf()->customizer->devices as $device ) {
				$value = null;
				if ( is_null( $values ) ) {
					$value = Hf()->get_setting( $field['name'], $device );
				} else {
					if ( isset( $values[ $device ] ) ) {
						$value = $values[ $device ];
					}
				}
				$_c = false;
				if ( method_exists( $this, $call_back ) ) {
					$_c = call_user_func_array( array( $this, $call_back ), array( $value, $format ) );
				}
				if ( $_c ) {
					$code_array[ $device ] = $_c;
				}
			}
		} else {
			if ( is_null( $values ) ) {
				$values = Hf()->get_setting( $field['name'] );
			}
			if ( method_exists( $this, $call_back ) ) {
				$code = call_user_func_array( array( $this, $call_back ), array( $values, $format ) );
			}
			$code_array['no_devices'] = $code;

		}

		$code_array = apply_filters( 'Hf/customizer/auto_css', $code_array, $field, $this );

		if ( empty( $code_array ) ) {
			return false;
		}

		$code_array = array_map( 'trim', $code_array );
		$code_array = array_filter( $code_array );

		$code = '';
		if ( $no_selector ) {
			return $code_array;
		} else {
			if ( $has_device ) {
				foreach ( Hf()->customizer->devices as $device ) {
					if ( isset( $code_array[ $device ] ) ) {
						$_c = $code_array[ $device ];
						if ( $_c && trim( $_c ) ) {
							if ( 'format' == $field['selector'] ) {
								$this->css[ $device ] .= "\r\n{$_c}\r\n";
							} else {
								$this->css[ $device ] .= "\r\n{$field['selector']} {\r\n\t{$_c}\r\n}\r\n";
							}
						}
					}
				}
			} else {
				if ( isset( $code_array['no_devices'] ) && $code_array['no_devices'] ) {
					if ( 'format' == $field['selector'] ) {
						$this->css['all'] .= "\r\n{$code_array['no_devices']}\r\n";
					} else {
						$this->css['all'] .= "\r\n{$field['selector']} {\r\n\t{$code_array['no_devices']}\r\n}\r\n";
					}
				}
			}
		}

		return $code;
	}

	function setup_font( $value ) {

		$value = wp_parse_args(
			$value,
			array(
				'font'    => null,
				'type'    => null,
				'variant' => null,
				'subsets' => null,
			)
		);

		if ( ! $value['font'] ) {
			return '';
		}

		if ( 'google' == $value['type'] ) {
			$this->fonts[ $value['font'] ] = $value['font'];
			if ( $value['variant'] ) {
				if ( ! isset( $this->variants[ $value['font'] ] ) ) {
					$this->variants[ $value['font'] ] = array();
					if ( ! is_array( $value['variant'] ) ) {
						$this->variants[ $value['font'] ] = array_merge( $this->variants[ $value['font'] ], array( $value['variant'] => $value['variant'] ) );
					} else {
						$this->variants[ $value['font'] ] = array_merge( $this->variants[ $value['font'] ], $value['variant'] );
					}
				}
			}

			if ( $value['subsets'] ) {
				$this->subsets = array_merge( $this->subsets, $value['subsets'] );
			}
		} else {
			$this->custom_fonts[ $value['font'] ] = $value['font'];
		}

		return "font-family: \"{$value['font']}\";";
	}


	function font( $field, $values = null ) {
		$code = '';
		if ( $field['device_settings'] ) {
			foreach ( Hf()->customizer->devices as $device ) {
				$value = null;
				if ( is_null( $values ) ) {
					$value = Hf()->get_setting( $field['name'], $device );
				} else {
					if ( isset( $values[ $device ] ) ) {
						$value = $values[ $device ];
					}
				}

				$_c = $this->setup_font( $value );
				if ( $_c ) {
					$this->css[ $device ] = "\r\n{$field['selector']} {\r\n\t{$_c}\r\n}\r\n";
					if ( 'desktop' == $device ) {
						$code .= "\r\n{$field['selector']} {\r\n\t{$_c}\r\n}";
					} else {
						$code .= "\r\n.{$device} {$field['selector']} {\r\n\t{$_c}\r\n}\r\n";
					}
				}
			}
		} else {
			if ( is_null( $values ) ) {
				$values = Hf()->get_setting( $field['name'] );
			}
			$code             = $this->setup_font( $values );
			$this->css['all'] .= "{$field['selector']} {\r\n\t{$code}\r\n}\r\n";
			$code             .= "{$field['selector']} {\r\n\t{$code}\r\n}\r\n";
		}

		return $code;
	}

	function setup_font_style( $value ) {
		$value = wp_parse_args(
			$value,
			array(
				'b' => null,
				'i' => null,
				'u' => null,
				's' => null,
				't' => null,
			)
		);
		$css   = array();
		if ( $value['b'] ) {
			$css['b'] = 'font-weight: bold;';
		}
		if ( $value['i'] ) {
			$css['i'] = 'font-style: italic;';
		}

		$decoration = array();
		if ( $value['u'] ) {
			$decoration['underline'] = 'underline';

		}

		if ( $value['s'] ) {
			$decoration['line-through'] = 'line-through';
		}

		if ( ! empty( $decoration ) ) {
			$css['d'] = 'text-decoration: ' . join( ' ', $decoration ) . ';';
		}

		if ( $value['t'] ) {
			$css['t'] = 'text-transform: uppercase;';
		}

		return join( "\r\n\t", $css );

	}

	function typography( $field ) {
		$values = Hf()->get_setting( $field['name'] );
		$values = wp_parse_args(
			$values,
			array(
				'font'            => null,
				'style'           => null,
				'font_size'       => null,
				'line_height'     => null,
				'letter_spacing'  => null,
				'font_type'       => null,
				'languages'       => null,
				'font_weight'     => null,
				'text_decoration' => null,
				'text_transform'  => null,
				'variant'         => null,
			)
		);
		$code   = array();

		$fields      = array();
		$devices_css = array();
		foreach ( Hf()->customizer->get_typo_fields() as $f ) {
			$fields[ $f['name'] ] = $f;
		}

		if ( isset( $fields['font'] ) ) {
			$code['font'] = $this->setup_font(
				array(
					'font'    => $values['font'],
					'type'    => $values['font_type'],
					'subsets' => $values['languages'],
					'variant' => $values['variant'],
				)
			);
		}

		if ( isset( $values['style'] ) && $values['style'] ) {

			if ( $values['style'] && 'default' !== $values['style'] ) {
				$code['style'] = 'font-style: ' . $values['style'] . ';';
			}
		}

		// Font Weight.
		if ( 'default' == $values['font_weight'] ) {
			$values['font_weight'] = '';
		}
		if ( isset( $fields['font_weight'] ) && $values['font_weight'] ) {
			if ( 'regular' == $values['font_weight'] ) {
				$values['font_weight'] = 'normal';
			}
			$code['font_weight'] = 'font-weight: ' . sanitize_text_field( $values['font_weight'] ) . ';';
		}

		// Text Decoration.
		if ( isset( $fields['text_decoration'] ) && $values['text_decoration'] ) {
			$code['text_decoration'] = 'text-decoration: ' . sanitize_text_field( $values['text_decoration'] ) . ';';
		}

		// Text Transform.
		if ( isset( $fields['text_transform'] ) && $values['text_transform'] ) {
			$code['text_transform'] = 'text-transform: ' . sanitize_text_field( $values['text_transform'] ) . ';';
		}

		if ( isset( $fields['font_size'] ) ) {
			$fields['font_size']['css_format'] = 'font-size: {{value}};';
			$font_size_css                     = $this->maybe_devices_setup( $fields['font_size'], 'setup_slider', $values['font_size'], true );
			if ( $font_size_css ) {
				if ( isset( $font_size_css['no_devices'] ) ) {
					$code['font_size'] = $font_size_css['no_devices'];
				} else {
					foreach ( $font_size_css as $device => $_c ) {
						if ( 'desktop' == $device ) {
							$code['font_size'] = $_c;
						} else {
							if ( ! isset( $devices_css[ $device ] ) ) {
								$devices_css[ $device ] = array();
							}
							$devices_css[ $device ]['font_size'] = $_c;
						}
					}
				}
			}
		}

		if ( isset( $fields['line_height'] ) ) {
			$fields['line_height']['css_format'] = 'line-height: {{value}};';
			$font_size_css                       = $this->maybe_devices_setup( $fields['line_height'], 'setup_slider', $values['line_height'], true );
			if ( $font_size_css ) {
				if ( isset( $font_size_css['no_devices'] ) ) {
					$code['line_height'] = $font_size_css['no_devices'];
				} else {
					foreach ( $font_size_css as $device => $_c ) {
						if ( 'desktop' == $device ) {
							$code['line_height'] = $_c;
						} else {
							if ( ! isset( $devices_css[ $device ] ) ) {
								$devices_css[ $device ] = array();
							}
							$devices_css[ $device ]['line_height'] = $_c;
						}
					}
				}
			}
		}

		if ( isset( $fields['letter_spacing'] ) ) {
			$fields['letter_spacing']['css_format'] = 'letter-spacing: {{value}};';
			$font_size_css                          = $this->maybe_devices_setup( $fields['letter_spacing'], 'setup_slider', $values['letter_spacing'], true );
			if ( $font_size_css ) {
				if ( isset( $font_size_css['no_devices'] ) && ! empty( $font_size_css['no_devices'] ) ) {
					$code['letter_spacing'] = $font_size_css['no_devices'];
				} else {
					foreach ( (array) $font_size_css as $device => $_c ) {
						if ( 'desktop' == $device ) {
							$code['letter_spacing'] = $_c;
						} else {
							if ( ! isset( $devices_css[ $device ] ) ) {
								$devices_css[ $device ] = array();
							}
							$devices_css[ $device ]['letter_spacing'] = $_c;
						}
					}
				}
			}
		}

		$devices_css = apply_filters( 'Hf/customizer/auto_css', $devices_css, $field, $this );
		foreach ( $devices_css as $device => $els ) {
			if ( ! empty( $els ) ) {
				$this->css[ $device ] .= "{$field['selector']} {\r\n\t" . join( "\r\n\t", $els ) . "\r\n}";
			}
		}

		$code = array_filter( $code );
		if ( ! empty( $code ) ) {
			$this->css['all'] .= "{$field['selector']} {\r\n\t" . join( "\r\n\t", $code ) . "\r\n}";
		}

	}

	function get_google_fonts_url() {
		$url = '//fonts.googleapis.com/css?family=';
		$s   = '';
		if ( empty( $this->fonts ) ) {
			return false;
		}

		foreach ( $this->fonts as $font_name ) {
			if ( $s ) {
				$s .= '|';
			}
			$s .= str_replace( ' ', '+', $font_name );
			$v = array();
			if ( isset( $this->variants[ $font_name ] ) ) {
				foreach ( $this->variants[ $font_name ] as $_v ) {
					if ( 'regular' != $_v ) {
						switch ( $_v ) {
							case 'italic':
								$v[ $_v ] = '400i';
								break;
							default:
								$v[ $_v ] = str_replace( 'italic', 'i', $_v );
						}
					} else {
						$v[ $_v ] = '400';
					}
				}
			}

			if ( ! empty( $v ) ) {
				$s .= ':' . join( ',', $v );
			}
		}

		$url .= $s;

		if ( ! empty( $this->subsets ) ) {
			$url .= '&subset=' . join( ',', $this->subsets );
		}

		return $url;
	}

	function loop_fields( $fields, $values = null, $skip_if_val_null = false, $no_selector = false, $key_name = 'name' ) {
		$listcss = array();

		foreach ( (array) $fields as $field ) {
			$field = wp_parse_args(
				$field,
				array(
					'selector'   => null,
					'css_format' => null,
					'type'       => null,
				)
			);

			if ( ! $key_name ) {
				$key_name = 'name';
			}

			$key = $field[ $key_name ];

			$v = isset( $values[ $field['name'] ] ) ? $values[ $field['name'] ] : null;
			if ( ! ( is_null( $v ) && $skip_if_val_null ) ) {
				if ( ( $field['selector'] && $field['css_format'] ) || 'modal' == $field['type'] ) {
					switch ( $field['type'] ) {
						case 'css_ruler':
							$listcss[ $key ] = $this->css_ruler( $field, $v, $no_selector );
							break;
						case 'slider':
							$listcss[ $key ] = $this->slider( $field, $v, $no_selector );
							break;
						case 'color':
							$listcss[ $key ] = $this->color( $field, $v, $no_selector );
							break;
						case 'shadow':
							$listcss[ $key ] = $this->shadow( $field, $v, $no_selector );
							break;
						case 'image':
							$listcss[ $key ] = $this->image( $field, $v, $no_selector );
							break;
						case 'checkbox':
							if ( 'html_class' !== $field['css_format'] ) {
								$listcss[ $key ] = $this->checkbox( $field, $v, $no_selector );
							}
							break;
						case 'text_align':
						case 'text_align_no_justify':
							$listcss[ $key ] = $this->text_align( $field, $v, $no_selector );
							break;
						case 'font':
							$this->font( $field, $v );
							break;
						case 'styling':
							$this->styling( $field, $v );
							break;
						case 'modal':
							$this->modal( $field, $v );
							break;
						default:
							switch ( $field['css_format'] ) {
								case 'typography':
									$this->typography( $field );
									break;
								case 'html_class':
									break;
								default:
									$listcss[ $key ] = $this->maybe_devices_setup( $field, 'setup_default', $v, $no_selector );

							}
					}
				}
			}
		} // end for each fields

		return $listcss;

	}

	function get_font_url() {
		return self::$font_url;
	}

	/**
	 * Remove space of css code.
	 *
	 * @since 1.0.0
	 * @since 0.2.6
	 *
	 * @param string $css
	 * @return tring
	 */
	function min_css( $css ) {

		if ( trim( $css ) == '' ) {
			return;
		}

		$css = str_replace( array( "\r\n", "\r", "\n", "\t" ), '', $css );
		return $css;

	}

	/**
	 * Render CSS content from array customize configs.
	 *
	 * @since 0.2.5
	 *
	 * @param array $fields
	 * @return string
	 */
	public function render_css( $fields = array() ) {
		$this->loop_fields( $fields );
		$css_code = '';
		$i        = 0;
		foreach ( $this->css as $device => $code ) {
			$new_line = '';
			if ( $i > 0 ) {
				$new_line = "\r\n/* CSS for {$device} */\r\n";
			}
			$css_code .= $new_line . sprintf( $this->media_queries[ $device ], $code ) . "\r\n";
			$i ++;
		}

		$css_code = apply_filters( 'Hf/auto-css', $css_code, $this );
		return $css_code;
	}

	/**
	 * Auto render CSS code.
	 *
	 * @since 0.0.1
	 * @since 0.2.6
	 *
	 * @param boolean $partial
	 * @return string
	 */
	function auto_css( $partial = false ) {
		if ( ! is_null( self::$code ) ) {
			return self::$code;
		}
		$config_fields = Hf()->customizer->get_config();
		/**
		 * Render CSS from customize configs
		 *
		 * @since  0.2.6
		 */
		$css_code = $this->render_css( $config_fields );

		$url            = $this->get_google_fonts_url();
		self::$font_url = $url;
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			return $css_code;
		}

		return $this->min_css( $css_code );
	}
}

