<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      15/11/2018
 *
 * @package gutenberg.php
 */

namespace Neve\Compatibility;


class Gutenberg {

	private $available_post_meta = array(
		'neve_meta_disable_header',
		'neve_meta_disable_title',
		'neve_meta_disable_featured_image',
		'neve_meta_disable_footer',
		'neve_meta_sidebar',
		'neve_meta_container',
	);

	private $post_id = null;

	public function init() {
		if ( ! isset( $_GET['post'] ) ) {
			return;
		}
		$this->post_id = $_GET['post'];

		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_gutenberg_scripts' ) );
	}


	/**
	 * Enqueue gutenberg scripts.
	 */
	public function enqueue_gutenberg_scripts() {
		wp_enqueue_style( 'neve-gutenberg', NEVE_ASSETS_URL . 'css/gutenberg-editor-style' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), NEVE_VERSION );

		wp_register_script( 'neve-gutenberg', NEVE_ASSETS_URL . 'js/gutenberg-preview-manager' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.js', array( 'jquery' ), NEVE_VERSION, true );

		wp_localize_script( 'neve-gutenberg', 'neveGutenbergHelper', apply_filters( 'neve_gutenberg_helper_filter_localization', $this->localize_gutenberg_helper_script() ) );

		wp_enqueue_script( 'neve-gutenberg' );
	}

	/**
	 * Localize the gutenberg helper script.
	 *
	 * @return array
	 */
	public function localize_gutenberg_helper_script() {
		$localization                   = array();
		$localization                   = array_merge( $localization, $this->get_post_metas() );
		$localization['strings']        = $this->get_strings();
		$localization['metaStatus']     = $this->get_meta_status();
		$localization['sidebarSetup']   = $this->get_sidebar_setup();
		$localization['containerSetup'] = $this->get_container_setup();

		return $localization;
	}

	/**
	 * Get the sidebar setup.
	 *
	 * @return string
	 * TODO: Really pull the sidebar setup from customizer.
	 */
	private function get_sidebar_setup() {
		return 'right';
	}

	/**
	 * Get the container setup.
	 *
	 * @return string
	 * TODO: Really pull the container setup from customizer.
	 */
	private function get_container_setup() {
		return 'contained';
	}

	/**
	 * Get the post metas we're interested in.
	 *
	 * @return array
	 */
	private function get_post_metas() {
		$metas = array();
		foreach ( $this->available_post_meta as $meta ) {
			$meta_value = get_post_meta( $this->post_id, $meta );
			if ( empty( $meta_value ) ) {
				continue;
			}
			$metas[ $meta ] = $meta_value[0];
		}

		return $metas;
	}

	/**
	 * Check if post meta is shown on the front end.
	 *
	 * @return string
	 */
	private function get_meta_status() {
		$default_meta_order = json_encode(
			array(
				'author',
				'date',
				'comments',
			)
		);
		$meta               = get_theme_mod( 'neve_post_meta_ordering', $default_meta_order );

		if ( empty( $meta ) ) {
			return 'disabled';
		}

		return 'enabled';
	}

	/**
	 * Get translatable strings.
	 *
	 * @return array
	 */
	private function get_strings() {
		return array(
			'sidebar' => __( 'Sidebar', 'neve' ),
		);
	}

}
