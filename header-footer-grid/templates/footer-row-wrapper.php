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

$row_index        = current_row();
$device           = current_device();
$control_id       = get_builders()->get_property( 'control_id' );
$components_count = sizeof( get_builders()->get_layout_data()[ $device ][ $row_index ] );

$default_skin = 'light-mode';
if ( $row_index === 'bottom' ) {
	$default_skin = 'dark-mode';
}
$skin_mode   = get_theme_mod( $control_id . '_' . $row_index . '_skin', $default_skin );
$row_classes = [
	'footer--row',
	'footer-' . $row_index,
	// $device === 'desktop' ? 'hide-on-mobile hide-on-tablet' : 'hide-on-desktop',
];

$row_classes[] = get_theme_mod( $control_id . '_' . $row_index . '_layout', 'layout-full-contained' );

?>
<div class="<?php echo esc_attr( join( ' ', $row_classes ) ); ?>"
	id="cb-row--footer-<?php echo $row_index; ?>"
	data-row-id="<?php echo $row_index; ?>" data-show-on="<?php echo $device; ?>">
	<div class="footer--row-inner footer-<?php echo esc_attr( $row_index ); ?>-inner <?php echo esc_attr( $skin_mode ); ?> footer-content-wrap" >
		<div class="container">
			<div class="hfg-grid hfg-grid-<?php echo esc_attr( $row_index ); ?>   nv-footer-content">
				<?php render_components(); ?>
			</div>
		</div>
	</div>
</div>

