<?php
/**
 * Tests for the per-post content width meta.
 *
 * @package neve
 */

use Neve\Views\Pluggable\Metabox_Settings;

/**
 * Class TestNeveMetaboxContentWidth
 */
class TestNeveMetaboxContentWidth extends WP_UnitTestCase {

	/**
	 * Page carrying the content width meta.
	 *
	 * @var int
	 */
	private $page_id;

	/**
	 * Global post in place before the test replaced it.
	 *
	 * @var WP_Post|null
	 */
	private $previous_post;

	/**
	 * Global post type in place before the test replaced it.
	 *
	 * @var string|null
	 */
	private $previous_post_type;

	/**
	 * Setup.
	 */
	public function setUp(): void {
		global $post, $post_type;

		parent::setUp();

		$this->previous_post      = $post;
		$this->previous_post_type = $post_type;

		// The test case unregisters every meta key on teardown.
		$manager = new \Neve\Admin\Metabox\Manager();
		$manager->neve_register_meta();

		$this->page_id = self::factory()->post->create( array( 'post_type' => 'page' ) );

		$post      = get_post( $this->page_id );
		$post_type = 'page';

		wp_register_style( 'neve-gutenberg-style', false, array(), '1' );
	}

	/**
	 * Teardown.
	 */
	public function tearDown(): void {
		global $post, $post_type;

		$post      = $this->previous_post;
		$post_type = $this->previous_post_type;

		wp_deregister_style( 'neve-gutenberg-style' );

		parent::tearDown();
	}

	/**
	 * Store a meta value the way it sits in the database, without the registered sanitizer.
	 *
	 * @param string $key the meta key.
	 * @param string $value the raw meta value.
	 */
	private function store_raw_meta( string $key, string $value ): void {
		global $wpdb;

		$wpdb->insert(
			$wpdb->postmeta,
			array(
				'post_id'    => $this->page_id,
				'meta_key'   => $key,
				'meta_value' => $value,
			)
		);
		wp_cache_delete( $this->page_id, 'post_meta' );
	}

	/**
	 * Render the editor width styles for the test page.
	 *
	 * @param string $container the container layout of the page.
	 * @param string $width the stored content width.
	 *
	 * @return string
	 */
	private function render_editor_styles( string $container, string $width ): string {
		update_post_meta( $this->page_id, Metabox_Settings::CONTAINER, $container );
		update_post_meta( $this->page_id, Metabox_Settings::ENABLE_CONTENT_WIDTH, 'on' );
		$this->store_raw_meta( Metabox_Settings::CONTENT_WIDTH, $width );

		( new Metabox_Settings() )->editor_content_width();

		return implode( '', (array) wp_styles()->get_data( 'neve-gutenberg-style', 'after' ) );
	}

	/**
	 * Metadata written outside the editor, as an import does, is stored as a number.
	 */
	public function test_imported_width_is_stored_as_integer(): void {
		add_post_meta( $this->page_id, Metabox_Settings::CONTENT_WIDTH, 'abc' );
		add_post_meta( $this->page_id, Metabox_Settings::ENABLE_CONTENT_WIDTH, 'on' );

		$this->assertSame( '0', get_post_meta( $this->page_id, Metabox_Settings::CONTENT_WIDTH, true ) );
		$this->assertSame( 'on', get_post_meta( $this->page_id, Metabox_Settings::ENABLE_CONTENT_WIDTH, true ) );
	}

	/**
	 * A non-numeric stored width falls back to the default width in a contained layout.
	 */
	public function test_non_numeric_width_does_not_break_contained_editor(): void {
		$styles = $this->render_editor_styles( 'contained', 'abc' );

		$this->assertMatchesRegularExpression( '/max-width: [1-9]\d*px;/', $styles );
	}

	/**
	 * A stored width carrying CSS only contributes its number in a full-width layout.
	 */
	public function test_css_in_width_is_not_printed_in_full_width_editor(): void {
		$styles = $this->render_editor_styles( 'full-width', '60;} body { display: none' );

		$this->assertStringContainsString( 'max-width: 60%;', $styles );
		$this->assertStringNotContainsString( 'display: none', $styles );
	}
}
