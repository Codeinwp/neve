<?php
/**
 * Migration schema from Old header/footer.
 *
 * @version 1.0.0
 * @package HFG
 */

/**
 * Handles migration for skin modes of rows
 */
function neve_hfg_migrate_skin_to_bg_color() {
	$flag = 'neve_migrated_hfg_colors';
	if ( get_theme_mod( $flag ) ) {
		return;
	}

	$defaults = [
		'header'      => [
			'top'     => [
				'bg'           => '#f0f0f0',
				'other_bg'     => '#24292e',
				'default_skin' => 'light-mode',
			],
			'main'    => [
				'bg'           => '#ffffff',
				'other_bg'     => '#24292e',
				'default_skin' => 'light-mode',
			],
			'bottom'  => [
				'bg'           => '#ffffff',
				'other_bg'     => '#24292e',
				'default_skin' => 'light-mode',
			],
			'sidebar' => [
				'bg'           => '#ffffff',
				'other_bg'     => '#24292e',
				'default_skin' => 'light-mode',
			],
		],
		'footer'      => [
			'top'    => [
				'bg'           => '#ffffff',
				'other_bg'     => '#24292e',
				'default_skin' => 'light-mode',
			],
			'bottom' => [
				'bg'           => '#24292e',
				'other_bg'     => '#ededed',
				'default_skin' => 'dark-mode',
			],
		],
		'page_header' => [
			'top'    => [
				'bg'           => '#ffffff',
				'other_bg'     => '#24292e',
				'default_skin' => 'light-mode',
			],
			'bottom' => [
				'bg'           => '#ffffff',
				'other_bg'     => '#24292e',
				'default_skin' => 'light-mode',
			],
		],
	];
	foreach ( $defaults as $builder => $rows ) {
		foreach ( $rows as $row_id => $arg ) {
			$skin = get_theme_mod( 'hfg_' . $builder . '_layout_' . $row_id . '_skin' );
			if ( empty( $skin ) || $skin === $arg['default_skin'] ) {
				continue;
			}

			$mod_key    = 'hfg_' . $builder . '_layout_' . $row_id . '_background';
			$background = get_theme_mod( $mod_key );
			if ( empty( $background ) ) {
				continue;
			}

			if ( $background['type'] !== 'color' || $background['colorValue'] !== $arg['bg'] ) {
				continue;
			}

			$background['colorValue'] = $arg['other_bg'];
			set_theme_mod( $mod_key, $background );
		}
	}
	set_theme_mod( $flag, true );
}

add_action( 'init', 'neve_hfg_migrate_skin_to_bg_color' );


/**
 * Define migration logic for footer.
 *
 * @return array Migration schema.
 */
function neve_hfg_footer_settings() {

	$empty_row = [
		'left'    => [],
		'c-left'  => [],
		'center'  => [],
		'c-right' => [],
		'right'   => [],
	];

	$builder = [
		'desktop' => [
			'top'    => $empty_row,
			'bottom' => $empty_row,
		],
	];

	$components                                        = [];
	$builder['desktop']['bottom']['center'][]          = [
		'id' => 'footer_copyright',
	];
	$components['footer_copyright']['component_align'] = 'center';

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
	$empty_row = [
		'left'    => [],
		'c-left'  => [],
		'center'  => [],
		'c-right' => [],
		'right'   => [],
	];
	$builder   = [
		'desktop' => [
			'top'    => $empty_row,
			'main'   => $empty_row,
			'bottom' => $empty_row,
		],
		'mobile'  => [
			'top'     => $empty_row,
			'main'    => $empty_row,
			'bottom'  => $empty_row,
			'sidebar' => [],
		],
	];

	$components                            = [];
	$builder['desktop']['main']['left'][]  = [
		'id'       => 'logo',
		'settings' => [
			'align' => 'left',
		],
	];
	$builder['desktop']['main']['right'][] = [
		'id'       => 'primary-menu',
		'settings' => [
			'align' => 'right',
		],
		'width'    => 8,
		'x'        => 4,
	];
	$builder['mobile']['main']['left'][]   = [
		'id'    => 'logo',
		'width' => 8,
		'x'     => 0,
	];
	$builder['mobile']['main']['right'][]  = [
		'id'    => 'nav-icon',
		'width' => 4,
		'x'     => 8,
	];
	$builder['mobile']['sidebar'][]        = [
		'id'    => 'primary-menu',
		'width' => 8,
		'x'     => 0,
	];

	$components['nav-icon']['component_align']     = 'right';
	$components['primary-menu']['component_align'] = 'right';
	$components['logo']['component_align']         = 'left';

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
				'hfg_header_layout' => wp_json_encode( $header['builder'] ),
				'hfg_footer_layout' => wp_json_encode( $footer['builder'] ),
			],
			$defaults
		);

	}
);


/**
 * Add class to page header menu.
 *
 * @param array $args Nav menu args.
 *
 * @return array
 */
function neve_add_page_header_menu_classes( $args ) {
	if ( $args['theme_location'] !== 'page-header' ) {
		return $args;
	}

	$args['menu_class'] .= ' nav-ul';

	return $args;
}

add_filter( 'wp_nav_menu_args', 'neve_add_page_header_menu_classes', 10, 4 );
