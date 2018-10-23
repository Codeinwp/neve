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
	<aside id="secondary" class="blog-sidebar" role="complementary">
		<?php dynamic_sidebar( 'blog-sidebar' ); ?>
	</aside>
</div>
