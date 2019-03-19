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

$row_index  = current_row();
$device     = current_device();
$control_id = get_builders()->get_property( 'control_id' );

$skin_mode   = get_theme_mod( $control_id . '_' . $row_index . '_skin', 'light-mode' );
$row_classes = [
	'header--row',
	'header-' . $row_index,
	$device === 'desktop' ? 'hide-on-mobile hide-on-tablet' : 'hide-on-desktop'
];

$row_classes[] = get_theme_mod( $control_id . '_' . $row_index . '_layout', 'layout-full-contained' );

$row_styles       = '';
$row_styles_array = [];

$layout_height = json_decode( get_theme_mod( $control_id . '_' . $row_index . '_height', '{"mobile":"0","tablet":"0","desktop":"0"}' ), true );

if( isset( $layout_height[ $device ] ) ) {
	$row_styles_array['height'] = 'auto;';
	if ( intval( $layout_height[ $device ] ) > 0 ) {
		$row_styles_array['height'] = $layout_height[ $device ] . 'px;';
	}
}

if ( ! empty( $row_styles_array ) ) {
	$row_styles = ' style="';
	foreach ( $row_styles_array as $key => $value ) {
		$row_styles .= sprintf( '%1$s: %2$s', $key, $value );
	}
	$row_styles .= '" ';
}

$row_classes[] = 'nv-navbar';
?>
<nav class="<?php echo esc_attr( apply_filters( 'neve_nav_data_attrs', join( ' ', $row_classes )) ); ?> header--row"
     id="cb-row--header-<?php echo $row_index; ?>"
     data-row-id="<?php echo $row_index; ?>" data-show-on="<?php echo $device; ?>">

	<div class="header--row-inner header-<?php echo esc_attr( $row_index ); ?>-inner <?php echo esc_attr( $skin_mode ); ?>"
		<?php echo( wp_kses_post( $row_styles ) ); ?> >
		<div class="container">
			<div class="hfg-grid hfg-grid-<?php echo esc_attr( $row_index ); ?>">
				<?php render_components() ?>
			</div>
		</div>
	</div>
</nav>

