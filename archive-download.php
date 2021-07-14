<?php
/**
 * Author:          Uriahs Victor
 * Created on:      14/07/2021 (d/m/y)
 *
 * @package Neve
 */

$container_class = apply_filters( 'neve_container_class_filter', 'container', 'download-archive' );

get_header();

?>

<div class="<?php echo esc_attr( $container_class ); ?> download-archive-container">

	<main id="main" class="site-main" role="main">

		<?php
			/**
			 *  Executes actions before the post content.
			 *
			 * @since 3.0.0
			 */
			do_action( 'neve_before_download_archive' );
			
		if ( have_posts() ) {
		  
			while ( have_posts() ) {
				the_post();
				get_template_part( 'template-parts/content-download-archive' ); 
			}       
		} else {
			get_template_part( 'template-parts/content', 'none' );
		}

			/**
			*  Executes actions after the post content.
			*
			* @since 3.0.0
			*/
			do_action( 'neve_after_download_archive' );
			
			/**
			* Download pagination
			*/
			// TODO Add download navigation
			
		?>
			</div>

	</main>

</div>

<?php
get_footer();
