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
		add_filter( 'neve_caret_wrap_filter', array( $this, 'amp_dropdowns' ), 10, 2 );

		add_filter(
			'neve_woocommerce_sidebar_filter_btn_data_attrs',
			array(
				$this,
				'add_woo_sidebar_filter_btn_attrs',
			)
		);
		add_filter(
			'neve_filter_sidebar_close_button_data_attrs',
			array(
				$this,
				'sidebar_close_button_attrs',
			),
			10,
			2
		);
		add_filter( 'neve_sidebar_data_attrs', array( $this, 'add_woo_sidebar_attrs' ), 10, 2 );
		add_action( 'neve_after_header_hook', array( $this, 'render_amp_states' ) );
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
		$input .= ' [class]="( nvAmpMenuExpanded ? \'nv-navbar responsive-opened\' : \'nv-navbar\' )" ';
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
		$input .= ' role="button" ';
		$input .= ' tabindex="1" ';
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

		$input .= ' on="tap:AMP.setState( { nvAmpWooSidebarExpanded: true } )" ';
		$input .= ' role="button" ';
		$input .= ' tabindex="1" ';

		return $input;
	}

	/**
	 * Add woo sidebar amp attrs.
	 *
	 * @param string $input input.
	 * @param string $slug  sidebar slug.
	 *
	 * @return string
	 */
	public function add_woo_sidebar_attrs( $input, $slug ) {
		if ( ! neve_is_amp() ) {
			return $input;
		}
		if ( $slug !== 'shop-sidebar' ) {
			return $input;
		}

		$input .= ' [class]="\'nv-sidebar-wrap col-sm-12 left shop-sidebar \' + ( nvAmpWooSidebarExpanded ? \'sidebar-open\' : \'\' )" ';
		$input .= ' aria-expanded="false" [aria-expanded]="nvAmpWooSidebarExpanded ? \'true\' : \'false\'" ';

		return $input;
	}

	/**
	 * Add amp attributes to sidebar close button.
	 *
	 * @param string $input empty string.
	 * @param string $slug  sidebar slug.
	 *
	 * @return string
	 */
	public function sidebar_close_button_attrs( $input, $slug ) {
		if ( ! neve_is_amp() ) {
			return $input;
		}
		if ( $slug !== 'shop-sidebar' ) {
			return $input;
		}
		$input .= ' on="tap:AMP.setState( { nvAmpWooSidebarExpanded: false } )" ';
		$input .= ' role="button" ';
		$input .= ' tabindex="1" ';

		return $input;
	}

	/**
	 * Implement AMP integration on drop-downs.
	 *
	 * @param string $output the output.
	 * @param string $id     menu item order.
	 *
	 * @return mixed
	 */
	public function amp_dropdowns( $output, $id ) {
		// Bail if not AMP.
		if ( ! neve_is_amp() ) {
			return $output;
		}

		// Generate a unique id for drop-down items.
		$state = 'neveMenuItemExpanded' . $id;

		$attrs = '';

		$attrs .= '<div class="caret-wrap amp-desktop-caret-wrap"><span class="caret"></span></div></a><amp-state id="' . $state . '"><script type="application/json">false</script></amp-state>';
		$attrs .= '<div class="caret-wrap amp-caret-wrap"';
		$attrs .= ' [class]="\'caret-wrap amp-caret-wrap\' + ( ' . $state . ' ? \' dropdown-open\' : \'\')" ';
		$attrs .= ' on="tap:AMP.setState( { ' . $state . ': ! ' . $state . ' } )"';
		$attrs .= ' role="button" ';
		$attrs .= ' tabindex="1" ';
		$attrs .= ' aria-expanded="false" ';
		$attrs .= ' [aria-expanded]="' . $state . ' ? \'true\' : \'false\'"><span class="caret"></span></div>';

		$output = str_replace( '<div class="caret-wrap ' . $id . '"><span class="caret"></span></div></a>', $attrs, $output );

		return $output;
	}
}
