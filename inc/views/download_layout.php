<?php
/**
 * Author:          Uriahs Victor
 * Created on:      14/07/2021 (d/m/y)
 *
 * @package Neve
 */
namespace Neve\Views;

/**
 * Class Download_Layout
 *
 * @package Neve\Views
 */
class Download_Layout extends Base_View {

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_do_download', array( $this, 'render_download_archive' ) );
	}

	/**
	 * Render the archive content.
	 *
	 * @param string $context the context provided in do_action.
	 */
	public function render_download_archive( $context ) {
		if ( $context !== 'archive' ) {
			return;
		}
		the_title();
		// edd_price( get_the_ID() );
	}

	/**
	 * Render the single download content.
	 *
	 * @param string $context the context provided in do_action.
	 */
	public function render_download_single( $context ) {
		if ( $context !== 'single' ) {
			return;
		}

	}   

}
