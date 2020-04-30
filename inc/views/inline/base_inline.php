<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Neve\Views\Inline
 */

namespace Neve\Views\Inline;

/**
 * Class Base_Inline
 *
 * @deprecated Functionality replaced with the subscriber mechanism, we keep it only for compatibility with the pro version.
 * @package Neve\Views\Inline
 */
abstract class Base_Inline {
	/**
	 * Mobile style (default).
	 *
	 * @var string
	 */
	private $style = array(
		'mobile'  => '',
		'tablet'  => '',
		'desktop' => '',
	);

	/**
	 * Base_Inline constructor.
	 */
	final public function __construct() {

		$this->init();
	}

	/**
	 * Do all actions necessary.
	 *
	 * @return mixed
	 */
	abstract public function init();

	/**
	 * Add single style.
	 *
	 * @param array  $styles      styles.
	 * @param string $selectors   css selectors.
	 * @param string $media_query media query.
	 */
	final protected function add_style( $styles, $selectors, $media_query = 'mobile' ) {
		if ( ! in_array( $media_query, array( 'mobile', 'tablet', 'desktop' ), true ) ) {
			return;
		}

		if ( empty( $styles ) || empty( $selectors ) ) {
			return;
		}

		$use_style = false;

		foreach ( $styles as $style ) {
			/* Allow 0 values through, but don't allow empty style or undefined. */
			if ( ! isset( $style['value'] ) || ( empty( $style['value'] ) && ( $style['value'] !== 0 && $style['value'] !== '0' ) ) ) {
				continue;
			}
			$use_style = true;
		}

		if ( $use_style === false ) {
			return;
		}

		$css = $selectors . '{';
		foreach ( $styles as $style ) {
			if ( isset( $style['suffix'] ) && is_array( $style['suffix'] ) ) {
				$style['suffix'] = $style['suffix'][ $media_query ];
			}
			$css .= $this->add_styles( $style );
		}
		$css                         .= '}';
		$this->style[ $media_query ] .= $css;
	}

	/**
	 * Add responsive style.
	 *
	 * @param array  $styles    styles.
	 * @param string $selectors css selectors.
	 */
	final protected function add_responsive_style( $styles, $selectors ) {
		$media_queries = array( 'mobile', 'tablet', 'desktop' );
		foreach ( $media_queries as $media_query ) {
			$settings = $styles;
			foreach ( $settings as $index => $setting ) {
				if ( ! isset( $setting['value'] ) || ! isset( $setting['value'][ $media_query ] ) ) {
					continue;
				}
				$settings[ $index ]['value'] = $setting['value'][ $media_query ];
			}
			$this->add_style( $settings, $selectors, $media_query );
		}
	}

	/**
	 * Add color.
	 *
	 * Example parameters:
	 *    array(
	 *      'border-top-color-desktop' => array(
	 *          'css_prop'    => 'border-top-color',
	 *          'selectors'   => '#nv-primary-navigation .sub-menu',
	 *          'media-query' => 'desktop',
	 *      )
	 *  ), $color );
	 *
	 * @param array  $args  parameters.
	 * @param string $value value.
	 */
	final protected function add_color( $args, $value ) {
		$default = array(
			'selectors'   => '',
			'css_prop'    => '',
			'media_query' => 'mobile',
			'value'       => $value ? $value : null,
			'suffix'      => '',
			'prefix'      => '',
		);
		foreach ( $args as $style ) {
			$style = wp_parse_args( $style, $default );
			$setup = array(
				array(
					'css_prop' => esc_attr( $style['css_prop'] ),
					'value'    => esc_attr( $style['prefix'] . $value ),
					'suffix'   => esc_attr( $style['suffix'] ),
				),
			);
			$this->add_style( $setup, $style['selectors'], $style['media_query'] );
		}
	}

	/**
	 * Add styles.
	 *
	 * @param array $style [css_prop, value].
	 *
	 * @return string
	 */
	private function add_styles( $style ) {
		if ( ! isset( $style['css_prop'] ) || ! isset( $style['value'] ) || ( empty( $style['value'] ) && $style['value'] !== 0 && $style['value'] !== '0' ) ) {
			return '';
		}
		$suffix = isset( $style['suffix'] ) ? $style['suffix'] : '';


		if (
			in_array(
				$style['css_prop'],
				array(
					'font-family',
					'content',
				),
				true
			) &&
			! in_array( $style['value'], neve_get_standard_fonts(), true ) ) {
			return esc_attr( $style['css_prop'] ) . ':' . '"' . esc_attr( $style['value'] ) . '"' . esc_attr( $suffix ) . ';';
		}

		return esc_attr( $style['css_prop'] ) . ':' . esc_attr( $style['value'] ) . esc_attr( $suffix ) . ';';
	}

	/**
	 * Get the style.
	 *
	 * @param string $context ['mobile','desktop','tablet'].
	 *
	 * @return string
	 */
	final public function get_style( $context ) {
		$allowed_contexts = array( 'mobile', 'desktop', 'tablet' );
		if ( ! in_array( $context, $allowed_contexts, true ) ) {
			return '';
		}
		if ( ! array_key_exists( $context, $this->style ) ) {
			return '';
		}

		return $this->style[ $context ];
	}
}
