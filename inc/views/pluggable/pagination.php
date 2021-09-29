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
		add_filter( 'paginate_links_output', array( $this, 'maybe_add_jump_to_page_input' ) );
		if ( $this->jump_to_enabled() ) {
			add_action( 'wp_footer', array( $this, 'expose_jump_to_js' ) );
		}
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
	 * Check if Jump to Page feature is enabled.
	 * 
	 * @param string $post_type The post type in the loop.
	 * 
	 * @return bool 
	 */
	private function jump_to_enabled( $post_type = '' ) {

		$allowed = $this->post_types_with_pagination_control();
		
		// Use the default blog pagination option if we don't have a specific setting for the archive in question.
		$mod_id  = $allowed[ $post_type ] ?? 'neve_pagination_type'; 
		$enabled = get_theme_mod( $mod_id, 'number' ) === 'jump-to-page' ? true : false;

		return apply_filters( 'neve_jump_to_enabled', $enabled, $post_type );

	}

	/**
	 * An array of Post types that have their own pagination control in Customizer.
	 * 
	 * Add post types where you give users the ability to change pagination type for archive pages.
	 * 
	 * @return mixed 
	 */
	private function post_types_with_pagination_control() {

		$control_ids = array(
			'post'    => 'neve_pagination_type',
			'product' => 'neve_shop_pagination_type',
		);

		return apply_filters( 'neve_pagination_control_post_types', $control_ids );
	}

	/**
	 * Filter the pagination links to decide whether or not to show the "Jump to Page" input field.
	 * 
	 * @param mixed $markup the pagination links from the filter.
	 * 
	 * @return mixed
	 */
	public function maybe_add_jump_to_page_input( $markup ) {
		
		$post_type = get_post_type();

		if ( $this->jump_to_enabled( $post_type ) ) {
			return $this->normalize_jump_to_input();    
		}

		return $markup;

	}

	/**
	 * Expose our Jump to JavaScript on the page.
	 * 
	 * If we don't create a dedicated JS function for the inline onclick, the a tag would first scroll to the top of the page(#) and then submit the form.
	 * 
	 * @return void
	 */
	public function expose_jump_to_js() {

		echo "
		<script type='text/javascript'>
		function nvJumpTo(e){
			e.preventDefault();
			document.querySelector('#nv-page-jump-form').submit()
		}
		</script>
		";
		
	}

	/**
	 * Create jump to navigation inputs.
	 * 
	 * @return mixed $markup HTML to output on page.
	 */
	private function create_jump_to_html() {

		global $wp_query;

		/**
		 * Escaping functions require args to be strings or PHPStan will throw error.
		 */
		$max_num_pages = esc_attr( (string) absint( $wp_query->max_num_pages ) );
		$current_page  = ! empty( get_query_var( 'paged' ) ) ? esc_attr( (string) get_query_var( 'paged' ) ) : '';

		$search_query = esc_attr( get_search_query() );
		$search_input = ! empty( $search_query ) ? '<input id="s" type="hidden" value="' . $search_query . '" name="s" />' : '';
		
		/**
		 * If plain permalinks are used we need extra inputs to handle it
		 */
		$permalink_structure                = get_option( 'permalink_structure' );
		$plain_permalink_blog_archive_input = ( empty( $permalink_structure ) && $wp_query->is_posts_page ) ? '<input id="nv-page-jump-pid" type="hidden" value="' . esc_attr( $wp_query->query['page_id'] ) . '" name="page_id" />' : '';
		$plain_permalink_cpt_archive_input  = ( empty( $permalink_structure ) && $wp_query->is_post_type_archive ) ? '<input id="nv-page-jump-cpt" type="hidden" value="' . esc_attr( $wp_query->query['post_type'] ) . '" name="post_type" />' : '';
		$plain_permalink_cpt_taxonomy_input = ( empty( $permalink_structure ) && $wp_query->is_tax ) ? '<input id="nv-page-jump-cpt-tax" type="hidden" value="' . esc_attr( $wp_query->query_vars['term'] ) . '" name="' . esc_attr( $wp_query->query_vars['taxonomy'] ) . '" />' : '';

		$label       = esc_html__( 'Go to Page', 'neve' );
		$button_text = esc_html( apply_filters( 'neve_pagination_jump_button_text', '&raquo;' ) );

		$markup = <<<MARKUP
		<div id="nv-page-jumper-wrap">
			<form id="nv-page-jump-form" autocomplete="off" >
				<span>
					<label for="paged">$label</label>
					<input id="nv-page-jump-num" placeholder="#" type="number" value="$current_page" min="1" max="$max_num_pages" name="paged" />
					$plain_permalink_blog_archive_input
					$plain_permalink_cpt_archive_input
					$plain_permalink_cpt_taxonomy_input
					$search_input
					<a class="page-numbers" href="#" onclick="nvJumpTo(event)">$button_text</a>
				</span>
			</form>
		</div>
MARKUP;
	
		return $markup;

	}

	/**
	 * Normalize our jump to feature element so that it can be used in render_pagination() method
	 *
	 * @return string $links All links as a string just like if we used paginate_links() with 'list' as the the 'type' arg.
	 */
	private function normalize_jump_to_input() {

		$links           = paginate_links( array( 'type' => 'array' ) );
		$last_element    = array_pop( $links );
		$jump_to_element = $this->create_jump_to_html();
		
		array_push( $links, $last_element, $jump_to_element );

		array_walk(
			$links,
			function( &$value ) use ( $jump_to_element ) {
				$value = ( $value === $jump_to_element ) ? '<li id="nv-page-jump">' . $value . '</li>' : '<li>' . $value . '</li>';
			}
		);

		$links = '<ul class="page-numbers">' . implode( '', $links ) . '</ul>';

		return $links;
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

		$links = paginate_links( array( 'type' => 'list' ) );

		$links = str_replace(
			array( '<a class="prev', '<a class="next' ),
			array(
				'<a rel="prev" class="prev',
				'<a rel="next" class="next',
			),
			$links
		);

		echo $this->has_infinite_scroll() ? '<div style="display: none;">' : '';

		echo $this->jump_to_enabled() ? neve_custom_kses_escape( $links, jump_to_page_extra_tags() ) : neve_custom_kses_escape( $links ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

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
