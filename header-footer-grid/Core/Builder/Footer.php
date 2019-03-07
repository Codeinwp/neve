<?php
/**
 * Footer class for Header Footer Grid.
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
 * Class Footer
 *
 * @package HFG\Core\Builder
 */
class Footer extends Abstract_Builder {

	/**
	 * Footer constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function __construct() {
		$this->set_property( 'title', __( 'HFG Footer', 'hfg-module' ) );
		$this->set_property( 'control_id', 'hfg_footer_layout' );
		$this->set_property( 'panel', 'hfg_footer' );
		$this->set_property( 'remove_sections', [ 'neve_footer' ] );

		$this->devices = [
			'desktop' => 'Footer Layout',
		];

		add_action( 'hfg_footer_render', array( $this, 'footer_render' ) );
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
		if ( empty( $theme_mod ) || ! $theme_mod ) {
			return json_encode( Settings::get_instance()->get_footer_defaults_neve() );
		}
		return $theme_mod;
	}

	/**
	 * Method called via hook.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function footer_render() {
		$html  = '<footer class="site-footer" id="site-footer">';
		$html .= $this->render();
		$html .= '</footer>';
		echo $html;
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
			 * An instance of Abstract_Component.
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
		$html   = '';
		$layout = json_decode( get_theme_mod( $this->control_id ), true );

		foreach ( $layout as $device_name => $device ) {
			$classes = array();

			foreach ( $device as $index => $row ) {

				if ( empty( $row ) ) {
					continue;
				}

				$classes[] = get_theme_mod( $this->control_id . '_' . $index . '_layout' );
				$skin_mode = get_theme_mod( $this->control_id . '_' . $index . '_skin' );

				$row_styles       = '';
				$row_styles_array = [];
				$row_height       = get_theme_mod( $this->control_id . '_' . $index . '_height' );
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

	/**
	 * Overrides parent method to limit rows.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @return array
	 */
	protected function get_rows() {
		return [
			'top'    => 'Footer Top',
			'bottom' => 'Footer Bottom',
		];
	}
}
