<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      04/09/2018
 *
 * @package Neve
 */
?>
<div class="col-12 nv-content-none-wrap">
	<?php
	if ( is_home() && current_user_can( 'publish_posts' ) ) {
		?>
		<p>
			<?php
			printf(
				/* translators: %s is Link to new post */
				esc_html__( 'Ready to publish your first post? %s.', 'neve' ),
				sprintf(
					/* translators: %1$s is Link to new post, %2$s is Get started here */
					'<a href="%1$s">%2$s</a>',
					esc_url( admin_url( 'post-new.php' ) ),
					esc_html__( 'Get started here', 'neve' )
				)
			);
			?>
		</p>
	<?php } elseif ( is_search() ) { ?>
		<p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'neve' ); ?></p>
		<div class="nv-seach-form-wrap">
			<?php get_search_form(); ?>
		</div>
	<?php } else { ?>
		<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'neve' ); ?></p>
		<div class="nv-seach-form-wrap">
			<?php get_search_form(); ?>
		</div>
		<?php
}
?>
</div>

