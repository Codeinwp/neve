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
	$device === 'desktop' ? 'hide-on-mobile hide-on-tablet' : 'hide-on-desktop',
];

$row_classes[] = get_theme_mod( $control_id . '_' . $row_index . '_layout', 'layout-full-contained' );

$row_styles       = '';

$layout_height = json_decode( get_theme_mod( $control_id . '_' . $row_index . '_height', '{ desktop: 0, tablet: 0, mobile: 0 }' ), true );

$media_styles = '';
if ( ! empty( $layout_height ) ) {
	if ( isset( $layout_height['mobile'] ) ) {
		$layout_height['mobile'] = ( $layout_height['mobile'] > 0 ) ? $layout_height['mobile'] . 'px' : 'auto';
		$media_styles .= '
	    @media (min-width: 50px) {
	        .header-' . esc_attr( $row_index ) .'-inner {
	            height: ' . $layout_height['mobile'] . ';
	        }
	    }
	    ';
	}

	if ( isset( $layout_height['tablet'] ) ) {
		$layout_height['tablet'] = ( $layout_height['tablet'] > 0 ) ? $layout_height['tablet'] . 'px' : 'auto';
		$media_styles .= '
	    @media (min-width: 576px) {
	        .header-' . esc_attr( $row_index ) .'-inner {
	            height: ' . $layout_height['tablet'] . ';
	        }
	    }
	    ';
	}

	if ( isset( $layout_height['desktop'] ) ) {
		$layout_height['desktop'] = ( $layout_height['desktop'] > 0 ) ? $layout_height['desktop'] . 'px' : 'auto';
		$media_styles .= '
	    @media (min-width: 796px) {
	        .header-' . esc_attr( $row_index ) .'-inner {
	            height: ' . $layout_height['desktop'] . ';
	        }
	    }
	    ';
	}

	$row_styles = ' style="' . $media_styles . '"';
}
?>
<?php if ( !empty( $row_styles ) ) { ?>
    <style type="text/css">
        <?php echo wp_kses_post( $row_styles ); ?>
    </style>
<?php } ?>
<div class="<?php echo esc_attr( join( ' ', $row_classes ) ); ?> header--row"
	id="cb-row--header-<?php echo $row_index; ?>"
	data-row-id="<?php echo $row_index; ?>" data-show-on="<?php echo $device; ?>">

	<div class="header--row-inner header-<?php echo esc_attr( $row_index ); ?>-inner <?php echo esc_attr( $skin_mode ); ?>" >
		<div class="container">
			<div class="row">
				<?php render_components(); ?>
			</div>
		</div>
	</div>
</div>

