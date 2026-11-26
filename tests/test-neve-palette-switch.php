<?php
/**
 * Tests for the palette switch default palette.
 *
 * @package neve
 */

use HFG\Core\Components\PaletteSwitch;
use HFG\Main;
use Neve\Core\Settings\Mods;

/**
 * Class TestNevePaletteSwitch
 */
class TestNevePaletteSwitch extends WP_UnitTestCase {

	/**
	 * Default palette mod key.
	 *
	 * @var string
	 */
	private $default_key;

	/**
	 * Auto adjust mod key.
	 *
	 * @var string
	 */
	private $auto_adjust_key;

	/**
	 * Set the mod keys.
	 */
	public function set_up() {
		parent::set_up();

		$this->default_key     = PaletteSwitch::COMPONENT_ID . '_' . PaletteSwitch::DEFAULT_PALETTE;
		$this->auto_adjust_key = PaletteSwitch::COMPONENT_ID . '_' . PaletteSwitch::AUTO_ADJUST;
	}

	/**
	 * Reset the mods and filters.
	 */
	public function tear_down() {
		Mods::set( $this->default_key, 'light' );
		Mods::set( $this->auto_adjust_key, 0 );
		remove_all_filters( 'neve_palette_switch_default_state' );

		parent::tear_down();
	}

	/**
	 * Get the palette switch component.
	 *
	 * @return PaletteSwitch
	 */
	private function component() {
		$component = Main::get_instance()->get_builder( 'header' )->get_component( PaletteSwitch::COMPONENT_ID );

		$this->assertInstanceOf( PaletteSwitch::class, $component );

		return $component;
	}

	/**
	 * Light stays the default for existing sites.
	 */
	public function test_default_palette_is_light() {
		$this->assertSame( 'light', $this->component()->get_default_palette() );
		$this->assertStringContainsString( 'localStorage.getItem(e) || "light"', $this->component()->toggle_script() );
	}

	/**
	 * The customizer setting can make dark the default.
	 */
	public function test_dark_setting_is_used() {
		Mods::set( $this->default_key, 'dark' );

		$this->assertSame( 'dark', $this->component()->get_default_palette() );
		$this->assertStringContainsString( 'localStorage.getItem(e) || "dark"', $this->component()->toggle_script() );
	}

	/**
	 * The filter overrides the customizer setting.
	 */
	public function test_filter_overrides_setting() {
		add_filter(
			'neve_palette_switch_default_state',
			function () {
				return 'dark';
			}
		);

		$this->assertSame( 'dark', $this->component()->get_default_palette() );
	}

	/**
	 * Unknown values fall back to light.
	 */
	public function test_invalid_value_falls_back_to_light() {
		add_filter(
			'neve_palette_switch_default_state',
			function () {
				return '"; alert(1); "';
			}
		);

		$this->assertSame( 'light', $this->component()->get_default_palette() );
		$this->assertStringNotContainsString( 'alert(1)', $this->component()->toggle_script() );
	}

	/**
	 * Auto adjust still follows the device preference.
	 */
	public function test_auto_adjust_ignores_default_palette() {
		Mods::set( $this->default_key, 'dark' );
		Mods::set( $this->auto_adjust_key, 1 );

		$script = $this->component()->toggle_script();

		$this->assertStringContainsString( 'prefers-color-scheme: dark', $script );
		$this->assertStringNotContainsString( 'localStorage.getItem(e)', $script );
	}

	/**
	 * Sanitize only allows light and dark.
	 */
	public function test_sanitize_default_palette() {
		$component = $this->component();

		$this->assertSame( 'dark', $component->sanitize_default_palette( 'dark' ) );
		$this->assertSame( 'light', $component->sanitize_default_palette( 'light' ) );
		$this->assertSame( 'light', $component->sanitize_default_palette( 'blue' ) );
		$this->assertSame( 'light', $component->sanitize_default_palette( null ) );
	}
}
