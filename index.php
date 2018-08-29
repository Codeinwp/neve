<?php
/**
 * @package Neve
 */

$container_class = apply_filters( 'neve_container_class_filter', 'container', 'blog-archive' );

get_header();

do_action( 'neve_page_header', 'index' );
?>
	<div class="<?php echo esc_attr( $container_class ); ?> archive-container">
		<div class="row">
			<?php do_action( 'neve_do_sidebar', 'blog-archive', 'left' ); ?>
			<div class="nv-index-posts-wrap col">
				<?php
				if ( have_posts() ) :
					/* Start the Loop. */
					while ( have_posts() ) :
						the_post();
						get_template_part( 'template-parts/content', get_post_type() );
					endwhile;
					if ( ! is_singular() ) :
						the_posts_navigation();
					endif;
				else :
					get_template_part( 'template-parts/content', 'none' );
				endif;
				?>
			</div>
			<?php do_action( 'neve_do_sidebar', 'blog-archive', 'right' ); ?>
		</div>
	</div>
<?php
get_footer();
