<?php

namespace HFG\Core\Builder;

use ArrayIterator;
use CachingIterator;
use HFG\Core\Abstract_Component;
use HFG\Core\Settings;

class Footer extends Abstract_Builder {

	public function __construct() {
		$this->set_property( 'title', __( 'HFG Footer', 'hfg-module' ) );
		$this->set_property( 'control_id', 'hfg_footer_layout' );
		$this->set_property( 'panel', 'hfg_footer' );
		$this->set_property( 'remove_sections', [ 'neve_footer' ] );

		$this->devices = [
			'desktop' => 'Footer Layout',
		];

		add_action( 'hfg-footer-render', array( $this, 'footer_render' ) );
	}

	public function footer_render() {
		$html = '<footer class="site-footer" id="site-footer">';
		$html .= $this->render();
		$html .= '</footer>';
		echo $html;
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
				if ( $x - $o > 0 ) {
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
		$defaults = Settings::get_instance()->get_footer_defaults_neve();
		$layout = wp_parse_args( json_decode( get_theme_mod( $this->control_id ), true ), $defaults );

		foreach ( $layout as $device_name => $device ) {
			$classes = array();

			foreach ( $device as $index => $row ) {

				if ( empty( $row ) ) {
					continue;
				}

				$classes[] = get_theme_mod( $this->control_id . '_' . $index . '_layout' );
				$skin_mode = get_theme_mod( $this->control_id . '_' . $index . '_skin' );

				$row_styles = '';
				$row_styles_array = [];
				$row_height = get_theme_mod( $this->control_id . '_' . $index . '_height' );
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

				$html .= '<div class="footer-' . $index . ' ' . join( ' ', $classes ) . ' header--row" id="cb-row--footer-' . $index . '" data-row-id="' . $index . '" data-show-on="' . $device_name . '">';
				$html .= '<div class="footer--row-inner footer-' . $index . '-inner ' . $skin_mode . '"' . $row_styles . '>';
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

	protected function get_rows() {
		return [
			'top' => 'Footer Top',
			'bottom' => 'Footer Bottom',
		];
	}
}
