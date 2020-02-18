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

use Neve_Pro\Modules\Woocommerce_Booster\Customizer\Cart_Icon;

$icon_type         = class_exists( '\Neve_Pro\Modules\Woocommerce_Booster\Customizer\Cart_Icon' ) ? component_setting( Cart_Icon::ICON_SELECTOR, 'cart-icon-style1' ) : '';
$cart_style        = class_exists( '\Neve_Pro\Modules\Woocommerce_Booster\Customizer\Cart_Icon' ) ? component_setting( Cart_Icon::MINI_CART_STYLE, 'dropdown' ) : 'dropdown';
$cart_label        = class_exists( '\Neve_Pro\Modules\Woocommerce_Booster\Customizer\Cart_Icon' ) ? parse_dynamic_tags( component_setting( Cart_Icon::CART_LABEL ) ) : '';
$custom_html       = class_exists( '\Neve_Pro\Modules\Woocommerce_Booster\Customizer\Cart_Icon' ) ? component_setting( Cart_Icon::AFTER_CART_HTML ) : '';
$allowed_post_tags = wp_kses_allowed_html( 'header_footer_grid' );

$off_canvas_closing_button = '';
$mini_cart_classes         = array( 'nv-nav-cart', 'widget' );
if ( class_exists( '\Neve_Pro\Modules\Woocommerce_Booster\Customizer\Cart_Icon' ) && (bool) component_setting( Cart_Icon::CART_FOCUS, 1 ) === false ) {
	$mini_cart_classes[] = 'expand-disable';
}
if ( $cart_style === 'off-canvas' ) {
	$mini_cart_classes[] = 'cart-off-canvas';
	$mini_cart_classes[] = 'col-sm-12';
	$mini_cart_classes[] = 'nv-right';

	$key = array_search( 'nv-nav-cart', $mini_cart_classes, true );
	if ( $key !== false ) {
		unset( $mini_cart_classes[ $key ] );
	}

	$key = array_search( 'widget', $mini_cart_classes, true );
	if ( $key !== false ) {
		unset( $mini_cart_classes[ $key ] );
	}

	$off_canvas_closing_button = '<div class="cart-off-canvas-button-wrapper"><span class="nv-close-cart-sidebar button button-secondary">' . __( 'Close', 'neve' ) . '</span></div>';
} ?>

<div class="component-wrap">
	<div class="responsive-nav-cart menu-item-nav-cart <?php echo esc_attr( $cart_style ); ?>">
		<a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="cart-icon-wrapper">
			<?php
			if ( ! empty( $cart_label ) ) {
				echo '<span class="cart-icon-label">';
				echo wp_kses_post( $cart_label );
				echo '</span>';
			}
			?>
			<?php neve_cart_icon( true, 15, $icon_type ); ?>
			<span class="screen-reader-text">
				<?php esc_html_e( 'Cart', 'neve' ); ?>
			</span>
			<span class="cart-count">
				<?php echo esc_html( WC()->cart->get_cart_contents_count() ); ?>
			</span>
			<?php do_action( 'neve_cart_icon_after_cart_total' ); ?>
		</a>
		<?php if ( $cart_style !== 'link' && ! is_cart() && ! is_checkout() ) { ?>
		<div class="<?php echo esc_attr( implode( ' ', $mini_cart_classes ) ); ?>">
			<div class="widget woocommerce widget_shopping_cart">
				<?php
				do_action( 'neve_before_cart_popup' );
				echo wp_kses_post( $off_canvas_closing_button );
				the_widget(
					'WC_Widget_Cart',
					array(
						'title'         => ' ',
						'hide_if_empty' => true,
					),
					array(
						'before_title' => '',
						'after_title'  => '',
					)
				);
				if ( ! empty( $custom_html ) ) {
					echo '<div class="after-cart-html">';
					echo wp_kses( balanceTags( apply_filters( 'neve_post_content', $custom_html ), true ), $allowed_post_tags );
					echo '</div>';
				}
				do_action( 'neve_after_cart_popup' );
				?>
			</div>
		</div>
		<?php } ?>
	</div>
</div>


