<?php
/**
 * Base class for all Neve abilities.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

use WP_Error;

/**
 * Class Abstract_Ability
 *
 * @package Neve\Abilities
 */
abstract class Abstract_Ability {

	/**
	 * Namespace prefix shared by every Neve ability id.
	 */
	const PREFIX = 'neve';

	/**
	 * The ability slug, appended to the prefix (e.g. "site-get-state" for
	 * "neve/site-get-state"). Must match `^[a-z0-9-]+$`.
	 *
	 * @return string
	 */
	abstract protected function get_id();

	/**
	 * Human readable ability label.
	 *
	 * @return string
	 */
	abstract protected function get_label();

	/**
	 * Human readable ability description (used by the agent to pick the tool).
	 *
	 * @return string
	 */
	abstract protected function get_description();

	/**
	 * The JSON Schema describing the ability input.
	 *
	 * @return array<mixed>
	 */
	abstract protected function get_input_schema();

	/**
	 * The JSON Schema describing the ability output.
	 *
	 * @return array<mixed>
	 */
	abstract protected function get_output_schema();

	/**
	 * Run the ability.
	 *
	 * @param array<mixed> $input Validated input matching get_input_schema().
	 * @return array<mixed>|WP_Error
	 */
	abstract protected function run( array $input );

	/**
	 * MCP annotation hints (readonly / destructive / idempotent).
	 *
	 * Only non-null values are forwarded to the Abilities API. Override per
	 * ability to advertise read-only reads and destructive writes.
	 *
	 * @return array<mixed>
	 */
	protected function get_annotations() {
		return array(
			'readonly'    => null,
			'destructive' => null,
			'idempotent'  => null,
		);
	}

	/**
	 * The WordPress capability required to use the ability.
	 *
	 * @return string
	 */
	protected function get_capability() {
		return 'edit_theme_options';
	}

	/**
	 * The MCP primitive type. Everything Neve exposes is a tool.
	 *
	 * @return string
	 */
	protected function get_mcp_type() {
		return 'tool';
	}

	/**
	 * Register the ability with the WordPress Abilities API.
	 *
	 * @return void
	 */
	public function register() {
		if ( ! function_exists( 'wp_register_ability' ) ) {
			return;
		}

		wp_register_ability(
			self::PREFIX . '/' . $this->get_id(),
			array(
				'label'               => $this->get_label(),
				'description'         => $this->get_description(),
				'category'            => self::PREFIX,
				'input_schema'        => $this->get_filtered_input_schema(),
				'output_schema'       => $this->get_output_schema(),
				'execute_callback'    => array( $this, 'execute' ),
				'permission_callback' => array( $this, 'check_permission' ),
				'meta'                => array(
					'show_in_rest' => true,
					'annotations'  => array_filter(
						$this->get_annotations(),
						function ( $value ) {
							return null !== $value;
						}
					),
					'mcp'          => array(
						'public' => true,
						'type'   => $this->get_mcp_type(),
					),
				),
			)
		);
	}

	/**
	 * Permission callback.
	 *
	 * @return bool
	 */
	public function check_permission() {
		return current_user_can( $this->get_capability() );
	}

	/**
	 * Execute callback. Normalizes input and delegates to run().
	 *
	 * @param array<mixed>|null $input The validated input.
	 * @return array<mixed>|WP_Error
	 */
	public function execute( $input = array() ) {
		if ( ! is_array( $input ) ) {
			$input = array();
		}

		return $this->run( $input );
	}

	/**
	 * Build a WP_Error with a namespaced code and an HTTP-ish status.
	 *
	 * @param string $code    Short error code (namespaced automatically).
	 * @param string $message Human readable message.
	 * @param int    $status  HTTP status code.
	 * @return WP_Error
	 */
	protected function error( $code, $message, $status = 400 ) {
		return new WP_Error( 'neve_ability_' . $code, $message, array( 'status' => $status ) );
	}

