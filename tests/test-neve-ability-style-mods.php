<?php
/**
 * Tests for sanitizing color and background theme mods written by the abilities.
 *
 * @package Neve
 */

use Neve\Abilities\Footer_Configure;
use Neve\Abilities\Header_Configure;
use Neve\Abilities\Site_Set_Theme_Mod;
use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Dynamic_Selector;
use Neve\Core\Styles\Frontend;

/**
 * Class TestNeveAbilityStyleMods
 */
class TestNeveAbilityStyleMods extends WP_UnitTestCase {

	const INJECTED_CSS = 'rgba(1,2,3,1);}body{background:lime}/*';
	const HEADER_TEXT  = 'hfg_header_layout_main_new_text_color';
	const HEADER_BG    = 'hfg_header_layout_main_background';
	const FOOTER_TEXT  = 'hfg_footer_layout_main_new_text_color';
	const SIDEBAR_BG   = 'hfg_header_layout_sidebar_background';
	const SIDEBAR_TEXT  = 'hfg_header_layout_sidebar_new_text_color';
	const SIDEBAR_WIDTH = 'hfg_header_layout_sidebar_width';
	const HEADER_HEIGHT = 'hfg_header_layout_main_height';
	const FORM_PADDING  = 'neve_form_fields_padding';
	const LINE_HEIGHT   = 1.5;

	/**
	 * Theme mods snapshot restored after each test.
	 *
	 * @var array<string, mixed>|false
	 */
	private $theme_mods;

