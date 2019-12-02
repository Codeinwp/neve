<?php
/**
 * Header class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Builder;

use HFG\Main;

/**
 * Class Header
 *
 * @package HFG\Core\Builder
 */
class Header extends Abstract_Builder {

	/**
	 * Builder name.
	 */
	const BUILDER_NAME = 'header';

	/**
	 * Header init.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'title', __( 'Header', 'neve' ) );
		$this->set_property(
			'description',
			apply_filters(
				'hfg_header_panel_description',
				sprintf(
					/* translators: %s link to documentation */
					esc_html__( 'Design your %1$s by dragging, dropping and resizing all the elements in real-time. %2$s.', 'neve' ),
					/* translators: %s builder type */
					$this->get_property( 'title' ),
					/* translators: %s link text */
					sprintf(
						'<br/><a target="_blank" href="https://docs.themeisle.com/article/946-neve-doc#header">%s</a>',
						esc_html__( 'Read full documentation', 'neve' )
					)
				)
			)
		);
		$this->set_property(
			'instructions_array',
			array(
				'description' => sprintf(
					/* translators: %s builder type */
					esc_html__( 'Welcome to the %1$s builder! Click the “+” button to add a new component or follow the Quick Links.', 'neve' ),
					$this->get_property( 'title' )
				),
				'image'       => esc_url( get_template_directory_uri() . '/header-footer-grid/assets/images/customizer/hfg.mp4' ),
				'quickLinks'  => array(
					'custom_logo'                       => array(
						'label' => esc_html__( 'Change Logo', 'neve' ),
						'icon'  => 'dashicons-editor-customchar',
					),
					'hfg_header_layout_main_background' => array(
						'label' => esc_html__( 'Change Header Color', 'neve' ),
						'icon'  => 'dashicons-admin-appearance',
					),
					'primary-menu_shortcut'             => array(
						'label' => esc_html__( 'Change Menu', 'neve' ),
						'icon'  => 'dashicons-menu',
					),
				),
			)
		);
	}


	/**
	 * Method called via hook.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function load_template() {
		Main::get_instance()->load( 'header-wrapper' );
	}

	/**
	 * Get builder id.
	 *
	 * @return string Builder id.
	 */
	public function get_id() {
		return self::BUILDER_NAME;
	}

	/**
	 * Render builder row.
	 *
	 * @param string $device_id The device id.
	 * @param string $row_id The row id.
	 * @param array  $row_details Row data.
	 */
	public function render_row( $device_id, $row_id, $row_details ) {

		$name = $row_id;

		if ( $row_id === 'sidebar' && $device_id === 'mobile' ) {
			$name = 'mobile';
		}

		Main::get_instance()->load( 'row-wrapper', $name );
	}


	/**
	 * Return  the builder rows.
	 *
	 * @return array
	 * @since   1.0.0
	 * @updated 1.0.1
	 * @access  protected
	 */
	protected function get_rows() {
		return [
			'top'     => array(
				'title'       => esc_html__( 'Header Top', 'neve' ),
				'description' => $this->get_property( 'description' ),
			),
			'main'    => array(
				'title'       => esc_html__( 'Header Main', 'neve' ),
				'description' => $this->get_property( 'description' ),
			),
			'bottom'  => array(
				'title'       => esc_html__( 'Header Bottom', 'neve' ),
				'description' => $this->get_property( 'description' ),
			),
			'sidebar' => array(
				'title'       => esc_html__( 'Mobile menu content', 'neve' ),
				'description' => $this->get_property( 'description' ),
			),
		];
	}
}
