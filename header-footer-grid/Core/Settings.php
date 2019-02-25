<?php
namespace HFG\Core;

class Settings {

	private static $_instance = null;
	public $path;
	public $url;
	private static $config;
	private static $has_icon;
	private static $has_font;
	private $theme_support = array();

	public static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance    = new self();
			self::$_instance->path = get_template_directory() . '/header-footer-grid';
			self::$_instance->url = get_template_directory_uri() . '/header-footer-grid';
			self::$_instance->set();
		}
		return self::$_instance;
	}

	private function set() {
		$theme_support_defaults = array(
			'id' => 'header',
			'control_id' => 'neve_navigation_layout',
			'version_id' => 'neve_navigation_layout',
			'panel' => 'neve_header',
			'section' => '',
		);
		$theme_support = get_theme_support( 'hfg_config' );

		$settings = wp_parse_args( $theme_support, $theme_support_defaults );
		$this->theme_support = $settings;
	}

	public function get_theme_support() {
		return $this->theme_support;
	}

	public function get_config_defaults() {
		return array(
			'header_builder_panel'      => array(
				'desktop' =>
					array(
						'main' =>
							array(
								array(
									'x'      => '0',
									'y'      => '1',
									'width'  => '3',
									'height' => '1',
									'id'     => 'button_base',
								),

								array(
									'x'      => '3',
									'y'      => '1',
									'width'  => '9',
									'height' => '1',
									'id'     => 'primary-menu',
								),
							),
					),
				'mobile'  =>
					array(
						'main'    =>
							array(

								array(
									'x'      => '0',
									'y'      => '1',
									'width'  => '5',
									'height' => '1',
									'id'     => 'logo',
								),

								array(
									'x'      => '9',
									'y'      => '1',
									'width'  => '3',
									'height' => '1',
									'id'     => 'nav-icon',
								),
							),
						'sidebar' =>
							array(

								array(
									'x'      => '0',
									'y'      => '1',
									'width'  => '1',
									'height' => '1',
									'id'     => 'html',
								),

								array(
									'x'      => '0',
									'y'      => '1',
									'width'  => '1',
									'height' => '1',
									'id'     => 'primary-menu',
								),
							),
					),
			),
			'header_builder_version' => '',
			'header_top_height'         => array(
				'desktop' =>
					array(
						'unit'  => 'px',
						'value' => '33',
					),
				'tablet'  =>
					array(
						'unit'  => 'px',
						'value' => '',
					),
				'mobile'  =>
					array(
						'unit'  => 'px',
						'value' => '33',
					),
			),
			'header_main_height'        => array(
				'desktop' => array(
					'unit' => 'px',
					'value' => '90',
				),
				'tablet'  => array(
					'unit' => 'px',
					'value' => '',
				),
				'mobile'  => array(
					'unit' => 'px',
					'value' => '',
				),
			),
			'header_bottom_height'      => array(
				'desktop' => array(
					'unit' => 'px',
					'value' => '55',
				),
				'tablet'  => array(
					'unit' => 'px',
					'value' => '',
				),
				'mobile'  => array(
					'unit' => 'px',
					'value' => '',
				),
			),
			'header_sidebar_animate'    => 'menu_sidebar_dropdown',
			'header_nav-icon_align'     => array(
				'desktop' => 'right',
				'tablet'  => 'right',
				'mobile'  => 'right',
			),
			'header_primary-menu_align' => array(
				'desktop' => 'right',
				'tablet'  => '',
				'mobile'  => '',
			),
		);
	}

	public function get_config_default_by_key( $key ) {
		$defaults = $this->get_config_defaults();
		if ( isset( $defaults[ $key ] ) ) {
			return $defaults[ $key ];
		}
		return false;
	}

	public function get_settings( $name, $device = 'desktop', $key = false ) {
		$config    = $this->get_config();
		$get_value = null;
		if ( isset( $config[ 'setting|' . $name ] ) ) {
			$default = isset( $config[ 'setting|' . $name ]['default'] ) ? $config[ 'setting|' . $name ]['default'] : false;
			$default = apply_filters( 'hfg/customize/settings-default', $default, $name );

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

	private function sanitize_conf( $conf ) {
		return wp_parse_args(
			$conf,
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
				'sanitize_callback'    => array( 'HFG_Sanitize_Input', 'sanitize_customizer_input' ),
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
	}

	public function get_config( $wp_customize = null ) {
		if ( is_null( self::$config ) ) {
			$filter_config = apply_filters( 'hfg/customizer/config', array(), $wp_customize );
			foreach ( $filter_config as $conf ) {
				$conf = $this->sanitize_conf( $conf );

				if ( ! isset( $conf['type'] ) ) {
					$conf['type'] = null;
				}

				switch ( $conf['type'] ) {
					case 'panel':
						$filter_config[ 'panel|' . $conf['name'] ] = $conf;
						break;
					case 'section':
						$filter_config[ 'section|' . $conf['name'] ] = $conf;
						break;
					default:
						if ( 'icon' == $conf['type'] ) {
							self::$has_icon = true;
						}

						if ( 'font' == $conf['type'] ) {
							self::$has_font = true;
						}

						if ( isset( $conf['fields'] ) && ! in_array( $conf['type'], array( 'typography', 'styling', 'modal' ) ) ) {
							$types = wp_list_pluck( $conf['fields'], 'type' );
							if ( in_array( 'icon', $types ) ) {
								self::$has_icon = true;
							}

							if ( in_array( 'font', $types ) ) {
								self::$has_font = true;
							}
						}

						$filter_config[ 'setting|' . $conf['name'] ] = $conf;

				}
			}
			self::$config = $filter_config;
		}
		return self::$config;
	}

}