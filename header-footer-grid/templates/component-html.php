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

$id = current_component( HeaderBuilder::BUILDER_NAME )->get_id();

$content = get_theme_mod( $id . '_content', '' );

?>
<?php echo wp_kses_post( balanceTags( $content, true ) ); ?>

