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
?>
<div class="toggle-palette">
	<a class="toggle" href="<?php echo '#'; ?>" class="palette-icon-wrapper">
		<span class="icon" style="display: inline-block;">
			<?php echo wp_kses( $svg_icon, PaletteSwitch::get_kses_extended_ruleset() ); ?>
		</span>
		<?php if ( $label !== '' ) { ?>
			<span><?php echo esc_attr( $label ); ?></span>
		<?php } ?>
	</a>
</div>
