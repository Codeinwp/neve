<?php
/**
 * Tests for printing stored header row colors.
 *
 * @package Neve
 */

use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Dynamic_Selector;

/**
 * Class TestNeveRowColorCss
 */
class TestNeveRowColorCss extends WP_UnitTestCase {

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
	 * Stored row colors that would close their declaration are printed sanitized; other colors as stored.
	 */
	public function test_injected_row_colors_are_printed_sanitized(): void {
		set_theme_mod( 'hfg_header_layout_main_border_color', self::INJECTED_CSS );
		set_theme_mod( 'hfg_header_layout_main_new_text_color', 'red' );
		set_theme_mod(
			'hfg_header_layout_main_background',
			array(
				'type'       => 'color',
				'colorValue' => self::INJECTED_CSS,
			)
		);

		$css = $this->header_css();

		$this->assertStringNotContainsString( 'background:lime', $css );
		$this->assertStringContainsString( '--rowbcolor: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--bgcolor: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--color: red;', $css );
	}

	/**
	 * Render the header builder's dynamic CSS.
	 *
	 * @return string
	 */
	private function header_css(): string {
		$builder = \HFG\Main::get_instance()->get_builder( 'header' );

		return (string) new Dynamic_Selector( $builder->add_style( array() ) );
	}
}
