<?php

namespace HFG\Core\Builder;

use ArrayIterator;
use CachingIterator;
use HFG\Core\Abstract_Component;

class Header extends Abstract_Builder {

	public function __construct() {
		$this->set_property( 'title', __( 'HFG Header', 'hfg-module' ) );
		$this->set_property( 'control_id', 'hfg_header_layout' );
		$this->set_property( 'panel', 'hfg_header' );
		$this->set_property( 'remove_panels', [ 'neve_header' ] );

		add_action( 'hfg-header-render', array( $this, 'header_render' ) );
	}

	private function _sort_items_by_position( $items = array() ) {
		$ordered_items = array();

		foreach ( $items as $key => $item ) {
			$ordered_items[ $key ] = $item['x'];
		}

		array_multisort( $ordered_items, SORT_ASC, $items );

		return $items;
	}

	public function header_render() {
		$html = '<header id="masthead" class=" ' . $this->panel . ' site-header">';
		$html .=     '<div id="masthead-inner" class="site-header-inner">';
		$html .=        $this->render();
		$html .=    '</div>';
		$html .='</header>';
		echo $html;
	}

	protected function render_mobile_sidebar( $row, $classes ) {
		if ( empty ( $row ) ) {
			return '';
		}

		$classes[] = 'header-menu-sidebar menu-sidebar-panel';

		$html = '<div id="header-menu-sidebar" class="' . esc_attr( join( ' ', $classes ) ) . '">';
		$html .= '<div id="header-menu-sidebar-bg" class="header-menu-sidebar-bg">';
		$html .= '<div id="header-menu-sidebar-inner" class="header-menu-sidebar-inner">';
		$html .= $this->render_row( $row, $html );
		$html .= '</div>';
		$html .= '</div>';
		$html .= '</div>';

		return $html;
	}

	protected function render_row( $row, &$html ) {
		$max_columns = 12;
		$last_item = null;

		$collection = new CachingIterator( new ArrayIterator(
			$row
		) , CachingIterator::TOSTRING_USE_CURRENT );
		foreach ( $collection as $component_location ) {
			/**
			 * @var Abstract_Component $component
			 */
			$component = $this->builder_components[ $component_location['id'] ];
			$x        = intval( $component_location['x'] );
			$width    = intval( $component_location['width'] );
			if ( ! $collection->hasNext() && ( $x + $width < $max_columns ) ) {
				$width += $max_columns - ( $x + $width );
			}

			$push_left = '';
			if ( $x > 0 && $last_item !== null ) {
				$o = intval( $last_item['width'] ) + intval( $last_item['x'] );
				if( $x - $o > 0 ) {
					$x = $x - $o;
					$push_left = 'off-' . $x;
				}
			} elseif ( $x > 0 ) {
				$push_left = 'off-' . $x;
			}

			$component->current_x = $x;
			$component->current_width = $width;

			$html .= '<div class="hfg-col-' . $width . '_md-' . $width . '_sm-' . $width . ' builder-item" data-push-left="' . $push_left . '">';
			$html .= $component->render();
			$html .= '</div>';

			$last_item = $component_location;
		}
	}

	public function render() {
		$html = '';
		$layout = json_decode( get_theme_mod( $this->control_id ), true );
		$desktop_items = $layout['desktop'];
		$mobile_items = $layout['mobile'];
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

				$classes[] = get_theme_mod( $this->control_id . '_' . $index . '_layout' );
				$skin_mode = get_theme_mod( $this->control_id . '_' . $index . '_skin' );

				$html .= '<div class="header-' . $index . ' ' . join( ' ', $classes ) . ' header--row" id="cb-row--header-' . $index . '" data-row-id="' . $index . '" data-show-on="' . $device_name . '">';
				$html .= '<div class="header--row-inner header-' . $index . '-inner ' . $skin_mode . '">';
				$html .= '<div class="hfg-container">';
				$html .= '<div class="hfg-grid hfg-grid-middle">';
				$html .= $this->render_row( $row, $html );
				$html .= '</div>';
				$html .= '</div>';
				$html .= '</div>';
				$html .= '</div>';
			}
		}

		return $html;
	}
}