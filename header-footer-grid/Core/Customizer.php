<?php
namespace HFG\Core;

use HFG\Config\Customizer\Style;
use HFG\Config\Customizer\Typography;
use HFG\Core\Interfaces\Builder;
use HFG\Traits\Core;
use WP_Customize_Color_Control;
use WP_Customize_Manager;

class Customizer {
	use Core;

	private $settings;
	private $builders = array();

	public function __construct( Settings $settings ) {
		$this->settings = $settings;

		$theme_support = get_theme_support( 'hfg_support' )[0];
		foreach ( $theme_support['builders'] as $builder => $components ) {
			if( class_exists( $builder ) && in_array( 'HFG\Core\Interfaces\Builder', class_implements( $builder ) ) ) {
				/**
				 * @var Builder $new_builder
				 */
				$new_builder = new $builder();
				foreach ( $components as $component ) {
					$new_builder->register_component( $component );
				}
				$this->builders[] = $new_builder;
			}
		}

		if ( is_admin() ) {
			add_action( 'customize_controls_enqueue_scripts', array( $this, 'scripts' ) );
			add_action( 'customize_controls_print_footer_scripts', array( $this, 'template' ) );
		}

		if ( is_admin() || is_customize_preview() ) {
			add_action( 'customize_register', array( $this, 'register' ), PHP_INT_MAX );
			add_action( 'customize_preview_init', array( $this, 'preview_js' ), PHP_INT_MAX );
		}
	}

	public function get_builders() {
		$builders_list = array();
		/**
		 * @var Builder $builder
		 */
		foreach ( $this->builders as $builder ) {
			$builders_list[] = $builder->get_builder();
		}
		return $builders_list;
	}

	public function scripts() {
		$suffix = $this->get_assets_suffix();
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

	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 */
	public function preview_js() {
		if ( is_customize_preview() ) {
			$suffix = $this->get_assets_suffix();

			wp_enqueue_script( 'hfg-customizer-auto-css', esc_url( get_template_directory_uri() ) . '/header-footer-grid/assets/js/customizer/auto-css' . $suffix . '.js', array( 'customize-preview' ), '20151215', true );
			wp_enqueue_script(
				'hfg-customizer',
				esc_url( get_template_directory_uri() ) . '/header-footer-grid/assets/js/customizer/customizer' . $suffix . '.js',
				array(
					'customize-preview',
					'customize-selective-refresh',
				),
				'20151215',
				true
			);
			wp_localize_script(
				'hfg-customizer-auto-css',
				'HFGPreviewConfig',
				array(
					'fields'         => $this->settings->get_config(),
					'devices'        => array( 'desktop', 'tablet', 'mobile' ),//$this->devices,
					'typo_fields'    => $this->get_typo_fields(),
					'styling_config' => $this->get_styling_config(),
				)
			);
		}
	}

	public function register( WP_Customize_Manager $wp_customize ) {

		/**
		 * @var Builder $builder
		 */
		foreach ( $this->builders as $builder ) {
			$builder->customize_register( $wp_customize );
		}

//		$wp_customize->add_section( 'header_button' , array(
//			'title'    => __( 'Visible Section Name', 'starter' ),
//			'priority' => 30,
//			'panel' => 'neve_header',
//		) );
//
//		$wp_customize->add_setting( 'header_button_setting' , array(
//			'default'   => '#000000',
//			'transport' => 'refresh',
//		) );
//
//		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'link_color', array(
//			'label'    => __( 'Header Color', 'starter' ),
//			'section'  => 'header_button',
//			'settings' => 'header_button_setting',
//		) ) );
	}

	public function get_typo_fields() {
		return new Typography();
	}

	public function get_styling_config() {
		$fields = new Style();
		return apply_filters( 'hfg/get_styling_config', $fields );
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