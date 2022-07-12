<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

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
		if ( $header_layout !== 'normal' && $context === 'single-page' ) {
			return;
		}

		$title_args['category_description'] = $this->get_archive_description();

		$this->get_view( 'page-header', $title_args );
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
