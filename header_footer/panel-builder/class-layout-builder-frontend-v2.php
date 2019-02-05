<?php
/**
 * Builder frontemd class
 *
 * @since 0.2.7
 */
class Hf_Layout_Builder_Frontend_V2  extends Hf_Abstract_Layout_Frontend {
	public static $_instance;
	protected $control_id = 'header_builder_panel_v2';
	protected $id = 'header';
	protected $render_items = null;
	protected $rows = array();
	protected $flag_cols = array();
	protected $flag_rows = array();
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
	 * Render builder items.
	 *
	 * @since 0.2.7
	 *
	 * @param string $item_id
	 * @param string $col_id
	 * @param string $row_id
	 * @param string $device
	 * @return array
	 */
	public function render_item( $item_id, $col_id, $row_id, $device ) {

		// $key = $item_id . '_' . $col_id . '_' . $row_id;
		$key = $item_id;
		if ( ! is_array( $this->render_items ) ) {
			$this->render_items = array();
		}

		// Flag to check row has items.
		$this->rows[ $row_id ][ $device ] = $device;

		// Flag to check col has item.
		$flag_key_col = $col_id . '-' . $row_id . '-' . $device;
		$this->flag_cols[ $flag_key_col ] = true;

		// Flag to check row has item.
		$flag_key_row = $row_id . '-' . $device;
		$this->flag_rows[ $flag_key_row ] = true;

		// Check if already render.
		if ( isset( $this->render_items[ $key ] ) ) {
			return $this->render_items[ $key ];
		}

		$item = array(
			'_row_id' => $row_id,
			'_col_id' => $col_id,
			'_id'     => $item_id,
			'_device' => $device,
			'content' => false,
		);

		// START render builder item.
		ob_start();
		$has_cb = false;
		$return_render = false;
		$item_config = isset( $this->config_items[ $item_id ] ) ? $this->config_items[ $item_id ] : array();

		/**
		 * Hook before builder item
		 *
		 * @since 0.2.1
		 */
		do_action( 'Hf/builder/' . $this->id . '/before-item/' . $item_id );
		$object_item = Hf_Customize_Layout_Builder()->get_builder_item( $this->id, $item_id );
		// Call render in registered class.
		if ( $object_item ) {
			if ( method_exists( $object_item, 'render' ) ) {
				$return_render = call_user_func_array(
					array(
						$object_item,
						'render',
					),
					array( $item_config, $item_id )
				);
				$has_cb        = true;
			}
		}

		// Call render by function if class do not exists.
		if ( ! $has_cb ) {
			$id            = str_replace( '-', '_', $item_id );
			$fn            = 'Hf_builder_' . $id . '_item';

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
		do_action( 'Hf/builder/' . $this->id . '/after-item/' . $item_id );

		// Get item output.
		$ob_render = ob_get_clean();
		// END render builder item.
		if ( ! $return_render ) {
			if ( $ob_render ) {
				$return_render = $ob_render;
			}
		}

		if ( $return_render ) {
			$item ['content'] = $return_render;
		}

		$this->render_items[ $key ] = $item;
		return $item;
	}

	/**
	 * Render items to HTML
	 *
	 * @param array $list_items List Items.
	 *
	 * @return array
	 */
	function render_items( $list_items = array() ) {
		if ( ! is_null( $this->render_items ) ) {
			return $this->render_items;
		}

		$setting = $this->get_settings();
		$items   = array();

		// Loop devices.
		foreach ( $setting as $device => $device_settings ) {
			foreach ( $device_settings as $row_id => $row_cols ) {

				if ( is_array( $row_cols ) && ! empty( $row_cols ) ) {
					foreach ( $row_cols as $col_id => $col_items ) {
						foreach ( $col_items as $index => $item ) {
							$this->render_item( $item['id'], $col_id, $row_id, $device );
						}
					}
				}
			}
		}

		if ( is_null( $this->render_items ) ) {
			$this->render_items = array();
		}

		return $this->render_items;
	}

	/**
	 * Get rendered item
	 *
	 * @param string $item_id
	 * @return array|bool
	 */
	public function get_render_item( $item_id ) {
		if ( is_null( $this->render_items ) ) {
			$this->render_items();
		}
		if ( isset( $this->render_items[ $item_id ] ) ) {
			return $this->render_items[ $item_id ];
		}
		return false;
	}

	public function render_row( $row_settings, $id = '', $device = 'desktop' ) {
		$flag_key_row = $id . '-' . $device;

		// Check if the row are not showing.
		if ( ! isset( $this->flag_rows[ $flag_key_row ] ) ) {
			return false;
		}

		ob_start();
		$count = 0;
		$no_cols = array();
		$row_clases = array( 'row-v2', 'row-v2-' . $id );
		$has_center = false;

		foreach ( $row_settings as $col_id => $col_items ) {
			$flag_key_col = $col_id . '-' . $id . '-' . $device;
			// Check if current column has items.
			if ( isset( $this->flag_cols[ $flag_key_col ] ) ) {
				$count ++;
				if ( 'center' == $col_id ) {
					$has_center = true;
				}
				echo '<div class="col-v2 col-v2-' . $col_id . '">';
				foreach ( $col_items as $item_index => $col_item ) {

					$item = $this->get_render_item( $col_item['id'] );
					if ( $item ) {
						$item_id = $col_item['id'];
						$content = $item['content'];
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
							$row_items_html = '';
							$row_items_html .= '<div class="' . esc_attr( $item_classes ) . '" data-section="' . $item_config['section'] . '" data-item-id="' . esc_attr( $item_id ) . '" >';
							$row_items_html .= $this->setup_item_content( $content, $id, $device );
							if ( is_customize_preview() ) {
								$row_items_html .= '<span class="item--preview-name">' . esc_html( $item_config['name'] ) . '</span>';
							}
							$row_items_html .= '</div>';
							echo $row_items_html;
						}
					}
				}
				echo '</div>';
			} else {
				$no_key = 'no-' . $col_id;
				$no_cols[ $no_key ] = $no_key;
			} // End check show col.
		} // and loop cols

		$row_innner_html = ob_get_clean();

		if ( $has_center ) {
			if ( isset( $no_cols['no-left'] ) ) {
				$row_innner_html = '<div class="col-v2 col-v2-left"></div>' . $row_innner_html;
			}
			if ( isset( $no_cols['no-right'] ) ) {
				$row_innner_html .= '<div class="col-v2 col-v2-right"></div>';
			}
		}

		if ( ! empty( $no_cols ) ) {
			$row_clases = array_merge( $row_clases, $no_cols );
		} else {
			$row_clases[] = 'full-cols';
		}

		$row_html = '<div class="' . esc_attr( join( ' ', $row_clases ) ) . '">';
		$row_html .= $row_innner_html;
		$row_html .= '</div>';

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
					$classes     = array();
					$_id         = sprintf( '%1$s-%2$s', $this->id, $row_id );
					$classes[]   = $_id;
					$classes[]   = $this->id . '--row';
					$desktop_row = $this->get_row_settings( $row_id, 'desktop' );
					$mobile_row  = $this->get_row_settings( $row_id, 'mobile' );
					$atts        = array();

					if ( ! empty( $desktop_row ) || ! empty( $mobile_row ) ) {

						$align_classes = 'Hf-grid-middle';
						if ( empty( $desktop_row ) ) {
							$classes[] = 'hide-on-desktop';
						}
						if ( empty( $mobile_row ) ) {
							$classes[] = 'hide-on-mobile hide-on-tablet';
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
						if ( $desktop_row ) {
							$html_desktop = $this->render_row( $desktop_row, $row_id, 'desktop' );
						} else {
							$html_desktop = false;
						}
						if ( $mobile_row ) {
							$html_mobile = $this->render_row( $mobile_row, $row_id, 'mobile' );
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
											$c = 'cb-row--desktop hide-on-mobile hide-on-tablet';
											echo '<div class="Hf-grid  ' . esc_attr( $c . ' ' . $align_classes ) . '">';
											echo $html_desktop;
											echo '</div>';
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

			foreach ( $mobile_items as $row_id => $col_items ) {
				foreach ( $col_items as $item_index => $item ) {
					$item_id     = $item['id'];
					$item        = $this->get_render_item( $item_id );
					$content     = $item['content'];
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
			}

			echo '</div>';
			echo '</div>';
			echo '</div>';
		}
	}
}


/**
 * Alias of class Hf_Layout_Builder_Frontend_V2
 *
 * @see Hf_Layout_Builder_Frontend
 *
 * @return Hf_Layout_Builder_Frontend_V2
 */
function Hf_Layout_Builder_Frontend_V2() {
	return Hf_Layout_Builder_Frontend_V2::get_instance();
}
