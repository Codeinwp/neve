<?php
/**
 * Description test-neve-sanitization.php
 *
 * Author:      Bogdan Preda <bogdan.preda@themeisle.com>
 * Created on:  30-03-{2023}
 *
 * @package neve
 */

use HFG\Traits\Core;

/**
 * Class SanitizationWrapperTraitClass
 */
class SanitizationWrapperTraitClass {
	use Core;
}

/**
 * Class TestSanitization
 */
class TestSanitization extends WP_UnitTestCase {

	/**
	 * Sanitization wrapper trait class.
	 *
	 * @var SanitizationWrapperTraitClass
	 */
	private $sanitization;

	/**
	 * Setup.
	 */
	public function setUp(): void {
		parent::setUp();

		$this->sanitization = new SanitizationWrapperTraitClass();
	}

	/**
	 * Test sanitize responsive int json.
	 */
	public function test_sanitize_responsive_int_json() {
		// Test value responsive int json. w/o. suffix.
		$input_value  = [
			'mobile'  => 1,
			'tablet'  => 2,
			'desktop' => 3,
		];

		$this->do_assertion_for_sanitize_responsive_int_json( $input_value );

		// Test value responsive int json. w. suffix.
		$input_value['suffix'] = [
			'mobile'  => 'px',
			'tablet'  => 'em',
			'desktop' => 'rem',
		];

		$this->do_assertion_for_sanitize_responsive_int_json( $input_value );

		// Test sanitization with string values.
		$input_value  = [
			'mobile'  => '1',
			'tablet'  => '2',
			'desktop' => '3',
		];
		$expected_value = [
			'mobile'  => 1,
			'tablet'  => 2,
			'desktop' => 3,
		];

		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, wp_json_encode( $expected_value ) );

