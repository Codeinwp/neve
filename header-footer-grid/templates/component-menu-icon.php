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

$text            = get_theme_mod( current_component( HeaderBuilder::BUILDER_NAME )->get_section_id() . '_text' . '_setting', __( 'Menu', 'neve' ) );
$item_classes    = [];
$item_classes[]  = 'menu-mobile-toggle item-button navbar-toggle-wrapper';
$item_attributes = apply_filters( 'neve_nav_toggle_data_attrs', '' );

$label_classes = array( 'nav-icon--label' );

?>
<div class="<?php echo esc_attr( join( ' ', $item_classes ) ); ?>">
	<button class="navbar-toggle" <?php echo wp_kses_post( $item_attributes ); ?>
			aria-label="<?php _e( 'Navigation Menu', 'neve' ); ?>">
		<div class="bars">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</div>
		<span class="screen-reader-text"><?php esc_html_e( 'Toggle Navigation', 'neve' ); ?></span>
		<span class="<?php echo esc_attr( join( ' ', $label_classes ) ); ?>"><?php echo esc_attr( $text ); ?></span>
	</button>
</div> <!--.navbar-toggle-wrapper-->


