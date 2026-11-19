<?php
/**
 * Tests for the mobile sidebar close button icon.
 *
 * @package neve
 */

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Components\Abstract_Component;
use HFG\Core\Components\MenuIcon;
use HFG\Main;
use Neve\Core\Settings\Mods;

/**
 * Additional menu icon instance, registered the way Neve Pro registers its second one.
 */
class Neve_Test_Additional_Menu_Icon extends MenuIcon {

	/**
	 * Suffix the component constants like the Pro instance does.
	 *
	 * @param string $const Name of the constant.
	 *
	 * @return string
	 */
	protected function get_class_const( $const ) {
		return constant( 'static::' . $const ) . '_2';
	}
}

/**
 * Class TestNeveHfgMenuIconCloseButton
 */
class TestNeveHfgMenuIconCloseButton extends WP_UnitTestCase {

	/**
	 * Builder properties overwritten by the tests.
	 */
	const BUILDER_PROPERTIES = [ 'builder_components', 'layout_data', 'active_components' ];

	/**
	 * Static render state and builder properties to restore.
	 *
	 * @var array{statics: array{builder: string|null, builder_component: string|null, component: string|null, device: string|null, row: string|null, no_cache: bool}, builder: array<string, mixed>}
	 */
	private $previous_state;

	/**
	 * Store the render state and start from an uncached layout.
	 */
	public function set_up(): void {
		parent::set_up();

		$this->previous_state = [
			'statics' => [
				'builder'           => Abstract_Builder::$current_builder,
				'builder_component' => Abstract_Builder::$current_component,
				'component'         => Abstract_Component::$current_component,
				'device'            => Abstract_Builder::$current_device,
				'row'               => Abstract_Builder::$current_row,
				'no_cache'          => Mods::$no_cache,
			],
			'builder' => [],
		];
		foreach ( self::BUILDER_PROPERTIES as $property ) {
			$this->previous_state['builder'][ $property ] = $this->builder_property( $property )->getValue( $this->header_builder() );
		}

		Mods::$no_cache = true;
	}

	/**
	 * Restore the render state and builder properties.
	 */
	public function tear_down(): void {
		$statics                               = $this->previous_state['statics'];
		Abstract_Builder::$current_builder     = $statics['builder'];
		Abstract_Builder::$current_component   = $statics['builder_component'];
		Abstract_Component::$current_component = $statics['component'];
		Abstract_Builder::$current_device      = $statics['device'];
		Abstract_Builder::$current_row         = $statics['row'];
		Mods::$no_cache                        = $statics['no_cache'];

		foreach ( $this->previous_state['builder'] as $property => $value ) {
			$this->builder_property( $property )->setValue( $this->header_builder(), $value );
		}

		parent::tear_down();
	}

	/**
	 * Get the header builder instance.
	 *
	 * @return Abstract_Builder
	 */
	private function header_builder(): Abstract_Builder {
		$builder = Main::get_instance()->get_builder( 'header' );

		$this->assertInstanceOf( Abstract_Builder::class, $builder );

		return $builder;
	}

	/**
	 * Accessible reflection of a builder property.
	 *
	 * @param string $property Property name.
	 *
	 * @return ReflectionProperty
	 */
	private function builder_property( string $property ): ReflectionProperty {
		$reflection = new ReflectionProperty( Abstract_Builder::class, $property );
		$reflection->setAccessible( true );

		return $reflection;
	}

	/**
	 * Place components in the mobile main row and drop the cached layout.
	 *
	 * @param list<string> $component_ids Components in the row.
	 */
	private function set_mobile_layout( array $component_ids ): void {
		$slot = array_map(
			function ( string $id ): array {
				return [ 'id' => $id ];
			},
			$component_ids
		);
		set_theme_mod( 'neve_migrated_builders', true );
		set_theme_mod(
			'hfg_header_layout_v2',
			wp_json_encode(
				[
					'mobile' => [
						'main'    => [ 'right' => $slot ],
						'sidebar' => [],
					],
				]
			)
		);

		$this->builder_property( 'layout_data' )->setValue( $this->header_builder(), [] );
		$this->builder_property( 'active_components' )->setValue( $this->header_builder(), [] );
	}

