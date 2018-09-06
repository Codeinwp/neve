<?php
/**
 * ThemeIsle - About page class
 *
 * @package Neve\Admin\About_Page
 */

namespace Neve\Admin\About;

use Neve\Admin\Plugin_Install\Main as Plugin_Install;

/**
 * Singleton class used for generating the about page of the theme.
 *
 * @package Neve\Admin\About_Page
 */
class Page {
	/**
	 * Define the version of the class.
	 *
	 * @var string $version The Themeisle_About_Page class version.
	 */
	private $version = '1.0.0';
	/**
	 * Used for loading the texts and setup the actions inside the page.
	 *
	 * @var array $config The configuration array for the theme used.
	 */
	public $config;
	/**
	 * Get the theme name using wp_get_theme.
	 *
	 * @var string $theme_name The theme name.
	 */
	private $theme_name;
	/**
	 * Get the theme slug ( theme folder name ).
	 *
	 * @var string $theme_slug The theme slug.
	 */
	private $theme_slug;
	/**
	 * The current theme object.
	 *
	 * @var \WP_Theme $theme The current theme.
	 */
	private $theme;
	/**
	 * Holds the theme version.
	 *
	 * @var string $theme_version The theme version.
	 */
	private $theme_version;
	/**
	 * Define the menu item name for the page.
	 *
	 * @var string $menu_name The name of the menu name under Appearance settings.
	 */
	private $menu_name;
	/**
	 * Define the page title name.
	 *
	 * @var string $page_name The title of the About page.
	 */
	private $page_name;
	/**
	 * Define the page tabs.
	 *
	 * @var array $tabs The page tabs.
	 */
	private $tabs;
	/**
	 * Define the html notification content displayed upon activation.
	 *
	 * @var string $notification The html notification content.
	 */
	private $notification;
	/**
	 * The single instance of Main
	 *
	 * @var Page $instance The Main instance.
	 */
	private static $instance;

