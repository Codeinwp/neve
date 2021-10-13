<?php
/**
 * Author:          Uriahs Victor
 * Created on:      14/07/2021 (d/m/y)
 *
 * @package Neve
 */

/**
 * Create pagination for Easy Digital Downloads Archive.
 */
function neve_edd_download_nav() {

	global $wp_query;

	$big          = 999999;
	$search_for   = array( $big, '#038;' );
	$replace_with = array( '%#%', '&' );

	$pagination = paginate_links(
		array(
			'base'      => str_replace( $search_for, $replace_with, get_pagenum_link( $big ) ),
			'format'    => '?paged=%#%',
			'current'   => max( 1, get_query_var( 'paged' ) ),
			'total'     => $wp_query->max_num_pages,
			'prev_next' => true,
		) 
	);
	?>

	<div id="nv-edd-download-pagination" class="navigation">
		<?php 
		//phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo $pagination; 
		?>
	</div>

	<?php
}

$container_class = apply_filters( 'neve_container_class_filter', 'container', 'download-archive' );

get_header();

?>

<div id= "nv-edd-download-archive-container" class="<?php echo esc_attr( $container_class ); ?>">

		<div id="wrapper">
			<div id="nv-edd-grid-container">
				<?php
					/**
					 * Executes actions before the post content.
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
					* Executes actions after the post content.
					*
					* @since 3.0.0
					*/
					do_action( 'neve_after_download_archive' );
					
				?>
			</div>
				<?php 
					/**
					 * Download pagination
					 */
					neve_edd_download_nav();        
				?>
		</div>

</div>

<?php
get_footer();
