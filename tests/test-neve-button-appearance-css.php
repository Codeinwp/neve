<?php
/**
 * Tests for sanitizing button appearance colors.
 *
 * @package Neve
 */

use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Css_Vars;
use Neve\Core\Styles\Dynamic_Selector;

/**
 * Expose the shared button rules to the test.
 */
class NeveButtonRulesWrapperForTest {
	use Css_Vars;
}

/**
 * Class TestNeveButtonAppearanceCss
 */
class TestNeveButtonAppearanceCss extends WP_UnitTestCase {

	const INJECTED_CSS = 'rgba(1,2,3,1);}body{background:lime}/*';

	/**
	 * Theme mods snapshot restored after each test.
	 *
	 * @var array<string, mixed>|false
	 */
	private $theme_mods;

	/**
	 * Snapshot the theme mods and read them uncached.
	 */
	public function setUp(): void {
		parent::setUp();

		$this->theme_mods = get_theme_mods();
		Mods::$no_cache   = true;
	}

	/**
	 * Restore the theme mods.
	 */
	public function tearDown(): void {
		update_option( 'theme_mods_' . get_option( 'stylesheet' ), $this->theme_mods );
		Mods::$no_cache = false;

		parent::tearDown();
	}

	/**
	 * Button appearance saves sanitize every field that is later printed as a color.
	 */
	public function test_button_appearance_sanitizes_color_fields(): void {
		$appearance = neve_sanitize_button_appearance( $this->injected_appearance() );

		foreach ( $this->color_fields() as $field ) {
			$this->assertSame( 'rgba(1,2,3,1)', $appearance[ $field ] );
		}
		foreach ( array( 'borderRadius', 'borderWidth' ) as $field ) {
			$this->assertSame( array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), 0 ), $appearance[ $field ] );
		}
		foreach ( array( 'shadowProperties', 'shadowPropertiesHover' ) as $field ) {
			$this->assertSame( array( 'blur' => 5, 'width' => 0, 'height' => 0 ), $appearance[ $field ] );
		}
		$this->assertSame( 'outline', $appearance['type'] );
		$this->assertSame( array(), neve_sanitize_button_appearance( 'invalid' ) );
		$this->assertSame( '', neve_sanitize_color_css_rule( '--color', 'invalid' ) );
		$this->assertSame( ' --color: transparent;', neve_sanitize_color_css_rule( '--color', 'transparent' ) );
		$this->assertSame( array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), 8 ), neve_sanitize_button_dimension( 8 ) );
		$this->assertSame( '--shadow:0px 0px 0px none;', neve_sanitize_shadow_css_rule( '--shadow', 'invalid', 0, 0, 0 ) );
	}

	/**
	 * Previously stored button colors are sanitized when global CSS is generated.
	 */
	public function test_global_button_css_sanitizes_stored_colors(): void {
		$appearance = $this->injected_appearance();
		set_theme_mod( 'neve_button_appearance', $appearance );
		set_theme_mod( 'neve_secondary_button_appearance', $appearance );

		$rules = ( new NeveButtonRulesWrapperForTest() )->get_button_rules();
		$css   = (string) new Dynamic_Selector( array( ':root' => $rules ) );

		$this->assertStringNotContainsString( 'background:lime', $css );
		$this->assertStringContainsString( '--primarybtnbg: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--secondarybtnhovershadow:0px 0px 5px rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--primarybtnborderradius:0;', $css );
		$this->assertStringContainsString( '--primarybtnborderwidth:0;', $css );
	}

	/**
	 * Malformed stored button shadows and padding are normalized before output.
	 */
	public function test_global_button_css_handles_malformed_stored_structures(): void {
		$appearance                          = neve_get_button_appearance_default();
		$appearance['useShadow']             = true;
		$appearance['useShadowHover']        = true;
		$appearance['shadowProperties']      = 'invalid';
		$appearance['shadowPropertiesHover'] = array( 'blur' => self::INJECTED_CSS );
		set_theme_mod( 'neve_button_appearance', $appearance );
		set_theme_mod( 'neve_secondary_button_appearance', $appearance );
		set_theme_mod(
			'neve_button_padding',
			array(
				'mobile'       => array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), self::INJECTED_CSS ),
				'tablet'       => array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), self::INJECTED_CSS ),
				'desktop'      => array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), self::INJECTED_CSS ),
				'mobile-unit'  => self::INJECTED_CSS,
				'tablet-unit'  => self::INJECTED_CSS,
				'desktop-unit' => self::INJECTED_CSS,
			)
		);

		$rules = ( new NeveButtonRulesWrapperForTest() )->get_button_rules();
		$css   = (string) new Dynamic_Selector( array( ':root' => $rules ) );

		$this->assertStringNotContainsString( 'background:lime', $css );
		$this->assertStringContainsString( '--primarybtnshadow:0px 0px 0px', $css );
		$this->assertStringContainsString( '--secondarybtnhovershadow:0px 0px 0px', $css );
		$this->assertStringNotContainsString( '--btnpadding:', $css );
	}

	/**
	 * The Customizer setting sanitizes button padding before storage.
	 */
	public function test_button_padding_customizer_setting_sanitizes_input(): void {
		require_once ABSPATH . WPINC . '/class-wp-customize-manager.php';

		$wp_customize = new WP_Customize_Manager();
		( new \Neve\Customizer\Options\Buttons() )->register_controls_callback( $wp_customize );
		$setting = $wp_customize->get_setting( 'neve_button_padding' );

		$this->assertNotNull( $setting );
		$input = array(
			'mobile'       => array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), self::INJECTED_CSS ),
			'tablet'       => array( 'top' => 12, 'right' => self::INJECTED_CSS ),
			'desktop'      => array( 'top' => 10, 'right' => 20, 'bottom' => 30, 'left' => 40 ),
			'mobile-unit'  => self::INJECTED_CSS,
			'tablet-unit'  => 'em',
			'desktop-unit' => 'px',
		);

		$this->assertSame(
			array(
				'mobile'       => array(),
				'tablet'       => array( 'top' => 12 ),
				'desktop'      => array( 'top' => 10, 'right' => 20, 'bottom' => 30, 'left' => 40 ),
				'mobile-unit'  => 'px',
				'tablet-unit'  => 'em',
				'desktop-unit' => 'px',
			),
			$setting->sanitize( $input )
		);
	}

	/**
	 * Previously stored component colors are sanitized when header CSS is generated.
	 */
	public function test_header_component_css_sanitizes_stored_colors(): void {
		$appearance = $this->injected_appearance();
		set_theme_mod( 'button_base_style_setting', $appearance );
		set_theme_mod( 'nav-icon_button_appearance', $appearance );
		set_theme_mod( 'header_search_button_appearance', 'text_button' );
		set_theme_mod( 'header_search_button_style', $appearance );

		$builder = \HFG\Main::get_instance()->get_builder( 'header' );
		$styles  = $builder->add_style( array() );
		foreach ( $builder->get_components() as $component ) {
			if ( in_array( $component->get_id(), array( 'button_base', 'header_search' ), true ) ) {
				$styles = $component->add_style( $styles );
			}
		}

		$css = (string) new Dynamic_Selector( $styles );

		$this->assertStringNotContainsString( 'background:lime', $css );
		$this->assertStringContainsString( '--bgcolor: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--primarybtnbg: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--primarybtnhovershadow:0px 0px 5px rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--primarybtnborderradius:0;', $css );
	}

	/**
	 * Malformed stored component shadows are normalized before output.
	 */
	public function test_header_component_css_handles_malformed_stored_shadow(): void {
		$appearance                     = neve_get_button_appearance_default();
		$appearance['useShadow']        = true;
		$appearance['shadowProperties'] = 'invalid';
		set_theme_mod( 'button_base_style_setting', $appearance );

		$builder = \HFG\Main::get_instance()->get_builder( 'header' );
		$styles  = $builder->add_style( array() );
		foreach ( $builder->get_components() as $component ) {
			if ( 'button_base' === $component->get_id() ) {
				$styles = $component->add_style( $styles );
			}
		}

		$css = (string) new Dynamic_Selector( $styles );

		$this->assertStringContainsString( '--primarybtnshadow:0px 0px 0px', $css );
	}

	/**
	 * Button appearance whose color fields can close their CSS declaration.
	 *
	 * @return array<string, mixed>
	 */
	private function injected_appearance(): array {
		$appearance = neve_get_button_appearance_default();
		foreach ( $this->color_fields() as $field ) {
			$appearance[ $field ] = self::INJECTED_CSS;
		}
		foreach ( array( 'borderRadius', 'borderWidth' ) as $field ) {
			$appearance[ $field ] = array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), '10;}body{background:lime}/*' );
		}
		$appearance['type']           = 'outline';
		$appearance['useShadow']      = true;
		$appearance['useShadowHover'] = true;

		return $appearance;
	}

	/**
	 * Color fields stored by the button appearance control.
	 *
	 * @return string[]
	 */
	private function color_fields(): array {
		return array( 'background', 'backgroundHover', 'text', 'textHover', 'shadowColor', 'shadowColorHover' );
	}
}
