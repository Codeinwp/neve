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
<div id="header-grid"  class="<?php echo esc_attr( get_builder( HeaderBuilder::BUILDER_NAME )->get_property( 'panel' ) ); ?> site-header">
	<?php render_builder( HeaderBuilder::BUILDER_NAME ); ?>
</div>
