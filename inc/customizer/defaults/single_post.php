<?php
/**
 * Default settings traits, shared with other classes.
 *
 * @package Neve\Customizer\Defaults
 */

namespace Neve\Customizer\Defaults;

use Neve\Customizer\Options\Layout_Single_Post;

/**
 * Trait Single_Post_Defaults
 *
 * @package Neve\Customizer\Defaults
 */
trait Single_Post {

	/**
	 * Get default values for padding controls.
	 *
	 * @return array
	 */
	public function padding_default( $param = '' ) {
		$map = [
			'mobile'       => [
				'top'    => 20,
				'right'  => 20,
				'bottom' => 20,
				'left'   => 20,
			],
			'tablet'       => [
				'top'    => 30,
				'right'  => 30,
				'bottom' => 30,
				'left'   => 30,
			],
			'desktop'      => [
				'top'    => 40,
				'right'  => 40,
				'bottom' => 40,
				'left'   => 40,
			],
			'mobile-unit'  => 'px',
			'tablet-unit'  => 'px',
			'desktop-unit' => 'px',
		];

		if ( $param === 'cover' ) {
			$map['mobile']['top']    = 40;
			$map['mobile']['right']  = 15;
			$map['mobile']['bottom'] = 40;
			$map['mobile']['left']   = 15;

			$map['tablet']['top']    = 60;
			$map['tablet']['right']  = 30;
			$map['tablet']['bottom'] = 60;
			$map['tablet']['left']   = 30;


			$map['desktop']['top']    = 60;
			$map['desktop']['right']  = 40;
			$map['desktop']['bottom'] = 60;
			$map['desktop']['left']   = 40;
		}

		return $map;
	}

	/**
	 * Get the default value for title alignment.
	 *
	 * @return array
	 */
	public static function post_title_alignment() {
		$default_position = is_rtl() ? 'right' : 'left';
		return [
			'mobile'  => $default_position,
			'tablet'  => $default_position,
			'desktop' => $default_position,
		];
	}

	/**
	 * Get default values for ordering control
	 *
	 * @return array
	 */
	public function post_ordering() {
		$default_components = [
			'title-meta',
			'thumbnail',
			'content',
			'tags',
			'comments',
		];

		if ( Layout_Single_Post::is_cover_layout() ) {
			$default_components = [
				'content',
				'tags',
				'comments',
			];
		}

		return apply_filters( 'neve_single_post_elements_default_order', $default_components );
	}

	/**
	 * Get the context for header.
	 *
	 * @return string
	 */
	public function get_header_context() {
		if ( ! neve_is_new_skin() ) {
			return '';
		}

		if ( is_singular( 'post' ) ) {
			return 'post';
		}

		if ( is_singular( 'page' ) ) {
			return 'page';
		}

		return '';
	}
}
