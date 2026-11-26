<?php
/**
 * Tests for the logo palette setting read paths.
 *
 * @package neve
 */

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Components\Abstract_Component;
use HFG\Core\Components\Logo;
use HFG\Main;
use Neve\Core\Settings\Mods;

/**
 * Class TestNeveLogoPalette
 */
class TestNeveLogoPalette extends WP_UnitTestCase {

	/**
	 * Previous render state and Mods cache mode.
	 *
	 * @var array{builder: mixed, builder_component: mixed, current_component: mixed, no_cache: bool}
	 */
	private $previous_state;

	/**
	 * Light logo attachment id.
	 *
	 * @var int
	 */
	private $light_id;

	/**
	 * Dark logo attachment id.
	 *
	 * @var int
	 */
	private $dark_id;

	/**
	 * Store the global state the tests change and store the palette as an array.
	 */
	public function set_up(): void {
		parent::set_up();

		$this->previous_state = array(
			'builder'           => Abstract_Builder::$current_builder,
			'builder_component' => Abstract_Builder::$current_component,
			'current_component' => Abstract_Component::$current_component,
			'no_cache'          => Mods::$no_cache,
		);
		Mods::$no_cache       = true;

		$this->light_id = self::factory()->attachment->create_object( 'logo-light.png', 0, array( 'post_mime_type' => 'image/png' ) );
		$this->dark_id  = self::factory()->attachment->create_object( 'logo-dark.png', 0, array( 'post_mime_type' => 'image/png' ) );

		set_theme_mod(
			Logo::COMPONENT_ID . '_' . Logo::LOGO,
			array(
				'light' => $this->light_id,
				'dark'  => $this->dark_id,
				'same'  => false,
			)
		);
	}

	/**
	 * Restore the global state.
	 */
	public function tear_down(): void {
		remove_theme_mod( Logo::COMPONENT_ID . '_' . Logo::LOGO );
		remove_theme_mod( 'custom_logo' );

		Abstract_Builder::$current_builder     = $this->previous_state['builder'];
		Abstract_Builder::$current_component   = $this->previous_state['builder_component'];
		Abstract_Component::$current_component = $this->previous_state['current_component'];
		Mods::$no_cache                        = $this->previous_state['no_cache'];

		parent::tear_down();
	}

	/**
	 * Get the registered header logo component.
	 *
	 * @return Logo
	 */
	private function logo_component(): Logo {
		$component = Main::get_instance()->get_builder( 'header' )->get_component( Logo::COMPONENT_ID );

		$this->assertInstanceOf( Logo::class, $component );

		return $component;
	}

	/**
	 * Logo variants are built from a palette stored as an array.
	 */
	public function test_logo_variants_read_array_palette(): void {
		$variants = $this->logo_component()->filter_logo_variants( array() );

		$this->assertFalse( $variants[ Logo::COMPONENT_ID ]['same'] );
		$this->assertStringEndsWith( 'logo-light.png', $variants[ Logo::COMPONENT_ID ]['light']['src'] );
		$this->assertStringEndsWith( 'logo-dark.png', $variants[ Logo::COMPONENT_ID ]['dark']['src'] );
	}

	/**
	 * Changing the site logo updates a palette stored as an array.
	 */
	public function test_custom_logo_update_reads_array_palette(): void {
		$new_logo_id = self::factory()->attachment->create_object( 'logo-new.png', 0, array( 'post_mime_type' => 'image/png' ) );

		$this->assertSame( $new_logo_id, $this->logo_component()->update_logo_theme_mod( $new_logo_id, $this->light_id ) );
		$this->assertSame(
			array(
				'light' => $new_logo_id,
				'dark'  => $this->dark_id,
				'same'  => false,
			),
			json_decode( get_theme_mod( Logo::COMPONENT_ID . '_' . Logo::LOGO ), true )
		);
	}

	/**
	 * The logo template renders the light logo from a palette stored as an array.
	 */
	public function test_logo_template_reads_array_palette(): void {
		$this->logo_component();
		Abstract_Builder::$current_builder     = 'header';
		Abstract_Builder::$current_component   = null;
		Abstract_Component::$current_component = Logo::COMPONENT_ID;

		ob_start();
		Main::get_instance()->load( 'components/component-logo' );
		$output = ob_get_clean();

		$this->assertStringContainsString( 'logo-light.png', $output );
	}

	/**
	 * Stored palettes decode to an array whatever their shape.
	 */
	public function test_decode_logo_json_normalizes_stored_values(): void {
		$palette = array(
			'light' => 12,
			'dark'  => 34,
			'same'  => false,
		);

		$this->assertSame( $palette, Logo::decode_logo_json( $palette ) );
		$this->assertSame( $palette, Logo::decode_logo_json( wp_json_encode( $palette ) ) );
		$this->assertSame( array(), Logo::decode_logo_json( 'not json' ) );
		$this->assertSame( array(), Logo::decode_logo_json( '5' ) );
		$this->assertSame( array(), Logo::decode_logo_json( false ) );
	}
}
