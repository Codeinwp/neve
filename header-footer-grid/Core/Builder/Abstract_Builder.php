<?php
namespace HFG\Core\Builder;

use HFG\Core\Interfaces\Builder;
use HFG\Core\Interfaces\Component;
use WP_Customize_Manager;

abstract class Abstract_Builder implements Builder {

	protected $control_id;
	protected $panel;
	protected $section;

	protected $builder_components = array();

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

	public function register_builder_hooks() {
		if ( is_admin() ) {

			add_action( 'wp_ajax_customify_builder_save_template', array( $this, 'ajax_save_template' ) );
			add_action( 'wp_ajax_customify_builder_export_template', array( $this, 'ajax_export_template' ) );
		}
	}

	public function ajax_save_template() {
		if ( ! current_user_can( 'edit_theme_options' ) ) {
			wp_send_json_error( __( 'Access denied', 'hfg-module' ) );
		}

		$id        = isset( $_POST['id'] ) ? sanitize_text_field( $_POST['id'] ) : false;
		$control   = isset( $_POST['control'] ) ? sanitize_text_field( $_POST['control'] ) : '';
		$save_name = isset( $_POST['name'] ) ? sanitize_text_field( $_POST['name'] ) : '';
		if ( ! $save_name ) {
			$save_name = sprintf( __( 'Saved %s', 'hfg-module' ), date_i18n( 'Y-m-d H:i:s' ) );
		}
		$fn = false;
//		if ( ! isset( $this->builder_components[ $id ] ) ) {
//			wp_send_json_error( __( 'No Support', 'hfg-module' ) );
//		} else {
//			$fn = array( $this->builder_components[ $id ], 'customize_register' );
//		}

		$template_section = $this->panel . '_template_section';
		$theme_name  = wp_get_theme()->get( 'Name' );
		$option_name = "{$theme_name}_{$template_section}_setting";

		$saved_templates = get_option( $option_name );
		if ( ! is_array( $saved_templates ) ) {
			$saved_templates = array();
		}

		if ( isset( $_POST['remove'] ) ) {
			$remove = sanitize_text_field( $_POST['remove'] );
			if ( isset( $saved_templates[ $remove ] ) ) {
				unset( $saved_templates[ $remove ] );
			}

			update_option( $option_name, $saved_templates );
			wp_send_json_success();
		}

		$config            = call_user_func_array( $fn, array() );
		$new_template_data = array();

		foreach ( $config as $k => $field ) {
			if ( 'panel' != $field['type'] && 'section' != $field['type'] ) {
				$name  = $field['name'];
				$value = get_theme_mod( $name );
				if ( is_array( $value ) ) {
					$value = array_filter( $value );
				}
				if ( $value && ! empty( $value ) ) {
					$new_template_data[ $name ] = $value;
				}
			}
		}

		if ( ! $save_name ) {
			$key_id    = date_i18n( 'Y-m-d H:i:s', current_time( 'timestamp' ) );
			$save_name = sprintf( __( 'Saved %s', 'hfg-module' ), $key_id );
		} else {
			$key_id = $save_name;
		}

		$saved_templates[ $key_id ] = array(
			'name'  => $save_name,
			'image' => '',
			'data'  => $new_template_data,
		);

		update_option( $option_name, $saved_templates );
		$html = '<li class="saved_template li-boxed" data-control-id="' . esc_attr( $control ) . '" data-id="' . esc_attr( $key_id ) . '" data-data="' . esc_attr( wp_json_encode( $new_template_data ) ) . '">' . esc_html( $save_name ) . ' <a href="#" class="load-tpl">' . __( 'Load', 'hfg-module' ) . '</a><a href="#" class="remove-tpl">' . __( 'Remove', 'hfg-module' ) . '</a></li>';
		wp_send_json_success(
			array(
				'key_id' => $key_id,
				'name'   => $save_name,
				'li'     => $html,
			)
		);
		die();
	}

