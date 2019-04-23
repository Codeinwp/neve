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

$row_index  = current_row();
$device     = current_device();
$control_id = get_builder()->get_property( 'control_id' );

$skin_mode = row_setting( Abstract_Builder::SKIN_SETTING );

$row_visibility = 'hide-on-desktop';

if ( $device === 'desktop' ) {
	$row_visibility = 'hide-on-mobile hide-on-tablet';
}

$row_classes = [
	'header--row',
	'header-' . $row_index,
	$row_visibility,
];

$row_classes[] = row_setting( Abstract_Builder::LAYOUT_SETTING );
$row_classes   = apply_filters( 'hfg_header_row_classes', $row_classes, $row_index );
?>
<div class="<?php echo esc_attr( join( ' ', $row_classes ) ); ?> header--row"
	id="cb-row--header-<?php echo esc_attr( $row_index ); ?>"
	data-row-id="<?php echo esc_attr( $row_index ); ?>" data-show-on="<?php echo esc_attr( $device ); ?>">

	<div
		class="header--row-inner header-<?php echo esc_attr( $row_index ); ?>-inner <?php echo esc_attr( $skin_mode ); ?>">
		<div class="container">
			<div class="row">
				<?php render_components(); ?>
			</div>
		</div>
	</div>
</div>

