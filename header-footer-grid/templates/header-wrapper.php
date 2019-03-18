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
<div id="header-grid">
	<?php render_builder( HeaderBuilder::BUILDER_NAME ); ?>
</div>
