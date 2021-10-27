<?php
/**
 * Author:          Uriahs Victor
 * Created on:      05/08/2021 (d/m/y)
 *
 * @package Neve
 */

$container_class = apply_filters( 'neve_container_class_filter', 'container', 'single-download' );

get_header();

?>
	<div id="nv-single-download-container" class="<?php echo esc_attr( $container_class ); ?>">
		<div class="row">
			<?php do_action( 'neve_do_sidebar', 'single-post', 'left' ); ?>
			<article id="download-<?php echo esc_attr( get_the_ID() ); ?>"
					class="<?php echo esc_attr( join( ' ', get_post_class( 'nv-single-download-wrap col' ) ) ); ?>">
				<?php
				/**
				 *  Executes actions before the download content.
				 *
				 * @since 3.0.0
				 */
				do_action( 'neve_before_download_content' );

				if ( have_posts() ) {
					while ( have_posts() ) {
						the_post();
						get_template_part( 'template-parts/content-download', 'single' );
					}
				} else {
					get_template_part( 'template-parts/content', 'none' );
				}

				/**
				 *  Executes actions after the download content.
				 *
				 * @since 3.0.0
				 */
				do_action( 'neve_after_download_content' );
				?>
			</article>
			<?php do_action( 'neve_do_sidebar', 'single-post', 'right' ); ?>
		</div>
	</div>
<?php
get_footer();
