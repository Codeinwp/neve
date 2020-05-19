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
$section_id = get_builder()->get_property( 'control_id' ) . '_' . $row_index;

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

$row_classes[] = 'nv-navbar';
$row_classes   = apply_filters( 'hfg_header_row_classes', $row_classes, $row_index );

$row_wrapper_classes = array(
	'row',
	'row--wrapper',
);
if ( is_customize_preview() ) {
	$row_wrapper_classes[] = 'builder-item-focus';
}
$row_wrapper_classes = join( ' ', $row_wrapper_classes );
?>

<nav class="<?php echo esc_attr( join( ' ', $row_classes ) ); ?> header--row"
	data-row-id="<?php echo esc_attr( $row_index ); ?>" data-show-on="<?php echo esc_attr( $device ); ?>">

	<div
		class="header--row-inner header-<?php echo esc_attr( $row_index ); ?>-inner">
		<div class="container">
			<div
				class="<?php echo esc_attr( $row_wrapper_classes ); ?>"
				data-section="<?php echo esc_attr( $section_id ); ?>" >
				<?php render_components(); ?>
				<?php if ( is_customize_preview() ) { ?>
					<div class="edit-row-action">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 25 25"><path d="M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z"></path></svg>
					</div>
				<?php } ?>
			</div>
		</div>
	</div>
</nav>

