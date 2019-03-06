<?php
namespace HFG\Core\Customizer;

use HFG\Core\Settings;
use WP_Customize_Control;
use WP_Customize_Manager;

class Google_Font_Control extends WP_Customize_Control {
	/**
	 * The type of control being rendered
	 */
	public $type = 'google_fonts';

	/**
	 * The list of Google Fonts
	 */
	private $fontList = false;

	/**
	 * The saved font values decoded from json
	 */
	private $fontValues = [];

	/**
	 * The index of the saved font within the list of Google fonts
	 */
	private $fontListIndex = 0;

	/**
	 * The number of fonts to display from the json file. Either positive integer or 'all'. Default = 'all'
	 */
	private $fontCount = 'all';

	/**
	 * The font list sort order. Either 'alpha' or 'popular'. Default = 'alpha'
	 */
	private $fontOrderBy = 'alpha';

	public $hfg_settings;

	/**
	 * Get our list of fonts from the json file
	 *
	 * @param WP_Customize_Manager $manager
	 * @param $id
	 * @param array                $args
	 * @param array                $options
	 */
	public function __construct( WP_Customize_Manager $manager, $id, $args = array(), $options = array() ) {
		parent::__construct( $manager, $id, $args );

		$this->hfg_settings = Settings::get_instance();

		// Get the font sort order
		if ( isset( $this->input_attrs['orderby'] ) && strtolower( $this->input_attrs['orderby'] ) === 'popular' ) {
			$this->fontOrderBy = 'popular';
		}
		// Get the list of Google fonts
		if ( isset( $this->input_attrs['font_count'] ) && 'all' != strtolower( $this->input_attrs['font_count'] ) ) {
			$this->fontCount = ( abs( (int) $this->input_attrs['font_count'] ) > 0 ? abs( (int) $this->input_attrs['font_count'] ) : 'all' );
		}
		$this->fontList = $this->getGoogleFonts( 'all' );
		// Decode the default json font value
		$this->fontValues = json_decode( $this->value() );
		// Find the index of our default font within our list of Google fonts
		$this->fontListIndex = $this->getFontIndex( $this->fontList, $this->fontValues->font );
	}
	/**
	 * Enqueue our scripts and styles
	 */
	public function enqueue() {
		wp_enqueue_script( 'hfg-select2-js', $this->hfg_settings->url . '/assets/js/select2.min.js', array( 'jquery' ), '4.0.6', true );
		wp_enqueue_script( 'hfg-custom-controls-js', $this->hfg_settings->url . '/assets/js/customizer/hfg_controls.js', array( 'hfg-select2-js' ), '1.0', true );
		wp_enqueue_style( 'hfg-custom-controls-css', $this->hfg_settings->url . '/assets/css/admin/hfg_controls.css', array(), '1.0', 'all' );
		wp_enqueue_style( 'hfg-select2-css', $this->hfg_settings->url . '/assets/css/admin/select2.min.css', array(), '4.0.6', 'all' );
	}

	/**
	 * Export our List of Google Fonts to JavaScript
	 */
	public function to_json() {
		parent::to_json();
		$this->json['hfg-fonts-list'] = $this->fontList;
	}

	private function safe_echo( $function ) {
		ob_start();
		call_user_func( $function );
		return  ob_get_clean();
	}

