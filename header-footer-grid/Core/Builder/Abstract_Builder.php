<?php
namespace HFG\Core\Builder;

use HFG\Core\Customizer\Google_Font_Control;
use HFG\Core\Customizer\Image_Radio_Control;
use HFG\Core\Customizer\Select_Control;
use HFG\Core\Customizer\Slider_Control;
use HFG\Core\Interfaces\Builder;
use HFG\Core\Interfaces\Component;
use HFG\Core\Settings;
use WP_Customize_Manager;

abstract class Abstract_Builder implements Builder {

	protected $control_id;
	protected $panel;
	protected $section;
	protected $title;

	protected $remove_panels = [];
	protected $remove_sections = [];

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
		if ( ! empty( $this->remove_panels ) ) {
			foreach ( $this->remove_panels as $panel_to_remove ) {
				$wp_customize->remove_panel( $panel_to_remove );
			}
		}

		if ( ! empty( $this->remove_sections ) ) {
			foreach ( $this->remove_sections as $section_to_remove ) {
				$wp_customize->remove_section( $section_to_remove );
			}
		}

		if ( empty( $wp_customize->get_panel( $this->panel ) ) ) {
			$this->set_property( 'section', $this->control_id . '_section' );
			$builder_title = ( isset( $this->title ) && ! empty( $this->title ) ) ? $this->title : __( 'HFG Panel', 'hfg-module' );

			$wp_customize->add_panel( $this->panel, array(
				'priority' => 25,
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

			$this->add_rows_controls( $wp_customize );
		}

		/**
		 * @var Component $component
		 */
		foreach ( $this->builder_components as $component ) {
			$component->customize_register( $wp_customize );
		}
	}

	protected function add_rows_controls( WP_Customize_Manager $wp_customize ) {
		$rows = $this->get_rows();
		if ( empty( $rows ) ) {
			return;
		}

		$settings = Settings::get_instance();
		foreach ( $rows as $row_id => $row_label ) {
			$wp_customize->add_section( $this->control_id . '_' . $row_id, array(
				'title'    => $row_label,
				'priority' => 100,
				'panel' => $this->panel,
			) );

			$wp_customize->add_setting( $this->control_id . '_' . $row_id, array(
				'default'   => '',
				'transport' => 'postMessage',
			) );

			$wp_customize->add_setting( $this->control_id . '_' . $row_id . '_layout',
				array(
					'default' => 'layout-full-contained',
					'theme_supports'  => 'hfg_support',
					'transport' => 'postMessage',
				)
			);
			$wp_customize->add_control( new Select_Control(
				$wp_customize,
				$this->control_id . '_' . $row_id . '_layout',
				[
					'label' => __( 'Layout', 'hfg-module' ),
					'section'  => $this->control_id . '_' . $row_id,
					'input_attrs' => array(
						'placeholder' => __( 'Select layout type ...', 'hfg-module' ),
						'multiselect' => false,
					),
					'choices' => array(
						'layout-full-contained' => __( 'Full Width - Contained', 'hfg-module' ),
						'layout-fullwidth' => __( 'Full Width', 'hfg-module' ),
						'layout-contained' => __( 'Contained', 'hfg-module' ),
					)
				]
			) );

			$wp_customize->add_setting( $this->control_id . '_' . $row_id . '_height',
				array(
					'default' => 0,
					'theme_supports'  => 'hfg_support',
					'transport' => 'postMessage',
				)
			);
			$wp_customize->add_control( new Slider_Control(
				$wp_customize,
				$this->control_id . '_' . $row_id . '_height',
				[
					'label' => esc_html__( 'Row Height' ),
					'section'  => $this->control_id . '_' . $row_id,
					'input_attrs' => array(
						'min' => 0,
						'max' => 300,
						'step' => 1,
					),
				]
			) );

			$wp_customize->add_setting( $this->control_id . '_' . $row_id . '_skin',
				array(
					'default' => 'light-mode',
					'theme_supports'  => 'hfg_support',
					'transport' => 'postMessage',
				)
			);
			$wp_customize->add_control( new Image_Radio_Control(
				$wp_customize,
				$this->control_id . '_' . $row_id . '_skin',
				[
					'label' => __( 'Skin Mode' ),
					'section' => $this->control_id . '_' . $row_id,
					'choices' => array(
						'light-mode' => array(
							'image' => $settings->url . '/assets/images/customizer/text_mode_dark.svg',
							'name' => __( 'Light Mode' )
						),
						'dark-mode' => array(
							'image' => $settings->url . '/assets/images/customizer/text_mode_light.svg',
							'name' => __( 'Dark Mode' )
						),
					)
				]
			) );

			$wp_customize->add_setting( $this->control_id . '_' . $row_id . '_font_select',
				array(
					'default' => json_encode(
						array(
							'font' => 'Open Sans',
							'regularweight' => 'regular',
							'italicweight' => 'italic',
							'boldweight' => '700',
							'category' => 'sans-serif'
						)
					),
					'sanitize_callback' => ''
				)
			);

			$wp_customize->add_control( new Google_Font_Control(
				$wp_customize,
				$this->control_id . '_' . $row_id . '_font_select',
				[
					'label' => __( 'Row Font Control', 'hfg-module' ),
					'description' => esc_html__( 'Select a Google Font to use for this row.', 'hfg-module' ),
					'section' => $this->control_id . '_' . $row_id,
					'input_attrs' => array(
						'font_count' => 'all',
						'orderby' => 'alpha',
					),
				]
			) );

			$wp_customize->selective_refresh->add_partial( $this->control_id . '_' . $row_id . '_partial', array(
				'selector' => '.' . $this->panel,
				'settings' => array(
					$this->control_id . '_' . $row_id,
					$this->control_id . '_' . $row_id . '_layout' ,
					$this->control_id . '_' . $row_id . '_height' ,
					$this->control_id . '_' . $row_id . '_skin' ,
					$this->control_id . '_' . $row_id . '_font_select' ,
				),
				'render_callback' => array( $this, 'render' )
			) );
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

	protected function get_rows() {
		return [
			'top' => 'Header Top',
			'main' => 'Header Main',
			'bottom' => 'Header Bottom',
			'sidebar' => 'Menu Sidebar',
		];
	}

	public final function get_builder() {
		return array(
			'id' => $this->control_id,
			'control_id' => $this->control_id,
			'panel' => $this->panel,
			'section' => $this->section,
			'devices' => $this->devices,
			'items' => $this->get_components_settings(),
			'rows' => $this->get_rows(),
		);
	}
}