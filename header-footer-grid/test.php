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
				'HFG\Core\Components\Search',
				'HFG\Core\Components\SecondNav',
			),
			'HFG\Core\Builder\Footer' => array(
				'HFG\Core\Components\FooterWidgetOne',
				'HFG\Core\Components\FooterWidgetTwo',
				'HFG\Core\Components\FooterWidgetThree',
				'HFG\Core\Components\FooterWidgetFour',
				'HFG\Core\Components\NavFooter',
				'HFG\Core\Components\Copyright',
			),
		),
	)
);
require_once "functions-template.php";
/**
 * Disable search icon in menu as HFG has a search icon item already.
 */
add_filter( 'neve_should_search_in_menu', '__return_false' );

add_filter(
	'hfg_active', function () {
	return true;
}
);

if ( apply_filters( 'hfg_active', false ) === true ) {
	add_action( 'neve_do_footer', function () {
		do_action( 'hfg_footer_render' );
	} );
	add_action( 'neve_do_header', function () {
		do_action( 'hfg_header_render' );
	} );
}
