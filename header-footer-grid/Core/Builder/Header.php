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
		$this->set_property( 'description', __( 'Header', 'neve' ) );
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
		$description = sprintf(
			/* translators: %s link to documentation */
			esc_html__( 'You can easily drag-and-drop and arrange the available components you can find at the bottom of the builder. Each component has specific options you can customize once that component is clicked on. Also, each component\'s width can be adjusted so that it corresponds to your needs. %s.', 'neve' ),
			/* translators: %s link text */
			sprintf(
				'<a target="_blank" href="https://docs.themeisle.com/article/946-neve-doc#header">%s</a>',
				esc_html__( 'Read full documentation', 'neve' )
			)
		);

		return [
			'top'     => array(
				'title'       => esc_html__( 'Header Top', 'neve' ),
				'description' => $description,
			),
			'main'    => array(
				'title'       => esc_html__( 'Header Main', 'neve' ),
				'description' => $description,
			),
			'bottom'  => array(
				'title'       => esc_html__( 'Header Bottom', 'neve' ),
				'description' => $description,
			),
			'sidebar' => array(
				'title'       => esc_html__( 'Header Sidebar', 'neve' ),
				'description' => $description,
			),
		];
	}
}
