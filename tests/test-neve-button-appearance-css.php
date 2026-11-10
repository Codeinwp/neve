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
		$this->assertSame( 'fill', $appearance['type'] );
		$this->assertSame( array(), neve_sanitize_button_appearance( 'invalid' ) );
		$this->assertSame( '', neve_sanitize_color_css_rule( '--color', 'invalid' ) );
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
