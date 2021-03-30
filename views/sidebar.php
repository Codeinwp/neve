<?php
/**
 * Sidebar view template
 *
 * @package Neve
 */


?>
<div class="nv-sidebar-wrap col-sm-12 <?php echo esc_attr( $args['wrap_classes'] ); ?>" <?php echo wp_kses_post( $args['data_attrs'] ); ?>>
	<?php echo ( $args['close_button'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	<aside id="secondary" role="complementary">
		<?php
		/**
		 * Executes actions before the sidebar content.
		 *
		 * @since 2.3.8
		 */
		do_action( 'neve_before_sidebar_content' ); 
		?>

		<?php dynamic_sidebar( $args['slug'] ); ?>

		<?php
		/**
		 * Executes actions after the sidebar content.
		 *
		 * @since 2.3.8
		 */
		do_action( 'neve_after_sidebar_content' ); 
		?>
	</aside>
</div>
