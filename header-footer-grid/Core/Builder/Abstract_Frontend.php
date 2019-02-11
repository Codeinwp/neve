<?php
namespace HFG\Core\Builder;

abstract class Abstract_Frontend {
	protected $control_id = 'header_builder_panel';
	protected $id = 'header';
	protected $render_items = array();
	protected $rows = array();
	protected $data = false;
	protected $config_items = false;

	public function set_id( $id ) {
		$this->id   = $id;
		$this->data = null;
	}

	public function set_control_id( $id ) {
		$this->control_id = $id;
		$this->data       = null;
	}

	public function set_config_items( $config_items ) {
		$this->config_items = $config_items;
	}

	public function get_settings() {
		if ( $this->data ) {
			return $this->data;
		}
		$data = Customify()->get_setting( $this->control_id );
		$data = wp_parse_args(
			$data,
			array(
				'desktop' => '',
				'tablet'  => '',
				'mobile'  => '',
			)
		);

		foreach ( $data as $k => $v ) {
			if ( ! is_array( $v ) ) {
				$v = array();
			}
			$data[ $k ] = $v;
		}

		$this->data = $data;

		return $data;
	}
}