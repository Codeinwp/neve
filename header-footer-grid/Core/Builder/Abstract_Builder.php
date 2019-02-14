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