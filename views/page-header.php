<?php
/**
 * Page header view template.
 *
 * @package Neve
 */
?>
<div class="nv-page-title-wrap <?php echo esc_attr( $args['wrap-class'] ); ?>">
	<div class="nv-page-title <?php echo esc_attr( $args['class'] ); ?>">
		<?php do_action( 'neve_before_page_title' ); ?>
		<h1><?php echo wp_kses_post( is_search() ? $args['string'] : html_entity_decode( $args['string'] ) ); ?></h1>
		<?php if ( ! empty( $args['category_description'] ) ) { ?>
			<?php echo wp_kses_post( $args['category_description'] ); ?>
		<?php } ?>
		<?php do_action( 'neve_after_page_title' ); ?>
	</div><!--.nv-page-title-->
</div> <!--.nv-page-title-wrap-->
