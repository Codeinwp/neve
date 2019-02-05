<?php

class Hf_Sanitize_Input {

	private $control;
	private $setting;
	private $fonts = array();
	private $icons = array();
	private $skip_devices = false;

	function __construct( $control = null, $setting = null ) {
		if ( is_array( $control ) ) {
			$control = (object) $control;
		}
		if ( is_array( $setting ) ) {
			$setting = (object) $setting;
		}
		$this->control = $control;
		$this->setting = $setting;
	}

	/**
	 * Sanitize css code
	 *
	 * @param string $val
	 *
	 * @return string
	 */
	static function sanitize_css_code( $val ) {
		return wp_kses_post( $val );
	}

	/**
	 * Sanitize Customizer Input
	 *
	 * @param string $input
	 * @param object $setting
	 *
	 * @return array|mixed|null|object|string
	 */
	static function sanitize_customizer_input( $input, $setting ) {
		$input = wp_unslash( $input );
		if ( ! is_array( $input ) ) {
			$input = json_decode( urldecode_deep( $input ), true );
		}
		$control = $setting->manager->get_control( $setting->id );
		$s       = new Hf_Sanitize_Input( $control, $setting );
		$input   = $s->sanitize( $input );

		return $input;
	}

	/**
	 * Sanitize css ruler input
	 *
	 * @param array|string $value
	 *
	 * @return array
	 */
	private function sanitize_css_ruler( $value ) {
		$default             = array(
			'unit'   => 'px',
			'top'    => null,
			'right'  => null,
			'bottom' => null,
			'left'   => null,
			'link'   => 1,
		);
		$value               = wp_parse_args( $value, $default );
		$new_value           = array();
		$new_value['unit']   = sanitize_text_field( $value['unit'] );
		$new_value['top']    = sanitize_text_field( $value['top'] );
		$new_value['right']  = sanitize_text_field( $value['right'] );
		$new_value['bottom'] = sanitize_text_field( $value['bottom'] );
		$new_value['left']   = sanitize_text_field( $value['left'] );
		$new_value['link']   = $value['link'] ? 1 : null;

		return $new_value;
	}

	private function sanitize_slider( $value ) {
		$default            = array(
			'unit'  => 'px',
			'value' => null,
		);
		$value              = wp_parse_args( $value, $default );
		$new_value          = array();
		$new_value['unit']  = sanitize_text_field( $value['unit'] );
		$new_value['value'] = sanitize_text_field( $value['value'] );

		return $new_value;
	}

	private function sanitize_checkbox( $value ) {
		if ( 1 == $value || 'on' == $value ) {
			$value = 1;
		} else {
			$value = 0;
		}

		return $value;
	}

	/**
	 * Sanitize color
	 *
	 * Output can be rgba or hex color code
	 *
	 * @param string $color
	 *
	 * @return string
	 */
	static function sanitize_color( $color ) {
		if ( empty( $color ) || is_array( $color ) ) {
			return '';
		}

		// If string does not start with 'rgba', then treat as hex.
		// sanitize the hex color and finally convert hex to rgba.
		if ( false === strpos( $color, 'rgba' ) ) {
			return sanitize_hex_color( $color );
		}

		// By now we know the string is formatted as an rgba color so we need to further sanitize it.
		$color = str_replace( ' ', '', $color );
		sscanf( $color, 'rgba(%d,%d,%d,%f)', $red, $green, $blue, $alpha );

		return 'rgba(' . $red . ',' . $green . ',' . $blue . ',' . $alpha . ')';
	}

	private function sanitize_media( $value ) {
		$value         = wp_parse_args(
			$value,
			array(
				'id'   => '',
				'url'  => '',
				'mime' => '',
			)
		);
		$value['id']   = sanitize_text_field( $value['id'] );
		$value['url']  = sanitize_text_field( $value['url'] );
		$value['mime'] = sanitize_text_field( $value['mime'] );

		return $value;
	}

	private function sanitize_icon( $value ) {
		$value                         = wp_parse_args(
			$value,
			array(
				'type' => '',
				'icon' => '',
			)
		);
		$value['type']                 = sanitize_text_field( $value['type'] );
		$value['icon']                 = sanitize_text_field( $value['icon'] );
		$this->icons[ $value['type'] ] = true;

		return $value;
	}

