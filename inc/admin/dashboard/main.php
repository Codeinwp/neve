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
	 * Useful plugins array.
	 *
	 * @var array
	 */
	private $useful_plugins = [
		'optimole-wp',
		'wp-landing-kit',
		'otter-blocks',
		'wp-cloudflare-page-cache',
		'templates-patterns-collection',
		'themeisle-companion',
		'translatepress-multilingual',
		'amp',
	];

	/**
	 * Plugins Cache key.
	 *
	 * @var string
	 */
	private $plugins_cache_key = 'neve_dash_useful_plugins_v2';

	/**
	 * Plugins Cache Hash key.
	 *
	 * @var string
	 */
	private $plugins_cache_hash_key = 'neve_dash_useful_plugins_hash_v2';

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

		$this->copy_customizer_page( $theme_page );

		if ( ! defined( 'NEVE_PRO_VERSION' ) || 'valid' !== apply_filters( 'product_neve_license_status', false ) ) {
			// Add Custom Layout submenu for upsell.
			add_submenu_page( // phpcs:ignore WPThemeReview.PluginTerritory.NoAddAdminPages.add_menu_pages_add_submenu_page
				$theme_page,
				__( 'Custom Layouts', 'neve' ),
				__( 'Custom Layouts', 'neve' ),
				$capability,
				'admin.php?page=neve-welcome#custom-layouts'
			);
		}
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
				'text' => __( 'Upload Logo', 'neve' ),
				'link' => add_query_arg( [ 'autofocus[control]' => 'custom_logo' ], admin_url( 'customize.php' ) ),
			],
			[
				'text' => __( 'Set Colors', 'neve' ),
				'link' => add_query_arg( [ 'autofocus[section]' => 'neve_colors_background_section' ], admin_url( 'customize.php' ) ),
			],
			[
				'text' => __( 'Customize Fonts', 'neve' ),
				'link' => add_query_arg( [ 'autofocus[control]' => 'neve_headings_font_family' ], admin_url( 'customize.php' ) ),
			],
			[
				'text' => __( 'Layout Options', 'neve' ),
				'link' => add_query_arg( [ 'autofocus[panel]' => 'neve_layout' ], admin_url( 'customize.php' ) ),
			],
			[
				'text' => __( 'Header Options', 'neve' ),
				'link' => add_query_arg( [ 'autofocus[panel]' => 'hfg_header' ], admin_url( 'customize.php' ) ),
			],
			[
				'text' => __( 'Blog Layouts', 'neve' ),
				'link' => add_query_arg( [ 'autofocus[section]' => 'neve_blog_archive_layout' ], admin_url( 'customize.php' ) ),
			],
			[
				'text' => __( 'Footer Options', 'neve' ),
				'link' => add_query_arg( [ 'autofocus[panel]' => 'hfg_footer' ], admin_url( 'customize.php' ) ),
			],
			[
				'text' => __( 'Content / Sidebar', 'neve' ),
				'link' => add_query_arg( [ 'autofocus[section]' => 'neve_sidebar' ], admin_url( 'customize.php' ) ),
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
				'section' => __( 'Header Features', 'neve' ),
				'items'   => [
					[
						'title'       => __( 'Advanced Header Components', 'neve' ),
						'description' => __( 'Additional components for contact info, language switcher, and HTML sections', 'neve' ),
					],
					[
						'title'       => __( 'Dynamic Headers', 'neve' ),
						'description' => __( 'Sticky and transparent headers with per-page settings', 'neve' ),
					],
				],
			],
			[
				'section' => __( 'Blog Features', 'neve' ),
				'items'   => [
					[
						'title'       => __( 'Blog Layouts', 'neve' ),
						'description' => __( 'Additional blog and archive page layouts with custom sorting options', 'neve' ),
					],
					[
						'title'       => __( 'Advanced Blog Features', 'neve' ),
						'description' => __( 'Reading time, social sharing, and related posts functionality', 'neve' ),
					],
				],
			],
			[
				'section' => __( 'WooCommerce Features', 'neve' ),
				'items'   => [
					[
						'title'       => __( 'Shop Customization', 'neve' ),
						'description' => __( 'Advanced product layouts, quick view, wishlist functionality', 'neve' ),
					],
				],
			],
			[
				'section' => __( 'Additional Features', 'neve' ),
				'items'   => [
					[
						'title'       => __( 'Multilingual Support', 'neve' ),
						'description' => __( 'Enhanced WPML, Weglot and Polylang compatibility', 'neve' ),
					],
					[
						'title'       => __( 'White Label', 'neve' ),
						'description' => __( 'Remove Neve branding for client websites', 'neve' ),
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
		return array(
			'hfg_module'             => array(
				'nicename'    => __( 'Header Booster', 'neve' ),
				'description' => __( 'Extend your header with more components and settings, build sticky/transparent headers or display them conditionally.', 'neve' ),
			),
			'woocommerce_booster'    => array(
				'nicename'    => __( 'WooCommerce Booster', 'neve' ),
				'description' => __( 'Empower your online store with awesome new features, specially designed for a smooth WooCommerce integration.', 'neve' ),
			),
			'easy_digital_downloads' => array(
				'nicename'    => __( 'Easy Digital Downloads Booster', 'neve' ),
				'description' => __( 'Enhance your Easy Digital Downloads store with additional customization settings.', 'neve' ),
			),
			'blog_pro'               => array(
				'nicename'    => __( 'Blog Booster', 'neve' ),
				'description' => __( 'Give a huge boost to your entire blogging experience with features specially designed for increased user experience.', 'neve' ),
			),
			'post_type_enhancements' => array(
				'nicename'    => __( 'Post types enhancements', 'neve' ),
				'description' => __( 'Enable Neve post enhancements for custom post types.', 'neve' ),
			),
			'scroll_to_top'          => array(
				'nicename'    => __( 'Scroll To Top', 'neve' ),
				'description' => __( 'Simple but effective module to help you navigate back to the top of the really long pages.', 'neve' ),
			),
			'performance_features'   => array(
				'nicename'    => __( 'Performance', 'neve' ),
				'description' => __( 'Simple and effective optimizations options to enhance the performance of your site.', 'neve' ),
			),
			'block_editor_booster'   => array(
				'nicename'    => __( 'Block Editor Booster', 'neve' ),
				'description' => __( 'Do more with the Block Editor with Otter\'s additional blocks made specifically for Neve Pro.', 'neve' ),
			),
			'white_label'            => array(
				'nicename'    => __( 'White Label', 'neve' ),
				'description' => __( 'For any developer or agency out there building websites for their own clients, we\'ve made it easy to present Neve as your own and use your brand name instead.', 'neve' ),
			),
			'custom_layouts'         => array(
				'nicename'    => __( 'Custom Layouts', 'neve' ),
				'description' => __( 'Easily create custom headers and footers as well as adding your own custom code or content in any location across your site and display them conditionally.', 'neve' ),
			),
			'elementor_booster'      => array(
				'nicename'    => __( 'Elementor Booster', 'neve' ),
				'description' => __( 'Leverage the true flexibility of Elementor with powerful addons and templates that you can import with just one click.', 'neve' ),
			),
			'lifterlms_booster'      => array(
				'nicename'    => __( 'LifterLMS Booster', 'neve' ),
				'description' => __( 'Boost your users learning process with cool new features designed to work smoothly with LifterLMS.', 'neve' ),
			),
			'typekit_fonts'          => array(
				'nicename'    => __( 'Typekit Fonts', 'neve' ),
				'description' => __( 'Easily embed Adobe Fonts in your WordPress website.', 'neve' ),
			),
			'custom_sidebars'        => array(
				'nicename'    => __( 'Custom Sidebars', 'neve' ),
				'description' => __( 'Easily create different set of widgets that can be shown throughout your website. Add display conditions to make the content of your sidebar relevant.', 'neve' ),
			),
			'access_restriction'     => array(
				'nicename'    => __( 'Content restriction', 'neve' ),
				'description' => __( 'Optionally restrict access to specific parts of your website to certain users, user roles, or require a password to access.', 'neve' ),
			),
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
				'title'       => __( 'Otter Blocks', 'neve' ),
				'description' => __( 'Advanced blocks for modern WordPress editing', 'neve' ),
			],
			'templates-patterns-collection' => [
				'title'       => __( 'Starter Sites', 'neve' ),
				'description' => __( 'Import ready-made websites with a single click', 'neve' ),
			],
			'wp-full-stripe-free'           => [
				'title'       => __( 'WP Full Pay', 'neve' ),
				'description' => __( 'Simple ecommerce solution with Stripe integration', 'neve' ),
			],
			'optimole-wp'                   => [
				'title'       => __( 'Optimole', 'neve' ),
				'description' => __( 'Smart image optimization and CDN', 'neve' ),
			],
			'wp-cloudflare-page-cache'      => [
				'title'       => __( 'Super Page Cache', 'neve' ),
				'description' => __( 'Lightning-fast caching made simple', 'neve' ),
			],
			'feedzy-rss-feeds'              => [
				'title'       => __( 'Feedzy', 'neve' ),
				'description' => __( 'RSS feeds aggregator and content curator', 'neve' ),
			],
			'hyve-lite'                     => [
				'title'       => __( 'Hyve', 'neve' ),
				'description' => __( 'AI chatbot for your website', 'neve' ),
			],
		];

		foreach ( $plugins as $slug => $args ) {

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
	 * Get the useful plugin data.
	 *
	 * @return array
	 */
	private function get_useful_plugins() {
		$available    = get_transient( $this->plugins_cache_key );
		$hash         = get_transient( $this->plugins_cache_hash_key );
		$current_hash = substr( md5( wp_json_encode( $this->useful_plugins ) ), 0, 5 );

		if ( $available !== false && $hash === $current_hash ) {
			$available = json_decode( $available, true );
			foreach ( $available as $slug => $args ) {
				$available[ $slug ]['cta']        = ( $args['cta'] === 'external' ) ? 'external' : $this->plugin_helper->get_plugin_state( $slug );
				$available[ $slug ]['path']       = $this->plugin_helper->get_plugin_path( $slug );
				$available[ $slug ]['activate']   = $this->plugin_helper->get_plugin_action_link( $slug );
				$available[ $slug ]['deactivate'] = $this->plugin_helper->get_plugin_action_link( $slug, 'deactivate' );
				$available[ $slug ]['network']    = $this->plugin_helper->get_is_network_wide( $slug );
				$available[ $slug ]['version']    = ! empty( $available[ $slug ]['version'] ) ? $this->plugin_helper->get_plugin_version( $slug, $available[ $slug ]['version'] ) : '';
			}

			return $available;
		}

		$data = [];
		foreach ( $this->useful_plugins as $slug ) {

			if ( array_key_exists( $slug, $this->get_external_plugins_data() ) ) {
				$data[ $slug ] = $this->get_external_plugins_data()[ $slug ];
				continue;
			}

			$current_plugin = $this->plugin_helper->get_plugin_details( $slug );
			if ( $current_plugin instanceof \WP_Error ) {
				continue;
			}
			$data[ $slug ] = [
				'banner'      => $current_plugin->banners['low'],
				'name'        => html_entity_decode( $current_plugin->name ),
				'description' => html_entity_decode( $current_plugin->short_description ),
				'version'     => $current_plugin->version,
				'author'      => html_entity_decode( wp_strip_all_tags( $current_plugin->author ) ),
				'cta'         => $this->plugin_helper->get_plugin_state( $slug ),
				'path'        => $this->plugin_helper->get_plugin_path( $slug ),
				'activate'    => $this->plugin_helper->get_plugin_action_link( $slug ),
				'deactivate'  => $this->plugin_helper->get_plugin_action_link( $slug, 'deactivate' ),
				'network'     => $this->plugin_helper->get_is_network_wide( $slug ),
			];
		}

		set_transient( $this->plugins_cache_hash_key, $current_hash );
		set_transient( $this->plugins_cache_key, wp_json_encode( $data ) );

		return $data;
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

}