	/**
	 * Build a structured validation payload for clients that collapse WP_Error
	 * details into a generic transport error.
	 *
	 * @param string $code    Short validation code.
	 * @param string $message Human readable validation message.
	 * @param string $field   Optional field name tied to the validation issue.
	 * @return array<mixed>
	 */
	protected function validation_issue( $code, $message, $field = '' ) {
		$error = array(
			'code'    => $code,
			'message' => $message,
		);

		if ( '' !== $field ) {
			$error['field'] = $field;
		}

		return array(
			'success' => false,
			'error'   => $error,
		);
	}

	/**
	 * Build a structured non-validation error payload for clients that collapse
	 * WP_Error details into a generic transport error.
	 *
	 * @param string $code    Short error code.
	 * @param string $message Human readable error message.
	 * @param string $field   Optional field tied to the error.
	 * @return array<mixed>
	 */
	protected function structured_error( $code, $message, $field = '' ) {
		$error = array(
			'code'    => $code,
			'message' => $message,
		);

		if ( '' !== $field ) {
			$error['field'] = $field;
		}

		return array(
			'success' => false,
			'error'   => $error,
		);
	}

	/**
	 * The full ability id (e.g. "neve/site-get-state").
	 *
	 * @return string
	 */
	public function get_full_id() {
		return self::PREFIX . '/' . $this->get_id();
	}

	/**
	 * Input schema, after extensions (Neve Pro) had a chance to add fields.
	 *
	 * @return array<mixed>
	 */
	protected function get_filtered_input_schema() {
		/**
		 * Filters the input schema of a Neve ability.
		 *
		 * @param array<mixed>  $schema The JSON schema.
		 * @param string $id     The ability slug, without the "neve/" prefix.
		 */
		return (array) apply_filters( 'neve_ability_input_schema', $this->get_input_schema(), $this->get_id() );
	}

	/**
	 * Validate or apply a field that is implemented by Neve Pro.
	 *
	 * Neve Pro answers through the `neve_ability_pro_field` filter. When nothing
	 * answers (Neve Pro is not active) a clear error is returned instead of
	 * silently dropping the field.
	 *
	 * @param string $field   Input field name.
	 * @param mixed  $value   The field value.
	 * @param bool   $dry_run When true only validate availability, persist nothing.
	 * @return string[]|WP_Error Affected setting keys, or an error.
	 */
	protected function handle_pro_field( $field, $value, $dry_run = false ) {
		/**
		 * Filters the handling of a Pro-only ability field.
		 *
		 * @param null|array|WP_Error $result  Null when unhandled, the affected keys or an error otherwise.
		 * @param string              $id      The ability slug, without the "neve/" prefix.
		 * @param string              $field   The input field name.
		 * @param mixed               $value   The field value.
		 * @param bool                $dry_run Whether to only validate.
		 */
		$result = apply_filters( 'neve_ability_pro_field', null, $this->get_id(), $field, $value, (bool) $dry_run );

		if ( is_wp_error( $result ) ) {
			return $result;
		}

		if ( ! is_array( $result ) ) {
			return $this->error(
				'pro_required',
				sprintf(
					/* translators: %s: input field name */
					__( 'The "%s" field requires Neve Pro.', 'neve' ),
					$field
				),
				403
			);
		}

		return $result;
	}

	/**
	 * Recursive wp_parse_args.
	 *
	 * @param array<mixed> $target  The values to apply.
	 * @param array<mixed> $default The values to merge into.
	 * @return array<mixed>
	 */
	protected function rec_wp_parse_args( $target, $default ) {
		$target  = (array) $target;
		$default = (array) $default;
		$result  = $default;

		foreach ( $target as $key => $value ) {
			if ( is_array( $value ) && isset( $result[ $key ] ) ) {
				$result[ $key ] = $this->rec_wp_parse_args( $value, $result[ $key ] );
			} else {
				$result[ $key ] = $value;
			}
		}

		return $result;
	}
}
