<?php
/**
 * Page settings metabox.
 *
 * @package Neve
 */

namespace Neve\Admin\Metabox;

/**
 * Class Metabox
 *
 * @package Neve\Admin\Metabox
 */
class Main extends Metabox_Base {
	/**
	 * Add controls.
	 */
	public function add_controls() {
		$this->add_control(
			new Controls\Radio(
				'neve_meta_container',
				array(
					'default' => 'default',
					'choices' => array(
						'default'    => __( 'Customizer Setting', 'neve' ),
						'contained'  => __( 'Contained', 'neve' ),
						'full-width' => __( 'Full Width', 'neve' ),
					),
					'label'   => __( 'Layout', 'neve' ),
				)
			)
		);
		$this->add_control(
			new Controls\Radio(
				'neve_meta_sidebar',
				array(
					'default' => 'default',
					'choices' => array(
						'default'    => __( 'Customizer Setting', 'neve' ),
						'left'       => __( 'Left Sidebar', 'neve' ),
						'right'      => __( 'Right Sidebar', 'neve' ),
						'full-width' => __( 'Full Width', 'neve' ),
					),
					'label'   => __( 'Sidebar', 'neve' ),
				)
			)
		);

	}

}
