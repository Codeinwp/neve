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

use HFG\Core\Builder\Abstract_Builder;

$row_index   = current_row();
$device      = current_device();
$skin_mode   = row_setting( Abstract_Builder::SKIN_SETTING );
$row_classes = [
	'footer--row',
	'footer-' . $row_index,
];

$row_classes[] = row_setting( Abstract_Builder::LAYOUT_SETTING );

?>
<div class="<?php echo esc_attr( join( ' ', $row_classes ) ); ?>"
	id="cb-row--footer-<?php echo esc_attr( $row_index ); ?>"
	data-row-id="<?php echo esc_attr( $row_index ); ?>" data-show-on="<?php echo esc_attr( $device ); ?>">
	<div
		class="footer--row-inner footer-<?php echo esc_attr( $row_index ); ?>-inner <?php echo esc_attr( $skin_mode ); ?> footer-content-wrap">
		<div class="container">
			<div class="hfg-grid hfg-grid-<?php echo esc_attr( $row_index ); ?>   nv-footer-content">
				<?php render_components(); ?>
			</div>
		</div>
	</div>
</div>

