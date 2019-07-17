<?php
/**
 * Customizer upsells controls.
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Upsell_Control;
use Neve\Customizer\Types\Section;
use Neve\Customizer\Types\Control;

/**
 * Class Upsells
 *
 * @package Neve\Customizer\Options
 */
class Upsells extends Base_Customizer {

	/**
	 * Init function
	 *
	 * @return bool|void
	 */
	public function init() {
		if ( defined( 'NEVE_PRO_VERSION' ) ) {
			return false;
		}

		parent::init();
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'localize_upsell' ) );
	}

	/**
	 * Localize upsell script and send strings.
	 */
	public function localize_upsell() {
		wp_localize_script(
			'neve-customizer-controls',
			'upsellConfig',
			array(
				'button_url'  => esc_url( apply_filters( 'neve_upgrade_link_from_child_theme_filter', 'https://themeisle.com/themes/neve/upgrade/?utm_medium=customizer&utm_source=getpro&utm_campaign=neve' ) ),
				'button_text' => esc_html__( 'Get the PRO version!', 'neve' ),
				'text'        => esc_html__( 'Add new awesome header components, sticky and transparent menu, socials, and many more.', 'neve' ),
			)
		);
	}
	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_upsells();
		$this->control_upsells();
	}

	/**
	 * Add upsells section
	 */
	private function section_upsells() {
		$this->add_section(
			new Section(
				'neve_upsells_section',
				array(
					'priority' => 10,
					'title'    => esc_html__( 'View PRO Features', 'neve' ),
				)
			)
		);
	}

	/**
	 * Add upsells controls
	 */
	private function control_upsells() {
		$this->add_control(
			new Control(
				'neve_upsell_main_control',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'section'            => 'neve_upsells_section',
					'priority'           => 100,
					'options'            => array(
						esc_html__( 'Header Booster', 'neve' ),
						esc_html__( 'Blog Booster', 'neve' ),
						esc_html__( 'WooCommerce Booster', 'neve' ),
						esc_html__( 'Custom Layouts', 'neve' ),
						esc_html__( 'White Label module', 'neve' ),
						esc_html__( 'Scroll to Top module', 'neve' ),
						esc_html__( 'Elementor Booster', 'neve' ),
					),
					'explained_features' => array(
						esc_html__( 'Add new awesome header components, sticky and transparent menu, socials, and many more.', 'neve' ),
						esc_html__( 'Easily create custom headers and footers as well as adding your own custom code or content in any of the hooks locations.', 'neve' ),
						esc_html__( 'Leverage the true flexibility of Elementor with powerful addons and templates that you can import with just one click.', 'neve' ),
					),
					'button_url'         => esc_url( apply_filters( 'neve_upgrade_link_from_child_theme_filter', 'https://themeisle.com/themes/neve/upgrade/?utm_medium=customizer&utm_source=getpro&utm_campaign=neve' ) ),
					'button_text'        => esc_html__( 'Get the PRO version!', 'neve' ),
				),
				'Neve\Customizer\Controls\Upsell_Control'
			)
		);
	}
}
