<?php
/**
 * Tests for the HFG component resolution guards.
 *
 * @package neve
 */

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Components\Abstract_Component;
use HFG\Main;

/**
 * Class TestNeveHfgComponentGuards
 */
class TestNeveHfgComponentGuards extends WP_UnitTestCase {

	/**
	 * Previous builder static state.
	 *
	 * @var array
	 */
	private $previous_state = array();

	/**
	 * Store the static render state.
	 */
	public function set_up() {
		parent::set_up();

		$this->previous_state = array(
			'builder'            => Abstract_Builder::$current_builder,
			'builder_component'  => Abstract_Builder::$current_component,
			'current_component'  => Abstract_Component::$current_component,
		);
	}

	/**
	 * Restore the static render state.
	 */
	public function tear_down() {
		Abstract_Builder::$current_builder   = $this->previous_state['builder'];
		Abstract_Builder::$current_component = $this->previous_state['builder_component'];
		Abstract_Component::$current_component = $this->previous_state['current_component'];

		parent::tear_down();
	}

	/**
	 * Get the header builder instance.
	 *
	 * @return Abstract_Builder
	 */
	private function header_builder() {
		$builder = Main::get_instance()->get_builder( 'header' );

		$this->assertInstanceOf( Abstract_Builder::class, $builder );

		return $builder;
	}

	/**
	 * An unknown component id resolves to null instead of raising a warning.
	 */
	public function test_get_component_returns_null_for_unknown_id() {
		$this->assertNull( $this->header_builder()->get_component( 'neve-not-a-component' ) );
	}

	/**
	 * With no component in render context, get_component resolves to null.
	 */
	public function test_get_component_returns_null_without_render_context() {
		Abstract_Builder::$current_component   = null;
		Abstract_Component::$current_component = null;

		$this->assertNull( $this->header_builder()->get_component() );
	}

	/**
	 * A stale component id left in the render context resolves to null.
	 */
	public function test_get_component_returns_null_for_stale_context() {
		Abstract_Builder::$current_component   = null;
		Abstract_Component::$current_component = 'neve-stale-component';

		$this->assertNull( $this->header_builder()->get_component() );
	}

	/**
	 * A registered component is still returned.
	 */
	public function test_get_component_returns_registered_component() {
		$builder    = $this->header_builder();
		$components = $builder->get_components();

		if ( empty( $components ) ) {
			$this->markTestSkipped( 'No header components registered.' );
		}

		$id = key( $components );

		Abstract_Builder::$current_component   = null;
		Abstract_Component::$current_component = $id;

		$component = $builder->get_component();

		$this->assertInstanceOf( Abstract_Component::class, $component );
		$this->assertSame( $id, $component->get_id() );
	}

	/**
	 * Templates that resolve the component from the render context.
	 *
	 * @return array
	 */
	public function component_template_provider() {
		return array(
			'wrapper'        => array( 'component-wrapper' ),
			'footer sidebar' => array( 'components/component-footer-sidebar' ),
			'logo'           => array( 'components/component-logo' ),
			'nav'            => array( 'components/component-nav' ),
		);
	}

	/**
	 * Component templates render nothing when the component is unresolvable.
	 *
	 * @param string $template Template slug.
	 *
	 * @dataProvider component_template_provider
	 */
	public function test_component_template_renders_nothing_without_component( $template ) {
		Abstract_Builder::$current_builder     = 'header';
		Abstract_Builder::$current_component   = null;
		Abstract_Component::$current_component = 'neve-stale-component';

		ob_start();
		Main::get_instance()->load( $template );
		$output = ob_get_clean();

		$this->assertSame( '', trim( $output ) );
	}
}
