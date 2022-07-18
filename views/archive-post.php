<?php
/**
 * Archive Post view template.
 *
 * @package Neve
 */

$load_before_after_hooks = get_theme_mod( 'neve_blog_archive_layout', 'grid' ) !== 'default';
?>
<article id="<?php echo esc_attr( $args['post_id'] ); ?>" class="<?php echo esc_attr( $args['post_class'] ); ?>">

	<div class="article-content-col">
		<div class="content">
			<?php
			if ( $load_before_after_hooks ) {
				/**
				 * Executes actions before rendering the post content.
				 *
				 * @since 2.11
				 */
				do_action( 'neve_loop_entry_before' );
			}

			echo $args['content'];  // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

			if ( $load_before_after_hooks ) {
				/**
				 * Executes actions after rendering the post content.
				 *
				 * @since 2.11
				 */
				do_action( 'neve_loop_entry_after' );
			}
			?>
		</div>
	</div>
</article>
