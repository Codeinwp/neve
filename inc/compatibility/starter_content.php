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
	const HOME_SLUG     = 'home';
	const BLOG_SLUG     = 'blog';
	const ABOUT_SLUG    = 'about';
	const CONTACT       = 'contact';
	const SERVICES_SLUG = 'services';
	const WORK_SLUG     = 'work';


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
			99,
			3
		); // starter content does not provide means of adding post meta so we need to tweak it.

		// Site-wide side effects (custom CSS, permalinks) must only run when the
		// starter content is actually published, never on the customize.php preview
		// (core stages the auto-drafts on mere customizer open).
		add_action( 'customize_save_after', [ $this, 'after_publish' ], 100 );

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
		$handled = array(
			'neve_meta_disable_title'        => 'on',
			'neve_meta_container'            => 'full-width',
			'neve_meta_enable_content_width' => 'on',
			'neve_meta_content_width'        => '100',
		);

		// Bail for every other key. This also prevents recursion: the draft-slug read
		// below re-enters this filter with the '_customize_draft_post_name' key.
		if ( ! isset( $handled[ $meta_key ] ) ) {
			return $value;
		}

		if ( get_post_type( $post_id ) !== 'page' ) {
			return $value;
		}

		// Only style our own starter drafts: the slug lives in the draft meta, and pages a
		// user creates in the Customizer (or pre-existing ones) must not inherit these.
		$draft_slug = get_post_meta( $post_id, '_customize_draft_post_name', true );

		if ( ! $this->is_starter_page_slug( $draft_slug ) || self::BLOG_SLUG === $draft_slug ) {
			return $value;
		}

		return $handled[ $meta_key ];
	}

	/**
	 * Whether a draft slug belongs to one of our starter pages.
	 *
	 * @param mixed $slug Candidate slug.
	 *
	 * @return bool
	 */
	private function is_starter_page_slug( $slug ) {
		return in_array(
			$slug,
			[ self::HOME_SLUG, self::BLOG_SLUG, self::ABOUT_SLUG, self::CONTACT, self::SERVICES_SLUG, self::WORK_SLUG ],
			true
		);
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
		$draft_slug = get_post_meta( $post_ID, '_customize_draft_post_name', true );
		// Only touch our own starter drafts — pages a user adds inside the Customizer
		// carry the same draft meta and must be left alone.
		if ( ! $this->is_starter_page_slug( $draft_slug ) ) {
			return;
		}
		if ( $post->post_type === 'page' ) {
			update_post_meta( $post_ID, 'neve_meta_disable_title', 'on' );
			update_post_meta( $post_ID, 'neve_meta_enable_content_width', 'on' );
			update_post_meta( $post_ID, 'neve_meta_content_width', '100' );
			// Full-bleed sections need a full-width page container (blog stays the contained posts list).
			if ( $draft_slug !== self::BLOG_SLUG ) {
				update_post_meta( $post_ID, 'neve_meta_container', 'full-width' );
			}
		}
	}

	/**
	 * Run the one-time site setup after the starter content is actually published.
	 *
	 * Hooked on customize_save_after: the post metas above attach to auto-drafts (garbage
	 * collected if the changeset is abandoned), but custom CSS and permalinks are live,
	 * site-wide state and may only change once the user commits the starter content.
	 *
	 * @return void
	 */
	public function after_publish() {
		if ( ! $this->get_published_starter_page( self::HOME_SLUG ) ) {
			return;
		}
		$this->apply_starter_custom_css();
		$this->maybe_enable_pretty_permalinks();
	}

	/**
	 * Fetch a published starter page by slug.
	 *
	 * @param string $slug Page slug.
	 *
	 * @return \WP_Post|null
	 */
	private function get_published_starter_page( $slug ) {
		$pages = get_posts(
			array(
				'post_type'   => 'page',
				'name'        => $slug,
				'post_status' => 'publish',
				'numberposts' => 1,
			)
		);

		return empty( $pages ) ? null : $pages[0];
	}

	/**
	 * Allow the inline SVG icons used by the starter pages through KSES.
	 *
	 * Registered unconditionally (see Front_End::setup_theme): the imported pages keep
	 * their inline icons for the life of the site, so a later edit by a user without
	 * unfiltered_html (multisite admins, editors) must not strip them and invalidate the
	 * blocks. Shape elements and presentation attributes only — no scripts, hrefs, or
	 * event handlers. Existing entries from other plugins are merged, not replaced.
	 *
	 * @param array<string, mixed> $tags Allowed tags.
	 * @param string               $context KSES context.
	 *
	 * @return array<string, mixed>
	 */
	public static function allow_starter_svg( $tags, $context ) {
		if ( 'post' !== $context ) {
			return $tags;
		}

		$presentation = array(
			'fill'            => true,
			'stroke'          => true,
			'stroke-width'    => true,
			'stroke-linecap'  => true,
			'stroke-linejoin' => true,
		);

		$allow = array(
			'svg'    => array_merge(
				$presentation,
				array(
					'width'       => true,
					'height'      => true,
					'viewbox'     => true,
					'xmlns'       => true,
					'aria-hidden' => true,
					'focusable'   => true,
				)
			),
			'path'   => array_merge( $presentation, array( 'd' => true ) ),
			'circle' => array_merge(
				$presentation,
				array(
					'cx' => true,
					'cy' => true,
					'r'  => true,
				)
			),
			'rect'   => array_merge(
				$presentation,
				array(
					'x'      => true,
					'y'      => true,
					'width'  => true,
					'height' => true,
					'rx'     => true,
				)
			),
		);

		foreach ( $allow as $tag => $attributes ) {
			$existing     = isset( $tags[ $tag ] ) && is_array( $tags[ $tag ] ) ? $tags[ $tag ] : array();
			$tags[ $tag ] = array_merge( $existing, $attributes );
		}

		return $tags;
	}

	/**
	 * Enable pretty permalinks on import when the server supports them.
	 *
	 * The starter pages cross-link via path URLs (/work/, /contact/, ...), which 404
	 * under plain permalinks. Mirrors the core installer behavior: only act when no
	 * structure is set and URL rewriting is available.
	 *
	 * @return void
	 */
	private function maybe_enable_pretty_permalinks() {
		if ( get_option( 'permalink_structure' ) ) {
			return;
		}
		if ( ! function_exists( 'got_url_rewrite' ) ) {
			require_once ABSPATH . 'wp-admin/includes/misc.php';
		}
		if ( ! got_url_rewrite() ) {
			return;
		}
		global $wp_rewrite;
		if ( ! $wp_rewrite instanceof \WP_Rewrite ) {
			return;
		}
		$wp_rewrite->set_permalink_structure( '/%postname%/' );
		// Lazy flush: rules regenerate on the next request (flush_rewrite_rules is plugin territory).
		update_option( 'rewrite_rules', '' );

		// Verify a pretty URL actually resolves, like the core installer does. A definitive
		// 404 (e.g. Apache without .htaccess rules) reverts; loopback errors are inconclusive.
		$probe = $this->get_published_starter_page( self::ABOUT_SLUG );
		if ( null === $probe ) {
			return;
		}
		$response = wp_remote_head( get_permalink( $probe ), array( 'timeout' => 3 ) );
		if ( is_wp_error( $response ) ) {
			return;
		}
		$code = (int) wp_remote_retrieve_response_code( $response );
		if ( $code >= 400 ) {
			$wp_rewrite->set_permalink_structure( '' );
			update_option( 'rewrite_rules', '' );
		}
	}

	/**
	 * Apply the starter content polish layer as core custom CSS.
	 *
	 * Scoped under .folio-* classes, so it only affects the starter pages.
	 *
	 * @return void
	 */
	private function apply_starter_custom_css() {
		if ( ! function_exists( 'wp_update_custom_css_post' ) || ! function_exists( 'wp_get_custom_css' ) ) {
			return;
		}
		$css = require __DIR__ . '/starter-content/custom-css.php';
		if ( empty( $css ) ) {
			return;
		}
		$existing = (string) wp_get_custom_css();
		// Idempotent and non-destructive: append once, never overwrite the user's own Additional CSS.
		if ( false !== strpos( $existing, 'folio-hero-media' ) ) {
			return;
		}
		$combined = '' === trim( $existing ) ? $css : $existing . "\n\n" . $css;
		wp_update_custom_css_post( $combined );
	}

	/**
	 * Return starter content definition.
	 *
	 * @return mixed|void
	 */
	public function get() {

		$nav_items = [
			'home'          => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::HOME_SLUG . '}}',
				'title'     => _x( 'Home', 'Theme starter content', 'neve' ),
			],
			'page_about'    => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::ABOUT_SLUG . '}}',
				'title'     => _x( 'About', 'Theme starter content', 'neve' ),
			],
			'page_services' => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::SERVICES_SLUG . '}}',
				// Intentionally untranslated demo labels so the renamed pages add no new POT strings.
				'title'     => 'Services',
			],
			'page_work'     => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::WORK_SLUG . '}}',
				'title'     => 'Work',
			],
			'page_blog'     => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::BLOG_SLUG . '}}',
				'title'     => _x( 'Blog', 'Theme starter content', 'neve' ),
			],
			'page_contact'  => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::CONTACT . '}}',
				'title'     => _x( 'Contact', 'Theme starter content', 'neve' ),
			],
		];

		$footer_nav_items = [
			'home'         => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::HOME_SLUG . '}}',
			],
			'page_blog'    => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::BLOG_SLUG . '}}',
			],
			'page_work'    => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::WORK_SLUG . '}}',
			],
			'page_about'   => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::ABOUT_SLUG . '}}',
			],
			'page_contact' => [
				'type'      => 'post_type',
				'object'    => 'page',
				'object_id' => '{{' . self::CONTACT . '}}',
			],
		];

		$content = [
			'nav_menus'  =>
				[
					'primary' => [
						'items' => $nav_items,
					],
					'footer'  => [
						'items' => $footer_nav_items,
					],
				],
			'options'    => [
				'page_on_front'  => '{{' . self::HOME_SLUG . '}}',
				'page_for_posts' => '{{' . self::BLOG_SLUG . '}}',
				'show_on_front'  => 'page',
				'blogname'       => 'Folio',
			],
			'theme_mods' => require __DIR__ . '/starter-content/theme-mods.php',
			'posts'      => [
				self::HOME_SLUG     => require __DIR__ . '/starter-content/home.php',
				self::ABOUT_SLUG    => require __DIR__ . '/starter-content/about.php',
				self::SERVICES_SLUG => require __DIR__ . '/starter-content/services.php',
				self::WORK_SLUG     => require __DIR__ . '/starter-content/work.php',
				self::CONTACT       => require __DIR__ . '/starter-content/contact.php',
				self::BLOG_SLUG     => require __DIR__ . '/starter-content/blog.php',
			],
		];

		return apply_filters( 'neve_starter_content', $content );
	}
}
