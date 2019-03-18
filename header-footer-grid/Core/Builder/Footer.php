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
	 * Number of sidebars to register.
	 */
	const FOOTER_SIDEBARS_LIMIT = 4;

	/**
	 * Footer constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function __construct() {
		$this->set_property( 'title', __( 'HFG Footer', 'hfg-module' ) );
		$this->set_property( 'control_id', 'hfg_footer_layout' );
		$this->set_property( 'panel', 'hfg_footer' );
		$this->set_property( 'remove_sections', [ 'neve_footer' ] );

		$this->devices = [
			'desktop' => 'Footer Layout',
		];
		$this->register_sidebars();
		add_action( 'hfg_footer_render', array( $this, 'footer_render' ) );
		add_filter( 'theme_mod_' . $this->control_id, array( $this, 'filter_defaults' ) );
	}

	/**
	 * Register footer sidebars.
	 */
	public function register_sidebars() {
		for ( $i = 1; $i <= self::FOOTER_SIDEBARS_LIMIT; $i ++ ) {
			register_sidebar(
				array(
					/* translators: 1: Widget number. */
					'name'          => sprintf( __( 'Footer Sidebar %d', 'hfg-module' ), $i ),
					'id'            => 'footer-' . $i,
					'description'   => __( 'Add widgets here.', 'hfg-module' ),
					'before_widget' => '<section id="%1$s" class="widget %2$s">',
					'after_widget'  => '</section>',
					'before_title'  => '<h4 class="widget-title">',
					'after_title'   => '</h4>',
				)
			);
		}
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
	 * Method to render a row.
	 *
	 * @since   1.0.0
	 * @access  protected
	 *
	 * @param array  $row Row list.
	 * @param string $html The HTML.
	 */
	public function render_row( $device_id, $row_id, $row_details ) {
		Main::get_instance()->load( 'row-wrapper' );
	}

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
