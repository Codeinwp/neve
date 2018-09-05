<?php
/**
 * Index template.
 *
 * @package Neve
 */

$container_class = apply_filters( 'neve_container_class_filter', 'container', 'blog-archive' );

get_header();

do_action( 'neve_page_header', 'index' );
?>
	<div class="<?php echo esc_attr( $container_class ); ?> archive-container">
		<div class="row">
			<?php do_action( 'neve_do_sidebar', 'blog-archive', 'left' ); ?>
			<div class="nv-index-posts col gapless">
				<?php
				if ( have_posts() ) {
					/* Start the Loop. */
					echo '<div class="posts-wrapper">';
					while ( have_posts() ) {
						the_post();
						get_template_part( 'template-parts/content', get_post_type() );
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
			</div>
			<?php do_action( 'neve_do_sidebar', 'blog-archive', 'right' ); ?>
		</div>
	</div>
<?php
get_footer();
