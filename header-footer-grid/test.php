<?php
/**
 * Test file not part of the project
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
