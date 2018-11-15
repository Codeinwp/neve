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

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Panel;
use Neve\Customizer\Types\Partial;
use Neve\Views\Header;

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
		$this->generic_partials();
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
		$this->register_type( 'Neve\Customizer\Controls\Multi_Select', 'control' );
		$this->register_type( 'Neve\Customizer\Controls\Reactive_Control', 'control' );
		$this->register_type( 'Neve\Customizer\Controls\Checkbox', 'control' );
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
			'neve_header'     => array(
				'priority' => 30,
				'title'    => __( 'Header', 'neve' ),
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
	}

	/**
	 * Change controls.
	 *
	 * @return void
	 */
	public function change_controls() {
		// Move `Site Identity` section to `Header` panel.
		$this->change_customizer_object( 'section', 'title_tagline', 'panel', 'neve_header' );

		// Change the transport for blogdescription, blogname and custom_logo.
		$this->change_customizer_object( 'setting', 'blogdescription', 'transport', $this->selective_refresh );
		$this->change_customizer_object( 'setting', 'blogname', 'transport', $this->selective_refresh );
		$this->change_customizer_object( 'setting', 'custom_logo', 'transport', $this->selective_refresh );
	}

	/**
	 * Add generic partials.
	 */
	private function generic_partials() {
		// Blog description.
		$this->add_partial(
			new Partial(
				'neve_description_partial',
				array(
					'selector'        => '.brand > small',
					'settings'        => array( 'blogdescription' ),
					'render_callback' => array( $this, 'blog_description_callback' ),
				)
			)
		);

		// Site logo.
		$this->add_partial(
			new Partial(
				'neve_site_logo_partial',
				array(
					'selector'        => '.site-logo > a',
					'settings'        => array( 'custom_logo', 'blogname' ),
					'render_callback' => array( $this, 'logo_callback' ),
				)
			)
		);

	}

	/**
	 * Blog description callback function
	 */
	public function blog_description_callback() {
		bloginfo( 'description' );
	}

	/**
	 * Logo callback
	 */
	public function logo_callback() {
		$header = new Header();

		return $header->get_logo();
	}
}
