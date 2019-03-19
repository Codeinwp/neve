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

$text           = get_theme_mod( current_component( HeaderBuilder::BUILDER_NAME )->get_section_id() . '_text' . '_setting' );
$item_classes   = [];
$item_classes[] = 'menu-mobile-toggle item-button';
$item_classes[] = 'is-size-desktop-medium';
$item_classes[] = 'is-size-tablet-medium';
$item_classes[] = 'is-size-mobile-medium';
$label_classes  = array( 'nav-icon--label' );
?>
<a class="<?php echo esc_attr( join( ' ', $item_classes ) ); ?> ">
	<span class="hamburger hamburger--squeeze">
		<span class="hamburger-box">
			<span class="hamburger-inner"></span>
		</span>
	</span>
	<span class="<?php echo esc_attr( join( ' ', $label_classes ) ); ?>"><?php echo esc_attr( $text ); ?></span>
</a>


