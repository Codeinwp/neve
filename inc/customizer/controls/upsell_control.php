<?php
/**
 * The upsell customize control extends the WP_Customize_Control class.
 *
 * @package    Neve\Customizer\Controls
 * @since      2.3.10
 * @copyright  Copyright (c) 2017, Themeisle
 * @link       http://themeisle.com/
 * @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace Neve\Customizer\Controls;

/**
 * Radio image customize control.
 *
 * @since  2.3.10
 * @access public
 */
class Upsell_Control extends \WP_Customize_Control {

	/**
	 * The type of customize control being rendered.
	 *
	 * @since 2.3.10
	 * @var   string
	 */
	public $type = 'neve-control-upsell';

	/**
	 * Button text.
	 *
	 * @since 2.3.10
	 * @var   string
	 */
	public $button_text = '';

	/**
	 * Button link.
	 *
	 * @since 2.3.10
	 * @var   string
	 */
	public $button_url = '';

	/**
	 * List of features.
	 *
	 * @since 2.3.10
	 * @var   array
	 */
	public $options = array();

	/**
	 * List of explained features.
	 *
	 * @since 2.3.10
	 * @var   array
	 */
	public $explained_features = array();

	/**
	 * Label text for each feature.
	 *
	 * @since 2.3.10
	 * @var   string
	 */
	public $pro_label = '';

	/**
	 * Boolean to check if the pro label is displayed or not.
	 *
	 * @since 2.3.10
	 * @var   bool
	 */
	public $show_pro_label = true;

	/**
	 * Constructor.
	 *
	 * @param \WP_Customize_Manager $manager Customizer manager.
	 * @param string                $id      Control id.
	 * @param array                 $args    Argument.
	 */
	public function __construct( \WP_Customize_Manager $manager, $id, array $args ) {
		parent::__construct( $manager, $id, $args );
		$this->button_text;
		$this->pro_label = esc_html__( 'PRO', 'neve' );
	}

	/**
	 * Add custom JSON parameters to use in the JS template.
	 *
	 * @return array
	 */
	public function json() {
		$json                       = parent::json();
		$json['button_text']        = $this->button_text;
		$json['button_url']         = $this->button_url;
		$json['options']            = $this->options;
		$json['explained_features'] = $this->explained_features;
		$json['show_pro_label']     = $this->show_pro_label;
		$json['pro_label']          = $this->pro_label;
		return $json;
	}

	/**
	 * Underscore JS template to handle the control's output.
	 *
	 * @return void
	 */
	public function content_template() {
		?>
		<div class="nv-upsell">
			<# if ( data.options ) { #>
			<ul class="nv-upsell-features">
				<# for (option in data.options) { #>
				<li>
					<# if( data.show_pro_label === true ) { #>
					<span class="upsell-pro-label">{{ data.pro_label }}</span>
					<# } #>
					{{ data.options[option] }}
				</li>
				<# } #>
			</ul>
			<# } #>

			<# if ( data.button_text && data.button_url ) { #>
			<a target="_blank" href="{{ data.button_url }}" class="button button-primary" target="_blank">{{
				data.button_text }}</a>
			<# } #>

			<# if ( data.explained_features.length > 0 ) { #>
			<hr>
			<ul class="nv-upsell-feature-list">
				<# for (requirement in data.explained_features) { #>
				<li>* {{ data.explained_features[requirement] }}</li>
				<# } #>
			</ul>
			<# } #>
		</div>
		<?php
	}
}
