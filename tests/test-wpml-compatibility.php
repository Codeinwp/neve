<?php
/**
 * Description Test WPML compatibility
 *
 * Author:      Bogdan Preda <bogdan.preda@themeisle.com>
 * Created on:  17-03-{2023}
 *
 * @package neve
 */

/**
 * Class TestNeveWpDebug
 */
class TestWPMLCompatibility extends WP_UnitTestCase {

	public function setUp(): void {
		parent::setUp();
		// We create 2 mock posts to use in the tests.
		$this->factory->post->create_many( 2 );
	}

	public function test_wpml_compatibility_featured_post() {
		$neve_wpml = new \Neve\Compatibility\WPML();
		$this->assertEquals( 'Neve\Compatibility\WPML', get_class( $neve_wpml ), 'Incorrect class type' );
		$this->assertTrue( false === $neve_wpml->init(), 'WPML compatibility should not load load' );

		define( 'WPML_PLUGIN_PATH', '_test_path_to_wpml_' );
		$this->assertTrue( $neve_wpml->init(), 'WPML compatibility should load' );

		$posts = wp_get_recent_posts(
			array(
				'numberposts' => 2,
				'post_status' => 'publish',
			)
		);
		$filtered_posts = apply_filters( 'neve_filter_featured_posts', $posts );
		$containsAllValues = ! array_diff( array_column( $posts, 'ID' ), $filtered_posts );
		$this->assertTrue( count( $filtered_posts ) === count( array_filter( $filtered_posts, 'is_numeric' ) ), 'The filtered array values are numeric. The returned array is of post IDs' );
		$this->assertTrue( $containsAllValues, 'WPML compatibility should not filter posts' );

		$original_post_id = $posts[0]['ID'];
		add_filter( 'wpml_object_id', function( $post_id, $post_type, $return_original_if_missing, $current_language ) use ( $original_post_id ) {
			return $original_post_id;
		}, 10, 4 );

		$filtered_posts = apply_filters( 'neve_filter_featured_posts', $posts );
		$this->assertEquals( $original_post_id, reset($filtered_posts ), 'WPML compatibility should filter posts' );
	}
}
