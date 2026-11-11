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
	 * Optional typography controls retain their supported inherited weight.
	 */
	public function test_typography_sanitizer_keeps_inherited_font_weight() {
		$value = array(
			'fontWeight'    => 'none',
			'textTransform' => 'none',
			'fontSize'      => array(),
			'lineHeight'    => array(),
			'letterSpacing' => array(),
		);

		$this->assertSame( $value, neve_sanitize_typography_control( $value ) );
		foreach ( array( 'normal', 'bold', 'bolder', 'lighter' ) as $font_weight ) {
			$value['fontWeight'] = $font_weight;
			$this->assertSame( $font_weight, neve_sanitize_typography_control( $value )['fontWeight'] );
		}

		unset( $value['fontWeight'] );
		$this->assertArrayNotHasKey( 'fontWeight', neve_sanitize_typography_control( $value ) );
	}

	/**
	 * Blank spacing remains blank instead of overriding inherited spacing with zero.
	 */
	public function test_directional_css_sanitizer_keeps_blank_spacing() {
		$value = array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), '' );
		$meta  = array(
			'key'              => 'blank_spacing',
			'suffix'           => 'px',
			'directional-prop' => \Neve\Core\Settings\Config::CSS_PROP_PADDING,
		);

		$this->assertSame( '', neve_sanitize_directional_css_rule( '--padding', $value, $meta, 'desktop' ) );
	}

	/**
	 * Declaration checks inspect JSON object keys as well as values.
	 */
	public function test_css_declaration_check_inspects_json_keys() {
		$this->assertTrue( neve_closes_css_declaration( '{"x\\";}}body{background:lime}/*":0}' ) );
	}

	/**
	 * Valid font families remain available to component custom properties.
	 */
	public function test_font_family_css_rule_preserves_valid_fonts() {
		$this->assertSame( ' --inheritedff: Arial;', neve_sanitize_font_family_css_rule( '--inheritedff', 'Arial' ) );
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
			'radial-gradient(circle closest-side, red, blue)',
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
			'linear-gradient()',
			'linear-gradient(foo)',
			'linear-gradient(red)',
			'linear-gradient(foo, red, blue)',
			'linear-gradient(red garbage, blue)',
			'linear-gradient(to left right, red, blue)',
			'radial-gradient(10, red, blue)',
			'linear-gradient(red 10deg, blue)',
			'conic-gradient(red 10px, blue)',
			'linear-gradient(rgb(1 / 2 / 3), blue)',
			'radial-gradient(circle 10px 20px, red, blue)',
			'radial-gradient(circle -10px, red, blue)',
			'radial-gradient(at left right, red, blue)',
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
			'rgb(,)',
			'rgba(1,)',
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
