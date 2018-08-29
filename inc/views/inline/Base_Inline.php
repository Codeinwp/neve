<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 * @package Neve\Views\Inline
 */

namespace Neve\Views\Inline;

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
	 * Tablet style
	 *
	 * @var string
	 */
	private $tablet_style = '';

	/**
	 * Desktop style
	 *
	 * @var string
	 */
	private $desktop_style = '';

	/**
	 * Final
	 */

	/**
	 * Base_Inline constructor.
	 */
	public function __construct() {
		$this->init();
	}

	/**
	 * Do all actions necessary.
	 *
	 * @return mixed
	 */
	abstract public function init();

	/**
	 * @param        $styles
	 * @param        $selectors
	 * @param string $media_query
	 */
	protected final function add_style( $styles, $selectors, $media_query = 'mobile' ) {
		if ( ! in_array( $media_query, array( 'mobile', 'tablet', 'desktop' ) ) ) {
			return;
		}
		if ( empty( $styles ) || empty( $selectors ) ) {
			return;
		}

		$css = $selectors . '{';
		foreach ( $styles as $id => $style ) {
			$css .= $this->add_styles( $style );
		}
		$css                         .= '}';
		$this->style[ $media_query ] .= $css;
	}

	/**
	 * Add styles.
	 *
	 * @param array $style [css_prop, value]
	 *
	 * @return string
	 */
	private function add_styles( $style ) {
		$suffix = isset( $style['suffix'] ) ? $style['suffix'] : '';

		return $style['css_prop'] . ':' . $style['value'] . $suffix . ';';
	}

	/**
	 * @param string $context ['mobile','desktop','tablet'].
	 *
	 * @return string
	 */
	public final function get_style( $context ) {
		$allowed_contexts = array( 'mobile', 'desktop', 'tablet' );
		if ( ! in_array( $context, $allowed_contexts ) ) {
			return '';
		}

		return $this->style[ $context ];
	}

}