<?php
/**
 * Template used for component rendering wrapper.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

/**
 * @var \HFG\Core\Components\Abstract_Component $this Component object.
 */
namespace HFG;

use HFG\Core\Builder\Header as HeaderBuilder;

$id = current_component( HeaderBuilder::BUILDER_NAME )->get_id();

$item_classes   = array();
$item_classes[] = 'item--inner';
$item_classes[] = 'builder-item--' . $id;

if ( strpos( $id, '-menu' ) ) {
	$item_classes[] = 'has_menu';
}
if ( is_customize_preview() ) {
	$item_classes[] = ' builder-item-focus';
}

$item_classes = join( ' ', $item_classes );

?>
<div class="<?php echo esc_attr( $item_classes ); ?>"
     data-section="<?php echo esc_attr( current_component( HeaderBuilder::BUILDER_NAME )->get_section_id() ); ?>"
     data-item-id="<?php echo esc_attr( current_component( HeaderBuilder::BUILDER_NAME )->get_id() ); ?>">
	<?php
	current_component( HeaderBuilder::BUILDER_NAME )->render_component();
	?>
	<?php if ( is_customize_preview() ) { ?>
		<span class="item--preview-name"> <?php echo esc_html( current_component( HeaderBuilder::BUILDER_NAME )->get_property( 'label' ) ) ?></span>
	<?php } ?>
</div>

