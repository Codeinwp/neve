<?php
/**
 * Tests for the post meta author avatar.
 *
 * The avatar used to be fetched by the author email. Avatar plugins that resolve
 * the user only from an ID got a plain string and fell back to another user, so
 * authors without a photo showed the admin avatar.
 *
 * @package neve
 */

/**
 * Class TestNeveAuthorAvatar
 */
class TestNeveAuthorAvatar extends WP_UnitTestCase {

	/**
	 * Logged in admin viewing the site.
	 *
	 * @var int
	 */
	private $admin_id;

	/**
	 * Show the avatar in the author meta and log in as an admin.
	 */
	public function setUp(): void {
		parent::setUp();
		add_filter( 'neve_display_author_avatar', '__return_true', 99 );

		$this->admin_id = self::factory()->user->create(
			array(
				'role'       => 'administrator',
				'user_email' => 'site-admin@example.com',
			)
		);
		wp_set_current_user( $this->admin_id );
	}

	/**
	 * Remove the test filters.
	 */
	public function tearDown(): void {
		remove_filter( 'neve_display_author_avatar', '__return_true', 99 );
		remove_all_filters( 'pre_get_avatar_data' );
		wp_set_current_user( 0 );
		parent::tearDown();
	}

	/**
	 * Avatar filters get the post author ID, not the email or the current user.
	 */
	public function test_avatar_uses_post_author_id() {
		$author_id = self::factory()->user->create(
			array(
				'role'       => 'author',
				'user_email' => 'no-photo-author@example.com',
			)
		);
		$post_id   = self::factory()->post->create( array( 'post_author' => $author_id ) );

		$received = null;
		add_filter(
			'pre_get_avatar_data',
			function ( $args, $id_or_email ) use ( &$received ) {
				$received = $id_or_email;
				// Like avatar plugins that only know how to resolve a user ID.
				$user_id     = is_numeric( $id_or_email ) ? (int) $id_or_email : get_current_user_id();
				$args['url'] = 'https://example.com/avatar-' . $user_id . '.png';

				return $args;
			},
			10,
			2
		);

		$markup = \Neve\Views\Partials\Post_Meta::neve_get_author_meta( $post_id );

		$this->assertSame( $author_id, $received );
		$this->assertStringContainsString( 'avatar-' . $author_id . '.png', $markup );
		$this->assertStringNotContainsString( 'avatar-' . $this->admin_id . '.png', $markup );
	}

	/**
	 * Without avatar plugins the author still gets their own Gravatar.
	 */
	public function test_avatar_matches_author_gravatar() {
		$author_id = self::factory()->user->create(
			array(
				'role'       => 'author',
				'user_email' => 'gravatar-author@example.com',
			)
		);
		$post_id   = self::factory()->post->create( array( 'post_author' => $author_id ) );

		$markup = \Neve\Views\Partials\Post_Meta::neve_get_author_meta( $post_id );

		preg_match( '#/avatar/([a-f0-9]+)#', get_avatar_url( 'gravatar-author@example.com' ), $author_hash );
		preg_match( '#/avatar/([a-f0-9]+)#', get_avatar_url( 'site-admin@example.com' ), $admin_hash );

		$this->assertStringContainsString( $author_hash[1], $markup );
		$this->assertStringNotContainsString( $admin_hash[1], $markup );
	}
}
