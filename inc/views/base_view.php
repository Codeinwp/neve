<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * The base view class.
 *
 * @package Neve\Views
 */
abstract class Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	abstract public function init();

	/**
	 * Get view path to include.
	 *
	 * @param string $view_slug the view to be loaded from `views` folder, without extension.
	 *
	 * @return string
	 */
	public function get_view_path( $view_slug ) {
		if ( empty( $view_slug ) ) {
			return '';
		}

		$rest_of_path = 'views/' . $view_slug . '.php';

		$path = trailingslashit( get_stylesheet_directory() ) . $rest_of_path;

		if ( file_exists( $path ) ) {
			return $path;
		}

		$path = trailingslashit( get_template_directory() ) . $rest_of_path;

		if ( file_exists( $path ) ) {
			return $path;
		}

		return trailingslashit( get_template_directory() ) . 'views/fallback-view.php';
	}
}
