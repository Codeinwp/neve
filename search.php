<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      04/09/2018
 *
 * @package Neve
 */

$container_class = apply_filters( 'neve_container_class_filter', 'container', 'blog-archive' );

get_header();

$wrapper_classes = [ 'posts-wrapper' ];
$wrapper_classes = apply_filters( 'neve_posts_wrapper_class', $wrapper_classes );

?>
	<div class="<?php echo esc_attr( $container_class ); ?> archive-container">
		<div class="row">
			<?php do_action( 'neve_do_sidebar', 'blog-archive', 'left' ); ?>
			<div class="nv-index-posts search col">
				<?php
				do_action( 'neve_page_header', 'search' );
				if ( have_posts() ) {
					/* Start the Loop. */
					echo '<div class="' . esc_attr( join( ' ', $wrapper_classes ) ) . '">';
					while ( have_posts() ) {
						the_post();
						get_template_part( 'template-parts/content' );
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
