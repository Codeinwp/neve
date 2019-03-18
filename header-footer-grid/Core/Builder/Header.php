<?php
/**
 * Header class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Builder;

use HFG\Core\Settings;
use HFG\Main;

/**
 * Class Header
 *
 * @package HFG\Core\Builder
 */
class Header extends Abstract_Builder {


	const BUILDER_NAME = 'header';

	/**
	 * Header constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function __construct() {
		$this->set_property( 'title', __( 'HFG Header', 'hfg-module' ) );
		$this->set_property( 'control_id', 'hfg_header_layout' );
		$this->set_property( 'panel', 'hfg_header' );
		$this->set_property( 'remove_panels', [ 'neve_header' ] );

		add_action( 'hfg_header_render', array( $this, 'header_render' ) );
		add_filter( 'theme_mod_' . $this->control_id, array( $this, 'filter_defaults' ) );
	}

	/**
	 * Utility method to generate defaults for JS and regular PHP calls.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param string $theme_mod The name of the mod.
	 *
	 * @return false|mixed|string
	 */
	public function filter_defaults( $theme_mod ) {
		if ( empty( $theme_mod ) || ! $theme_mod || is_object( $theme_mod ) && empty( json_decode( json_encode( $theme_mod ), true ) ) ) {
			return Settings::get_instance()->get_header_defaults_neve();
		}

		return $theme_mod;
	}

	/**
	 * Method called via hook.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function header_render() {
		Main::get_instance()->load( 'header-wrapper' );
	}

	public function get_id() {
		return self::BUILDER_NAME;
	}

	public function render_row( $device_id, $row_id, $row_details ) {

		$name = '';

		if ( $row_id === 'sidebar' && $device_id === 'mobile' ) {
			$name = 'mobile';
		}
		Main::get_instance()->load( 'row-wrapper', $name );

	}

	/**
	 * Return  the builder rows.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @return array
	 */
	protected function get_rows() {
		return [
			'top'     => 'Header Top',
			'main'    => 'Header Main',
			'bottom'  => 'Header Bottom',
			'sidebar' => 'Menu Sidebar',
		];
	}

	/**
	 * Utility function to sort items by x.
	 *
	 * @since   1.0.0
	 * @access  private
	 *
	 * @param array $items List of items.
	 *
	 * @return array
	 */
	private function _sort_items_by_position( $items = array() ) {
		$ordered_items = array();

		foreach ( $items as $key => $item ) {
			$ordered_items[ $key ] = $item['x'];
		}

		array_multisort( $ordered_items, SORT_ASC, $items );

		return $items;
	}
}
