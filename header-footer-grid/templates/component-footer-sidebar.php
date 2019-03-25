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

$id = current_component()->get_id();

if ( is_active_sidebar( $id ) ) {
	?>
	<div class="widget-area">
		<?php dynamic_sidebar( $id ); ?>
	</div>
<?php } elseif ( current_user_can( 'edit_theme_options' ) ) { ?>
	<div class="widget-area">
		<section id="placeholder-widget-text" class="widget widget_text">
			<h4 class="widget-title"><?php echo esc_attr( current_component()->get_property( 'label' ) ); ?></h4>
			<div class="textwidget">
				<?php
				echo sprintf(
					/* translators: %s1 - url, %s2 - widget id */
					__(
						'<p>Replace this widget content by going to <a href="%1$s"><strong>Appearance &rarr; Customize &rarr; Footer &rarr; %2$s</strong></a> and add widgets into this widget area.</p>',
						'neve'
					),
					esc_url( admin_url( 'customize.php?autofocus[section]=sidebar-widgets-footer-' . $id ) ),
					current_component()->get_property( 'label' )
				);
				?>
			</div>
		</section>
	</div>
<?php } ?>
