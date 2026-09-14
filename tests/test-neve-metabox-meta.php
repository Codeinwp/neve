<?php
/**
 * Tests for the block editor sidebar meta save flow.
 *
 * @package neve
 */

/**
 * Class TestNeveMetaboxMeta
 */
class TestNeveMetaboxMeta extends WP_UnitTestCase {

	/**
	 * Page used in the save flow.
	 *
	 * @var int
	 */
	private $page_id;

	/**
	 * REST server in place before the test replaced it.
	 *
	 * @var WP_REST_Server|null
	 */
	private $previous_rest_server;

	/**
	 * Setup.
	 */
	public function setUp(): void {
		parent::setUp();

		global $wp_rest_server;

		require_once ABSPATH . 'wp-admin/includes/post.php';

		$this->previous_rest_server = $wp_rest_server;

		// The test case unregisters every meta key on teardown.
		$manager = new \Neve\Admin\Metabox\Manager();
		$manager->neve_register_meta();

		$wp_rest_server = new WP_REST_Server();
		do_action( 'rest_api_init', $wp_rest_server );

		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );

		$this->page_id = self::factory()->post->create(
			array(
				'post_type'   => 'page',
				'post_title'  => 'Neve meta page',
				'post_status' => 'publish',
			)
		);

		$_POST = array();
	}

	/**
	 * Teardown.
	 */
	public function tearDown(): void {
		global $wp_rest_server;

		$wp_rest_server = $this->previous_rest_server;
		$_POST          = array();

		parent::tearDown();
	}

	/**
	 * Save the sidebar meta the way the editor sidebar does, over the REST API.
	 *
	 * @param string $value the value to save.
	 *
	 * @return WP_REST_Response
	 */
	private function rest_save_sidebar_meta( $value ) {
		$request = new WP_REST_Request( 'POST', '/wp/v2/pages/' . $this->page_id );
		$request->set_body_params( array( 'meta' => array( 'neve_meta_sidebar' => $value ) ) );

		return rest_get_server()->dispatch( $request );
	}

	/**
	 * Submit the meta box form the way post.php does when the editor saves meta boxes.
	 *
	 * @param array $meta meta id => [ key, value ] pairs, as rendered by the Custom Fields box.
	 */
	private function submit_meta_boxes( $meta ) {
		$_POST = array(
			'post_ID'     => $this->page_id,
			'post_type'   => 'page',
			'post_title'  => 'Neve meta page',
			'post_status' => 'publish',
			'meta'        => $meta,
		);

		edit_post();

		$_POST = array();
	}

	/**
	 * The value picked in the Neve sidebar is saved over REST.
	 */
	public function test_sidebar_meta_is_saved_over_rest() {
		$response = $this->rest_save_sidebar_meta( 'full-width' );

		$this->assertEquals( 200, $response->get_status() );
		$this->assertEquals( 'full-width', get_post_meta( $this->page_id, 'neve_meta_sidebar', true ) );
	}

	/**
	 * With the Custom Fields panel on, the meta box form is submitted right after the REST save.
	 *
	 * It carries the key/value pairs rendered when the editor was loaded, so the stale value
	 * must not be written back over the one just saved from the sidebar.
	 */
	public function test_custom_fields_submit_does_not_revert_sidebar_meta() {
		update_post_meta( $this->page_id, 'neve_meta_sidebar', 'default' );

		$meta_id = $this->get_meta_id( 'neve_meta_sidebar' );

		$this->rest_save_sidebar_meta( 'full-width' );
		$this->assertEquals( 'full-width', get_post_meta( $this->page_id, 'neve_meta_sidebar', true ) );

		// The Custom Fields box submits the value loaded with the page.
		$this->submit_meta_boxes(
			array(
				$meta_id => array(
					'key'   => 'neve_meta_sidebar',
					'value' => 'default',
				),
			)
		);

		$this->assertEquals( 'full-width', get_post_meta( $this->page_id, 'neve_meta_sidebar', true ) );
	}

	/**
	 * Meta that is not ours still goes through the Custom Fields panel.
	 */
	public function test_custom_fields_submit_still_updates_other_meta() {
		update_post_meta( $this->page_id, 'some_other_key', 'first' );

		$this->submit_meta_boxes(
			array(
				$this->get_meta_id( 'some_other_key' ) => array(
					'key'   => 'some_other_key',
					'value' => 'second',
				),
			)
		);

		$this->assertEquals( 'second', get_post_meta( $this->page_id, 'some_other_key', true ) );
	}

	/**
	 * Get the meta id for a key on the test page.
	 *
	 * @param string $key the meta key.
	 *
	 * @return int
	 */
	private function get_meta_id( $key ) {
		global $wpdb;

		return (int) $wpdb->get_var(
			$wpdb->prepare( "SELECT meta_id FROM $wpdb->postmeta WHERE post_id = %d AND meta_key = %s", $this->page_id, $key )
		);
	}
}
