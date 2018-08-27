<?php
/**
 * @package Neve
 */
get_header(); ?>
	<div class="container">
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
<?php
get_sidebar();
get_footer();
