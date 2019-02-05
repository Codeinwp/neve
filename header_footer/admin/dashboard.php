<?php

class Hf_Dashboard {
	static $_instance;
	public $title;
	public $config;
	public $current_tab = '';
	public $url         = '';

	static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance      = new self();
			self::$_instance->url = admin_url( 'admin.php' );
			self::$_instance->url = add_query_arg(
				array( 'page' => 'Hf' ),
				self::$_instance->url
			);

			self::$_instance->title = __( 'Hf Options', 'Hf' );
			add_action( 'admin_menu', array( self::$_instance, 'add_menu' ), 5 );
			add_action( 'admin_enqueue_scripts', array( self::$_instance, 'scripts' ) );
			add_action( 'Hf/dashboard/main', array( self::$_instance, 'box_links' ), 10 );
			add_action( 'Hf/dashboard/main', array( self::$_instance, 'pro_modules_box' ), 15 );
			add_action( 'Hf/dashboard/sidebar', array( self::$_instance, 'box_plugins' ), 10 );
			add_action( 'Hf/dashboard/sidebar', array( self::$_instance, 'box_recommend_plugins' ), 20 );
			add_action( 'Hf/dashboard/sidebar', array( self::$_instance, 'box_community' ), 25 );

			add_action( 'admin_notices', array( self::$_instance, 'admin_notice' ) );

