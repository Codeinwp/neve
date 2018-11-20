<?php
/**
 * Page settings metabox.
 *
 * @package Neve
 */

namespace Neve\Admin\Metabox;

/**
 * Class Metabox
 *
 * @package Neve\Admin\Metabox
 */

namespace Neve\Admin\Metabox;

/**
 * Class Metabox_Base
 *
 * @package Neve\Admin\Metabox
 */
abstract class Metabox_Base {

	/**
	 * Controls.
	 *
	 * @var array
	 */
	public $controls = array();

	/**
	 * Init function
	 */
	public function init() {
		add_action( 'add_meta_boxes', array( $this, 'add' ) );
		add_action( 'save_post', array( $this, 'save' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
		$this->add_controls();
	}

	/**
	 * Add controls.
	 */
	abstract protected function add_controls();

	/**
	 * Add the control.
	 *
	 * @param Controls\Control_Base $control the control object.
	 */
	public function add_control( $control ) {
		array_push( $this->controls, $control );
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
		global $post;

		foreach ( $this->controls as $control ) {
			$control->render( $post->ID );
		}
	}

	/**
	 * Save metabox content.
	 */
	public function save( $post_id ) {
		foreach ( $this->controls as $control ) {
			$control->save( $post_id );
		}
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
