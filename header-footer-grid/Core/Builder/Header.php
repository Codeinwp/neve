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
		//echo '<div id=" ' . $this->panel . ' ">' . $this->render() . '</div>';
		$html = '<header id="masthead" class=" ' . $this->panel . ' site-header">';
		$html .=     '<div id="masthead-inner" class="site-header-inner">';
		$html .=        $this->render();
		$html .=    '</div>';
		$html .='</header>';
		echo $html;
	}

	public function render() {
		$html = '';
		$max_columns = 12;
		$layout = json_decode( get_theme_mod( $this->control_id ), true );
		$device = $layout['desktop'];
		//foreach ( $layout as $device ) {
			foreach ( $device as $index => $row ) {
				$last_item = null;
				//echo $index;
				//echo json_encode( $row );

				if ( empty( $row ) ) {
					continue;
				}
				$html .= '<div class="header-' . $index . ' header--row" id="cb-row--header-' . $index . '" data-row-id="' . $index . '" data-show-on="' . 'desktop' . '">';
				$html .= '<div class="header--row-inner header-' . $index . '-inner">';
				$html .= '<div class="hfg-container">';
				$html .= '<div class="hfg-grid hfg-grid-middle">';

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

					$html .= '<div class="hfg-col-' . $width . '_md-' . $width . '_sm-' . $width . ' builder-item" data-push-left="' . $push_left . '">';
					$html .= $component->render();
					$html .= '</div>';

					$last_item = $component_location;
				}
				$html .= '</div>';
				$html .= '</div>';
				$html .= '</div>';
				$html .= '</div>';
			}
		//}

		//echo $layout;
		return $html;
	}
}