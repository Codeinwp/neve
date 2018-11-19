<?php
/**
 * Custom navwalker.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      24/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Nav_Walker
 *
 * @package Neve\Views
 */
class Nav_Walker extends \Walker_Nav_Menu {

	/**
	 * Start_el
	 *
	 * @see   Walker::start_el()
	 * @since 3.0.0
	 *
	 * @param string   $output Output.
	 * @param \WP_Post $item Item.
	 * @param int      $depth Depth.
	 * @param array    $args Args.
	 * @param int      $id id.
	 */
	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		if ( ! is_object( $args ) ) {
			return;
		}

		if ( isset( $item->title ) && ( strcasecmp( $item->title, 'divider' ) == 0 ) && $depth >= 1 ) {
			$indent  = ( $depth ) ? str_repeat( "\t", $depth ) : '';
			$output .= $indent . '<li role="presentation" class="neve-mm-divider">';
			return;
		}

		parent::start_el( $output, $item, $depth, $args, $id );

		if ( ! isset( $item->classes ) || ! is_array( $item->classes ) ) {
			return;
		}
		if ( ! in_array( 'menu-item-has-children', $item->classes ) ) {
			return;
		}
		$output .= '<div class="caret-wrap ' . $item->menu_order . '">';
		$output .= '<span class="caret"></span>';
		$output .= '</div>';
		$output  = apply_filters( 'neve_caret_wrap_filter', $output, $item->menu_order );
	}

	/**
	 * Display all pages when there is no menu assigned to the primary location
	 */
	public static function fallback() {
		$fallback_args = array(
			'depth'     => -1,
			'menu_id'   => 'nv-primary-navigation',
			'container' => 'ul',
			'before'    => '',
			'after'     => '',
		);

		wp_page_menu( $fallback_args );
	}
}