		// Test sanitization with string values and suffix.
		$input_value  = [
			'mobile'  => '1',
			'tablet'  => '2',
			'desktop' => '3',
			'suffix'  => [
				'mobile'  => 'px',
				'tablet'  => 'em',
				'desktop' => 'rem',
			],
		];
		$expected_value = [
			'mobile'  => 1,
			'tablet'  => 2,
			'desktop' => 3,
			'suffix'  => [
				'mobile'  => 'px',
				'tablet'  => 'em',
				'desktop' => 'rem',
			],
		];

		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, wp_json_encode( $expected_value ) );

		// Test that for invalid input or failed sanitization the default value is returned.
		$expected_default = '{"mobile":0,"tablet":0,"desktop":0}';
		$input_value = 'invalid';
		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_default );

		$input_value = [];
		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_default );

		// Test partial valid input.
		$expected_value = '{"mobile":1,"tablet":0,"desktop":0}';
		$input_value = [
			'mobile'  => 1,
		];
		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_value );

		// Test partial valid input with suffix.
		$expected_value = '{"mobile":1,"tablet":0,"desktop":0,"suffix":{"mobile":"rem","tablet":"px","desktop":"px"}}';
		$input_value = [
			'mobile'  => 1,
			'suffix'  => [
				'mobile'  => 'rem',
			],
		];
		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_value );

		// Test Invalid devices input with suffix.
		$input_value = [
			'mobile'  => 1,
			'suffix'  => [
				'mobile'  => 'rem',
				'car'     => 'rem',
			],
		];
		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_value );
	}

	/**
	 * Responsive sanitizer accepts the decoded array and non-string input (neve#4651).
	 */
	public function test_sanitize_responsive_int_json_with_native_array_and_non_string_values() {
		$default = '{"mobile":0,"tablet":0,"desktop":0}';
		$array   = [
			'mobile'  => '1',
			'tablet'  => 2,
			'desktop' => '3',
			'suffix'  => [
				'mobile'  => 'em',
				'tablet'  => 'px',
				'desktop' => 'rem',
			],
		];

		$this->assertSame(
			'{"mobile":1,"tablet":2,"desktop":3,"suffix":{"mobile":"em","tablet":"px","desktop":"rem"}}',
			$this->sanitization->sanitize_responsive_int_json( $array )
		);
		$this->assertSame( $default, $this->sanitization->sanitize_responsive_int_json( [] ) );
		$this->assertSame( $default, $this->sanitization->sanitize_responsive_int_json( null ) );
		$this->assertSame( $default, $this->sanitization->sanitize_responsive_int_json( 12 ) );
		$this->assertSame( $default, $this->sanitization->sanitize_responsive_int_json( false ) );
	}

	/**
	 * Plain JSON sanitizer accepts the decoded array and non-string input.
	 */
	public function test_sanitize_json_with_native_array_and_non_string_values() {
		$this->assertSame( '{"a":1}', $this->sanitization->sanitize_json( '{"a":1}' ) );
		$this->assertSame( '{"a":1}', $this->sanitization->sanitize_json( [ 'a' => 1 ] ) );
		$this->assertSame( '', $this->sanitization->sanitize_json( [] ) );
		$this->assertSame( '', $this->sanitization->sanitize_json( null ) );
		$this->assertSame( '', $this->sanitization->sanitize_json( 12 ) );
		$this->assertSame( '', $this->sanitization->sanitize_json( 'not json' ) );
	}

	/**
	 * Test that color sanitization does not fatal on array or non-string values.
	 */
	public function test_sanitize_colors_with_non_string_values() {
		$this->assertSame( '', neve_sanitize_colors( [ '#ffffff', '#000000' ] ) );
		$this->assertSame( '', neve_sanitize_colors( [ 'mobile' => '#ffffff' ] ) );
		$this->assertSame( '', neve_sanitize_colors( [] ) );

		// Other non-color values are rejected too.
		$this->assertSame( '', neve_sanitize_colors( null ) );
		$this->assertSame( '', neve_sanitize_colors( true ) );
		$this->assertSame( '', neve_sanitize_colors( new stdClass() ) );

		// Invalid strings return an empty string, never null.
		$this->assertSame( '', neve_sanitize_colors( 'not-a-color' ) );
		$this->assertSame( '', neve_sanitize_colors( '' ) );

		// Valid values keep working as before.
		$this->assertSame( '#ff0000', neve_sanitize_colors( '#ff0000' ) );
		$this->assertSame( 'rgba(255, 0, 0, 1)', neve_sanitize_colors( 'rgba(255, 0, 0, 1)' ) );
		$this->assertSame( 'var(--nv-primary-accent)', neve_sanitize_colors( 'var(--nv-primary-accent)' ) );
	}

	/**
	 * Logo data can already be decoded when it reaches the sanitizer.
	 */
	public function test_logo_json_sanitizer_accepts_array_input() {
		$input = array(
			'light' => 12,
			'dark'  => 34,
			'same'  => false,
		);

		$this->assertSame(
			wp_json_encode( $input ),
			\HFG\Core\Components\Logo::sanitize_logo_json( $input )
		);
	}

	/**
	 * Test that only well formed CSS variable expressions are treated as CSS variables.
	 */
	public function test_is_css_var() {
		$valid = [
			'var(--nv-primary-accent)',
			'var(--nv-c-1,#E5E7EB)',
			'var(--nv-c-1, #e5e7eb)',
			'var( --nv-site-bg , #fff )',
			'var(--secondarybtnbg, transparent)',
			'var(--x, rgba(0,0,0,.5))',
			'var(--x, hsl(120 50% 50%))',
			'var(--x, var(--y, #fff))',
		];

		foreach ( $valid as $value ) {
			$this->assertTrue( neve_is_css_var( $value ), $value . ' should be a CSS var' );
		}

		$invalid = [
			'avatar',
			'varsity',
			'#var',
			'var',
			'var()',
			'var(--)',
			'var(--x',
			'var(--x))',
			'var(--x);color:red',
			'var(--x)}body{background:red}',
			'var(--x, url(evil.css))',
			'var(--x, "quoted")',
			'linear-gradient(var(--a), var(--b))',
			'',
			[ 'var(--x)' ],
			null,
		];

		foreach ( $invalid as $value ) {
			$this->assertFalse( neve_is_css_var( $value ), var_export( $value, true ) . ' should not be a CSS var' );
		}
	}

	/**
	 * Test that color sanitization does not pass off arbitrary strings as CSS variables.
	 */
	public function test_sanitize_colors_rejects_fake_css_vars() {
		// Strings that merely contain "var" are not CSS variables.
		$this->assertSame( '', neve_sanitize_colors( 'avatar' ) );
		$this->assertSame( '', neve_sanitize_colors( 'var(--x);color:red' ) );
		$this->assertSame( '', neve_sanitize_colors( 'var(--x)}body{background:red}' ) );
		$this->assertSame( '', neve_sanitize_colors( 'var(--x, url(evil.css))' ) );

		// Well formed CSS variables pass through untouched.
		$this->assertSame( 'var(--nv-site-bg)', neve_sanitize_colors( 'var(--nv-site-bg)' ) );
		$this->assertSame( 'var(--nv-c-1, #e5e7eb)', neve_sanitize_colors( ' var(--nv-c-1, #e5e7eb) ' ) );
		$this->assertSame( 'var(--x, var(--y, #fff))', neve_sanitize_colors( 'var(--x, var(--y, #fff))' ) );
	}

	/**
	 * Gradient picker output is kept; anything beyond a single gradient function is rejected.
	 */
	public function test_sanitize_colors_gradients(): void {
		$valid = [
			'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
			'radial-gradient(rgb(6,147,227) 0%,rgb(155,81,224) 100%)',
			'radial-gradient(circle at center, #fff 0%, #000 100%)',
			'conic-gradient(from 90deg, red, blue)',
			'repeating-linear-gradient(45deg, #FFF 0 10px, transparent 10px 20px)',
			'linear-gradient(var(--nv-primary-accent), var(--nv_c-1, #fff))',
			'linear-gradient(hsl(120 50% 50% / .5), transparent)',
		];

		foreach ( $valid as $value ) {
			$this->assertSame( $value, neve_sanitize_colors( $value ), $value . ' should be kept' );
		}

		$this->assertSame( 'linear-gradient(red, blue)', neve_sanitize_colors( ' linear-gradient(red, blue) ' ) );

		$invalid = [
			'linear-gradient(red,blue)</style><script>alert(1)</script>',
			'linear-gradient(red,blue);}body{display:none',
			'linear-gradient(red,blue),url(//example.com/t.png)',
			'linear-gradient(red,blue))',
			'linear-gradient(red,"blue")',
			'x gradient',
			'notagradient(red, blue)',
			'linear-gradient',
		];

		foreach ( $invalid as $value ) {
			$this->assertSame( '', neve_sanitize_colors( $value ), $value . ' should be rejected' );
		}
	}

	/**
	 * Standalone rgb(), hsl() and hsla() colors are kept; anything around them is rejected.
	 */
	public function test_sanitize_colors_keeps_function_colors(): void {
		$valid = [
			'rgb(255, 0, 0)',
			'rgb(10%,20%,30%)',
			'rgba(10%, 20%, 30%, 0.5)',
			'rgba(255, 0, 0, 50%)',
			'rgba(1,2,3)',
			'rgba(255,0,0,.5)',
			'hsl(120, 50%, 50%)',
			'hsla(120, 50%, 50%, 0.5)',
		];

		foreach ( $valid as $value ) {
			$this->assertTrue( neve_is_css_function_color( $value ), $value . ' should be a function color' );
			$this->assertSame( $value, neve_sanitize_colors( $value ), $value . ' should be kept' );
		}

		$this->assertSame( 'rgb(1,2,3)', neve_sanitize_colors( " rgb(1,2,3)\n" ) );
		$this->assertSame( 'rgba(1,2,3,0.5)', neve_sanitize_colors( 'rgba(1,2,3,.5);}body{display:none' ) );

		$invalid = [
			'rgb(1,2,3);}body{display:none',
			'rgb(1,2,3)),url(//example.com/t.png)',
			'rgb(1,2,3)</style><script>alert(1)</script>',
			'rgb(var(--x),2,3)',
			'rgb(1,2,3',
			'#rgb(1,2,3)',
			'hsl(120deg, 50%, 50%)',
			'lab(50% 40 59)',
		];

		foreach ( $invalid as $value ) {
			$this->assertFalse( neve_is_css_function_color( $value ), $value . ' should not be a function color' );
			$this->assertSame( '', neve_sanitize_colors( $value ), $value . ' should be rejected' );
		}
	}

	/**
	 * Color slugs that are not CSS identifiers are dropped from both color settings.
	 */
	public function test_global_color_slugs_must_be_css_identifiers(): void {
		$colors_background = new \Neve\Customizer\Options\Colors_Background();

		$global = neve_get_global_colors_default();
		$global['palettes']['base']['colors']['x:red}</style><script>alert(1)</script>'] = '#ffffff';

		$sanitized = $colors_background->sanitize_global_colors( $global );

		$this->assertSame(
			array_keys( neve_get_global_colors_default()['palettes']['base']['colors'] ),
			array_keys( $sanitized['palettes']['base']['colors'] )
		);

		$custom = $colors_background->sanitize_global_custom_colors(
			[
				'custom-1'                                  => [
					'label' => 'Kept',
					'val'   => '#ffffff',
				],
				'custom-2:red}</style><script>alert(1)<'    => [
					'label' => 'Dropped',
					'val'   => '#000000',
				],
			]
		);

		$this->assertSame( [ 'custom-1' ], array_keys( $custom ) );
	}

	/**
	 * Incomplete, malformed or non-finite function colors are rejected; complete ones are kept.
	 */
	public function test_sanitize_colors_rejects_incomplete_rgba(): void {
		$invalid = [
			'rgba(1,2)',
			'rgba(',
			'rgba',
			'xrgba(1,2,3,4)',
			'rgba(1,2,3,1e999)',
			'rgb(1,2,3,4,5)',
			'rgba(1,,2,3)',
			'rgb(1)',
			'rgb(,,)',
			'rgb(-)',
			'rgb(1.2.3,4,5)',
			'hsl(1 2 3 4)',
			'var(--missing,rgb(1.2.3,4,5))',
			'linear-gradient(rgb(1.2.3,4,5),#fff)',
			'linear-gradient(#12345,#fff)',
			'linear-gradient(rgb(1,2,3)extra,#fff)',
		];

		foreach ( $invalid as $value ) {
			$this->assertFalse( neve_is_css_function_color( $value ), $value . ' should not be a function color' );
			$this->assertSame( '', neve_sanitize_colors( $value ), $value . ' should be rejected' );
		}

		$valid = [
			'rgba(255, 0, 0, 1)',
			'rgba(1.5,2,3,1)',
			'rgba(0,0,0,0)',
			'rgb(-1,0,0)',
			'rgb(255 0 0)',
			'rgb(1 2 3 / 50%)',
			'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
		];

		foreach ( $valid as $value ) {
			$this->assertSame( $value, neve_sanitize_colors( $value ), $value . ' should be kept' );
		}
	}

	/**
	 * A rejected rgba() border color falls back to the row's default border color.
	 */
	public function test_incomplete_rgba_border_color_uses_default(): void {
		$key = 'hfg_header_layout_main_border_color';
		set_theme_mod( $key, neve_sanitize_colors( 'rgba(1,2)' ) );
		// Read the saved mod, not a value cached by an earlier test.
		$no_cache = \Neve\Core\Settings\Mods::$no_cache;
		\Neve\Core\Settings\Mods::$no_cache = true;

		try {
			$css = (string) new \Neve\Core\Styles\Dynamic_Selector(
				[
					'.header-main' => [
						'--rowbcolor' => [
							\Neve\Core\Styles\Dynamic_Selector::META_KEY => $key,
							\Neve\Core\Styles\Dynamic_Selector::META_DEFAULT => 'var(--nv-light-bg)',
						],
					],
				]
			);
		} finally {
			\Neve\Core\Settings\Mods::$no_cache = $no_cache;
			remove_theme_mod( $key );
			\Neve\Core\Settings\Mods::set( $key, null );
		}

		$this->assertStringContainsString( '--rowbcolor: var(--nv-light-bg);', $css );
	}

	/**
	 * Header and footer row text color settings sanitize with neve_sanitize_colors.
	 */
	public function test_row_text_color_sanitizer_rejects_malformed_colors(): void {
		require_once ABSPATH . WPINC . '/class-wp-customize-manager.php';
		$wp_customize = new \WP_Customize_Manager();
		\HFG\Main::get_instance()->get_builder( 'header' )->customize_register( $wp_customize );
		\HFG\Main::get_instance()->get_builder( 'footer' )->customize_register( $wp_customize );

		$header_setting = $wp_customize->get_setting( 'hfg_header_layout_main_new_text_color' );
		$footer_setting = $wp_customize->get_setting( 'hfg_footer_layout_bottom_new_text_color' );

		$this->assertNotNull( $header_setting );
		$this->assertNotNull( $footer_setting );

		$malformed = [
			'rgb(1.2.3,4,5)',
			'#222;}body{background:lime}/*',
		];

		foreach ( $malformed as $value ) {
			$this->assertSame( '', $header_setting->sanitize( $value ) );
			$this->assertSame( '', $footer_setting->sanitize( $value ) );
		}
	}

	/**
	 * Switching to a child theme drops malformed colors and backgrounds.
	 */
	public function test_child_theme_migration_drops_malformed_colors(): void {
		$parent_mods = get_option( 'theme_mods_neve' );
		update_option( 'theme_switched', 'neve' );
		update_option(
			'theme_mods_neve',
			array(
				'neve_scroll_to_top_icon_color'         => 'rgb(1.2.3,4,5)',
				'hfg_header_layout_main_new_text_color' => '#222;}body{background:lime}/*',
				'neve_valid_color'                      => '#ffffff',
				'header_search_button_appearance'       => 'text_button',
				'neve_global_colors'                    => array(
					'activePalette' => 'base',
					'palettes'      => array(
						'base' => array(
							'name'   => 'Base',
							'colors' => array(
								'nv-primary-accent'   => 'rgb(1.2.3,4,5)',
								'nv-secondary-accent' => '#2f5aae',
							),
						),
					),
				),
				'neve_global_custom_colors'             => array(
					'custom-bad'  => array(
						'label' => 'Bad',
						'val'   => 'rgb(1.2.3,4,5)',
					),
					'custom-good' => array(
						'label' => 'Good',
						'val'   => '#123456',
					),
				),
			)
		);
		// The migration copies the parent's mods into the active child theme's.
		$child_theme = static function (): string {
			return 'neve-child-migration-test';
		};
		add_filter( 'pre_option_stylesheet', $child_theme );

		try {
			( new \Neve\Core\Admin() )->migrate_options();

			$this->assertFalse( get_theme_mod( 'neve_scroll_to_top_icon_color' ) );
			$this->assertFalse( get_theme_mod( 'hfg_header_layout_main_new_text_color' ) );
			$this->assertSame( '#ffffff', get_theme_mod( 'neve_valid_color' ) );
			$this->assertSame( 'text_button', get_theme_mod( 'header_search_button_appearance' ) );

			$palette = get_theme_mod( 'neve_global_colors' )['palettes']['base']['colors'];
			$this->assertSame( '', $palette['nv-primary-accent'] );
			$this->assertSame( '#2f5aae', $palette['nv-secondary-accent'] );
			$this->assertSame( array( 'custom-good' ), array_keys( get_theme_mod( 'neve_global_custom_colors' ) ) );
		} finally {
			remove_filter( 'pre_option_stylesheet', $child_theme );
			delete_option( 'theme_mods_neve-child-migration-test' );
			delete_option( 'theme_switched' );
			if ( false === $parent_mods ) {
				delete_option( 'theme_mods_neve' );
			} else {
				update_option( 'theme_mods_neve', $parent_mods );
			}
		}
	}

	/**
	 * Stored values of color custom properties are printed only as sanitized colors or color keywords.
	 */
	public function test_color_custom_properties_print_only_sanitized_colors(): void {
		$mods = array(
			'nv_test_malformed_color' => 'rgb(1.2.3,4,5)',
			'nv_test_injected_color'  => 'rgba(1,2,3,.5);}body{display:none}',
			'nv_test_keyword_color'   => 'transparent',
			'nv_test_gradient_color'  => 'linear-gradient(red,blue)',
			'nv_test_padding'         => '10px',
		);
		foreach ( $mods as $mod => $value ) {
			set_theme_mod( $mod, $value );
		}
		$no_cache                           = \Neve\Core\Settings\Mods::$no_cache;
		\Neve\Core\Settings\Mods::$no_cache = true;

		try {
			$css = (string) new \Neve\Core\Styles\Dynamic_Selector(
				array(
					'.nv-test' => array(
						'--rowbcolor'    => array( \Neve\Core\Styles\Dynamic_Selector::META_KEY => 'nv_test_malformed_color' ),
						'--primarybtnbg' => array( \Neve\Core\Styles\Dynamic_Selector::META_KEY => 'nv_test_injected_color' ),
						'--bgcolor'      => array( \Neve\Core\Styles\Dynamic_Selector::META_KEY => 'nv_test_keyword_color' ),
						'--hoverbgcolor' => array( \Neve\Core\Styles\Dynamic_Selector::META_KEY => 'nv_test_gradient_color' ),
						'--padding'      => array( \Neve\Core\Styles\Dynamic_Selector::META_KEY => 'nv_test_padding' ),
					),
				)
			);
		} finally {
			\Neve\Core\Settings\Mods::$no_cache = $no_cache;
			foreach ( array_keys( $mods ) as $mod ) {
				remove_theme_mod( $mod );
				\Neve\Core\Settings\Mods::set( $mod, null );
			}
		}

		$this->assertStringNotContainsString( '--rowbcolor', $css );
		$this->assertStringContainsString( '--primarybtnbg: rgba(1,2,3,0.5);', $css );
		$this->assertStringNotContainsString( 'display:none', $css );
		$this->assertStringContainsString( '--bgcolor: transparent;', $css );
		$this->assertStringContainsString( '--hoverbgcolor: linear-gradient(red,blue);', $css );
		$this->assertStringContainsString( '--padding: 10px;', $css );
	}

	/**
	 * Stored palette and custom colors that fail the color check are left out of the root CSS.
	 */
	public function test_root_css_omits_malformed_palette_colors(): void {
		set_theme_mod(
			'neve_global_colors',
			array(
				'activePalette' => 'base',
				'palettes'      => array(
					'base' => array(
						'name'   => 'Base',
						'colors' => array(
							'nv-primary-accent'   => 'rgb(1.2.3,4,5)',
							'nv-text-color'       => '#222;}body{display:none}',
							'nv-secondary-accent' => '#2f5aae',
						),
					),
				),
			)
		);
		set_theme_mod(
			'neve_global_custom_colors',
			array(
				'custom-bad'  => array(
					'label' => 'Bad',
					'val'   => 'rgb(1.2.3,4,5)',
				),
				'custom-good' => array(
					'label' => 'Good',
					'val'   => '#123456',
				),
			)
		);
		$no_cache                           = \Neve\Core\Settings\Mods::$no_cache;
		\Neve\Core\Settings\Mods::$no_cache = true;

		try {
			$css = \Neve\Core\Dynamic_Css::get_root_css();
		} finally {
			\Neve\Core\Settings\Mods::$no_cache = $no_cache;
			remove_theme_mod( 'neve_global_colors' );
			remove_theme_mod( 'neve_global_custom_colors' );
			\Neve\Core\Settings\Mods::set( 'neve_global_custom_colors', null );
		}

		$this->assertStringNotContainsString( 'rgb(1.2.3', $css );
		$this->assertStringNotContainsString( 'display:none', $css );
		$this->assertStringNotContainsString( '--nv-primary-accent', $css );
		$this->assertStringContainsString( '--nv-secondary-accent:#2f5aae', $css );
		$this->assertStringContainsString( '--custom-good:#123456', $css );
		$this->assertStringNotContainsString( '--custom-bad', $css );
	}

	/**
	 * Private reusable function for the assertion of sanitize responsive int json.
	 *
	 * @param array  $input_value Input value.
	 * @param string $expected_value Expected value.
	 */
	private function do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_value = null ) {
		$inout_json = wp_json_encode( $input_value );
		$sanitized_value = $this->sanitization->sanitize_responsive_int_json( $inout_json );

		if ( $expected_value === null ) {
			$expected_value = $inout_json;
		}

		$this->assertEquals( $expected_value, $sanitized_value );
	}
}
