<?php
/**
 * Footer class for Header Footer Grid.
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
 * Class Footer
 *
 * @package HFG\Core\Builder
 */
class Footer extends Abstract_Builder {
	/**
	 * Builder name.
	 */
	const BUILDER_NAME = 'footer';

	/**
	 * Footer constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'title', __( 'Footer', 'neve' ) );
		$this->set_property( 'control_id', 'hfg_footer_layout' );
		$this->set_property( 'panel', 'hfg_footer' );
		$this->set_property( 'remove_sections', [ 'neve_footer' ] );

		$this->devices = [
			'desktop' => 'Footer Layout',
		];
		add_action( 'hfg_footer_render', array( $this, 'footer_render' ) );
		add_filter( 'theme_mod_' . $this->control_id, array( $this, 'filter_defaults' ) );
	}

	/**
	 * Default data.
	 *
	 * @return array Default data.
	 */
	public function define_defaults() {
		return Settings::get_instance()->get_footer_defaults_neve();
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
			return json_encode( Settings::get_instance()->get_footer_defaults_neve() );
		}

		return $theme_mod;
	}

	/**
	 * Method called via hook.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function footer_render() {

		Main::get_instance()->load( 'footer-wrapper' );
	}

	/**
	 * Render builder row.
	 *
	 * @param string $device_id The device id.
	 * @param string $row_id The row id.
	 * @param array  $row_details Row data.
	 */
	public function render_row( $device_id, $row_id, $row_details ) {
		Main::get_instance()->load( 'footer-row-wrapper' );
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
	 * Overrides parent method to limit rows.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @return array
	 */
	protected function get_rows() {
		return [
			'top'    => 'Footer Top',
			'bottom' => 'Footer Bottom',
		];
	}
}
