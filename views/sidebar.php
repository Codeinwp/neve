<?php
/**
 * Sidebar view template
 *
 * @package Neve
 */

$args['close_button'] = neve_custom_kses_escape(
	$args['close_button'],
	array(
		'span' => array(
			'class'    => true,
			'on'       => true,
			'role'     => true,
			'tabindex' => true,
		),
	) 
);

?>
<div class="nv-sidebar-wrap col-sm-12 <?php echo esc_attr( $args['wrap_classes'] ); ?>" <?php echo wp_kses_post( $args['data_attrs'] ); ?>>
	<?php echo $args['close_button']; // WPCS: XSS OK. ?>
	<aside id="secondary" role="complementary">
		<?php dynamic_sidebar( $args['slug'] ); ?>
	</aside>
</div>
