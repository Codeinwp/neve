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

use HFG\Core\Components\CartIcon;

$icon_type         = CartIcon::should_load_pro_features() ? component_setting( CartIcon::ICON_SELECTOR, 'cart-icon-style1' ) : 'cart-icon-style1';
$icon_custom       = CartIcon::should_load_pro_features() ? component_setting( CartIcon::ICON_CUSTOM, '' ) : '';
$cart_style        = CartIcon::should_load_pro_features() ? component_setting( CartIcon::MINI_CART_STYLE, 'dropdown' ) : 'dropdown';
$custom_html       = CartIcon::should_load_pro_features() ? component_setting( CartIcon::AFTER_CART_HTML ) : '';
$expand_enabled    = CartIcon::should_load_pro_features() ? component_setting( CartIcon::CART_FOCUS, 1 ) : true;
$cart_label        = CartIcon::should_load_pro_features() ? parse_dynamic_tags( component_setting( CartIcon::CART_LABEL ) ) : '';
$allowed_post_tags = wp_kses_allowed_html( 'header_footer_grid' );
$cart_is_empty     = WC()->cart->get_cart_contents_count() === 0;

$off_canvas_closing_button = '';
$mini_cart_classes         = [ 'nv-nav-cart', 'widget' ];
$mini_cart_attributes      = '';
$opener_attributes         = '';
if ( $cart_style === 'off-canvas' ) {
	$mini_cart_classes         = [ 'nv-nav-cart', 'cart-off-canvas', 'widget' ];
	$off_canvas_closing_button = '<div class="cart-off-canvas-button-wrapper"><button type="button" class="nv-close-cart-sidebar button button-secondary secondary-default">' . __( 'Close', 'neve' ) . '</button></div>';
	// The drawer is a modal dialog; it ships inert (out of the tab order
	// and the accessibility tree while parked off-screen) and the
	// booster's cart-off-canvas.js lifts that on open. The opener stays a
	// real link to the cart page so everything still works without it.
	$mini_cart_attributes = ' role="dialog" aria-modal="true" aria-label="' . esc_attr__( 'Cart', 'neve' ) . '" inert';
	$opener_attributes    = ' aria-haspopup="dialog" aria-expanded="false"';
}
if ( (bool) $expand_enabled === false ) {
	$mini_cart_classes[] = 'expand-disable';
}
?>

<div class="component-wrap">
	<div class="responsive-nav-cart menu-item-nav-cart
	<?php
	echo esc_attr( $cart_style );
	echo $cart_is_empty ? ' cart-is-empty' : '';
	?>
	">
		<a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="cart-icon-wrapper"<?php echo $opener_attributes; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped, Static markup, values escaped above. ?>>
			<?php
			if ( ! empty( $cart_label ) ) {
				echo '<span class="cart-icon-label inherit-ff">';
				echo wp_kses_post( $cart_label );
				echo '</span>';
			}
			?>
			<?php neve_cart_icon( true, 15, $icon_type, $icon_custom ); ?>
			<span class="screen-reader-text">
				<?php esc_html_e( 'Cart', 'neve' ); ?>
			</span>
			<span class="cart-count">
				<?php echo esc_html( WC()->cart->get_cart_contents_count() ); ?>
			</span>
			<?php do_action( 'neve_cart_icon_after_cart_total' ); ?>
		</a>
		<?php if ( $cart_style !== 'link' && ! is_cart() && ! is_checkout() ) { ?>
		<div class="<?php echo esc_attr( implode( ' ', $mini_cart_classes ) ); ?>"<?php echo $mini_cart_attributes; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped, Static markup, values escaped above. ?>>

			<?php
			/**
			 * Executes actions before the cart popup content.
			 *
			 * @since 2.9.3
			 */
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

			/**
			 * Executes actions after the cart popup content.
			 *
			 * @since 2.9.3
			 */
			do_action( 'neve_after_cart_popup' );
			?>
		</div>
		<?php } ?>
	</div>
</div>


