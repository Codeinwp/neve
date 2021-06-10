<?php
/**
 * The template for displaying product search form
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$index       = isset( $index ) ? absint( $index ) : 0;
$placeholder = apply_filters( 'nv_woo_search_placeholder', __( 'Search products&hellip;', 'neve' ) );
$aria_label  = __( 'Search', 'neve' );

?>
<form role="search"
	  method="get"
	  class="search-form woocommerce-product-search"
	  action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label for="woocommerce-product-search-field-<?php esc_attr_e( $index ); ?>">
		<span class="screen-reader-text"><?php echo esc_html__( 'Search for...', 'neve' ); ?></span>
	</label>
	<input type="search"
		   class="search-field"
		   placeholder="<?php esc_attr_e( $placeholder ); ?>"
		   value="<?php echo get_search_query(); ?>"
		   id="woocommerce-product-search-field-<?php esc_attr_e( $index ); ?>"
		   name="s"/>
	<button type="submit"
			class="search-submit"
			aria-label="<?php esc_attr_e( $aria_label ); ?>">
		<span class="nv-search-icon-wrap">
			<?php neve_search_icon( false, true ); ?>
		</span>
	</button>
	<input type="hidden" name="post_type" value="product"/>
</form>


