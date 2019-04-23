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

$classes = apply_filters( 'hfg_header_wrapper_class', '' );
?>
<div id="header-grid"  class="<?php echo esc_attr( get_builder( HeaderBuilder::BUILDER_NAME )->get_property( 'panel' ) ) . esc_attr( $classes ); ?> site-header">
	<?php render_builder( HeaderBuilder::BUILDER_NAME ); ?>
</div>
