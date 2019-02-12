<?php
namespace HFG\Core\Builder;

use HFG\Core\Abstract_Component;

class Layout {

    protected $registered_items = [];

	public function init() {
		if ( is_admin() ) {
			add_action( 'customize_controls_enqueue_scripts', array( $this, 'scripts' ) );
			add_action( 'customize_controls_print_footer_scripts', array( $this, 'template' ) );
//			add_action( 'wp_ajax_customify_builder_save_template', array( $this, 'ajax_save_template' ) );
//			add_action( 'wp_ajax_customify_builder_export_template', array( $this, 'ajax_export_template' ) );
		}
	}

	public function register_item( $builder_id, $class ) {
		if ( ! $builder_id ) {
			return false;
		}

		if ( ! is_object( $class ) ||  ! $class instanceof Abstract_Component ) {
			return false;
		}

		if ( ! isset( $this->registered_items[ $builder_id ] ) ) {
			$this->registered_items[ $builder_id ] = array();
		}

		/**
		 * @type Abstract_Component $item
		 */
		$item = new $class();
		$this->registered_items[ $builder_id ][ $item->get_property( 'id' ) ] = $item;

		return true;
	}

	public function get_components_by_id( $builder_id ) {
		if ( ! $builder_id || ! isset( $this->registered_items[ $builder_id ] ) ) {
		    return array();
		}

		$items = array();
		foreach ( $this->registered_items[ $builder_id ] as $id => $component ) {
			if ( method_exists( $component, 'item' ) ) {
				$item         = $component->item();
				$items[ $id ] = $item;
			}
		}
		return $items;
	}

	public function get_component_customizer_options( $builder_id, $wp_customize = null ) {
		if ( ! $builder_id || ! isset( $this->registered_items[ $builder_id ] ) ) {
			return false;
		}

		$customizer_options = array();
		foreach ( $this->registered_items[ $builder_id ] as $component ) {
			if ( method_exists( $component, 'customize' ) ) {
				$options = $component->customize( $wp_customize );
				if ( is_array( $options ) ) {
					foreach ( $options as $option ) {
						$customizer_options[] = $option;
					}
				}
			}
		}

		return $customizer_options;
    }

	public function scripts() {
		$suffix = '';
		wp_enqueue_style( 'hfg-customizer-control', esc_url( get_template_directory_uri() ) . '/header-footer-grid/assets/css/admin/customizer/customizer' . $suffix . '.css' );
		wp_enqueue_script(
			'hfg-builder-v1',
			esc_url( get_template_directory_uri() ) . '/header-footer-grid/assets/js/customizer/builder-v1' . $suffix . '.js',
			array(
				'customize-controls',
				'jquery-ui-resizable',
				'jquery-ui-droppable',
				'jquery-ui-draggable',
			),
			false,
			true
		);
		wp_enqueue_script(
			'hfg-builder-v2',
			esc_url( get_template_directory_uri() ) . '/header-footer-grid/assets/js/customizer/builder-v2' . $suffix . '.js',
			array(
				'customize-controls',
				'jquery-ui-resizable',
				'jquery-ui-droppable',
				'jquery-ui-draggable',
			),
			false,
			true
		);
		wp_enqueue_script(
			'hfg-layout-builder',
			esc_url( get_template_directory_uri() ) . '/header-footer-grid/assets/js/customizer/builder' . $suffix . '.js',
			array(
				'hfg-builder-v1',
				'hfg-builder-v2',
			),
			false,
			true
		);
		wp_localize_script(
			'jquery',
			'HFG_Layout_Builder',
			array(
				'footer_moved_widgets_text' => '',
				'builders'                  => $this->get_builders(),
				'is_rtl'                    => is_rtl(),
				'change_version_nonce'      => wp_create_nonce( 'change_version_nonce' ),
			)
		);
	}

	public function get_builders() {
		return [
			'ss' => [
					'id' => 'header',
					'control_id' => 'neve_navigation_layout',
					'version_id' => 'neve_navigation_layout',
					'panel' => 'neve_header',
					//'section' => 'neve_primary_navigation',
					'section' => '',
					'versions' => [
						'v1' => [
							'control_id' => 'neve_navigation_layout',
							'label' => 'V1'
						],
//						'v2' => [
//							'control_id' => 'neve_navigation_layout',
//							'label' => 'V2'
//						]
					],
					'devices' => [
						'desktop' => 'Desktop',
						'mobile' => 'Mobile'
				    ],
                    'items' => $this->get_components_by_id( 'header' ),
//                    'items' => [
//	                    'primary-menu' => [
//                            'name' => 'Primary Menu',
//                            'id' => 'primary-menu',
//                            'width' => '6',
//                            'section' => 'header_menu_primary',
//                        ]
//                    ],
                    'rows' => [
	                    'top' => 'Header Top',
	                    'main' => 'Header Main',
                        'bottom' => 'Header Bottom',
                        'sidebar' => 'Menu Sidebar',
                    ],
			]
		];
	}

	public function template() {
		require_once get_template_directory() . '/header-footer-grid/templates/rows.php';
		?>
		<script type="text/html" id="tmpl-hfg--builder-panel">
			<div class="hfg--customize-builder">
				<div class="hfg--cb-inner">
					<div class="hfg--cb-header">
						<div class="hfg--cb-devices-switcher">
						</div>
						<div class="hfg--cb-actions">
							<?php do_action( 'hfg/builder-panel/actions-buttons' ); ?>
							<a data-id="{{ data.id }}_templates" class="focus-section button button-secondary" href="#"><?php _e( 'Templates', 'hfg' ); ?></a>
							<a class="button button-secondary hfg--panel-close" href="#">
								<span class="close-text"><?php _e( 'Close', 'hfg' ); ?></span>
								<span class="panel-name-text">{{ data.title }}</span>
							</a>
						</div>
					</div>
					<div class="hfg--cb-body"></div>
				</div>
			</div>
		</script>


		<script type="text/html" id="tmpl-hfg--cb-item">
			<div class="grid-stack-item item-from-list for-s-{{ data.section }}"
				 title="{{ data.name }}"
				 data-id="{{ data.id }}"
				 data-section="{{ data.section }}"
				 data-control="{{ data.control }}"
				 data-gs-x="{{ data.x }}"
				 data-gs-y="{{ data.y }}"
				 data-gs-width="{{ data.width }}"
				 data-df-width="{{ data.width }}"
				 data-gs-height="1"
			>
				<div class="item-tooltip" data-section="{{ data.section }}">{{ data.name }}</div>
				<div class="grid-stack-item-content">
					<span class="hfg--cb-item-name" data-section="{{ data.section }}">{{ data.name }}</span>
					<span class="hfg--cb-item-remove hfg-cb-icon"></span>
					<span class="hfg--cb-item-setting hfg-cb-icon" data-section="{{ data.section }}"></span>
				</div>
			</div>
		</script>

		<?php
	}
}