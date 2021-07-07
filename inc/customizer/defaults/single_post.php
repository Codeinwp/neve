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
	 * Get default values for cover padding.
	 *
	 * @return array
	 */
	public function padding_default( $param = '' ) {

		$m_t = $m_r = $m_b = $m_l = $t_t = $t_r = $t_b = $t_l = $d_t = $d_r = $d_b = $d_l = 40; //phpcs:ignore Squiz.PHP.DisallowMultipleAssignments.Found

		if ( $param === 'cover' ) {
			$m_t = $m_b = 40; //phpcs:ignore Squiz.PHP.DisallowMultipleAssignments.Found
			$m_r = $m_l = $d_r = $d_l = $t_r = $t_l = 15; //phpcs:ignore Squiz.PHP.DisallowMultipleAssignments.Found
			$t_t = $t_b = $d_t = $d_b = 60; //phpcs:ignore Squiz.PHP.DisallowMultipleAssignments.Found
		}

		return [
			'mobile'       => [
				'top'    => $m_t,
				'right'  => $m_r,
				'bottom' => $m_b,
				'left'   => $m_l,
			],
			'tablet'       => [
				'top'    => $t_t,
				'right'  => $t_r,
				'bottom' => $t_b,
				'left'   => $t_l,
			],
			'desktop'      => [
				'top'    => $d_t,
				'right'  => $d_r,
				'bottom' => $d_b,
				'left'   => $d_l,
			],
			'mobile-unit'  => 'px',
			'tablet-unit'  => 'px',
			'desktop-unit' => 'px',
		];
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
	 * Get the default value for title vertical position.
	 *
	 * @return array
	 */
	public function post_title_position() {
		return [
			'mobile'  => 'bottom',
			'tablet'  => 'bottom',
			'desktop' => 'bottom',
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
}
