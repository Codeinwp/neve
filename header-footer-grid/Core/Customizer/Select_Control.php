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
 * Class Select_Control
 *
 * @package HFG\Core\Customizer
 */
class Select_Control extends Abstract_Control {
	/**
	 * The type of control being rendered
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var string $type
	 */
	public $type = 'dropdown_select2';

	/**
	 * The type of Select2 Dropwdown to display. Can be either a single select dropdown or a multi-select dropdown. Either false for true. Default = false
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var bool $multiselect
	 */
	private $multiselect = false;

	/**
	 * The Placeholder value to display. Select2 requires a Placeholder value to be set when using the clear all option. Default = 'Please select...'
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var string $placeholder
	 */
	private $placeholder = '';

	/**
	 * Select_Control constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param WP_Customize_Manager $manager The Customize Manager.
	 * @param string               $id The control ID.
	 * @param array                $args The control args.
	 */
	public function __construct( $manager, $id, $args = array() ) {
		parent::__construct( $manager, $id, $args );

		$this->placeholder = __( 'Please select...', 'hfg-module' );

		// Check if this is a multi-select field
		if ( isset( $this->input_attrs['multiselect'] ) && $this->input_attrs['multiselect'] ) {
			$this->multiselect = true;
		}
		// Check if a placeholder string has been specified
		if ( isset( $this->input_attrs['placeholder'] ) && $this->input_attrs['placeholder'] ) {
			$this->placeholder = $this->input_attrs['placeholder'];
		}
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
	 * Render the control in the customizer
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_content() {
		$default_value = $this->value();
		if ( $this->multiselect ) {
			$default_value = explode( ',', $this->value() );
		}
		$html  = '
		<ul class="responsive-switchers">
			<li class="desktop">
				<button type="button" class="preview-desktop active" data-device="desktop">
					<i class="dashicons dashicons-desktop"></i>
				</button>
			</li>
			<li class="tablet">
				<button type="button" class="preview-tablet" data-device="tablet">
					<i class="dashicons dashicons-tablet"></i>
				</button>
			</li>
			<li class="mobile">
				<button type="button" class="preview-mobile" data-device="mobile">
					<i class="dashicons dashicons-smartphone"></i>
				</button>
			</li>
		</ul>
		';
		$html .= '<div class="dropdown_select2_control">';
		if ( ! empty( $this->label ) ) {
			$html .= '<label for="' . esc_attr( $this->id ) . '" class="customize-control-title">';
			$html .= esc_html( $this->label );
			$html .= '</label>';
		}
		if ( ! empty( $this->description ) ) {
			$html .= '<span class="customize-control-description">' . esc_html( $this->description ) . '</span>';
		}
		$html .= '<input type="hidden" id="' . esc_attr( $this->id ) . '" class="customize-control-dropdown-select2" value="' . esc_attr( $this->value() ) . '" name="' . esc_attr( $this->id ) . '" ' . $this->safe_echo( array( $this, 'link' ) ) . ' />';
		$html .= '<select name="select2-list-' . ( $this->multiselect ? 'multi[]' : 'single' ) . '" class="customize-control-select2" data-placeholder="' . $this->placeholder . '" ' . ( $this->multiselect ? 'multiple="multiple" ' : '' ) . '>';
		foreach ( $this->choices as $key => $value ) {
			if ( is_array( $value ) ) {
				$html .= '<optgroup label="' . esc_attr( $key ) . '">';
				foreach ( $value as $opt_group_key => $opt_group_value ) {
					$html .= '<option value="' . esc_attr( $opt_group_key ) . '" ' . ( in_array( esc_attr( $opt_group_key ), $default_value ) ? 'selected="selected"' : '' ) . '>' . esc_attr( $opt_group_value ) . '</option>';
				}
				$html .= '</optgroup>';
				continue;
			}
			$html .= '<option value="' . esc_attr( $key ) . '" ' . selected( esc_attr( $key ), $default_value, false ) . '>' . esc_attr( $value ) . '</option>';
		}
		$html .= '</select>';
		$html .= '</div>';

		echo $html;
	}
}
