<?php
/**
 * Simple upsell customizer section.
 *
 * @package Neve
 */

namespace Neve\Customizer\Controls;

/**
 * Customizer section.
 *
 * @since  2.8.3
 * @see        WP_Customize_Section
 */
class Simple_Upsell_Section extends \WP_Customize_Section {
	/**
	 * Type of this section.
	 *
	 * @var string
	 */
	public $type = 'nv_simple_upsell_section';

	/**
	 * Button text.
	 *
	 * @var   string
	 */
	public $button_text = '';

	/**
	 * Button link.
	 *
	 * @var   string
	 */
	public $link = '';

	/**
	 * List of features.
	 *
	 * @var   string
	 */
	public $text = '';

	/**
	 * Instructions_Control constructor.
	 *
	 * @param WP_Customize_Manager $manager customize manager.
	 * @param string               $id control ID.
	 * @param array                $args control args.
	 */
	public function __construct( $manager, $id, $args = array() ) {
		parent::__construct( $manager, $id, $args );
	}
	/**
	 * Gather the parameters passed to client JavaScript via JSON.
	 *
	 * @return array The array to be exported to the client as JSON.
	 */
	public function json() {
		$json                = parent::json();
		$json['button_text'] = $this->button_text;
		$json['link']        = $this->link;
		$json['text']        = $this->text;

		return $json;
	}

	/**
	 * Render template.
	 */
	protected function render_template() {
		?>
		<li id="accordion-section-{{ data.id }}" class="control-section-{{ data.type }}">
			<div class="nv-simple-upsell">
				<# if( data.text ) { #>
					<p>{{data.text}}</p>
				<# } #>
				<# if( data.link && data.button_text ) { #>
					<a href="{{data.link}}" class='button button-secondary'>
						{{data.button_text}}
					</a>
				<# } #>
			</div>
		</li>
		<?php
	}
}


