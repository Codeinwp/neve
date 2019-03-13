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
			),
			'HFG\Core\Builder\Footer' => array(
				'HFG\Core\Components\FooterWidgetOne',
				'HFG\Core\Components\FooterWidgetTwo',
				'HFG\Core\Components\FooterWidgetThree',
				'HFG\Core\Components\FooterWidgetFour',
				'HFG\Core\Components\FooterWidgetFive',
				'HFG\Core\Components\FooterWidgetSix',
				'HFG\Core\Components\Copyright',
			),
		),
	)
);
/**
 * Define timestamp which will be used as refference when we enable the HFG functionality.
 * If the theme is installed after this, they would see the HFG by default.
 */
define( 'NEVE_TOGGLE_HFG_TIMESTAMP', 1552487483 );

add_filter( 'hfg_active', function () {
	$install_time = get_option( 'neve_install', time() );

	return NEVE_TOGGLE_HFG_TIMESTAMP < $install_time;
} );
