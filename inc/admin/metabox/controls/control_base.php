<?php
/**
 * Abstract class to be used as base for metabox controls.
 *
 * @package Neve\Admin\Metabox\Controls
 */

namespace Neve\Admin\Metabox\Controls;

/**
 * Class Control_Base
 *
 * @package Neve\Admin\Metabox\Controls
 */
abstract class Control_Base {

	/**
	 * Control id.
	 *
	 * @var string
	 */
	public $id = '';

	/**
	 * Control settings.
	 *
	 * @var array
	 */
	public $settings = array();

	/**
	 * Control type [MUST BE DEFINED]
	 *
	 * @var string
	 */
	public $type = '';

	/**
	 * Control Priority
	 *
	 * @var int
	 */
	public $priority = 10;

	/**
	 * Control_Base constructor.
	 *
	 * @param string $id       control id.
	 * @param array  $settings control settings.
	 */
	public function __construct( $id, $settings ) {
		if ( empty( $this->type ) ) {
			return;
		}
		$this->id       = $id;
		$this->settings = $settings;
		if ( isset( $settings['priority'] ) ) {
			$this->priority = $settings['priority'];
		}
	}

	/**
	 * Render function for the control.
	 */
	public function render( $post_id ) {
		if ( empty( $this->type ) ) {
			return;
		}
		if ( ! $this->should_render() ) {
			return;
		}

		$this->render_label();
		$this->render_content( $post_id );
		wp_nonce_field( 'neve_meta_box_nonce', 'neve_meta_box_process' );
	}

	/**
	 * Determine if a control should be visible or not.
	 *
	 * @return bool
	 */
	private function should_render() {
		if ( ! array_key_exists( 'active_callback', $this->settings ) ) {
			return true;
		}

		if ( empty( $this->settings['active_callback'] ) ) {
			return true;
		}

		$object = $this->settings['active_callback'][0];
		$method = $this->settings['active_callback'][1];
		if ( method_exists( $object, $method ) ) {
			return $object->$method();
		}

		return true;
	}

	/**
	 * Render control label.
	 *
	 * @return void
	 */
	protected function render_label() {
		$label = array_key_exists( 'label', $this->settings ) ? $this->settings['label'] : '';

		if ( empty( $label ) ) {
			return;
		}

		$control_label = '';

		$control_label .= '<p class="post-attributes-label-wrapper">';
		$control_label .= '<span class="post-attributes-label">' . esc_html( $label ) . '</span>';
		$control_label .= '</p>';

		echo wp_kses_post( $control_label );
	}

	/**
	 * Render control.
	 *
	 * @return void
	 */
	abstract public function render_content( $post_id );

	/**
	 * Save control data.
	 *
	 * @param int $post_id Post id.
	 *
	 * @return void
	 */
	final public function save( $post_id ) {
		if ( ! isset( $_POST['neve_meta_box_process'] ) ) {
			return;
		}
		if ( ! wp_verify_nonce( sanitize_key( $_POST['neve_meta_box_process'] ), 'neve_meta_box_nonce' ) ) {
			return;
		}
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( ! current_user_can( 'edit_posts' ) ) {
			return;
		}
		if ( isset( $_POST[ $this->id ] ) ) {
			$value = $this->sanitize_value( wp_unslash( $_POST[ $this->id ] ) ); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
			// Remove post meta on default.
			if ( $value === $this->settings['default'] && $this->id !== 'neve_meta_content_width' ) {
				delete_post_meta( $post_id, $this->id );

				return;
			}
			// Update post meta on other values.
			update_post_meta( $post_id, $this->id, $value );

			return;
		} else {
			if ( $this->id === 'neve_meta_enable_content_width' ) {
				update_post_meta( $post_id, 'neve_meta_enable_content_width', 'off' );
			} else {
				delete_post_meta( $post_id, $this->id );
			}
			return;
		}
	}

	/**
	 * Sanitize the value.
	 *
	 * @param int|string $value the value to sanitize.
	 *
	 * @return int|string
	 */
	protected function sanitize_value( $value ) {
		switch ( $this->type ) {
			case 'radio':
				$allowed_values = $this->settings['choices'];
				if ( ! array_key_exists( $value, $allowed_values ) ) {
					return esc_html( $this->settings['default'] );
				}

				return sanitize_text_field( $value );
			case 'checkbox':
				$allowed_values = array( 'on', 'off' );
				if ( ! in_array( $value, $allowed_values, true ) ) {
					return esc_html( $this->settings['default'] );
				}

				return sanitize_text_field( $value );
			case 'range':
				return absint( $value );
			case 'input':
				return sanitize_text_field( $value );
			case 'separator':
			default:
				break;
		}

		return sanitize_text_field( $value );
	}

	/**
	 * Get the value.
	 *
	 * @param int $post_id the post id.
	 *
	 * @return mixed
	 */
	final protected function get_value( $post_id ) {
		$value = get_post_meta( $post_id, $this->id, true );

		return ! empty( $value ) ? $value : $this->settings['default'];
	}
}
