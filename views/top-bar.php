<?php
/**
 * Top Bar view template
 *
 * @package Neve
 */
?>
<div class="nv-top-bar">
	<div class="container">
		<div class="row">
			<div class="col-md-12 nv-tb-wrap <?php echo esc_attr( $args['alignment_class'] ); ?>">
				<?php echo wp_kses_post( $args['content'] ); ?>
			</div>
		</div>
	</div>
</div>
