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
?>
<div class="component-wrap">
	<div class=" responsive-nav-cart menu-item-nav-cart">
		<a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="cart-icon-wrapper">
			<?php neve_cart_icon( true ); ?>
			<span class="screen-reader-text">
				<?php esc_html_e( 'Cart', 'neve' ); ?>
			</span>
			<span class="cart-count">
				<?php echo esc_html( WC()->cart->get_cart_contents_count() ); ?>
			</span>
		</a>
		<div class="nv-nav-cart widget">
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
	</div>
</div>


