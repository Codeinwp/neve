<?php
/**
 * Template used for header rendering.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

use HFG\Core\Builder\Header as HeaderBuilder;

?>
<header id="masthead"
        class="<?php get_builders( HeaderBuilder::BUILDER_NAME )->get_property( 'panel_id' ) ?>  site-header">
	<div id="masthead-inner" class="site-header-inner">
		<?php render_builder( HeaderBuilder::BUILDER_NAME ) ?>
	</div>
</header>