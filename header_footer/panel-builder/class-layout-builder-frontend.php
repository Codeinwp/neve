<?php
/**
 * Builder frontemd class
 *
 * @since 0.2.7
 */
class Hf_Layout_Builder_Frontend extends Hf_Abstract_Layout_Frontend {
	public static $_instance;
	protected $control_id = 'header_builder_panel';
	protected $id = 'header';
	protected $render_items = array();
	protected $rows = array();
	protected $data = false;
	protected $config_items = false;

	public function __construct() {

	}

	public static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Render items to HTML
	 *
	 * @param array $list_items List Items.
	 *
	 * @return array
	 */
	function render_items( $list_items = array() ) {
		$setting = $this->get_settings();
		$items   = array();

		// Loop devices.
		foreach ( $setting as $device => $device_settings ) {
			foreach ( $device_settings as $row_id => $row_items ) {
				if ( ! isset( $this->rows[ $row_id ] ) ) {
					$this->rows[ $row_id ] = array();
				}
				// if this row not empty.
				if ( is_array( $row_items ) && count( $row_items ) ) {

					$this->rows[ $row_id ][ $device ] = $device;

					// Loop items of this row.
					foreach ( $row_items as $item_index => $item ) {
						$return_render = null;
						$item          = wp_parse_args(
							$item,
							array(
								'x'     => '',
								'width' => '1',
								'id'    => '',
							)
						);

						if ( ! $item['id'] ) {
							continue;
						}

						$item_config = isset( $this->config_items[ $item['id'] ] ) ? $this->config_items[ $item['id'] ] : array();

						if ( ! isset( $items[ $item['id'] ] ) ) {
							$items[ $item['id'] ] = array(
								'render_content' => '',
								'devices'        => array(),
								'rows'           => array(),
								'id'             => $item['id'],
							);
						}

						if ( ! $items[ $item['id'] ] ['render_content'] ) {
							// START render builder item.
							ob_start();
							$has_cb = false;

							/**
							 * Hook before builder item
							 *
							 * @since 0.2.1
							 */
							do_action( 'Hf/builder/' . $this->id . '/before-item/' . $item['id'] );
							$object_item = Hf_Customize_Layout_Builder()->get_builder_item( $this->id, $item['id'] );
							// Call render in registered class.
							if ( $object_item ) {
								if ( method_exists( $object_item, 'render' ) ) {
									$return_render = call_user_func_array(
										array(
											$object_item,
											'render',
										),
										array( $item_config, $item )
									);
									$has_cb        = true;
								}
							}

							// Call render by function if class do not exists.
							if ( ! $has_cb ) {
								$id            = str_replace( '-', '_', $item['id'] );
								$fn            = 'Hf_builder_' . $id . '_item';
								$return_render = false;
								if ( function_exists( $fn ) ) {
									$return_render = call_user_func_array( $fn, array( $item_config, $item ) );
									$has_cb        = true;
								} else {
									$fn = 'Hf_builder_' . $this->id . '_' . $id . '_item';
									if ( function_exists( $fn ) ) {
										$return_render = call_user_func_array( $fn, array( $item_config, $item ) );
										$has_cb        = true;
									}
								}
							}

							/**
							 * Hook after builder item
							 *
							 * @since 0.2.1
							 */
							do_action( 'Hf/builder/' . $this->id . '/after-item/' . $item['id'] );

							// Get item output.
							$ob_render = ob_get_clean();
							// END render builder item.
							if ( ! $return_render ) {
								if ( $ob_render ) {
									$return_render = $ob_render;
								}
							}

							if ( $return_render ) {
								$items[ $item['id'] ] ['render_content'] = $return_render;
							}
						}

						$items[ $item['id'] ]['added']              = false;
						$items[ $item['id'] ]['devices'][ $device ] = array(
							'x'     => $item['x'],
							'width' => $item['width'],
							'id'    => $item['id'],
							'row'   => $row_id,
						);
						if ( isset( $items[ $item['id'] ]['rows'][ $row_id ] ) ) {
							$items[ $item['id'] ]['rows'][ $row_id ] = array(
								$items[ $item['id'] ]['rows'][ $row_id ],
							);

							$items[ $item['id'] ]['rows'][ $row_id ][] = $device;

						} else {
							$items[ $item['id'] ]['rows'][ $row_id ] = $device;
						}
					}
				}
			}
		}

		$this->render_items = $items;

		return $items;
	}

