<?php
namespace HFG\Core;

class Settings {

	private static $_instance = null;
	private $theme_support = array();

	public static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance    = new self();
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
									'id'     => 'logo',
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

	}

}