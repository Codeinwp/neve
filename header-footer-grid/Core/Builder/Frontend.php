<?php
namespace HFG\Core\Builder;

class Frontend {

	public function __construct() {
		add_action( 'hfg-header-render', array( $this, 'render' ) );
	}

	private function _sort_items_by_position( $items = array() ) {
		$ordered_items = array();

		foreach ( $items as $key => $item ) {
			$ordered_items[ $key ] = $item['x'];
		}

		array_multisort( $ordered_items, SORT_ASC, $items );

		return $items;
	}

	public function render_row( $items, $id = '', $device = 'desktop' ) {
		$row_html    = '';
		$max_columns = 12;
		$items       = $this->_sort_items_by_position( array_values( $items ) );
		$last_item   = false;
		$prev_item   = false;
		$group_items = array();
		$gi          = 0;
		$n           = count( $items );
		$index       = 0;

		ob_start();

		while ( $index < $n ) {
			$item = $items[ $index ];

			if ( $gi < 0 ) {
				$gi = 0;
			}
			if ( $n > $index + 1 ) {
				$next_item = $items[ $index + 1 ];
			} else {
				$next_item = false;
			}

			$item_id    = $item['id'];
			$merge_key  = $this->id . '_' . $item_id . '_merge';
			$merge      = Customify()->get_setting( $merge_key, $device );
			$merge_next = false;
			$merge_prev = false;
			if ( 'no' == $merge || '0' == $merge ) {
				$merge = false;
			}

			if ( $next_item ) {
				$merge_key_next = $this->id . '_' . $next_item['id'] . '_merge';
				$merge_next     = Customify()->get_setting( $merge_key_next, $device );
			}

			if ( 'no' == $merge_next || '0' == $merge_next ) {
				$merge_next = false;
			}

			if ( $prev_item ) {
				$merge_prev = $prev_item['__merge'];
			}

			/*
			Increment group_index:
			a:
				n-1: = prev || no
				n = no || left
				n+1 = no || next
			b:
				n-1: = prev || no
				n = next
				n+1 = prev || no
			*/
			if (
				( ! $merge_prev || 'prev' == $merge_prev )
				&& ( ! $merge || 'next' == $merge )
				&& ( ! $merge_next || 'next' == $merge_next )
			) {
				$gi ++;
			} elseif (
				( ! $merge_prev || 'prev' == $merge_prev )
				&& ( 'next' == $merge )
				&& ( ! $merge_next || 'prev' == $merge_next )
			) {
				$gi ++;
			}

			if ( ! isset( $group_items[ $gi ] ) ) {
				$group_items[ $gi ]            = $item;
				$group_items[ $gi ]['items']   = array();
				$group_items[ $gi ]['items'][] = $item;
			} else {
				$group_items[ $gi ]['width']   = ( $item['x'] + $item['width'] ) - $group_items[ $gi ]['x'];
				$group_items[ $gi ]['items'][] = $item;
			}

			$prev_item            = $item;
			$prev_item['__merge'] = $merge;

			if ( 0 == $index && ( ! $merge || 'prev' == $merge ) && ( ! $merge_next || 'next' == $merge_next ) ) {
				$gi ++;
			}

			$index ++;
		}

		$index             = 0;
		$number_group_item = count( $group_items );
		foreach ( $group_items as $item ) {

			$next_item = false;
			if ( isset( $items[ $index + 1 ] ) ) {
				$next_item = $items[ $index + 1 ];
			}

			$first_id = $item['id'];
			$x        = intval( $item['x'] );
			$width    = intval( $item['width'] );
			if ( ! $next_item && ( $x + $width < $max_columns ) ) {
				$width += $max_columns - ( $x + $width );
			}

			$atts    = array();
			$classes = array();

			$number_item = count( $item['items'] );

			if ( 'footer' != $this->id ) {
				$classes[] = "hfg-col-{$width}_md-{$width}_sm-{$width}";
			} else {
				if ( $number_group_item > 1 ) {
					$classes[] = "hfg-col-{$width}_md-{$width}_sm-6_xs-12";
				} else {
					$classes[] = "hfg-col-{$width}_md-{$width}_sm-12_xs-12";
				}
			}

			if ( $x > 0 ) {
				if ( ! $last_item ) {
					$atts[] = 'off-' . $x;
				} else {
					$o = intval( $last_item['width'] ) + intval( $last_item['x'] );
					if ( $x - $o > 0 ) {
						$atts[] = 'off-' . ( $x - $o );
					}
				}
			}

			if ( 'footer' == $this->id ) {
				$atts[] = '_sm-0';
			}

			$classes[] = 'builder-item builder-first--' . $first_id;
			if ( count( $item['items'] ) > 1 ) {
				$classes[] = 'builder-item--group';
			}

			$classes = apply_filters( 'hfg/builder/item-wrapper-classes', $classes, $item );
			$classes = join( ' ', $classes );

			$row_items_html = '';
			foreach ( $item['items'] as $_it ) {
				$item_id = $_it['id'];
				$content = $this->render_items[ $item_id ]['render_content'];
				if ( $content ) {
					$item_config = isset( $this->config_items[ $item_id ] ) ? $this->config_items[ $item_id ] : array();
					if ( ! isset( $item_config['section'] ) ) {
						$item_config['section'] = '';
					}
					$item_classes   = array();
					$item_classes[] = 'item--inner';
					$item_classes[] = 'builder-item--' . $item_id;
					if ( strpos( $item_id, '-menu' ) ) {
						$item_classes[] = 'has_menu';
					}
					if ( is_customize_preview() ) {
						$item_classes[] = ' builder-item-focus';
					}

					$item_classes   = join( ' ', $item_classes );
					$row_items_html .= '<div class="' . esc_attr( $item_classes ) . '" data-section="' . $item_config['section'] . '" data-item-id="' . esc_attr( $item_id ) . '" >';
					$row_items_html .= $this->setup_item_content( $content, $id, $device );
					if ( is_customize_preview() ) {
						$row_items_html .= '<span class="item--preview-name">' . esc_html( $item_config['name'] ) . '</span>';
					}
					$row_items_html .= '</div>';
				}
			}
			if ( $row_items_html ) {
				echo '<div class="' . esc_attr( $classes ) . '" data-push-left="' . join( ' ', $atts ) . '">';
				echo $row_items_html;
				echo '</div>';
			}

			$last_item = $item;
			$index ++;

		} // End loop items.

		// Get item output.
		$row_html = ob_get_clean();

		return $row_html;

	}

	public function render() {
		echo '<h1>HFG -- HEADER</h1>';
	}
}