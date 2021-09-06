<?php
/**
 * Search form
 *
 * @package Neve.
 */

$placeholder = apply_filters( 'nv_search_placeholder', __( 'Search for...', 'neve' ) );
$aria_label  = __( 'Search', 'neve' );
$home_url    = home_url( '/' );
if ( function_exists( 'PLL' ) ) {
	$pll_data = PLL();
	if ( property_exists( $pll_data, 'links' ) && method_exists( $pll_data->links, 'get_home_url' ) ) {
		$home_url = $pll_data->links->get_home_url( null, true );
	}
}

?>

<form role="search"
	method="get"
	class="search-form"
	action="<?php echo esc_url( $home_url ); ?>">
	<label>
		<span class="screen-reader-text"><?php echo esc_html__( 'Search for...', 'neve' ); ?></span>
	</label>
	<input type="search"
		class="search-field"
		placeholder="<?php echo esc_attr( $placeholder ); ?>"
		value=""
		name="s"/>
	<button type="submit"
			class="search-submit"
			aria-label="<?php echo esc_attr( $aria_label ); ?>">
		<span class="nv-search-icon-wrap">
			<?php neve_search_icon( false, true ); ?>
		</span>
	</button>
</form>
