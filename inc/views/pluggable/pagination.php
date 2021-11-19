<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      31/08/2018
 *
 * @package Neve\Views\Pluggable
 */

namespace Neve\Views\Pluggable;

use Neve\Views\Base_View;

/**
 * Class Pagination
 *
 * @package Neve\Views\Pluggable
 */
class Pagination extends Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'rest_api_init', array( $this, 'register_endpoints' ) );
		add_filter( 'neve_filter_main_script_localization', array( $this, 'filter_localization' ) );
		add_action( 'neve_do_pagination', array( $this, 'render_pagination' ) );
		add_action( 'neve_post_navigation', array( $this, 'render_post_navigation' ) );
	}

	/**
	 * Register Rest API endpoint for posts retrieval.
	 */
	public function register_endpoints() {
		register_rest_route(
			'nv/v1/posts',
			'/page/(?P<page_number>\d+)(?:/(?P<lang>[a-zA-Z0-9-_]+))?',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'get_posts' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * Get paginated posts.
	 *
	 * @param \WP_REST_Request $request the rest request.
	 *
	 * @return \WP_REST_Response
	 */
	public function get_posts( \WP_REST_Request $request ) {
		if ( empty( $request['page_number'] ) ) {
			return new \WP_REST_Response( '' );
		}

		$query_args = $request->get_body();
		$args       = json_decode( $query_args, true );

		$per_page = get_option( 'posts_per_page' );
		if ( $per_page > 100 ) {
			$per_page = 100;
		}

		$args['posts_per_page']      = $per_page;
		$args['post_type']           = 'post';
		$args['paged']               = $request['page_number'];
		$args['ignore_sticky_posts'] = 1;
		$args['post_status']         = 'publish';

		if ( ! empty( $request['lang'] ) ) {
			if ( defined( 'POLYLANG_VERSION' ) ) {
				$args['lang'] = $request['lang'];
			}

			if ( defined( 'ICL_SITEPRESS_VERSION' ) ) {
				global $sitepress;
				if ( gettype( $sitepress ) === 'object' && method_exists( $sitepress, 'switch_lang' ) ) {
					$sitepress->switch_lang( $request['lang'] );
				}
			}
		}

		$output = '';

		$query = new \WP_Query( $args );
		if ( $query->have_posts() ) {
			ob_start();
			while ( $query->have_posts() ) {
				$query->the_post();

				/**
				 * Executes actions before rendering the post content.
				 *
				 * @since 2.11 in the /index.php
				 */
				do_action( 'neve_loop_entry_before' );

				get_template_part( 'template-parts/content' );

				/**
				 * Executes actions after rendering the post content.
				 *
				 * @since 2.11 in the /index.php
				 */
				do_action( 'neve_loop_entry_after' );
			}
			wp_reset_postdata();
			$output = ob_get_contents();
			ob_end_clean();
		}

		return new \WP_REST_Response( $output );
	}

	/**
	 * Filter localization to add infinite scroll to the main script.
	 *
	 * @param array $data localization array.
	 *
	 * @return array
	 */
	public function filter_localization( $data ) {
		if ( ! $this->has_infinite_scroll() ) {
			return $data;
		}
		global $wp_query;
		$max_pages = $wp_query->max_num_pages;

		$data['infScroll'] = 'enabled';
		$data['maxPages']  = $max_pages;
		$data['endpoint']  = rest_url( 'nv/v1/posts/page/' );
		$data['query']     = wp_json_encode( $wp_query->query );
		$data['lang']      = get_locale();

		// WPML language parameter
		$current_lang = apply_filters( 'wpml_current_language', null );
		if ( ! empty( $current_lang ) ) {
			$data['lang'] = $current_lang;
		}

		return $data;
	}

	/**
	 * Render the pagination.
	 *
	 * @param string $context Pagination location context.
	 */
	public function render_pagination( $context ) {
		if ( $context === 'single' ) {
			$this->render_single_pagination();

			return;
		}

		if ( ! $this->has_infinite_scroll() && is_paged() ) {
			/**
			 * Executes actions before pagination.
			 *
			 * @since 2.3.8
			 */
			do_action( 'neve_before_pagination' );
		}

		$paginate_args = array( 'type' => 'list' );
		if ( $this->has_jump_to() ) {
			$paginate_args['format'] = '?paged=%#%';
		}
		$links = paginate_links( $paginate_args );
		$links = str_replace(
			array( '<a class="prev', '<a class="next' ),
			array(
				'<a rel="prev" class="prev',
				'<a rel="next" class="next',
			),
			$links
		);

		$allowed_tags = 'post';
		if ( $this->has_jump_to() ) {

			parse_str( wp_parse_url( get_pagenum_link(), PHP_URL_QUERY ), $url_query_args );

			$current_page      = ( ! empty( get_query_var( 'paged' ) ) ) ? get_query_var( 'paged' ) : 1;
			$additional_fields = '';
			foreach ( $url_query_args as $key => $value ) {
				$additional_fields .= '<input type="hidden" name="' . esc_attr( $key ) . '" value="' . esc_attr( $value ) . '" />';
			}

			$allowed_tags = array(
				'ul'    => array(
					'class' => array(),
				),
				'li'    => array(
					'class' => array(),
				),
				'a'     => array(
					'class' => array(),
					'href'  => array(),
				),
				'span'  => array(
					'class' => array(),
				),
				'form'  => array(
					'class'        => array(),
					'action'       => array( esc_url( get_pagenum_link() ) ),
					'method'       => array( 'get' ),
					'autocomplete' => array( 'off' ),
				),
				'input' => array(
					'class'       => array(),
					'type'        => array( 'number', 'hidden' ),
					'name'        => array( 'paged', 'page_id', 's' ),
					'value'       => array(),
					'min'         => array(),
					'step'        => array(),
					'placeholder' => array(),
					'size'        => array(),
				),
			);

			$jump_to_form = '<form class="nv-page-nav-form" action="' . esc_url( get_pagenum_link() ) . '" method="get" autocomplete="off">
				<input class="page-input" type="number" min="1" step="1" value="' . absint( $current_page ) . '" placeholder="1" size="3" name="paged" />
				' . wp_kses(
					$additional_fields,
					$allowed_tags
				) . '
				<input value="»" type="submit" >
			</form>';

			$links = str_replace(
				'</ul>',
				'<li>' . $jump_to_form . '</li></ul>',
				$links
			);
		}

		echo $this->has_infinite_scroll() ? '<div style="display: none;">' : '';
		echo wp_kses( $links, $allowed_tags );
		echo $this->has_infinite_scroll() ? '</div>' : '';

		if ( $this->has_infinite_scroll() ) {
			echo wp_kses_post( '<div class="load-more-posts"><span class="nv-loader" style="display: none;"></span><span class="infinite-scroll-trigger"></span></div>' );
		}
	}

	/**
	 * Render single post / page pagination.
	 */
	private function render_single_pagination() {
		wp_link_pages(
			array(
				'before'      => '<div class="post-pages-links"><span>' . apply_filters( 'neve_page_link_before', esc_html__( 'Pages:', 'neve' ) ) . '</span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
			)
		);
	}

	/**
	 * Render single post navigation links
	 */
	public function render_post_navigation() {
		$prev_format = '<div class="previous">%link</div>';
		$next_format = '<div class="next">%link</div>';

		$prev_link = sprintf(
			'<span class="nav-direction">%1$s</span><span>%2$s</span>',
			esc_html__( 'previous', 'neve' ),
			'%title'
		);
		$next_link = sprintf(
			'<span class="nav-direction">%1$s</span><span>%2$s</span>',
			esc_html__( 'next', 'neve' ),
			'%title'
		);

		echo '<div class="' . esc_attr( apply_filters( 'neve_post_navigation_class', 'nv-post-navigation' ) ) . '">';
		previous_post_link( $prev_format, $prev_link );
		next_post_link( $next_format, $next_link );
		echo '</div>';
	}

	/**
	 * Go to page option is enabled
	 *
	 * @return bool
	 */
	private function has_jump_to() {
		return get_theme_mod( 'neve_pagination_type', 'number' ) === 'jump-to';
	}

	/**
	 * Has infinite scroll.
	 *
	 * @return bool
	 */
	private function has_infinite_scroll() {
		if ( neve_is_amp() ) {
			return false;
		}
		if ( is_search() ) {
			return false;
		}

		$pagination_type = get_theme_mod( 'neve_pagination_type', 'number' );
		if ( $pagination_type === 'infinite' ) {
			return true;
		}

		return false;
	}
}
