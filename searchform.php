<?php
/**
 * Search form
 *
 * @package Neve.
 */

$placeholder     = apply_filters( 'nv_search_placeholder', __( 'Search for...', 'neve' ) );
$aria_label      = __( 'Search', 'neve' );
$current_lang    = function_exists( 'pll_current_language' ) ? pll_current_language() : '';
$default_lang    = function_exists( 'pll_default_language' ) ? pll_default_language() : '';
$language_subdir = $current_lang !== $default_lang ? $current_lang . '/' : '';

?>

<form role="search"
	method="get"
	class="search-form"
	action="<?php echo esc_url( home_url( '/' . $language_subdir ) ); ?>">
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
