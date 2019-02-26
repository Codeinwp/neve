<?php
namespace HFG\Core;

class Settings {

	private static $_instance = null;
	public $path;
	public $url;
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
			'builders' => array(
				'HFG\Core\Builder\Header' => array(
					'HFG\Core\Components\Button',
					'HFG\Core\Components\ButtonTwo',
				)
			)
		);
		$theme_support = get_theme_support( 'hfg_support' );

		$settings = wp_parse_args( $theme_support, $theme_support_defaults );
		$this->theme_support = $settings;
	}

	public function get_theme_support() {
		return $this->theme_support;
	}

}