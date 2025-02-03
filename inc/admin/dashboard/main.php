<?php
/**
 * Main class of the Neve Dashboard
 *
 * @package neve
 */

namespace Neve\Admin\Dashboard;

use Neve\Core\Limited_Offers;
use Neve\Core\Settings\Config;
use Neve\Core\Theme_Info;
use Neve\Core\Tracker;

/**
 * Class Main
 *
 * @package Neve\Admin\Dashboard
 */
class Main {

	use Theme_Info;
	/**
	 * Changelog Handler.
	 *
	 * @var Changelog_Handler
	 */
	private $cl_handler;
	/**
	 * Plugin Helper instance.
	 *
	 * @var Plugin_Helper
	 */
	private $plugin_helper;
	/**
	 * Current theme args.
	 *
	 * @var array
	 */
	private $theme_args = [];

	/**
	 * Main constructor.
	 */
	public function __construct() {
		$this->plugin_helper = new Plugin_Helper();
		$this->cl_handler    = new Changelog_Handler();
	}

	/**
	 * Run WordPress attached to actions.
	 */
	public function init() {

		add_action( 'init', [ $this, 'setup_config' ] );
		add_action( 'admin_menu', [ $this, 'register' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue' ] );
		add_action( 'init', array( $this, 'register_settings' ) );
		add_action( 'init', array( $this, 'register_about_page' ), 1 );
		
		add_action( 'admin_notices', array( $this, 'render_custom_layout_header' ) );
	}

	/**
	 * Add the about page with respect to the white label settings.
	 *
	 * @return void
	 */
	public function register_about_page() {
		$theme         = wp_get_theme();
		$filtered_name = apply_filters( 'ti_wl_theme_name', $theme->__get( 'Name' ) );
		$slug          = $theme->__get( 'stylesheet' );

		if ( empty( $slug ) || empty( $filtered_name ) ) {
			return;
		}

		// We check if the name is different from the filtered name,
		// if it is, the whitelabel is in use and we should not add the about page.
		// this check allows for child themes to use the about page.
		if ( $filtered_name !== $theme->__get( 'Name' ) ) {
			return;
		}

		add_filter(
			'neve_about_us_metadata',
			function () use ( $filtered_name ) {

				return [
					// Top-level page in the dashboard sidebar
					'location'         => 'neve-welcome',
					// Logo to display on the page
					'logo'             => get_template_directory_uri() . '/assets/img/dashboard/logo.svg',
					// Condition to show or hide the upgrade menu in the sidebar
					'has_upgrade_menu' => ! defined( 'NEVE_PRO_VERSION' ),
					// Add predefined product pages to the about page.
					'product_pages'    => [ 'otter-page' ],
					// Upgrade menu item link & text
					'upgrade_link'     => tsdk_translate_link( tsdk_utmify( esc_url( 'https://themeisle.com/themes/neve/upgrade/' ), 'aboutfilter', 'nevedashboard' ), 'query' ),
					'upgrade_text'     => __( 'Upgrade', 'neve' ) . ' ' . $filtered_name,
				];
			}
		);
	}

	/**
	 * Register Logger Setting
	 */
	public function register_settings() {
		register_setting(
			'neve_settings',
			'neve_logger_flag',
			[
				'type'         => 'string',
				'show_in_rest' => true,
				'default'      => '',
			]
		);

		register_setting(
			'neve_settings',
			Config::OPTION_LOCAL_GOOGLE_FONTS_HOSTING,
			[
				'type'         => 'boolean',
				'show_in_rest' => true,
				'default'      => false,
			]
		);
	}

	/**
	 * Setup the class props based on current theme.
	 */
	public function setup_config() {
		$theme = wp_get_theme();

		$this->theme_args['name']        = apply_filters( 'ti_wl_theme_name', $theme->__get( 'Name' ) );
		$this->theme_args['template']    = $theme->get( 'Template' );
		$this->theme_args['version']     = $theme->__get( 'Version' );
		$this->theme_args['description'] = apply_filters( 'ti_wl_theme_description', $theme->__get( 'Description' ) );
		$this->theme_args['slug']        = $theme->__get( 'stylesheet' );
	}

	/**
	 * Register theme options page.
	 *
	 * @return void
	 */
	public function register() {
		$theme = $this->theme_args;

		if ( empty( $theme['name'] ) || empty( $theme['slug'] ) ) {
			return;
		}

		$theme_page = ! empty( $theme['template'] ) ? $theme['template'] . '-welcome' : $theme['slug'] . '-welcome';

		$icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjQuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMS42QzAsMC43LDAuNywwLDEuNiwwaDI4LjhDMzEuMywwLDMyLDAuNywzMiwxLjZWMzBjMCwwLjktMC43LDEuNi0xLjYsMS42SDEuNkMwLjcsMzEuNSwwLDMwLjgsMCwzMFYxLjZ6CgkgTTEzLDE1Ljh2Ny41SDkuMVY4YzAtMC4xLDAtMC4xLDAuMS0wLjJjMCwwLDAuMSwwLDAuMiwwLjFsOS42LDcuOFY4LjJoMy44djE1LjJjMCwwLjEsMCwwLjEtMC4xLDAuMmMwLDAtMC4xLDAtMC4yLTAuMUwxMywxNS44egoJIE0yMi44LDI1LjdIOS4xVjI3aDEzLjdWMjUuN3oiLz4KPC9zdmc+Cg==';
		if ( $theme['name'] !== 'Neve' ) {
			$icon = 'dashicons-admin-appearance';
		}
		$neve_icon  = apply_filters( 'neve_menu_icon', $icon );
		$priority   = apply_filters( 'neve_menu_priority', 59 );  // The position of the menu item, 60 is the position of the Appearance menu.
		$capability = 'manage_options';

		// Place a theme page in the Appearance menu, for older versions of Neve Pro or TPC. to maintain backwards compatibility.
		if (
			( defined( 'NEVE_PRO_VERSION' ) && version_compare( NEVE_PRO_VERSION, '2.6.1', '<=' ) ) ||
			( defined( 'TIOB_VERSION' ) && version_compare( TIOB_VERSION, '1.1.38', '<=' ) )
		) {
			add_theme_page(
				/* translators: %s - Theme name */
				sprintf( __( '%s Options', 'neve' ), wp_kses_post( $theme['name'] ) ),
				/* translators: %s - Theme name */
				sprintf( __( '%s Options', 'neve' ), wp_kses_post( $theme['name'] ) ),
				$capability,
				'admin.php?page=neve-welcome'
			);
		}

		add_menu_page( // phpcs:ignore WPThemeReview.PluginTerritory.NoAddAdminPages.add_menu_pages_add_menu_page
			wp_kses_post( $theme['name'] ),
			wp_kses_post( $theme['name'] ),
			$capability,
			$theme_page,
			[ $this, 'render' ],
			$neve_icon, // The URL to the icon to be used for this menu
			$priority
		);

		// Add Dashboard submenu. Same slug as parent to allow renaming the automatic submenu that is added.
		add_submenu_page( // phpcs:ignore WPThemeReview.PluginTerritory.NoAddAdminPages.add_menu_pages_add_submenu_page
			$theme_page,
			__( 'Dashboard', 'neve' ),
			__( 'Dashboard', 'neve' ),
			$capability,
			$theme_page,
			[ $this, 'render' ]
		);

		do_action( 'neve_register_submenu_page', $theme_page, $capability );

		$this->copy_customizer_page( $theme_page );
	}

	/**
	 * Copy the customizer page to the dashboard.
	 *
	 * @param string $theme_page The theme page slug.
	 *
	 * @return void
	 */
	private function copy_customizer_page( $theme_page ) {
		global $submenu;
		if ( ! isset( $submenu['themes.php'] ) ) {
			return;
		}
		$themes_menu = $submenu['themes.php'];
		if ( empty( $themes_menu ) ) {
			return;
		}
		$customize_pos = array_search( 'customize', array_column( $themes_menu, 1 ) );
		if ( false === $customize_pos ) {
			return;
		}
		$themes_page_keys = array_keys( $themes_menu );
		if ( ! isset( $themes_page_keys[ $customize_pos ] ) ) {
			return;
		}

		$customizer_menu_item = array_splice( $themes_menu, $customize_pos, 1 );
		$customizer_menu_item = reset( $customizer_menu_item );
		if ( empty( $customizer_menu_item ) ) {
			return;
		}

		add_submenu_page( // phpcs:ignore WPThemeReview.PluginTerritory.NoAddAdminPages.add_menu_pages_add_submenu_page
			$theme_page,
			$customizer_menu_item[0],
			$customizer_menu_item[0],
			'manage_options',
			'customize.php'
		);
	}

	/**
	 * Render the application stub.
	 *
	 * @return void
	 */
	public function render() {
		echo '<div id="neve-dashboard"></div>';
	}

	/**
	 * Load css and scripts for the about page
	 */
	public function enqueue() {
		$screen = get_current_screen();
		if ( ! isset( $screen->id ) ) {
			return;
		}

		$theme      = $this->theme_args;
		$theme_page = ! empty( $theme['template'] ) ? $theme['template'] . '-welcome' : $theme['slug'] . '-welcome';

		if ( $screen->id !== 'toplevel_page_' . $theme_page ) {
			return;
		}

		$build_path   = get_template_directory_uri() . '/assets/apps/dashboard/build/';
		$dependencies = ( include get_template_directory() . '/assets/apps/dashboard/build/dashboard.asset.php' );

		wp_register_style( 'neve-dash-style', $build_path . 'style-dashboard.css', [ 'wp-components', 'neve-components' ], $dependencies['version'] );
		wp_style_add_data( 'neve-dash-style', 'rtl', 'replace' );
		wp_enqueue_style( 'neve-dash-style' );
		wp_register_script( 'neve-dash-script', $build_path . 'dashboard.js', array_merge( $dependencies['dependencies'], [ 'updates' ] ), $dependencies['version'], true );
		wp_localize_script( 'neve-dash-script', 'neveDash', apply_filters( 'neve_dashboard_page_data', $this->get_localization() ) );
		wp_enqueue_script( 'neve-dash-script' );

		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'neve-dash-script', 'neve' );
		}

		do_action( 'themeisle_sdk_dependency_enqueue_script', 'survey' );
	}

