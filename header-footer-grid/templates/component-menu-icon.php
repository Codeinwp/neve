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

$item_classes    = [];
$item_classes[]  = 'menu-mobile-toggle item-button navbar-toggle-wrapper';
$item_attributes = apply_filters( 'neve_nav_toggle_data_attrs', '' );

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
	</button>
</div> <!--.navbar-toggle-wrapper-->


