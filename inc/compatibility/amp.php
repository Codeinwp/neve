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
		add_filter( 'neve_nav_toggle_data_attrs', array( $this, 'add_nav_toggle_attrs' ) );
		add_filter( 'neve_caret_wrap_filter', array( $this, 'amp_dropdowns' ), 10, 2 );
		add_filter( 'neve_body_data_attrs', array( $this, 'add_body_attributes' ) );

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
		add_filter( 'neve_search_menu_item_filter', array( $this, 'add_search_menu_item_attrs' ), 10 );
		add_action( 'neve_after_header_hook', array( $this, 'render_amp_states' ) );
	}

	/**
	 * Add amp parameters for menu child search icon.
	 *
	 * @param string $input Search menu item wrapper markup.
	 *
	 * @return string
	 */
	public function add_search_menu_item_attrs( $input ) {
		if ( ! neve_is_amp() ) {
			return $input;
		}

		$wrapper = 'class="neve-nav-search-icon" on="tap:nv-menu-item-search.toggleClass(class=\'active\')" ';

		$output = str_replace( 'class="nv-nav-search-icon"', $wrapper, $input );

		return $output;
	}

	/**
	 * Add body attributes to make sure sidebar works fine.
	 *
	 * @param string $input the incoming string.
	 *
	 * @return string
	 */
	public function add_body_attributes( $input ) {
		if ( ! neve_is_amp() ) {
			return $input;
		}

		$input .= ' id="neve_body" ';

		return $input;
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
		$input .= ' on="tap:neve_body.toggleClass(class=\'is-menu-sidebar\'),AMP.setState( { nvAmpMenuExpanded: ! nvAmpMenuExpanded } )" ';
		$input .= ' role="button" ';
		$input .= ' tabindex="0" ';
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
		$input .= ' tabindex="0" ';

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
		$input .= ' tabindex="0" ';

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
		$caret = '<span class="caret"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span>';

		$attrs .= '<div class="caret-wrap amp-desktop-caret-wrap">' . $caret . '</div></a><amp-state id="' . $state . '"><script type="application/json">false</script></amp-state>';
		$attrs .= '<div class="caret-wrap amp-caret-wrap"';
		$attrs .= ' [class]="\'caret-wrap amp-caret-wrap\' + ( ' . $state . ' ? \' dropdown-open\' : \'\')" ';
		$attrs .= ' on="tap:AMP.setState( { ' . $state . ': ! ' . $state . ' } )"';
		$attrs .= ' role="button" ';
		$attrs .= ' tabindex="0" ';
		$attrs .= ' aria-expanded="false" ';
		$attrs .= ' [aria-expanded]="' . $state . ' ? \'true\' : \'false\'">' . $caret . '</div>';
		$output = str_replace( '<div class="caret-wrap ' . $id . '" tabindex="0">' . $caret . '</div></a>', $attrs, $output );

		return $output;
	}
}
