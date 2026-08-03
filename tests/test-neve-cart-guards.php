<?php
/**
 * Tests for the cart markup guards: the legacy primary-navigation cart item and
 * the header/footer builder cart icon component.
 *
 * Both entry points live in one test case on purpose. The null-cart scenario has
 * to declare a global `WooCommerce` class, which cannot be undeclared afterwards,
 * so the tests that need WooCommerce absent must be guaranteed to run first -
 * something only method order inside a single class gives us.
 *
 * @package neve
 */

/**
 * Class TestNeveCartGuards
 */
class TestNeveCartGuards extends WP_UnitTestCase {

	/**
	 * Render the nav menu cart markup.
	 *
	 * @param bool $responsive whether to render the responsive variant.
	 *
	 * @return string
	 */
	private function render_nav_menu_cart( $responsive = false ) {
		$header = new \Neve\Views\Header();
		$method = new ReflectionMethod( $header, 'get_nav_menu_cart' );
		$method->setAccessible( true );

		return $method->invoke( $header, $responsive );
	}

	/**
	 * Render the builder cart icon component.
	 *
	 * @return string
	 */
	private function render_cart_icon_component() {
		$reflection = new ReflectionClass( \HFG\Core\Components\CartIcon::class );
		$component  = $reflection->newInstanceWithoutConstructor();

		ob_start();
		$component->render_component();

		return (string) ob_get_clean();
	}

	/**
	 * Load the WooCommerce stubs.
	 */
	private function require_wc_stubs() {
		require_once __DIR__ . '/stubs/woocommerce-cart.php';
	}

	/**
	 * Skip when the cart state cannot be simulated.
	 */
	private function skip_unless_cart_is_stubbable() {
		if ( defined( 'NEVE_TESTS_WC_CART_STUB' ) ) {
			return;
		}

		if ( class_exists( 'WooCommerce', false ) || function_exists( 'WC' ) ) {
			$this->markTestSkipped( 'A real WooCommerce instance is loaded; the cart state cannot be stubbed.' );
		}
	}

	/**
	 * Skip when WooCommerce is present, stub included.
	 */
	private function skip_unless_woocommerce_is_absent() {
		if ( class_exists( 'WooCommerce', false ) ) {
			$this->markTestSkipped( 'WooCommerce is loaded in this environment.' );
		}
	}

	/**
	 * Nothing is rendered when WooCommerce is not active at all.
	 */
	public function test_nav_menu_cart_is_empty_without_woocommerce() {
		$this->skip_unless_woocommerce_is_absent();

		$this->assertSame( '', $this->render_nav_menu_cart() );
		$this->assertSame( '', $this->render_nav_menu_cart( true ) );
	}

	/**
	 * The builder cart icon renders nothing when WooCommerce is not active at all.
	 */
	public function test_cart_icon_component_is_empty_without_woocommerce() {
		$this->skip_unless_woocommerce_is_absent();

		$this->assertSame( '', $this->render_cart_icon_component() );
	}

	/**
	 * Nothing is rendered when the WooCommerce cart object is not available.
	 */
	public function test_nav_menu_cart_is_empty_when_cart_object_is_missing() {
		$this->skip_unless_cart_is_stubbable();
		$this->require_wc_stubs();

		$this->assertNull( WC()->cart, 'The stub must expose a null cart to reproduce the crash.' );
		$this->assertSame( '', $this->render_nav_menu_cart() );
		$this->assertSame( '', $this->render_nav_menu_cart( true ) );
	}

	/**
	 * The builder cart icon renders nothing when the WooCommerce cart object is
	 * not available.
	 */
	public function test_cart_icon_component_is_empty_when_cart_object_is_missing() {
		$this->skip_unless_cart_is_stubbable();
		$this->require_wc_stubs();

		$this->assertNull( WC()->cart, 'The stub must expose a null cart to reproduce the crash.' );
		$this->assertSame( '', $this->render_cart_icon_component() );
	}

	/**
	 * The builder cart icon renders the cart markup when WooCommerce is active
	 * and the cart holds items.
	 */
	public function test_cart_icon_component_is_not_empty_when_cart_has_items() {
		$this->skip_unless_cart_is_stubbable();
		$this->require_wc_stubs();

		$previous_cart   = WC()->cart;
		WC()->cart       = new WC_Cart( 3 );
		register_widget( 'WC_Widget_Cart' );

		try {
			$output = $this->render_cart_icon_component();
		} finally {
			WC()->cart = $previous_cart;
			unregister_widget( 'WC_Widget_Cart' );
		}

		$this->assertNotSame( '', $output );
		$this->assertStringContainsString( 'menu-item-nav-cart', $output );
		$this->assertStringContainsString( 'cart-icon-wrapper', $output );
		$this->assertMatchesRegularExpression( '/class="cart-count">\s*3\s*</', $output, 'The cart contents count is rendered.' );
		$this->assertStringNotContainsString( 'cart-is-empty', $output );
	}
}
