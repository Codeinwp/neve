<?php

class HeaderFooterLayoutBuilder {
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

		if ( is_object( $class ) ) {

		} else {
			if ( ! class_exists( $class ) ) {
				return false;
			}
			$class = new $class();
		}

		if ( ! isset( $this->registered_items[ $builder_id ] ) ) {
			$this->registered_items[ $builder_id ] = array();
		}

		$this->registered_items[ $builder_id ][ $class->id ] = $class;

		return true;

	}

	public function scripts() {
		$suffix = '';
		wp_enqueue_style( 'customify-customizer-control', esc_url( get_template_directory_uri() ) . '/header_footer/assets/css/admin/customizer/customizer' . $suffix . '.css' );
		wp_enqueue_script(
			'hf-builder-v1',
			esc_url( get_template_directory_uri() ) . '/header_footer/assets/js/customizer/builder-v1' . $suffix . '.js',
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
			'hf-builder-v2',
			esc_url( get_template_directory_uri() ) . '/header_footer/assets/js/customizer/builder-v2' . $suffix . '.js',
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
			'hf-layout-builder',
			esc_url( get_template_directory_uri() ) . '/header_footer/assets/js/customizer/builder' . $suffix . '.js',
			array(
				'hf-builder-v1',
				'hf-builder-v2',
			),
			false,
			true
		);
		wp_localize_script(
			'jquery',
			'Customify_Layout_Builder',
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
			'header' => [
					'id' => 'header',
					'control_id' => 'neve_navigation_layout',
					'version_id' => 'neve_navigation_layout',
					'panel' => 'neve_header',
					'section' => 'neve_primary_navigation',
					'versions' => [
						'v1' => [
							'control_id' => 'neve_navigation_layout_v1',
							'label' => 'V1'
						],
						'v2' => [
							'control_id' => 'neve_navigation_layout',
							'label' => 'V2'
						]
					],
					'devices' => [
						'desktop' => 'Desktop',
						'mobile' => 'Mobile'
				    ],
                    'items' => [
	                    'primary-menu' => [
                            'name' => 'Primary Menu',
                            'id' => 'primary-menu',
                            'width' => '6',
                            'section' => 'header_menu_primary',
                        ]
                    ],
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
		require_once get_template_directory() . '/header_footer/templates/rows_v1.php';
		require_once get_template_directory() . '/header_footer/templates/rows_v2.php';
		?>
		<script type="text/html" id="tmpl-customify--builder-panel">
			<div class="customify--customize-builder">
				<div class="customify--cb-inner">
					<div class="customify--cb-header">
						<div class="customify--cb-devices-switcher">
						</div>
						<div class="customify--cb-actions">
							<?php do_action( 'customify/builder-panel/actions-buttons' ); ?>
							<a data-id="{{ data.id }}_templates" class="focus-section button button-secondary" href="#"><?php _e( 'Templates', 'customify' ); ?></a>
							<a class="button button-secondary customify--panel-close" href="#">
								<span class="close-text"><?php _e( 'Close', 'customify' ); ?></span>
								<span class="panel-name-text">{{ data.title }}</span>
							</a>
						</div>
					</div>
					<div class="customify--cb-body"></div>
				</div>
			</div>
		</script>


		<script type="text/html" id="tmpl-customify--cb-item">
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
					<span class="customify--cb-item-name" data-section="{{ data.section }}">{{ data.name }}</span>
					<span class="customify--cb-item-remove customify-cb-icon"></span>
					<span class="customify--cb-item-setting customify-cb-icon" data-section="{{ data.section }}"></span>
				</div>
			</div>
		</script>

		<?php
		if ( ! apply_filters( 'customify/is_pro_activated', false ) ) {
			?>
			<script type="text/html" id="customify-upsell-tmpl">
				<p class="customify-upsell-panel"><?php _e( 'Enjoy building? Upgrade to <a target="_blank" href="https://wpcustomify.com/pricing/?utm_source=theme_dashboard&utm_medium=links&utm_campaign=panel_text">Customify Pro</a> to get more builder items and other premium features</a>.', 'customify' ); ?></p>
			</script>
			<?php
		}
	}
}