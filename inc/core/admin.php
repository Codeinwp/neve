<?php
/**
 * Admin functionality
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Core
 */

namespace Neve\Core;

use Neve\Admin\Dashboard\Plugin_Helper;
use Neve\Core\Settings\Mods_Migrator;
use Neve\Core\Theme_Info;

/**
 * Class Admin
 *
 * @package Neve\Core
 */
class Admin {
	use Theme_Info;

	/**
	 * Dismiss notice key.
	 *
	 * @var string
	 */
	private $dismiss_notice_key = 'neve_notice_dismissed';

	/**
	 * Theme Details
	 *
	 * @var \WP_Theme
	 */
	private $theme_args;

	/**
	 * Admin constructor.
	 */
	public function __construct() {
		$this->set_props();
		add_action(
			'admin_init',
			function () {
				if ( get_option( 'themeisle_ob_plugins_installed' ) !== 'yes' ) {
					return;
				}
				update_option( 'themeisle_blocks_settings_redirect', false );
				delete_transient( 'wpforms_activation_redirect' );
				update_option( 'themeisle_ob_plugins_installed', 'no' );
			},
			0
		);
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_gutenberg_scripts' ] );

		if ( get_option( $this->dismiss_notice_key ) !== 'yes' ) {
			add_action( 'admin_notices', [ $this, 'admin_notice' ], 0 );
			add_action( 'wp_ajax_neve_dismiss_welcome_notice', [ $this, 'remove_notice' ] );
		}

		add_action( 'admin_menu', [ $this, 'remove_background_submenu' ], 110 );
		add_action( 'after_switch_theme', [ $this, 'get_previous_theme' ] );

		add_filter( 'all_plugins', array( $this, 'change_plugin_names' ) );

		$this->auto_update_skin_and_builder();

		add_action( 'after_switch_theme', array( $this, 'migrate_options' ) );

		add_filter( 'ti_tpc_theme_mods_pre_import', [ $this, 'migrate_theme_mods_for_new_skin' ] );

		add_action( 'rest_api_init', [ $this, 'register_rest_routes' ] );
		add_filter( 'neve_pro_react_controls_localization', [ $this, 'adapt_conditional_headers' ] );
	}

	/**
	 * Automatic upgrade from legacy builder and skin on init.
	 *
	 * @return void
	 */
	private function auto_update_skin_and_builder() {
		// If already on new skin bail.
		if ( get_theme_mod( 'neve_new_skin' ) === 'new' || neve_was_auto_migrated_to_new() ) {
			return;
		}
		set_theme_mod( 'neve_auto_migrated_to_new_skin', true );

		$this->run_skin_and_builder_switches();

		$migrator = new Builder_Migrator();
		$response = $migrator->run();

		if ( $response === true ) {
			set_theme_mod( 'neve_migrated_builders', true );
			set_theme_mod( 'neve_new_skin', 'new' );
		}
	}

	/**
	 * Get data specific to TPC plugin.
	 *
	 * @return array
	 */
	private function get_tpc_plugin_data() {
		$plugin_helper = new Plugin_Helper();
		$slug          = 'templates-patterns-collection';
		$tpc_version   = $plugin_helper->get_plugin_version( $slug, false );

		$tpc_plugin_data['nonce']      = wp_create_nonce( 'wp_rest' );
		$tpc_plugin_data['slug']       = $slug;
		$tpc_plugin_data['cta']        = $plugin_helper->get_plugin_state( $slug );
		$tpc_plugin_data['path']       = $plugin_helper->get_plugin_path( $slug );
		$tpc_plugin_data['activate']   = $plugin_helper->get_plugin_action_link( $slug );
		$tpc_plugin_data['deactivate'] = $plugin_helper->get_plugin_action_link( $slug, 'deactivate' );
		$tpc_plugin_data['version']    = $tpc_version !== false ? $tpc_version : '';
		$tpc_plugin_data['adminURL']   = add_query_arg(
			array(
				'page' => 'neve-onboarding',
				'show' => 'welcome',
			),
			admin_url( 'admin.php' )
		);
		$tpc_plugin_data['pluginsURL'] = esc_url( admin_url( 'plugins.php' ) );
		$tpc_plugin_data['ajaxURL']    = esc_url( admin_url( 'admin-ajax.php' ) );
		$tpc_plugin_data['ajaxNonce']  = esc_attr( wp_create_nonce( 'remove_notice_confirmation' ) );
		$tpc_plugin_data['canInstall'] = current_user_can( 'install_plugins' );

		return $tpc_plugin_data;
	}

