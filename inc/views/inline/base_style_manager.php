<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Neve\Views\Inline
 */

namespace Neve\Views\Inline;

use Neve\Views\Base_View;
use Neve\Views\Inline\Base_Inline as Base_Inline;

/**
 * Class Style_Manager
 *
 * @package Neve\Views\Inline
 */
abstract class Base_Style_Manager extends Base_View {
	/**
	 * Style which the inline style will be hooked to.
	 *
	 * @var string
	 */
	protected $style_hook_handle = '';

	/**
	 * Will the style be enqueued in admin?
	 *
	 * @var bool
	 */
	protected $admin = false;

	/**
	 * Inline style handlers
	 *
	 * @var array
	 */
	protected $style_classes = array();

	/**
	 * The enqueued style handle.
	 *
	 * @var string
	 */
	protected $style_handle = '';

	/**
	 * Mobile style -> global.
	 *
	 * @var string
	 */
	private $style = '';

	/**
	 * Tablet style -> min-width: 769px.
	 *
	 * Reference #{$tablet} in scss.
	 *
	 * @var string
	 */
	private $tablet_style = '';

	/**
	 * Desktop style -> min-width 960px.
	 *
	 * Reference #{$laptop} in scss.
	 *
	 * @var string
	 */
	private $desktop_style = '';

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		if ( empty( $this->style_classes ) ) {
			return;
		}

		if ( $this->admin === true ) {
			add_action( 'enqueue_block_editor_assets', array( $this, 'maybe_enqueue' ), 100 );
		} else {
			add_action( 'wp_enqueue_scripts', array( $this, 'maybe_enqueue' ), 100 );
		}
	}

	/**
	 * Maybe enqueue the generated style if it exists.
	 */
	public function maybe_enqueue() {
		$this->run_inline_styles();
		$this->wrap_styles();
		wp_add_inline_style( $this->style_hook_handle, $this->get_style() );
	}

	/**
	 * Instantiate classes and get the style.
	 */
	private function run_inline_styles() {
		$this->style_classes = apply_filters( 'neve_filter_inline_style_classes', $this->style_classes, $this->style_handle );

		foreach ( $this->style_classes as $style_class ) {
			$class = new $style_class();

			$this->add_style( $class );
		}
	}

	/**
	 * Add the styles from the inline style object.
	 *
	 * @param \Neve\Views\Inline\Base_Inline $style_class the class that handles the style output.
	 */
	private function add_style( Base_Inline $style_class ) {
		$this->style         .= $style_class->get_style( 'mobile' );
		$this->tablet_style  .= $style_class->get_style( 'tablet' );
		$this->desktop_style .= $style_class->get_style( 'desktop' );
	}

	/**
	 * Wrap the responsive styles in media queries.
	 */
	private function wrap_styles() {
		if ( ! empty( $this->tablet_style ) ) {
			$this->tablet_style = '@media(min-width: 576px){' . $this->tablet_style . '}';
		}

		if ( ! empty( $this->desktop_style ) ) {
			$this->desktop_style = '@media(min-width: 960px){' . $this->desktop_style . '}';
		}
	}

	/**
	 * Get the whole style from component.
	 *
	 * @return string
	 */
	public function get_style() {
		$style = $this->style . $this->tablet_style . $this->desktop_style;
		$style = apply_filters( 'neve_style_output_' . $this->style_handle, $style );

		return preg_replace( '!\s+!', ' ', $style );
	}

	/**
	 * Get style from certain media query.
	 *
	 * @param string $query media query.
	 *
	 * @return string
	 */
	public function get_single_style( $query = '' ) {
		if ( empty( $query ) ) {
			return $this->style;
		}

		$accepted = array( 'tablet', 'desktop' );

		if ( ! in_array( $query, $accepted, true ) ) {
			return '';
		}

		if ( $query === 'tablet' ) {
			return $this->tablet_style;
		}

		if ( $query === 'desktop' ) {
			return $this->desktop_style;
		}
	}
}
