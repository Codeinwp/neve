<?php
/**
 * Search form
 *
 * @package Neve.
 */

$form_classes = [ 'search-form' ];

$placeholder = array_key_exists( 'placeholder', $args ) ? $args['placeholder'] : __( 'Search for...', 'neve' );

if ( array_key_exists( 'additional_form_classes', $args ) && is_array( $args['additional_form_classes'] ) ) {
	$form_classes = array_merge( $form_classes, $args['additional_form_classes'] );
}

$value = array_key_exists( 'value', $args ) ? $args['value'] : '';

$placeholder = apply_filters( 'nv_search_placeholder', $placeholder );
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
	class="<?php echo esc_attr( implode( ' ', $form_classes ) ); ?>"
	action="<?php echo esc_url( $home_url ); ?>">
	<label>
		<span class="screen-reader-text"><?php echo esc_html__( 'Search for...', 'neve' ); ?></span>
	</label>
	<input type="search"
		class="search-field"
		aria-label="<?php echo esc_attr__( 'Search', 'neve' ); ?>"
		placeholder="<?php echo esc_attr( $placeholder ); ?>"
		value="<?php echo esc_attr( $value ); ?>"
		name="s"/>
	<button type="submit"
			class="search-submit"
			aria-label="<?php echo esc_attr( $aria_label ); ?>">
		<span class="nv-search-icon-wrap">
			<?php neve_search_icon( false, true ); ?>
		</span>
	</button>
	<?php
	if ( array_key_exists( 'post_type', $args ) ) {
		echo '<input type="hidden" name="post_type" value="' . esc_attr( $args['post_type'] ) . '"/>';
	}
	?>
</form>
