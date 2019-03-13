<?php
namespace HFG\Core\Customizer;

class Responsive_Setting {

	private $devices = array( 'desktop', 'tablet', 'mobile' );

	private $settings = array();

	public function __construct( $setting_name, $default = '', $devices = array() ) {

		if ( ! empty( $devices ) && is_array( $devices ) ) {
			$this->devices = $devices;
		}

		if ( $devices === false ) {
			$this->devices = array();

			$this->settings[ $setting_name ] = [
				'id'      => $setting_name,
				'default' => $default,
			];
		}

		foreach ( $this->devices as $device ) {
			$this->settings[ $setting_name . '_' . $device ] = [
				'id'      => $setting_name . '_' . $device,
				'default' => $default,
			];
		}

	}

	public function get_devices() {
		return $this->devices;
	}

	public function get_settings() {
		return $this->settings;
	}

	public function get_settings_id_array() {
		return array_column( $this->settings, 'id' );
	}
}
