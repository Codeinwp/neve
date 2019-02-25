<?php
namespace HFG\Core\Builder;

use HFG\Core\Interfaces\Builder;
use HFG\Core\Interfaces\Component;
use WP_Customize_Manager;
use WP_Customize_Selective_Refresh;

abstract class Abstract_Builder implements Builder {

	protected $control_id;
	protected $panel;
	protected $section;
	protected $title;

	protected $devices = [
		'desktop' => 'Desktop',
		'mobile' => 'Mobile'
	];

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

	public function register_builder_hooks() {}

	public function customize_register( WP_Customize_Manager $wp_customize ) {
		if ( empty( $wp_customize->get_panel( $this->panel ) ) ) {

			$this->set_property( 'section', $this->control_id . '_section' );
			$builder_title = ( isset( $this->title ) && ! empty( $this->title ) ) ? $this->title : __( 'HFG Panel', 'hfg-module' );

			$wp_customize->add_panel( $this->panel, array(
				'priority' => 160,
				'capability' => 'edit_theme_options',
				'theme_supports' => 'hfg_support',
				'title' => $builder_title,
				'description' => '',
			) );

			$wp_customize->add_section( $this->section, array(
				'title'    => __( 'Header', 'hfg-module' ),
				'priority' => 299,
				'panel' => $this->panel,
			) );

			$wp_customize->add_setting( $this->control_id, array(
				'default'   => '',
				'transport' => 'postMessage',
			) );

			$wp_customize->selective_refresh->add_partial( $this->control_id . '_partial', array(
				'selector' => '.' . $this->panel,
				'settings' => array( $this->control_id ),
				'render_callback' => array( $this, 'render' )
			) );

			$wp_customize->add_control( $this->control_id, array(
				'section' => $this->control_id . '_section',
				'settings' => $this->control_id,
				'theme_supports' => 'hfg_support',
				'type'           => 'text',
			) );

		}

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
			'devices' => $this->devices,
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