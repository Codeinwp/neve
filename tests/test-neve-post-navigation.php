<?php
/**
 * Tests the single post navigation labels.
 *
 * @package neve
 */

/**
 * Class TestNevePostNavigation
 */
class TestNevePostNavigation extends WP_UnitTestCase {

	/**
	 * Point the global post to the middle of three posts so both links render.
	 */
	public function setUp(): void {
		parent::setUp();

		self::factory()->post->create( [ 'post_date' => '2024-01-01 00:00:00' ] );
		$middle = self::factory()->post->create( [ 'post_date' => '2024-01-02 00:00:00' ] );
		self::factory()->post->create( [ 'post_date' => '2024-01-03 00:00:00' ] );

		$this->go_to( get_permalink( $middle ) );
		$GLOBALS['post'] = get_post( $middle );
	}

	/**
	 * Remove the label theme mods so they don't leak into other tests.
	 */
	public function tearDown(): void {
		remove_theme_mod( 'neve_post_navigation_previous_label' );
		remove_theme_mod( 'neve_post_navigation_next_label' );

		parent::tearDown();
	}

	/**
	 * Render the post navigation markup.
	 *
	 * @return string
	 */
	private function render(): string {
		ob_start();
		( new \Neve\Views\Pluggable\Pagination() )->render_post_navigation();
		return (string) ob_get_clean();
	}

	/**
	 * Without custom labels the default ones are used.
	 */
	public function test_default_labels() {
		$output = $this->render();

		$this->assertStringContainsString( '<span class="nav-direction">previous</span>', $output );
		$this->assertStringContainsString( '<span class="nav-direction">next</span>', $output );
	}

	/**
	 * Custom labels replace the default ones.
	 */
	public function test_custom_labels() {
		set_theme_mod( 'neve_post_navigation_previous_label', 'Older story' );
		set_theme_mod( 'neve_post_navigation_next_label', 'Newer story' );

		$output = $this->render();

		$this->assertStringContainsString( '<span class="nav-direction">Older story</span>', $output );
		$this->assertStringContainsString( '<span class="nav-direction">Newer story</span>', $output );
		$this->assertStringNotContainsString( '<span class="nav-direction">previous</span>', $output );
	}

	/**
	 * HTML in a stored label is escaped on output.
	 */
	public function test_custom_label_is_escaped() {
		set_theme_mod( 'neve_post_navigation_previous_label', '<script>alert(1)</script>' );

		$output = $this->render();

		$this->assertStringNotContainsString( '<script>', $output );
		$this->assertStringContainsString( '&lt;script&gt;', $output );
	}
}
