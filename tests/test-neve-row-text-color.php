<?php
/**
 * Tests that header/footer row text colors only accept and print colors.
 *
 * @package neve
 */

use HFG\Main;
use Neve\Abilities\Footer_Configure;
use Neve\Abilities\Header_Configure;
use Neve\Abilities\Site_Set_Theme_Mod;
use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Mods;

/**
 * Class TestNeveRowTextColor
 */
class TestNeveRowTextColor extends WP_UnitTestCase {

	const PAYLOAD = '#222;}body{background:lime}/*';

	const TOUCHED_MODS = array(
		'hfg_header_layout_main_new_text_color',
		'hfg_footer_layout_main_new_text_color',
		'hfg_footer_layout_main_background',
		'hfg_header_layout_sidebar_new_text_color',
		'hfg_header_layout_sidebar_background',
		'neve_form_fields_border_color',
	);

	/**
	 * Previous global Customizer manager.
	 *
	 * @var WP_Customize_Manager|null
	 */
	private ?WP_Customize_Manager $previous_customize;

	/**
	 * Previous global styles registry.
	 *
	 * @var WP_Styles|null
	 */
	private ?WP_Styles $previous_styles;

	/**
	 * Store the global state the tests replace.
	 */
	public function set_up(): void {
		parent::set_up();

		$this->previous_customize = $GLOBALS['wp_customize'] ?? null;
		$this->previous_styles    = $GLOBALS['wp_styles'] ?? null;

		Mods::$no_cache = true;
	}

	/**
	 * Restore the replaced global state.
	 */
	public function tear_down(): void {
		$GLOBALS['wp_customize'] = $this->previous_customize;
		$GLOBALS['wp_styles']    = $this->previous_styles;
		Mods::$no_cache          = false;

		foreach ( self::TOUCHED_MODS as $mod ) {
			remove_theme_mod( $mod );
		}

		parent::tear_down();
	}

	/**
	 * The Customizer setting keeps colors and drops anything else.
	 */
	public function test_row_text_color_setting_accepts_only_colors(): void {
		require_once ABSPATH . WPINC . '/class-wp-customize-manager.php';

		$manager = new WP_Customize_Manager();
		Main::get_instance()->get_builder( 'footer' )->customize_register( $manager );

		$setting = $manager->get_setting( 'hfg_footer_layout_main_new_text_color' );
		$this->assertInstanceOf( WP_Customize_Setting::class, $setting );

		$this->assertSame( '', $setting->sanitize( self::PAYLOAD ) );
		$this->assertSame( '', $setting->sanitize( 'notacolor' ) );
		$this->assertSame( '#222222', $setting->sanitize( '#222222' ) );
		$this->assertSame( 'rgba(1, 2, 3, 0.5)', $setting->sanitize( 'rgba(1, 2, 3, 0.5)' ) );
		$this->assertSame( 'var(--nv-primary-accent)', $setting->sanitize( 'var(--nv-primary-accent)' ) );
	}

	/**
	 * A stored row text color is printed only when it is a color; otherwise the row default is printed.
	 */
	public function test_row_text_color_output_prints_only_colors(): void {
		set_theme_mod( 'hfg_header_layout_main_new_text_color', self::PAYLOAD );
		$css = $this->get_frontend_css();

		$this->assertStringNotContainsString( 'lime', $css );
		$this->assertMatchesRegularExpression( '/\.header-main\{[^}]*--color: var\(--nv-text-color\);/', $css );

		set_theme_mod( 'hfg_header_layout_main_new_text_color', 'notacolor' );
		$css = $this->get_frontend_css();

		$this->assertStringNotContainsString( 'notacolor', $css );
		$this->assertMatchesRegularExpression( '/\.header-main\{[^}]*--color: var\(--nv-text-color\);/', $css );

		set_theme_mod( 'hfg_header_layout_main_new_text_color', '#123456' );

		$this->assertMatchesRegularExpression( '/\.header-main\{[^}]*--color: #123456;/', $this->get_frontend_css() );
	}

	/**
	 * The configure abilities skip a row text color that is not a color and keep valid ones.
	 */
	public function test_configure_abilities_sanitize_row_style_colors(): void {
		set_theme_mod( 'hfg_header_layout_main_new_text_color', '#111111' );

		( new Header_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'main',
						'text_color' => self::PAYLOAD,
					),
				),
			)
		);
		$this->assertSame( '#111111', get_theme_mod( 'hfg_header_layout_main_new_text_color' ) );

		( new Footer_Configure() )->execute(
			array(
				'row_style' => array(
					array(
						'row'        => 'main',
						'text_color' => '#abcdef',
						'background' => array(
							'type'       => 'color',
							'colorValue' => self::PAYLOAD,
						),
					),
				),
			)
		);
		$this->assertSame( '#abcdef', get_theme_mod( 'hfg_footer_layout_main_new_text_color' ) );

		$background = get_theme_mod( 'hfg_footer_layout_main_background' );
		$this->assertIsArray( $background );
		$this->assertSame( '', $background['colorValue'] );
	}

	/**
	 * The set-theme-mod ability rejects colors and backgrounds its Customizer setting would not save.
	 */
	public function test_set_theme_mod_ability_sanitizes_colors_and_backgrounds(): void {
		$ability = new Site_Set_Theme_Mod();

		set_theme_mod( 'hfg_header_layout_sidebar_new_text_color', '#111111' );
		$result = $ability->execute(
			array(
				'action' => 'set',
				'key'    => 'hfg_header_layout_sidebar_new_text_color',
				'value'  => self::PAYLOAD,
			)
		);
		$this->assertFalse( $result['success'] );
		$this->assertSame( 'invalid_value', $result['error']['code'] );
		$this->assertSame( '#111111', get_theme_mod( 'hfg_header_layout_sidebar_new_text_color' ) );

		$result = $ability->execute(
			array(
				'action' => 'set',
				'key'    => 'neve_form_fields_border_color',
				'value'  => 'rgba(1, 2, 3, 1)',
			)
		);
		$this->assertTrue( $result['success'] );
		$this->assertSame( 'rgba(1, 2, 3, 1)', get_theme_mod( 'neve_form_fields_border_color' ) );

		$result = $ability->execute(
			array(
				'action' => 'set',
				'key'    => 'hfg_header_layout_sidebar_new_text_color',
				'value'  => '',
			)
		);
		$this->assertTrue( $result['success'] );
		$this->assertSame( '', get_theme_mod( 'hfg_header_layout_sidebar_new_text_color' ) );

		$result = $ability->execute(
			array(
				'action' => 'set',
				'key'    => 'hfg_header_layout_sidebar_background',
				'value'  => self::PAYLOAD,
			)
		);
		$this->assertFalse( $result['success'] );
		$this->assertFalse( get_theme_mod( 'hfg_header_layout_sidebar_background' ) );
	}

	/**
	 * Build the frontend inline CSS.
	 *
	 * @return string
	 */
	private function get_frontend_css(): string {
		$GLOBALS['wp_styles'] = new WP_Styles();
		wp_register_style( Dynamic_Css::FRONTEND_HANDLE, false );

		( new Dynamic_Css() )->enqueue();

		return implode( '', (array) wp_styles()->get_data( Dynamic_Css::FRONTEND_HANDLE, 'after' ) );
	}
}
