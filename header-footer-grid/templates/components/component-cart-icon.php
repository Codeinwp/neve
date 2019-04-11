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
	<div class=" responsive-nav-cart menu-item-nav-cart ">
		<a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="cart-icon-wrapper">
			<?php neve_cart_icon( true ); ?>
			<span class="screen-reader-text">
				<?php
				_e( 'Cart', 'neve' );  // WPCS: XSS OK.
				?>
				</span>
			<span class="cart-count">
			<?php
			echo WC()->cart->get_cart_contents_count();  // WPCS: XSS OK.
			?>
				</span>
		</a>
	</div>
</div>


