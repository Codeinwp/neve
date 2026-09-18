<?php
/**
 * Ability: neve/page-layout-update.
 *
 * Reads and edits the per-post layout settings the Neve page settings metabox
 * / editor sidebar stores as post meta (container, sidebar, content width,
 * title alignment, hidden components).
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

use Neve\Core\Supported_Post_Types;
use Neve\Views\Pluggable\Metabox_Settings;

/**
 * Class Page_Layout_Update
 *
 * @package Neve\Abilities
 */
class Page_Layout_Update extends Abstract_Ability {

	/**
	 * Post meta written by the Neve Pro Blog Pro module.
	 */
	const READING_TIME_META = 'neve_meta_reading_time';

	/**
	 * Enum fields: input name => [ meta key, allowed values ]. "default" removes
	 * the override so the Customizer setting applies.
	 */
	const ENUM_FIELDS = array(
		'container'       => array( Metabox_Settings::CONTAINER, array( 'default', 'contained', 'full-width' ) ),
		'sidebar'         => array( Metabox_Settings::SIDEBAR, array( 'default', 'left', 'right', 'full-width' ) ),
		'title_alignment' => array( Metabox_Settings::TITLE_ALIGNMENT, array( 'default', 'left', 'center', 'right' ) ),
		'author_avatar'   => array( Metabox_Settings::SHOW_AVATAR, array( 'default', 'on', 'off' ) ),
	);

	/**
	 * Toggle fields: input name => meta key. Stored as "on"; removed when false.
	 */
	const TOGGLE_FIELDS = array(
		'disable_header'         => Metabox_Settings::DISABLE_HEADER,
		'disable_title'          => Metabox_Settings::DISABLE_TITLE,
		'disable_featured_image' => Metabox_Settings::DISABLE_FEATURED_IMAGE,
		'disable_footer'         => Metabox_Settings::DISABLE_FOOTER,
	);

