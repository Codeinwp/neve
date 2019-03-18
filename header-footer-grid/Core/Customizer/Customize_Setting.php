<?php
namespace HFG\Core\Customizer;


class Customize_Setting {
	public $id;
	private $type = 'theme_mod';
	private $theme_supports = 'hfg_support';
	private $capability = 'edit_theme_options';
	private $default = '';
	private $transport = 'refresh';
	private $sanitize_callback = null;
	private $sanitize_js_callback = null;

	/**
	 * Customize_Setting constructor.
	 *
	 * @param array $args
	 * @sets $type
	 */
	public function __construct( array  $args ) {
		foreach ( $args as $key => $value ) {
			if ( property_exists( $this, $key ) ) {
				$this->$key = $value;
			}
		}
	}

	public function get_property( $key = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return null;
		}
		return $this->$key;
	}

	public function setting_args() {
		return array(
			'default' => $this->default,
			'type' => $this->type,
			'capability' => $this->capability,
			'theme_supports' => $this->theme_supports,
			'transport' => $this->transport,
			'sanitize_callback' => $this->sanitize_callback,
			'sanitize_js_callback' => $this->sanitize_js_callback,
		);
	}

}