<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 * @package Neve\Views\Inline
 */

namespace Neve\Views\Inline;


use Neve\Views\Base_View;
use Neve\Views\Inline\Base_Inline as Base_Inline;

class Style_Manager extends Base_View {

	/**
	 * Generated inline style path.
	 *
	 * @var string
	 */
	private $style_path = '/neve/inline-style.css';

	/**
	 * Inline style handlers
	 *
	 * @var array
	 */
	private $style_classes = array(
		'Typography'
	);

	/**
	 * Mobile style -> global.
	 *
	 * @var string
	 */
	private $style = '';

	/**
	 * Tablet style -> min-width: 768px.
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
		$this->run_inline_styles();
		$this->wrap_styles();

		add_action( 'wp_enqueue_scripts', array( $this, 'inline_style' ) );
	}

	public function inline_style() {
		wp_add_inline_style( 'neve-style', $this->get_style() );
	}

	private function run_inline_styles() {
		foreach ( $this->style_classes as $style_class ) {
			$class_name = '\\Neve\\Views\\Inline\\' . $style_class;
			if ( ! class_exists( $class_name ) ) {
				continue;
			}
			$class = new $class_name();

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
			$this->tablet_style = '@media(min-width: 768px){' . $this->tablet_style . '}';
		}

		if ( ! empty( $this->desktop_style ) ) {
			$this->desktop_style = '@media(min-width: 960px){' . $this->desktop_style . '}';
		}
	}

	/**
	 * Get the whole style.
	 *
	 * @return string
	 */
	private function get_style() {
		return esc_attr( $this->style . $this->tablet_style . $this->desktop_style );
	}

}