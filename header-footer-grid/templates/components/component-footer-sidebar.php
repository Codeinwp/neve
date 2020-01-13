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
			<h4 class="widget-title"><?php echo esc_attr( current_component()->get_property( 'label' ) ); ?></h4>
			<div class="textwidget">
				<?php
				echo sprintf(
					/* translators: %s - message */
					'<p>%s</p>',
					sprintf(
						/* translators: %s - customizer link */
						esc_html( 'Replace this widget content by going to %s and add widgets into this widget area.', 'neve' ),
						sprintf(
							/* translators: %1$s - link %2$s - name %3$s - label */
							'<a href="%1$s"><strong>%2$s  %3$s</strong></a>',
							esc_url( admin_url( 'customize.php?autofocus[section]=sidebar-widgets-footer-' . $_id ) ),
							esc_html( 'Appearance &rarr; Customize &rarr; Footer &rarr;', 'neve' ),
							esc_attr( current_component()->get_property( 'label' ) )
						)
					)
				);
				?>
			</div>
		</section>
	</div>
<?php } ?>
