<?php
/**
 * Handles main customzier setup like root panels.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      20/08/2018
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Core\Settings\Mods;
use Neve\Customizer\Controls\React\Documentation_Section;
use Neve\Customizer\Controls\React\Instructions_Section;
use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Controls\Simple_Upsell;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Panel;
use Neve\Customizer\Types\Section;

/**
 * Main customizer handler.
 */
class Main extends Base_Customizer {
	/**
	 * Add controls.
	 */
	public function add_controls() {
		$this->register_types();
		$this->add_main_panels();
		$this->change_controls();
		$this->add_skin_switcher();
	}

	/**
	 * Register customizer controls type.
	 */
	private function register_types() {
		$this->register_type( 'Neve\Customizer\Controls\Radio_Image', 'control' );
		$this->register_type( 'Neve\Customizer\Controls\Range', 'control' );
		$this->register_type( 'Neve\Customizer\Controls\Responsive_Number', 'control' );
		$this->register_type( 'Neve\Customizer\Controls\Tabs', 'control' );
		$this->register_type( 'Neve\Customizer\Controls\Heading', 'control' );
		$this->register_type( 'Neve\Customizer\Controls\Checkbox', 'control' );
		$this->register_type( 'Neve\Customizer\Controls\Upsell_Control', 'control' );
	}

	/**
	 * Add main panels.
	 */
	private function add_main_panels() {
		$panels = array(
			'neve_layout'     => array(
				'priority' => 25,
				'title'    => __( 'Layout', 'neve' ),
			),
			'neve_typography' => array(
				'priority' => 35,

				'title'    => __( 'Typography', 'neve' ),
			),
		);

		foreach ( $panels as $panel_id => $panel ) {
			$this->add_panel(
				new Panel(
					$panel_id,
					array(
						'priority' => $panel['priority'],
						'title'    => $panel['title'],
					)
				)
			);
		}
		$this->wpc->add_section(
			new Instructions_Section(
				$this->wpc,
				'neve_typography_quick_links',
				array(
					'priority' => - 100,
					'panel'    => 'neve_typography',
					'type'     => 'hfg_instructions',
					'options'  => array(
						'quickLinks' => array(
							'neve_body_font_family'     => array(
								'label' => esc_html__( 'Change main font', 'neve' ),
								'icon'  => 'dashicons-editor-spellcheck',
							),
							'neve_headings_font_family' => array(
								'label' => esc_html__( 'Change headings font', 'neve' ),
								'icon'  => 'dashicons-heading',
							),
							'neve_h1_accordion_wrap'    => array(
								'label' => esc_html__( 'Change H1 font size', 'neve' ),
								'icon'  => 'dashicons-info-outline',
							),
							'neve_archive_typography_post_title' => array(
								'label' => esc_html__( 'Change archive font size', 'neve' ),
								'icon'  => 'dashicons-sticky',
							),
						),
					),
				)
			)
		);

		/**
		 * Documentation Section Main
		 */
		$docs_url = 'https://docs.themeisle.com/article/946-neve-doc?utm_medium=customizer&utm_source=docsbtn&utm_campaign=neve';
		$this->wpc->add_section(
			new Documentation_Section(
				$this->wpc,
				'neve_documentation',
				[
					'priority' => PHP_INT_MAX,
					'title'    => esc_html__( 'Neve', 'neve' ),
					'url'      => $docs_url,
				]
			)
		);
	}

	/**
	 * Change controls
	 */
	protected function change_controls() {
		$this->change_customizer_object( 'section', 'static_front_page', 'panel', 'neve_layout' );
		if ( neve_is_new_skin() ) {
			// Change default for shop columns WooCommerce option.
			$this->change_customizer_object( 'setting', 'woocommerce_catalog_columns', 'default', 3 );
		}
	}

	/**
	 * Add the skin switcher.
	 *
	 * @return void
	 * @since 3.0.0
	 */
	private function add_skin_switcher() {
		// If we started with the new skin this shouldn't show up at all.
		if ( get_theme_mod( 'neve_had_old_skin' ) === false ) {
			return;
		}

		// If we're not using the new builder. We don't show the switch & section.
		if ( ! neve_is_new_builder() ) {
			return;
		}

		// If the pro version exists but it's incompatible, we don't show the switch.
		if ( defined( 'NEVE_PRO_VERSION' ) ) {
			if ( ! neve_pro_has_support( 'skinv2' ) ) {
				return;
			}
		}

		$section = 'neve_style_section';

		$this->add_section(
			new Section(
				$section,
				[
					'priority' => 201,
					'title'    => esc_html__( 'Style', 'neve' ),
				]
			)
		);

		$this->add_control(
			new Control(
				'neve_new_skin',
				[
					'transport'         => 'postMessage',
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => 'new',
				],
				[
					'type'    => 'neve_skin_switcher',
					'section' => $section,
				]
			)
		);
	}
}
