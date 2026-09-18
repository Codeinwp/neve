<?php
/**
 * Global header and footer visibility.
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Header_Footer_Visibility
 *
 * @package Neve\Customizer\Options
 */
class Header_Footer_Visibility extends Base_Customizer {

	/**
	 * Add customizer sections and controls.
	 */
	public function add_controls() {
		$parts = array(
			'header' => array(
				'panel' => 'hfg_header',
				'title' => esc_html__( 'Header Visibility', 'neve' ),
				'label' => esc_html__( 'Disable Header Globally', 'neve' ),
			),
			'footer' => array(
				'panel' => 'hfg_footer',
				'title' => esc_html__( 'Footer Visibility', 'neve' ),
				'label' => esc_html__( 'Disable Footer Globally', 'neve' ),
			),
		);

		foreach ( $parts as $part => $args ) {
			$this->add_section(
				new Section(
					'neve_' . $part . '_visibility',
					array(
						'priority' => 5,
						'title'    => $args['title'],
						'panel'    => $args['panel'],
					)
				)
			);

			$this->add_control(
				new Control(
					'neve_disable_' . $part,
					array(
						'default'           => false,
						'sanitize_callback' => 'neve_sanitize_checkbox',
						'transport'         => 'refresh',
					),
					array(
						'label'    => $args['label'],
						'section'  => 'neve_' . $part . '_visibility',
						'type'     => 'neve_toggle_control',
						'priority' => 5,
					)
				)
			);
		}
	}
}
