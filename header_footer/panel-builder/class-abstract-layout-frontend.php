<?php
/**
 * Abstract class builder frontend
 *
 * @since 0.2.7
 */
abstract class Hf_Abstract_Layout_Frontend {
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

	/**
	 * Set config items
	 *
	 * @param array $config_items Config items.
	 */
	public function set_config_items( $config_items ) {
		$this->config_items = $config_items;
	}

	/**
	 * Get Panel Settings Data
	 *
	 * @return array|bool
	 */
	function get_settings() {
		if ( $this->data ) {
			return $this->data;
		}
		$data = Hf()->get_setting( $this->control_id );
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

	/**
	 * Get settings for row
	 *
	 * @param string $row_id Row ID.
	 * @param string $device Device ID.
	 *
	 * @return bool
	 */
	public function get_row_settings( $row_id, $device = 'desktop' ) {
		$data = $this->get_settings();
		if ( isset( $data[ $device ] ) ) {
			if ( isset( $data[ $device ][ $row_id ] ) ) {
				return ! empty( $data[ $device ][ $row_id ] ) ? $data[ $device ][ $row_id ] : false;
			}
		}

		return false;
	}

	/**
	 * Sort items by their position on the grid.
	 *
	 * @param array $items List item to sort.
	 *
	 * @return  array
	 */
	private function _sort_items_by_position( $items = array() ) {
		$ordered_items = array();

		foreach ( $items as $key => $item ) {
			$ordered_items[ $key ] = $item['x'];
		}

		array_multisort( $ordered_items, SORT_ASC, $items );

		return $items;
	}

	/**
	 * Close item HTML markup
	 *
	 * @param string $class Icon class.
	 *
	 * @return string
	 */
	public function close_icon( $class = '' ) {
		$menu_sidebar_skin = Hf()->get_setting( 'header_sidebar_text_mode' );
		$close             = '<a class="close is-size-medium ' . $menu_sidebar_skin . esc_attr( $class ) . '" href="#">
        <span class="hamburger hamburger--squeeze is-active">
            <span class="hamburger-box">
              <span class="hamburger-inner"><span class="screen-reader-text">' . __( 'Menu', 'Hf' ) . '</span></span>
            </span>
        </span>
        <span class="screen-reader-text">' . __( 'Close', 'Hf' ) . '</span>
        </a>';

		return $close;
	}

	/**
	 * Setup Item content
	 *
	 * @todo Ensure item have not duplicate id
	 *
	 * @param string $content Content.
	 * @param string $id      ID.
	 * @param string $device  Device ID.
	 *
	 * @return mixed
	 */
	public function setup_item_content( $content, $id, $device ) {
		$content = str_replace( '__id__', $id, $content );
		$content = str_replace( '__device__', $device, $content );
		/**
		 *
		 * Ensure only one H! tag for the site title
		 *
		 * @since 0.2.3
		 */
		$content = str_replace( '__site_device_tag__', 'desktop' == $device ? 'h1' : 'h2', $content );

		return $content;
	}

	public function render( $row_ids = array( 'top', 'main', 'bottom' ) ) {

	}

}

