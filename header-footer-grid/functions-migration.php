<?php
/**
 * Migration schema from Old header/footer.
 *
 * @version 1.0.0
 * @package HFG
 */


/**
 * Define migration logic for footer.
 *
 * @return array Migration schema.
 */
function neve_hfg_footer_settings() {
	$builder  = [
		'desktop' => [
			'top'    => [],
			'bottom' => [],
		],
	];
	$sidebars = (int) get_theme_mod( 'neve_footer_widget_columns', '0' );

	$sidebars_names = array(
		'footer-one-widgets',
		'footer-two-widgets',
		'footer-three-widgets',
		'footer-four-widgets',
	);
	for ( $i = 0; $i < $sidebars; $i ++ ) {
		$builder['desktop']['top'][ $sidebars_names[ $i ] ] = [
			'id'    => $sidebars_names[ $i ],
			'width' => 12 / $sidebars,
			'x'     => $i * ( 12 / $sidebars ),
		];
	}
	$components   = [];
	$content_type = get_theme_mod( 'neve_footer_content_type', 'text' );
	if ( $content_type === 'text' ) {
		$builder['desktop']['bottom']['footer_copyright']  = [
			'id'    => 'footer_copyright',
			'width' => 12,
			'x'     => 0,
		];
		$components['footer_copyright']['component_align'] = 'center';
	}

	$components['hfg_footer_layout_bottom']['skin'] = 'dark-mode';

	if ( $content_type === 'footer_menu' ) {
		$builder['desktop']['bottom']['footer-menu']  = [
			'id'    => 'footer-menu',
			'width' => 12,
			'x'     => 0,
		];
		$components['footer-menu']['component_align'] = 'center';
	}

	return [
		'builder'    => $builder,
		'components' => $components,
	];
}
/**
 * Define migration logic for header.
 *
 * @return array Migratoin schema.
 */
function neve_hfg_header_settings() {
	$builder    = [
		'desktop' => [
			'top'    => [],
			'main'   => [],
			'bottom' => [],
		],
		'mobile'  => [
			'top'     => [],
			'main'    => [],
			'bottom'  => [],
			'sidebar' => [],
		],
	];
	$components = [];
	if ( (bool) get_theme_mod( 'neve_top_bar_enable', false ) ) {
		$alignament = get_theme_mod( 'neve_top_bar_layout', 'content-menu' );
		if ( $alignament === 'content-menu' ) {
			$builder['desktop']['top']['custom_html']    = [
				'id'    => 'custom_html',
				'width' => 6,
				'x'     => 0,
			];
			$builder['desktop']['top']['secondary-menu'] = [
				'id'    => 'secondary-menu',
				'width' => 6,
				'x'     => 6,
			];

			$components['custom_html']['component_align']    = 'left';
			$components['secondary-menu']['component_align'] = 'right';

		}
		if ( $alignament === 'menu-content' ) {
			$builder['desktop']['top']['secondary-menu']     = [
				'id'    => 'secondary-menu',
				'width' => 6,
				'x'     => 0,
			];
			$builder['desktop']['top']['custom_html']        = [
				'id'    => 'custom_html',
				'width' => 6,
				'x'     => 6,
			];
			$components['custom_html']['component_align']    = 'right';
			$components['secondary-menu']['component_align'] = 'left';
		}
	}

	$layout = get_theme_mod( 'neve_navigation_layout', 'left' );

	if ( $layout === 'left' ) {
		$builder['desktop']['main']['logo']            = [
			'id'       => 'logo',
			'width'    => 4,
			'x'        => 0,
			'settings' => [
				'align' => 'left',
			],
		];
		$builder['desktop']['main']['primary-menu']    = [
			'id'       => 'primary-menu',
			'settings' => [
				'align' => 'right',
			],
			'width'    => 8,
			'x'        => 4,
		];
		$components['primary-menu']['component_align'] = 'right';
		$components['logo']['component_align']         = 'left';
	}

	if ( $layout === 'center' ) {
		$builder['desktop']['main']['logo']            = [
			'id'       => 'logo',
			'width'    => 12,
			'x'        => 0,
			'settings' => [
				'align' => 'center',
			],
		];
		$builder['desktop']['bottom']['primary-menu']  = [
			'id'       => 'primary-menu',
			'width'    => 12,
			'x'        => 0,
			'settings' => [
				'align' => 'center',
			],
		];
		$components['primary-menu']['component_align'] = 'center';
		$components['logo']['component_align']         = 'center';
	}

	if ( $layout === 'right' ) {
		$builder['desktop']['main']['primary-menu']    = [
			'id'       => 'primary-menu',
			'width'    => 8,
			'settings' => [
				'align' => 'left',
			],
			'x'        => 0,
		];
		$builder['desktop']['main']['logo']            = [
			'id'       => 'logo',
			'width'    => 4,
			'settings' => [
				'align' => 'right',
			],
			'x'        => 8,
		];
		$components['primary-menu']['component_align'] = 'left';
		$components['logo']['component_align']         = 'right';
	}
	$builder['mobile']['main']['logo']            = [
		'id'    => 'logo',
		'width' => 8,
		'x'     => 0,
	];
	$builder['mobile']['main']['nav-icon']        = [
		'id'    => 'nav-icon',
		'width' => 4,
		'x'     => 8,
	];
	$builder['mobile']['sidebar']['primary-menu'] = [
		'id'    => 'primary-menu',
		'width' => 8,
		'x'     => 0,
	];
	$components['nav-icon']['component_align']    = 'right';

	return [
		'builder'    => $builder,
		'components' => $components,
	];
}

add_filter(
	'hfg_settings_schema',
	function ( $old_schema ) {
		$header     = neve_hfg_header_settings();
		$footer     = neve_hfg_footer_settings();
		$components = array_merge( $header['components'], $footer['components'] );
		$defaults   = [];
		foreach ( $components as $id => $settings ) {
			foreach ( $settings as $setting_id => $value ) {
				$defaults[ $id . '_' . $setting_id ] = $value;
			}
		}

		return array_merge(
			[
				'hfg_header_layout' => json_encode( $header['builder'] ),
				'hfg_footer_layout' => json_encode( $footer['builder'] ),
			],
			$defaults 
		);

	} 
);

