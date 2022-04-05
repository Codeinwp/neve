<?php
/**
 * Handles blog masonry.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      31/08/2018
 *
 * @package Neve\Views\Pluggable
 */

namespace Neve\Views\Pluggable;

use Neve\Customizer\Defaults\Layout;
use Neve\Views\Base_View;
use Neve\Views\Template_Parts;

/**
 * Class Masonry
 *
 * @package Neve\Views\Pluggable
 */
class Masonry extends Template_Parts {
	use Layout;
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_filter( 'neve_filter_main_script_localization', array( $this, 'filter_localization' ) );
		add_filter( 'neve_filter_main_script_dependencies', array( $this, 'filter_dependencies' ) );
		add_filter( 'neve_custom_layout_magic_tags', array( $this, 'maybe_wrap_custom_layout' ), PHP_INT_MAX, 2 );
	}

	/**
	 * Filter to maybe wrap custom layout in loop when using masonry.
	 *
	 * @param string  $content The custom layout content.
	 * @param integer $post_id The custom post ID.
	 *
	 * @return string
	 */
	public function maybe_wrap_custom_layout( $content, $post_id ) {
		if ( ! $this->is_masonry_enabled() ) {
			return $content;
		}

		if ( ! $this->is_blog() ) {
			return $content;
		}

		return '<article class="' . $this->post_class( $post_id ) . '">' . $content . '</article>';
	}

	/**
	 * Check that the page is in blog context.
	 *
	 * @return bool
	 */
	private function is_blog() {
		return ( is_archive() || is_author() || is_category() || is_home() || is_single() || is_tag() );
	}

	/**
	 * Filter localization to add masonry to the main script.
	 *
	 * @param array $data localization array.
	 *
	 * @return array
	 */
	public function filter_localization( $data ) {
		if ( ! $this->is_masonry_enabled() ) {
			return $data;
		}
		$layout  = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		$columns = $this->get_max_columns();

		$data['masonryStatus']  = 'enabled';
		$data['masonryColumns'] = absint( $columns );
		$data['blogLayout']     = esc_html( $layout );
		return $data;
	}

	/**
	 * Filter dependencies to add masonry to the main script.
	 *
	 * @param array $data dependencies array.
	 *
	 * @return array
	 */
	public function filter_dependencies( $data ) {
		if ( ! $this->is_masonry_enabled() ) {
			return $data;
		}
		array_push( $data, 'masonry' );

		return $data;
	}

	/**
	 * Check if masonry is enabled.
	 *
	 * @return bool
	 */
	public function is_masonry_enabled() {
		$blog_layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		$columns     = $this->get_max_columns();

		if ( ! in_array( $blog_layout, [ 'grid', 'covers' ], true ) || $columns === 1 ) {
			return false;
		}

		return (bool) get_theme_mod( 'neve_enable_masonry', false );
	}

	/**
	 * Get the maximum number of columns.
	 *
	 * @return int
	 */
	private function get_max_columns() {
		$columns = get_theme_mod( 'neve_grid_layout', $this->grid_columns_default() );
		if ( is_int( $columns ) ) {
			return $columns;
		}
		if ( empty( $columns ) ) {
			return 1;
		}

		$columns = json_decode( $columns, true );
		if ( ! is_array( $columns ) ) {
			return 1;
		}
		return max( $columns );
	}
}
