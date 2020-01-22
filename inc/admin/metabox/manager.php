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
final class Manager {

	/**
	 * Control instances.
	 *
	 * @var array
	 */
	private $controls = array();

	/**
	 * Control classes to get controls from.
	 *
	 * @var array
	 */
	private $control_classes;

	/**
	 * Init function
	 */
	public function init() {
		add_action( 'add_meta_boxes', array( $this, 'add' ) );
		add_action( 'admin_init', array( $this, 'define_controls' ) );
		add_action( 'admin_init', array( $this, 'load_controls' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
		add_action( 'save_post', array( $this, 'save' ) );
	}

	/**
	 * Define the controls.
	 */
	public function define_controls() {
		$this->control_classes = array(
			'Neve\\Admin\\Metabox\\Main',
		);

		$this->control_classes = apply_filters( 'neve_filter_metabox_controls', $this->control_classes );
	}

	/**
	 * Instantiate the controls and actually load them into the control manager.
	 */
	public function load_controls() {
		if ( empty( $this->control_classes ) ) {
			return;
		}
		foreach ( $this->control_classes as $control_manager ) {
			$control_instance = new $control_manager();
			if ( ! $control_instance instanceof Controls_Base ) {
				continue;
			}

			$control_instance->init();

			$this->controls = array_merge( $this->controls, $control_instance->get_controls() );
		}
		$this->order_by_priority();
	}

	/**
	 * The metabox content.
	 */
	public function render_controls() {
		global $post;

		foreach ( $this->controls as $control ) {
			$control->render( $post->ID );
		}
	}

	/**
	 * Save metabox content.
	 *
	 * @param int $post_id the post id.
	 */
	public function save( $post_id ) {
		foreach ( $this->controls as $control ) {
			$control->save( $post_id );
		}
	}

	/**
	 * Register meta box to control layout on pages and posts.
	 */
	public function add() {
		if ( $this->should_add_meta() === false ) {
			return;
		}

		$post_type         = 'Neve';
		$post_type_from_db = get_post_type();
		if ( $post_type_from_db ) {
			$post_type = ucfirst( $post_type_from_db );
		}

		add_meta_box(
			'neve-page-settings',
			sprintf(
				/* translators: %s - post type */
				__( '%s Settings', 'neve' ),
				$post_type
			),
			array( $this, 'render_metabox' ),
			array( 'post', 'page', 'product' ),
			'side'
		);
	}

	/**
	 * The metabox content.
	 */
	public function render_metabox() {
		$this->render_controls();
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
		if ( in_array( $post->ID, $restricted_pages_id, true ) ) {
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

		wp_register_script( 'neve-metabox', NEVE_ASSETS_URL . 'js/build/all/metabox.js', array( 'jquery' ), NEVE_VERSION, true );

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

	/**
	 * Order the controls by given priority.
	 */
	private function order_by_priority() {
		$order = array();

		foreach ( $this->controls as $key => $control_object ) {
			$order[ $key ] = $control_object->priority;
		}
		array_multisort( $order, SORT_ASC, $this->controls );
	}

}
