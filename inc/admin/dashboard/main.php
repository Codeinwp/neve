<?php
/**
 * Main class of the Neve Dashboard
 *
 * @package neve
 */

namespace Neve\Admin\Dashboard;

use Neve\Core\Theme_Info;
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
	private $plugins_cache_key = 'neve_dash_useful_plugins';

	/**
	 * Plugins Cache Hash key.
	 *
	 * @var string
	 */
	private $plugins_cache_hash_key = 'neve_dash_useful_plugins_hash';

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

		$this->setup_config();
		add_action( 'init', [ $this, 'setup_config' ] );
		add_action( 'admin_menu', [ $this, 'register' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue' ] );
		add_action( 'init', array( $this, 'register_settings' ) );
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
		/* translators: %s - Theme name */
		$page_title = sprintf( __( '%s Options', 'neve' ), wp_kses_post( $theme['name'] ) );
		/* translators: %s - Theme name */
		$menu_name = sprintf( __( '%s Options', 'neve' ), wp_kses_post( $theme['name'] ) );

		$theme_page = ! empty( $theme['template'] ) ? $theme['template'] . '-welcome' : $theme['slug'] . '-welcome';
		add_theme_page( $page_title, $menu_name, 'activate_plugins', $theme_page, [ $this, 'render' ] );
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

		if ( $screen->id !== 'appearance_page_' . $theme_page ) {
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
	}

	/**
	 * Get localization data for the dashboard script.
	 *
	 * @return array
	 */
	private function get_localization() {
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
			'plugins'                 => $this->get_useful_plugins(),
			'featureData'             => $this->get_free_pro_features(),
			'showFeedbackNotice'      => $this->should_show_feedback_notice(),
			'allfeaturesNeveProURL'   => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'seeallfeatures', 'freevspropage' ),
			'startSitesgetNeveProURL' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'welcomestartersitescard', 'nevedashboard' ),
			'upgradeURL'              => apply_filters( 'neve_upgrade_link_from_child_theme_filter', tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'getpronow', 'freevspropage' ) ),
			'supportURL'              => esc_url( 'https://wordpress.org/support/theme/neve/' ),
			'docsURL'                 => esc_url( 'https://docs.themeisle.com/article/946-neve-doc' ),
			'codexURL'                => esc_url( 'https://codex.nevewp.com/' ),
			'strings'                 => [
				'proTabTitle'                   => wp_kses_post( $plugin_name ),
				/* translators: %s - Theme name */
				'header'                        => sprintf( __( '%s Options', 'neve' ), wp_kses_post( $theme_name ) ),
				/* translators: %s - Theme name */
				'starterSitesCardDescription'   => sprintf( __( '%s now comes with a sites library with various designs to pick from. Visit our collection of demos that are constantly being added.', 'neve' ), wp_kses_post( $theme_name ) ),
				'starterSitesCardUpsellMessage' => esc_html__( 'Upgrade to the Pro version and get instant access to all Premium Starter Sites — including Expert Sites — and much more.', 'neve' ),
				/* translators: %s - Theme name */
				'starterSitesTabDescription'    => sprintf( __( 'With %s, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve' ), wp_kses_post( $theme_name ) ),
				/* translators: 1 - Theme name, 2 - Cloud Templates & Patterns Collection */
				'starterSitesUnavailableActive' => sprintf( __( 'In order to be able to import any starter sites for %1$s you would need to have the %2$s plugin active.', 'neve' ), wp_kses_post( $theme_name ), 'Cloud Templates & Patterns Collection' ),
				/* translators: %s - Theme name */
				'starterSitesUnavailableUpdate' => sprintf( __( 'In order to be able to import any starter sites for %1$s you would need to have the %2$s plugin updated to the latest version.', 'neve' ), wp_kses_post( $theme_name ), 'Cloud Templates & Patterns Collection' ),
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
					__( 'Enter your license from %1$s purchase history in order to get plugin updates', 'neve' ),
					'<a target="_blank" rel="external noreferrer noopener" href="https://store.themeisle.com/">ThemeIsle<span class="components-visually-hidden">' . esc_html__( '(opens in a new tab)', 'neve' ) . '</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="components-external-link__icon" role="img" aria-hidden="true" focusable="false" style="fill: #0073AA"><path d="M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"></path></svg></a>'
				),
			],
			'changelog'               => $this->cl_handler->get_changelog( get_template_directory() . '/CHANGELOG.md' ),
			'onboarding'              => [],
			'hasFileSystem'           => WP_Filesystem(),
			'hidePluginsTab'          => apply_filters( 'neve_hide_useful_plugins', ! array_key_exists( 'useful_plugins', $old_about_config ) ),
			'tpcPath'                 => defined( 'TIOB_PATH' ) ? TIOB_PATH . 'template-patterns-collection.php' : 'template-patterns-collection/template-patterns-collection.php',
			'tpcAdminURL'             => admin_url( 'themes.php?page=tiob-starter-sites' ),
			'pluginsURL'              => esc_url( admin_url( 'plugins.php' ) ),
		];

		if ( defined( 'NEVE_PRO_PATH' ) ) {
			$installed_plugins                     = get_plugins();
			$is_otter_installed                    = array_key_exists( 'otter-pro/otter-pro.php', $installed_plugins );
			$is_sparks_installed                   = array_key_exists( 'sparks-for-woocommerce/sparks-for-woocommerce.php', $installed_plugins );
			$data['changelogPro']                  = $this->cl_handler->get_changelog( NEVE_PRO_PATH . '/CHANGELOG.md' );
			$data['otterProInstall']               = $is_otter_installed ? esc_url( wp_nonce_url( admin_url( 'plugins.php?action=activate&plugin=otter-pro%2Fotter-pro.php&plugin_status=all&paged=1&s' ), 'activate-plugin_otter-pro/otter-pro.php' ) ) : esc_url( wp_nonce_url( admin_url( 'admin-post.php?action=install_otter_pro' ), 'install_otter_pro' ) );
			$data['sparksInstallActivateEndpoint'] = $is_sparks_installed ? esc_url( wp_nonce_url( admin_url( 'plugins.php?action=activate&plugin=sparks-for-woocommerce%2Fsparks-for-woocommerce.php&plugin_status=all&paged=1&s' ), 'activate-plugin_sparks-for-woocommerce/sparks-for-woocommerce.php' ) ) : esc_url( wp_nonce_url( admin_url( 'admin-post.php?action=install_sparks' ), 'install_sparks' ) );
		}

		if ( isset( $_GET['onboarding'] ) && $_GET['onboarding'] === 'yes' ) {
			$data['isOnboarding'] = true;
		}

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
				'url'         => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'copyrightnotice', 'nevedashboard' ),
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
				'title'       => __( 'Header/Footer builder', 'neve' ),
				'description' => __( 'Easily build your header and footer by dragging and dropping all the important elements in the real-time WordPress Customizer. More advanced options are available in PRO.', 'neve' ),
				'inLite'      => true,
				'docsLink'    => $this->get_doc_link( 'Header/Footer builder', 'https://docs.themeisle.com/category/1251-neve-header-builder' ),
			],
			[
				'title'       => __( 'Page Builder Compatibility', 'neve' ),
				'description' => __( 'Neve is fully compatible with Gutenberg, the new WordPress editor and for all of you page builder fans, Neve has full compatibility with Elementor, Beaver Builder, and all the other popular page builders.', 'neve' ),
				'inLite'      => true,
				'docsLink'    => $this->get_doc_link( 'Page Builder Compatibility', 'https://docs.themeisle.com/article/946-neve-doc#pagebuilders' ),
			],
			[
				'title'       => __( 'Header Booster', 'neve' ),
				'description' => __( 'Take the header builder to a new level with new awesome components: socials, contact, breadcrumbs, language switcher, multiple HTML, sticky and transparent menu, page header builder and many more.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Header Booster', 'https://docs.themeisle.com/article/1057-header-booster-documentation' ),
			],
			[
				'title'       => __( 'Page Header Builder', 'neve' ),
				'description' => __( 'The Page Header is the horizontal area that sits directly below the header and contains the page/post title. Easily design an attractive Page Header area using our dedicated builder.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Page Header Builder', 'https://docs.themeisle.com/article/1262-neve-page-header' ),
			],
			[
				'title'       => __( 'Custom Layouts', 'neve' ),
				'description' => __( 'Powerful Custom Layouts builder which allows you to easily create your own header, footer or custom content on any of the hook locations available in the theme.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Custom Layouts', 'https://docs.themeisle.com/article/1062-custom-layouts-module' ),
			],
			[
				'title'       => __( 'Blog Booster', 'neve' ),
				'description' => __( 'Give a huge boost to your entire blogging experience with features specially designed for increased user experience.', 'neve' ) . ' ' . __( 'Sharing, custom article sorting, comments integrations, number of minutes needed to read an article and many more.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Blog Booster', 'https://docs.themeisle.com/article/1059-blog-booster-documentation' ),
			],
			[
				'title'       => __( 'Elementor Booster', 'neve' ),
				'description' => __( 'Leverage the true flexibility of Elementor with powerful addons and templates that you can import with just one click.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Elementor Booster', 'https://docs.themeisle.com/article/1063-elementor-booster-module-documentation' ),
			],
			[
				'title'       => __( 'WooCommerce Booster', 'neve' ),
				'description' => __( 'Empower your online store with awesome new features, specially designed for a smooth WooCommerce integration.', 'neve' ) . ' ' . __( 'Wishlist, quick view, video products, advanced reviews, multiple dedicated layouts and many more.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'WooCommerce Booster', 'https://docs.themeisle.com/article/1058-woocommerce-booster-documentation' ),
			],
			[
				'title'       => __( 'LifterLMS Booster', 'neve' ),
				'description' => __( 'Make your LifterLMS pages look stunning with our PRO design options. Specially created to help you set up your online courses with minimum customizations.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'LifterLMS Booster', 'https://docs.themeisle.com/article/1084-lifterlms-booster-documentation' ),
			],
			[
				'title'       => __( 'Typekit(Adobe) Fonts', 'neve' ),
				'description' => __( "The module allows for an easy way of enabling new awesome Adobe (previous Typekit) Fonts in Neve's Typography options.", 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Typekit(Adobe) Fonts', 'https://docs.themeisle.com/article/1085-typekit-fonts-documentation' ),
			],
			[
				'title'       => __( 'White Label', 'neve' ),
				'description' => __( "For any developer or agency out there building websites for their own clients, we've made it easy to present the theme as your own.", 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'White Label', 'https://docs.themeisle.com/article/1061-white-label-module-documentation' ),
			],
			[
				'title'       => __( 'Scroll To Top', 'neve' ),
				'description' => __( 'Simple but effective module to help you navigate back to the top of the really long pages.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Scroll To Top', 'https://docs.themeisle.com/article/1060-scroll-to-top-module-documentation' ),
			],
			[
				'title'          => __( 'See all PRO features', 'neve' ),
				'presentational' => true,
			],
		];
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
