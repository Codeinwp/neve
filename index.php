<?php
/**
 * @package Neve
 */
get_header(); ?>
	<main id="primary" class="neve-main">
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
	</main><!-- #primary -->

<?php
get_sidebar();
get_footer();
