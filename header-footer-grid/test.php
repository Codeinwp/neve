<?php
/**
 * Test file not part of the project
 *
 * @package HFG
 */

add_theme_support(
	'hfg_support',
	array(
		'builders' => array(
			'HFG\Core\Builder\Header' => array(
				'HFG\Core\Components\Logo',
				'HFG\Core\Components\MenuIcon',
				'HFG\Core\Components\Nav',
				'HFG\Core\Components\Button',
				'HFG\Core\Components\CustomHtml',
			),
//			'HFG\Core\Builder\Footer' => array(
//				'HFG\Core\Components\FooterWidgetOne',
//				'HFG\Core\Components\FooterWidgetTwo',
//				'HFG\Core\Components\FooterWidgetThree',
//				'HFG\Core\Components\FooterWidgetFour',
//				'HFG\Core\Components\NavFooter',
//				'HFG\Core\Components\Copyright',
//			),
		),
	)
);
require_once "functions-template.php";
/**
 * Define timestamp which will be used as refference when we enable the HFG functionality.
 * If the theme is installed after this, they would see the HFG by default.
 */
define( 'NEVE_TOGGLE_HFG_TIMESTAMP', 1552487483 );
/**
 * Disable search icon in menu as HFG has a search icon item already.
 */
add_filter( 'neve_should_search_in_menu', '__return_false' );

add_filter(
	'hfg_active', function () {
	return false;
//	return ! ( isset( $_GET['builder_off'] ) && $_GET['builder_off'] === 'true' );
//	if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
//		return true;
//	}
//
//	return NEVE_TOGGLE_HFG_TIMESTAMP < get_option( 'neve_install', time() );
}
);
if ( apply_filters( 'hfg_active',false ) === true ) {
	remove_all_actions( 'neve_do_footer' );
	add_action( 'neve_do_footer', function () {
		do_action( 'hfg_footer_render' );
	} );
	remove_all_actions( 'neve_do_header' );
	add_action( 'neve_do_header', function () {
		do_action( 'hfg_header_render' );
	} );
}
