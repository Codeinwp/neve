<?php
/**
 * Template used for component rendering wrapper.
 *
 * Author:          Uriahs Victor
 * Created on:      06/01/2022 (d/m/y)
 * 
 * @package HFG
 */

namespace HFG;

use HFG\Core\Components\EddCartIcon;

$edd_separator = apply_filters( 'nv_edd_cart_total_separator', '-' );
$cart_icon     = EddCartIcon::should_load_pro_features() ? component_setting( EddCartIcon::ICON_SELECTOR, 'cart-icon-style1' ) : 'cart-icon-style1';
$cart_label    = EddCartIcon::should_load_pro_features() ? parse_dynamic_tags( component_setting( EddCartIcon::CART_LABEL ) ) : '';
?>

<div class="component-wrap">
	<div class="responsive-nav-cart menu-item-nav-cart">
		<a href="<?php echo esc_url( edd_get_checkout_uri() ); ?>" class="cart-icon-wrapper">
			<?php
			if ( ! empty( $cart_label ) ) {
				echo '<span class="edd-cart-icon-label">';
				echo wp_kses_post( $cart_label );
				echo '</span>';
			}
			?>
			<?php neve_cart_icon( true, 15, $cart_icon ); ?>
			<span class="screen-reader-text">
				<?php esc_html_e( 'Cart', 'neve' ); ?>
			</span>
			<span class="edd-cart-count">
			<span class="edd-cart-quantity">
				<?php echo esc_html( edd_get_cart_quantity() ); ?>
			</span>
			</span>
			<?php do_action( 'neve_cart_icon_after_cart_total' ); ?>
		</a>
	</div>
</div>
