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
	 * Nav_Walker constructor.
	 */
	public function __construct() {
		add_filter( 'nav_menu_item_title', array( $this, 'add_caret' ), 10, 4 );
	}

	/**
	 * Add the caret inside the menu item link.
	 *
	 * @param string $title menu item title.
	 * @param object $item  menu item object.
	 * @param object $args  menu args.
	 * @param int    $depth the menu item depth.
	 *
	 * @return string
	 */
	public function add_caret( $title, $item, $args, $depth ) {
		if ( $args->menu_id !== 'nv-primary-navigation' ) {
			return $title;
		}

		if ( ! isset( $item->classes ) || ! is_array( $item->classes ) ) {
			return $title;
		}

		if ( in_array( 'menu-item-has-children', $item->classes ) ) {
			$title = '<span class="menu-item-title-wrap">' . $title . '</span>';

			$title .= '<div class="caret-wrap ' . $item->menu_order . '">';
			$title .= '<span class="caret"></span>';
			$title .= '</div>';
		}

		return $title;
	}

	/**
	 * Start_el
	 *
	 * @see   Walker::start_el()
	 * @since 3.0.0
	 *
	 * @param string   $output Output.
	 * @param \WP_Post $item   Item.
	 * @param int      $depth  Depth.
	 * @param array    $args   Args.
	 * @param int      $id     id.
	 */
	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {

		if ( ! is_object( $args ) ) {
			return;
		}

		if ( isset( $item->title ) && ( strcasecmp( $item->title, 'divider' ) == 0 ) && $depth >= 1 ) {
			$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

			$output .= $indent . '<li role="presentation" class="neve-mm-divider">';

			return;
		}

		parent::start_el( $output, $item, $depth, $args, $id );

		// Filter that is used for AMP proper event integration.
		$output = apply_filters( 'neve_caret_wrap_filter', $output, $item->menu_order );
	}

	/**
	 * Display all pages when there is no menu assigned to the primary location
	 */
	public static function fallback() {
		$fallback_args = array(
			'depth'     => - 1,
			'menu_id'   => 'nv-primary-navigation',
			'container' => 'ul',
			'before'    => '',
			'after'     => '',
		);

		wp_page_menu( $fallback_args );
	}
}
