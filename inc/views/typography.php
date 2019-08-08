<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      22/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Typography
 *
 * @package Neve\Views
 */
class Typography extends Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_google_fonts' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_google_fonts_gutenberg' ) );
		add_filter( 'neve_filter_font_weights', array( $this, 'add_font_weights' ), 10, 2 );
	}

	/**
	 * Register the google fonts for gutenberg.
	 */
	public function register_google_fonts_gutenberg() {
		$this->register_google_fonts();
	}

	/**
	 * Register the fonts that are selected in customizer.
	 */
	public function register_google_fonts() {

		$typekit_fonts = apply_filters( 'neve_typekit_fonts', array() );

		/**
		 * Headings font family.
		 */
		$headings_font = get_theme_mod( 'neve_headings_font_family', apply_filters( 'neve_headings_default', false ) );

		if ( ! empty( $headings_font ) && ! in_array( $headings_font, $typekit_fonts, true ) ) {
			$this->enqueue_google_font( $headings_font, 'headings' );
		}


		/**
		 * Body font family.
		 */
		$body_font = get_theme_mod( 'neve_body_font_family', apply_filters( 'neve_body_font_default', false ) );
		if ( ! empty( $body_font ) && ! in_array( $body_font, $typekit_fonts, true ) ) {
			$this->enqueue_google_font( $body_font, 'body' );
		}
	}

	/**
	 * Enqueues a Google Font
	 *
	 * @param string $font font string.
	 * @param string $handle body/headings.
	 *
	 * @since 1.1.38
	 */
	private function enqueue_google_font( $font, $handle ) {

		// Get list of all Google Fonts.
		$google_fonts = $this->get_google_fonts();

		// Make sure font is in our list of fonts.
		if ( ! $google_fonts || ! in_array( $font, $google_fonts, true ) ) {
			return;
		}

		// Sanitize font name.
		$font = trim( $font );

		$base_url = '//fonts.googleapis.com/css';

		// Apply the chosen subset from customizer.
		$subsets     = '';
		$get_subsets = get_theme_mod( 'neve_font_subsets', array( 'latin' ) );
		if ( ! empty( $get_subsets ) ) {
			$font_subsets = array();
			foreach ( $get_subsets as $get_subset ) {
				$font_subsets[] = $get_subset;
			}
			$subsets .= implode( ',', $font_subsets );
		}

		// Weights.
		$weights = apply_filters( 'neve_filter_font_weights', array( '300', '400', '500', '700' ), $handle );

		// Add weights to URL.
		if ( ! empty( $weights ) ) {
			$font .= ':' . implode( ',', $weights );
		}

		$query_args = array(
			'family' => urlencode( $font ),
		);
		if ( ! empty( $subsets ) ) {
			$query_args['subset'] = urlencode( $subsets );
		}
		$url = add_query_arg( $query_args, $base_url );

		// Enqueue style
		wp_enqueue_style( 'neve-google-font-' . $handle, $url, array(), false );
	}

	/**
	 * List of All Google fonts
	 */
	private function get_google_fonts() {
		return neve_get_google_fonts();
	}

	/**
	 * Add headings font weights.
	 *
	 * @param array  $weights_array font weight array.
	 * @param string $context the context ['headings', 'body'].
	 *
	 * @return array
	 */
	public function add_font_weights( $weights_array, $context ) {
		// Enqueue all the font weights in customizer preview.
		if ( is_customize_preview() ) {
			return array( '100', '200', '300', '400', '500', '600', '700', '800', '900' );
		}

		if ( $context !== 'headings' && $context !== 'body' ) {
			return $weights_array;
		}
		$key = 'neve_headings_font_weight';
		if ( $context === 'body' ) {
			$key = 'neve_body_font_weight';
		}

		$font_weight = (string) get_theme_mod( $key );

		if ( empty( $font_weight ) || in_array( $font_weight, $weights_array, true ) ) {
			return $weights_array;
		}

		$weights_array[] = $font_weight;

		return $weights_array;
	}
}
