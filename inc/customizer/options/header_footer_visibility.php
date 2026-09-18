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
	 * The parts that can be turned off, with the panel that holds the toggle.
	 *
	 * @var array<string, string>
	 */
	private $parts = array(
		'header' => 'hfg_header',
		'footer' => 'hfg_footer',
	);

	/**
	 * Add customizer sections and controls.
	 */
	public function add_controls() {
		foreach ( $this->parts as $part => $panel ) {
			$this->add_section(
				new Section(
					'neve_' . $part . '_visibility',
					array(
						'priority' => 5,
						'title'    => $part === 'header' ? esc_html__( 'Header Visibility', 'neve' ) : esc_html__( 'Footer Visibility', 'neve' ),
						'panel'    => $panel,
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
						'label'    => $part === 'header' ? esc_html__( 'Disable Header Globally', 'neve' ) : esc_html__( 'Disable Footer Globally', 'neve' ),
						'section'  => 'neve_' . $part . '_visibility',
						'type'     => 'neve_toggle_control',
						'priority' => 5,
					)
				)
			);
		}
	}
}
