<?php
namespace HFG\Core\Customizer;

use HFG\Core\Settings;
use WP_Customize_Control;
use WP_Customize_Manager;

class Select_Control extends WP_Customize_Control {
	/**
	 * The type of control being rendered
	 */
	public $type = 'dropdown_select2';

	/**
	 * The type of Select2 Dropwdown to display. Can be either a single select dropdown or a multi-select dropdown. Either false for true. Default = false
	 */
	private $multiselect = false;

	/**
	 * The Placeholder value to display. Select2 requires a Placeholder value to be set when using the clear all option. Default = 'Please select...'
	 */
	private $placeholder = '';

	public $hfg_settings;

	/**
	 * Constructor
	 *
	 * @param WP_Customize_Manager $manager
	 * @param string $id
	 * @param array $args
	 */
	public function __construct( $manager, $id, $args = array() ) {
		parent::__construct( $manager, $id, $args );

		$this->placeholder = __( 'Please select...', 'hfg-module' );
		$this->hfg_settings = Settings::get_instance();

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
	 */
	public function enqueue() {
		wp_enqueue_script( 'hfg-select2-js', $this->hfg_settings->url . '/assets/js/select2.min.js', array( 'jquery' ), '4.0.6', true );
		wp_enqueue_script( 'hfg-custom-controls-js', $this->hfg_settings->url . '/assets/js/customizer/hfg_controls.js', array( 'hfg-select2-js' ), '1.0', true );
		wp_enqueue_style( 'hfg-custom-controls-css', $this->hfg_settings->url . '/assets/css/admin/hfg_controls.css', array(), '1.0', 'all' );
		wp_enqueue_style( 'hfg-select2-css', $this->hfg_settings->url . '/assets/css/admin/select2.min.css', array(), '4.0.6', 'all' );
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
		$defaultValue = $this->value();
		if ( $this->multiselect ) {
			$defaultValue = explode( ',', $this->value() );
		}

		$html = '<div class="dropdown_select2_control">';
		if( !empty( $this->label ) ) {
			$html .= '<label for="' . esc_attr( $this->id ) . '" class="customize-control-title">';
			$html .= esc_html( $this->label );
			$html .= '</label>';
		}
		if( !empty( $this->description ) ) {
			$html .= '<span class="customize-control-description">' . esc_html( $this->description ) . '</span>';
		}
		$html .= '<input type="hidden" id="' . esc_attr( $this->id ) . '" class="customize-control-dropdown-select2" value="' . esc_attr( $this->value() ) . '" name="' . esc_attr( $this->id ) . '" ' . $this->safe_echo( array( $this, 'link' ) ) . ' />';
		$html .= '<select name="select2-list-' . ( $this->multiselect ? 'multi[]' : 'single' ) . '" class="customize-control-select2" data-placeholder="' . $this->placeholder . '" ' . ( $this->multiselect ? 'multiple="multiple" ' : '' ) . '>';
		foreach ( $this->choices as $key => $value ) {
			if ( is_array( $value ) ) {
				$html .= '<optgroup label="' . esc_attr( $key ) . '">';
				foreach ( $value as $opt_group_key => $opt_group_value ) {
					$html .= '<option value="' . esc_attr( $opt_group_key ) . '" ' . ( in_array( esc_attr( $opt_group_key ), $defaultValue ) ? 'selected="selected"' : '' ) . '>' . esc_attr( $opt_group_value ) . '</option>';
				}
				$html .= '</optgroup>';
				continue;
			}
			$html .= '<option value="' . esc_attr( $key ) . '" ' . selected( esc_attr( $key ), $defaultValue, false )  . '>' . esc_attr( $value ) . '</option>';
		}
		$html .= '</select>';
		$html .= '</div>';

		echo $html;
	}
}