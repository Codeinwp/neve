<?php
/**
 * Tests for scroll-to-top dependency guards.
 *
 * @package neve
 */

/**
 * Scroll-to-top view whose options dependency cannot be resolved.
 */
class NeveMissingScrollToTopOptionsView extends \Neve\Views\Scroll_To_Top {

	/**
	 * Return a deliberately unavailable dependency.
	 *
	 * @return string
	 */
	protected function get_options_class() {
		return 'Neve\\Tests\\Missing_Scroll_To_Top_Options';
	}
}

/**
 * Class TestNeveScrollToTopGuards
 */
class TestNeveScrollToTopGuards extends WP_UnitTestCase {

	/**
	 * Every public callback must be a no-op when the options class is missing.
	 */
	public function test_callbacks_survive_missing_options_class() {
		$view = new NeveMissingScrollToTopOptionsView();

		$view->enqueue_scripts();
		$this->assertFalse( wp_script_is( 'neve-scroll-to-top', 'enqueued' ) );

		ob_start();
		$view->scroll_to_top_amp();
		$view->render_button();
		$output = ob_get_clean();

		$this->assertSame( '', $output );
	}
}
