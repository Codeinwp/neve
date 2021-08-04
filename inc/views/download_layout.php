<?php
/**
 * Author:          Uriahs Victor
 * Created on:      14/07/2021 (d/m/y)
 *
 * @package Neve
 */
namespace Neve\Views;

/**
 * Class Download_Layout
 *
 * @package Neve\Views
 */
class Download_Layout extends Base_View {

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_do_download', array( $this, 'render_download_archive' ) );
	}

	/**
	 * Render the archive content.
	 *
	 * @param string $context the context provided in do_action.
	 */
	public function render_download_archive( $context ) {
		if ( $context !== 'archive' ) {
			return;
		}
		
		// $buy_now = __('Buy Now', 'neve');
		// $defaults = apply_filters( 'edd_purchase_link_defaults', array(
		// 'download_id' => $post_id,
		// 'price'       => (bool) false,
		// 'price_id'    => isset( $args['price_id'] ) ? $args['price_id'] : false,
		// 'direct'      => $button_behavior == 'direct' ? true : false,
		// 'text'        => $button_behavior == 'direct' ? edd_get_option( 'buy_now_text', __( 'Buy Now', 'easy-digital-downloads' ) ) : edd_get_option( 'add_to_cart_text', __( 'Purchase', 'easy-digital-downloads' ) ),
		// 'checkout'    => edd_get_option( 'checkout_button_text', _x( 'Checkout', 'text shown on the Add to Cart Button when the product is already in the cart', 'easy-digital-downloads' ) ),
		// 'style'       => edd_get_option( 'button_style', 'button' ),
		// 'color'       => edd_get_option( 'checkout_color', 'blue' ),
		// 'class'       => 'edd-submit'
		// ) );
		// TODO Give users the ability to switch between link to go to single post and directly adding to cart
		?>
		<div class="neve-edd-download" id="edd_download_<?php the_ID(); ?>">
			<ul>
				<li><?php the_post_thumbnail( 'medium' ); ?></li>
				<li><p><?php the_title(); ?></p></li>
				<li><p><?php edd_price( get_the_ID() ); ?></p></li>
				<!-- <li> -->
					<!-- <div class="edd_download_buy_button">	 -->
					<?php // echo edd_get_purchase_link( array( 'download_id' => get_the_ID(), 'text' => 'Buy Now' ) ); ?>
					<!-- </div> -->
				<!-- </li>  -->
				<li><a href="<?php echo esc_url( get_permalink() ); ?>"><?php _e( 'Buy Now', 'neve' ); ?> </a></li>
			</ul>
		</div>
		<?php
	}

	/**
	 * Render the single download content.
	 *
	 * @param string $context the context provided in do_action.
	 */
	public function render_download_single( $context ) {
		if ( $context !== 'single' ) {
			return;
		}

	}   

}
