<?php

add_theme_support(
	'hfg_support',
	array(
		'builders' => array(
			'HFG\Core\Builder\Header' => array(
				'HFG\Core\Components\Logo',
				'HFG\Core\Components\MenuIcon',
				'HFG\Core\Components\Button',
				'HFG\Core\Components\ButtonTwo',
			)
		)
	)
);