	/**
	 * Maybe register the script required for the welcome notice.
	 * The script has a component that replaces the "Try one of our ready to use Starter Sites" button.
	 * The button installs/activates and/or dismisses the notice as required.
	 */
	private function maybe_register_notice_script_starter_sites() {
		if ( get_option( $this->dismiss_notice_key, 'no' ) === 'yes' ) {
			return;
		}
		$screen = get_current_screen();
		if ( empty( $screen ) ) {
			return;
		}
		if ( ! in_array( $screen->id, [ 'dashboard', 'themes' ], true ) ) {
			return;
		}

		$bundle_path  = get_template_directory_uri() . '/assets/apps/starter-sites/build/';
		$dependencies = ( include get_template_directory() . '/assets/apps/starter-sites/build/notice.asset.php' );
		wp_register_script( 'neve-ss-notice', $bundle_path . 'notice.js', $dependencies['dependencies'], $dependencies['version'], true );

		wp_localize_script( 'neve-ss-notice', 'tpcPluginData', $this->get_tpc_plugin_data() );
		wp_enqueue_script( 'neve-ss-notice' );
		wp_set_script_translations( 'neve-ss-notice', 'neve' );
	}

	/**
	 * Register the script for react components.
	 */
	public function register_react_components() {
		$this->maybe_register_notice_script_starter_sites();

		$deps = include trailingslashit( NEVE_MAIN_DIR ) . 'assets/apps/components/build/components.asset.php';

		wp_register_script( 'neve-components', trailingslashit( NEVE_ASSETS_URL ) . 'apps/components/build/components.js', $deps['dependencies'], $deps['version'], false );
		wp_localize_script(
			'neve-components',
			'nvComponents',
			[
				'shouldUseColorPickerFix' => (int) ( ! neve_is_using_wp_version( '5.8' ) ),
				'customizerURL'           => esc_url( admin_url( 'customize.php' ) ),
			]
		);
		wp_set_script_translations( 'neve-components', 'neve' );

		if ( isset( $deps['chunks'] ) ) {
			foreach ( $deps['chunks'] as $chunk_file ) {

				$chunk_handle = 'neve-components-chunk-' . $chunk_file;
				wp_register_script( $chunk_handle, trailingslashit( NEVE_ASSETS_URL ) . 'apps/components/build/' . $chunk_file, [], $deps['version'], true );
				wp_enqueue_script( $chunk_handle );

				if ( function_exists( 'wp_set_script_translations' ) ) {
					wp_set_script_translations( $chunk_handle, 'neve' );
				}
			}
		}

		wp_register_style( 'neve-components', trailingslashit( NEVE_ASSETS_URL ) . 'apps/components/build/style-components.css', [ 'wp-components' ], $deps['version'] );
		wp_add_inline_style( 'neve-components', Dynamic_Css::get_root_css() );
	}

	/**
	 * Switch to the new 3.0 features.
	 *
	 * @return void
	 *
	 * @since 3.0.0
	 */
	public function run_skin_and_builder_switches() {
		$flag = 'neve_ran_migrations';

		if ( get_theme_mod( $flag ) === true ) {
			return;
		}

		set_theme_mod( $flag, true );

		if ( neve_had_old_hfb() ) {
			set_theme_mod( 'neve_migrated_builders', false );
		}

		$all_mods = get_theme_mods();

		$mods = [
			'hfg_header_layout',
			'hfg_footer_layout',
			'neve_blog_archive_layout',
			'neve_headings_font_family',
			'neve_body_font_family',
			'neve_global_colors',
			'neve_button_appearance',
			'neve_secondary_button_appearance',
			'neve_typeface_general',
			'neve_form_fields_padding',
			'neve_default_sidebar_layout',
			'neve_advanced_layout_options',
		];

		$should_switch = false;
		foreach ( $mods as $mod_to_check ) {
			if ( isset( $all_mods[ $mod_to_check ] ) ) {
				$should_switch = true;
				break;
			}
		}

		if ( ! $should_switch ) {
			return;
		}

		set_theme_mod( 'neve_new_skin', 'old' );
		set_theme_mod( 'neve_had_old_skin', true );
	}

