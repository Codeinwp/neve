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
		add_filter( 'nav_menu_item_args', array( $this, 'tweak_mm_heading' ), 10, 3 );
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
		if ( strpos( $title, 'class="caret"' ) ) {
			return $title;
		}

		if ( strpos( $args->menu_id, 'nv-primary-navigation' ) === false ) {
			return $title;
		}

		if ( ! isset( $item->classes ) || ! is_array( $item->classes ) ) {
			return $title;
		}

		if ( in_array( 'menu-item-has-children', $item->classes ) ) {
			$title = '<span class="menu-item-title-wrap">' . $title . '</span>';

			$title .= '<div class="caret-wrap ' . $item->menu_order . '" tabindex="0">';
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

		if ( isset( $item->title ) && $item->title === 'divider' ) {
			$output .= '<li role="presentation" class="neve-mm-divider">';

			return;
		}

		if ( isset( $item->classes ) && in_array( 'neve-mm-col', $item->classes ) ) {
			$output .= '<li class="neve-mm-col">';

			return;
		}

		parent::start_el( $output, $item, $depth, $args, $id );

		// Filter that is used for AMP proper event integration.
		$output = apply_filters( 'neve_caret_wrap_filter', $output, $item->menu_order );
	}

	/**
	 * Ends the element output, if needed.
	 *
	 * @param string   $output the end el string.
	 * @param \WP_Post $item   item.
	 * @param int      $depth  item depth.
	 * @param array    $args   item args.
	 */
	public function end_el( &$output, $item, $depth = 0, $args = array() ) {
		parent::end_el( $output, $item, $depth, $args );

		if ( $depth < 1 ) {
			return;
		}

		if ( isset( $item->description ) && ! empty( $item->description ) ) {
			$output .= '<span class="neve-mm-description">' . esc_html( $item->description ) . '</span>';
		}
	}


	/**
	 * Tweak the mega menu heading markup.
	 *
	 * @param array    $args  the menu item args.
	 * @param \WP_Post $item  the menu item.
	 * @param int      $depth the depth of the menu item.
	 *
	 * @return mixed
	 */
	public function tweak_mm_heading( $args, $item, $depth ) {
		if ( ! isset( $item->classes ) ) {
			return $args;
		}

		if ( in_array( 'neve-mm-heading', $item->classes ) ) {
			add_filter(
				'nav_menu_css_class',
				function ( $classes, $nav_item, $args, $depth ) use ( $item ) {
					if ( $nav_item !== $item ) {
						return $classes;
					}

					return array( 'neve-mm-heading' );
				},
				10,
				4
			);

			if ( $item->url === '#' ) {
				add_filter(
					'walker_nav_menu_start_el',
					function ( $item_output, $nav_item, $depth, $args ) use ( $item ) {
						if ( $nav_item !== $item ) {
							return $item_output;
						}

						$item_output = '';

						$item_output .= $args->before;
						$item_output .= '<span>';
						$item_output .= $args->link_before . $nav_item->title . $args->link_after;
						$item_output .= '</span>';
						$item_output .= $args->after;

						return $item_output;
					},
					10,
					4
				);
			}
		}

		return $args;
	}

	/**
	 * Display all pages when there is no menu assigned to the primary location
	 */
	public static function fallback() {
		$fallback_args = array(
			'depth'      => - 1,
			'menu_id'    => 'nv-primary-navigation',
			'menu_class' => 'primary-menu-ul',
			'container'  => 'ul',
			'before'     => '',
			'echo'       => false,
			'after'      => '',
		);

		return wp_page_menu( $fallback_args );
	}
}
