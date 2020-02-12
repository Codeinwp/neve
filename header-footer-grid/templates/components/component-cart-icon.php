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

$icon_type                = apply_filters( 'neve_cart_icon_type', '' );
$mini_cart_classes        = apply_filters( 'neve_cart_icon_mini_cart_classes', array( 'nv-nav-cart', 'widget' ) );
$nav_cart_wrapper_classes = apply_filters( 'neve_cart_icon_wrapper_classes', array( 'responsive-nav-cart', 'menu-item-nav-cart' ) );
?>
<div class="component-wrap">
	<div class="<?php echo esc_attr( implode( ' ', $nav_cart_wrapper_classes ) ); ?>">
		<a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="cart-icon-wrapper">
			<?php neve_cart_icon( true, 15, $icon_type ); ?>
			<span class="screen-reader-text">
				<?php esc_html_e( 'Cart', 'neve' ); ?>
			</span>
			<?php if ( apply_filters( 'neve_cart_icon_toggle_total', true ) === true ) { ?>
			<span class="cart-count">
				<?php echo esc_html( WC()->cart->get_cart_contents_count() ); ?>
			</span>
			<?php } ?>
			<?php do_action( 'neve_cart_icon_after_cart_total' ); ?>
		</a>
		<?php if ( apply_filters( 'neve_cart_icon_display_minicart', true ) === true ) { ?>
		<div class="<?php echo esc_attr( implode( ' ', $mini_cart_classes ) ); ?>">
			<div class="widget woocommerce widget_shopping_cart">
				<?php
				do_action( 'neve_before_cart_popup' );
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
				do_action( 'neve_after_cart_popup' );
				?>
			</div>
		</div>
		<?php } ?>
	</div>
</div>


