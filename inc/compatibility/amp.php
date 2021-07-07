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
	public function register_hooks() {
		if ( ! neve_is_amp() ) {
			return;
		}
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
		add_filter( 'walker_nav_menu_start_el', array( $this, 'wrap_content' ), 10, 4 );
		add_filter( 'neve_sidebar_data_attrs', array( $this, 'add_woo_sidebar_attrs' ), 10, 2 );
		add_filter( 'neve_search_menu_item_filter', array( $this, 'add_search_menu_item_attrs' ), 10, 2 );
		add_action( 'neve_after_header_hook', array( $this, 'render_amp_states' ) );
		add_filter( 'neve_nav_toggle_data_attrs', array( $this, 'add_nav_toggle_attrs' ) );


		add_action( 'wp_head', [ $this, 'add_amp_experiments' ], 1 );

		$pagination_type = get_theme_mod( 'neve_pagination_type', 'number' );
		if ( $pagination_type === 'infinite' ) {
			remove_all_actions('neve_do_pagination');
			add_action( 'neve_do_pagination', [ $this, 'add_amp_pagination'] );
		}
	}

	/**
	 *
	 */
	public function add_amp_pagination() {
		$prev_text = sprintf(
			'%s <span class="nav-prev-text">%s</span>',
			'<span aria-hidden="true">&larr;</span>',
			__( 'Newer <span class="nav-short">Posts</span>', 'twentytwenty' )
		);
		$next_text = sprintf(
			'<span class="nav-next-text">%s</span> %s',
			__( 'Older <span class="nav-short">Posts</span>', 'twentytwenty' ),
			'<span aria-hidden="true">&rarr;</span>'
		);

		$posts_pagination = get_the_posts_pagination(
			array(
				'mid_size'  => 1,
				'prev_text' => $prev_text,
				'next_text' => $next_text,
			)
		);

		// If we're not outputting the previous page link, prepend a placeholder with visibility: hidden to take its place.
		if ( strpos( $posts_pagination, 'prev page-numbers' ) === false ) {
			$posts_pagination = str_replace( '<div class="nav-links">', '<div class="nav-links"><span class="prev page-numbers placeholder" aria-hidden="true">' . $prev_text . '</span>', $posts_pagination );
		}

		// If we're not outputting the next page link, append a placeholder with visibility: hidden to take its place.
		if ( strpos( $posts_pagination, 'next page-numbers' ) === false ) {
			$posts_pagination = str_replace( '</div>', '<span class="next page-numbers placeholder" aria-hidden="true">' . $next_text . '</span></div>', $posts_pagination );
		}

		if ( $posts_pagination ) {

			if( ! is_paged() ) {

				$pages = array_filter( array_map(
					static function( $link ) {
						if ( preg_match( '#<a.+?href="(.+?)">(.+?)</a>#s', $link, $matches ) ) {
							$amp_url = html_entity_decode( $matches[1] );
							$title   = html_entity_decode( $matches[2] );
							return [
								'url'    => $amp_url,
								'title'  => $title,
								'image'  => get_site_icon_url()
							];
						}
						return null;
					},
					paginate_links( [ 'type' => 'array' ] )
				) );




				echo '<amp-next-page>';
				echo '<script type="application/json">';
				echo wp_json_encode( array_values( $pages ) );
				echo '</script>';
				echo '</amp-next-page>';
			}
		}
	}

	/**
	 * Amp experiments for infinite scroll feature.
	 */
	public function add_amp_experiments() {
		echo '<meta name="amp-experiments-opt-in" content="amp-next-page">';
	}

	/**
	 * Register amp bootstrap hook.
	 */
	public function init() {
		add_action( 'wp', array( $this, 'register_hooks' ) );
	}

	/**
	 * Wrap the content of the menu items in case of AMP.
	 *
	 * @param string $item_output item markup.
	 * @param object $item item information.
	 * @param int    $depth item depth.
	 * @param object $args menu args.
	 * @return string
	 */
	public function wrap_content( $item_output, $item, $depth, $args ) {
		if ( ! neve_is_amp() ) {
			return $item_output;
		}

		if ( strpos( $args->menu_id, 'nv-primary-navigation' ) === false ) {
			return $item_output;
		}

		if ( ! in_array( 'menu-item-has-children', $item->classes, true ) ) {
			return $item_output;
		}

		if ( strpos( $item_output, 'has-caret' ) > -1 ) {
			return $item_output;
		}

		$caret  = '<div class="caret-wrap ' . $item->menu_order . '">';
		$caret .= '<span class="caret"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span>';
		$caret .= '</div>';

		$item_output = '<div class="has-caret">' . $item_output . $caret . '</div>';
		// Filter that is used for AMP proper event integration.
		$item_output = apply_filters( 'neve_caret_wrap_filter', $item_output, $item->menu_order );

		return $item_output;
	}

	/**
	 * Add amp parameters for menu child search icon.
	 *
	 * @param string $input input string.
	 * @param int    $instance instance number of nav menu.
	 * @return string
	 */
	public function add_search_menu_item_attrs( $input, $instance ) {
		return $input . ' on="tap:nv-menu-item-search-' . $instance . '.toggleClass(class=\'active\')" ';
	}

	/**
	 * Add amp states to the dom.
	 */
	public function render_amp_states() {
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
	 * @return string
	 */
	public function add_nav_toggle_attrs( $input = '' ) {
		$input  = ' on="tap:neve_body.toggleClass(class=\'is-menu-sidebar\'),AMP.setState( { nvAmpMenuExpanded: ! nvAmpMenuExpanded } )" ';
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

		$input .= ' on="tap:AMP.setState( { nvAmpWooSidebarExpanded: true } )" ';
		$input .= ' role="button" ';
		$input .= ' tabindex="0" ';

		return $input;
	}

	/**
	 * Add woo sidebar amp attrs.
	 *
	 * @param string $input input.
	 * @param string $slug sidebar slug.
	 *
	 * @return string
	 */
	public function add_woo_sidebar_attrs( $input, $slug ) {
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
	 * @param string $slug sidebar slug.
	 *
	 * @return string
	 */
	public function sidebar_close_button_attrs( $input, $slug ) {
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
	 * @param string $id menu item order.
	 *
	 * @return mixed
	 */
	public function amp_dropdowns( $output, $id ) {

		// Generate a unique id for drop-down items.
		$state = 'neveMenuItemExpanded' . $id;

		$attrs     = '';
		$amp_caret = '';
		$caret     = '<span class="caret"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span>';

		$attrs .= '<div class="has-caret" [class]="\'has-caret\' + ( ' . $state . ' ? \' dropdown-open\' : \'\')">';
		$attrs .= '<amp-state id="' . $state . '"><script type="application/json">false</script></amp-state>';

		$amp_caret .= '<div class="caret-wrap amp-desktop-caret-wrap">' . $caret . '</div>';
		$amp_caret .= '<div class="caret-wrap amp-caret-wrap"';
		$amp_caret .= ' on="tap:AMP.setState( { ' . $state . ': ! ' . $state . ' } )"';
		$amp_caret .= ' role="button" ';
		$amp_caret .= ' tabindex="0" ';
		$amp_caret .= ' aria-expanded="false" ';
		$amp_caret .= ' [aria-expanded]="' . $state . ' ? \'true\' : \'false\'">' . $caret . '</div>';

		$output = str_replace( '<div class="has-caret">', $attrs, $output );
		$output = str_replace( $caret, $amp_caret, $output );

		return $output;
	}
}
