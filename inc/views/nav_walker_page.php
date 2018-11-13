<?php
/**
 * Custom navwalker page.
 *
 * Author:          Stefan Cotitosu <stefan@themeisle.com>
 * Created on:      13/11/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Neve custom walker page.
 *
 * @since 1.0.9
 */
class Nav_Walker_Page extends \Walker_Page {

	/**
	 * Override parent method in order to add css class to menu drop-down item.
	 *
	 * @param string $output Used to append additional content (passed by reference).
	 * @param int    $depth  Optional. Depth of page. Used for padding. Default 0.
	 * @param array  $args   Optional. Arguments for outputting the next level.
	 *                                 Default empty array.
	 */
	public function start_lvl( &$output, $depth = 0, $args = array() ) {
		if ( isset( $args['item_spacing'] ) && 'preserve' === $args['item_spacing'] ) {
			$t = "\t";
			$n = "\n";
		} else {
			$t = '';
			$n = '';
		}
		$indent  = str_repeat( $t, $depth );
		$output .= "{$n}{$indent}<ul class='sub-menu'>{$n}";
	}

	/**
	 * Override parent method in order top add css classes on li menu items which have children elements.
	 *
	 * @param string   $output       Used to append additional content. Passed by reference.
	 * @param \WP_Post $item        Page data object.
	 * @param int      $depth        Optional. Depth of page. Used for padding. Default 0.
	 * @param array    $args         Optional. Array of arguments. Default empty array.
	 * @param int      $id           Optional. Page ID. Default 0.
	 */
	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {

		add_filter( 'page_css_class', array( $this, 'add_dropdown_class' ) );
		parent::start_el( $output, $item, $depth, $args, $id );

		if ( $this->has_children && isset( $item->menu_order ) ) {
			$output .= '<div class="caret-wrap ' . $item->menu_order . '">';
			$output .= '<span class="caret"></span>';
			$output .= '</div>';
			$output  = apply_filters( 'neve_caret_wrap_filter', $output, $item->menu_order );
		}
	}

	/**
	 * Add class for menu items which have children elements.
	 *
	 * @param array $input - css classes of the li menu item.
	 *
	 * @return array
	 */
	public function add_dropdown_class( $input ) {
		if ( is_array( $input ) && in_array( 'page_item_has_children', $input ) ) {
			array_push( $input, 'menu-item', 'menu-item-has-children' );
			return $input;
		}

		return $input;
	}

}
