<?php
/**
 * Tests for the legacy Gutenberg palette button colors.
 *
 * @package neve
 */

use Neve\Abilities\Appearance_Update;
use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Frontend;

/**
 * Class TestNeveLegacyPaletteColors
 */
class TestNeveLegacyPaletteColors extends WP_UnitTestCase {

	/**
	 * Previous neve_new_user option value.
	 *
	 * @var string|null
	 */
	private ?string $previous_new_user;

	/**
	 * Enable the legacy palette.
	 */
	public function set_up(): void {
		parent::set_up();

		$this->previous_new_user = get_option( 'neve_new_user', null );
		update_option( 'neve_new_user', 'no' );
		Mods::$no_cache = true;
	}

	/**
	 * Restore the replaced state.
	 */
	public function tear_down(): void {
		remove_theme_mod( Config::MODS_BUTTON_PRIMARY_STYLE );
		// Refresh the static cache so later tests don't read the test value.
		Mods::get( Config::MODS_BUTTON_PRIMARY_STYLE );
		Mods::$no_cache = false;
		if ( null === $this->previous_new_user ) {
			delete_option( 'neve_new_user' );
		} else {
			update_option( 'neve_new_user', $this->previous_new_user );
		}

		parent::tear_down();
	}

	/**
	 * Function colors accepted by the ability.
	 *
	 * @return array<string, array{0: string}>
	 */
	public function function_color_provider(): array {
		return [
			'rgb'           => [ 'rgb(255, 0, 0)' ],
			'rgba percents' => [ 'rgba(100%, 0%, 0%, 50%)' ],
			'hsl'           => [ 'hsl(0, 100%, 50%)' ],
			'hsla'          => [ 'hsla(0, 100%, 50%, 0.5)' ],
		];
	}

	/**
	 * A function color saved by the appearance ability is printed by the legacy palette CSS.
	 *
	 * @dataProvider function_color_provider
	 *
	 * @param string $color Button background color.
	 */
	public function test_ability_function_color_reaches_legacy_palette_css( string $color ): void {
		$result = ( new Appearance_Update() )->execute(
			[
				'buttons' => [
					'primary' => [
						'background' => $color,
					],
				],
			]
		);

		$this->assertIsArray( $result );
		$this->assertSame( [], $result['warnings'] );

		$frontend = ( new Frontend() )->generate();
		$this->assertStringContainsString( 'background-color: ' . $color . '!important;', $frontend );
		$this->assertStringContainsString( 'color: ' . $color . '!important;', $frontend );
		$this->assertStringNotContainsString( '#' . $color, $frontend );
	}
}
