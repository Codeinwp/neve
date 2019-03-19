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

use HFG\Core\Builder\Header as HeaderBuilder;

$id         = current_component( HeaderBuilder::BUILDER_NAME, 'header_search' )->get_id();
$placeholder      = get_theme_mod( $id . '_placeholder', __( 'Search for ...', 'hfg-module' ) );

$component_styles_array = [];

$component_styles_array['padding'] = '0;';
$component_styles_array['margin'] = '8px 2px;';

if ( ! empty( $component_styles_array ) ) {
	$component_styles = ' style="';
	foreach ( $component_styles_array as $key => $value ) {
		$component_styles .= sprintf( '%1$s: %2$s', $key, $value );
	}
	$component_styles .= '" ';
}

?>

<div class="widget widget-search" <?php echo( wp_kses_post( $component_styles ) ); ?> >
	<form role="search" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
		<div class="search-form-fields">
			<span class="screen-reader-text"><?php echo _x( 'Search for:', 'label', 'hfg-module' ); ?></span>
			<input type="search" class="search-field" placeholder="<?php echo esc_attr( $placeholder ); ?>" value="<?php echo get_search_query(); ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label', 'hfg-module' ); ?>" />
		</div>
		<button type="submit" class="search-submit">
			<svg aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
				<path fill="currentColor" fill-rule="evenodd" d="M12.514 14.906a8.264 8.264 0 0 1-4.322 1.21C3.668 16.116 0 12.513 0 8.07 0 3.626 3.668.023 8.192.023c4.525 0 8.193 3.603 8.193 8.047 0 2.033-.769 3.89-2.035 5.307l4.999 5.552-1.775 1.597-5.06-5.62zm-4.322-.843c3.37 0 6.102-2.684 6.102-5.993 0-3.31-2.732-5.994-6.102-5.994S2.09 4.76 2.09 8.07c0 3.31 2.732 5.993 6.102 5.993z"></path>
			</svg>
		</button>
	</form>
</div>