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

use Neve\Views\Base_View;

/**
 * Class Masonry
 *
 * @package Neve\Views\Pluggable
 */
class Masonry extends Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_filter( 'neve_filter_main_script_localization', array( $this, 'filter_localization' ) );
		add_filter( 'neve_filter_main_script_dependencies', array( $this, 'filter_dependencies' ) );
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
	 * @return string
	 */
	public function is_masonry_enabled() {
		$blog_layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		$columns     = $this->get_max_columns();

		if ( ! in_array( $blog_layout, [ 'grid', 'covers' ], true ) || $columns === 1 ) {
			return false;
		}

		return get_theme_mod( 'neve_enable_masonry', false );
	}

	/**
	 * Get the maximum number of columns.
	 *
	 * @return int
	 */
	private function get_max_columns() {
		$columns = get_theme_mod( 'neve_grid_layout', '{mobile:1, tablet:1, desktop:1}' );
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
