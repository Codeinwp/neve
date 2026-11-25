<?php
/**
 * Tests that Customizer style settings cannot save values that close their CSS declaration.
 *
 * @package neve
 */

use HFG\Main;
use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Css_Prop;

/**
 * Class TestNeveCustomizerCssValues
 */
class TestNeveCustomizerCssValues extends WP_UnitTestCase {

	const PAYLOAD = '1;}body{background:lime}/*';

	const TOUCHED_MODS = array(
		'nav-icon_button_appearance',
		'primary-menu_component_typeface',
		'primary-menu_component_padding',
		'primary-menu_component_margin',
		'primary-menu_component_font_family',
		'neve_button_appearance',
		'neve_test_css_unit',
	);

	/**
	 * Previous global styles registry.
	 *
	 * @var WP_Styles|null
	 */
	private ?WP_Styles $previous_styles;

	/**
	 * Customizer manager with the header builder settings registered.
	 *
	 * @var WP_Customize_Manager
	 */
	private WP_Customize_Manager $manager;

	/**
	 * Register the header builder settings.
	 */
	public function set_up(): void {
		parent::set_up();

		require_once ABSPATH . WPINC . '/class-wp-customize-manager.php';

		$this->previous_styles = $GLOBALS['wp_styles'] ?? null;
		Mods::$no_cache        = true;

		$this->manager = new WP_Customize_Manager();
		Main::get_instance()->get_builder( 'header' )->customize_register( $this->manager );
	}

	/**
	 * Restore the replaced global state.
	 */
	public function tear_down(): void {
		$GLOBALS['wp_styles'] = $this->previous_styles;
		Mods::$no_cache       = false;

		foreach ( self::TOUCHED_MODS as $mod ) {
			remove_theme_mod( $mod );
		}

		parent::tear_down();
	}

	/**
	 * Button appearance colors and sizes keep only valid values.
	 */
	public function test_button_appearance_setting_keeps_only_valid_values(): void {
		$value = $this->save(
			'nav-icon_button_appearance',
			array(
				'type'         => 'fill',
				'background'   => '#222' . self::PAYLOAD,
				'text'         => '#ffffff',
				'borderRadius' => array(
					'top'    => self::PAYLOAD,
					'right'  => 3,
					'bottom' => 3,
					'left'   => 3,
				),
			)
		);

		$this->assertSame( '', $value['background'] );
		$this->assertSame( '#ffffff', $value['text'] );
		$this->assertSame( '', $value['borderRadius']['top'] );
		$this->assertSame( 3, $value['borderRadius']['left'] );
		$this->assertStringNotContainsString( 'lime', $this->get_frontend_css() );
	}

	/**
	 * Component typography sizes keep only numbers and units.
	 */
	public function test_component_typography_setting_keeps_only_numbers_and_units(): void {
		$value = $this->save(
			'primary-menu_component_typeface',
			array(
				'fontWeight'    => '400',
				'textTransform' => 'none',
				'lineHeight'    => array(
					'mobile' => self::PAYLOAD,
					'tablet' => '1.6',
					'suffix' => array(
						'mobile' => 'em',
						'tablet' => 'em;}',
					),
				),
				'letterSpacing' => array(),
				'fontSize'      => array(),
			)
		);

		$this->assertSame( '', $value['lineHeight']['mobile'] );
		$this->assertSame( '1.6', $value['lineHeight']['tablet'] );
		$this->assertSame( 'em', $value['lineHeight']['suffix']['mobile'] );
		$this->assertSame( '', $value['lineHeight']['suffix']['tablet'] );
		$this->assertStringNotContainsString( 'lime', $this->get_frontend_css() );
	}

	/**
	 * Component padding and margin keep only numbers and units.
	 */
	public function test_component_spacing_settings_keep_only_numbers_and_units(): void {
		foreach ( array( 'primary-menu_component_padding', 'primary-menu_component_margin' ) as $setting ) {
			$value = $this->save(
				$setting,
				array(
					'desktop'      => array(
						'top'    => self::PAYLOAD,
						'right'  => 10,
						'bottom' => '',
						'left'   => 'auto',
					),
					'desktop-unit' => 'px;}',
				)
			);

			$this->assertSame( '', $value['desktop']['top'], $setting );
			$this->assertSame( 10, $value['desktop']['right'], $setting );
			$this->assertSame( 'auto', $value['desktop']['left'], $setting );
			$this->assertSame( '', $value['desktop-unit'], $setting );
		}

		$this->assertStringNotContainsString( 'lime', $this->get_frontend_css() );
	}