	/**
	 * Get localization data for the dashboard script.
	 *
	 * @return array
	 */
	private function get_localization() {

		$offer = new Limited_Offers();

		$old_about_config  = apply_filters( 'ti_about_config_filter', [ 'useful_plugins' => true ] );
		$theme_name        = apply_filters( 'ti_wl_theme_name', $this->theme_args['name'] );
		$plugin_name       = apply_filters( 'ti_wl_plugin_name', 'Neve Pro' );
		$plugin_name_addon = apply_filters( 'ti_wl_plugin_name', 'Neve Pro Addon' );
		$data              = [
			'nonce'                   => wp_create_nonce( 'wp_rest' ),
			'version'                 => 'v' . NEVE_VERSION,
			'assets'                  => get_template_directory_uri() . '/assets/img/dashboard/',
			'hasOldPro'               => (bool) ( defined( 'NEVE_PRO_VERSION' ) && version_compare( NEVE_PRO_VERSION, '1.1.11', '<' ) ),
			'isRTL'                   => is_rtl(),
			'isValidLicense'          => $this->has_valid_addons(),
			'notifications'           => $this->get_notifications(),
			'customizerShortcuts'     => $this->get_customizer_shortcuts(),
			'plugins'                 => $this->get_recommended_plugins(),
			'modules'                 => $this->get_modules(),
			'featureData'             => $this->get_free_pro_features(),
			'showFeedbackNotice'      => $this->should_show_feedback_notice(),
			'allfeaturesNeveProURL'   => tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'seeallfeatures', 'freevspropage' ), 'query' ),
			'startSitesgetNeveProURL' => tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'welcomestartersitescard', 'nevedashboard' ), 'query' ),
			'customLayoutsNeveProURL' => tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'customlayoutscard', 'nevedashboard' ), 'query' ),
			'upgradeURL'              => apply_filters( 'neve_upgrade_link_from_child_theme_filter', tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'getpronow', 'freevspropage' ), 'query' ) ),
			'upgradeURLModules'       => apply_filters( 'neve_upgrade_link_from_child_theme_filter', tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'getpronow', 'welcomepage' ), 'query' ) ),
			'supportURL'              => esc_url( 'https://wordpress.org/support/theme/neve/' ),
			'docsURL'                 => esc_url( 'https://docs.themeisle.com/article/946-neve-doc' ),
			'codexURL'                => esc_url( 'https://codex.nevewp.com/' ),
			'strings'                 => [
				'proTabTitle'                   => wp_kses_post( $plugin_name ),
				/* translators: %s - Theme name */
				'header'                        => wp_kses_post( $theme_name ),
				/* translators: %s - Theme name */
				'starterSitesCardDescription'   => sprintf( __( '%s now comes with a sites library with various designs to pick from. Visit our collection of demos that are constantly being added.', 'neve' ), wp_kses_post( $theme_name ) ),
				'starterSitesCardUpsellMessage' => esc_html__( 'Upgrade to the Pro version and get instant access to all Premium Starter Sites — including Expert Sites — and much more.', 'neve' ),
				/* translators: %s - Theme name */
				'starterSitesTabDescription'    => sprintf( __( 'With %s, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve' ), wp_kses_post( $theme_name ) ),
				/* translators: 1 - Theme name, 2 - Cloud Templates & Patterns Collection */
				'starterSitesUnavailableActive' => sprintf( __( 'In order to be able to import any starter sites for %1$s you would need to have the %2$s plugin active.', 'neve' ), wp_kses_post( $theme_name ), '<strong>Starter Sites & Templates by Neve</strong>' ),
				/* translators: %s - Theme name */
				'starterSitesUnavailableUpdate' => sprintf( __( 'In order to be able to import any starter sites for %1$s you would need to have the %2$s plugin updated to the latest version.', 'neve' ), wp_kses_post( $theme_name ), '<strong>Starter Sites & Templates by Neve</strong>' ),
				/* translators: %s - Theme name */
				'supportCardDescription'        => sprintf( __( 'We want to make sure you have the best experience using %1$s, and that is why we have gathered all the necessary information here for you. We hope you will enjoy using %1$s as much as we enjoy creating great products.', 'neve' ), wp_kses_post( $theme_name ) ),
				/* translators: %s - Theme name */
				'docsCardDescription'           => sprintf( __( 'Need more details? Please check our full documentation for detailed information on how to use %s.', 'neve' ), wp_kses_post( $theme_name ) ),
				/* translators: %s - "Neve Pro Addon" */
				'licenseCardHeading'            => sprintf( __( '%s license', 'neve' ), wp_kses_post( $plugin_name_addon ) ),
				/* translators: %s - "Neve Pro Addon" */
				'updateOldPro'                  => sprintf( __( 'Please update %s to the latest version and then refresh this page to have access to the options.', 'neve' ), wp_kses_post( $plugin_name_addon ) ),
				/* translators: %1$s - Author link - Themeisle */
				'licenseCardDescription'        => sprintf(
				// translators: store name (Themeisle)
					__( 'Enter your license from %1$s purchase history in order to get plugin updates', 'neve' ) . '.',
					'<a class="text-blue-600 hover:text-blue-700 hover:underline inline-flex gap-1 items-center" target="_blank" rel="external noreferrer noopener" href="' . tsdk_translate_link( 'https://store.themeisle.com/', 'query' ) . '">Themeisle<span class="sr-only">' . esc_html__( '(opens in a new tab)', 'neve' ) . '</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link shrink-0"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>'
				),
			],
			'changelog'               => $this->cl_handler->get_changelog( get_template_directory() . '/CHANGELOG.md' ),
			'onboarding'              => [],
			'hasFileSystem'           => WP_Filesystem(),
			'hidePluginsTab'          => apply_filters( 'neve_hide_useful_plugins', ! array_key_exists( 'useful_plugins', $old_about_config ) ),
			'tpcPath'                 => defined( 'TIOB_PATH' ) ? TIOB_PATH . 'template-patterns-collection.php' : 'template-patterns-collection/template-patterns-collection.php',
			'tpcAdminURL'             => admin_url( 'admin.php?page=tiob-starter-sites' ),
			'tpcOnboardingURL'        => admin_url( 'admin.php?page=neve-onboarding' ),
			'customizerURL'           => admin_url( 'customize.php' ),
			'pluginsURL'              => esc_url( admin_url( 'plugins.php' ) ),
			'getPluginStateBaseURL'   => esc_url( rest_url( '/nv/v1/dashboard/plugin-state/' ) ),
			'canInstallPlugins'       => current_user_can( 'install_plugins' ),
			'canActivatePlugins'      => current_user_can( 'activate_plugins' ),
			'deal'                    => $offer->get_localized_data(),
			'rootUrl'                 => get_site_url(),
			'daysSinceInstall'        => round( ( time() - get_option( 'neve_install', 0 ) ) / DAY_IN_SECONDS ),
			'proPluginVersion'        => defined( 'NEVE_PRO_VERSION' ) ? NEVE_PRO_VERSION : '',
		];

		if ( defined( 'NEVE_PRO_PATH' ) ) {
			$installed_plugins                     = get_plugins();
			$is_otter_installed                    = array_key_exists( 'otter-pro/otter-pro.php', $installed_plugins );
			$is_sparks_installed                   = array_key_exists( 'sparks-for-woocommerce/sparks-for-woocommerce.php', $installed_plugins );
			$data['changelogPro']                  = $this->cl_handler->get_changelog( NEVE_PRO_PATH . '/CHANGELOG.md' );
			$data['isOtterProInstalled']           = $is_otter_installed;
			$data['otterProInstall']               = $is_otter_installed ? esc_url( wp_nonce_url( admin_url( 'plugins.php?action=activate&plugin=otter-pro%2Fotter-pro.php&plugin_status=all&paged=1&s' ), 'activate-plugin_otter-pro/otter-pro.php' ) ) : esc_url( wp_nonce_url( admin_url( 'admin-post.php?action=install_otter_pro' ), 'install_otter_pro' ) );
			$data['sparksInstallActivateEndpoint'] = $is_sparks_installed ? esc_url( wp_nonce_url( admin_url( 'plugins.php?action=activate&plugin=sparks-for-woocommerce%2Fsparks-for-woocommerce.php&plugin_status=all&paged=1&s' ), 'activate-plugin_sparks-for-woocommerce/sparks-for-woocommerce.php' ) ) : esc_url( wp_nonce_url( admin_url( 'admin-post.php?action=install_sparks' ), 'install_sparks' ) );
			$data['moduleObserver']                = array(
				'customLayouts' => array(
					'labelSubMenu' => __( 'Custom Layouts', 'neve' ),
					'linkSubMenu'  => 'edit.php?post_type=neve_custom_layouts',
				),
			);

		}

		if ( isset( $_GET['onboarding'] ) && $_GET['onboarding'] === 'yes' ) {
			$data['isOnboarding'] = true;
		}
		$language            = get_user_locale();
		$available_languages = [
			'de_DE'        => 'de',
			'de_DE_formal' => 'de',
		];
		$lang_code           = isset( $available_languages[ $language ] ) ? 'de' : 'en';
		$data['lang']        = $lang_code;

		return $data;
	}

	/**
	 * Get the notifications for plugin and theme updates.
	 *
	 * @return array
	 */
	public function get_notifications() {
		$notifications = [];
		$slug          = 'neve';
		$themes_update = get_site_transient( 'update_themes' );

		$plugin_folder = defined( 'NEVE_PRO_BASEFILE' ) ? basename( dirname( NEVE_PRO_BASEFILE ) ) : null;
		$plugin_path   = $plugin_folder ? $plugin_folder . '/neve-pro-addon.php' : null;

		if ( isset( $themes_update->response[ $slug ] ) ) {
			$update                = $themes_update->response[ $slug ];
			$notifications['neve'] = [
				// translators: s - theme name (Neve).
				'text'   => sprintf( __( 'New theme update for %1$s! Please update to %2$s.', 'neve' ), wp_kses_post( $this->theme_args['name'] ), wp_kses_post( $update['new_version'] ) ),
				'update' => [
					'type' => 'theme',
					'slug' => $slug,
				],
				'cta'    => __( 'Update Now', 'neve' ),
				'type'   => ( $plugin_path && is_plugin_active( $plugin_path ) ) ? 'warning' : null,
			];
		}

		if ( $plugin_path ) {
			$plugins_update = get_site_transient( 'update_plugins' );
			if ( is_plugin_active( $plugin_path ) && isset( $plugins_update->response[ $plugin_path ] ) ) {
				$update                          = $plugins_update->response[ $plugin_path ];
				$notifications['neve-pro-addon'] = [
					'text'   => sprintf(
					// translators: s - Pro plugin name (Neve Pro)
						__( 'New plugin update for %1$s! Please update to %2$s.', 'neve' ),
						wp_kses_post( apply_filters( 'ti_wl_plugin_name', 'Neve Pro' ) ),
						wp_kses_post( $update->new_version )
					),
					'update' => [
						'type' => 'plugin',
						'slug' => 'neve-pro-addon',
						'path' => $plugin_path,
					],
					'cta'    => __( 'Update Now', 'neve' ),
					'type'   => 'warning',
				];
			}
		}

		if ( $this->show_branding_notice() ) {
			$notifications['branding-discount'] = [
				'text'        => sprintf(
				// translators: s - Discount Code
					__( 'From 3.3.0 we decided to remove the copyright component from the free version. You can continue using it if you rollback to 3.2.x or you can upgrade to pro, using a one time 50%% discount: %s', 'neve' ),
					wp_kses_post( '<code>NEVEBRANDING50</code>' )
				),
				'url'         => tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'copyrightnotice', 'nevedashboard' ), 'query' ),
				'targetBlank' => true,
				'cta'         => __( 'Upgrade', 'neve' ),
			];
		}

		if ( count( $notifications ) === 1 && is_plugin_active( $plugin_path ) ) {
			foreach ( $notifications as $key => $notification ) {
				/* translators: 1 - Theme Name (Neve), 2 - Plugin Name (Neve Pro) */
				$notifications[ $key ]['text'] = sprintf( __( 'We recommend that both %1$s and %2$s are updated to the latest version to ensure optimal intercompatibility.', 'neve' ), wp_kses_post( $this->theme_args['name'] ), apply_filters( 'ti_wl_plugin_name', 'Neve Pro' ) );
			}
		}

		$notifications = apply_filters( 'neve_dashboard_notifications', $notifications );

		return $notifications;
	}

	/**
	 * Should branding notice be shown.
	 *
	 * @return bool
	 */
	private function show_branding_notice() {
		if ( $this->has_valid_addons() ) {
			return false;
		}

		return time() < strtotime( '2022-07-06' );
	}

	/**
	 * Get the Customizer Shortcut Links.
	 *
	 * @return array
	 */
	private function get_customizer_shortcuts() {
		return [
			[
				'text'        => __( 'Upload Logo', 'neve' ),
				'description' => __( 'Recommended size: 200x50px', 'neve' ),
				'link'        => add_query_arg( [ 'autofocus[control]' => 'custom_logo' ], admin_url( 'customize.php' ) ),
			],
			[
				'text'        => __( 'Set Colors', 'neve' ),
				'description' => __( 'Brand colors & site palette', 'neve' ),
				'link'        => add_query_arg( [ 'autofocus[section]' => 'neve_colors_background_section' ], admin_url( 'customize.php' ) ),
			],
			[
				'text'        => __( 'Customize Fonts', 'neve' ),
				'description' => __( 'Typography & text styles', 'neve' ),
				'link'        => add_query_arg( [ 'autofocus[control]' => 'neve_headings_font_family' ], admin_url( 'customize.php' ) ),
			],
			[
				'text'        => __( 'Layout Options', 'neve' ),
				'description' => __( 'Content structure & spacing', 'neve' ),
				'link'        => add_query_arg( [ 'autofocus[panel]' => 'neve_layout' ], admin_url( 'customize.php' ) ),
			],
			[
				'text'        => __( 'Header Options', 'neve' ),
				'description' => __( 'Navigation & branding setup', 'neve' ),
				'link'        => add_query_arg( [ 'autofocus[panel]' => 'hfg_header' ], admin_url( 'customize.php' ) ),
			],
			[
				'text'        => __( 'Blog Layouts', 'neve' ),
				'description' => __( 'Post display & formatting', 'neve' ),
				'link'        => add_query_arg( [ 'autofocus[section]' => 'neve_blog_archive_layout' ], admin_url( 'customize.php' ) ),
			],
			[
				'text'        => __( 'Footer Options', 'neve' ),
				'description' => __( 'PRO', 'neve' ) . ': ' . __( 'Custom footer layouts', 'neve' ),
				'link'        => add_query_arg( [ 'autofocus[panel]' => 'hfg_footer' ], admin_url( 'customize.php' ) ),
			],
			[
				'text'        => __( 'Content / Sidebar', 'neve' ),
				'description' => __( 'Widget areas & layout', 'neve' ),
				'link'        => add_query_arg( [ 'autofocus[section]' => 'neve_sidebar' ], admin_url( 'customize.php' ) ),
			],
		];
	}

	/**
	 * Get doc link.
	 *
	 * @param string $utm_term utm term to use for doc link.
	 * @param string $url url to doc.
	 * @return string
	 */
	private function get_doc_link( $utm_term, $url ) {

		return tsdk_utmify( $url, $utm_term, 'freevspropage' );
	}

	/**
	 * Get the pro features for the free v pro table.
	 *
	 * @return array
	 */
	private function get_free_pro_features() {
		return [
			[
				'section' => __( 'Website Essentials', 'neve' ),
				'items'   => [
					[
						'title'       => __( 'Advanced Header Features', 'neve' ),
						'description' => __( 'Full header settings control with sticky/transparent header, page-specific settings & mobile layouts.', 'neve' ),
					],
					[
						'title'       => __( 'Design Components', 'neve' ),
						'description' => __( 'Social icons, payment icons, divider, footer copyright editor and 15+ header components.', 'neve' ),
					],
					[
						'title'       => __( 'Custom Layouts', 'neve' ),
						'description' => __( 'Add custom blocks or content using hooks for headers, footers, 404 pages, and more.', 'neve' ),
					],
				],
			],
			[
				'section' => __( 'Page Builder Features', 'neve' ),
				'items'   => [
					[
						'title'       => __( 'Elementor Add-ons', 'neve' ),
						'description' => __( 'Add engaging elements, protect content, and create dynamic layouts with our advanced toolkit.', 'neve' ),
					],
					[
						'title'       => 'Otter Blocks PRO',
						'description' => __( 'Advanced Gutenberg blocks with animations & visibility controls.', 'neve' ),
					],
				],
			],
			[
				'section' => __( 'Content & Blog Features', 'neve' ),
				'items'   => [
					[
						'title'       => __( 'Advanced Blog Features', 'neve' ),
						'description' => __( 'Multiple layouts, reading time estimates, social sharing & related posts.', 'neve' ),
					],
					[
						'title'       => __( 'Starter Sites', 'neve' ),
						'description' => __( 'Access a growing library of beautiful, ready-to-use templates for every niche and industry.', 'neve' ),
					],
					[
						'title'       => __( 'Content Restriction', 'neve' ),
						'description' => __( 'Restrict content access by user, role, or password—ideal for membership sites.', 'neve' ),
					],
					[
						'title'       => __( 'Multilingual Support', 'neve' ),
						'description' => __( 'Seamlessly integrate with WPML, Weglot, and Polylang for enhanced multilingual capabilities.', 'neve' ),
					],
				],
			],
			[
				'section' => __( 'Store Features', 'neve' ),
				'items'   => [
					[
						'title'       => __( 'Product Experience', 'neve' ),
						'description' => __( 'Quick view popup, features video & wishlist functionality.', 'neve' ),
					],
					[
						'title'       => __( 'Shopping Enhancement', 'neve' ),
						'description' => __( 'Product comparison, advance product review & variation swatches.', 'neve' ),
					],
					[
						'title'       => __( 'Sales Features', 'neve' ),
						'description' => __( 'Custom thank you pages & announcement bars.', 'neve' ),
					],
				],
			],
			[
				'section' => __( 'Professional Features', 'neve' ),
				'items'   => [
					[
						'title'       => __( 'Priority Support', 'neve' ),
						'description' => __( 'Get fast and reliable assistance directly from our expert team.', 'neve' ),
					],
					[
						'title'       => __( 'White Label', 'neve' ),
						'description' => __( 'Remove Neve branding and rebrand it as your own for client websites.', 'neve' ),
					],
				],
			],
		];
	}

	/**
	 * Get modules.
	 *
	 * @return array[]
	 */
	private function get_modules() {
		$plugins = array(
			'hfg_module'             => array(
				'nicename'    => __( 'Header Booster', 'neve' ),
				'description' => __( 'Create unique sticky & transparent headers that adapt to scroll. Perfect for modern, immersive websites.', 'neve' ),
			),
			'woocommerce_booster'    => array(
				'nicename'    => __( 'WooCommerce Booster', 'neve' ),
				'description' => __( 'Transform your store with quick-view popups, wishlist features, and optimized checkout flow. Boost sales instantly.', 'neve' ),
				'byline'      => __( 'Boost conversion rates up to 15%', 'neve' ),
				'condition'   => class_exists( 'WooCommerce' ),
			),
			'easy_digital_downloads' => array(
				'nicename'    => __( 'Easy Digital Downloads Booster', 'neve' ),
				'description' => __( 'Enhance your Easy Digital Downloads store with additional customization settings.', 'neve' ),
				'condition'   => class_exists( 'Easy_Digital_Downloads' ),
			),
			'blog_pro'               => array(
				'nicename'    => __( 'Blog Booster', 'neve' ),
				'description' => __( 'Advanced layouts, reading time estimates, and social sharing to keep readers engaged longer.', 'neve' ),
			),
			'post_type_enhancements' => array(
				'nicename'    => __( 'Post types enhancements', 'neve' ),
				'description' => __( 'Extend Neve\'s powerful features to custom post types. Create unique layouts for portfolios, testimonials, and more.', 'neve' ),
			),
			'scroll_to_top'          => array(
				'nicename'    => __( 'Scroll To Top', 'neve' ),
				'description' => __( 'Add a customizable scroll-to-top button that appears exactly when needed. Style it to match your brand.', 'neve' ),
			),
			'performance_features'   => array(
				'nicename'    => __( 'Performance', 'neve' ),
				'description' => __( 'Optimize core vitals, enable lazy loading, and minify resources for lightning-fast load times.', 'neve' ),
			),
			'block_editor_booster'   => array(
				'nicename'    => __( 'Block Editor Booster', 'neve' ),
				'description' => __( 'Advanced Gutenberg blocks designed specifically for Neve. Build faster with pre-styled patterns.', 'neve' ),
			),
			'white_label'            => array(
				'nicename'    => __( 'White Label', 'neve' ),
				'description' => __( 'Rebrand Neve as your own. Change theme name, author, and links to match your agency identity.', 'neve' ),
			),
			'custom_layouts'         => array(
				'nicename'    => __( 'Custom Layouts', 'neve' ),
				'description' => __( 'Create conditional headers, footers, and content blocks. Perfect for custom landing pages and marketing campaigns.', 'neve' ),
			),
			'elementor_booster'      => array(
				'nicename'    => __( 'Elementor Booster', 'neve' ),
				'description' => __( 'Leverage the true flexibility of Elementor with powerful addons and templates that you can import with just one click.', 'neve' ),
				'condition'   => defined( 'ELEMENTOR_VERSION' ),
			),
			'lifterlms_booster'      => array(
				'nicename'    => __( 'LifterLMS Booster', 'neve' ),
				'description' => __( 'Enhanced course layouts, student dashboards, and learning features for your online education platform.', 'neve' ),
				'condition'   => class_exists( 'LifterLMS' ),
			),
			'typekit_fonts'          => array(
				'nicename'    => __( 'Typekit Fonts', 'neve' ),
				'description' => __( 'Access premium Adobe fonts directly in your theme. Add professional typography to any element.', 'neve' ),
			),
			'custom_sidebars'        => array(
				'nicename'    => __( 'Custom Sidebars', 'neve' ),
				'description' => __( 'Create unique sidebar layouts for different sections. Show relevant content based on user context.', 'neve' ),
			),
			'access_restriction'     => array(
				'nicename'    => __( 'Content restriction', 'neve' ),
				'description' => __( 'Create members-only content areas. Control access by user roles, logged-in status, or custom rules.', 'neve' ),
			),
		);

		return array_filter(
			$plugins,
			function ( $module ) {
				return ! isset( $module['condition'] ) || $module['condition'] === true;
			}
		);
	}

	/**
	 * Get the recommended plugins.
	 *
	 * @return array
	 */
	private function get_recommended_plugins() {
		$plugins = [
			'otter-blocks'                  => [
				'title'       => 'Otter Blocks',
				'description' => __( 'Advanced blocks for modern WordPress editing', 'neve' ),
			],
			'templates-patterns-collection' => [
				'title'       => __( 'Starter Sites', 'neve' ),
				'description' => __( 'Import ready-made websites with a single click', 'neve' ),
			],
			'wp-full-stripe-free'           => [
				'title'       => 'WP Full Pay',
				'description' => __( 'Simple ecommerce solution with Stripe integration', 'neve' ),
			],
			'optimole-wp'                   => [
				'title'       => 'Optimole',
				'description' => __( 'Smart image optimization and CDN', 'neve' ),
			],
			'wp-cloudflare-page-cache'      => [
				'title'       => 'Super Page Cache',
				'description' => __( 'Lightning-fast caching made simple', 'neve' ),
				'hide'        => defined( 'SPC_PRO_PATH' ),
			],
			'feedzy-rss-feeds'              => [
				'title'       => 'Feedzy',
				'description' => __( 'RSS feeds aggregator and content curator', 'neve' ),
			],
		];

		if ( is_php_version_compatible( '8.1' ) ) {
			$plugins['hyve-lite'] = [
				'title'       => 'Hyve',
				'description' => __( 'AI chatbot for your website', 'neve' ),
			];
		}


		foreach ( $plugins as $slug => $args ) {

			if ( isset( $args['hide'] ) && $args['hide'] === true ) {
				unset( $plugins[ $slug ] );
				continue;
			}

			$action = $this->plugin_helper->get_plugin_state( $slug );

			$plugins[ $slug ] = array_merge(
				[
					'cta'        => $action,
					'path'       => $this->plugin_helper->get_plugin_path( $slug ),
					'activate'   => $this->plugin_helper->get_plugin_action_link( $slug ),
					'deactivate' => $this->plugin_helper->get_plugin_action_link( $slug, 'deactivate' ),
					'network'    => $this->plugin_helper->get_is_network_wide( $slug ),
					'version'    => $this->plugin_helper->get_plugin_version( $slug, '0.0.0' ),
				],
				$args
			);
		}

		return $plugins;
	}

	/**
	 * Check if feedback notice should be shown after 14 days since activation.
	 *
	 * @return bool
	 */
	private function should_show_feedback_notice() {
		$activated_time = get_option( 'neve_install' );
		if ( ! empty( $activated_time ) ) {
			if ( time() - intval( $activated_time ) > 14 * DAY_IN_SECONDS ) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Get data of external plugins that are not hosted on wp.org.
	 *
	 * @return array
	 */
	private function get_external_plugins_data() {

		$plugins = array(
			'wp-landing-kit' => array(
				'banner'      => NEVE_ASSETS_URL . 'img/dashboard/wp-landing.jpg',
				'name'        => 'WP Landing Kit',
				'description' => 'Turn WordPress into a landing page powerhouse with Landing Kit. Map domains to pages or any other published resource.',
				'author'      => 'Themeisle',
				'cta'         => 'external',
				'url'         => tsdk_utmify( 'https://wplandingkit.com/', 'recommendedplugins', 'nevedashboard' ),
				'premium'     => true,
			),

		);

		return $plugins;
	}

	/**
	 * Renders the custom layout header section in the admin dashboard for Custom Layouts
	 *
	 * @access     public
	 * @return     void
	 */
	public function render_custom_layout_header() {
		$screen = get_current_screen();
		
		if ( ! $screen || ! ( $screen->id === 'edit-neve_custom_layouts' || $screen->id === 'neve_page_neve-custom-layout-upsell' ) ) {
			return;
		}

		$is_white_label_active = apply_filters( 'neve_is_theme_whitelabeled', false ) || apply_filters( 'neve_is_plugin_whitelabeled', false );

		$this->render_neve_header();

		?>
		<style>
			/* Hide default page header. */
			.wrap :is(h1.wp-heading-inline, .page-title-action) {
				display: none;
			}

			.cl-header-container {
				margin: 0 auto;
				padding: 20px;
				border: 1px solid #ddd;
				border-radius: 8px;
				background-color: white;
				margin-top: 40px;
				margin-right: 20px;
			}

			.cl-header-row {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 16px;
			}

			.cl-header-row h2 {
				font-size: 24px;
				margin: 0;
				color: #333;
			}

			.cl-header-row .cl-header-actions {
				display: flex;
				gap: 10px;
			}

			.cl-header-row .cl-header-actions .cl-btn-action {
				display: flex;
				align-items: center;
				gap: 8px;
				line-height: 1;
			}

			.cl-header-row .cl-description {
				margin-top: 10px;
				font-size: 14px;
				color: #555;
				line-height: 1.6;
			}

			/* Hide text on small screens but keep it accessible to screen readers */
			@media (max-width: 500px) {
				.cl-header-btn-text {
					position: absolute !important;
					width: 1px !important;
					height: 1px !important;
					padding: 0 !important;
					margin: -1px !important;
					border: 0 !important;
					clip: rect(0 0 0 0);
					overflow: hidden;
					white-space: nowrap; /* Prevent text wrapping inside the clipped area */
				}
			}
		</style>

		<div class="cl-header-container">
			<div class="cl-header-row">
				<h2><?php esc_html_e( 'Custom Layouts', 'neve' ); ?></h2>
				<div class="cl-header-actions">
					<button id="cl-open-modal" class="cl-btn-action button button-primary">
						<span class="dashicons dashicons-plus-alt2" aria-hidden="true"></span>
						<span class="cl-header-btn-text">
							<?php esc_html_e( 'Add New Layout', 'neve' ); ?>
						</span>
					</button>
					<?php if ( ! $is_white_label_active ) : ?>
						<a href="https://docs.themeisle.com/article/1062-custom-layouts-module" target="_blank" class="button cl-btn-action">
							<span class="dashicons dashicons-welcome-learn-more" aria-hidden="true"></span>
							<span class="cl-header-btn-text">
								<?php esc_html_e( 'View Tutorial', 'neve' ); ?>
							</span>
						</a>
					<?php endif; ?>
				</div>
			</div>
			<p class="cl-description">
				<?php esc_html_e( 'Design unique website sections without touching code. Create custom headers, footers, and content areas that match your vision.', 'neve' ); ?>
			</p>
		</div>

		<script>
			function openModal( event ) {
				event.preventDefault();

				document.dispatchEvent(
					new window.CustomEvent( 'nv-open-cl-modal', { detail: {} } )
				);
			}

			document.querySelector('#cl-open-modal')?.addEventListener('click', openModal);
		</script>
		<?php

		do_action( 'neve_render_after_header_custom_layouts' );
	}

	/**
	 * Renders the header section with Neve information and help actions.
	 *
	 * @access public
	 * @return void
	 */
	public function render_neve_header() {

		if ( apply_filters( 'neve_is_theme_whitelabeled', false ) || apply_filters( 'neve_is_plugin_whitelabeled', false ) ) {
			return;
		}

		$is_using_pro                 = defined( 'NEVE_PRO_VERSION' ) && 'valid' === apply_filters( 'product_neve_license_status', false );
		$neve_dashboard_url           = add_query_arg(
			array(
				'page' => 'neve-welcome',
			),
			admin_url( 'admin.php' )
		);
		$neve_dashboard_changelog_url = $neve_dashboard_url . '#changelog';

		?>
		<style>
			.nv-admin-header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: #fff;
				padding: 10px 20px;
				margin-top: 40px;
				margin-right: 20px;
				border-radius: 8px;
				border: 1px solid #ddd;
				gap: 10px;
				flex-wrap: wrap;
			}

			@media (max-width: 450px) {
				.nv-admin-header {
					justify-content: center;
					width: fit-content;
				}
			}

			@media (min-width: 451px) {
				.nv-admin-header-left {
					flex-grow: 1;
				}
			}
			.nv-admin-header-left {
				display: flex;
				align-items: center;
				gap: 12px;
			}

			.nv-admin-header-left img {
				width: 1.75rem;
				height: 1.75rem;
				border-radius: 0.125rem;
			}

			.nv-admin-header-left .nv-admin-title {
				font-size: 0.875rem;
				font-weight: 600;
				color: rgb(17, 24, 39);
			}

			.nv-admin-header-left .nv-admin-badge {
				font-size: 0.875rem;
				font-weight: 500;
				background-color: rgb(243, 244, 246);
				padding: 0.125rem 0.365rem;
				border-radius: 0.25rem;
				vertical-align: middle;
				text-transform: uppercase;

				color: rgb(55, 65, 81);
			}

			.nv-admin-header-left .nv-admin-version {
				color: rgb(107, 114, 128);
				vertical-align: middle;
				font-weight: 500;
			}

			.nv-admin-header-right {
				display: flex;
				align-items: center;
				gap: 30px;
			}

			.nv-admin-header-right a {
				color: rgb(75, 85, 99);
				text-decoration: none;
				font-size: 0.875rem;
				display: inline-flex;
				align-items: center;
				gap: 0.5rem;
			}

			.nv-admin-header-right a:hover {
				color: #0073aa;
			}

			.nv-admin-header-separator {
				width: 1px;
				height: 1rem;
				background-color: rgb(229, 231, 235);
			}
		</style>

		<div class="nv-admin-header">
			<div class="nv-admin-header-left">

				<a href="<?php echo esc_url_raw( $neve_dashboard_url ); ?>">
					<img src="<?php echo esc_url_raw( get_template_directory_uri() . '/assets/img/dashboard/logo.svg' ); ?>" alt="<?php esc_attr_e( 'Neve Logo', 'neve' ); ?>" />
				</a>

				<span class="nv-admin-title"><?php esc_html_e( 'Neve', 'neve' ); ?></span>
				<span class="nv-admin-badge"><?php echo $is_using_pro ? esc_html__( 'PRO', 'neve' ) : esc_html__( 'Free', 'neve' ); ?></span>

				<span class="nv-admin-version"><?php echo esc_html( sprintf( 'v%s', NEVE_VERSION ) ); ?></span>
			</div>

			<div class="nv-admin-header-right">
				<a href="https://docs.themeisle.com/article/946-neve-doc" target="_blank">
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
					<?php esc_html_e( 'Documentation', 'neve' ); ?>
				</a>
				<span class="nv-admin-header-separator"></span>
				<a href="<?php echo esc_url_raw( $neve_dashboard_changelog_url ); ?>" target="_blank">
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
					<?php esc_html_e( 'Changelog', 'neve' ); ?>
				</a>
			</div>
		</div>
		<?php
	}
}
