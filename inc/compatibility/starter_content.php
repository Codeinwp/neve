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
	const HOME_SLUG       = 'home';
	const BLOG_SLUG       = 'blog';
	const ABOUT_SLUG      = 'about';
	const CONTACT         = 'contact';
	const PORTOFOLIO_SLUG = 'portofolio';
	const PROJECT_DETAILS = 'project-details';


	/**
	 * Run the hooks and filters.
	 */
	public function __construct() {
		$is_fresh_site = get_option( 'fresh_site' );
		if ( ! $is_fresh_site ) {
			return;
		}

		add_action(
			'wp_insert_post',
			[
				$this,
				'register_listener',
			],
			3,
			99
		); // starter content does not provide means of adding post meta so we need to tweak it.

		if ( ! is_customize_preview() ) {
			return;
		}
		add_filter(
			'default_post_metadata',
			[ $this, 'starter_meta' ],
			99,
			3
		);

	}

	/**
	 * Load default starter meta.
	 *
	 * @param mixed  $value Value.
	 * @param int    $post_id Post id.
	 * @param string $meta_key Meta key.
	 *
	 * @return string Meta value.
	 */
	public function starter_meta( $value, $post_id, $meta_key ) {
		if ( get_post_type( $post_id ) !== 'page' ) {
			return $value;
		}
		if ( $meta_key === 'neve_meta_disable_title' ) {
			return 'on';
		}
		if ( $meta_key === 'neve_meta_enable_content_width' ) {
			return 'on';
		}
		if ( $meta_key === 'neve_meta_content_width' ) {
			return '100';
		}

		return $value;
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
			'home'                 => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::HOME_SLUG . '}}',
			],
			'page_about'           => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::ABOUT_SLUG . '}}',
			],
			'page_portofolio'      => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::PORTOFOLIO_SLUG . '}}',
			],
			'page_project_details' => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::PROJECT_DETAILS . '}}',
			],
			'page_blog'            => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::BLOG_SLUG . '}}',
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
				'page_on_front'  => '{{' . self::HOME_SLUG . '}}',
				'page_for_posts' => '{{' . self::BLOG_SLUG . '}}',
				'show_on_front'  => 'page',
				'blogname'       => 'Web Agency Demo 1',
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
				self::HOME_SLUG       => require __DIR__ . '/starter-content/home.php',
				self::ABOUT_SLUG      => require __DIR__ . '/starter-content/about.php',
				self::CONTACT         => require __DIR__ . '/starter-content/contact.php',
				self::PORTOFOLIO_SLUG => require __DIR__ . '/starter-content/portofolio.php',
				self::PROJECT_DETAILS => require __DIR__ . '/starter-content/project-details.php',
				self::BLOG_SLUG       => [
					'post_name'  => self::BLOG_SLUG,
					'post_type'  => 'page',
					'post_title' => _x( 'Blog', 'Theme starter content' ),
				],
			],
		];


		return apply_filters( 'neve_starter_content', $content );
	}
}
