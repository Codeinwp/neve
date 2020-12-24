<?php
/**
 * Starter Content Compatibility.
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class Starter_Content
 *
 * @package Neve\Compatibility
 */
class Starter_Content {

	/**
	 * Run the hooks and filters.
	 */
	public function __construct() {
		add_action(
			'wp_insert_post',
			[
				$this,
				'register_listener',
			],
			3,
			99
		); // starter content does not provide means of adding post meta so we need to tweak it.
	}

	/**
	 * Register listener to insert post.
	 *
	 * @param int      $post_ID Post Id.
	 * @param \WP_Post $post Post object.
	 * @param bool     $update Is update.
	 */
	public function register_listener( $post_ID, $post, $update ) {
		if ( $update ) {
			return;
		}
		$is_from_starter_content = ! empty( get_post_meta( $post_ID, '_customize_draft_post_name', true ) );
		if ( ! $is_from_starter_content ) {
			return;
		}
		if ( $post->post_type === 'page' ) {
			update_post_meta( $post_ID, 'neve_meta_disable_title', 'on' );
			update_post_meta( $post_ID, 'neve_meta_enable_content_width', 'on' );
			update_post_meta( $post_ID, 'neve_meta_content_width', '100' );
		}
	}

	/**
	 * Return starter content definition.
	 *
	 * @return mixed|void
	 */
	public function get() {

		$nav_items = [
			'home'       => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{home}}',
			],
			'page_about' => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{about}}',
			],
			'page_blog'  => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{blog}}',
			],
		];

		$content = [
			'nav_menus'   =>
				[
					'primary' => [
						'items' => $nav_items,
					],
				],
			'options'     => [
				'page_on_front'  => '{{home}}',
				'page_for_posts' => '{{blog}}',
				'show_on_front'  => 'page',
				'blogname'       => 'Agency',
			],
			'theme_mods'  => require __DIR__ . '/starter-content/theme-mods.php',
			'attachments' => array(
				'featured-image-logo' => array(
					'post_title'   => 'Featured Logo',
					'post_content' => 'Attachment Description',
					'post_excerpt' => 'Attachment Caption',
					'file'         => 'assets/img/starter-content/logo-agency.png',
				),
			),
			'posts'       => [
				'home'  => require __DIR__ . '/starter-content/home.php',
				'about' => require __DIR__ . '/starter-content/about.php',
				'blog'  => [
					'post_type'  => 'page',
					'post_title' => _x( 'Blog', 'Theme starter content' ),
				],
			],
		];


		return apply_filters( 'neve_starter_content', $content );
	}
}
