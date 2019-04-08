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

$id      = current_component( HeaderBuilder::BUILDER_NAME )->get_id();
$content = get_theme_mod( $id . '_content', get_theme_mod( 'neve_top_bar_content', is_customize_preview() ? __( 'Custom HTML', 'neve' ) : '' ) );

$content = apply_filters( 'neve_top_bar_content', $content );
?>
<div class="nv-html-content">
	<?php echo wp_kses_post( balanceTags( $content, true ) ); ?>
</div>
