<?php
/**
 * Tests for color inputs sent to the theme_mod and builder abilities.
 *
 * @package neve
 */

use Neve\Abilities\Appearance_Update;
use Neve\Abilities\Footer_Configure;
use Neve\Abilities\Header_Configure;
use Neve\Abilities\Site_Set_Theme_Mod;

/**
 * Class TestNeveAbilityColorInputs
 */
class TestNeveAbilityColorInputs extends WP_UnitTestCase {

	const MALFORMED_COLOR = 'rgb(1.2.3,4,5)';

	/**
	 * Theme mods written by these tests.
	 */
	const MODS = array(
		'neve_scroll_to_top_icon_color',
		'hfg_header_layout_sidebar_background',
		'hfg_header_layout_main_background',
		'hfg_header_layout_main_new_text_color',
		'hfg_footer_layout_bottom_new_text_color',
		'nav-icon_button_appearance',
		'neve_button_appearance',
		'neve_secondary_button_appearance',
	);

	/**
	 * Teardown.
	 */
	public function tearDown(): void {
		foreach ( self::MODS as $mod ) {
			remove_theme_mod( $mod );
		}

		parent::tearDown();
	}

	public function test_set_theme_mod_rejects_malformed_color(): void {
		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => 'neve_scroll_to_top_icon_color',
				'value'  => self::MALFORMED_COLOR,
			)
		);

		$this->assertFalse( $result['success'] );
		$this->assertSame( 'invalid_value', $result['error']['code'] );
		$this->assertFalse( get_theme_mod( 'neve_scroll_to_top_icon_color' ) );
	}

	public function test_set_theme_mod_saves_valid_and_empty_colors(): void {
		$ability = new Site_Set_Theme_Mod();

		$result = $ability->execute(
			array(
				'action' => 'set',
				'key'    => 'neve_scroll_to_top_icon_color',
				'value'  => ' rgb(255, 0, 0) ',
			)
		);
		$this->assertTrue( $result['success'] );
		$this->assertSame( 'rgb(255, 0, 0)', get_theme_mod( 'neve_scroll_to_top_icon_color' ) );

		$result = $ability->execute(
			array(
				'action' => 'set',
				'key'    => 'neve_scroll_to_top_icon_color',
				'value'  => '',
			)
		);
		$this->assertTrue( $result['success'] );
		$this->assertSame( '', get_theme_mod( 'neve_scroll_to_top_icon_color' ) );
	}

	public function test_set_theme_mod_rejects_non_string_color(): void {
		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => 'neve_scroll_to_top_icon_color',
				'value'  => array( '#fff' ),
			)
		);

		$this->assertFalse( $result['success'] );
		$this->assertSame( 'invalid_value', $result['error']['code'] );
		$this->assertFalse( get_theme_mod( 'neve_scroll_to_top_icon_color' ) );
	}

	public function test_set_theme_mod_rejects_button_appearance_with_malformed_color(): void {
		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => 'nav-icon_button_appearance',
				'value'  => array(
					'type'       => 'fill',
					'background' => self::MALFORMED_COLOR,
				),
			)
		);

		$this->assertFalse( $result['success'] );
		$this->assertSame( 'invalid_value', $result['error']['code'] );
		$this->assertFalse( get_theme_mod( 'nav-icon_button_appearance' ) );
	}

	public function test_set_theme_mod_rejects_non_array_button_appearance(): void {
		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => 'nav-icon_button_appearance',
				'value'  => 'fill',
			)
		);

		$this->assertFalse( $result['success'] );
		$this->assertSame( 'invalid_value', $result['error']['code'] );
		$this->assertFalse( get_theme_mod( 'nav-icon_button_appearance' ) );
	}

	public function test_set_theme_mod_rejects_button_appearance_with_array_color_field(): void {
		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => 'nav-icon_button_appearance',
				'value'  => array(
					'type'       => 'fill',
					'background' => array( '#fff' ),
				),
			)
		);

		$this->assertFalse( $result['success'] );
		$this->assertSame( 'invalid_value', $result['error']['code'] );
		$this->assertFalse( get_theme_mod( 'nav-icon_button_appearance' ) );
	}

	public function test_appearance_update_rejects_malformed_hex_button_colors(): void {
		$ability = new Appearance_Update();
		$fields  = array(
			'primary'   => array(
				array( 'background' => '#12345' ),
				array( 'text' => '#12345' ),
				array( 'hover' => array( 'background' => '#12345' ) ),
				array( 'hover' => array( 'text' => '#12345' ) ),
			),
			'secondary' => array(
				array( 'background' => '#12345' ),
				array( 'text' => '#12345' ),
				array( 'hover' => array( 'background' => '#12345' ) ),
				array( 'hover' => array( 'text' => '#12345' ) ),
			),
		);

		foreach ( $fields as $group => $cases ) {
			$mod = 'primary' === $group ? 'neve_button_appearance' : 'neve_secondary_button_appearance';
			foreach ( $cases as $case ) {
				$result = $ability->execute(
					array(
						'buttons' => array(
							$group => $case,
						),
					)
				);

				$this->assertWPError( $result );
				$this->assertSame( 'neve_ability_no_changes', $result->get_error_code() );
				$this->assertFalse( get_theme_mod( $mod ) );
			}
		}
	}

	public function test_appearance_update_stores_sanitized_button_colors(): void {
		$ability = new Appearance_Update();
		$color   = 'rgba(1,2,3,.5);}body{display:none}';
		$fields  = array(
			'background'      => array( 'background' => $color ),
			'text'            => array( 'text' => $color ),
			'backgroundHover' => array( 'hover' => array( 'background' => $color ) ),
			'textHover'       => array( 'hover' => array( 'text' => $color ) ),
		);

		foreach ( array( 'primary' => 'neve_button_appearance', 'secondary' => 'neve_secondary_button_appearance' ) as $group => $mod ) {
			foreach ( $fields as $field => $input ) {
				$ability->execute( array( 'buttons' => array( $group => $input ) ) );

				$this->assertSame( 'rgba(1,2,3,0.5)', get_theme_mod( $mod )[ $field ], "{$group} {$field}" );
			}
		}
	}

	public function test_set_theme_mod_saves_valid_button_appearance(): void {
		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => 'nav-icon_button_appearance',
				'value'  => array(
					'type'       => 'fill',
					'background' => 'var(--nv-primary-accent)',
					'text'       => '#ffffff',
					'textHover'  => '',
				),
			)
		);

		$this->assertTrue( $result['success'] );
		$appearance = get_theme_mod( 'nav-icon_button_appearance' );
		$this->assertSame( 'var(--nv-primary-accent)', $appearance['background'] );
		$this->assertSame( '#ffffff', $appearance['text'] );
		$this->assertSame( '', $appearance['textHover'] );
	}

	public function test_button_appearance_sanitizer_blanks_malformed_colors(): void {
		$appearance = neve_sanitize_button_appearance(
			array(
				'type'             => 'fill',
				'background'       => self::MALFORMED_COLOR,
				'text'             => '#ffffff',
				'backgroundHover'  => 'red;}body{display:none',
				'textHover'        => 'rgba(0,0,0,0.5)',
				'shadowColor'      => self::MALFORMED_COLOR,
				'shadowColorHover' => 'var(--nv-text-color)',
			)
		);

		$this->assertSame( 'fill', $appearance['type'] );
		$this->assertSame( '', $appearance['background'] );
		$this->assertSame( '#ffffff', $appearance['text'] );
		$this->assertSame( '', $appearance['backgroundHover'] );
		$this->assertSame( 'rgba(0,0,0,0.5)', $appearance['textHover'] );
		$this->assertSame( '', $appearance['shadowColor'] );
		$this->assertSame( 'var(--nv-text-color)', $appearance['shadowColorHover'] );
	}

	public function test_button_appearance_sanitizer_decodes_json_strings(): void {
		$appearance = neve_sanitize_button_appearance( '{"type":"fill","background":"rgb(1.2.3,4,5)","text":"#ffffff"}' );

		$this->assertSame( 'fill', $appearance['type'] );
		$this->assertSame( '', $appearance['background'] );
		$this->assertSame( '#ffffff', $appearance['text'] );
		$this->assertSame( '', neve_sanitize_button_appearance( 'fill' ) );
	}

	public function test_set_theme_mod_rejects_background_with_malformed_color(): void {
		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => 'hfg_header_layout_sidebar_background',
				'value'  => array(
					'type'       => 'color',
					'colorValue' => self::MALFORMED_COLOR,
				),
			)
		);

		$this->assertFalse( $result['success'] );
		$this->assertSame( 'invalid_value', $result['error']['code'] );
		$this->assertFalse( get_theme_mod( 'hfg_header_layout_sidebar_background' ) );
	}

	public function test_header_row_style_skips_malformed_colors(): void {
		$result = ( new Header_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'main',
						'text_color' => self::MALFORMED_COLOR,
						'background' => array(
							'type'              => 'color',
							'colorValue'        => '#ffffff',
							'overlayColorValue' => self::MALFORMED_COLOR,
						),
					),
				),
			)
		);

		$this->assertIsArray( $result );
		$this->assertContains( 'Invalid value for "row_style.main.text_color".', $result['warnings'] );
		$this->assertContains( 'Invalid value for "row_style.main.background".', $result['warnings'] );
		$this->assertFalse( get_theme_mod( 'hfg_header_layout_main_new_text_color' ) );
		$this->assertFalse( get_theme_mod( 'hfg_header_layout_main_background' ) );
	}

	public function test_header_row_style_saves_valid_colors(): void {
		$result = ( new Header_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'main',
						'text_color' => 'var(--nv-text-color)',
						'background' => array(
							'type'       => 'color',
							'colorValue' => '#ffffff',
						),
					),
				),
			)
		);

		$this->assertIsArray( $result );
		$this->assertSame( array(), $result['warnings'] );
		$this->assertSame( 'var(--nv-text-color)', get_theme_mod( 'hfg_header_layout_main_new_text_color' ) );
		$this->assertSame( '#ffffff', get_theme_mod( 'hfg_header_layout_main_background' )['colorValue'] );
	}

	public function test_footer_row_style_skips_malformed_text_color(): void {
		$result = ( new Footer_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'bottom',
						'text_color' => self::MALFORMED_COLOR,
					),
				),
			)
		);

		$this->assertIsArray( $result );
		$this->assertContains( 'Invalid value for "row_style.bottom.text_color".', $result['warnings'] );
		$this->assertFalse( get_theme_mod( 'hfg_footer_layout_bottom_new_text_color' ) );
	}
}