	private function sanitize_text_field_deep( $value, $html = false ) {
		if ( ! is_array( $value ) ) {
			$value = wp_kses_post( $value );
		} else {
			if ( is_array( $value ) ) {
				foreach ( $value as $k => $v ) {
					$value[ $k ] = $this->sanitize_text_field_deep( $v );
				}
			}
		}

		return $value;
	}

	private function sanitize_group( $value, $skip_device = false ) {

		if ( ! is_array( $value ) ) {
			$value = array();
		}
		foreach ( $this->control->fields as $field ) {
			if ( ! isset( $value[ $field['name'] ] ) ) {
				$value[ $field['name'] ] = '';
			}
			$_v                      = $value[ $field['name'] ];
			$_v                      = $this->sanitize( $_v, $field );
			$value[ $field['name'] ] = $_v;
		}

		return $value;
	}

	private function sanitize_repeater( $value ) {
		if ( ! is_array( $value ) ) {
			$value = array();
		}

		foreach ( $value as $k => $iv ) {
			foreach ( $this->control->fields as $field ) {

				if ( ! isset( $iv[ $field['name'] ] ) ) {
					$iv[ $field['name'] ] = '';
				}

				$_v                   = $iv[ $field['name'] ];
				$_v                   = $this->sanitize( $_v, $field );
				$iv[ $field['name'] ] = $_v;
			}

			$value[ $k ] = $iv;
		}

		return $value;
	}

