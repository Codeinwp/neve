<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      2019-10-16
 *
 * @package InstructionsSection.php
 */

namespace HFG\Core\Customizer;

/**
 * Customizer section representing widget area (sidebar).
 *
 * @package    WordPress
 * @subpackage Customize
 * @since      4.1.0
 * @see        WP_Customize_Section
 */
class Instructions_Section extends \WP_Customize_Section {

	/**
	 * Type of this section.
	 *
	 * @var string
	 */
	public $type = 'hfg_instructions';

	/**
	 * Constructor.
	 *
	 * @param \WP_Customize_Manager $manager Customizer bootstrap instance.
	 * @param string                $id      ID of the section.
	 * @param array                 $args    Arguments.
	 */
	public function __construct( $manager, $id, $args = array() ) {
		parent::__construct( $manager, $id, $args );
	}

	/**
	 * Render template.
	 */
	protected function render_template() {
		?>
		<li id="accordion-section-{{ data.id }}" class="hfg-instructions-section">
			<img src="<?php echo esc_url( get_template_directory_uri() . '/header-footer-grid/assets/images/customizer/adding-widget.gif' ); ?>"/>
		</li>
		<?php
	}
}


