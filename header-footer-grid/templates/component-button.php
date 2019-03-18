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

$text = get_theme_mod( current_component( HeaderBuilder::BUILDER_NAME )->get_section_id() . '_text' . '_setting' );

?>
<button><?php echo wp_kses_post( $text ); ?></button>

