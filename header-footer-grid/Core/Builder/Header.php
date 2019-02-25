<?php

namespace HFG\Core\Builder;

use HFG\Core\Abstract_Component;

class Header extends Abstract_Builder {

	public function __construct() {
		$this->set_property( 'title', __( 'HFG Header', 'hfg-module' ) );
		$this->set_property( 'control_id', 'hfg_header_layout' );
		$this->set_property( 'panel', 'hfg_header' );
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
		$layout = json_decode( get_theme_mod( $this->control_id ), true );
		$device = $layout['desktop'];
		//foreach ( $layout as $device ) {
			foreach ( $device as $index => $row ) {
				//echo $index;
				//echo json_encode( $row );

				if ( empty( $row ) ) {
					continue;
				}
				$html .= '<div class="header-' . $index . ' header--row" id="cb-row--header-' . $index . '" data-row-id="' . $index . '" data-show-on="' . 'desktop' . '">';
				$html .= '<div class="header--row-inner header-' . $index . '-inner">';
				$html .= '<div class="customify-container">';
				$html .= '<div class="customify-grid  customify-grid-middle">';
				foreach ( $row as $component_location ) {
					/**
					 * @var Abstract_Component $component
					 */
					$component = $this->builder_components[ $component_location['id'] ];
					$x        = intval( $component_location['x'] );
					$width    = intval( 12 - $component_location['width'] );

					$html .= '<div class="customify-col-' . $width . '_md-' . $width . '_sm-' . $width . ' builder-item builder-first--search_icon" data-push-left="off-' . $x . '">';
					$html .= $component->render();
					$html .= '</div>';
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