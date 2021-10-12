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

use HFG\Core\Components\PaletteSwitch;

$icon_type = component_setting( PaletteSwitch::TOGGLE_ICON_ID );
$svg_icon  = PaletteSwitch::get_icon( $icon_type );
$label     = component_setting( PaletteSwitch::PLACEHOLDER_ID );

$amp_state = '';
if ( neve_is_amp() ) {
	$amp_state = ' on="tap:AMP.setState({isDark: !isDark})" ';
}
?>
<div class="toggle-palette">
	<a class="toggle palette-icon-wrapper" href="#" <?php echo $amp_state; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<span class="icon"><?php echo $svg_icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
		<?php if ( $label !== '' ) { ?>
			<span class="label inherit-ff"><?php echo esc_html( $label ); ?></span>
		<?php } ?>
	</a>
</div>
