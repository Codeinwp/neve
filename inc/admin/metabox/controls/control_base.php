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
	 * Render control label.
	 *
	 * @return string
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
	 * Get the value.
	 *
	 * @return mixed
	 */
	protected final function get_value( $post_id ) {
		$values = get_post_meta( $post_id );

		return isset( $values[ $this->id ] ) ? esc_attr( $values[ $this->id ][0] ) : $this->settings['default'];
	}

	/**
	 * Save control data.
	 *
	 * @param string $post_id Post id.
	 *
	 * @return void
	 */
	public final function save( $post_id ) {
		if ( ! isset( $_POST['neve_meta_box_process'] ) ) {
			return;
		}

		if ( ! wp_verify_nonce( $_POST['neve_meta_box_process'], 'neve_meta_box_nonce' ) ) {
			return;
		}

		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( ! current_user_can( 'edit_posts' ) ) {
			return;
		}
		if ( isset( $_POST[ $this->id ] ) ) {
			$value = wp_unslash( $_POST[ $this->id ] );
			if ( $value === $this->settings['default'] ) {
				delete_post_meta( $post_id, $this->id );

				return;
			}

			update_post_meta( $post_id, $this->id, $this->sanitize_value( $value ) );

			return;
		}
		delete_post_meta( $post_id, $this->id );

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
				break;
			case 'checkbox':
				$allowed_values = array( 'on', 'off' );
				if ( ! in_array( $value, $allowed_values ) ) {
					return esc_html( $this->settings['default'] );
				}

				return sanitize_text_field( $value );
				break;
			case 'range':
				return absint( $value );
				break;
			case 'separator':
			default:
				break;
		}
	}
}
