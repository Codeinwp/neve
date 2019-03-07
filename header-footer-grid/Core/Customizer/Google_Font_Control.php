<?php
/**
 * Custom Control class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Customizer;

use WP_Customize_Manager;

/**
 * Class Google_Font_Control
 *
 * @package HFG\Core\Customizer
 */
class Google_Font_Control extends Abstract_Control {
	/**
	 * The type of control being rendered
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var string $type
	 */
	public $type = 'google_fonts';

	/**
	 * The list of Google Fonts
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var bool $font_list
	 */
	private $font_list = false;

	/**
	 * The saved font values decoded from json
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var array $font_values
	 */
	private $font_values = [];

	/**
	 * The index of the saved font within the list of Google fonts
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var int $font_list_index
	 */
	private $font_list_index = 0;

	/**
	 * The number of fonts to display from the json file. Either positive integer or 'all'. Default = 'all'
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var string|int $font_count
	 */
	private $font_count = 'all';

	/**
	 * The font list sort order. Either 'alpha' or 'popular'. Default = 'alpha'
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var string $font_order_by
	 */
	private $font_order_by = 'alpha';

	/**
	 * Google_Font_Control constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param WP_Customize_Manager $manager The Customize Manager.
	 * @param string               $id The control ID.
	 * @param array                $args The control args.
	 * @param array                $options Additional options.
	 */
	public function __construct( WP_Customize_Manager $manager, $id, $args = array(), $options = array() ) {
		parent::__construct( $manager, $id, $args );

		// Get the font sort order
		if ( isset( $this->input_attrs['orderby'] ) && strtolower( $this->input_attrs['orderby'] ) === 'popular' ) {
			$this->font_order_by = 'popular';
		}
		// Get the list of Google fonts
		if ( isset( $this->input_attrs['font_count'] ) && 'all' != strtolower( $this->input_attrs['font_count'] ) ) {
			$this->font_count = ( abs( (int) $this->input_attrs['font_count'] ) > 0 ? abs( (int) $this->input_attrs['font_count'] ) : 'all' );
		}
		$this->font_list = $this->getGoogleFonts( 'all' );
		// Decode the default json font value
		$this->font_values = json_decode( $this->value() );
		// Find the index of our default font within our list of Google fonts
		$this->font_list_index = $this->getFontIndex( $this->font_list, $this->font_values->font );
	}
	/**
	 * Enqueue our scripts and styles
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function enqueue() {
		wp_enqueue_script( 'hfg-select2-js', $this->hfg_settings->url . '/assets/js/select2.min.js', array( 'jquery' ), '4.0.6', true );
		wp_enqueue_script( 'hfg-custom-controls-js', $this->hfg_settings->url . '/assets/js/customizer/hfg_controls.js', array( 'hfg-select2-js' ), '1.0', true );
		wp_enqueue_style( 'hfg-custom-controls-css', $this->hfg_settings->url . '/assets/css/admin/hfg_controls.css', array(), '1.0', 'all' );
		wp_enqueue_style( 'hfg-select2-css', $this->hfg_settings->url . '/assets/css/admin/select2.min.css', array(), '4.0.6', 'all' );
	}

	/**
	 * Export our List of Google Fonts to JavaScript
	 *
	 * @since   1.0.0
	 * @access
	 */
	public function json() {
		$json                   = parent::json();
		$json['hfg-fonts-list'] = $this->font_list;

		return $json;
	}

	/**
	 * Render the control in the customizer
	 */
	public function render_content() {
		$font_counter    = 0;
		$is_font_in_list = false;
		$font_list_str   = '';
		$html            = '';
		if ( ! empty( $this->font_list ) ) {

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
			foreach ( $this->font_list as $value ) {
				$font_counter++;
				$font_list_str .= '<option value="' . $value->family . '" ' . selected( $this->font_values->font, $value->family, false ) . '>' . $value->family . '</option>';
				if ( $this->font_values->font === $value->family ) {
					$is_font_in_list = true;
				}
				if ( is_int( $this->font_count ) && $font_counter === $this->font_count ) {
					break;
				}
			}
			if ( ! $is_font_in_list && $this->font_list_index ) {
				// If the default or saved font value isn't in the list of displayed fonts, add it to the top of the list as the default font
				$font_list_str = '<option value="' . $this->font_list[ $this->font_list_index ]->family . '" ' . selected( $this->font_values->font, $this->font_list[ $this->font_list_index ]->family, false ) . '>' . $this->font_list[ $this->font_list_index ]->family . ' (default)</option>' . $font_list_str;
			}
			$html .= $font_list_str;
			$html .= '</select>';
			$html .= '</div>';
			$html .= '<div class="customize-control-description">Select weight &amp; style for regular text</div>';
			$html .= '<div class="weight-style">';
			$html .= '<select class="google-fonts-regularweight-style">';
			foreach ( $this->font_list[ $this->font_list_index ]->variants as $value ) {
				$html .= '<option value="' . $value . '" ' . selected( $this->font_values->regularweight, $value, false ) . '>' . $value . '</option>';
			}
			$html        .= '</select>';
			$html        .= '</div>';
			$html        .= '<div class="customize-control-description">Select weight for <italic>italic text</italic></div>';
			$html        .= '<div class="weight-style">';
			$html        .= '<select class="google-fonts-italicweight-style" ' . disabled( in_array( 'italic', $this->font_list[ $this->font_list_index ]->variants ), false, false ) . '>';
			$option_count = 0;
			foreach ( $this->font_list[ $this->font_list_index ]->variants as $value ) {
				if ( strpos( $value, 'italic' ) !== false ) {
					$html .= '<option value="' . $value . '" ' . selected( $this->font_values->italicweight, $value, false ) . '>' . $value . '</option>';
					$option_count++;
				}
			}
			if ( $option_count == 0 ) {
				$html .= '<option value="">Not Available for this font</option>';
			}
			$html        .= '</select>';
			$html        .= '</div>';
			$html        .= '<div class="customize-control-description">Select weight for <strong>bold text</strong></div>';
			$html        .= '<div class="weight-style">';
			$html        .= '<select class="google-fonts-boldweight-style">';
			$option_count = 0;
			foreach ( $this->font_list[ $this->font_list_index ]->variants as $value ) {
				if ( strpos( $value, 'italic' ) === false ) {
					$html .= '<option value="' . $value . '" ' . selected( $this->font_values->boldweight, $value, false ) . '>' . $value . '</option>';
					$option_count++;
				}
			}
			if ( $option_count == 0 ) {
				$html .= '<option value="">Not Available for this font</option>';
			}
			$html .= '</select>';
			$html .= '</div>';
			$html .= '<input type="hidden" class="google-fonts-category" value="' . $this->font_values->category . '">';
			$html .= '</div>';
		}
		echo  $html;
	}

	/**
	 * Find the index of the saved font in our multidimensional array of Google Fonts
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param array $haystack The haystack.
	 * @param mixed $needle The needle.
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
	 * @since   1.0.0
	 * @access  public
	 * @param int $count Limit for fonts to retrieve.
	 *
	 * @return array|string
	 */
	public function getGoogleFonts( $count = 30 ) {
		$font_file = $this->hfg_settings->path . '/assets/json/google-fonts-alphabetical.json';
		if ( $this->font_order_by === 'popular' ) {
			$font_file = $this->hfg_settings->path . '/assets/json/google-fonts-popularity.json';
		}

		$body = file_get_contents( $font_file );

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
