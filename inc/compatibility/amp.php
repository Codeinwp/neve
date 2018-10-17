<?php
/**
 * AMP Compatibility.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/10/2018
 *
 * @package Amp.php
 */

namespace Neve\Compatibility;

/**
 * Class Amp
 *
 * @package Neve\Compatibility
 */
class Amp {
	/**
	 * Run the hooks and filters.
	 */
	public function init() {
		add_filter( 'neve_nav_data_attrs', array( $this, 'add_nav_attrs' ) );
		add_filter( 'neve_nav_toggle_data_attrs', array( $this, 'add_nav_toggle_attrs' ) );
		add_filter( 'neve_woocommerce_sidebar_filter_btn_data_attrs', array( $this, 'add_woo_sidebar_filter_btn_attrs' ) );
		add_filter( 'neve_shop-sidebar_data_attrs', array( $this, 'add_woo_sidebar_attrs' ) );
		add_action( 'wp_head', array( $this, 'render_amp_states' ) );
	}

	/**
	 * Add amp states to the dom.
	 */
	public function render_amp_states() {
		if ( ! neve_is_amp() ) {
			return;
		}

		echo '<amp-state id="nvAmpMenuExpanded">';
		echo '<script type="application/json">false</script>';
		echo '</amp-state>';

		echo '<amp-state id="nvAmpWooSidebarExpanded">';
		echo '<script type="application/json">false</script>';
		echo '</amp-state>';
	}

	/**
	 * Add navigation data attributes.
	 *
	 * @param string $input the data attrs already existing in the nav.
	 *
	 * @return string
	 */
	public function add_nav_attrs( $input ) {
		if ( ! neve_is_amp() ) {
			return $input;
		}
		$input .= ' [class]="( nvAmpMenuExpanded ? \'nv-navbar responsive-opened\' : \'\' )" ';
		$input .= ' aria-expanded="false" [aria-expanded]="nvAmpMenuExpanded ? \'true\' : \'false\'" ';

		return $input;
	}

	/**
	 * Add the nav toggle data attributes.
	 *
	 * @param string $input the data attrs already existing in nav toggle.
	 *
	 * @return string
	 */
	public function add_nav_toggle_attrs( $input ) {
		if ( ! neve_is_amp() ) {
			return $input;
		}
		$input .= ' on="tap:AMP.setState( { nvAmpMenuExpanded: ! nvAmpMenuExpanded } )" ';
		$input .= ' [class]="\'navbar-toggle\' + ( nvAmpMenuExpanded ? \' active\' : \'\' )" ';
		$input .= ' aria-expanded="false" ';
		$input .= ' [aria-expanded]="nvAmpMenuExpanded ? \'true\' : \'false\'" ';

		return $input;
	}

	/**
	 * Add filter button amp attrs.
	 *
	 * @param string $input input.
	 *
	 * @return string
	 */
	public function add_woo_sidebar_filter_btn_attrs( $input ) {
		if ( ! neve_is_amp() ) {
			return $input;
		}

		$input .= ' on="tap:AMP.setState( { nvAmpWooSidebarExpanded: ! nvAmpWooSidebarExpanded } )" ';

		return $input;
	}

	/**
	 * Add woo sidebar amp attrs.
	 *
	 * @param string $input input.
	 *
	 * @return string
	 */
	public function add_woo_sidebar_attrs( $input ) {
		$input .= ' [class]="\'nv-sidebar-wrap col-sm-12 left shop-sidebar \' + ( nvAmpWooSidebarExpanded ? \'sidebar-open\' : \'\' )" ';
		$input .= ' aria-expanded="false" [aria-expanded]="nvAmpWooSidebarExpanded ? \'true\' : \'false\'" ';

		return $input;
	}
}