	private function generate_template_html( $template_section = '' ) {
		$theme_name  = wp_get_theme()->get( 'Name' );
		$option_name = "{$theme_name}_{$template_section}_setting";

		$saved_templates = get_option( $option_name );
		if ( ! is_array( $saved_templates ) ) {
			$saved_templates = array();
		}

		$saved_templates = array_reverse( $saved_templates );

		$n = count( $saved_templates );

		$html = '';
		$html .= '<span class="customize-control-title">' . __( 'Saved Templates', 'hfg-module' ) . '</span>';
		$html .= '<ul class="list-saved-templates list-boxed ' . ( $n > 0 ? 'has-templates' : 'no-templates' ) . '">';
		if ( count( $saved_templates ) > 0 ) {
			foreach ( $saved_templates as $key => $tpl ) {
				$tpl = wp_parse_args(
					$tpl,
					array(
						'name' => '',
						'data' => '',
					)
				);
				if ( ! $tpl['name'] ) {
					$name = __( 'Untitled', 'customify' );
				} else {
					$name = $tpl['name'];
				}
				$html .= '<li class="saved_template li-boxed" data-control-id="' . esc_attr( $template_section . '_save' ) . '" data-id="' . esc_attr( $key ) . '" data-data="' . esc_attr( json_encode( $tpl['data'] ) ) . '">' . esc_html( $name ) . ' <a href="#" class="load-tpl">' . __( 'Load', 'hfg-module' ) . '</a><a href="#" class="remove-tpl">' . __( 'Remove', 'hfg-module' ) . '</a></li>';
			}
		}

		$html .= '<li class="no_template">' . __( 'No saved templates.', 'customify' ) . '</li>';

		$html .= '</ul>';
		$html .= '</div>';
		return $html;
	}

	public function customize_register( WP_Customize_Manager $wp_customize ) {
		if ( empty( $wp_customize->get_panel( $this->panel ) ) ) {
			$wp_customize->add_panel( $this->panel, array(
				'priority' => 160,
				'capability' => 'edit_theme_options',
				'theme_supports' => 'hfg_support',
				'title' => __( 'HFG Panel', 'hfg-module' ),
				'description' => '',
			) );
		}

		$template_section = $this->panel . '_template_section';

		$html = $this->generate_template_html( $template_section );

		$wp_customize->add_section( $template_section, array(
			'title'    => __( 'Templates', 'hfg-module' ),
			'priority' => 299,
			'panel' => $this->panel,
		) );

		$wp_customize->add_setting( $template_section . '_setting' , array(
			'default'   => '',
			'transport' => 'refresh',
		) );

		$wp_customize->add_control( $template_section . '_save', array(
			'section' => $template_section,
			'settings' => $template_section . '_setting',
			'theme_supports' => 'hfg_support',
			'type'           => 'hidden',
			'title'          => __( 'Save Template', 'hfg-module' ),
			'description'    => '<div class="save-template-form"><input type="text" data-builder-id="header" data-control-id="' . esc_attr( $template_section . '_save' ) . '" class="template-input-name change-by-js"><button class="button button-secondary save-builder-template" type="button">' . esc_html__( 'Save', 'hfg-module' ) . '</button></div>' . $html
		) );

		/**
		 * @var Component $component
		 */
		foreach ( $this->builder_components as $component ) {
			$component->customize_register( $wp_customize );
		}
	}

	public function register_component( $component_to_add ) {

		if ( ! class_exists( $component_to_add ) ||  ! in_array( 'HFG\Core\Interfaces\Component', class_implements( $component_to_add ) ) ) {
			return false;
		}

		/**
		 * @var Component $component
		 */
		$component = new $component_to_add( $this->panel );
		$this->builder_components[$component->get_id()] = $component;
		return true;
	}

	public function get_components() {
		return $this->builder_components;
	}

	public function get_components_settings() {
		$components_settings = array();
		/**
		 * @var Component $component
		 */
		foreach ( $this->builder_components as $component ) {
			$components_settings[$component->get_id()] = $component->get_settings();
		}
		return $components_settings;
	}

	public function get_builder() {
		return array(
			'id' => 'header',
			'control_id' => $this->control_id,
			'version_id' => $this->control_id,
			'panel' => $this->panel,
			'section' => $this->section,
			'versions' => [
				'v1' => [
					'control_id' => 'neve_navigation_layout',
					'label' => 'V1'
				],
			],
			'devices' => [
				'desktop' => 'Desktop',
				'mobile' => 'Mobile'
			],
			'items' => $this->get_components_settings(),
			'rows' => [
				'top' => 'Header Top',
				'main' => 'Header Main',
				'bottom' => 'Header Bottom',
				'sidebar' => 'Menu Sidebar',
			],
		);
	}
}