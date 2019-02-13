<?php
/**
 * Footer view template.
 *
 * @package Neve
 */

neve_before_footer_trigger(); ?>
	<footer role="contentinfo">
		<?php if ( $args['footer_has_widgets'] ) { ?>
			<div class="footer-content-wrap">
				<div class="container">
					<div class="row nv-footer-widgets">
						<?php foreach ( $args['sidebars'] as $sidebar ) { ?>
							<div class="<?php echo esc_attr( $args['sidebar_class'] ); ?>">
								<?php dynamic_sidebar( $sidebar ); ?>
							</div>
						<?php } ?>
					</div><!--.row-->
				</div><!--.container-->
			</div><!--.footer-content-wrap-->
		<?php } ?>

		<?php if ( ! empty( $args['content'] ) ) { ?>
			<div class="footer-content-wrap footer-second-section">
				<div class="container">
					<div class="row nv-footer-content">
						<div class="col-12">
							<?php echo $args['content']; ?>
						</div> <!--.col-12-->
					</div> <!--.row-->
				</div> <!--.container-->
			</div><!--.footer-content-wrap-->
		<?php } ?>
	</footer>
<?php
neve_after_footer_trigger();
