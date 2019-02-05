<?php

class Hf_Fonts {

	function __construct() {
		// Add ajax handle.
		add_action( 'wp_ajax_Hf/customizer/ajax/fonts', array( $this, 'ajax_fonts' ) );
	}

	/**
	 * Ajax fonts
	 */
	function ajax_fonts() {
		$fonts = array(
			'normal' => array(
				'title' => __( 'Default Web Fonts', 'Hf' ),
				'fonts' => $this->get_normal_fonts(),
			),
			'google' => array(
				'title' => __( 'Google Web Fonts', 'Hf' ),
				'fonts' => $this->get_google_fonts(),
			),
		);

		wp_send_json_success( apply_filters( 'Hf/list-fonts', $fonts ) );
	}

	/**
	 * Get Google WebFont fonts from json file
	 *
	 * @return array
	 */
	function get_google_fonts() {
		global $wp_filesystem;
		WP_Filesystem();
		$file = get_template_directory() . '/assets/fonts/google-fonts.json';
		if ( file_exists( $file ) ) {
			$file_contents = $wp_filesystem->get_contents( $file );

			return json_decode( $file_contents, true );
		}

		return array();
	}

	/**
	 * Default fonts
	 *
	 * @return array
	 */
	function get_normal_fonts() {
		$fonts = array(
			'Arial'       => array(
				'family'   => 'Arial',
				'category' => ' sans-serif',
			),
			'Baskerville' => array(
				'family'   => 'Baskerville',
				'category' => 'serif',
			),
			'Palatino'    => array(
				'family'   => 'Palatino',
				'category' => 'serif',
			),

			'Bodoni MT' => array(
				'family'   => 'Bodoni MT',
				'category' => 'serif',
			),

			'Georgia' => array(
				'family'   => 'Georgia',
				'category' => 'serif',
			),

			'Century Gothic' => array(
				'family'   => 'Century Gothic',
				'category' => 'sans-serif',
			),

			'Tahoma' => array(
				'family'   => 'Tahoma',
				'category' => 'sans-serif',
			),

			'Arial Narrow' => array(
				'family'   => 'Arial Narrow',
				'category' => ' sans-serif',
			),

			'Trebuchet MS' => array(
				'family'   => 'Trebuchet MS',
				'category' => ' sans-serif',
			),

			'Consolas' => array(
				'family'   => 'Consolas',
				'category' => ' sans-serif',
			),

		);

		return $fonts;
	}
}

new Hf_Fonts();