	/**
	 * Render the control in the customizer
	 */
	public function render_content() {
		$fontCounter = 0;
		$isFontInList = false;
		$fontListStr = '';
		$html = '';
		if ( ! empty( $this->fontList ) ) {

			$html .= '<div class="google_fonts_select_control">';
			if ( ! empty( $this->label ) ) {
				$html .= '<span class="customize-control-title">' . esc_html( $this->label ) . '</span>';
			}
			if ( ! empty( $this->description ) ) {
				$html .= '<span class="customize-control-description">' . esc_html( $this->description ) . '</span>';
			}
			$html .= '<input type="hidden" id="' . esc_attr( $this->id ) . '" name="' . esc_attr( $this->id ) . '" value="' . esc_attr( $this->value() ) . '" class="customize-control-google-font-selection" ' . $this->safe_echo( array( $this, 'link' ) ) . ' />';
			$html .= '<div class="google-fonts">';
			$html .= '<select class="google-fonts-list" control-name="' . esc_attr( $this->id ) . '">';
			foreach ( $this->fontList as $value ) {
				$fontCounter++;
				$fontListStr .= '<option value="' . $value->family . '" ' . selected( $this->fontValues->font, $value->family, false ) . '>' . $value->family . '</option>';
				if ( $this->fontValues->font === $value->family ) {
					$isFontInList = true;
				}
				if ( is_int( $this->fontCount ) && $fontCounter === $this->fontCount ) {
					break;
				}
			}
			if ( ! $isFontInList && $this->fontListIndex ) {
				// If the default or saved font value isn't in the list of displayed fonts, add it to the top of the list as the default font
				$fontListStr = '<option value="' . $this->fontList[ $this->fontListIndex ]->family . '" ' . selected( $this->fontValues->font, $this->fontList[ $this->fontListIndex ]->family, false ) . '>' . $this->fontList[ $this->fontListIndex ]->family . ' (default)</option>' . $fontListStr;
			}
			$html .= $fontListStr;
			$html .= '</select>';
			$html .= '</div>';
			$html .= '<div class="customize-control-description">Select weight &amp; style for regular text</div>';
			$html .= '<div class="weight-style">';
			$html .= '<select class="google-fonts-regularweight-style">';
			foreach ( $this->fontList[ $this->fontListIndex ]->variants as $value ) {
				$html .= '<option value="' . $value . '" ' . selected( $this->fontValues->regularweight, $value, false ) . '>' . $value . '</option>';
			}
			$html .= '</select>';
			$html .= '</div>';
			$html .= '<div class="customize-control-description">Select weight for <italic>italic text</italic></div>';
			$html .= '<div class="weight-style">';
			$html .= '<select class="google-fonts-italicweight-style" ' . disabled( in_array( 'italic', $this->fontList[ $this->fontListIndex ]->variants ), false, false ) . '>';
			$optionCount = 0;
			foreach ( $this->fontList[ $this->fontListIndex ]->variants as $value ) {
				if ( strpos( $value, 'italic' ) !== false ) {
					$html .= '<option value="' . $value . '" ' . selected( $this->fontValues->italicweight, $value, false ) . '>' . $value . '</option>';
					$optionCount++;
				}
			}
			if ( $optionCount == 0 ) {
				$html .= '<option value="">Not Available for this font</option>';
			}
			$html .= '</select>';
			$html .= '</div>';
			$html .= '<div class="customize-control-description">Select weight for <strong>bold text</strong></div>';
			$html .= '<div class="weight-style">';
			$html .= '<select class="google-fonts-boldweight-style">';
			$optionCount = 0;
			foreach ( $this->fontList[ $this->fontListIndex ]->variants as $value ) {
				if ( strpos( $value, 'italic' ) === false ) {
					$html .= '<option value="' . $value . '" ' . selected( $this->fontValues->boldweight, $value, false ) . '>' . $value . '</option>';
					$optionCount++;
				}
			}
			if ( $optionCount == 0 ) {
				$html .= '<option value="">Not Available for this font</option>';
			}
			$html .= '</select>';
			$html .= '</div>';
			$html .= '<input type="hidden" class="google-fonts-category" value="' . $this->fontValues->category . '">';
			$html .= '</div>';
		}
		echo  $html;
	}

	/**
	 * Find the index of the saved font in our multidimensional array of Google Fonts
	 *
	 * @param $haystack
	 * @param $needle
	 *
	 * @return bool|int|string
	 */
	public function getFontIndex( $haystack, $needle ) {
		foreach ( $haystack as $key => $value ) {
			if ( $value->family == $needle ) {
				return $key;
			}
		}
		return false;
	}

	/**
	 * Return the list of Google Fonts from our json file. Unless otherwise specified, list will be limited to 30 fonts.
	 *
	 * @param int $count
	 *
	 * @return array|string
	 */
	public function getGoogleFonts( $count = 30 ) {
		$fontFile = $this->hfg_settings->path . '/assets/json/google-fonts-alphabetical.json';
		if ( $this->fontOrderBy === 'popular' ) {
			$fontFile = $this->hfg_settings->path . '/assets/json/google-fonts-popularity.json';
		}

		$body = file_get_contents( $fontFile );

		if ( empty( $body ) ) {
			return [];
		}

		$content = json_decode( $body );
		if ( $count == 'all' ) {
			return $content->items;
		}
		return array_slice( $content->items, 0, $count );
	}
}
