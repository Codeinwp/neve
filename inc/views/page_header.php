<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

use Neve\Core\Migration_Flags;

/**
 * Class Page_Header
 *
 * @package Neve\Views
 */
class Page_Header extends Base_View {
	/**
	 * Title arguments.
	 *
	 * @var array
	 */
	private $title_args = array(
		'string'     => '',
		'class'      => '',
		'wrap-class' => '',
	);

	const H1_PLACEHOLDER = '<!-- neve-fallback-h1 -->';

	/**
	 * Fallback H1 markup awaiting the buffer decision.
	 *
	 * @var string
	 */
	private $deferred_h1 = '';

	/**
	 * Output-buffer level of the page-body buffer, 0 when not buffering.
	 *
	 * @var int
	 */
	private $buffer_level = 0;

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'wp', [ $this, 'run' ] );
	}

	/**
	 * Run the actions for the page header
	 *
	 * @return void
	 */
	public function run() {
		$header_hook = get_theme_mod( 'neve_enable_featured_post', false ) && is_home() ? 'neve_do_featured_post' : 'neve_page_header';
		add_action( $header_hook, array( $this, 'render_page_header' ), 9 );
		add_filter( 'get_the_archive_title', array( $this, 'filter_archive_title' ) );
		if ( $this->is_title_hidden() ) {
			// The theme's first body hook fires before wp_body_open; the latter covers other templates.
			add_action( 'neve_body_start_after', array( $this, 'start_h1_buffer' ), PHP_INT_MIN );
			add_action( 'wp_body_open', array( $this, 'start_h1_buffer' ), 0 );
		}
	}

	/**
	 * Render the page header.
	 *
	 * @param string $context the context provided in do_action.
	 */
	public function render_page_header( $context ) {
		$title_args = $this->get_the_page_title( $context );

		if ( empty( $title_args['string'] ) ) {
			return;
		}
		$header_layout = get_theme_mod( 'neve_page_header_layout', 'normal' );
		if ( $header_layout !== 'normal' && in_array( $context, [ 'single-page', 'woo-page' ], true ) ) {
			return;
		}

		$title_args['category_description'] = $this->get_archive_description();

		$this->get_view( 'page-header', $title_args );
	}

	/**
	 * Whether the page title is hidden for the current request.
	 *
	 * @return bool
	 */
	public function is_title_hidden() {
		$hide_title = get_theme_mod( 'neve_page_hide_title', false );

		$current_page = get_queried_object();
		$pid          = $current_page instanceof \WP_Post ? $current_page->ID : get_the_ID();

		if ( (int) get_option( 'page_for_posts' ) === $pid || is_archive() ) {
			$hide_title = get_theme_mod( 'neve_archive_hide_title', Migration_Flags::is_new_user_after_v4() );
		}

		$specific_hide_title = get_post_meta( $pid, 'neve_meta_disable_title', true );
		if ( ! empty( $specific_hide_title ) ) {
			$hide_title = $specific_hide_title === 'on';
		}

		return (bool) $hide_title;
	}

	/**
	 * Buffer the page body so the screen-reader H1 fallback can be decided after
	 * every H1 source (content, patterns, builders, header/footer/custom layouts) rendered.
	 *
	 * @return void
	 */
	public function start_h1_buffer() {
		if ( $this->buffer_level > 0 ) {
			return;
		}
		ob_start( array( $this, 'filter_h1_buffer' ) );
		$this->buffer_level = ob_get_level();
		// Last theme hook in the body; if it never fires, PHP runs the callback at shutdown.
		add_action( 'neve_body_end_before', array( $this, 'resolve_fallback_h1' ), PHP_INT_MAX );
	}

	/**
	 * Output the fallback H1, or its placeholder while buffering.
	 *
	 * @param string $title Hidden title text.
	 *
	 * @return void
	 */
	public function fallback_h1( $title ) {
		$h1 = '<h1 class="screen-reader-text">' . $title . '</h1>';
		if ( $this->buffer_level === 0 ) {
			// Not buffering (template without the body hooks): fall back to the content scan.
			$content_has_h1 = is_singular() && self::markup_has_h1( (string) get_post_field( 'post_content', get_queried_object_id() ) );
			if ( ! $content_has_h1 ) {
				echo wp_kses_post( $h1 );
			}
			return;
		}
		$this->deferred_h1 = wp_kses_post( $h1 );
		echo wp_kses_post( self::H1_PLACEHOLDER );
	}

	/**
	 * Flush the buffer; filter_h1_buffer() resolves the placeholder on the way out.
	 *
	 * @return void
	 */
	public function resolve_fallback_h1() {
		if ( $this->buffer_level === 0 ) {
			return;
		}
		// A later buffer is still open; closing now would eat its output.
		if ( ob_get_level() !== $this->buffer_level ) {
			return;
		}
		$this->buffer_level = 0;
		ob_end_flush();
	}

	/**
	 * Output-buffer callback: keep the fallback H1 only when no other H1 rendered.
	 *
	 * @param string $markup Buffered page-body markup.
	 *
	 * @return string
	 */
	public function filter_h1_buffer( $markup ) {
		$replacement        = self::markup_has_h1( $markup ) ? '' : $this->deferred_h1;
		$this->deferred_h1  = '';
		$this->buffer_level = 0;

		return str_replace( self::H1_PLACEHOLDER, $replacement, $markup );
	}

	/**
	 * Whether markup contains an H1, ignoring comments and script/template/noscript blocks.
	 *
	 * @param string $markup Rendered HTML.
	 *
	 * @return bool
	 */
	public static function markup_has_h1( $markup ) {
		// A single left-to-right pass: a regex over the whole body hits pcre.backtrack_limit
		// on a large inline script (around 1 MB), and a failed scan must not miscount an H1.
		$markup = (string) $markup;
		$offset = strpos( $markup, '<' );
		// Open <template> elements: their contents are parsed as markup but never rendered.
		$inert = 0;
		while ( false !== $offset ) {
			if ( '<!--' === substr( $markup, $offset, 4 ) ) {
				$close = strpos( $markup, '-->', $offset + 4 );
				if ( false === $close ) {
					return false;
				}
				$offset = $close + 3;
			} elseif ( preg_match( '#\G<(/?)([a-z][a-z0-9]*)(?=[\s/>])#i', $markup, $match, 0, $offset ) ) {
				$closing = '' !== $match[1];
				$tag     = strtolower( $match[2] );
				$offset += strlen( $match[0] );
				if ( 'template' === $tag ) {
					$inert = $closing ? max( 0, $inert - 1 ) : $inert + 1;
				} elseif ( 'h1' === $tag && ! $closing && 0 === $inert ) {
					return true;
				} elseif ( ! $closing && in_array( $tag, array( 'script', 'noscript' ), true ) ) {
					$offset = self::find_closing_tag( $markup, $tag, $offset );
					if ( false === $offset ) {
						return false;
					}
				}
			} else {
				$offset ++;
			}
			$offset = strpos( $markup, '<', $offset );
		}

		return false;
	}

	/**
	 * Offset just past the closing tag of a raw-text element, or false when it never closes.
	 *
	 * @param string $markup Rendered HTML.
	 * @param string $tag    Lower-case tag name.
	 * @param int    $offset Where to start looking.
	 *
	 * @return int|false
	 */
	private static function find_closing_tag( $markup, $tag, $offset ) {
		$needle = '</' . $tag;
		$pos    = stripos( $markup, $needle, $offset );
		while ( false !== $pos ) {
			$end  = $pos + strlen( $needle );
			$end += strspn( $markup, " \t\n\f\r", $end );
			if ( isset( $markup[ $end ] ) && '>' === $markup[ $end ] ) {
				return $end + 1;
			}
			$pos = stripos( $markup, $needle, $end );
		}

		return false;
	}

	/**
	 * The page title
	 *
	 * @param string $context context of current page passed in do_action.
	 *
	 * @return array
	 */
	private function get_the_page_title( $context ) {
		$title_args = array();
		if ( $context === 'index' || $context === 'single-page' ) {
			$title_args               = $this->get_blog_archive_title();
			$title_args['wrap-class'] = 'nv-big-title';
		}

		if ( $context === 'search' ) {
			/* translators: search result */
			$title_args['string']     = sprintf( esc_html__( 'Search Results for: %s', 'neve' ), get_search_query() );
			$title_args['wrap-class'] = 'nv-big-title';
		}

		// If no title is set until now simply get the title.
		if ( empty( $title_args['string'] ) && ! is_home() ) {
			$title_args['string'] = get_the_title();
		}

		$title_args = wp_parse_args( $title_args, $this->title_args );

		return $title_args;
	}

	/**
	 * Get the blog/archive title.
	 *
	 * @return array
	 */
	private function get_blog_archive_title() {
		if ( is_home() && get_option( 'show_on_front' ) === 'posts' ) {
			return array(
				'string' => '',
				'class'  => 'nv-blog-description',
			);
		}

		if ( get_option( 'show_on_front' ) === 'page' && is_home() ) {
			$blog_page_id = get_option( 'page_for_posts' );

			return array(
				'string' => get_the_title( $blog_page_id ),
				'class'  => '',
			);
		}

		if ( is_archive() ) {
			return array(
				'string' => get_the_archive_title(),
			);
		}

		if ( class_exists( 'WooCommerce' ) && function_exists( 'is_wc_endpoint_url' ) && is_wc_endpoint_url() ) {
			$endpoint       = WC()->query->get_current_endpoint();
			$endpoint_title = WC()->query->get_endpoint_title( $endpoint );
			return array(
				'string' => $endpoint_title,
			);
		}

		return array();
	}

	/**
	 * Remove "Category:", "Tag:", "Author:" from the archive title.
	 *
	 * @param string $title Archive title.
	 *
	 * @return string
	 */
	public function filter_archive_title( $title ) {
		if ( is_category() ) {
			$title = single_cat_title( '', false );
		} elseif ( is_tag() ) {
			$title = single_tag_title( '', false );
		} elseif ( is_author() ) {
			$title = '<span class="vcard">' . get_the_author() . '</span>';
		} elseif ( is_year() ) {
			$title = get_the_date( 'Y' );
		} elseif ( is_month() ) {
			$title = get_the_date( 'F Y' );
		} elseif ( is_day() ) {
			$title = get_the_date( 'F j, Y' );
		} elseif ( is_post_type_archive() ) {
			$title = post_type_archive_title( '', false );
		} elseif ( is_tax() ) {
			$title = single_term_title( '', false );
		}

		return esc_html( $title );
	}

	/**
	 * Add description after the title on archive page.
	 */
	public function get_archive_description() {
		if ( is_author() ) {
			$author_meta = get_the_author_meta( 'description' );
			if ( empty( $author_meta ) ) {
				return '';
			}

			return '<p>' . wp_kses_post( $author_meta ) . '</p>';
		}
		if ( is_category() || is_tag() ) {
			return get_the_archive_description();
		}

		return '';
	}
}
