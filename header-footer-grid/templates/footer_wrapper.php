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

$item_classes   = array();
$item_classes[] = 'item--inner';
$item_classes[] = 'builder-item--' . $this->id;

if ( strpos( $this->id, '-menu' ) ) {
	$item_classes[] = 'has_menu';
}
if ( is_customize_preview() ) {
	$item_classes[] = ' builder-item-focus';
}

$item_classes = join( ' ', $item_classes );

?>
<div class="<?php echo esc_attr( $item_classes ); ?>" data-section="<?php echo esc_attr( $this->section ); ?>"
     data-item-id="<?php echo esc_attr( $this->id ); ?>">
	<?php
	$this->render_component();
	?>
	<?php if ( is_customize_preview() ) { ?>
		<span class="item--preview-name"> <?php echo esc_html( $this->label ) ?></span>
	<?php } ?>
</div>

