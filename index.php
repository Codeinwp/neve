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
			<?php do_action( 'neve_do_sidebar', 'blog-archive', 'left' ); ?>
			<div class="nv-index-posts blog col">
				<?php
				do_action( 'neve_before_loop' );
				do_action( 'neve_page_header', 'index' );
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
							$hook_after_post = intval( ceil( $posts_on_current_page / 2 ) );
						}
						$post_index = 1;
					}
					while ( have_posts() ) {
						the_post();
						get_template_part( 'template-parts/content', get_post_type() );

						if ( $pagination_type !== 'infinite' ) {
							if ( $post_index === $hook_after_post && $hook_after_post !== - 1 ) {
								do_action( 'neve_middle_posts_loop' );
							}
							$post_index ++;
						}
					}
					echo '</div>';
					if ( ! is_singular() ) {
						do_action( 'neve_do_pagination', 'blog-archive' );
					}
				} else {
					get_template_part( 'template-parts/content', 'none' );
				}
				?>
				<div class="w-100"></div>
				<?php do_action( 'neve_after_posts_loop' ); ?>
			</div>
			<?php do_action( 'neve_do_sidebar', 'blog-archive', 'right' ); ?>
		</div>
	</div>
<?php
get_footer();
