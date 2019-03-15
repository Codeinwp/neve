<?php
/**
 * Template used for component rendering wrapper.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

use HFG\Core\Builder\Header as HeaderBuilder;

$classes = [ 'hide-on-desktop', 'header-menu-sidebar', 'menu-sidebar-panel', 'dark-mode' ];
?>
<div id="header-menu-sidebar" class="<?php echo esc_attr( join( " ", $classes ) ) ?>">
	<div id="header-menu-sidebar-bg" class="header-menu-sidebar-bg">
		<div id="header-menu-sidebar-inner" class="header-menu-sidebar-inner">
			<?php \HFG\render_components( HeaderBuilder::BUILDER_NAME ) ?>
		</div>
	</div>
</div>

