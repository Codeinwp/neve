<?php
/**
 * Footer layout section.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      20/08/2018
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Partial;
use Neve\Customizer\Types\Section;
use Neve\Views\Footer;

/**
 * Class Layout_Footer
 *
 * @package Neve\Customizer\Options
 */
class Layout_Footer extends Base_Customizer {
	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_footer();
		$this->tabs();
		$this->control_footer_widget_areas();
		$this->control_footer_content_type();
		$this->control_footer_text();
		$this->partial_refresh();
	}

	/**
	 * Add customize section
	 */
	private function section_footer() {
		$this->add_section(
			new Section(
				'neve_footer',
				array(
					'priority' => 40,
					'title'    => esc_html__( 'Footer', 'neve' ),
					'panel'    => 'neve_layout',
				)
			)
		);
	}

	/**
	 * Add UI elements section
	 */
	private function tabs() {
		$this->add_control(
			new Control(
				'neve_footer_ui_tabs',
				array(
					'sanitize_callback' => 'sanitize_text_field',
					'transport'         => $this->selective_refresh,
				),
				array(
					'section'  => 'neve_footer',
					'priority' => - 3,
					'tabs'     => array(
						'footer_content' => array(
							'label' => esc_html__( 'Content', 'neve' ),
						),
						'footer_widgets' => array(
							'label' => esc_html__( 'Widgets', 'neve' ),
						),
					),
					'controls' => array(
						'footer_content' => array(
							'neve_footer_content_type' => array(
								'text'        => array( 'neve_footer_text' ),
								'none'        => array(),
								'footer_menu' => array(),
							),
						),
						'footer_widgets' => array(
							'neve_footer_widget_columns' => array(),
						),
					),
				),
				'Neve\Customizer\Controls\Tabs'
			)
		);
	}

	/**
	 * Add footer widgets area control
	 */
	private function control_footer_widget_areas() {
		$this->add_control(
			new Control(
				'neve_footer_widget_columns',
				array(
					'default'           => '3',
					'sanitize_callback' => 'absint',
				),
				array(
					'label'    => esc_html__( 'Widget Columns', 'neve' ),
					'section'  => 'neve_footer',
					'priority' => 20,
					'type'     => 'select',
					'choices'  => array(
						'1' => '1',
						'2' => '2',
						'3' => '3',
						'4' => '4',
					),
				)
			)
		);
	}

	/**
	 * Add footer content controls
	 */
	private function control_footer_content_type() {
		$this->add_control(
			new Control(
				'neve_footer_content_type',
				array(
					'transport'         => $this->selective_refresh,
					'sanitize_callback' => array( $this, 'sanitize_footer_content_type' ),
					'default'           => 'text',
				),
				array(
					'priority'    => 30,
					'section'     => 'neve_footer',
					'label'       => esc_html__( 'Content Type', 'neve' ),
					'choices'     => array(
						'none'        => esc_html__( 'None', 'neve' ),
						'text'        => esc_html__( 'Text', 'neve' ),
						'footer_menu' => esc_html__( 'Footer  Menu', 'neve' ),
					),
					'subcontrols' => array(
						'none'        => array(),
						'footer_menu' => array(),
						'text'        => array(
							'neve_footer_text',
						),
					),
				),
				'Neve\Customizer\Controls\Reactive_Control'
			)
		);
	}

	/**
	 * Footer content render callback.
	 */
	public function footer_content_callback() {
		$footer = new Footer();
		$footer->render_footer_content();
	}

	/**
	 * Add control for footer text.
	 */
	private function control_footer_text() {
		$this->add_control(
			new Control(
				'neve_footer_text',
				array(
					'transport'         => $this->selective_refresh,
					'sanitize_callback' => 'wp_kses_post',
					'default'           => sprintf(
						/* translators: %1$s is Theme Name (Neve), %2$s is WordPress */
						esc_html__( '%1$s | Powered by %2$s', 'neve' ),
						wp_kses_post( '<a href="https://themeisle.com/themes/neve/" target="_blank" rel="nofollow">Neve</a>' ),
						wp_kses_post( '<a href="http://wordpress.org" rel="nofollow">WordPress</a>' )
					),
				),
				array(
					'priority' => 35,
					'section'  => 'neve_footer',
					'label'    => esc_html__( 'Section Content', 'neve' ),
					'type'     => 'textarea',
				)
			)
		);
	}

	/**
	 * Sanitize the container layout value
	 *
	 * @param string $value value from the control.
	 *
	 * @return bool
	 */
	public function sanitize_footer_content_type( $value ) {
		$allowed_values = array( 'none', 'text', 'footer_menu' );
		if ( ! in_array( $value, $allowed_values ) ) {
			return 'text';
		}

		return esc_html( $value );
	}

	/**
	 * Partial refresh
	 */
	private function partial_refresh() {
		$this->add_partial(
			new Partial(
				'neve_footer_content_partial',
				array(
					'selector'            => '.footer-second-section',
					'settings'            => array( 'neve_footer_content_type', 'neve_footer_text' ),
					'render_callback'     => array( $this, 'footer_content_callback' ),
					'container_inclusive' => true,
				)
			)
		);
	}

}
