<?php
namespace HFG\Core\Customizer;

use WP_Customize_Control;
use WP_Customize_Manager;

class Control {

	/**
	 * @var WP_Customize_Manager $wpc
	 */
	public $wpc;

	private  $id;

	public function __construct( WP_Customize_Manager $wpc ) {
		$this->wpc = $wpc;
		return $this;
	}

	private function create_setting( Customize_Setting $setting ) {
		$this->wpc->add_setting(
			$setting->id,
			$setting->setting_args()
		);
		return $setting;
	}

	private function create_control( string $control_id, Customize_Control $control ) {
		$control->id = $control_id;
		if ( $control->custom_control !== null && class_exists( $control->custom_control ) && $control->custom_control instanceof  WP_Customize_Control ) {
			$this->wpc->add_control( new $control->custom_control( $this->wpc, $control->id, $control->control_args ) );
		} else {
			$this->wpc->add_control(
				$control->id,
				$control->control_args
			);
		}
	}

	private function create_update_partial( Customize_Setting $setting ) {
		$tmp_partial = $this->wpc->selective_refresh->get_partial( $this->id . '_partial' );
		if ( $tmp_partial !== null ) {
			array_push( $tmp_partial->settings, $setting->id );
		}
	}

	public function create( int $control_id, Customize_Setting $setting, Customize_Control $control ) {
		$this->id = $control_id;
		$this->create_setting( $setting );
		$this->create_control( $control );
		$this->create_update_partial();
	}
}

class Customize_Control {
	public $id;
	public $label;
	public $description;
	public $priority;
	public $type;
	public $settings;
	public $choices;
	public $input_attrs;

	public function __construct( array $args ) {
		foreach ( $args as $key => $value ) {
			if ( ! property_exists( $this, $key ) ) {
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
}
