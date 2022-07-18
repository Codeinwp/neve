<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve\Views\Partials
 */

namespace Neve\Views\Partials;

use Neve\Views\Base_View;

/**
 * Class Excerpt
 *
 * @package Neve\Views\Partials
 */
class Excerpt extends Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_excerpt_archive', array( $this, 'render_post_excerpt' ), 10, 2 );
	}

	/**
	 * Echo the post excerpt.
	 *
	 * @param string     $context the provided context in do_action.
	 * @param int | null $post_id Post id.
	 */
	public function render_post_excerpt( $context, $post_id = null ) {
		echo $this->get_post_excerpt( $context, $post_id ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Get the post excerpt.
	 *
	 * @param string     $context NOT YET USED. Might come in handily at some later point.
	 * @param int | null $post_id Post id.
	 * @return string
	 */
	private function get_post_excerpt( $context, $post_id = null ) {
		$length = $this->get_excerpt_length();

		$output  = '';
		$output .= '<div class="excerpt-wrap entry-summary">';
		$output .= $this->get_excerpt( $length, $post_id );
		$output .= '</div>';

		return $output;
	}

	/**
	 * Get the excerpt length.
	 *
	 * @param int $length Post excerpt length.
	 * @param int $post_id Post id.
	 *
	 * @return string
	 */
	private function get_excerpt( $length = 25, $post_id = null ) {

		global $post;

		if ( $length === 300 ) {
			return apply_filters( 'the_content', get_the_content( null, false, $post_id ) );
		}

		if ( strpos( $post->post_content, '<!--more-->' ) ) {
			return apply_filters( 'the_content', get_the_content( null, false, $post_id ) );
		}

		if ( has_excerpt() ) {
			return apply_filters( 'the_excerpt', get_the_excerpt( $post_id ) );
		}

		add_filter( 'excerpt_length', array( $this, 'change_excerpt_length' ), 10 );
		$content = get_the_excerpt( $post_id );
		remove_filter( 'excerpt_length', array( $this, 'change_excerpt_length' ), 10 );

		return apply_filters( 'the_excerpt', $content );
	}

	/**
	 * Get the excerpt length option casted as `int`.
	 *
	 * @return int
	 */
	private function get_excerpt_length() {
		return absint( round( get_theme_mod( 'neve_post_excerpt_length', '25' ) ) );
	}

	/**
	 * Change excerpt length.
	 *
	 * @return int
	 */
	public function change_excerpt_length() {
		return $this->get_excerpt_length();
	}
}
