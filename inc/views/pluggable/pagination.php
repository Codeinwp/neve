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
		add_filter( 'neve_filter_main_script_localization', array( $this, 'filter_localization' ) );
		add_action( 'neve_do_pagination', array( $this, 'render_pagination' ) );
		add_action( 'neve_post_navigation', array( $this, 'render_post_navigation' ) );

		add_action( 'wp_ajax_infinite_scroll', array( $this, 'infinite_scroll' ) );
		add_action( 'wp_ajax_nopriv_infinite_scroll', array( $this, 'infinite_scroll' ) );
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

		$data['infiniteScroll']         = 'enabled';
		$data['infiniteScrollMaxPages'] = $max_pages;

		return $data;
	}

	/**
	 * Render the pagination.
	 *
	 * @param string $context not yet used might come in handy later.
	 */
	public function render_pagination( $context ) {
		if ( $context === 'single' ) {
			$this->render_single_pagination();

			return;
		}

		if ( ! $this->has_infinite_scroll() ) {
			echo wp_kses_post(
				paginate_links(
					array(
						'type' => 'list',
					)
				)
			);

			return;
		}
		echo wp_kses_post( '<span class="nv-loader" style="display: none;"></span><span class="infinite-scroll-trigger"></span>' );
	}

	/**
	 * Render single post / page pagination.
	 */
	private function render_single_pagination() {
		wp_link_pages(
			array(
				'before'      => '<div class="page-numbers">',
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

		echo '<div class="nv-post-navigation">';
		previous_post_link( $prev_format, $prev_link );
		next_post_link( $next_format, $next_link );
		echo '</div>';
	}

	/**
	 * Infinite scroll ajax callback function.
	 */
	public function infinite_scroll() {
		if (
			! isset( $_POST['nonce'] )
			|| ! wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'neve-theme-nonce' )
		) {
			return;
		}

		$page           = ! isset( $_POST['page'] ) ? 0 : (int) $_POST['page'];
		$counter        = ! isset( $_POST['counter'] ) ? 0 : (int) $_POST['counter'];
		$posts_per_page = get_option( 'posts_per_page' );

		$args = array(
			'posts_per_page'      => $posts_per_page,
			'post_type'           => 'post',
			'paged'               => $page,
			'ignore_sticky_posts' => 1,
			'post_status'         => 'publish',
		);

		$query = new \WP_Query( $args );
		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();
				$counter ++;
				$this->render_post_template_part();
			}
			wp_reset_postdata();
		}
		wp_die();
	}

	/**
	 * Render the post.
	 */
	private function render_post_template_part() {
		$post_layout    = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		$layout_mapping = array(
			'default'     => '',
			'grid'        => 'grid',
			'alternative' => 'alternative',
		);
		get_template_part( 'template-parts/content', $layout_mapping[ $post_layout ] );
	}

	/**
	 * Has infinite scroll.
	 *
	 * @return string
	 */
	private function has_infinite_scroll() {
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
