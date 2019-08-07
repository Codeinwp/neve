<?php
/**
 * Test file not part of the project
 *
 * @package HFG
 */
$header_components = array(
	'HFG\Core\Components\Logo',
	'HFG\Core\Components\MenuIcon',
	'HFG\Core\Components\Nav',
	'HFG\Core\Components\Button',
	'HFG\Core\Components\CustomHtml',
	'HFG\Core\Components\Search',
	'HFG\Core\Components\SearchResponsive',
	'HFG\Core\Components\SecondNav',
);
if ( class_exists( 'WooCommerce', false ) ) {
	$header_components[] = 'HFG\Core\Components\CartIcon';
}

add_theme_support(
	'hfg_support',
	array(
		'builders' => array(
			'HFG\Core\Builder\Header' => $header_components,
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
require_once 'functions-template.php';
require_once 'functions-migration.php';

add_action(
	'neve_do_footer',
	function () {
		do_action( 'hfg_footer_render' );
	}
);

add_action(
	'neve_do_header',
	function () {
		do_action( 'hfg_header_render' );
	}
);
if ( version_compare( PHP_VERSION, '5.3.29' ) > 0 && class_exists( 'HFG\Main' ) ) {
	add_action( 'after_setup_theme', 'HFG\Main::get_instance' );
}
