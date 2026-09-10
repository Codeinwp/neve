<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve\Views\Partials
 */

namespace Neve\Views\Partials;

use Neve\Customizer\Defaults\Layout;
use Neve\Views\Base_View;

/**
 * Class Excerpt
 *
 * @package Neve\Views\Partials
 */
class Excerpt extends Base_View {
	use Layout;
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

		if ( has_excerpt( $post_id ) ) {
			$excerpt_more = apply_filters( 'excerpt_more', ' [&hellip;]' );
			$content      = $this->trim_words_keep_html( get_the_excerpt( $post_id ), $length, $excerpt_more );

			return apply_filters( 'the_excerpt', $content );
		}

		add_filter( 'excerpt_length', array( $this, 'change_excerpt_length' ), 10 );
		$content = get_the_excerpt( $post_id );
		remove_filter( 'excerpt_length', array( $this, 'change_excerpt_length' ), 10 );

		return apply_filters( 'the_excerpt', $content );
	}

	/**
	 * Trim words while preserving HTML markup.
	 *
	 * Similar to wp_trim_words(), but preserves HTML tags.
	 *
	 * @param string $text      HTML content to trim.
	 * @param int    $num_words Maximum number of words.
	 * @param string $more      String to append when the content is trimmed.
	 *
	 * @return string
	 */
	private function trim_words_keep_html( $text, $num_words, $more = '...' ) {
		$num_words = (int) $num_words;
		$trimmed   = $this->trim_markup( $text, $num_words, $more );

		return apply_filters( 'wp_trim_words', $trimmed, $num_words, $more, $text );
	}

	/**
	 * Trim a text to a number of words, leaving the markup around them in place.
	 *
	 * @param string $text      HTML content to trim.
	 * @param int    $num_words Maximum number of words.
	 * @param string $more      String to append when the content is trimmed.
	 *
	 * @return string
	 */
	private function trim_markup( $text, $num_words, $more ) {
		if ( $num_words <= 0 || '' === $text ) {
			return '';
		}

		// `wp_get_word_count_type()` is WP 6.2+; older installs count words.
		$count_type = function_exists( 'wp_get_word_count_type' ) ? wp_get_word_count_type() : 'words';

		// Some locales budget characters rather than words, as `wp_trim_words()` does.
		$count_chars = 0 === strpos( $count_type, 'characters' )
			&& 1 === preg_match( '/^utf\-?8$/i', get_option( 'blog_charset' ) );

		$tokens = preg_split(
			'/(<[^>]*>)/',
			$text,
			-1,
			PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_NO_EMPTY
		);

		if ( ! is_array( $tokens ) ) {
			return wp_trim_words( $text, $num_words, $more );
		}

		$output    = '';
		$remaining = $num_words;
		$cut       = false;

		// Markup and whitespace are held back until a kept word follows them, so a
		// tag opened right at the cut does not leave an empty element behind.
		$pending      = '';
		$pending_cost = 0;

		foreach ( $tokens as $token ) {
			// Tokens are split on this same pattern, so a match is one of the tags.
			if ( preg_match( '#^<[^>]*>$#', $token ) ) {
				$pending .= $token;

				continue;
			}

			$parts = preg_split(
				'/(\s+)/u',
				$token,
				-1,
				PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_NO_EMPTY
			);

			if ( ! is_array( $parts ) ) {
				$output      .= $pending . $token;
				$pending      = '';
				$pending_cost = 0;

				continue;
			}

			foreach ( $parts as $part ) {
				if ( '' === trim( $part ) ) {
					// Core collapses each run of whitespace to a single space.
					$pending      .= $count_chars ? ' ' : $part;
					$pending_cost += $count_chars ? 1 : 0;

					continue;
				}

				$remaining -= $pending_cost;

				if ( $remaining <= 0 ) {
					$cut = true;
					break;
				}

				$chars = $count_chars ? $this->split_characters( $part ) : array( $part );

				// Character locales can cut part way through a run of text.
				if ( count( $chars ) > $remaining ) {
					$output .= $pending . implode( '', array_slice( $chars, 0, $remaining ) );
					$cut     = true;
					break;
				}

				$output      .= $pending . $part;
				$pending      = '';
				$pending_cost = 0;
				$remaining   -= count( $chars );
			}

			if ( $cut ) {
				break;
			}
		}

		if ( ! $cut ) {
			return $text;
		}

		// Close any tags that are still open so the resulting HTML remains valid.
		return force_balance_tags( $output ) . $more;
	}

	/**
	 * Split a string into its characters.
	 *
	 * @param string $text Text to split.
	 *
	 * @return string[]
	 */
	private function split_characters( $text ) {
		if ( ! preg_match_all( '/./u', $text, $matches ) ) {
			return array();
		}

		return $matches[0];
	}

	/**
	 * Get the excerpt length option casted as `int`.
	 *
	 * @return int
	 */
	private function get_excerpt_length() {
		return absint( round( get_theme_mod( 'neve_post_excerpt_length', $this->get_v4_defaults( 'neve_post_excerpt_length', 25 ) ) ) );
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