	/**
	 * {@inheritDoc}
	 */
	protected function get_id() {
		return 'page-layout-update';
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_label() {
		return __( 'Update page layout', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_description() {
		return __( 'Read or edit the Neve layout settings of a single post, page or product: container, sidebar, content width, title alignment and hidden header/title/featured image/footer. Send only post_id to read the current settings. Use "default" to fall back to the Customizer setting. Use dry_run to preview.', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_annotations() {
		return array(
			'readonly'    => false,
			'destructive' => false,
			'idempotent'  => true,
		);
	}

	/**
	 * The page settings metabox and its post meta require edit_posts.
	 *
	 * @return string
	 */
	protected function get_capability() {
		return 'edit_posts';
	}

	/**
	 * Permission callback. Adds the object-level check core applies when the
	 * same post meta is saved from the editor.
	 *
	 * @param array<mixed>|null $input The ability input.
	 * @return bool
	 */
	public function check_permission( $input = array() ) {
		if ( ! current_user_can( $this->get_capability() ) ) {
			return false;
		}

		if ( is_array( $input ) && ! empty( $input['post_id'] ) ) {
			return current_user_can( 'edit_post', (int) $input['post_id'] );
		}

		return true;
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_input_schema() {
		$properties = array(
			'post_id' => array(
				'type'        => 'integer',
				'minimum'     => 1,
				'description' => 'The post, page or product ID.',
			),
		);

		foreach ( self::ENUM_FIELDS as $name => $config ) {
			$properties[ $name ] = array(
				'type' => 'string',
				'enum' => $config[1],
			);
		}

		$properties['author_avatar']['description'] = 'Show the author avatar in the post meta (posts only).';

		$properties['content_width_enabled'] = array(
			'type'        => 'boolean',
			'description' => 'Enable the individual content width for this post.',
		);
		$properties['content_width']         = array(
			'type'        => 'integer',
			'minimum'     => 50,
			'maximum'     => 100,
			'description' => 'Content width in percent. Applies when content_width_enabled is true.',
		);

		foreach ( self::TOGGLE_FIELDS as $name => $meta_key ) {
			$properties[ $name ] = array( 'type' => 'boolean' );
		}

		$properties['reading_time'] = array(
			'type'        => 'string',
			'enum'        => array( 'default', 'on', 'off' ),
			'description' => 'Show the estimated reading time in the post meta. Requires the Neve Pro Blog Booster module.',
		);
		$properties['dry_run']      = array(
			'type'        => 'boolean',
			'default'     => false,
			'description' => 'Validate and return the resulting settings without saving.',
		);

		return array(
			'type'       => 'object',
			'required'   => array( 'post_id' ),
			'properties' => $properties,
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_output_schema() {
		return array(
			'type'       => 'object',
			'properties' => array(
				'post_id'   => array( 'type' => 'integer' ),
				'post_type' => array( 'type' => 'string' ),
				'dry_run'   => array( 'type' => 'boolean' ),
				'updated'   => array(
					'type'  => 'array',
					'items' => array( 'type' => 'string' ),
				),
				'layout'    => array(
					'type'                 => 'object',
					'additionalProperties' => true,
				),
			),
		);
	}

	/**
	 * Post types the page settings apply to.
	 *
	 * @return string[]
	 */
	private function get_supported_post_types() {
		$types     = array( 'post', 'page', 'product' );
		$supported = Supported_Post_Types::get( 'block_editor' );

		if ( is_array( $supported ) ) {
			$types = array_merge( $types, $supported );
		}

		return array_values( array_unique( $types ) );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function run( array $input ) {
		$post_id = isset( $input['post_id'] ) ? absint( $input['post_id'] ) : 0;
		$post    = $post_id ? get_post( $post_id ) : null;

		if ( ! $post ) {
			return $this->error( 'post_not_found', __( 'The post does not exist.', 'neve' ), 404 );
		}

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return $this->error( 'forbidden', __( 'You are not allowed to edit this post.', 'neve' ), 403 );
		}

		if ( ! in_array( $post->post_type, $this->get_supported_post_types(), true ) ) {
			return $this->error( 'unsupported_post_type', __( 'Neve page settings are not available for this post type.', 'neve' ) );
		}

		// Meta key => new value; null removes the override.
		$changes = array();

		foreach ( self::ENUM_FIELDS as $name => $config ) {
			if ( ! isset( $input[ $name ] ) ) {
				continue;
			}
			if ( ! in_array( $input[ $name ], $config[1], true ) ) {
				return $this->invalid_value( $name );
			}
			$changes[ $config[0] ] = 'default' === $input[ $name ] ? null : $input[ $name ];
		}

		foreach ( self::TOGGLE_FIELDS as $name => $meta_key ) {
			if ( isset( $input[ $name ] ) ) {
				$changes[ $meta_key ] = $input[ $name ] ? 'on' : null;
			}
		}

		if ( isset( $input['content_width_enabled'] ) ) {
			$changes[ Metabox_Settings::ENABLE_CONTENT_WIDTH ] = $input['content_width_enabled'] ? 'on' : 'off';
		}

		if ( isset( $input['content_width'] ) ) {
			$width = (int) $input['content_width'];
			if ( ! is_numeric( $input['content_width'] ) || $width < 50 || $width > 100 ) {
				return $this->invalid_value( 'content_width' );
			}
			$changes[ Metabox_Settings::CONTENT_WIDTH ] = $width;
		}

		if ( isset( $input['reading_time'] ) ) {
			if ( ! in_array( $input['reading_time'], array( 'default', 'on', 'off' ), true ) ) {
				return $this->invalid_value( 'reading_time' );
			}
			// The meta key only exists while the Neve Pro Blog Booster module runs.
			if ( ! registered_meta_key_exists( 'post', self::READING_TIME_META ) ) {
				return $this->error( 'pro_required', __( 'The "reading_time" field requires the Neve Pro Blog Booster module.', 'neve' ), 403 );
			}
			$changes[ self::READING_TIME_META ] = 'default' === $input['reading_time'] ? null : $input['reading_time'];
		}

		$dry_run = ! empty( $input['dry_run'] );
		$layout  = $this->read_layout( $post_id );

		foreach ( $changes as $meta_key => $value ) {
			if ( ! $dry_run ) {
				if ( null === $value ) {
					delete_post_meta( $post_id, $meta_key );
				} else {
					update_post_meta( $post_id, $meta_key, $value );
				}
			}
		}

		if ( ! $dry_run ) {
			$layout = $this->read_layout( $post_id );
		} else {
			$layout = $this->preview_layout( $layout, $changes );
		}

		return array(
			'post_id'   => $post_id,
			'post_type' => $post->post_type,
			'dry_run'   => $dry_run,
			'updated'   => array_keys( $changes ),
			'layout'    => $layout,
		);
	}

	/**
	 * Build an invalid value error.
	 *
	 * @param string $field Input field name.
	 * @return \WP_Error
	 */
	private function invalid_value( $field ) {
		return $this->error(
			'invalid_value',
			sprintf(
				/* translators: %s: input field name */
				__( 'Invalid value for "%s".', 'neve' ),
				$field
			)
		);
	}

	/**
	 * Input name => meta key for every field.
	 *
	 * @return array<string,string>
	 */
	private function get_meta_map() {
		$map = array();

		foreach ( self::ENUM_FIELDS as $name => $config ) {
			$map[ $name ] = $config[0];
		}

		$map['content_width_enabled'] = Metabox_Settings::ENABLE_CONTENT_WIDTH;
		$map['content_width']         = Metabox_Settings::CONTENT_WIDTH;

		foreach ( self::TOGGLE_FIELDS as $name => $meta_key ) {
			$map[ $name ] = $meta_key;
		}

		if ( registered_meta_key_exists( 'post', self::READING_TIME_META ) ) {
			$map['reading_time'] = self::READING_TIME_META;
		}

		return $map;
	}

	/**
	 * Convert a stored meta value to its input representation.
	 *
	 * @param string $name  Input field name.
	 * @param mixed  $value Stored value; null or '' when there is no override.
	 * @return mixed
	 */
	private function present_value( $name, $value ) {
		$empty = null === $value || '' === $value;

		if ( isset( self::TOGGLE_FIELDS[ $name ] ) || 'content_width_enabled' === $name ) {
			return 'on' === $value;
		}

		if ( 'content_width' === $name ) {
			return $empty ? null : (int) $value;
		}

		return $empty ? 'default' : $value;
	}

	/**
	 * Read the current per-post layout settings.
	 *
	 * @param int $post_id Post ID.
	 * @return array<mixed>
	 */
	private function read_layout( $post_id ) {
		$layout = array();

		foreach ( $this->get_meta_map() as $name => $meta_key ) {
			$layout[ $name ] = $this->present_value( $name, get_post_meta( $post_id, $meta_key, true ) );
		}

		return $layout;
	}

	/**
	 * Apply pending changes to a layout snapshot without saving.
	 *
	 * @param array<mixed> $layout  Current layout.
	 * @param array<mixed> $changes Meta key => value (null removes).
	 * @return array<mixed>
	 */
	private function preview_layout( array $layout, array $changes ) {
		foreach ( $this->get_meta_map() as $name => $meta_key ) {
			if ( array_key_exists( $meta_key, $changes ) ) {
				$layout[ $name ] = $this->present_value( $name, $changes[ $meta_key ] );
			}
		}

		return $layout;
	}
}