	function sanitize( $value, $field = array() ) {

		$type            = null;
		$device_settings = false;
		if ( is_array( $field ) && ! empty( $field ) ) {
			if ( isset( $field['type'] ) ) {
				$type = $field['type'];
			} elseif ( isset( $field['setting_type'] ) ) {
				$type = $field['setting_type'];
			}

			if ( isset( $field['device_settings'] ) && $field['device_settings'] ) {
				$device_settings = true;
			}
		} else {
			$type            = $this->control->setting_type;
			$device_settings = $this->control->device_settings;
		}

		if ( 'js_raw' != $type ) {
			if ( ! $device_settings ) {
				// Fallback value when device_settings from tru to false.
				if ( is_array( $value ) && isset( $value['desktop'] ) ) {
					$value = $value['desktop'];
				}
			}
		}

		switch ( $type ) {
			case 'color':
				$has_device = false;
				if ( $device_settings && ! $this->skip_devices ) {
					if ( is_array( $value ) ) {
						foreach ( Hf()->customizer->devices as $device ) {
							if ( isset( $value[ $device ] ) ) {
								$has_device       = true;
								$value[ $device ] = $this->sanitize_color( $value[ $device ] );
							}
						}
					}
				}
				if ( ! $has_device ) {
					$value = $this->sanitize_color( $value );
				}
				break;
			case 'group':
				$has_device = false;
				if ( $device_settings ) {
					$this->skip_devices = true;
					if ( is_array( $value ) ) {
						$has_device = false;
						foreach ( Hf()->customizer->devices as $device ) {
							if ( isset( $value[ $device ] ) ) {
								$has_device       = true;
								$value[ $device ] = $this->sanitize_group( $value[ $device ] );
							}
						}
					}
					$this->skip_devices = false;
				}
				if ( ! $has_device ) {
					$value = $this->sanitize_group( $value );
				}
				break;
			case 'repeater':
				$has_device = false;
				if ( $device_settings && ! $this->skip_devices ) {
					if ( is_array( $value ) ) {
						$has_device = false;
						foreach ( Hf()->customizer->devices as $device ) {
							if ( isset( $value[ $device ] ) ) {
								$has_device       = true;
								$value[ $device ] = $this->sanitize_repeater( $value[ $device ] );
							}
						}
					}
				}
				if ( ! $has_device ) {
					$value = $this->sanitize_repeater( $value );
				}

				break;
			case 'media':
			case 'image':
			case 'attachment':
			case 'video':
			case 'autio':
				$has_device = false;
				if ( $device_settings && ! $this->skip_devices ) {
					if ( is_array( $value ) ) {
						$has_device = false;
						foreach ( Hf()->customizer->devices as $device ) {
							if ( isset( $value[ $device ] ) ) {
								$has_device       = true;
								$value[ $device ] = $this->sanitize_media( $value[ $device ] );
							}
						}
					}
				}
				if ( ! $has_device ) {
					$value = $this->sanitize_media( $value );
				}

				break;
			case 'select':
			case 'radio':
			case 'image_select':
			case 'radio_group':
				$default = null;
				$choices = array();
				if ( ! empty( $field ) ) {
					if ( isset( $field['default'] ) ) {
						$default = $field['default'];
					}

					if ( isset( $field['choices'] ) ) {
						$choices = $field['choices'];
					}
				} else {
					$default = $this->setting->default;
					$choices = $this->control->choices;
				}
				if ( ! is_array( $choices ) ) {
					$choices = array();
				}
				if ( ! $value ) {
					return '';
				}

				$has_device = false;
				if ( $device_settings && ! $this->skip_devices ) {
					if ( is_array( $value ) ) {
						$has_device = false;
						foreach ( Hf()->customizer->devices as $device ) {
							if ( isset( $value[ $device ] ) ) {
								$has_device = true;
								if ( ! isset( $choices[ (string) $value[ $device ] ] ) ) {
									if ( is_array( $default ) && isset( $default[ $device ] ) ) {
										$value[ $device ] = $default;
									} else {
										$value[ $device ] = $default;
									}
								}
							}
						}
					}
				}
				if ( ! $has_device ) {
					if ( is_array( $value ) || ! isset( $choices[ $value ] ) ) {
						$value = $default;
					}
				}

				break;
			case 'checkbox':
				$has_device = false;
				if ( $device_settings && ! $this->skip_devices ) {
					if ( is_array( $value ) ) {
						$has_device = false;
						foreach ( Hf()->customizer->devices as $device ) {
							if ( isset( $value[ $device ] ) ) {
								$has_device       = true;
								$value[ $device ] = $this->sanitize_checkbox( $value[ $device ] );
							}
						}
					}
				}
				if ( ! $has_device ) {
					$value = $this->sanitize_checkbox( $value );
				}

				break;
			case 'css_ruler':
				$has_device = false;
				if ( $device_settings && ! $this->skip_devices ) {
					if ( is_array( $value ) ) {
						$has_device = false;
						foreach ( Hf()->customizer->devices as $device ) {
							if ( isset( $value[ $device ] ) ) {
								$has_device       = true;
								$value[ $device ] = $this->sanitize_css_ruler( $value[ $device ] );
							}
						}
					}
				}
				if ( ! $has_device ) {
					$value = $this->sanitize_css_ruler( $value );
				}

				break;
			case 'slider':
				$has_device = false;
				if ( $device_settings && ! $this->skip_devices ) {
					if ( is_array( $value ) ) {
						$has_device = false;
						foreach ( Hf()->customizer->devices as $device ) {
							if ( isset( $value[ $device ] ) ) {
								$has_device       = true;
								$value[ $device ] = $this->sanitize_slider( $value[ $device ] );
							}
						}
					}
				}
				if ( ! $has_device ) {
					$value = $this->sanitize_slider( $value );
				}

				break;
			case 'icon':
				$has_device = false;
				if ( $device_settings && ! $this->skip_devices ) {
					if ( is_array( $value ) ) {
						$has_device = false;
						foreach ( Hf()->customizer->devices as $device ) {
							if ( isset( $value[ $device ] ) ) {
								$has_device       = true;
								$value[ $device ] = $this->sanitize_icon( $value[ $device ] );
							}
						}
					}
				}
				if ( ! $has_device ) {
					$value = $this->sanitize_icon( $value );
				}

				break;
			case 'js_raw':
				$value = $this->sanitize_text_field_deep( $value );
				break;
			case 'textarea':
				$value = $this->sanitize_text_field_deep( $value, true );
				break;
			default:
				$has_device = false;
				if ( $device_settings && ! $this->skip_devices ) {
					if ( is_array( $value ) ) {
						$has_device = false;
						foreach ( Hf()->customizer->devices as $device ) {
							if ( isset( $value[ $device ] ) ) {
								$has_device       = true;
								$value[ $device ] = $this->sanitize_text_field_deep( $value[ $device ] );
							}
						}
					}
				}
				if ( ! $has_device ) {
					$value = $this->sanitize_text_field_deep( $value );
				}
		}

		return $value;
	}
}