	/**
	 * Filter out old HFG values if the new builder is active.
	 *
	 * @param array $theme_mods the theme mods array.
	 *
	 * @return array
	 * @since 3.0.0
	 */
	public function migrate_theme_mods_for_new_skin( $theme_mods ) {
		if ( ! neve_is_new_skin() ) {
			return $theme_mods;
		}
		$migrator = new Mods_Migrator( $theme_mods );

		return $migrator->get_migrated_mods();
	}

	/**
	 * Filter localization data to adapt to the new builder.
	 *
	 * @param array $array localization array.
	 *
	 * @return array
	 */
	public function adapt_conditional_headers( $array ) {
		if ( ! neve_is_new_builder() ) {
			return $array;
		}

		if ( isset( $array['headerControls'] ) ) {
			$array['headerControls'][] = 'hfg_header_layout_v2';
		}

		$array['currentValues'] = [ 'hfg_header_layout_v2' => json_decode( get_theme_mod( 'hfg_header_layout_v2', wp_json_encode( neve_hfg_header_settings() ) ), true ) ];

		return $array;
	}

	/**
	 * Register Rest Routes.
	 */
	public function register_rest_routes() {
		register_rest_route(
			'nv/v1/dashboard',
			'/plugin-state/(?P<slug>[a-z0-9-]+)',
			[
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => [ $this, 'get_plugin_state' ],
				'permission_callback' => function() {
					return ( current_user_can( 'install_plugins' ) && current_user_can( 'activate_plugins' ) );
				},
				'args'                => [
					'slug' => [
						'sanitize_callback' => 'sanitize_key',
					],
				],
			]
		);
	}

	/**
	 * Get any plugin's state.
	 *
	 * @param  \WP_REST_Request $request Request details.
	 * @return \WP_REST_Request|\WP_Error
	 */
	public function get_plugin_state( \WP_REST_Request $request ) {
		$slug = $request->get_param( 'slug' );

		$state = ( new Plugin_Helper() )->get_plugin_state( $slug );

		return rest_ensure_response(
			[
				'slug'  => $slug,
				'state' => $state,
			]
		);
	}

	/**
	 * Drop `Background` submenu item.
	 */
	public function remove_background_submenu() {
		global $submenu;

		if ( ! isset( $submenu['themes.php'] ) ) {
			return false;
		}

		foreach ( $submenu['themes.php'] as $index => $submenu_args ) {
			foreach ( $submenu_args as $arg_index => $arg ) {
				if ( preg_match( '/customize\.php.+autofocus%5Bcontrol%5D=background_image/', $arg ) === 1 ) {
					unset( $submenu['themes.php'][ $index ] );
				}
			}
		}
	}

	/**
	 * Setup Class Properties
	 */
	public function set_props() {
		$this->theme_args = wp_get_theme();
	}

	/**
	 * Get notice screenshot based on previous theme.
	 *
	 * @return string Image url.
	 */
	private function get_notice_picture() {
		return get_template_directory_uri() . '/assets/img/sites-list.jpg';
	}

	/**
	 * Add notice.
	 */
	public function admin_notice() {
		if ( apply_filters( 'neve_disable_starter_sites_admin_notice', false ) === true ) {
			return;
		}
		if ( defined( 'TI_ONBOARDING_DISABLED' ) && TI_ONBOARDING_DISABLED === true ) {
			return;
		}

		$current_screen = get_current_screen();
		if ( $current_screen->id !== 'dashboard' && $current_screen->id !== 'themes' ) {
			return;
		}

		if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
			return;
		}

		if ( is_network_admin() ) {
			return;
		}

		if ( ! current_user_can( 'install_plugins' ) ) {
			return;
		}

		// to check under the gutenberg v5.5.0
		if ( function_exists( 'is_gutenberg_page' ) && is_gutenberg_page() ) {
			return;
		}

		// to check above the gutenberg v5.5.0 (is_gutenberg_page is deprecated with )
		if ( method_exists( $current_screen, 'is_block_editor' ) ) {
			if ( $current_screen->is_block_editor() ) {
				return;
			}
		}

		/**
		 * Backwards compatibility.
		 */
		global $current_user;
		$user_id          = $current_user->ID;
		$dismissed_notice = get_user_meta( $user_id, $this->dismiss_notice_key, true );

		if ( $dismissed_notice === 'dismissed' ) {
			update_option( $this->dismiss_notice_key, 'yes' );
		}

