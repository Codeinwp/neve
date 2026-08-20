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
		$this->assertSame( 'rgba(255,0,0,1)', neve_sanitize_colors( 'rgba(255, 0, 0, 1)' ) );
		$this->assertSame( 'var(--nv-primary-accent)', neve_sanitize_colors( 'var(--nv-primary-accent)' ) );
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
