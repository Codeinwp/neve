<?php
/**
 * Template used for header rendering.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

use HFG\Core\Builder\Header as HeaderBuilder;

$layout = \HFG\get_builders( HeaderBuilder::BUILDER_NAME )
?>
<header id="masthead"
        class="<?php \HFG\get_builders( HeaderBuilder::BUILDER_NAME )->get_property( 'panel_id' ) ?>  site-header">
	<div id="masthead-inner" class="site-header-inner">
		<?php \HFG\render_builder( HeaderBuilder::BUILDER_NAME ) ?>
	</div>
</header>