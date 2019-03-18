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

use HFG\Core\Builder\Footer as FooterBuilder;

$id = current_component( FooterBuilder::BUILDER_NAME )->get_id();

$tags = array(
	'current_year' => date_i18n( 'Y' ),
	'site_title'   => get_bloginfo( 'name' ),
	'theme_author' => sprintf( '<a href="https://themeisle.com">%1$s</a>', 'Themeisle' ), // Brand name.
);

$content = get_theme_mod( $id . '_content', __( 'Copyright &copy; {current_year} {site_title} - Powered by {theme_author}.', 'hfg-module' ) );
foreach ( $tags as $k => $v ) {
	$content = str_replace( '{' . $k . '}', $v, $content );
}

echo wp_kses_post( balanceTags( $content, true ) );


