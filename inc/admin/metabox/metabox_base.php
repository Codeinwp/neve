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

		if ( ! $this->is_allowed_template( $post->ID ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Detect if is a page with sidebar template
	 *
	 * @param string $post_id Post id.
	 *
	 * @return bool
	 */
	protected function is_allowed_template( $post_id ) {

		$allowed = array(
			'default',
		);

		$page_template = get_post_meta( $post_id, '_wp_page_template', true );
		if ( empty( $page_template ) ) {
			return true;
		}

		return in_array( $page_template, $allowed );
	}
}
