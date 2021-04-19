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

$icon_type         = '';

?>
<div class="component-wrap">
	<a href="<?php echo '#'; ?>" class="palette-icon-wrapper">
		<?php echo 'Palette Switcher Toggle here'; // neve_palette_toggle_icon( true, 15, $icon_type ); ?>
	</a>
</div>
