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

?>
<span class="menu-item-nav-search responsive-nav-search" <?php echo  wp_kses_post( $component_styles ); ?> tabindex="0" aria-label="search">
<a><span class="nv-icon nv-search"></span></a>
<div class="nv-nav-search">
    <div class="container close-container">
        <a class="button button-secondary close-responsive-search"><?php echo __( 'Close', 'neve' ); ?></a>
    </div>
    <?php get_search_form(); ?>
    </div>
</span>
