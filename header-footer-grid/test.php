<?php

add_theme_support(
	'hfg_support',
	array(
		'builders' => array(
			'HFG\Core\Builder\Header' => array(
				'HFG\Components\Button',
			)
		)
	)
);