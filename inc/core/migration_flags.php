<?php
/**
 * Settings handler.
 *
 * @since 4.0.0
 * @package Neve
 */

namespace Neve\Core;

/**
 * Class Migration_Flags
 *
 * @package Neve_Pro\Core
 */
class Migration_Flags {
	/**
	 * Previous version of the theme in semver format.
	 *
	 * @var string
	 */
	private $last_version;
	/**
	 * Current version of the theme in semver format.
	 *
	 * @var string
	 */
	private $current_version;

	const NEVE_VERSION_OPTION = 'neve_version';
	const USER_SINCE_VERSION  = 'neve_user_since';

	/**
	 * Migration_Flags constructor.
	 *
	 * @param string $current_version - the current version of the theme.
	 */
	public function __construct( $current_version ) {
		$this->last_version    = get_option( self::NEVE_VERSION_OPTION );
		$this->current_version = $current_version;
	}

	/**
	 * Run the migrations.
	 */
	public function run() {
		// This exists since v4.0.0. If it's not set, we're dealing with a new user, but we don't know since what version.
		if ( ! $this->last_version ) {
			update_option( self::USER_SINCE_VERSION, $this->is_new_user_on_v4() ? $this->current_version : 'unknown' );
		}

		// Skip when there was no version before (no migration needed)
		// Skip if the current version is lower than the last one.
		if ( ! $this->last_version || $this->current_version <= $this->last_version ) {
			return;
		}


		// Do migrations here.


		$this->end_migration();
	}

	/**
	 * Arbitrarilly determine if the user is new for v4 based on the presence of some essential theme mods.
	 *
	 * @return bool
	 */
	private function is_new_user_on_v4() {
		$all_mods = get_theme_mods();

		$mods = [
			'hfg_header_layout',
			'hfg_footer_layout',
			'neve_blog_archive_layout',
			'neve_headings_font_family',
			'neve_body_font_family',
			'neve_global_colors',
			'neve_button_appearance',
			'neve_secondary_button_appearance',
			'neve_typeface_general',
			'neve_form_fields_padding',
			'neve_default_sidebar_layout',
			'neve_advanced_layout_options',
		];

		$is_new_user = true;

		foreach ( $mods as $mod_to_check ) {
			if ( isset( $all_mods[ $mod_to_check ] ) ) {
				$is_new_user = false;
				break;
			}
		}

		return $is_new_user;
	}

	/**
	 * End the migration. Set the option to the current version.
	 */
	private function end_migration() {
		update_option( self::NEVE_VERSION_OPTION, $this->current_version );
	}

	/**
	 * Checks if this is a new user after a certain version.
	 *
	 * @param string $version - the version in semver format.
	 *
	 * @return bool
	 */
	public static function is_new_user_after( $version ) {
		$new_user_since = get_option( self::USER_SINCE_VERSION );

		if ( $new_user_since === 'unknown' ) {
			return false;
		}

		return version_compare( $new_user_since, $version, '>' );
	}

	/**
	 * Checks if the user is new after v4.
	 */
	public static function is_new_user_after_v4() {
		return self::is_new_user_after( '3.8.16' );
	}
}
