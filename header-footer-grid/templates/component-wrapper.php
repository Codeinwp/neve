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

$_component = current_component();

// Bail when the current component cannot be resolved on the current builder.
if ( ! $_component instanceof Core\Components\Abstract_Component ) {
	return;
}

$_id = $_component->get_id();
if ( isset( $args ) && ! empty( $args ) ) {
	$_component->set_args( $args );
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

// The placement context is used to restore the device and row
// when rendering a component in a selective refresh partial.
$placement_context = array();
if ( is_customize_preview() ) {
	$placement_device = current_device();
	$placement_row    = current_row();
	if ( ! empty( $placement_device ) ) {
		$placement_context['device'] = $placement_device;
	}
	if ( ! empty( $placement_row ) ) {
		$placement_context['row'] = $placement_row;
	}
}

?>
<div class="<?php echo esc_attr( $item_classes ); ?>"
		data-section="<?php echo esc_attr( $_component->get_section_id() ); ?>"
		data-item-id="<?php echo esc_attr( $_component->get_id() ); ?>"<?php echo empty( $placement_context ) ? '' : ' data-customize-partial-placement-context="' . esc_attr( wp_json_encode( $placement_context ) ) . '"'; ?>>
	<?php
	$_component->render_css();
	$_component->render_component();
	?>
	<?php if ( is_customize_preview() ) { ?>
		<span class="item--preview-name">
			<span class="dashicons dashicons-edit"></span>
		</span>
	<?php } ?>
</div>

