<?php
/**
 * Handles mod migration upon import.
 *
 * This class will receive an array of theme mods (key-value) and migrate legacy things.
 *
 * @since 3.0.0
 *
 * @package Neve\Core
 */

namespace Neve\Core\Settings;

use Neve\Core\Builder_Migrator;

/**
 * Class Mods_Migrator
 */
class Mods_Migrator {

	const LEGACY_HEADINGS = [
		Config::MODS_TYPEFACE_H6 => [
			'neve_h6_font_size'   => 'fontSize',
			'neve_h6_line_height' => 'lineHeight',
		],
		Config::MODS_TYPEFACE_H5 => [
			'neve_h5_font_size'   => 'fontSize',
			'neve_h5_line_height' => 'lineHeight',
		],
		Config::MODS_TYPEFACE_H4 => [
			'neve_h4_font_size'   => 'fontSize',
			'neve_h4_line_height' => 'lineHeight',
		],
		Config::MODS_TYPEFACE_H3 => [
			'neve_h3_font_size'   => 'fontSize',
			'neve_h3_line_height' => 'lineHeight',
		],
		Config::MODS_TYPEFACE_H2 => [
			'neve_h2_font_size'   => 'fontSize',
			'neve_h2_line_height' => 'lineHeight',
		],
		Config::MODS_TYPEFACE_H1 => [
			'neve_h1_font_size'   => 'fontSize',
			'neve_h1_line_height' => 'lineHeight',
		],
	];

	/**
	 * Builders
	 *
	 * @var string[]
	 */
	private $builder_map = [ 'hfg_header_layout', 'hfg_footer_layout', 'hfg_page_header_layout' ];

	/**
	 * Mods array.
	 *
	 * @var array
	 */
	private $mods = [];

	/**
	 * Mods to migrate.
	 *
	 * @var array
	 */
	private $mods_to_migrate_to = [
		Config::MODS_TYPEFACE_GENERAL,
		Config::MODS_TYPEFACE_H1,
		Config::MODS_TYPEFACE_H2,
		Config::MODS_TYPEFACE_H3,
		Config::MODS_TYPEFACE_H4,
		Config::MODS_TYPEFACE_H5,
		Config::MODS_TYPEFACE_H6,
	];

	/**
	 * Mods_Migrator constructor.
	 *
	 * @param array $incoming_mods the incoming mods from import.
	 */
	public function __construct( $incoming_mods ) {
		$this->mods = $incoming_mods;
	}

	/**
	 * Get migrated mods.
	 *
	 * @return array
	 */
	public function get_migrated_mods() {
		$this->migrate_mods();
		$this->attempt_builders_migration();
		$this->unset_unused();

		return $this->mods;
	}

	/**
	 * Migrate mods.
	 *
	 * @return void
	 */
	private function migrate_mods() {
		foreach ( $this->mods_to_migrate_to as $new_mod_key ) {
			// If the new mod is already in use, we don't need to migrate anything.
			if ( isset( $this->mods[ $new_mod_key ] ) ) {
				continue;
			}

			$next_value = $this->transform_to_new_value( $new_mod_key );

			if ( empty( $next_value ) ) {
				continue;
			}

			$this->mods[ $new_mod_key ] = $next_value;
		}
	}

	/**
	 * Attempt to migrate builders.
	 *
	 * @return void
	 */
	private function attempt_builders_migration() {
		$hfg_migrator = new Builder_Migrator();

		foreach ( $this->builder_map as $builder ) {
			$new_builder_mod = $builder . '_v2';
			if ( isset( $this->mods[ $new_builder_mod ] ) ) {
				continue;
			}

			if ( ! isset( $this->mods[ $builder ] ) ) {
				continue;
			}

			$new_value = $hfg_migrator->get_new_builder_value_from_old( json_decode( $this->mods[ $builder ], true ) );

			if ( $new_value === false ) {
				continue;
			}

			$this->mods[ $new_builder_mod ] = wp_json_encode( $new_value );
			unset( $this->mods[ $builder ] );
		}
	}

	/**
	 * Get the array of old values that will match the new values.
	 *
	 * @param string $new_mod_key the new mod key.
	 *
	 * @return array
	 */
	private function transform_to_new_value( $new_mod_key ) {
		$defaults = Mods::get_alternative_mod_default( $new_mod_key );

		switch ( $new_mod_key ) {
			case Config::MODS_TYPEFACE_GENERAL:
				$old_value = $this->get_composed_value(
					[
						'neve_body_line_height'    => 'lineHeight',
						'neve_body_letter_spacing' => 'letterSpacing',
						'neve_body_font_weight'    => 'fontWeight',
						'neve_body_text_transform' => 'textTransform',
						'neve_body_font_size'      => 'fontSize',
					]
				);

				return array_merge( $defaults, $old_value );

			case Config::MODS_TYPEFACE_H1:
			case Config::MODS_TYPEFACE_H2:
			case Config::MODS_TYPEFACE_H3:
			case Config::MODS_TYPEFACE_H4:
			case Config::MODS_TYPEFACE_H5:
			case Config::MODS_TYPEFACE_H6:
				$partial = [
					'neve_headings_line_height'    => 'lineHeight',
					'neve_headings_letter_spacing' => 'letterSpacing',
					'neve_headings_font_weight'    => 'fontWeight',
					'neve_headings_text_transform' => 'textTransform',
				];

				$keys      = array_merge( $partial, self::LEGACY_HEADINGS[ $new_mod_key ] );
				$old_value = $this->get_composed_value( $keys );

				return array_merge( $defaults, $old_value );
		}

		return array();
	}

	/**
	 * Get the old values for the new mod.
	 *
	 * @param array $args args array [$old_mod => $key_on_new_mod].
	 *
	 * @return array
	 */
	private function get_composed_value( $args ) {
		$new_values = [];
		foreach ( $args as $old_mod => $new_key ) {
			if ( ! isset( $this->mods[ $old_mod ] ) ) {
				continue;
			}

			$final_value = $this->mods[ $old_mod ];
			// If the value is either font-size or line-height we should migrate it from previous json format.
			if ( in_array( $new_key, [ 'fontSize', 'lineHeight' ] ) ) {
				$final_value = json_decode( $final_value, true );
			}

			$new_values[ $new_key ] = $final_value;

			unset( $this->mods[ $old_mod ] );
		}

		return $new_values;
	}

	/**
	 * Unset unused theme mods.
	 *
	 * @return void
	 */
	private function unset_unused() {
		$to_remove = array_merge( $this->builder_map, [ 'background_color' ] );

		foreach ( $to_remove as $slug ) {
			if ( isset( $this->mods[ $slug ] ) ) {
				unset( $this->mods[ $slug ] );
			}
		}
	}
}
