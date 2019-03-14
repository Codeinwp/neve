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

use ArrayIterator;
use CachingIterator;
use HFG\Core\Components\Abstract_Component;
use HFG\Core\Settings;

/**
 * Class Header
 *
 * @package HFG\Core\Builder
 */
class Header extends Abstract_Builder {

	/**
	 * Header constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function __construct() {
		$this->set_property( 'title', __( 'HFG Header', 'hfg-module' ) );
		$this->set_property( 'control_id', 'hfg_header_layout' );
		$this->set_property( 'panel', 'hfg_header' );
		$this->set_property( 'remove_panels', [ 'neve_header' ] );

		add_action( 'hfg_header_render', array( $this, 'header_render' ) );
		add_filter( 'theme_mod_' . $this->control_id, array( $this, 'filter_defaults' ) );
	}

	/**
	 * Utility method to generate defaults for JS and regular PHP calls.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param string $theme_mod The name of the mod.
	 *
	 * @return false|mixed|string
	 */
	public function filter_defaults( $theme_mod ) {
		if ( empty( $theme_mod ) || ! $theme_mod || is_object( $theme_mod ) && empty( json_decode( json_encode( $theme_mod ), true ) ) ) {
			return Settings::get_instance()->get_header_defaults_neve();
		}

		return $theme_mod;
	}

	/**
	 * Utility function to sort items by x.
	 *
	 * @since   1.0.0
	 * @access  private
	 * @param array $items List of items.
	 *
	 * @return array
	 */
	private function _sort_items_by_position( $items = array() ) {
		$ordered_items = array();

		foreach ( $items as $key => $item ) {
			$ordered_items[ $key ] = $item['x'];
		}

		array_multisort( $ordered_items, SORT_ASC, $items );

		return $items;
	}

	/**
	 * Method called via hook.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function header_render() {
		$html  = '<header id="masthead" class=" ' . $this->panel . ' site-header">';
		$html .= '<div id="masthead-inner" class="site-header-inner">';
		$html .= $this->render();
		$html .= '</div>';
		$html .= '</header>';
		echo $html;
	}

	/**
	 * Method to build mobile sidebar.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @param array $row Row list.
	 * @param array $classes Classes list.
	 *
	 * @return string
	 */
	protected function render_mobile_sidebar( $row, $classes ) {
		if ( empty( $row ) ) {
			return '';
		}

		$classes[] = 'header-menu-sidebar menu-sidebar-panel dark-mode';

		$html  = '<div id="header-menu-sidebar" class="' . esc_attr( join( ' ', $classes ) ) . '">';
		$html .= '<div id="header-menu-sidebar-bg" class="header-menu-sidebar-bg">';
		$html .= '<div id="header-menu-sidebar-inner" class="header-menu-sidebar-inner">';
		$html .= $this->render_row( $row, $html );
		$html .= '</div>';
		$html .= '</div>';
		$html .= '</div>';

		return $html;
	}

	/**
	 * Method to render a row.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @param array  $row Row list.
	 * @param string $html The HTML.
	 */
	protected function render_row( $row, &$html ) {
		$max_columns = 12;
		$last_item   = null;

		$collection = new CachingIterator(
			new ArrayIterator(
				$row
			), CachingIterator::TOSTRING_USE_CURRENT
		);
		foreach ( $collection as $component_location ) {
			/**
			 * An instance of Abstract_Component
			 *
			 * @var Abstract_Component $component
			 */
			$component = $this->builder_components[ $component_location['id'] ];
			$x         = intval( $component_location['x'] );
			$width     = intval( $component_location['width'] );
			if ( ! $collection->hasNext() && ( $x + $width < $max_columns ) ) {
				$width += $max_columns - ( $x + $width );
			}

			$push_left = '';
			if ( $x > 0 && $last_item !== null ) {
				$o = intval( $last_item['width'] ) + intval( $last_item['x'] );
				if ( $x - $o > 0 ) {
					$x         = $x - $o;
					$push_left = 'off-' . $x;
				}
			} elseif ( $x > 0 ) {
				$push_left = 'off-' . $x;
			}

			$component->current_x     = $x;
			$component->current_width = $width;

			$html .= '<div class="hfg-col-' . $width . '_md-' . $width . '_sm-' . $width . ' builder-item" data-push-left="' . $push_left . '">';
			$html .= $component->render();
			$html .= '</div>';

			$last_item = $component_location;
		}
	}

	/**
	 * Render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return string
	 */
	public function render() {
		$html          = '';
		$layout        = json_decode( get_theme_mod( $this->control_id, Settings::get_instance()->get_header_defaults_neve() ), true );
		$desktop_items = $layout['desktop'];
		$mobile_items  = $layout['mobile'];
		foreach ( $layout as $device_name => $device ) {
			$classes = array();

			if ( $device_name === 'desktop' && ! empty( $mobile_items ) ) {
				$classes[] = 'hide-on-mobile hide-on-tablet';
			}

			if ( $device_name === 'mobile' && ! empty( $desktop_items ) ) {
				$classes[] = 'hide-on-desktop';
			}

			foreach ( $device as $index => $row ) {

				if ( $index === 'sidebar' && $device_name === 'mobile' ) {
					$html .= $this->render_mobile_sidebar( $row, $classes );
					continue;
				}

				if ( empty( $row ) ) {
					continue;
				}

				$classes[] = get_theme_mod( $this->control_id . '_' . $index . '_layout', 'layout-full-contained' );
				$skin_mode = get_theme_mod( $this->control_id . '_' . $index . '_skin', 'light-mode' );

				$row_styles       = '';
				$row_styles_array = [];
				$row_height       = get_theme_mod( $this->control_id . '_' . $index . '_height' . '_' . $device_name, 'auto' );
				if ( $row_height ) {
					$row_styles_array['height'] = 'auto;';
					if ( intval( $row_height ) > 0 ) {
						$row_styles_array['height'] = $row_height . 'px;';
					}
				}

				if ( ! empty( $row_styles_array ) ) {
					$row_styles = ' style="';
					foreach ( $row_styles_array as $key => $value ) {
						$row_styles .= sprintf( '%1$s: %2$s', $key, $value );
					}
					$row_styles .= '" ';
				}

				$html .= '<div class="header-' . $index . ' ' . join( ' ', $classes ) . ' header--row" id="cb-row--header-' . $index . '" data-row-id="' . $index . '" data-show-on="' . $device_name . '">';
				$html .= '<div class="header--row-inner header-' . $index . '-inner ' . $skin_mode . '"' . $row_styles . '>';
				$html .= '<div class="hfg-container">';
				$html .= '<div class="hfg-grid hfg-grid-' . $index . '">';
				$html .= $this->render_row( $row, $html );
				$html .= '</div>';
				$html .= '</div>';
				$html .= '</div>';
				$html .= '</div>';
			}
		}

		return $html;
	}


	/**
	 * Return  the builder rows.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @return array
	 */
	protected function get_rows() {
		return [
			'top'     => 'Header Top',
			'main'    => 'Header Main',
			'bottom'  => 'Header Bottom',
			'sidebar' => 'Menu Sidebar',
		];
	}
}
