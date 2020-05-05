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

use HFG\Core\Components\Button;

$text = parse_dynamic_tags( component_setting( Button::TEXT_ID ) );
$text = apply_filters( 'neve_translate_single_string', $text, Button::TEXT_ID );
if ( ! empty( $text ) ) {
	$button_link = parse_dynamic_tags( component_setting( Button::LINK_ID ) );
	$button_link = apply_filters( 'neve_translate_single_string', $button_link, Button::LINK_ID );

	echo '<div class="component-wrap">';
	echo '<a href="' . esc_url( $button_link ) . '" class="button button-primary">';
	echo wp_kses_post( stripcslashes( $text ) );
	echo '</a>';
	echo '</div>';
}
