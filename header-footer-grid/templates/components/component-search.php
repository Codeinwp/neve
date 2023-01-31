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

use HFG\Core\Components\Search;

$component_styles_array = [];

$component_styles_array['padding'] = '0;';
$component_styles_array['margin']  = '8px 2px;';

$component_styles = '';
if ( ! empty( $component_styles_array ) ) {
	$component_styles = ' style="';
	foreach ( $component_styles_array as $key => $value ) {
		$component_styles .= sprintf( '%1$s: %2$s', $key, $value );
	}
	$component_styles .= '" ';
}

$args = [];

if ( component_setting( Search::ACTION_TYPE ) === 'button' ) {
	$args['button_text'] = component_setting( Search::BUTTON_TEXT, Search::get_default_button_text() );
}

?>
<div class="component-wrap search-field">
	<div class="widget widget-search" <?php echo wp_kses_post( $component_styles ); ?> >
		<?php get_search_form( $args ); ?>
	</div>
</div>