	/**
	 * Sort items by their position on the grid.
	 *
	 * @param array $items List item to sort.
	 *
	 * @return  array
	 */
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
			$merge      = Hf()->get_setting( $merge_key, $device );
			$merge_next = false;
			$merge_prev = false;
			if ( 'no' == $merge || '0' == $merge ) {
				$merge = false;
			}

			if ( $next_item ) {
				$merge_key_next = $this->id . '_' . $next_item['id'] . '_merge';
				$merge_next     = Hf()->get_setting( $merge_key_next, $device );
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

			if ( isset( $items[ $index + 1 ] ) ) {
				$next_item = $items[ $index + 1 ];
			} else {
				$next_item = false;
			}

			$first_id = $item['id'];
			$x        = intval( $item['x'] );
			$width    = intval( $item['width'] );
			if ( ! $next_item ) {
				if ( $x + $width < $max_columns ) {
					$width += $max_columns - ( $x + $width );
				}
			}

			$atts    = array();
			$classes = array();

			$number_item = count( $item['items'] );

			if ( 'footer' != $this->id ) {
				$classes[] = "Hf-col-{$width}_md-{$width}_sm-{$width}";
			} else {
				if ( $number_group_item > 1 ) {
					$classes[] = "Hf-col-{$width}_md-{$width}_sm-6_xs-12";
				} else {
					$classes[] = "Hf-col-{$width}_md-{$width}_sm-12_xs-12";
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

			$classes = apply_filters( 'Hf/builder/item-wrapper-classes', $classes, $item );
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

	public function render( $row_ids = array( 'top', 'main', 'bottom' ) ) {
		$setting = $this->get_settings();
		$items   = $this->render_items();
		foreach ( $row_ids as $row_id ) {
			$show = Hf_is_builder_row_display( $this->id, $row_id );
			if ( $show && isset( $this->rows[ $row_id ] ) ) {
				$show_on_devices = $this->rows[ $row_id ];
				if ( ! empty( $show_on_devices ) ) {
					$classes = array();
					$_id     = sprintf( '%1$s-%2$s', $this->id, $row_id );

					$classes[]     = $_id;
					$classes[]     = $this->id . '--row';
					$desktop_items = $this->get_row_settings( $row_id, 'desktop' );
					$mobile_items  = $this->get_row_settings( $row_id, 'mobile' );
					$atts          = array();
					if ( ! empty( $desktop_items ) || ! empty( $mobile_items ) ) {

						$align_classes = 'Hf-grid-middle';
						if ( 'footer' != $this->id ) {
							if ( empty( $desktop_items ) ) {
								$classes[] = 'hide-on-desktop';
							}
							if ( empty( $mobile_items ) ) {
								$classes[] = 'hide-on-mobile hide-on-tablet';
							}
						} else {
							$align_classes = 'Hf-grid-top';
						}

						$row_layout    = Hf()->get_setting( $this->id . '_' . $row_id . '_layout' );
						$row_text_mode = Hf()->get_setting( $this->id . '_' . $row_id . '_text_mode' );
						if ( $row_layout ) {
							$classes[] = sanitize_text_field( $row_layout );
						}

						$classes = apply_filters( 'Hf/builder/row-classes', $classes, $row_id, $this );

						$atts['class']       = join( ' ', $classes );
						$atts['id']          = 'cb-row--' . $_id;
						$atts['data-row-id'] = $row_id;
						$atts                = apply_filters( 'Hf/builder/row-attrs', $atts, $row_id, $this );
						$string_atts         = '';
						foreach ( $atts as $k => $s ) {
							if ( is_array( $s ) ) {
								$s = wp_json_encode( $s );
							}
							$string_atts .= ' ' . sanitize_text_field( $k ) . '="' . esc_attr( $s ) . '" ';
						}
						if ( $desktop_items ) {
							$html_desktop = $this->render_row( $desktop_items, $row_id, 'desktop' );
						} else {
							$html_desktop = false;
						}
						if ( $mobile_items ) {
							$html_mobile = $this->render_row( $mobile_items, $row_id, 'mobile' );
						} else {
							$html_mobile = false;
						}

						// Row inner class.
						// Check if the row is header or footer.
						$inner_class = array();
						if ( 'header' == $this->id ) {
							$inner_class[] = 'header--row-inner';
						} else {
							$inner_class[] = 'footer--row-inner';
						}
						$inner_class[] = $_id . '-inner';
						if ( $row_text_mode ) {
							$inner_class['row_text_mode'] = $row_text_mode;
						}

						$inner_class = apply_filters( 'Hf/builder/inner-row-classes', $inner_class, $row_id, $this );

						if ( $html_mobile || $html_desktop ) {
							?>
							<div <?php echo $string_atts; ?> data-show-on="<?php echo esc_attr( join( ' ', $show_on_devices ) ); ?>">
								<div class="<?php echo join( ' ', $inner_class ); ?>">
									<div class="Hf-container">
										<?php
										if ( $html_desktop ) {

											if ( $html_desktop ) {
												$c = 'cb-row--desktop hide-on-mobile hide-on-tablet';
												if ( empty( $mobile_items ) ) {
													$c = '';
												}
												echo '<div class="Hf-grid ' . esc_attr( $c . ' ' . $align_classes ) . '">';
												echo $html_desktop;
												echo '</div>';
											}
										}

										if ( $html_mobile ) {
											echo '<div class="cb-row--mobile hide-on-desktop Hf-grid ' . esc_attr( $align_classes ) . '">';
											echo $html_mobile;
											echo '</div>';
										}
										?>
									</div>
								</div>
							</div>
							<?php
						}
					}
				}
			}
		} // end for each row_ids.
	}

	/**
	 * Render sidebar row
	 */
	public function render_mobile_sidebar() {
		$id                = 'sidebar';
		$mobile_items      = $this->get_row_settings( $id, 'mobile' );
		$menu_sidebar_skin = Hf()->get_setting( 'header_sidebar_skin_mode' );

		if ( ! is_array( $mobile_items ) ) {
			$mobile_items = array();
		}

		if ( ! empty( $mobile_items ) || is_customize_preview() ) {

			$classes = array( 'header-menu-sidebar menu-sidebar-panel' );
			if ( '' != $menu_sidebar_skin ) {
				$classes[] = $menu_sidebar_skin;
			}

			echo '<div id="header-menu-sidebar" class="' . esc_attr( join( ' ', $classes ) ) . '">';
			echo '<div id="header-menu-sidebar-bg" class="header-menu-sidebar-bg">';
			echo '<div id="header-menu-sidebar-inner" class="header-menu-sidebar-inner">';

			foreach ( $mobile_items as $item ) {
				$item_id     = $item['id'];
				$content     = $this->render_items[ $item['id'] ]['render_content'];
				$item_config = isset( $this->config_items[ $item_id ] ) ? $this->config_items[ $item_id ] : array();
				$item_config = wp_parse_args(
					$item_config,
					array(
						'section' => '',
						'name'    => '',
					)
				);

				$classes = 'builder-item-sidebar mobile-item--' . $item_id;
				if ( strpos( $item_id, 'menu' ) ) {
					$classes = $classes . ' mobile-item--menu ';
				}
				$inner_classes = 'item--inner';
				if ( is_customize_preview() ) {
					$inner_classes = $inner_classes . ' builder-item-focus ';
				}

				$content = $this->setup_item_content( $content, $id, 'mobile' );

				echo '<div class="' . esc_attr( $classes ) . '">';
				echo '<div class="' . esc_attr( $inner_classes ) . '" data-item-id="' . esc_attr( $item_id ) . '" data-section="' . $item_config['section'] . '">';
				echo $content;
				if ( is_customize_preview() ) {
					echo '<span class="item--preview-name">' . esc_html( $item_config['name'] ) . '</span>';
				}
				echo '</div>';
				echo '</div>';
			}
			echo '</div>';
			echo '</div>';
			echo '</div>';
		}
	}

}


/**
 * Deprecated class name
 *
 * @deprecated 0.2.7
 */
class Hf_Customize_Layout_Builder_Frontend extends Hf_Layout_Builder_Frontend {}

/**
 * Alias of class Hf_Layout_Builder_Frontend
 *
 * @see Hf_Layout_Builder_Frontend
 *
 * @return Hf_Layout_Builder_Frontend
 */
function Hf_Layout_Builder_Frontend() {
	return Hf_Layout_Builder_Frontend::get_instance();
}


/**
 * Alias of class Hf_Layout_Builder_Frontend
 *
 * @see Hf_Layout_Builder_Frontend
 * @deprecated 2.0.7
 *
 * @return Hf_Layout_Builder_Frontend
 */
function Hf_Customize_Layout_Builder_Frontend() {
	return Hf_Layout_Builder_Frontend();
}