	/**
	 * Component and global font families that could close their declaration save empty.
	 */
	public function test_font_family_settings_reject_declaration_breaking_names(): void {
		$this->assertSame( '', $this->save( 'primary-menu_component_font_family', 'Arial' . self::PAYLOAD ) );
		$this->assertSame( '', $this->save( 'primary-menu_component_font_family', 'x<background:lime' ) );
		$this->assertSame( 'Open Sans', $this->save( 'primary-menu_component_font_family', 'Open Sans' ) );

		$this->assertSame( '', neve_sanitize_font_family( 'Arial;}body{background:lime}/*' ) );
		$this->assertSame( 'Arial, Helvetica, sans-serif', neve_sanitize_font_family( 'Arial, Helvetica, sans-serif' ) );
	}

	/**
	 * A stored unit that is not a CSS unit prints as px.
	 */
	public function test_stored_unit_cannot_close_declaration(): void {
		set_theme_mod(
			'neve_button_appearance',
			array(
				'type'         => 'fill',
				'borderRadius' => array(
					'top'    => 3,
					'right'  => 3,
					'bottom' => 3,
					'left'   => 3,
					'unit'   => 'px;}body{background:lime}/*',
				),
			)
		);

		$css = $this->get_frontend_css();

		$this->assertStringNotContainsString( 'lime', $css );
		$this->assertStringContainsString( '--primarybtnborderradius:3px;', $css );
	}

	/**
	 * The typeface control's "No unit" line height choice is saved and printed without a unit.
	 */
	public function test_no_unit_line_height_is_kept(): void {
		$value = $this->save(
			'primary-menu_component_typeface',
			array(
				'fontWeight'    => '400',
				'textTransform' => 'none',
				'lineHeight'    => array(
					'mobile'  => '1.6',
					'tablet'  => '1.6',
					'desktop' => '1.6',
					'suffix'  => array(
						'mobile'  => '—',
						'tablet'  => '—',
						'desktop' => '—',
					),
				),
				'letterSpacing' => array(),
				'fontSize'      => array(),
			)
		);

		$this->assertSame( '—', $value['lineHeight']['suffix']['mobile'] );

		$css = $this->get_frontend_css();
		$this->assertStringContainsString( '--lineheight:1.6;', str_replace( ' ', '', $css ) );
		$this->assertStringNotContainsString( '--lineheight:1.6px', str_replace( ' ', '', $css ) );
	}

	/**
	 * The responsive unit getters print a stored unit that is not a CSS unit as px.
	 */
	public function test_responsive_unit_getters_reject_stored_units(): void {
		set_theme_mod( 'neve_test_css_unit', array( 'desktop-unit' => 'px;}body{background:lime}/*' ) );
		$this->assertSame( 'px', Css_Prop::get_unit_responsive( array( 'key' => 'neve_test_css_unit' ), 'desktop' ) );

		set_theme_mod( 'neve_test_css_unit', array( 'suffix' => array( 'desktop' => 'px;}body{background:lime}/*' ) ) );
		$this->assertSame( 'px', Css_Prop::get_suffix_responsive( array( 'key' => 'neve_test_css_unit' ), 'desktop' ) );

		set_theme_mod( 'neve_test_css_unit', array( 'suffix' => array( 'desktop' => 'em' ) ) );
		$this->assertSame( 'em', Css_Prop::get_suffix_responsive( array( 'key' => 'neve_test_css_unit' ), 'desktop' ) );
	}

	/**
	 * Sanitize a value through its registered Customizer setting and save it.
	 *
	 * @param string $id    Setting id.
	 * @param mixed  $value Incoming value.
	 *
	 * @return mixed The saved value.
	 */
	private function save( string $id, $value ) {
		$setting = $this->manager->get_setting( $id );
		$this->assertInstanceOf( WP_Customize_Setting::class, $setting, $id );

		set_theme_mod( $id, $setting->sanitize( $value ) );

		return get_theme_mod( $id );
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
