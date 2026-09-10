<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package  Neve
 */

if ( ! is_active_sidebar( 'blog-sidebar' ) ) {
	return;
} ?>

<div class="nv-blog-sidebar">
	<aside id="secondary-blog-sidebar" class="blog-sidebar" role="complementary" aria-label="<?php esc_attr_e( 'Sidebar', 'neve' ); ?>">
		<?php dynamic_sidebar( 'blog-sidebar' ); ?>
	</aside>
</div>
