<?php
/**
 * Template used for component rendering wrapper.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

$_id = current_component()->get_id();

if ( is_active_sidebar( $_id ) ) {
	?>
	<div class="widget-area">
		<?php dynamic_sidebar( $_id ); ?>
	</div>
<?php } elseif ( current_user_can( 'edit_theme_options' ) ) { ?>
	<div class="widget-area">
		<section id="placeholder-widget-text" class="widget widget_text">
			<h4 class="widget-title"><?php echo esc_html( current_component()->get_property( 'label' ) ); ?></h4>
			<div class="textwidget">
				<?php
				echo sprintf(
					/* translators: %s - message */
					'<p>%s</p>',
					sprintf(
						/* translators: %s - customizer link */
						__( 'Replace this widget content by going to %s and add widgets into this widget area.', 'neve' ), //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						sprintf(
							/* translators: %1$s - link %2$s - name %3$s - label */
							'<a href="%1$s"><strong>%2$s  %3$s</strong></a>',
							esc_url( admin_url( 'customize.php?autofocus[section]=sidebar-widgets-footer-' . $_id ) ),
							/* translators: %1$s - &rarr; symbol %2$s - &rarr; symbol %3$s - &rarr; symbol */
							sprintf( __( 'Appearance %1$s Customize %2$s Footer %3$s', 'neve' ), '&rarr;', '&rarr;', '&rarr;' ), //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							esc_attr( current_component()->get_property( 'label' ) )
						)
					)
				);
				?>
			</div>
		</section>
	</div>
<?php } ?>
