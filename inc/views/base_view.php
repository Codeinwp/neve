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
	 * @param array  $vars variables used in template.
	 *
	 * @return void
	 */
	public function get_view( $view_slug, $vars ) {
		if ( empty( $view_slug ) ) {
			return;
		}

		$args = apply_filters( 'neve_filter_view_data_' . $view_slug, $vars );

		$rest_of_path = 'views/' . $view_slug . '.php';

		$path = trailingslashit( get_stylesheet_directory() ) . $rest_of_path;

		if ( is_file( $path ) ) {
			include $path;

			return;
		}

		$path = trailingslashit( get_template_directory() ) . $rest_of_path;

		if ( is_file( $path ) ) {
			include $path;

			return;
		}
	}
}
