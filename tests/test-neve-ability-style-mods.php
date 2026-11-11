<?php
/**
 * Tests for sanitizing color and background theme mods written by the abilities.
 *
 * @package Neve
 */

use Neve\Abilities\Footer_Configure;
use Neve\Abilities\Header_Configure;
use Neve\Abilities\Appearance_Update;
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
	const NAV_BUTTON    = 'nav-icon_button_appearance';
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
		set_theme_mod( self::HEADER_TEXT, '#123456' );

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
		set_theme_mod( self::FOOTER_TEXT, '#123456' );

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
	 * Invalid nested background color types keep the stored background.
	 */
	public function test_header_configure_keeps_background_on_invalid_nested_color_types(): void {
		$background = array(
			'type'              => 'image',
			'colorValue'        => '#123456',
			'overlayColorValue' => '#654321',
			'imageUrl'          => '',
			'focusPoint'        => array( 'x' => 0.5, 'y' => 0.5 ),
			'useFeatured'       => false,
		);

		$invalid_values = array(
			'colorValue'        => array( 'notacolor', array() ),
			'overlayColorValue' => array( 'notacolor', array() ),
			'imageUrl'          => array( array() ),
			'focusPoint'        => array( 'not-an-array' ),
			'overlayOpacity'    => array( array() ),
		);

		foreach ( $invalid_values as $field => $invalid_values_for_field ) {
			foreach ( $invalid_values_for_field as $invalid ) {
				set_theme_mod( self::HEADER_BG, $background );
				$candidate           = $background;
				$candidate[ $field ] = $invalid;

				( new Header_Configure() )->execute(
					array(
						'row_style' => array(
							array(
								'row'        => 'main',
								'background' => $candidate,
							),
						),
					)
				);

				$this->assertSame( $background, get_theme_mod( self::HEADER_BG ) );
			}
		}
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
	 * Named row text colors remain supported by both ability paths.
	 */
	public function test_abilities_accept_named_row_text_colors(): void {
		( new Header_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'main',
						'text_color' => 'red',
					),
				),
			)
		);
		$this->assertSame( 'red', get_theme_mod( self::HEADER_TEXT ) );

		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::SIDEBAR_TEXT,
				'value'  => 'red',
			)
		);
		$this->assertIsArray( $result );
		$this->assertTrue( $result['success'] );
		$this->assertSame( 'red', get_theme_mod( self::SIDEBAR_TEXT ) );
	}

	/**
	 * Malformed functional colors are rejected and keep the stored color.
	 */
	public function test_site_set_theme_mod_rejects_malformed_function_color(): void {
		set_theme_mod( self::SIDEBAR_TEXT, '#123456' );

		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::SIDEBAR_TEXT,
				'value'  => 'rgb(,)',
			)
		);

		$this->assertIsArray( $result );
		$this->assertFalse( $result['success'] );
		$this->assertSame( '#123456', get_theme_mod( self::SIDEBAR_TEXT ) );
	}

	/**
	 * Typography and font-family values are sanitized on write and output.
	 */
	public function test_typography_values_are_sanitized_on_write_and_output(): void {
		set_theme_mod( 'neve_body_font_family', 'Arial' );
		$result = ( new Appearance_Update() )->execute(
			array(
				'typography' => array(
					'body_font' => 'Arial;}body{background:lime}/*',
					'element'   => array(
						'target'   => 'body',
						'fontSize' => array(
							'desktop' => '10;}body{background:lime}/*',
							'suffix'  => array( 'desktop' => 'px;}body{background:lime}/*' ),
						),
					),
				),
			)
		);

		$this->assertIsArray( $result );
		$this->assertSame( 'Arial', get_theme_mod( 'neve_body_font_family' ) );
		$typeface = get_theme_mod( 'neve_typeface_general' );
		$this->assertArrayNotHasKey( 'desktop', $typeface['fontSize'] );
		$this->assertSame( 'px', $typeface['fontSize']['suffix']['desktop'] );

		$json_font = '{"x\\";}}body{background:lime}/*":0}';
		( new Appearance_Update() )->execute(
			array(
				'typography' => array( 'body_font' => $json_font ),
			)
		);
		$this->assertSame( 'Arial', get_theme_mod( 'neve_body_font_family' ) );

		set_theme_mod( 'neve_body_font_family', $json_font );
		set_theme_mod( 'neve_archive_typography_post_title', array( 'textTransform' => self::INJECTED_CSS ) );
		set_theme_mod(
			'neve_typeface_general',
			array(
				'fontSize'      => array(
					'desktop' => '10;}body{background:lime}/*',
					'suffix'  => array( 'desktop' => 'px;}body{background:lime}/*' ),
				),
				'lineHeight'    => array( 'desktop' => '10;}body{background:lime}/*' ),
				'letterSpacing' => array( 'desktop' => '10;}body{background:lime}/*' ),
				'fontWeight'    => '10;}body{background:lime}/*',
				'textTransform' => 'none;}body{background:lime}/*',
			)
		);
		$css = (string) ( new Frontend() )->generate();
		$this->assertStringNotContainsString( 'background:lime', $css );
	}

	/**
	 * Stored keyword font weights render and survive partial updates.
	 */
	public function test_keyword_font_weight_survives_partial_typography_update(): void {
		$typeface               = Mods::get_alternative_mod_default( 'neve_typeface_general' );
		$typeface               = is_array( $typeface ) ? $typeface : array();
		$typeface['fontWeight'] = 'bold';
		set_theme_mod( 'neve_typeface_general', $typeface );

		$css = (string) ( new Frontend() )->generate();
		$this->assertStringContainsString( '--bodyfontweight: bold;', $css );

		$result = ( new Appearance_Update() )->execute(
			array(
				'typography' => array(
					'element' => array(
						'target'   => 'body',
						'fontSize' => array( 'desktop' => 24 ),
					),
				),
			)
		);

		$this->assertIsArray( $result );
		$this->assertSame( 'bold', get_theme_mod( 'neve_typeface_general' )['fontWeight'] );
	}

	/**
	 * Partial typography updates retain the target's defaults.
	 */
	public function test_partial_typography_updates_retain_defaults(): void {
		$targets = array(
			'body' => array( 'neve_typeface_general', '400' ),
			'h1'   => array( 'neve_h1_typeface_general', '700' ),
		);

		foreach ( $targets as $target => $expected ) {
			remove_theme_mod( $expected[0] );
			$result = ( new Appearance_Update() )->execute(
				array(
					'typography' => array(
						'element' => array(
							'target'   => $target,
							'fontSize' => array( 'desktop' => 24 ),
						),
					),
				)
			);

			$this->assertIsArray( $result );
			$typeface = get_theme_mod( $expected[0] );
			$this->assertSame( $expected[1], $typeface['fontWeight'] );
			$this->assertSame( 24, $typeface['fontSize']['desktop'] );
			$this->assertArrayHasKey( 'mobile', $typeface['fontSize'] );
		}
	}

	/**
	 * Empty font families remain valid reset values for the ability.
	 */
	public function test_typography_font_families_can_be_cleared(): void {
		set_theme_mod( 'neve_body_font_family', 'Arial' );
		set_theme_mod( 'neve_headings_font_family', 'Georgia' );

		$result = ( new Appearance_Update() )->execute(
			array(
				'typography' => array(
					'body_font'     => '',
					'headings_font' => '',
				),
			)
		);

		$this->assertIsArray( $result );
		$this->assertSame( '', get_theme_mod( 'neve_body_font_family' ) );
		$this->assertSame( '', get_theme_mod( 'neve_headings_font_family' ) );
	}

	/**
	 * Previously stored fallback fonts are sanitized at their CSS sink.
	 */
	public function test_stored_fallback_font_is_sanitized_when_css_is_generated(): void {
		set_theme_mod( 'neve_fallback_font_family', 'Arial;}body{background:lime}/*' );

		$css = \Neve\Core\Dynamic_Css::get_fallback_font();

		$this->assertSame( '--nv-fallback-ff:Arial, Helvetica, sans-serif;', $css );
		$this->assertStringNotContainsString( 'background:lime', $css );
	}

	/**
	 * Stored header component spacing is sanitized at every directional sink.
	 */
	public function test_stored_header_component_spacing_is_sanitized(): void {
		$invalid = array(
			'mobile'       => array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), '5;}body{background:lime}/*' ),
			'tablet'       => array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), '5;}body{background:lime}/*' ),
			'desktop'      => array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), '5;}body{background:lime}/*' ),
			'mobile-unit'  => self::INJECTED_CSS,
			'tablet-unit'  => self::INJECTED_CSS,
			'desktop-unit' => self::INJECTED_CSS,
		);
		$mods    = array(
			'primary-menu_component_padding',
			'primary-menu_component_margin',
			'header_search_field_border_width',
			'header_search_field_border_radius',
			'header_search_responsive_field_border_width',
			'header_search_responsive_field_border_radius',
			'header_menu_icon_label_margin',
		);
		foreach ( $mods as $mod ) {
			set_theme_mod( $mod, $invalid );
		}
		set_theme_mod( 'primary-menu_component_font_family', 'Arial;}body{background:lime}/*' );

		$builder = \HFG\Main::get_instance()->get_builder( 'header' );
		foreach ( array( 'mobile', 'tablet', 'desktop' ) as $device ) {
			$selector = new Dynamic_Selector( $builder->add_style( array() ) );
			$method   = 'for_' . $device;
			$css      = (string) $selector->$method();
			$this->assertStringNotContainsString( 'background:lime', $css );
		}
	}

	/**
	 * An invalid color is rejected and the stored color kept.
	 */
	public function test_site_set_theme_mod_rejects_invalid_color(): void {
		set_theme_mod( self::SIDEBAR_TEXT, '#ff0000' );

		$invalid_colors = array(
			'notacolor',
			'linear-gradient()',
			'linear-gradient(foo)',
			'linear-gradient(red garbage, blue)',
			'linear-gradient(to left right, red, blue)',
			'radial-gradient(10, red, blue)',
			'linear-gradient(red 10deg, blue)',
			'conic-gradient(red 10px, blue)',
			'linear-gradient(rgb(1 / 2 / 3), blue)',
			'radial-gradient(circle 10px 20px, red, blue)',
			'radial-gradient(at left 10px center, red, blue)',
			'linear-gradient(1.deg, red, blue)',
			'linear-gradient(rgb(1.,2,3), blue)',
			'linear-gradient(rgb(255, 0%, 0), blue)',
		);
		foreach ( $invalid_colors as $invalid_color ) {
			$result = ( new Site_Set_Theme_Mod() )->execute(
				array(
					'action' => 'set',
					'key'    => self::SIDEBAR_TEXT,
					'value'  => $invalid_color,
				)
			);

			$this->assertIsArray( $result );
			$this->assertFalse( $result['success'] );
			$this->assertSame( 'invalid_value', $result['error']['code'] );
			$this->assertSame( '#ff0000', get_theme_mod( self::SIDEBAR_TEXT ) );
		}
	}

	/**
	 * Invalid button appearance colors keep the stored appearance.
	 */
	public function test_site_set_theme_mod_rejects_invalid_button_appearance_color(): void {
		$stored = array(
			'background' => '#123456',
			'text'       => '#ffffff',
		);
		set_theme_mod( self::NAV_BUTTON, $stored );

		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::NAV_BUTTON,
				'value'  => array( 'background' => 'notacolor' ),
			)
		);

		$this->assertIsArray( $result );
		$this->assertFalse( $result['success'] );
		$this->assertSame( 'invalid_value', $result['error']['code'] );
		$this->assertSame( $stored, get_theme_mod( self::NAV_BUTTON ) );

		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::NAV_BUTTON,
				'value'  => 'text_button',
			)
		);

		$this->assertIsArray( $result );
		$this->assertFalse( $result['success'] );
		$this->assertSame( $stored, get_theme_mod( self::NAV_BUTTON ) );

		$result = ( new Site_Set_Theme_Mod() )->execute(
			array(
				'action' => 'set',
				'key'    => self::NAV_BUTTON,
				'value'  => array( 'background' => 'transparent' ),
			)
		);

		$this->assertIsArray( $result );
		$this->assertTrue( $result['success'] );
		$this->assertSame( 'transparent', get_theme_mod( self::NAV_BUTTON )['background'] );
	}

	/**
	 * Scalar button mode settings keep the generic allowlisted write path.
	 */
	public function test_site_set_theme_mod_accepts_scalar_button_appearance_mode(): void {
		$allow_search_button = static function ( $allowlist ) {
			$allowlist[] = 'header_search_button_appearance';

			return $allowlist;
		};
		add_filter( 'neve_abilities_theme_mod_allowlist', $allow_search_button );
		try {
			$result = ( new Site_Set_Theme_Mod() )->execute(
				array(
					'action' => 'set',
					'key'    => 'header_search_button_appearance',
					'value'  => 'text_button',
				)
			);
		} finally {
			remove_filter( 'neve_abilities_theme_mod_allowlist', $allow_search_button );
		}

		$this->assertIsArray( $result );
		$this->assertTrue( $result['success'] );
		$this->assertSame( 'text_button', get_theme_mod( 'header_search_button_appearance' ) );
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

		$responsive_directional = array(
			'mobile'       => $invalid_directional,
			'tablet'       => $invalid_directional,
			'desktop'      => $invalid_directional,
			'mobile-unit'  => self::INJECTED_CSS,
			'tablet-unit'  => self::INJECTED_CSS,
			'desktop-unit' => self::INJECTED_CSS,
		);
		foreach ( array( 'neve_content_vspacing', 'neve_blog_content_padding', 'neve_comments_boxed_padding', 'neve_comments_form_boxed_padding', 'neve_post_cover_padding', 'neve_post_cover_title_boxed_padding', 'neve_post_content_vspacing' ) as $mod ) {
			set_theme_mod( $mod, $responsive_directional );
		}
		set_theme_mod( 'neve_post_inherit_vspacing', 'individual' );
		$post_id = self::factory()->post->create();
		$this->go_to( get_permalink( $post_id ) );

		$css = (string) ( new Frontend() )->generate();

		$this->assertStringNotContainsString( 'background:lime', $css );
		$this->assertStringContainsString( '--formfieldbgcolor: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--formfieldbordercolor: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--formfieldcolor: rgba(1,2,3,1);', $css );
		$this->assertStringContainsString( '--formfieldborderwidth:2px;', $css );
		$this->assertStringNotContainsString( '--formfieldborderradius:', $css );
		$this->assertStringContainsString( '--formfieldpadding:2px;', $css );
		$this->assertStringContainsString( '--padding:2px;', $css );
		$this->assertStringContainsString( '--borderradius: 3px;', $css );
		$this->assertStringContainsString( '--hoverbgcolor: rgba(1,2,3,1);', $css );
	}

}
