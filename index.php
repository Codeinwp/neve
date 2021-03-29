<?php
/**
 * Index template.
 *
 * @package Neve
 */
$container_class = apply_filters( 'neve_container_class_filter', 'container', 'blog-archive' );

get_header();

?>
	<div class="<?php echo esc_attr( $container_class ); ?> archive-container">
		<div class="row">
			<?php
			/**
			 * Executes the rendering function for the sidebar.
			 *
			 * @param string $context Sidebar context.
			 * @param string $position Sidebar position.
			 *
			 * @since 1.0.0
			 */
			do_action( 'neve_do_sidebar', 'blog-archive', 'left' ); ?>
			<div class="nv-index-posts blog col">
				<?php
				/**
				 * Executes actions before the posts loop start.
				 *
				 * @since 2.4.0
				 */
				do_action( 'neve_before_loop' );

				/**
				 * Executes the rendering function for the page header.
				 *
				 * @param string $context Header display page.
				 *
				 * @since 2.3.10
				 */
				do_action( 'neve_page_header', 'index' );

				/**
				 * Executes actions before the post loop.
				 *
				 * @since 2.3.10
				 */
				do_action( 'neve_before_posts_loop' );

				if ( have_posts() ) {
					/* Start the Loop. */
					echo '<div class="posts-wrapper row">';


					$pagination_type = get_theme_mod( 'neve_pagination_type', 'number' );
					if ( $pagination_type !== 'infinite' ) {
						global $wp_query;

						$posts_on_current_page = $wp_query->post_count;
						$hook_after_post       = -1;

						if ( $posts_on_current_page >= 2 ) {
							$hook_after_post = (int) ceil( $posts_on_current_page / 2 );
						}
						$post_index = 1;
					}
					while ( have_posts() ) {
						the_post();

						/**
						 * Executes actions before rendering the post content.
						 *
						 * @since 2.10.5
						 */
						do_action( 'neve_loop_entry_before' );

						get_template_part( 'template-parts/content', get_post_type() );

						if ( $pagination_type !== 'infinite' ) {
							if ( $post_index === $hook_after_post && $hook_after_post !== - 1 ) {
								/**
								 * Executes actions in the middle of the loop.
								 *
								 * The actions only fires if the pagination is not set as "infinite scroll".
								 *
								 * @since 2.3.10
								 */
								do_action( 'neve_middle_posts_loop' );
							}
							$post_index ++;
						}

						/**
						 * Executes actions after rendering the post content.
						 *
						 * @since 2.10.5
						 */
						do_action( 'neve_loop_entry_after' );
					}
					echo '</div>';
					if ( ! is_singular() ) {
						/**
						 * Executes the rendering function for the pagination.
						 *
						 * @param string $context Pagination location context.
						 */
						do_action( 'neve_do_pagination', 'blog-archive' );
					}
				} else {
					get_template_part( 'template-parts/content', 'none' );
				}
				?>
				<div class="w-100"></div>
				<?php
				/**
				 * Executes actions after the post loop.
				 *
				 * @since 2.3.10
				 */
				do_action( 'neve_after_posts_loop' ); ?>
			</div>
			<?php
			do_action( 'neve_do_sidebar', 'blog-archive', 'right' );
			?>
		</div>
	</div>
<?php
get_footer();
