<?php
/**
 * Page settings metabox.
 *
 * @package Neve
 */

namespace Neve\Admin\Metabox;

/**
 * Class Manager
 *
 * @package Neve\Admin\Metabox
 */
class Manager {

	/**
	 * Init function
	 */
	public function init() {
		add_action( 'add_meta_boxes', array( $this, 'add' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
	}

	/**
	 * Register meta box to control layout on pages and posts.
	 */
	public function add() {

		if ( $this->should_add_meta() === false ) {
			return;
		}

		add_meta_box(
			'neve-page-settings',
			__( 'Neve Settings', 'neve' ),
			array( $this, 'render_metabox' ),
			array( 'post', 'page', 'product' ),
			'side'
		);
	}

	/**
	 * The metabox content.
	 */
	public function render_metabox() {
		do_action( 'neve_settings_render_metabox_controls' );
	}

	/**
	 * Decide if the metabox should be visible.
	 *
	 * @return bool
	 */
	public function should_add_meta() {
		global $post;

		if ( empty( $post ) ) {
			return false;
		}

		$restricted_pages_id = array();
		if ( in_array( $post->ID, $restricted_pages_id ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Enqueue scripts and styles.
	 */
	public function enqueue() {

		$screen = get_current_screen();

		if ( ! is_object( $screen ) ) {
			return;
		}
		if ( $screen->base !== 'post' ) {
			return;
		}

		wp_register_script( 'neve-metabox', NEVE_ASSETS_URL . 'js/metabox' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.js', array( 'jquery' ), NEVE_VERSION, true );

		wp_localize_script( 'neve-metabox', 'neveMetabox', $this->get_localization() );

		wp_enqueue_script( 'neve-metabox' );
	}

	/**
	 * Localize the Metabox script.
	 *
	 * @return array
	 */
	private function get_localization() {
		return array();
	}
}
