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
	}

}
