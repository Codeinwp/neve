<?php
namespace HFG\Core\Customizer;

class Settings_Manager {

	protected $settings = array();

	public function __construct() {}

	public function register( Customize_Setting $setting ) {
		$this->settings[ $setting->id ] = $setting;
	}

	public function get( $id ) {
		if ( isset( $this->settings[ $id ] ) && $this->settings[ $id ] instanceof Customize_Setting ) {
			return $this->settings[ $id ];
		}
		return null;
	}
}
