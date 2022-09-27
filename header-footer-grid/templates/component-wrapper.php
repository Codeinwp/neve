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
if ( isset( $args ) && ! empty( $args ) ) {
	current_component()->set_args( $args );
}

$item_classes   = array();
$item_classes[] = 'item--inner';
$item_classes[] = 'builder-item--' . $_id;

if ( strpos( $_id, '-menu' ) ) {
	$item_classes[] = 'has_menu';
}
if ( is_customize_preview() ) {
	$item_classes[] = 'builder-item-focus';
}

$item_classes = join( ' ', $item_classes );

?>
<div class="<?php echo esc_attr( $item_classes ); ?>"
		data-section="<?php echo esc_attr( current_component()->get_section_id() ); ?>"
		data-item-id="<?php echo esc_attr( current_component()->get_id() ); ?>">
	<?php
	current_component()->render_css();
	current_component()->render_component();
	?>
	<?php if ( is_customize_preview() ) { ?>
		<span class="item--preview-name">
			<span class="dashicons dashicons-edit"></span>
		</span>
	<?php } ?>
</div>

