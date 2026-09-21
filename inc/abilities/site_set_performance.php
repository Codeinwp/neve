<?php
/**
 * Ability: neve/site-set-performance.
 *
 * Local Google fonts hosting ships with the theme; the emoji, oEmbed and
 * content-visibility toggles are handled by the Neve Pro performance module.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

use Neve\Core\Settings\Config;

/**
 * Class Site_Set_Performance
 *
 * @package Neve\Abilities
 */
class Site_Set_Performance extends Abstract_Ability {

	/**
	 * Map of friendly input keys to their underlying option keys.
	 */
	const OPTION_MAP = array(
		'local_google_fonts' => Config::OPTION_LOCAL_GOOGLE_FONTS_HOSTING,
	);

	/**
	 * Input keys handled by the Neve Pro performance module.
	 */
	const PRO_KEYS = array( 'remove_emoji', 'remove_oembed', 'content_visibility' );

	/**
	 * {@inheritDoc}
	 */
	protected function get_id() {
		return 'site-set-performance';
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_label() {
		return __( 'Set performance options', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_description() {
		return __( 'Toggle Neve performance optimizations: remove emoji scripts, remove oEmbed scripts, locally host Google fonts, and lazy-render off-screen content. Send only the keys you want to change.', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_capability() {
		return 'manage_options';
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_annotations() {
		return array(
			'destructive' => false,
			'idempotent'  => true,
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_input_schema() {
		return array(
			'type'       => 'object',
			'properties' => array(
				'remove_emoji'       => array(
					'type'        => 'boolean',
					'description' => 'Remove WordPress emoji scripts (Neve Pro).',
				),
				'remove_oembed'      => array(
					'type'        => 'boolean',
					'description' => 'Remove oEmbed host scripts (Neve Pro).',
				),
				'local_google_fonts' => array(
					'type'        => 'boolean',
					'description' => 'Host external (Google) fonts locally.',
				),
				'content_visibility' => array(
					'type'        => 'boolean',
					'description' => 'Lazy-render off-screen content with content-visibility (Neve Pro).',
				),
			),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_output_schema() {
		return array(
			'type'       => 'object',
			'properties' => array(
				'updated' => array(
					'type'  => 'array',
					'items' => array( 'type' => 'string' ),
				),
			),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function run( array $input ) {
		$updated = array();

		// Check the Neve Pro toggles first so the request fails as a whole.
		foreach ( self::PRO_KEYS as $key ) {
			if ( ! array_key_exists( $key, $input ) ) {
				continue;
			}
			$available = $this->handle_pro_field( $key, (bool) $input[ $key ], true );
			if ( is_wp_error( $available ) ) {
				return $available;
			}
		}

		foreach ( self::OPTION_MAP as $key => $option ) {
			if ( ! array_key_exists( $key, $input ) ) {
				continue;
			}

			update_option( $option, (bool) $input[ $key ] );
			$updated[] = $key;
		}

		foreach ( self::PRO_KEYS as $key ) {
			if ( ! array_key_exists( $key, $input ) ) {
				continue;
			}
			$applied = $this->handle_pro_field( $key, (bool) $input[ $key ] );
			if ( is_wp_error( $applied ) ) {
				return $applied;
			}
			$updated[] = $key;
		}

		if ( empty( $updated ) ) {
			return $this->error( 'no_changes', __( 'No recognized settings were provided.', 'neve' ) );
		}

		return array( 'updated' => $updated );
	}
}
