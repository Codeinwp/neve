<?php
/**
 * Tests that stored color values cannot break out of generated style tags.
 *
 * @package neve
 */

use HFG\Core\Components\Abstract_Component;
use HFG\Main;
use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;

/**
 * Class TestNeveCssStyleTags
 */
class TestNeveCssStyleTags extends WP_UnitTestCase {

	const PAYLOAD = 'linear-gradient(red,blue)</style><script>alert(1)</script>';

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
	 * Previous component CSS render flag.
	 *
	 * @var bool
	 */
	private bool $previous_should_show_css;

	/**
	 * Store the global state the tests replace.
	 */
	public function set_up(): void {
		parent::set_up();

		$this->previous_customize       = $GLOBALS['wp_customize'] ?? null;
		$this->previous_styles          = $GLOBALS['wp_styles'] ?? null;
		$this->previous_should_show_css = Abstract_Component::$should_show_css;

		Mods::$no_cache = true;
	}

	/**
	 * Restore the replaced global state.
	 */
	public function tear_down(): void {
		$GLOBALS['wp_customize']               = $this->previous_customize;
		$GLOBALS['wp_styles']                  = $this->previous_styles;
		Abstract_Component::$should_show_css   = $this->previous_should_show_css;
		Mods::$no_cache                        = false;

		remove_theme_mod( 'custom_html_color' );
		remove_theme_mod( Config::MODS_GLOBAL_CUSTOM_COLORS );

		parent::tear_down();
	}

	/**
	 * A stored component color with HTML is printed without tags in the Customizer preview.
	 */
	public function test_component_css_strips_html_in_customizer_preview(): void {
		require_once ABSPATH . WPINC . '/class-wp-customize-manager.php';

		$GLOBALS['wp_customize'] = new WP_Customize_Manager();
		$GLOBALS['wp_customize']->start_previewing_theme();

		set_theme_mod( 'custom_html_color', self::PAYLOAD );
		Abstract_Component::$should_show_css = true;

		$component = Main::get_instance()->get_builder( 'header' )->get_component( 'custom_html' );
		$this->assertInstanceOf( Abstract_Component::class, $component );

		ob_start();
		$component->render_css();
		$output = (string) ob_get_clean();

		$this->assertStringContainsString( '--color: linear-gradient(red,blue);', $output );
		$this->assertStringNotContainsString( '<script', $output );
		$this->assertSame( 1, substr_count( $output, '</style>' ) );
	}

	/**
	 * A stored custom color with HTML reaches the frontend inline style without tags.
	 */
	public function test_frontend_inline_style_strips_html(): void {
		$GLOBALS['wp_styles'] = new WP_Styles();
		wp_register_style( Dynamic_Css::FRONTEND_HANDLE, false );

		set_theme_mod(
			Config::MODS_GLOBAL_CUSTOM_COLORS,
			[
				'custom-1' => [
					'label' => 'Custom',
					'val'   => self::PAYLOAD,
				],
			]
		);

		( new Dynamic_Css() )->enqueue();

		$inline = implode( '', (array) wp_styles()->get_data( Dynamic_Css::FRONTEND_HANDLE, 'after' ) );

		$this->assertStringContainsString( '--custom-1:linear-gradient(red,blue)', $inline );
		$this->assertStringNotContainsString( '<', $inline );
		$this->assertStringContainsString( '.alignfull > [class*="__inner-container"]', $inline );
	}
}