	/**
	 * Register the additional menu icon in the header builder.
	 */
	private function register_additional_menu_icon(): void {
		$icon = ( new ReflectionClass( Neve_Test_Additional_Menu_Icon::class ) )->newInstanceWithoutConstructor();
		$icon->init();

		$components                     = $this->builder_property( 'builder_components' )->getValue( $this->header_builder() );
		$components[ $icon->get_id() ] = $icon;
		$this->builder_property( 'builder_components' )->setValue( $this->header_builder(), $components );
	}

	/**
	 * Render the mobile sidebar with the given component last in render context.
	 *
	 * @param string $last_component Component rendered before the sidebar.
	 *
	 * @return string
	 */
	private function render_sidebar( string $last_component ): string {
		Abstract_Builder::$current_builder   = 'header';
		Abstract_Builder::$current_device    = 'mobile';
		Abstract_Builder::$current_row       = 'sidebar';
		Abstract_Builder::$current_component = $last_component;

		ob_start();
		Main::get_instance()->load( 'row-wrapper', 'mobile' );

		return (string) ob_get_clean();
	}

	/**
	 * Close button markup, without the sidebar content.
	 *
	 * @param string $html Rendered sidebar.
	 *
	 * @return string
	 */
	private function close_button( string $html ): string {
		$this->assertSame( 1, preg_match( '#<div class="close-sidebar-panel.*?</button>#s', $html, $match ) );

		return $match[0];
	}

	/**
	 * A menu icon missing from the layout does not change the close button of a default icon.
	 */
	public function test_close_button_ignores_menu_icon_missing_from_layout(): void {
		$this->register_additional_menu_icon();
		set_theme_mod( 'nav-icon_menu_icon', 'default' );
		set_theme_mod( 'nav-icon_2_menu_icon', 'wave' );
		$this->set_mobile_layout( [ 'logo', 'nav-icon' ] );

		$button = $this->close_button( $this->render_sidebar( 'nav-icon' ) );

		$this->assertStringContainsString( 'class="bars"', $button );
		$this->assertStringNotContainsString( 'hamburger--wave', $button );
		$this->assertStringNotContainsString( 'hamburger-box', $button );
	}

	/**
	 * The close button shows the SVG icon even when another component renders last.
	 */
	public function test_close_button_uses_svg_icon_when_another_component_renders_last(): void {
		set_theme_mod( 'nav-icon_menu_icon', 'svg' );
		set_theme_mod( 'nav-icon_svg_menu_icon', '<svg viewBox="0 0 10 10"><path d="M0 0h10v10H0z"></path></svg>' );
		$this->set_mobile_layout( [ 'nav-icon', 'logo' ] );

		$button = $this->close_button( $this->render_sidebar( 'logo' ) );

		$this->assertStringContainsString( 'hamburger--svg', $button );
		$this->assertStringContainsString( 'hamburger-box icon-svg', $button );
		$this->assertStringContainsString( '<path d="M0 0h10v10H0z"', $button );
		$this->assertStringNotContainsString( 'hamburger-inner', $button );
	}

	/**
	 * With only the additional menu icon in the layout, the close button follows it.
	 */
	public function test_close_button_follows_menu_icon_in_layout(): void {
		$this->register_additional_menu_icon();
		set_theme_mod( 'nav-icon_menu_icon', 'wave' );
		set_theme_mod( 'nav-icon_2_menu_icon', 'dots' );
		$this->set_mobile_layout( [ 'logo', 'nav-icon_2' ] );

		$button = $this->close_button( $this->render_sidebar( 'logo' ) );

		$this->assertStringContainsString( 'hamburger--dots', $button );
		$this->assertStringContainsString( 'hamburger-box icon-dots', $button );
		$this->assertStringNotContainsString( 'hamburger--wave', $button );
	}
}
