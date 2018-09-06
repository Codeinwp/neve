<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package  Neve
 */

if ( ! is_active_sidebar( 'shop-sidebar' ) ) {
	return;
} ?>

<div class="nv-shop-sidebar">
	<aside id="secondary" class="shop-sidebar" role="complementary">
		<?php dynamic_sidebar( 'shop-sidebar' ); ?>
	</aside>
</div>
