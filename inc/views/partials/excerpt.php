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
		$output .= '<div class="excerpt-wrap entry-summary" tabindex="0">';
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

		if ( $num_words <= 0 || '' === $text ) {
			return '';
		}

		// `wp_get_word_count_type()` is WP 6.2+; older installs read the same core string.
		$count_type = function_exists( 'wp_get_word_count_type' )
			? wp_get_word_count_type()
			: _x( 'words', 'Word count type. Do not translate!', 'default' ); // phpcs:ignore WordPress.WP.I18n.TextDomainMismatch -- Core string, not a theme one.

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

		$void_tags = array(
			'area',
			'base',
			'br',
			'col',
			'embed',
			'hr',
			'img',
			'input',
			'link',
			'meta',
			'param',
			'source',
			'track',
			'wbr',
		);

		$output    = '';
		$open_tags = array();
		$remaining = $num_words;
		$trimmed   = false;
		// Whitespace is held back until a word or tag follows it, so the cut does not
		// leave a trailing space inside a closed tag or in front of `$more`.
		$pending = '';

		foreach ( $tokens as $token ) {
			// Comments carry no words, and their contents must not be counted as any.
			if ( 0 === strpos( $token, '<!--' ) ) {
				$output .= $pending . $token;
				$pending = '';

				continue;
			}

			// If this is an HTML tag, handle it differently.
			if ( preg_match( '#^<\s*(/?)\s*([a-zA-Z0-9]+)(?:\s[^>]*)?\s*(/?)>$#s', $token, $matches ) ) {
				$output .= $pending . $token;
				$pending = '';

				$tag             = strtolower( $matches[2] );
				$is_closing      = '/' === $matches[1];
				$is_self_closing = '/' === $matches[3];

				if ( in_array( $tag, $void_tags, true ) || $is_self_closing ) {
					continue;
				}

				if ( $is_closing ) {
					$index = array_search( $tag, $open_tags, true );

					if ( false !== $index ) {
						$open_tags = array_slice( $open_tags, $index + 1 );
					}

					continue;
				}

				array_unshift( $open_tags, $tag );

				continue;
			}

			// If this is a text, split it into words and add them to the output.
			$parts = preg_split(
				'/(\s+)/u',
				$token,
				-1,
				PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_NO_EMPTY
			);

			if ( ! is_array( $parts ) ) {
				$output .= $pending . $token;
				$pending = '';

				continue;
			}

			foreach ( $parts as $part ) {
				if ( '' === trim( $part ) ) {
					$pending .= $part;

					continue;
				}

				if ( $remaining <= 0 ) {
					$trimmed = true;
					break;
				}

				// Character locales spend the budget per character, so a single run
				// of text can be cut part way through.
				if ( $count_chars ) {
					$chars = $this->split_characters( $part );

					if ( count( $chars ) > $remaining ) {
						$output   .= $pending . implode( '', array_slice( $chars, 0, $remaining ) );
						$pending   = '';
						$remaining = 0;
						$trimmed   = true;
						break;
					}

					$output    .= $pending . $part;
					$pending    = '';
					$remaining -= count( $chars );

					continue;
				}

				$output .= $pending . $part;
				$pending = '';
				$remaining--;
			}

			if ( $trimmed ) {
				break;
			}
		}

		if ( ! $trimmed ) {
			return $text;
		}

		// Close any tags that are still open so the resulting HTML remains valid.
		foreach ( $open_tags as $tag ) {
			$output .= '</' . $tag . '>';
		}

		$output .= $more;

		return $output;
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
