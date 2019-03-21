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

	/**
	 * Builder name.
	 */
	const BUILDER_NAME = 'header';

	/**
	 * Header init.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
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
	 * Method to add Header css styles.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param array $css_array An array containing css rules.
	 *
	 * @return array
	 */
	public function add_style( array $css_array = array() ) {
		$rows = $this->get_rows();
		if ( ! empty( $rows ) ) {
			foreach ( $rows as $row_index => $row_label ) {
				$css_array = $this->add_row_style( $row_index, $css_array );
			}
		}
		return parent::add_style( $css_array );
	}

	/**
	 * Method to generate css array for each row.
	 *
	 * @since   1.0.0
	 * @access  private
	 * @param string $row_index The row index.
	 * @param array  $css_array The css array.
	 *
	 * @return array
	 */
	private function add_row_style( $row_index, $css_array = array() ) {
		$layout_height = json_decode( get_theme_mod( $this->control_id . '_' . $row_index . '_height', '{ desktop: 0, tablet: 0, mobile: 0 }' ), true );
		if ( isset( $layout_height['mobile'] ) ) {
			$layout_height['mobile'] = ( $layout_height['mobile'] > 0 ) ? $layout_height['mobile'] . 'px' : 'auto';
			$css_array[' @media (max-width: 576px)'][ '.header-' . $row_index . '-inner' ] = array(
				'height' => $layout_height['mobile'],
			);
		}
		if ( isset( $layout_height['tablet'] ) ) {
			$layout_height['tablet'] = ( $layout_height['tablet'] > 0 ) ? $layout_height['tablet'] . 'px' : 'auto';
			$css_array[' @media (min-width: 576px)'][ '.header-' . $row_index . '-inner' ] = array(
				'height' => $layout_height['tablet'],
			);
		}
		if ( isset( $layout_height['desktop'] ) ) {
			$layout_height['desktop'] = ( $layout_height['desktop'] > 0 ) ? $layout_height['desktop'] . 'px' : 'auto';
			$css_array[' @media (min-width: 796px)'][ '.header-' . $row_index . '-inner' ] = array(
				'height' => $layout_height['desktop'],
			);
		}
		return $css_array;
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

	/**
	 * Get builder id.
	 *
	 * @return string Builder id.
	 */
	public function get_id() {
		return self::BUILDER_NAME;
	}

	/**
	 * Render builder row.
	 *
	 * @param string $device_id The device id.
	 * @param string $row_id The row id.
	 * @param array  $row_details Row data.
	 */
	public function render_row( $device_id, $row_id, $row_details ) {

		$name = $row_id;

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
}
