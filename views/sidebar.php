<?php
/**
 * Sidebar view template
 *
 * @package Neve
 */
?>
<div class="nv-sidebar-wrap col-sm-12 <?php echo esc_attr( $args['wrap_classes'] ); ?>" <?php echo wp_kses_post( $args['data_attrs'] ); ?>>
	<?php echo wp_kses_post( $args['close_button'] ); ?>
	<aside id="secondary" role="complementary">
		<?php dynamic_sidebar( $args['slug'] ); ?>
	</aside>
</div>
