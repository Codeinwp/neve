<?php
/**
 * Tests for the palette colors of the appearance-update ability.
 *
 * @package neve
 */

use Neve\Abilities\Appearance_Update;

/**
 * Class TestNeveAppearanceUpdateAbility
 */
class TestNeveAppearanceUpdateAbility extends WP_UnitTestCase {

	/**
	 * Teardown.
	 */
	public function tearDown(): void {
		remove_theme_mod( 'neve_global_colors' );

		parent::tearDown();
	}

	/**
	 * HEX colors padded with whitespace are saved without it.
	 */
	public function test_padded_hex_palette_colors_are_saved_trimmed(): void {
		$result = ( new Appearance_Update() )->execute(
			array(
				'colors' => array(
					'set' => array(
						'primary_accent'  => "  #1a2B3c\t",
						'site_background' => "\n#ffffff ",
					),
				),
			)
		);

		$this->assertIsArray( $result );
		$this->assertSame( array(), $result['warnings'] );
		$this->assertContains( 'neve_global_colors.nv-primary-accent', $result['updated'] );
		$this->assertContains( 'neve_global_colors.nv-site-bg', $result['updated'] );

		$colors = $this->get_active_palette_colors();
		$this->assertSame( '#1a2B3c', $colors['nv-primary-accent'] );
		$this->assertSame( '#ffffff', $colors['nv-site-bg'] );
	}

	/**
	 * Whitespace-only and invalid padded values are still rejected.
	 */
	public function test_blank_and_invalid_padded_palette_colors_are_rejected(): void {
		$before = $this->get_active_palette_colors();

		$result = ( new Appearance_Update() )->execute(
			array(
				'colors' => array(
					'set' => array(
						'primary_accent'   => '   ',
						'secondary_accent' => ' #12345 ',
						'site_background'  => '#000000 ',
					),
				),
			)
		);

		$this->assertIsArray( $result );
		$this->assertCount( 2, $result['warnings'] );
		$this->assertNotContains( 'neve_global_colors.nv-primary-accent', $result['updated'] );
		$this->assertNotContains( 'neve_global_colors.nv-secondary-accent', $result['updated'] );

		$colors = $this->get_active_palette_colors();
		$this->assertSame( $before['nv-primary-accent'], $colors['nv-primary-accent'] );
		$this->assertSame( $before['nv-secondary-accent'], $colors['nv-secondary-accent'] );
		$this->assertSame( '#000000', $colors['nv-site-bg'] );
	}

	/**
	 * Colors of the active palette as stored in the theme mod.
	 *
	 * @return array<string, string>
	 */
	private function get_active_palette_colors(): array {
		$global = get_theme_mod( 'neve_global_colors', neve_get_global_colors_default( true ) );

		return $global['palettes'][ $global['activePalette'] ]['colors'];
	}
}
