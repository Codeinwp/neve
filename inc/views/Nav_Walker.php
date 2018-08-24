<?php
/**
 * Custom navwalker.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      24/08/2018
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Nav_Walker
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
	 * @param \WP_Post $item   Item.
	 * @param int      $depth  Depth.
	 * @param array    $args   Args.
	 * @param int      $id     id.
	 */
	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		parent::start_el( $output, $item );

		$item_classes = $item->classes;
		if ( in_array( 'menu-item-has-children', $item_classes ) ) {
			$output .= '<div class="caret-wrap"><span class="caret"></span></div>';
		}
	}
}