			// Tabs.
			add_action( 'Hf/dashboard/tab/changelog', array( self::$_instance, 'tab_changelog' ) );

		}
		return self::$_instance;
	}

	function add_url_args( $args = array() ) {
		return add_query_arg( $args, self::$_instance->url );
	}

	/**
	 * Add admin notice when active theme.
	 */
	function admin_notice() {
		global $pagenow;
		if ( is_admin() && ( 'themes.php' == $pagenow ) && isset( $_GET['activated'] ) ) {
			Hf_maybe_change_header_version();
			?>
		<div class="Hf-notice-wrapper notice is-dismissible">
			<div class="Hf-notice">
				<div class="Hf-notice-img">
					<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/admin/Hf_logo@2x.png' ); ?>" alt="<?php esc_attr_e( 'logo', 'Hf' ); ?>">
				</div>
				<div class="Hf-notice-content">
					<div class="Hf-notice-heading"><?php _e( 'Thanks for installing Hf, you rock! <img draggable="false" class="emoji" alt="" src="https://s.w.org/images/core/emoji/2.4/svg/1f918.svg">', 'Hf' ); ?></div>
					<p><?php printf( __( 'To fully take advantage of the best our theme can offer please make sure you visit our <a href="%1$s">Hf options page</a>.', 'Hf' ), esc_url( admin_url( 'themes.php?page=Hf' ) ) ); ?></p>
				</div>
			</div>
		</div>
			<?php
		}
	}

	function add_menu() {
		add_theme_page(
			$this->title,
			$this->title,
			'manage_options',
			'Hf',
			array( $this, 'page' )
		);
	}

	/**
	 * Register scripts
	 *
	 * @param string $id
	 */
	function scripts( $id ) {
		if ( 'appearance_page_Hf' != $id && 'themes.php' != $id ) {
			return;
		}
		$suffix = Hf()->get_asset_suffix();
		wp_enqueue_style( 'Hf-admin', esc_url( get_template_directory_uri() ) . '/assets/css/admin/dashboard' . $suffix . '.css', false, Hf::$version );
		if ( 'themes' != $id ) {
			wp_enqueue_style( 'plugin-install' );
			wp_enqueue_script( 'plugin-install' );
			wp_enqueue_script( 'updates' );
			add_thickbox();
		}
	}

	function setup() {
		$theme        = wp_get_theme();
		$this->config = array(
			'name'       => $theme->get( 'Name' ),
			'theme_uri'  => $theme->get( 'ThemeURI' ),
			'desc'       => $theme->get( 'Description' ),
			'author'     => $theme->get( 'Author' ),
			'author_uri' => $theme->get( 'AuthorURI' ),
			'version'    => $theme->get( 'Version' ),
		);

		$this->current_tab = isset( $_GET['tab'] ) ? sanitize_text_field( $_GET['tab'] ) : ''; // phpcs:ignore
	}

	function page() {
		$this->setup();
		$this->page_header();
		echo '<div class="wrap">';
		$cb = apply_filters( 'Hf/dashboard/content_cb', false );
		if ( ! is_callable( $cb ) ) {
			$cb = array( $this, 'page_inner' );
		}

		if ( is_callable( $cb ) ) {
			call_user_func_array( $cb, array( $this ) );
		}

		echo '</div>';
	}

	public function page_header() {
		?>
		<div class="cd-header">
			<div class="cd-row">
				<div class="cd-header-inner">
					<a href="https://wpHf.com" target="_blank" class="cd-branding">
						<img src="<?php echo esc_url( get_template_directory_uri() ) . '/assets/images/admin/Hf_logo@2x.png'; ?>" alt="<?php esc_attr_e( 'logo', 'Hf' ); ?>">
					</a>
					<span class="cd-version"><?php echo esc_html( $this->config['version'] ); ?></span>
					<a class="cd-top-link" href="<?php echo esc_url( $this->add_url_args( array( 'tab' => 'changelog' ) ) ); ?>"><?php _e( 'Changelog', 'Hf' ); ?></a>
				</div>
			</div>
		</div>
		<?php
	}

	function tab_changelog() {
		global $wp_filesystem;
		WP_Filesystem();
		$file = get_template_directory() . '/changelog.txt';
		if ( file_exists( $file ) ) {
			$file_contents = $wp_filesystem->get_contents( $file );
		}
		?>
		<p>
			<a class="button button-secondary" href="<?php echo esc_url( $this->url ); ?>"><?php _e( 'Back', 'Hf' ); ?></a>
		</p>

		<?php
		do_action( 'Hf/dashboard/changelog/before' );
		?>
		<div class="cd-box theme-changelog">
			<div class="cd-box-top"><?php _e( 'Changelog', 'Hf' ); ?></div>
			<div class="cd-box-content">
				<pre style="width: 100%; max-height: 60vh; overflow: auto"><?php echo esc_textarea( $file_contents ); ?></pre>
			</div>
		</div>
		<?php
		do_action( 'Hf/dashboard/changelog/after' );

	}

	function box_links() {
		$url = admin_url( 'customize.php' );

		$links = array(
			array(
				'label' => __( 'Logo & Site Identity', 'Hf' ),
				'url'   => add_query_arg( array( 'autofocus' => array( 'section' => 'title_tagline' ) ), $url ),
			),
			array(
				'label' => __( 'Layout Settings', 'Hf' ),
				'url'   => add_query_arg( array( 'autofocus' => array( 'section' => 'global_layout_section' ) ), $url ),
			),
			array(
				'label' => __( 'Header Builder', 'Hf' ),
				'url'   => add_query_arg( array( 'autofocus' => array( 'panel' => 'header_settings' ) ), $url ),
			),
			array(
				'label' => __( 'Footer Builder', 'Hf' ),
				'url'   => add_query_arg( array( 'autofocus' => array( 'panel' => 'footer_settings' ) ), $url ),
			),
			array(
				'label' => __( 'Styling', 'Hf' ),
				'url'   => add_query_arg( array( 'autofocus' => array( 'panel' => 'styling_panel' ) ), $url ),
			),
			array(
				'label' => __( 'Typography', 'Hf' ),
				'url'   => add_query_arg( array( 'autofocus' => array( 'panel' => 'typography_panel' ) ), $url ),
			),
			array(
				'label' => __( 'Sidebar Settings', 'Hf' ),
				'url'   => add_query_arg( array( 'autofocus' => array( 'section' => 'sidebar_layout_section' ) ), $url ),
			),
			array(
				'label' => __( 'Titlebar Settings', 'Hf' ),
				'url'   => add_query_arg( array( 'autofocus' => array( 'section' => 'titlebar' ) ), $url ),
			),

			array(
				'label' => __( 'Blog Posts', 'Hf' ),
				'url'   => add_query_arg( array( 'autofocus' => array( 'panel' => 'blog_panel' ) ), $url ),
			),
			array(
				'label' => __( 'Homepage Settings', 'Hf' ),
				'url'   => add_query_arg( array( 'autofocus' => array( 'section' => 'static_front_page' ) ), $url ),
			),
		);

		$links = apply_filters( 'Hf/dashboard/links', $links );
		?>
		<div class="cd-box">
			<div class="cd-box-top"><?php _e( 'Links to Customizer Settings', 'Hf' ); ?></div>
			<div class="cd-box-content">
				<ul class="cd-list-flex">
					<?php foreach ( $links as $l ) { ?>
						<li class="">
							<a class="cd-quick-setting-link" href="<?php echo esc_url( $l['url'] ); ?>" target="_blank"><?php echo esc_html( $l['label'] ); ?></a>
						</li>
					<?php } ?>
				</ul>
			</div>
		</div>
		<?php
	}

	/**
	 * Display community info
	 */
	function box_community() {
		?>
		<div class="cd-box">
			<div class="cd-box-top"><?php _e( 'Join the community!', 'Hf' ); ?></div>
			<div class="cd-box-content">
				<p><?php _e( 'Join the Facebook group for updates, discussions, chat with other Hf lovers.', 'Hf' ); ?></p>
				<a target="_blank" href="https://www.facebook.com/groups/133106770857743"><?php _e( 'Join Our Facebook Group &rarr;	', 'Hf' ); ?></a>
			</div>
		</div>
		<?php
	}

	/**
	 * Display recommend plugins
	 */
	function box_plugins() {

		?>
		<div class="cd-box box-plugins">
			<div class="cd-box-top"><?php _e( 'Hf ready to import sites', 'Hf' ); ?></div>
			<div class="cd-sites-thumb">
				<img src="<?php echo esc_url( get_template_directory_uri() ) . '/assets/images/admin/sites_thumbnail.jpg'; ?>">
			</div>
			<div class="cd-box-content">
				<p><?php _e( '<strong>Hf Sites</strong> is a free add-on for the Hf theme which help you browse and import ready made websites with few clicks.', 'Hf' ); ?></p>
				<?php

				$plugin_slug = 'Hf-sites';
				$plugin_info = array(
					'name'            => 'Hf-sites',
					'active_filename' => 'Hf-sites/Hf-sites.php',
				);

				$plugin_info  = wp_parse_args(
					$plugin_info,
					array(
						'name'            => '',
						'active_filename' => '',
					)
				);
				$status       = is_dir( WP_PLUGIN_DIR . '/' . $plugin_slug );
				$button_class = 'install-now button';               if ( $plugin_info['active_filename'] ) {
					$active_file_name = $plugin_info['active_filename'];
				} else {
					$active_file_name = $plugin_slug . '/' . $plugin_slug . '.php';
				}

				$sites_url = add_query_arg(
					array(
						'page' => 'Hf-sites',
					),
					admin_url( 'themes.php' )
				);

				$view_site_txt = __( 'View Site Library', 'Hf' );

				if ( ! is_plugin_active( $active_file_name ) ) {
					$button_txt = esc_html__( 'Install Now', 'Hf' );
					if ( ! $status ) {
						$install_url = wp_nonce_url(
							add_query_arg(
								array(
									'action' => 'install-plugin',
									'plugin' => $plugin_slug,
								),
								network_admin_url( 'update.php' )
							),
							'install-plugin_' . $plugin_slug
						);

					} else {
						$install_url  = add_query_arg(
							array(
								'action'        => 'activate',
								'plugin'        => rawurlencode( $active_file_name ),
								'plugin_status' => 'all',
								'paged'         => '1',
								'_wpnonce'      => wp_create_nonce( 'activate-plugin_' . $active_file_name ),
							),
							network_admin_url( 'plugins.php' )
						);
						$button_class = 'activate-now button-primary';
						$button_txt   = esc_html__( 'Active Now', 'Hf' );
					}

					$detail_link = add_query_arg(
						array(
							'tab'       => 'plugin-information',
							'plugin'    => $plugin_slug,
							'TB_iframe' => 'true',
							'width'     => '772',
							'height'    => '349',

						),
						network_admin_url( 'plugin-install.php' )
					);

					echo '<div class="rcp">';
					echo '<p class="action-btn plugin-card-' . esc_attr( $plugin_slug ) . '"><a href="' . esc_url( $install_url ) . '" data-slug="' . esc_attr( $plugin_slug ) . '" class="' . esc_attr( $button_class ) . '">' . $button_txt . '</a></p>'; // WPCS: XSS OK.
					echo '<a class="plugin-detail thickbox open-plugin-details-modal" href="' . esc_url( $detail_link ) . '">' . esc_html__( 'Details', 'Hf' ) . '</a>';
					echo '</div>';
				} else {
					echo '<div class="rcp">';
					echo '<p ><a href="' . esc_url( $sites_url ) . '" data-slug="' . esc_attr( $plugin_slug ) . '" class="view-site-library">' . $view_site_txt . '</a></p>'; // // WPCS: XSS OK.
					echo '</div>';
				}

				?>
				<script type="text/javascript">
					jQuery( document ).ready( function($){
						var  sites_url = <?php echo json_encode( $sites_url ); // phpcs:ignore ?>;
						var  view_sites = <?php echo json_encode( $view_site_txt ); // phpcs:ignore ?>;
						$( '#plugin-filter .box-plugins' ).on( 'click', '.activate-now', function( e ){
							e.preventDefault();
							var button = $( this );
							var url = button.attr('href');
							button.addClass( 'button installing updating-message' );
							$.get( url, function( ){
								$( '.rcp .plugin-detail' ).hide();
								button.attr( 'href', sites_url );
								button.attr( 'class', 'view-site-library' );
								button.text( view_sites );
							} );
						} );
					} );
				</script>
			</div>
		</div>
		<?php
	}

	function get_plugin_file( $plugin_slug ) {
		$installed_plugins = get_plugins();
		foreach ( (array) $installed_plugins as $plugin_file => $info ) {
			if ( strpos( $plugin_file, $plugin_slug . '/' ) === 0 ) {
				return $plugin_file;
			}
		}
		return false;
	}

	function get_first_tag( $content ) {
		$content = wp_kses(
			$content,
			array(
				'a'      => array(
					'href'  => array(),
					'title' => array(),
				),
				'br'     => array(),
				'p'      => array(),
				'em'     => array(),
				'strong' => array(),
			)
		);
		$content = substr( $content, 0, strpos( $content, '</p>' ) + 4 );
		return $content;
	}

	function box_recommend_plugins() {

		$list_plugins = array(
			'themeisle-companion',
			'elementor',
			'beaver-builder-lite-version',
			'wpforms-lite',
		);

		$list_plugins = apply_filters( 'Hf/recommend-plugins', $list_plugins );
		$key          = 'Hf_plugins_info_' . wp_hash( json_encode( $list_plugins ) ); // phpcs:ignore
		$plugins_info = get_transient( $key );
		if ( false === $plugins_info ) {
			$plugins_info = array();
			if ( ! function_exists( 'plugins_api' ) ) {
				require_once ABSPATH . '/wp-admin/includes/plugin-install.php';
			}
			foreach ( $list_plugins as $slug ) {
				$info = plugins_api( 'plugin_information', array( 'slug' => $slug ) );
				if ( ! is_wp_error( $info ) ) {
					$plugins_info[ $slug ] = $info;
				}
			}
			set_transient( $key, $plugins_info );
		}

		$html = '';
		foreach ( $plugins_info as $plugin_slug => $info ) {
			$status      = is_dir( WP_PLUGIN_DIR . '/' . $plugin_slug );
			$plugin_file = $this->get_plugin_file( $plugin_slug );
			if ( ! is_plugin_active( $plugin_file ) ) {
				$html .= '<div class="cd-list-item">';
				$html .= '<p class="cd-list-name">' . esc_html( $info->name ) . '</p>';
				if ( $status ) {
					$button_class = 'activate-now';
					$button_txt   = esc_html__( 'Activate', 'Hf' );
					$url          = wp_nonce_url( 'plugins.php?action=activate&amp;plugin=' . urlencode( $plugin_file ), 'activate-plugin_' . $plugin_file ); // phpcs:ignore
				} else {
					$button_class = 'install-now';
					$button_txt   = esc_html__( 'Install Now', 'Hf' );
					$url          = wp_nonce_url(
						add_query_arg(
							array(
								'action' => 'install-plugin',
								'plugin' => $plugin_slug,
							),
							network_admin_url( 'update.php' )
						),
						'install-plugin_' . $plugin_slug
					);
				}

				$detail_link = add_query_arg(
					array(
						'tab'       => 'plugin-information',
						'plugin'    => $plugin_slug,
						'TB_iframe' => 'true',
						'width'     => '772',
						'height'    => '349',
					),
					network_admin_url( 'plugin-install.php' )
				);

				$class = 'action-btn plugin-card-' . $plugin_slug;

				$html .= '<div class="rcp">';
				$html .= '<p class="' . esc_attr( $class ) . '"><a href="' . esc_url( $url ) . '" data-slug="' . esc_attr( $plugin_slug ) . '" class="' . esc_attr( $button_class ) . '">' . $button_txt . '</a></p>';
				$html .= '<a class="plugin-detail thickbox open-plugin-details-modal" href="' . esc_url( $detail_link ) . '">' . esc_html__( 'Details', 'Hf' ) . '</a>';
				$html .= '</div>';

				$html .= '</div>';
			}
		} // end foreach

		if ( $html ) {
			?>
			<div class="cd-box">
				<div class="cd-box-top"><?php _e( 'Recommend Plugins', 'Hf' ); ?></div>
				<div class="cd-box-content cd-list-border">
					<?php
						echo $html; // WPCS: XSS OK.
					?>
				</div>
			</div>
			<?php
		}
	}

	function pro_modules_box() {

		$modules = array(
			array(
				'name' => __( 'Header Transparent', 'Hf' ),
				'desc' => __( 'Make your website stand out with transparent header modules.', 'Hf' ),
				'url'  => 'https://wpHf.com/help/documentation/Hf-pro-modules/header-transparent/',
			),
			array(
				'name' => __( 'Header Sticky', 'Hf' ),
				'desc' => __( 'Let your header accessible when users scroll up or down in unique style.', 'Hf' ),
				'url'  => 'https://wpHf.com/help/documentation/Hf-pro-modules/header-sticky/',
			),
			array(
				'name' => __( 'Header and Footer Builder Booster', 'Hf' ),
				'desc' => __( 'Get more header and footer builder items, plus advanced styling options.', 'Hf' ),
				'url'  => 'https://wpHf.com/help/documentation/Hf-pro-modules/advanced-header-footer-builder/',
			),
			array(
				'name' => __( 'Scroll To Top', 'Hf' ),
				'desc' => __( 'Get a better user experience with a scroll to top button with beautiful animation.', 'Hf' ),
				'url'  => 'https://wpHf.com/help/documentation/Hf-pro-modules/scroll-to-top/',
			),
			array(
				'name' => __( 'Blog Pro', 'Hf' ),
				'desc' => __( 'Take advantage of the Blog Pro module to show off your posts in any layouts.', 'Hf' ),
				'url'  => 'https://wpHf.com/help/documentation/Hf-pro-modules/blog-pro/',
			),
			array(
				'name' => __( 'Advanced Styling', 'Hf' ),
				'desc' => __( 'Control the layout and typography setting for page header title, page header cover and more.', 'Hf' ),
				'url'  => 'https://wpHf.com/help/documentation/Hf-pro-modules/advanced-styling/',
			),
			array(
				'name' => __( 'Portfolio', 'Hf' ),
				'desc' => __( 'Show off your best project in a beautiful way.', 'Hf' ),
				'url'  => 'https://wpHf.com/help/documentation/Hf-pro-modules/portfolio/',
			),
			array(
				'name' => __( 'Multiple Headers', 'Hf' ),
				'desc' => __( 'Create unique header for each page, post, archive or WooCommerce pages.', 'Hf' ),
				'url'  => 'https://wpHf.com/help/documentation/Hf-pro-modules/multiple-headers/',
			),
			array(
				'name' => __( 'Mega Menu', 'Hf' ),
				'desc' => __( 'Create mega menu for your sites that need more space for navigation.', 'Hf' ),
				'url'  => 'https://wpHf.com/help/documentation/Hf-pro-modules/mega-menu/',
			),
			array(
				'name' => __( 'Multilingual Integration', 'Hf' ),
				'desc' => __( 'WPML multilingual plugin support, plus a fully customized language switcher header builder item.', 'Hf' ),
				'url'  => '',
			),
			array(
				'name' => __( 'Custom Fonts', 'Hf' ),
				'desc' => __( 'Custom Fonts module allows you to add your self-hosted fonts and use them on your Hf powered websites.', 'Hf' ),
				'url'  => '',
			),

			array(
				'name' => __( 'Typekit', 'Hf' ),
				'desc' => __( 'Typekit module allows you to add Typekit fonts and use them on your Hf powered websites.', 'Hf' ),
				'url'  => '',
			),
			array(
				'name' => __( 'Hf Hooks', 'Hf' ),
				'desc' => __( 'Add custom hook scripts.', 'Hf' ),
				'url'  => '',
			),

			array(
				'name' => __( 'WooCommerce Booster', 'Hf' ),
				'desc' => __( 'Gives you creative control of style and layout options for your shop.', 'Hf' ),
				'url'  => '',
			),

			array(
				'name' => __( 'Single Product Layouts', 'Hf' ),
				'desc' => __( 'More beautiful layouts for your single product.', 'Hf' ),
				'url'  => '',
				'sub'  => true,
			),
			array(
				'name' => __( 'Off Canvas Filter', 'Hf' ),
				'desc' => __( 'Add off canvas products filter for shop and product archive pages.', 'Hf' ),
				'url'  => '',
				'sub'  => true,
			),
			array(
				'name' => __( 'Product Gallery Slider', 'Hf' ),
				'desc' => __( 'Add slider for product gallery.', 'Hf' ),
				'url'  => '',
				'sub'  => true,
			),
			array(
				'name' => __( 'Quick View', 'Hf' ),
				'desc' => __( 'Add product quick view modal for product listing..', 'Hf' ),
				'url'  => '',
				'sub'  => true,
			),

			array(
				'name' => __( 'Infinity Scroll.', 'Hf' ),
				'desc' => __( 'Loads the next posts, products automatically when the reader approaches the bottom of the page.', 'Hf' ),
				'url'  => '',
			),

		);

		?>
		<div class="cd-box">
			<div class="cd-box-top"><?php _e( 'Hf Pro Modules', 'Hf' ); ?>
				<a class="cd-upgrade" target="_blank" href="https://wpHf.com/pricing/?utm_source=theme_dashboard&utm_medium=links&utm_campaign=pro_modules"><?php _e( 'Upgrade Now &rarr;', 'Hf' ); ?></a></div>
			<div class="cd-box-content cd-modules">
				<?php foreach ( $modules as $m ) { ?>
				<div class="cd-module-item <?php echo isset( $m['sub'] ) && $m['sub'] ? 'cd-sub-module' : ''; ?>">
					<div class="cd-module-info">
						<div class="cd-module-name"><?php echo esc_html( $m['name'] ); ?></div>
						<?php if ( isset( $m['desc'] ) ) { ?>
						<div class="cd-module-desc"><?php echo esc_html( $m['desc'] ); ?></div>
						<?php } ?>
					</div>
				</div>
				<?php } ?>
			</div>
		</div>
		<?php
	}

	private function page_inner() {
		?>
		<div id="plugin-filter" class="cd-row metabox-holder">
			<hr class="wp-header-end">
			<?php

			do_action( 'Hf/dashboard/start', $this );

			if ( $this->current_tab && has_action( 'Hf/dashboard/tab/' . $this->current_tab ) ) {
				do_action( 'Hf/dashboard/tab/' . $this->current_tab, $this );
			} else {
				?>
				<div class="cd-main">
					<?php do_action( 'Hf/dashboard/main', $this ); ?>
				</div>
				<div class="cd-sidebar">
					<?php do_action( 'Hf/dashboard/sidebar', $this ); ?>
				</div>
				<?php
			}

			do_action( 'Hf/dashboard/end', $this );

			?>
		</div>
		<?php
	}

}

Hf_Dashboard::get_instance();


