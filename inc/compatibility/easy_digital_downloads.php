<?php
/**
 * Author:          Uriahs Victor
 * Created on:      14/07/2021 (d/m/y)
 *
 * @package Neve
 */
namespace Neve\Compatibility;

/**
 * Class Easy_Digital_Downloads
 *
 * @package Neve\Compatibility
 */
class Easy_Digital_Downloads {

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		if ( ! class_exists( 'Easy_Digital_Downloads', false ) ) {
			return;
		}
		add_action( 'wp_enqueue_scripts', array( $this, 'dequeue_edd_styles' ) );
		add_filter( 'edd_settings_styles', array( $this, 'edd_settings_styles' ) );
		add_filter( 'body_class', array( $this, 'add_body_class' ) );
	}

	/**
	 * Add neve easy digital downloads body class.
	 * 
	 * @param array $classes Current classes on body.
	 */
	public function add_body_class( $classes ) {

		if ( edd_is_checkout() ||
		edd_is_success_page() ||
		edd_is_failed_transaction_page() ||
		edd_is_purchase_history_page() ||
		is_post_type_archive( 'download' ) ||
		get_post_type() == 'download' ||
		is_tax( 'download_category' ) ||
		is_tax( 'download_tag' )
		) {
			$classes[] = 'nv-edd';
		}

		return $classes;

	}

	/**
	 * Dequeue the EDD default styles as we have our own.
	 * 
	 * @return void 
	 */
	public function dequeue_edd_styles() {
		wp_dequeue_style( 'edd-styles' );
	}

	/**
	 * Filter the settings from EDD's "Styles" tab
	 *
	 * @param mixed $settings EDD style settings.
	 * @return array 
	 */
	public function edd_settings_styles( $settings ) {
		/*
		 * Settings with type 'descriptive_text' are automatically stripped by EDD
		 * So this field is not saved to the DB on save changes.
		 * 
		 * see edd_settings_sanitize()
		 */
		$settings['main'] = array(
			'neve_controlled' => array(
				'id'   => 'neve_controlled',
				'name' => esc_html__( 'Controlled by Neve', 'neve' ),
				'desc' => esc_html__( 'Neve Theme controls base style settings of Easy Digital Downloads. Additional settings from other extensions might appear below.', 'neve' ),
				'type' => 'descriptive_text',
			),
		);

		return $settings;
	}

}
