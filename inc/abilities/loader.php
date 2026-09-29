<?php
/**
 * Abilities loader.
 *
 * Registers the Neve abilities with the WordPress Abilities API (WP 6.9+).
 * Neve owns the shared `neve/*` contracts; Neve Pro extends their schemas and
 * handlers through filters instead of registering them a second time.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

/**
 * Class Loader
 *
 * @package Neve\Abilities
 */
class Loader {

	/**
	 * The ability category slug shared by all Neve abilities.
	 */
	const CATEGORY = 'neve';

	/**
	 * Ability classes, relative to this namespace, keyed by ability id.
	 */
	const ABILITIES = array(
		'neve/site-get-state'          => 'Site_Get_State',
		'neve/header-list-components'  => 'Header_List_Components',
		'neve/appearance-update'       => 'Appearance_Update',
		'neve/appearance-apply-preset' => 'Appearance_Apply_Preset',
		'neve/header-configure'        => 'Header_Configure',
		'neve/footer-configure'        => 'Footer_Configure',
		'neve/site-set-performance'    => 'Site_Set_Performance',
		'neve/site-set-theme-mod'      => 'Site_Set_Theme_Mod',
		'neve/page-layout-update'      => 'Page_Layout_Update',
	);

	/**
	 * Initialize the feature.
	 *
	 * @return void
	 */
	public function init() {
		if ( ! function_exists( 'wp_register_ability' ) ) {
			return;
		}

		add_action( 'wp_abilities_api_categories_init', array( $this, 'register_category' ) );
		add_action( 'wp_abilities_api_init', array( $this, 'register_abilities' ) );
	}

	/**
	 * The ability ids owned by the theme.
	 *
	 * Neve Pro uses this to skip its own copies of the shared abilities.
	 *
	 * @return string[]
	 */
	public static function get_owned_ids() {
		return array_keys( self::ABILITIES );
	}

	/**
	 * Register the shared "neve" ability category.
	 *
	 * @return void
	 */
	public function register_category() {
		if ( ! function_exists( 'wp_register_ability_category' ) ) {
			return;
		}

		if ( function_exists( 'wp_has_ability_category' ) && wp_has_ability_category( self::CATEGORY ) ) {
			return;
		}

		wp_register_ability_category(
			self::CATEGORY,
			array(
				'label'       => __( 'Neve', 'neve' ),
				'description' => __( 'Read and configure the Neve theme.', 'neve' ),
			)
		);
	}

	/**
	 * Register the abilities.
	 *
	 * @return void
	 */
	public function register_abilities() {
		foreach ( self::ABILITIES as $id => $short_name ) {
			if ( function_exists( 'wp_has_ability' ) && wp_has_ability( $id ) ) {
				continue;
			}

			$class = __NAMESPACE__ . '\\' . $short_name;

			if ( ! class_exists( $class ) ) {
				continue;
			}

			$ability = new $class();
			$ability->register();
		}
	}
}
