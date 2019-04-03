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

$text = get_theme_mod( current_component( HeaderBuilder::BUILDER_NAME )->get_id() . '_text' . '_setting', __( 'Button', 'neve' ) );
$link = get_theme_mod( current_component( HeaderBuilder::BUILDER_NAME )->get_id() . '_link' . '_setting', '#' );

?>
<div class="component-wrap">
	<a href="<?php echo esc_url( $link ); ?>" class="button button-primary"><?php echo wp_kses_post( $text ); ?></a>
</div>
