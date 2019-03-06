<?php
namespace HFG\Core;

use HFG\Config\Customizer\Style;
use HFG\Config\Customizer\Typography;
use HFG\Core\Interfaces\Builder;
use HFG\Traits\Core;
use WP_Customize_Manager;

class Customizer {
	use Core;

	private $settings;
	private $builders = array();

	public function __construct( Settings $settings ) {
		$this->settings = $settings;

		$theme_support = get_theme_support( 'hfg_support' )[0];
		foreach ( $theme_support['builders'] as $builder => $components ) {
			if ( class_exists( $builder ) && in_array( 'HFG\Core\Interfaces\Builder', class_implements( $builder ) ) ) {
				/**
				 * @var Builder $new_builder
				 */
				$new_builder = new $builder();
				$new_builder->register_builder_hooks();
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

		add_filter( 'body_class', array( $this, 'hfg_body_classes' ) );
	}

	public function hfg_body_classes( $classes ) {
		if ( is_customize_preview() ) {
			$classes[] = 'customize-previewing';
		}

		$classes[] = 'menu_sidebar_slide_left';

		return $classes;
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
		wp_enqueue_style( 'hfg-customizer-control', esc_url( $this->settings->url ) . '/assets/css/admin/customizer/customizer' . $suffix . '.css' );
		wp_enqueue_script(
			'hfg-builder-v1',
			esc_url( $this->settings->url ) . '/assets/js/customizer/builder-v1' . $suffix . '.js',
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
			esc_url( $this->settings->url ) . '/assets/js/customizer/builder' . $suffix . '.js',
			array(
				'hfg-builder-v1',
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
			wp_enqueue_script(
				'hfg-customizer',
				esc_url( $this->settings->url ) . '/assets/js/customizer/customizer' . $suffix . '.js',
				array(
					'customize-preview',
					'customize-selective-refresh',
				),
				'20151215',
				true
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
	}

	public function get_typo_fields() {
		return new Typography();
	}

	public function get_styling_config() {
		$fields = new Style();
		return apply_filters( 'hfg/get_styling_config', $fields );
	}

	public function template() {
		require_once  $this->settings->path . '/templates/rows.php';
		?>
		<script type="text/html" id="tmpl-hfg--builder-panel">
			<div class="hfg--customize-builder">
				<div class="hfg--cb-inner">
					<div class="hfg--cb-header">
						<div class="hfg--cb-devices-switcher">
						</div>
						<div class="hfg--cb-actions">
							<?php do_action( 'hfg/builder-panel/actions-buttons' ); ?>
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
