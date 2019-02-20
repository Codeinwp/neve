<?php
namespace HFG\Core;

use HFG\Core\Customizer\Control_Base;
use HFG\Core\Interfaces\Component;
use WP_Customize_Manager;

abstract class Abstract_Component implements Component {

	protected $id;
	protected $section;
	protected $column;
	protected $row;
	protected $width;
	protected $name;
	protected $label;
	protected $priority;
	protected $panel;

	public function get_settings() {
		return array(
			'name'    => $this->label,
			'id'      => $this->id,
			'col'     => $this->column,
			'row'     => $this->row,
			'width'   => $this->width,
			'section' => $this->section, // Customizer section to focus when click settings.
		);
	}

	public function get_id() {
		return $this->id;
	}

	protected function set_property( $key = '', $value = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}
		$this->$key = $value;
		return true;
	}

	public function get_property( $key = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}

		return $this->$key;
	}

	public function customize_register( WP_Customize_Manager $wp_customize ) {
		return $wp_customize;
	}

	protected function add_settings_and_controls( WP_Customize_Manager $wp_customize, $configs = array() ) {
		foreach ( $configs as $args ) {

			$args = wp_parse_args( $args, array(
				'title' => null,
				'render_callback' => null,
				'render' => null,
				'default' => null,
				'theme_supports' => null,
				'field_class' => null,
				'sanitize_callback' => null,
				'sanitize_js_callback' => null,
				'type' => null,
				'mod' => null,
			) );

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

			$settings_args['default'] = apply_filters( 'hfg/customize/settings-default', $args['default'], $args['name'] );

			$settings_args['transport'] = 'refresh';
//			if ( ! $settings_args['sanitize_callback'] ) {
//				$settings_args['sanitize_callback'] = array(
//					'Customify_Sanitize_Input',
//					'sanitize_customizer_input',
//				);
//			}

			foreach ( $settings_args as $k => $v ) {
				unset( $args[ $k ] );
			}

			unset( $args['mod'] );
			$name = $args['name'];
			unset( $args['name'] );

			unset( $args['type'] );
			if ( ! isset( $args['label'] ) ) {
				$args['label'] = $args['title'];
			}

			$selective_refresh = null;
			if ( $args['selector'] && ( ( $args['render_callback'] || $args['render'] ) || $args['css_format'] ) ) {
				$selective_refresh = array(
					'selector'        => $args['selector'],
					'render_callback' => ( isset( $args['render'] ) ) ? $args['render'] : $args['render_callback'],
				);

				if ( isset( $args['css_format'] ) ) {
					$settings_args['transport'] = 'postMessage';
					$selective_refresh          = null;
				} else {
					$settings_args['transport'] = 'postMessage';
				}
			}
			unset( $args['default'] );

			$wp_customize->add_setting(
				$name,
				$settings_args
			);

			$control_class_name = 'Control_';
			$tpl_type           = str_replace( '_', ' ', $args['setting_type'] );
			$tpl_type           = str_replace( ' ', '_', ucfirst( $tpl_type ) );
			$control_class_name .= $tpl_type;
			$control_class_name = 'HFG\\Core\\Customizer\\' . $control_class_name;


//			var_dump( $args );
			//if ( 'js_raw' != $settings_args['type'] ) {
				if ( class_exists( $control_class_name ) ) {
					$wp_customize->add_control( new $control_class_name( $wp_customize, $name, $args ) );
				} else {
					$wp_customize->add_control( new Control_Base( $wp_customize, $name, $args ) );
				}
			//}

//			if ( $selective_refresh ) {
//				$s_id = $selective_refresh['render_callback'];
//				if ( is_array( $s_id ) ) {
//					if ( is_string( $s_id[0] ) ) {
//						$__id = $s_id[0] . '__' . $s_id[1];
//					} else {
//						$__id = get_class( $s_id[0] ) . '__' . $s_id[1];
//					}
//				} else {
//					$__id = $s_id;
//				}
//				if ( ! isset( $this->selective_settings[ $__id ] ) ) {
//					$this->selective_settings[ $__id ] = array(
//						'settings'            => array(),
//						'selector'            => $selective_refresh['selector'],
//						'container_inclusive' => ( strpos( $__id, 'Customify_Customizer_Auto_CSS' ) === false ) ? true : false,
//						'render_callback'     => $s_id,
//					);
//				}
//
//				$this->selective_settings[ $__id ]['settings'][] = $name;
//			}
		}
	}

	protected function get_setting() {}

	protected function set_setting() {}

	abstract public function render();
}