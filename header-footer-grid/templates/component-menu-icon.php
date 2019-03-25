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

$text           = get_theme_mod( current_component( HeaderBuilder::BUILDER_NAME )->get_section_id() . '_text' . '_setting', __( 'Menu', 'neve' ) );
$item_classes   = [];
$item_classes[] = 'menu-mobile-toggle item-button';
$item_classes[] = 'is-size-desktop-medium';
$item_classes[] = 'is-size-tablet-medium';
$item_classes[] = 'is-size-mobile-medium';
$label_classes  = array( 'nav-icon--label' );

$component_styles_array = [];

$component_styles_array['padding'] = '0;';
$component_styles_array['margin']  = '8px 2px;';

$component_styles = '';
if ( ! empty( $component_styles_array ) ) {
	$component_styles = ' style="';
	foreach ( $component_styles_array as $key => $value ) {
		$component_styles .= sprintf( '%1$s: %2$s', $key, $value );
	}
	$component_styles .= '" ';
}

?>
<a class="<?php echo esc_attr( join( ' ', $item_classes ) ); ?> " <?php echo  wp_kses_post( $component_styles ); ?>>
	<span class="hamburger hamburger--squeeze">
		<span class="hamburger-box">
			<span class="hamburger-inner"></span>
		</span>
	</span>
	<span class="<?php echo esc_attr( join( ' ', $label_classes ) ); ?>"><?php echo esc_attr( $text ); ?></span>
</a>