		if ( get_option( $this->dismiss_notice_key, 'no' ) === 'yes' ) {
			return;
		}

		// Let's dismiss the notice if the user sees it for more than 1 week.
		$activated_time = get_option( 'neve_install' );

		if ( ! empty( $activated_time ) ) {
			if ( time() - intval( $activated_time ) > WEEK_IN_SECONDS ) {
				update_option( $this->dismiss_notice_key, 'yes' );

				return;
			}
		}

		$style = '
			.ti-about-notice{
				position: relative;
			}

			.ti-about-notice .notice-dismiss{
				position: absolute;
				z-index: 10;
			    top: 10px;
			    right: 10px;
			    padding: 10px 15px 10px 21px;
			    font-size: 13px;
			    line-height: 1.23076923;
			    text-decoration: none;
			}

			.ti-about-notice .notice-dismiss:before{
			    position: absolute;
			    top: 8px;
			    left: 0;
			    transition: all .1s ease-in-out;
			    background: none;
			}

			.ti-about-notice .notice-dismiss:hover{
				color: #00a0d2;
			}
		';

		echo '<style>' . wp_kses_post( $style ) . '</style>';
		$this->dismiss_script();
		echo '<div class="nv-welcome-notice updated notice ti-about-notice">';
		echo '<div class="notice-dismiss"></div>';
		$this->welcome_notice_content();
		echo '</div>';
	}

	/**
	 * Render welcome notice content
	 */
	public function welcome_notice_content() {
		$name       = apply_filters( 'ti_wl_theme_name', $this->theme_args->__get( 'Name' ) );
		$template   = $this->theme_args->get( 'Template' );
		$slug       = $this->theme_args->__get( 'stylesheet' );
		$theme_page = ! empty( $template ) ? $template . '-welcome' : $slug . '-welcome';

		$notice_template = '
			<style>%1$s</style>
			<div class="nv-notice-wrapper">
				<div class="nv-notice-column-container">
					<div class="nv-notice-column nv-notice-image">%2$s</div>
					<div class="nv-notice-column nv-notice-starter-sites">%3$s</div>
				</div>
			</div>
		';

		$ob_btn_link = admin_url( 'admin.php?page=' . $theme_page . '&onboarding=yes#starter-sites' );
		if ( defined( 'TIOB_PATH' ) ) {
			$ob_btn_link = add_query_arg(
				array(
					'page' => 'neve-onboarding',
					'show' => 'welcome',
				),
				admin_url( 'admin.php' )
			);
		}

		$onboarding_starter_sites_btn = sprintf(
			'<a href="%1$s" class="button button-primary button-hero install-now" >%2$s</a>',
			esc_url( $ob_btn_link ),
			sprintf( apply_filters( 'ti_onboarding_neve_start_site_cta', esc_html__( "Let's Get Started with Starter Templates", 'neve' ) ) )
		);

		$onboarding_notice_exit_btn = sprintf(
			'<a href="%1$s" class="ti-return-dashboard  button button-link button-hero" >
				<span>%2$s</span>
			</a>',
			esc_url( admin_url( '?page=neve-welcome' ) ),
			__( 'I want to build this website from scratch', 'neve' )
		);

		$onboarding_title_label = sprintf(
			// translators: %s: the name of the theme (Neve Theme).
			__( 'Thanks for downloading %s', 'neve' ),
			__( 'Neve Theme', 'neve' )
		) . ' 🎉';
		$onboarding_dashboard_label = __( 'Explore a vast library of pre-designed sites within Neve. Visit our constantly growing collection of demos to find the perfect starting point for your project.', 'neve' );

		$notice_starter_sites_container = sprintf(
			'
			<h2 class="nv-notice-title">%1$s</h2>
			<p class="about-description">%2$s</h3>
			<div class="nv-notice-actions">
				<div id="neve-ss-install">
					%3$s
				</div>
				%4$s
			</div>
			',
			$onboarding_title_label,
			$onboarding_dashboard_label,
			$onboarding_starter_sites_btn,
			$onboarding_notice_exit_btn
		);

		$notice_picture = sprintf(
			'<img src="%1$s"/>',
			esc_url( $this->get_notice_picture() )
		);

		$elementor_logo = '<img src="' . esc_url( get_template_directory_uri() ) . '/assets/img/elementor.svg" />';
		$gutenberg_logo = '<img src="' . esc_url( get_template_directory_uri() ) . '/assets/img/gutenberg.svg" />';

		$notice_picture .= '<div class="overlay">';
		$notice_picture .= '<span>';
		$notice_picture .= '<strong>30+</strong> ' . __( 'Starter Sites', 'neve' );
		$notice_picture .= '</span>';
		$notice_picture .= '<div class="builder-logos">';
		$notice_picture .= '<div class="builder-logo">' . $elementor_logo . '</div>';
		$notice_picture .= '<div class="builder-logo">' . $gutenberg_logo . '</div>';
		$notice_picture .= '</div>';
		$notice_picture .= '</div>';

		$style = '
		.nv-notice-wrapper .nv-notice-title {
			font-size: 23px;
			font-weight: bold;
			line-height: 1.5;
			margin: 0;
			padding: 9px 0 4px;
		}
		.nv-notice-wrapper p.about-description{
			color: #72777c;
			font-size: 15px;
			margin: 2px 0 5px;
			padding: 0 2px;
			line-height: 1.6;
		}
		.nv-notice-wrapper{
			padding: 23px 10px;
			max-width: 1500px;
		}
		.nv-notice-wrapper hr {
			margin: 20px -23px 0;
			border-top: 1px solid #f3f4f5;
			border-bottom: none;
		}
		.nv-notice-column-container h3{
			margin: 17px 0 0;
			font-size: 16px;
			line-height: 1.4;
		}
		.nv-notice-column-container p {
			color: #72777c;
		}
		.nv-notice-text p.ti-return-dashboard {
			margin-top: 30px;
		}
		.nv-notice-column-container img {
			max-height: 350px;
		}
		.nv-notice-image {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.nv-notice-image .overlay {
			position: absolute;
			bottom: 7px;
			right: 15px;
			background: rgba(0, 0, 0, 0.75);
			color: white;
			padding: 8px 8px 8px 16px;
			border-radius: 50px;
			font-weight: 500;
			font-size: 14px;
			backdrop-filter: blur(4px);
			border: 1px solid rgba(255, 255, 255, 0.1);
			box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
			z-index: 2;
			display: flex;
			align-items: center;
			gap: 10px;
		}

		.nv-notice-image .overlay .builder-logos {
			display: flex;
			gap: 10px;
			align-items: center;
			justify-content: center;
		}

		.nv-notice-image .overlay .builder-logo img {
			width: 30px;
			border-radius: 100%;
			border: 2px solid #fff;
			background: #fff;
		}

		.nv-notice-image .builder-logo {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.nv-notice-column-container {
			display: flex;
			flex-direction: row;
			gap: 48px;
		}
		.nv-notice-column-container .button.button-hero:is( .button-primary, .button-link ) {
			margin: 0px;
			white-space: normal;
			line-height: 1.2;
			padding: 12px 36px;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all 0.2s ease-in-out;
		}

		.nv-notice-column-container .button.button-hero:is( .button-primary ) {
			background: linear-gradient(90deg, #4559d9 0%,#6475e4 100%);
			border: 0;
    	box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
		}
		
		.nv-notice-column-container .button.button-hero:is( .button-primary ):hover {
			box-shadow: 0 6px 15px rgba(99, 102, 241, 0.4);
    	transform: translateY(-1px);
		}

		.nv-notice-column-container .button.button-hero:is( .button-link ) {
			padding: 12px 7px;
			color: #72777c;
			text-decoration: none;
		}

		.nv-notice-column-container .button.button-hero:is( .button-link ):hover {
			color:#5d6165;
			background: transparent;
		}
		.nv-notice-column-container .nv-notice-column {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		.nv-notice-actions {
			display: flex;
			flex-direction: row;
			gap: 10px;
			margin-top: 20px;
		}
		.nv-notice-starter-sites {
			max-width: 750px;
		}
		@media (max-width: 1200px) {
			.nv-notice-column-container {
				flex-direction: column;
				gap: 10px;
				text-align: center;
				align-items: center;
			}
			.nv-notice-column-container .nv-notice-column {
				align-items: center;
			}

			.nv-notice-actions {
				display: grid;
				gap: 10px;
			}
		}
		@media (max-width: 480px) {
			.nv-notice-actions {
				flex-direction: column;
				align-items: center;
			}
		}
		@-webkit-keyframes spin {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}
		#neve-ss-install button.is-loading {
			color: #828282 !important;
		}
		#neve-ss-install button.is-loading .dashicon {
			color: #646D82;
			animation-name: spin;
			animation-duration: 2000ms;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
		}
		';

		echo sprintf(
			$notice_template, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			$style, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			$notice_picture, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			$notice_starter_sites_container // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		);
	}

	/**
	 * Load site import module.
	 */
	public function load_site_import() {
		if ( class_exists( '\TIOB\Main' ) ) {
			\TIOB\Main::instance();
		}
	}

	/**
	 * Enqueue gutenberg scripts.
	 */
	public function enqueue_gutenberg_scripts() {
		$screen = get_current_screen();
		// if is_block_editor is `true` we should allow the Gutenberg styles to load eg. the new widgets page.
		if ( ! post_type_supports( $screen->post_type, 'editor' ) && $screen->is_block_editor !== true ) {
			return;
		}
		wp_enqueue_script(
			'neve-gutenberg-script',
			NEVE_ASSETS_URL . 'js/build/all/gutenberg.js',
			array( 'wp-blocks', 'wp-dom' ),
			NEVE_VERSION,
			true
		);

		$path = 'gutenberg-editor-style';

		wp_enqueue_style( 'neve-gutenberg-style', NEVE_ASSETS_URL . 'css/' . $path . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), NEVE_VERSION );
	}

	/**
	 * Dismiss notice JS
	 */
	private function dismiss_script() {
		?>
		<script type="text/javascript">
			function handleNoticeActions($) {
				var actions = $('.nv-welcome-notice').find('.notice-dismiss, .ti-return-dashboard, .options-page-btn')
				$.each(actions, function (index, actionButton) {
					$(actionButton).on('click', function (e) {
						e.preventDefault()
						var redirect = $(this).attr('href')
						$.post(
							'<?php echo esc_url( admin_url( 'admin-ajax.php' ) ); ?>',
							{
								nonce: '<?php echo esc_attr( wp_create_nonce( 'remove_notice_confirmation' ) ); ?>',
								action: 'neve_dismiss_welcome_notice',
								success: function () {
									if (typeof redirect !== 'undefined' && window.location.href !== redirect) {
										window.location = redirect
										return false
									}
									$('.nv-welcome-notice').fadeOut()
								}
							}
						)
					})
				})
			}

			jQuery(document).ready(function () {
				handleNoticeActions(jQuery)
			})
		</script>
		<?php
	}

	/**
	 * Memorize the previous theme to later display the import template for it.
	 */
	public function get_previous_theme() {
		$previous_theme = strtolower( get_option( 'theme_switched' ) );
		set_theme_mod( 'ti_prev_theme', $previous_theme );
	}

	/**
	 * Remove notice;
	 */
	public function remove_notice() {
		if ( ! isset( $_POST['nonce'] ) ) {
			return;
		}
		if ( ! wp_verify_nonce( sanitize_text_field( $_POST['nonce'] ), 'remove_notice_confirmation' ) ) {
			return;
		}
		update_option( $this->dismiss_notice_key, 'yes' );
		wp_die();
	}

	/**
	 * Change Orbit Fox and Otter plugin names to make clear where they are from.
	 */
	public function change_plugin_names( $plugins ) {
		if ( array_key_exists( 'themeisle-companion/themeisle-companion.php', $plugins ) ) {
			$plugins['themeisle-companion/themeisle-companion.php']['Name'] = 'Orbit Fox Companion by Neve theme';
		}
		if ( array_key_exists( 'otter-pro/otter-pro.php', $plugins ) ) {
			$plugins['otter-pro/otter-pro.php']['Description'] = $plugins['otter-pro/otter-pro.php']['Description'] . ' It is part of Block Editor Booster from Neve.';
		}

		return $plugins;
	}

	/**
	 * Import neve options when switching to a child theme.
	 */
	public function migrate_options() {
		$old_theme = strtolower( get_option( 'theme_switched' ) );
		if ( 'neve' !== $old_theme ) {
			return;
		}

		/* import Neve options */
		$neve_mods = get_option( 'theme_mods_neve' );

		if ( ! empty( $neve_mods ) ) {

			foreach ( $neve_mods as $neve_mod_k => $neve_mod_v ) {
				set_theme_mod( $neve_mod_k, $neve_mod_v );
			}
		}
	}
}