	/**
	 * The Main Themeisle_About_Page instance.
	 *
	 * We make sure that only one instance of Themeisle_About_Page exists in the memory at one time.
	 *
	 * @param array $config The configuration array.
	 */
	public static function init( $config ) {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Page ) ) {
			self::$instance = new Page();
			if ( ! empty( $config ) && is_array( $config ) ) {
				self::$instance->config = $config;
				self::$instance->setup_config();
				self::$instance->setup_actions();
			}
		}
	}

	/**
	 * Setup the class props based on the config array.
	 */
	public function setup_config() {
		$theme = wp_get_theme();
		if ( is_child_theme() ) {
			if ( method_exists( $theme->parent(), 'get' ) ) {
				$this->theme_name = $theme->parent()->get( 'Name' );
			}
			$this->theme = $theme->parent();
		} else {
			$this->theme_name = $theme->get( 'Name' );
			$this->theme      = $theme->parent();
		}
		$this->theme_version = $theme->get( 'Version' );
		$this->theme_slug    = $theme->get_template();
		$this->menu_name     = isset( $this->config['menu_name'] ) ? $this->config['menu_name'] : 'About ' . $this->theme_name;
		$this->page_name     = isset( $this->config['page_name'] ) ? $this->config['page_name'] : 'About ' . $this->theme_name;
		$url                 = add_query_arg(
			array(
				'onboarding' => 'yes',
			),
			admin_url( 'themes.php?page=' . $this->theme_slug . '-welcome' )
		) . '#demo-import';
		$this->notification  = isset( $this->config['notification'] ) ? $this->config['notification'] : ( apply_filters( 'neve_welcome_notice_filter', ( '<p>' . sprintf( 'Welcome! Thank you for choosing %1$s! To fully take advantage of the best our theme can offer please make sure you visit our %2$swelcome page%3$s.', $this->theme_name, '<a href="' . esc_url( admin_url( 'themes.php?page=' . $this->theme_slug . '-welcome' ) ) . '">', '</a>' ) . '</p><p><a href="' . esc_url( $url ) . '" class="button" style="text-decoration: none;">' . sprintf( 'Get started with %s', $this->theme_name ) . '</a></p>' ) ) );
		$this->tabs          = isset( $this->config['tabs'] ) ? $this->config['tabs'] : array();

	}

	/**
	 * Setup the actions used for this page.
	 */
	public function setup_actions() {

		add_action( 'admin_menu', array( $this, 'register' ) );
		/* activation notice */
		add_action( 'load-themes.php', array( $this, 'activation_admin_notice' ) );
		/* enqueue script and style for about page */
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );

		/* ajax callback for dismissable required actions */
		add_action(
			'wp_ajax_ti_about_page_dismiss_required_action',
			array(
				$this,
				'dismiss_required_action_callback',
			)
		);

		add_action(
			'wp_ajax_nopriv_ti_about_page_dismiss_required_action',
			array(
				$this,
				'dismiss_required_action_callback',
			)
		);
	}

	/**
	 * Hide required tab if no actions present.
	 *
	 * @return bool Either hide the tab or not.
	 */
	public function hide_required( $value, $tab ) {
		if ( $tab != 'recommended_actions' ) {
			return $value;
		}
		$required = $this->get_required_actions();
		if ( count( $required ) == 0 ) {
			return false;
		} else {
			return true;
		}
	}


	/**
	 * Register the menu page under Appearance menu.
	 */
	public function register() {
		if ( ! empty( $this->menu_name ) && ! empty( $this->page_name ) ) {

			$no_of_actions = 0;

			$actions = $this->get_required_actions();

			if ( ! empty( $actions ) ) {
				$no_of_actions = count( $actions );
			}
			$title = $this->page_name;

			if ( $no_of_actions > 0 ) {
				$title .= '<span class="update-plugins">' . esc_html( $no_of_actions ) . '</span>';
			}

			add_theme_page(
				$this->menu_name,
				$title,
				'activate_plugins',
				$this->theme_slug . '-welcome',
				array(
					$this,
					'about_page_render',
				)
			);
		}
	}

	/**
	 * Adds an admin notice upon successful activation.
	 */
	public function activation_admin_notice() {
		global $pagenow;
		if ( is_admin() && ( 'themes.php' == $pagenow ) && isset( $_GET['activated'] ) ) {
			add_action( 'admin_notices', array( $this, 'themeisle_about_page_welcome_admin_notice' ), 99 );
		}
	}

	/**
	 * Display an admin notice linking to the about page
	 */
	public function themeisle_about_page_welcome_admin_notice() {
		if ( ! empty( $this->notification ) ) {
			echo '<div class="updated notice is-dismissible">';
			echo wp_kses_post( $this->notification );
			echo '</div>';
		}
	}

	/**
	 * Render the main content page.
	 */
	public function about_page_render() {
		$this->render_header();
		$this->render_tabs();
	}

	/**
	 * Render about page header
	 */
	private function render_header() {
		?>
		<div class="about-loading loading">
			<div class="about-loader">
				<div class="loader-content">
				<p><i class="dashicons dashicons-update"></i><span><?php echo __( 'Loading...', 'neve' ); ?></span></p>
				</div>
			</div>
		</div>
		<?php
		if ( ! empty( $this->config['welcome_title'] ) ) {
			$title = $this->config['welcome_title'];
		}

		if ( ! empty( $this->config['welcome_content'] ) ) {
			$content = $this->config['welcome_content'];
		}

		if ( empty( $title ) && empty( $content ) ) {
			return;
		}

		echo '<div class="wrap about-wrap">';

		echo '<div class="header">';
		echo '<div class="info">';
		if ( ! empty( $title ) ) {
			echo '<h1>';
			echo esc_html( $title );
			if ( ! empty( $this->theme_version ) ) {
				echo '<span class="version-container">' . esc_html( $this->theme_version ) . '</span>';
			}
			echo '</h1>';
		}

		if ( ! empty( $content ) ) {
			echo '<div class="neve-about-text about-text">' . wp_kses_post( $content ) . '</div></div>';
		}

		echo '<a href="https://themeisle.com/" target="_blank" class="wp-badge epsilon-welcome-logo"></a>';
		echo '</div>';
	}

	/**
	 * Tab content render callback.
	 */
	private function render_tabs() {
		if ( empty( $this->tabs ) ) {
			return;
		}

		$count         = 0;
		$actions_count = $this->get_required_actions();
		if ( ! empty( $actions_count ) ) {
			$count = count( $actions_count );
		}
		$actions_badge = $count > 0 ? '<span class="badge-action-count">' . esc_html( $count ) . '</span>' : '';
		?>

		<div id="about_tabs">
			<ul class="nav-tab-wrapper wp-clearfix">
				<?php
				foreach ( $this->tabs as $tab_id => $tab_name ) {
					if ( $tab_id === 'recommended_actions' ) {
						$tab_name .= $actions_badge;
						if ( ! $this->should_show_recommended_actions_tab() ) {
							continue;
						}
					}
					?>
					<li style="margin-bottom: 0;" data-tab-id="<?php echo esc_attr( $tab_id ); ?>"><a class="nav-tab"
								href="#<?php echo esc_attr( $tab_id ); ?>"><?php echo wp_kses_post( $tab_name ); ?></a>
					</li>
					<?php
				}
				do_action( 'ti_about_page_after_tabs' );
				?>
			</ul>

			<?php
			foreach ( $this->tabs as $tab_id => $tab_name ) {
				if ( $tab_id === 'recommended_actions' ) {
					if ( ! $this->should_show_recommended_actions_tab() ) {
						continue;
					}
				}
				?>
				<div id="<?php echo esc_attr( $tab_id ); ?>">
					<?php call_user_func( array( $this, $tab_id . '_render' ) ); ?>
				</div>
				<?php
			}
			do_action( 'ti_about_page_after_tabs_content' )
			?>
		</div>
		<?php
	}

	/**
	 * Call plugin api
	 *
	 * @param string $slug plugin slug.
	 *
	 * @return array|mixed|object
	 */
	public function call_plugin_api( $slug ) {
		include_once( ABSPATH . 'wp-admin/includes/plugin-install.php' );

		$call_api = get_transient( 'ti_about_plugin_info_' . $slug );

		if ( false === $call_api ) {
			$call_api = plugins_api(
				'plugin_information',
				array(
					'slug'   => $slug,
					'fields' => array(
						'downloaded'        => false,
						'rating'            => false,
						'description'       => false,
						'short_description' => true,
						'donate_link'       => false,
						'tags'              => false,
						'sections'          => true,
						'homepage'          => true,
						'added'             => false,
						'last_updated'      => false,
						'compatibility'     => false,
						'tested'            => false,
						'requires'          => false,
						'downloadlink'      => false,
						'icons'             => true,
						'banners'           => true,
					),
				)
			);
			set_transient( 'ti_about_plugin_info_' . $slug, $call_api, 30 * MINUTE_IN_SECONDS );
		}

		return $call_api;
	}

	/**
	 * Check if plugin is active
	 *
	 * @param plugin-slug $slug the plugin slug.
	 *
	 * @return array
	 */
	public function check_if_plugin_active( $slug ) {
		$plugin_link_suffix = Plugin_Install::get_plugin_path( $slug );
		$path               = WPMU_PLUGIN_DIR . '/' . $plugin_link_suffix;
		if ( ! file_exists( $path ) ) {
			$path = WP_PLUGIN_DIR . '/' . $plugin_link_suffix;
			if ( ! file_exists( $path ) ) {
				$path = false;
			}
		}

		if ( file_exists( $path ) ) {

			include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

			$needs = is_plugin_active( $plugin_link_suffix ) ? 'deactivate' : 'activate';

			return array(
				'status' => is_plugin_active( $plugin_link_suffix ),
				'needs'  => $needs,
			);
		}

		return array(
			'status' => false,
			'needs'  => 'install',
		);
	}

	/**
	 * Check if a slug is from intergeo, visualizer or adblock and returns the correct slug for them.
	 *
	 * @param string $slug Plugin slug.
	 *
	 * @return string
	 */
	public function check_plugin_slug( $slug ) {
		switch ( $slug ) {
			case 'intergeo-maps':
			case 'visualizer':
				$slug = 'index';
				break;
			case 'adblock-notify-by-bweb':
				$slug = 'adblock-notify';
				break;
		}

		return $slug;
	}

	/**
	 * Display button for recommended actions or
	 *
	 * @param array $data Data for an item.
	 */
	public function display_button( $data ) {
		$button_new_tab = '_self';
		$button_class   = '';
		if ( isset( $tab_data['is_new_tab'] ) ) {
			if ( $data['is_new_tab'] ) {
				$button_new_tab = '_blank';
			}
		}

		if ( $data['is_button'] ) {
			$button_class = 'button button-primary';
		}
		echo '<a target="' . $button_new_tab . '" href="' . $data['button_link'] . '"class="' . esc_attr( $button_class ) . '">' . $data['button_label'] . '</a>';
	}

	/**
	 * Child themes
	 */
	public function child_themes() {
		echo '<div id="child-themes" class="ti-about-page-tab-pane">';
		$child_themes = isset( $this->config['child_themes'] ) ? $this->config['child_themes'] : array();
		if ( ! empty( $child_themes ) ) {
			if ( ! empty( $child_themes['content'] ) && is_array( $child_themes['content'] ) ) {
				echo '<div class="ti-about-row">';
				for ( $i = 0; $i < count( $child_themes['content'] ); $i ++ ) {
					if ( ( $i !== 0 ) && ( $i / 3 === 0 ) ) {
						echo '</div>';
						echo '<div class="ti-about-row">';
					}
					$child = $child_themes['content'][ $i ];
					if ( ! empty( $child['image'] ) ) {
						echo '<div class="ti-about-child-theme">';
						echo '<div class="ti-about-page-child-theme-image">';
						echo '<img src="' . esc_url( $child['image'] ) . '" alt="' . ( ! empty( $child['image_alt'] ) ? esc_html( $child['image_alt'] ) : '' ) . '" />';
						if ( ! empty( $child['title'] ) ) {
							echo '<div class="ti-about-page-child-theme-details">';
							if ( $child['title'] != $this->theme_name ) {
								echo '<div class="theme-details">';
								echo '<span class="theme-name">' . $child['title'] . '</span>';
								if ( ! empty( $child['download_link'] ) && ! empty( $child_themes['download_button_label'] ) ) {
									echo '<a href="' . esc_url( $child['download_link'] ) . '" class="button button-primary install right">' . esc_html( $child_themes['download_button_label'] ) . '</a>';
								}
								if ( ! empty( $child['preview_link'] ) && ! empty( $child_themes['preview_button_label'] ) ) {
									echo '<a class="button button-secondary preview right" target="_blank" href="' . $child['preview_link'] . '">' . esc_html( $child_themes['preview_button_label'] ) . '</a>';
								}
								echo '</div>';
							}
							echo '</div>';
						}
						echo '</div><!--ti-about-page-child-theme-image-->';
						echo '</div><!--ti-about-child-theme-->';
					}// End if().
				}// End for().
				echo '</div>';
			}// End if().
		}// End if().
		echo '</div>';
	}

	/**
	 * Return the releases changes array.
	 *
	 * @return array The releases array.
	 */
	private function parse_changelog() {
		WP_Filesystem();
		global $wp_filesystem;
		$changelog = $wp_filesystem->get_contents( get_template_directory() . '/CHANGELOG.md' );
		if ( is_wp_error( $changelog ) ) {
			$changelog = '';
		}
		$changelog = explode( PHP_EOL, $changelog );
		$releases  = array();
		foreach ( $changelog as $changelog_line ) {
			if ( strpos( $changelog_line, '**Changes:**' ) !== false || empty( $changelog_line ) ) {
				continue;
			}
			if ( substr( $changelog_line, 0, 3 ) === '###' || substr( $changelog_line, 1, 3 ) === '###' ) {
				if ( isset( $release ) ) {
					$releases[] = $release;
				}
				$release = array(
					'title'   => substr( $changelog_line, 3 ),
					'changes' => array(),
				);
			} else {
				$release['changes'][] = $changelog_line;
			}
		}

		return $releases;
	}

	/**
	 * Display feature title and description
	 *
	 * @param array $feature Feature data.
	 */
	public function display_feature_title_and_description( $feature ) {
		if ( ! empty( $feature['title'] ) ) {
			echo '<h3>' . wp_kses_post( $feature['title'] ) . '</h3>';
		}
		if ( ! empty( $feature['description'] ) ) {
			echo '<p>' . wp_kses_post( $feature['description'] ) . '</p>';
		}
	}

	/**
	 * Load css and scripts for the about page
	 */
	public function enqueue() {
		$current_screen = get_current_screen();
		if ( ! isset( $current_screen->id ) || $current_screen->id !== 'appearance_page_' . $this->theme_slug . '-welcome' ) {
			return;
		}

		// this is needed on all admin pages, not just the about page, for the badge action count in the WordPress main sidebar
		wp_enqueue_style( 'ti-about-page-css', get_template_directory_uri() . '/inc/admin/about/css/ti_about_page_css.css', array(), NEVE_VERSION );

		wp_enqueue_script(
			'ti-about-page-js',
			get_template_directory_uri() . '/inc/admin/about/js/ti_about_page_scripts.js',
			array(
				'jquery',
				'jquery-ui-tabs',
			),
			NEVE_VERSION
		);
		wp_enqueue_style( 'plugin-install' );
		wp_enqueue_script( 'plugin-install' );
		wp_enqueue_script( 'updates' );

		$required_actions = $this->get_required_actions();
		wp_localize_script(
			'ti-about-page-js',
			'tiAboutPageObject',
			array(
				'nr_actions_required' => count( $required_actions ),
				'ajaxurl'             => admin_url( 'admin-ajax.php' ),
				'template_directory'  => get_template_directory_uri(),
				'activating_string'   => esc_html__( 'Activating', 'neve' ),
			)
		);

		Plugin_Install::instance()->enqueue_scripts();
	}

	/**
	 * Return the valid array of required actions.
	 *
	 * @return array The valid array of required actions.
	 */
	private function get_required_actions() {
		$saved_actions = get_option( $this->theme_slug . '_required_actions' );
		if ( ! is_array( $saved_actions ) ) {
			$saved_actions = array();
		}
		$req_actions = isset( $this->config['recommended_actions'] ) ? $this->config['recommended_actions'] : array();
		$valid       = array();
		foreach ( $req_actions['content'] as $req_action ) {
			if ( ( ! isset( $req_action['check'] ) || ( isset( $req_action['check'] ) && ( $req_action['check'] == false ) ) ) && ( ! isset( $saved_actions[ $req_action['id'] ] ) ) ) {
				$valid[] = $req_action;
			}
		}

		return $valid;
	}

	/**
	 * Dismiss required actions
	 */
	public function dismiss_required_action_callback() {

		$recommended_actions = array();
		$req_actions         = isset( $this->config['recommended_actions'] ) ? $this->config['recommended_actions'] : array();
		foreach ( $req_actions['content'] as $req_action ) {
			$recommended_actions[] = $req_action;
		}

		$action_id = ( isset( $_GET['id'] ) ) ? $_GET['id'] : 0;

		echo esc_html( wp_unslash( $action_id ) ); /* this is needed and it's the id of the dismissable required action */

		if ( ! empty( $action_id ) ) {

			/* if the option exists, update the record for the specified id */
			if ( get_option( $this->theme_slug . '_required_actions' ) ) {

				$ti_about_page_show_required_actions = get_option( $this->theme_slug . '_required_actions' );

				switch ( esc_html( $_GET['todo'] ) ) {
					case 'add':
						$ti_about_page_show_required_actions[ absint( $action_id ) ] = true;
						break;
					case 'dismiss':
						$ti_about_page_show_required_actions[ absint( $action_id ) ] = false;
						break;
				}

				update_option( $this->theme_slug . '_required_actions', $ti_about_page_show_required_actions );

				/* create the new option,with false for the specified id */
			} else {

				$ti_about_page_show_required_actions_new = array();

				if ( ! empty( $recommended_actions ) ) {

					foreach ( $recommended_actions as $ti_about_page_required_action ) {

						if ( $ti_about_page_required_action['id'] == $action_id ) {
							$ti_about_page_show_required_actions_new[ $ti_about_page_required_action['id'] ] = false;
						} else {
							$ti_about_page_show_required_actions_new[ $ti_about_page_required_action['id'] ] = true;
						}
					}

					update_option( $this->theme_slug . '_required_actions', $ti_about_page_show_required_actions_new );

				}
			}
		}// End if().
	}

	/**
	 * Getting started tab content
	 */
	public function getting_started_render() {
		if ( ! empty( $this->config['getting_started'] ) ) {

			$getting_started = $this->config['getting_started'];

			if ( ! empty( $getting_started ) ) {

				echo '<div class="feature-section two-col">';

				foreach ( $getting_started as $getting_started_item ) {

					echo '<div class="col">';
					if ( ! empty( $getting_started_item['title'] ) ) {
						echo '<h3>' . $getting_started_item['title'] . '</h3>';
					}
					if ( ! empty( $getting_started_item['text'] ) ) {
						echo '<p>' . $getting_started_item['text'] . '</p>';
					}
					if ( ! empty( $getting_started_item['button_link'] ) && ! empty( $getting_started_item['button_label'] ) ) {

						echo '<p>';

						$count = 0;

						$actions_count = $this->get_required_actions();

						if ( ! empty( $actions_count ) ) {
							$count = count( $actions_count );
						}

						if ( $getting_started_item['recommended_actions'] && isset( $count ) ) {
							if ( $count == 0 ) {
								echo '<span class="dashicons dashicons-yes"></span>';
							} else {
								echo '<span class="dashicons dashicons-no-alt"></span>';
							}
						}
						$this->display_button( $getting_started_item );
						echo '</p>';
					}

					echo '</div><!-- .col -->';
				}// End foreach().
				echo '</div><!-- .feature-section three-col -->';
			}// End if().
		}
	}

	/**
	 * Recommended actions tab content
	 */
	public function recommended_actions_render() {
		$recommended_actions = isset( $this->config['recommended_actions'] ) ? $this->config['recommended_actions'] : array();

		if ( empty( $recommended_actions ) ) {
			return;
		}

		$actions = array();

		foreach ( $recommended_actions['content'] as $action ) {
			$actions[] = $action;
		}

		if ( empty( $actions ) ) {
			return;
		}
		if ( ! is_array( $actions ) ) {
			return;
		}

		echo '<div class="feature-section action-required demo-import-boxed" id="plugin-filter">';

		$ti_about_page_show_required_actions = get_option( $this->theme_slug . '_required_actions' );

		foreach ( $actions as $action_key => $action_value ) {

			$hidden = false;

			if ( $ti_about_page_show_required_actions[ $action_value['id'] ] === false ) {
				$hidden = true;
			}
			if ( $action_value['check'] ) {
				continue;
			}

			echo '<div class="ti-about-page-action-required-box">';

			if ( ! $hidden ) {
				echo '<span data-action="dismiss" class="dashicons dashicons-visibility ti-about-page-required-action-button" id="' . esc_attr( $action_value['id'] ) . '"></span>';
			} else {
				echo '<span data-action="add" class="dashicons dashicons-hidden ti-about-page-required-action-button" id="' . esc_attr( $action_value['id'] ) . '"></span>';
			}

			$this->display_feature_title_and_description( $action_value );

			if ( ! empty( $action_value['plugin_slug'] ) ) {
				$slug = $this->check_plugin_slug( $action_value['plugin_slug'] );
				?>
				<?php echo Plugin_Install::instance()->get_button_html( $slug ); ?>

				<?php

			}// End if().
			echo '</div>';
		}// End foreach().
		echo '</div>';
	}

	/**
	 * Recommended plugins tab content
	 */
	public function recommended_plugins_render() {
		$recommended_plugins = $this->config['recommended_plugins'];
		if ( empty( $recommended_plugins['content'] ) || ! is_array( $recommended_plugins['content'] ) ) {
			return;
		}

		echo '<div class="recommended-plugins" id="plugin-filter">';

		foreach ( $recommended_plugins['content'] as $recommended_plugins_item ) {

			if ( empty( $recommended_plugins_item['slug'] ) ) {
				continue;
			}

			$info = $this->call_plugin_api( $recommended_plugins_item['slug'] );

			$banner = $info->banners['low'];
			$active = $this->check_if_plugin_active( $recommended_plugins_item['slug'] );

			echo '<div class="plugin_box">';

			if ( ! empty( $banner ) ) {
				echo '<img class="plugin-banner" src="' . esc_url( $banner ) . '"/>';
			}
			if ( ! empty( $info->name ) && ! empty( $active ) ) {
				echo '<div class="title-action-wrapper">';
				echo '<span class="plugin-name">' . esc_html( $info->name ) . '</span>';
				echo '<span class="plugin-desc">' . esc_html( $info->short_description ) . '</span>';
				echo '</div>';

				echo '<div class="plugin-box-footer">';
				echo '<div  class="button-wrap">';
				echo '<span class="plugin-card-' . esc_attr( $recommended_plugins_item['slug'] ) . ' action_button ' . ( ( $active['needs'] !== 'install' && $active['status'] ) ? 'active' : '' ) . '">';
				echo Plugin_Install::instance()->get_button_html( $recommended_plugins_item['slug'] );
				echo '</span>';

				echo '</div>';
				if ( ! empty( $info->version ) || ! empty( $info->author ) ) {
					?>
					<div class="version-wrapper">
						<?php
						if ( ! empty( $info->version ) ) {
							echo '<span class="version">' . ( ! empty( $this->config['recommended_plugins']['version_label'] ) ? esc_html( $this->config['recommended_plugins']['version_label'] ) : '' ) . esc_html( $info->version ) . '</span>';
						}
						if ( ! empty( $info->author ) ) {
							echo '<span class="separator"> | </span>' . wp_kses_post( strtok( strip_tags( $info->author ), ',' ) );
						}
						?>
					</div>
					<?php
				}

				echo '</div>';
			}

			echo '</div><!-- .col.plugin_box -->';

		}// End foreach().

		echo '</div><!-- .recommended-plugins -->';

	}

	/**
	 * Support tab content
	 */
	public function support_render() {
		echo '<div class="feature-section two-col">';

		if ( ! empty( $this->config['support_content'] ) ) {

			$support_steps = $this->config['support_content'];

			if ( ! empty( $support_steps ) ) {

				foreach ( $support_steps as $support_step ) {

					echo '<div class="col">';

					if ( ! empty( $support_step['title'] ) ) {
						echo '<h3>';
						if ( ! empty( $support_step['icon'] ) ) {
							echo '<i class="' . $support_step['icon'] . '"></i>';
						}
						echo $support_step['title'];
						echo '</h3>';
					}

					if ( ! empty( $support_step['text'] ) ) {
						echo '<p>' . $support_step['text'] . '</p>';
					}

					if ( ! empty( $support_step['button_link'] ) && ! empty( $support_step['button_label'] ) ) {
						echo '<p>';
						$this->display_button( $support_step );
						echo '</p>';
					}

					echo '</div>';

				}// End foreach().
			}// End if().
		}// End if().

		echo '</div>';
	}

	/**
	 * Changelog tab content
	 */
	public function changelog_render() {
		$changelog = $this->parse_changelog();
		if ( ! empty( $changelog ) ) {
			echo '<div class="featured-section changelog">';
			foreach ( $changelog as $release ) {
				if ( ! empty( $release['title'] ) ) {
					echo '<h2>' . str_replace( '#', '', $release['title'] ) . ' </h2 > ';
				}
				if ( ! empty( $release['changes'] ) ) {
					echo implode( '<br/>', $release['changes'] );
				}
			}
			echo '</div><!-- .featured-section.changelog -->';
		}
	}

	/**
	 * Free vs Pro tab content
	 */
	public function free_pro_render() {
		$free_pro = isset( $this->config['free_pro'] ) ? $this->config['free_pro'] : array();
		if ( ! empty( $free_pro ) ) {
			if ( ! empty( $free_pro['free_theme_name'] ) && ! empty( $free_pro['pro_theme_name'] ) && ! empty( $free_pro['features'] ) && is_array( $free_pro['features'] ) ) {
				echo '<div class="feature-section">';
				echo '<div id="free_pro" class="ti-about-page-tab-pane ti-about-page-fre-pro">';
				echo '<table class="free-pro-table">';
				echo '<thead>';
				echo '<tr class="ti-about-page-text-right">';
				echo '<th></th>';
				echo '<th>' . esc_html( $free_pro['free_theme_name'] ) . '</th>';
				echo '<th>' . esc_html( $free_pro['pro_theme_name'] ) . '</th>';
				echo '</tr>';
				echo '</thead>';
				echo '<tbody>';
				foreach ( $free_pro['features'] as $feature ) {
					echo '<tr>';
					if ( ! empty( $feature['title'] ) || ! empty( $feature['description'] ) ) {
						echo '<td>';
						$this->display_feature_title_and_description( $feature );
						echo '</td>';
					}
					if ( ! empty( $feature['is_in_lite'] ) && ( $feature['is_in_lite'] == 'true' ) ) {
						echo '<td class="only-lite"><span class="dashicons-before dashicons-yes"></span></td>';
					} else {
						echo '<td class="only-pro"><span class="dashicons-before dashicons-no-alt"></span></td>';
					}
					if ( ! empty( $feature['is_in_pro'] ) && ( $feature['is_in_pro'] == 'true' ) ) {
						echo '<td class="only-lite"><span class="dashicons-before dashicons-yes"></span></td>';
					} else {
						echo '<td class="only-pro"><span class="dashicons-before dashicons-no-alt"></span></td>';
					}
					echo '</tr>';

				}
				if ( ! empty( $free_pro['pro_theme_link'] ) && ! empty( $free_pro['get_pro_theme_label'] ) ) {
					echo '<tr>';
					echo '<td>';
					if ( ! empty( $free_pro['banner_link'] ) && ! empty( $free_pro['banner_src'] ) ) {
						echo '<a target="_blank" href="' . $free_pro['banner_link'] . '"><img src="' . $free_pro['banner_src'] . '" class="free_vs_pro_banner"></a>';
					}
					echo '</td>';
					echo '<td colspan="2" class="ti-about-page-text-right"><a href="' . esc_url( $free_pro['pro_theme_link'] ) . '" target="_blank" class="button button-primary button-hero">' . wp_kses_post( $free_pro['get_pro_theme_label'] ) . '</a></td>';
					echo '</tr>';
				}
				echo '</tbody>';
				echo '</table>';

				echo '</div>';
				echo '</div>';

			}// End if().
		}// End if().
	}

	/**
	 * Utility to check if recommended actions should be displayed.
	 *
	 * @return bool
	 */
	private function should_show_recommended_actions_tab() {
		$recommended_actions = isset( $this->config['recommended_actions'] ) ? $this->config['recommended_actions'] : array();

		if ( empty( $recommended_actions ) ) {
			return false;
		}

		foreach ( $recommended_actions['content'] as $action_key => $action_value ) {
			if ( ! $action_value['check'] ) {
				return true;
			}
		}

		return false;
	}
}//end class
