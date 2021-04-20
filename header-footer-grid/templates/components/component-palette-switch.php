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

use HFG\Core\Builder\Header as HeaderBuilder;
use HFG\Core\Components\PaletteSwitch;

$icon_type = component_setting( PaletteSwitch::TOGGLE_ICON_ID );
?>
<div class="component-wrap">
	<a href="<?php echo '#'; ?>" class="palette-icon-wrapper">
		<?php echo esc_attr( $icon_type ); // neve_palette_toggle_icon( true, 15, $icon_type ); ?>
	</a>
</div>