	/**
	 * Snapshot the theme mods the abilities rewrite.
	 */
	public function setUp(): void {
		parent::setUp();

		wp_set_current_user( 1 );
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
	 * Header row colors are sanitized and an invalid background is not saved.
	 */
	public function test_header_configure_sanitizes_row_style(): void {
		set_theme_mod( self::HEADER_BG, 'previous' );

		( new Header_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'main',
						'text_color' => self::INJECTED_CSS,
						'background' => 'not-a-background',
					),
				),
			)
		);

		$this->assertSame( 'rgba(1,2,3,1)', get_theme_mod( self::HEADER_TEXT ) );
		$this->assertSame( 'previous', get_theme_mod( self::HEADER_BG ) );
	}

	/**
	 * Header row background colors are sanitized.
	 */
	public function test_header_configure_sanitizes_row_background(): void {
		( new Header_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'main',
						'background' => array(
							'type'       => 'color',
							'colorValue' => self::INJECTED_CSS,
						),
					),
				),
			)
		);

		$background = get_theme_mod( self::HEADER_BG );
		$this->assertIsArray( $background );
		$this->assertSame( 'rgba(1,2,3,1)', $background['colorValue'] );
	}

	/**
	 * Footer row colors are sanitized.
	 */
	public function test_footer_configure_sanitizes_row_style(): void {
		( new Footer_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'main',
						'text_color' => self::INJECTED_CSS,
					),
				),
			)
		);

		$this->assertSame( 'rgba(1,2,3,1)', get_theme_mod( self::FOOTER_TEXT ) );
	}

	/**
	 * A background that is not a background object is rejected and the stored value kept.
	 */
	public function test_site_set_theme_mod_rejects_invalid_background(): void {
		set_theme_mod( self::SIDEBAR_BG, 'previous' );

		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::SIDEBAR_BG,
				'value'  => 'not-a-background',
			)
		);

		$this->assertIsArray( $result );
		$this->assertFalse( $result['success'] );
		$this->assertSame( 'value', $result['error']['field'] );
		$this->assertSame( 'previous', get_theme_mod( self::SIDEBAR_BG ) );
	}

	/**
	 * A row height suffix that would close its CSS declaration is replaced by an allowed unit.
	 */
	public function test_header_configure_sanitizes_row_height(): void {
		( new Header_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'    => 'main',
						'height' => array(
							'desktop' => 80,
							'suffix'  => array( 'desktop' => 'px;}body{background:lime}/*' ),
						),
					),
				),
			)
		);

		$height = json_decode( get_theme_mod( self::HEADER_HEIGHT ), true );
		$this->assertSame( 80, $height['desktop'] );
		$this->assertSame( 'px', $height['suffix']['desktop'] );
	}

	/**
	 * A background with an invalid nested color keeps the stored background.
	 */
	public function test_header_configure_keeps_background_on_invalid_nested_color(): void {
		$background = array(
			'type'       => 'color',
			'colorValue' => '#123456',
		);
		set_theme_mod( self::HEADER_BG, $background );

		( new Header_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'main',
						'background' => array(
							'type'       => 'color',
							'colorValue' => 'notacolor',
						),
					),
				),
			)
		);

		$this->assertSame( $background, get_theme_mod( self::HEADER_BG ) );
	}

	/**
	 * The sidebar width goes through its range sanitizer.
	 */
	public function test_site_set_theme_mod_sanitizes_sidebar_width(): void {
		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::SIDEBAR_WIDTH,
				'value'  => '360;}body{background:lime}/*',
			)
		);

		$this->assertIsArray( $result );
		$this->assertTrue( $result['success'] );
		$this->assertSame( 360.0, get_theme_mod( self::SIDEBAR_WIDTH ) );
	}

	/**
	 * Responsive sidebar width units are restricted to safe CSS unit strings.
	 */
	public function test_site_set_theme_mod_sanitizes_sidebar_width_units(): void {
		$width = 360;
		foreach ( array( self::INJECTED_CSS, array( 'mobile' => self::INJECTED_CSS ) ) as $suffix ) {
			$result = ( new Site_Set_Theme_Mod() )->execute(
				array(
					'action' => 'set',
					'key'    => self::SIDEBAR_WIDTH,
					'value'  => array(
						'mobile'  => $width,
						'tablet'  => $width,
						'desktop' => $width,
						'suffix'  => $suffix,
					),
				)
			);

			$this->assertIsArray( $result );
			$this->assertTrue( $result['success'] );
			$stored = json_decode( get_theme_mod( self::SIDEBAR_WIDTH ), true );
			$this->assertSame( 'px', is_array( $stored['suffix'] ) ? $stored['suffix']['mobile'] : $stored['suffix'] );
		}
	}

	/**
	 * Previously stored sidebar width values and units are sanitized when CSS is generated.
	 */
	public function test_stored_sidebar_width_is_sanitized_when_css_is_generated(): void {
		$devices = array( 'mobile', 'tablet', 'desktop' );
		$width   = '360;}body{background:lime}/*';
		foreach ( array( self::INJECTED_CSS, array_fill_keys( $devices, self::INJECTED_CSS ) ) as $suffix ) {
			set_theme_mod(
				self::SIDEBAR_WIDTH,
				wp_json_encode(
					array(
						'mobile'  => $width,
						'tablet'  => $width,
						'desktop' => $width,
						'suffix'  => $suffix,
					)
				)
			);

			foreach ( array( 'slide_left', 'pull_left', 'pull_right' ) as $layout ) {
				set_theme_mod( 'hfg_header_layout_sidebar_layout', $layout );
				$builder  = \HFG\Main::get_instance()->get_builder( 'header' );
				$selector = new Dynamic_Selector( $builder->add_style( array() ) );
				$css_by_device = array(
					'mobile'  => (string) $selector->for_mobile(),
					'tablet'  => (string) $selector->for_tablet(),
					'desktop' => (string) $selector->for_desktop(),
				);

				foreach ( $css_by_device as $css ) {
					$this->assertStringNotContainsString( 'background:lime', $css );
					$this->assertStringContainsString( 'width: 360px;', $css );
					if ( 'pull_left' === $layout ) {
						$this->assertStringContainsString( 'left: 360px;', $css );
					}
					if ( 'pull_right' === $layout ) {
						$this->assertStringContainsString( 'right: 360px;', $css );
					}
				}
			}
		}
	}

	/**
	 * Responsive line heights remain unitless when configured without a unit.
	 */
	public function test_unitless_line_height_is_preserved(): void {
		$devices = array( 'mobile', 'tablet', 'desktop' );
		set_theme_mod(
			'neve_typeface_general',
			array(
				'lineHeight' => array(
					'mobile'  => self::LINE_HEIGHT,
					'tablet'  => self::LINE_HEIGHT,
					'desktop' => self::LINE_HEIGHT,
					'suffix'  => array_fill_keys( $devices, '—' ),
				),
			)
		);

		$css = (string) ( new Frontend() )->generate();

		$this->assertSame( count( $devices ), substr_count( $css, '--bodylineheight: ' . self::LINE_HEIGHT . ';' ) );
		$this->assertStringNotContainsString( '--bodylineheight: ' . self::LINE_HEIGHT . 'px;', $css );
	}

	/**
	 * Legacy scalar directional settings expand across all directions.
	 */
	public function test_scalar_directional_values_are_preserved(): void {
		set_theme_mod( 'neve_form_fields_padding', 12 );
		set_theme_mod( 'neve_form_fields_border_width', 2 );
		set_theme_mod( 'neve_form_fields_border_radius', 3 );
		set_theme_mod( 'neve_scroll_to_top_padding', 4 );
		set_theme_mod( 'neve_scroll_to_top_status', '1' );

		$css = (string) ( new Frontend() )->generate();

		$this->assertStringContainsString( '--formfieldpadding:12px;', $css );
		$this->assertStringContainsString( '--formfieldborderwidth:2px;', $css );
		$this->assertStringContainsString( '--formfieldborderradius:3px;', $css );
		$this->assertSame( 3, substr_count( $css, '--padding:4px;' ) );
	}

	/**
	 * A spacing value that would close its CSS declaration is rejected and the stored value kept.
	 */
	public function test_site_set_theme_mod_rejects_injected_spacing(): void {
		set_theme_mod( self::FORM_PADDING, 'previous' );

		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::FORM_PADDING,
				'value'  => array(
					'top'    => '10;}body{background:lime}/*',
					'right'  => '10',
					'bottom' => '10',
					'left'   => '10',
				),
			)
		);

		$this->assertIsArray( $result );
		$this->assertFalse( $result['success'] );
		$this->assertSame( 'invalid_value', $result['error']['code'] );
		$this->assertSame( 'previous', get_theme_mod( self::FORM_PADDING ) );
	}

	/**
	 * An invalid row color keeps the stored color.
	 */
	public function test_header_configure_keeps_color_on_invalid_value(): void {
		set_theme_mod( self::HEADER_TEXT, '#ff0000' );

		( new Header_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'main',
						'text_color' => 'notacolor',
					),
				),
			)
		);

		$this->assertSame( '#ff0000', get_theme_mod( self::HEADER_TEXT ) );
	}

	/**
	 * An invalid color is rejected and the stored color kept.
	 */
	public function test_site_set_theme_mod_rejects_invalid_color(): void {
		set_theme_mod( self::SIDEBAR_TEXT, '#ff0000' );

		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::SIDEBAR_TEXT,
				'value'  => 'notacolor',
			)
		);

		$this->assertIsArray( $result );
		$this->assertFalse( $result['success'] );
		$this->assertSame( 'invalid_value', $result['error']['code'] );
		$this->assertSame( '#ff0000', get_theme_mod( self::SIDEBAR_TEXT ) );
	}

	/**
	 * An empty color clears the stored color.
	 */
	public function test_site_set_theme_mod_clears_color_with_empty_value(): void {
		set_theme_mod( self::SIDEBAR_TEXT, '#ff0000' );

		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::SIDEBAR_TEXT,
				'value'  => '',
			)
		);

		$this->assertIsArray( $result );
		$this->assertTrue( $result['success'] );
		$this->assertSame( '', get_theme_mod( self::SIDEBAR_TEXT ) );
	}

	/**
	 * Color settings are sanitized.
	 */
	public function test_site_set_theme_mod_sanitizes_colors(): void {
		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::SIDEBAR_TEXT,
				'value'  => self::INJECTED_CSS,
			)
		);

		$this->assertIsArray( $result );
		$this->assertTrue( $result['success'] );
		$this->assertSame( 'rgba(1,2,3,1)', get_theme_mod( self::SIDEBAR_TEXT ) );
	}

	/**
	 * Previously stored ability color settings are sanitized when CSS is generated.
	 */
	public function test_stored_ability_styles_are_sanitized_when_css_is_generated(): void {
		$color_mods = array(
			'neve_form_fields_background_color',
			'neve_form_fields_border_color',
			'neve_input_text_color',
			'neve_scroll_to_top_icon_color',
			'neve_scroll_to_top_icon_hover_color',
			'neve_scroll_to_top_background_color',
			'neve_scroll_to_top_background_hover_color',
		);
		foreach ( $color_mods as $mod ) {
			set_theme_mod( $mod, self::INJECTED_CSS );
		}
		$directional = array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), 2 );
		$directional['unit'] = self::INJECTED_CSS;
		$invalid_directional = array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), '2;}body{background:lime}/*' );
		$invalid_directional['unit'] = 'px';
		set_theme_mod( 'neve_form_fields_border_width', $directional );
		set_theme_mod( 'neve_form_fields_border_radius', $invalid_directional );
		set_theme_mod( 'neve_form_fields_padding', $directional );
		$scroll_padding = array(
			'mobile'       => $directional,
			'tablet'       => $directional,
			'desktop'      => $directional,
			'mobile-unit'  => self::INJECTED_CSS,
			'tablet-unit'  => self::INJECTED_CSS,
			'desktop-unit' => self::INJECTED_CSS,
		);
		set_theme_mod( 'neve_scroll_to_top_padding', $scroll_padding );
		set_theme_mod( 'neve_scroll_to_top_border_radius', '3;}body{background:lime}/*' );
		set_theme_mod( 'neve_scroll_to_top_status', '1' );

		$css = (string) ( new Frontend() )->generate();

		$this->assertStringNotContainsString( 'background:lime', $css );
		$this->assertStringContainsString( '--formfieldbgcolor: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--formfieldbordercolor: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--formfieldcolor: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--formfieldborderwidth:2px;', $css );
		$this->assertStringContainsString( '--formfieldborderradius:0;', $css );
		$this->assertStringContainsString( '--formfieldpadding:2px;', $css );
		$this->assertStringContainsString( '--padding:2px;', $css );
		$this->assertStringContainsString( '--borderradius: 3px;', $css );
		$this->assertStringContainsString( '--hoverbgcolor: rgba(1,2,3,1);', $css );
	}
}
