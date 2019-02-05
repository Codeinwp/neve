<?php

/**
 * Customizer Builder Panel Base.
 *
 * Extend this in other Builder Panel.
 */
class Hf_Customize_Builder_Panel {
	public $id = '';

	/**
	 * Get Rows Config
	 *
	 * @todo Set custom name for each row
	 *
	 * Available rows: top, main, bottom, sidebar.
	 *
	 * @return array
	 */
	public function get_rows_config() {
		return array();
	}

	/**
	 * Add add customize config for each row
	 *
	 * If you want to add config for special row e.g: `top`:
	 * You can add more method in your class example:
	 * function `row_top_config` for row `top` settings
	 * function `row_main_config` for row `main` settings
	 *
	 * @return array
	 */
	public function row_config() {
		return array();
	}

	/**
	 * Add customize settings for this panel if needed.
	 *
	 * @return array
	 */
	function customize() {
		return array();
	}

	/**
	 * Get builder items for this builder panel.
	 *
	 * @return array|mixed
	 */
	function get_items() {
		return Hf_Customize_Layout_Builder()->get_builder_items( $this->id );
	}

	/**
	 * Get all customize settings and register them into WP Customize
	 *
	 * @see Hf_Customizer::register()
	 *
	 * @param array $configs List configs.
	 * @param null  $wp_customize WP customize.
	 *
	 * @return array
	 */
	function _customize( $configs = array(), $wp_customize = null ) {
		if ( ! is_array( $configs ) ) {
			$configs = array();
		}
		$config = $this->customize( $wp_customize );
		$rows   = apply_filters( 'Hf/builder/' . $this->id . '/rows', $this->get_rows_config() );
		foreach ( $rows as $id => $name ) {
			$m = 'row_' . $id . '_config';
			if ( method_exists( $this, $m ) ) {
				$r      = call_user_func_array( array( $this, $m ), array( $this->id . '_' . $id, $name ) );
				$config = array_merge( $config, $r );
			} else {
				if ( method_exists( $this, 'row_config' ) ) {
					$config = array_merge( $config, $this->row_config( $this->id . '_' . $id, $name ) );
				}
			}
		}
		$items_config = Hf_Customize_Layout_Builder()->get_items_customize( $this->id, $wp_customize );
		if ( is_array( $items_config ) ) {
			$config = array_merge( $config, $items_config );
		}

		return array_merge( $configs, $config );
	}
}
