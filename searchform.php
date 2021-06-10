<?php
/**
 * Search form
 */

$placeholder = apply_filters( 'nv_search_placeholder', __( 'Search for...', 'neve' ) );
$aria_label  = __( 'Search', 'neve' );
?>

<form role="search"
	  method="get"
	  class="search-form"
	  action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php echo esc_html__( 'Search for...', 'neve' ); ?></span>
	</label>
	<input type="search"
		   class="search-field"
		   placeholder="<?php esc_attr_e( $placeholder ); ?>"
		   value=""
		   name="s"/>
	<button type="submit"
			class="search-submit"
			aria-label="<?php esc_attr_e( $aria_label ); ?>">
		<span class="nv-search-icon-wrap">
			<?php neve_search_icon( false, true ); ?>
		</span>
	</button>
</form>
