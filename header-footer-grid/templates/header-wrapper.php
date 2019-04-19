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

$transparent_header_class = '';
if ( get_theme_mod( 'neve_transparent_header', false ) ) {
	$transparent_header_class = ' neve-tansparent-header';
}
?>
<div id="header-grid"  class="<?php echo esc_attr( get_builder( HeaderBuilder::BUILDER_NAME )->get_property( 'panel' ) ) . esc_attr( $transparent_header_class ); ?> site-header">
	<?php render_builder( HeaderBuilder::BUILDER_NAME ); ?>
</div>
