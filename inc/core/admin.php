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

/**
 * Class Admin
 *
 * @package Neve\Core
 */
class Admin {

	/**
	 * Current theme name
	 *
	 * @var string $theme_name Theme name.
	 */
	private $theme_name;

	/**
	 * Current theme slug.
	 *
	 * @var string $theme_slug Theme slug.
	 */
	private $theme_slug;

	/**
	 * Add the about page.
	 */
	public function do_about_page() {
		$theme_args       = wp_get_theme();
		$this->theme_name = apply_filters( 'ti_wl_theme_name', $theme_args->__get( 'Name' ) );
		$this->theme_slug = $theme_args->__get( 'stylesheet' );

		/*
		 * About page instance
		 */
		$config_array = array(
			'welcome_notice'  => array(
				'type'            => 'custom',
				'notice_class'    => 'nv-welcome-notice updated',
				'dismiss_option'  => 'neve_notice_dismissed',
				'render_callback' => array( $this, 'welcome_notice_content' ),
			),
			'footer_messages' => array(
				'type'     => 'custom',
				'messages' => array(
					array(
						// translators: %s - theme name
						'heading'   => sprintf( __( '%s Community', 'neve' ), $this->theme_name ),
						// translators: %s - theme name
						'text'      => sprintf( __( 'Join the community of %s users. Get connected, share opinions, ask questions and help each other!', 'neve' ), $this->theme_name ),
						'link_text' => __( 'Join our Facebook Group', 'neve' ),
						'link'      => 'https://www.facebook.com/groups/648646435537266/',
					),
					array(
						'heading'   => __( 'Leave us a review', 'neve' ),
						// translators: %s - theme name
						'text'      => sprintf( __( 'Are you are enjoying %s? We would love to hear your feedback.', 'neve' ), $this->theme_name ),
						'link_text' => __( 'Submit a review', 'neve' ),
						'link'      => 'https://wordpress.org/support/theme/neve/reviews/#new-post',
					),
				),
			),
			'getting_started' => array(
				'type'    => 'columns-2',
				'title'   => __( 'Getting Started', 'neve' ),
				'content' => array(
					array(
						'title'  => esc_html__( 'Recommended actions', 'neve' ),
						// translators: %s - theme name
						'text'   => sprintf( esc_html__( '%s now comes with a sites library with various designs to pick from. Visit our collection of demos that are constantly being added.', 'neve' ), $this->theme_name ),
						'button' => array(
							'label'     => esc_html__( 'See demos', 'neve' ),
							'link'      => esc_url( '#sites_library' ),
							'is_button' => true,
						),
					),
					array(
						'title'        => esc_html__( 'Links to Customizer Settings', 'neve' ),
						'html_content' => $this->get_customizer_settings(),
					),
				),
			),
			'useful_plugins'  => array(
				'type'    => 'plugins',
				'title'   => __( 'Useful Plugins', 'neve' ),
				'plugins' => array(
					'optimole-wp',
					'themeisle-companion',
					'feedzy-rss-feeds',
					'otter-blocks',
					'elementor',
					'wp-product-review',
					'weglot',
					'visualizer',
					'wpforms-lite',
					'translatepress-multilingual',
					'amp',
				),
			),
			'support'         => array(
				'type'    => 'columns-2',
				'title'   => __( 'Documentation', 'neve' ),
				'content' => array(
					array(
						'icon'   => 'dashicons dashicons-sos',
						'title'  => esc_html__( 'Contact Support', 'neve' ),
						// translators: 1 - theme name, 2 - theme name
						'text'   => sprintf( esc_html__( 'We want to make sure you have the best experience using %1$s, and that is why we have gathered all the necessary information here for you. We hope you will enjoy using %1$s as much as we enjoy creating great products.', 'neve' ), $this->theme_name ),
						'button' => array(
							'label'     => esc_html__( 'Contact Support', 'neve' ),
							'link'      => apply_filters( 'ti_wl_agency_url', esc_url( 'https://wordpress.org/support/theme/neve/' ) ),
							'is_button' => true,
						),
					),
					array(
						'icon'   => 'dashicons dashicons-book-alt',
						'title'  => esc_html__( 'Documentation', 'neve' ),
						// translators: %s - theme name
						'text'   => sprintf( esc_html__( 'Need more details? Please check our full documentation for detailed information on how to use %s.', 'neve' ), $this->theme_name ),
						'button' => array(
							'label'     => esc_html__( 'Read full documentation', 'neve' ),
							'link'      => apply_filters( 'ti_wl_agency_url', 'https://docs.themeisle.com/article/946-neve-doc' ),
							'is_button' => false,
						),
					),

					array(
						'icon'   => 'dashicons dashicons-portfolio',
						'title'  => esc_html__( 'Changelog', 'neve' ),
						'text'   => esc_html__( 'Want to get the gist on the latest theme changes? Just consult our changelog below to get a taste of the recent fixes and features implemented.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'Changelog', 'neve' ),
							'link'      => esc_url( '#changelog' ),
							'is_button' => false,
						),

					),
					array(
						'title'  => esc_html__( 'Create a child theme', 'neve' ),
						'icon'   => 'dashicons dashicons-admin-customizer',
						'text'   => esc_html__( "If you want to make changes to the theme's files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.", 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => apply_filters( 'ti_wl_agency_url', 'http://docs.themeisle.com/article/14-how-to-create-a-child-theme' ),
							'is_button' => false,
						),
					),
					array(
						'title'  => esc_html__( 'Speed up your site', 'neve' ),
						'icon'   => 'dashicons dashicons-controls-skipforward',
						'text'   => esc_html__( 'If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => apply_filters( 'ti_wl_agency_url', 'http://docs.themeisle.com/article/63-speed-up-your-wordpress-site' ),
							'is_button' => false,
						),
					),
					array(
						'title'  => esc_html__( 'Build a landing page with a drag-and-drop content builder', 'neve' ),
						'icon'   => 'dashicons dashicons-images-alt2',
						'text'   => esc_html__( 'In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => apply_filters( 'ti_wl_agency_url', 'http://docs.themeisle.com/article/219-how-to-build-a-landing-page-with-a-drag-and-drop-content-builder' ),
							'is_button' => false,
						),
					),
				),
			),
			'changelog'       => array(
				'type'  => 'changelog',
				'title' => __( 'Changelog', 'neve' ),
			),
			'custom_tabs'     => array(),
		);
		global $wp_version;
		if ( version_compare( $wp_version, '5.0', '>=' ) ) {
			$config_array = array_merge(
				array_slice( $config_array, 0, 3, true ),
				array(
					'recommended_actions' => array(
						'type'    => 'recommended_actions',
						'title'   => __( 'Recommended actions', 'neve' ),
						'plugins' => array(
							'otter-blocks' => array(
								'name'        => 'Gutenberg Blocks and Template Library by Otter',
								'slug'        => 'otter-blocks',
								/* translators: %s: Name of current theme */
								'description' => sprintf( __( "Take the new WordPress editor to the next level by using Otter's blocks that are specially designed for %s.", 'neve' ), $this->theme_name ),
							),
						),
					),
				),
				array_slice( $config_array, 3, count( $config_array ) - 1, true )
			);
		}
		$config = apply_filters( 'ti_about_config', $config_array );

		if ( class_exists( '\Ti_About_Page' ) ) {
			$about_page = new \Ti_About_Page();
			$about_page->init( $config );
		}
	}

	/**
	 * Get list of customizer settings and links.
	 *
	 * @return string
	 */
	private function get_customizer_settings() {
		$markup  = '<div class="customizer-links-container">';
		$data    = array(
			array(
				'icon' => 'dashicons-format-image',
				'text' => __( 'Upload Logo', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[control]' => 'custom_logo' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-admin-customizer',
				'text' => __( 'Set Colors', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[section]' => 'neve_colors_background_section' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-editor-textcolor',
				'text' => __( 'Customize Fonts', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[control]' => 'neve_headings_font_family' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-layout',
				'text' => __( 'Layout Options', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[panel]' => 'neve_layout' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-align-center',
				'text' => __( 'Header Options', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[panel]' => 'neve_header' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-welcome-write-blog',
				'text' => __( 'Blog Layouts', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[section]' => 'neve_blog_archive_layout' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-admin-generic',
				'text' => __( 'Footer Options', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[panel]' => 'neve_footer' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-align-left',
				'text' => __( 'Content / Sidebar', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[section]' => 'neve_sidebar' ), admin_url( 'customize.php' ) ),
			),
		);
		$counter = 1;
		foreach ( $data as $customizer_item ) {
			$class = 'left';
			if ( $counter % 2 === 0 ) {
				$class = 'right';
			}
			$markup .= '
				<div class="ti-customizer-item ' . esc_attr( $class ) . '">
				<i class="dashicons ' . esc_attr( $customizer_item['icon'] ) . '"></i><a href="' . esc_url( $customizer_item['link'] ) . '">' . wp_kses_post( $customizer_item['text'] ) . '</a>
				</div>
			';
			$counter ++;
		}
		$markup .= '</div>';

		$style = '
		<style>
		.customizer-links-container{
			width: 100%;
			margin-bottom: 20px;
		}
		.ti-customizer-item{
		padding: 10px 0;
		width: 50%;
		}
		.ti-customizer-item a{
		text-decoration: none;
		line-height: 20px;
		}
		.ti-customizer-item i{
		vertical-align: initial;
		}
		.ti-customizer-item.left{
		float: left;
		}
		.ti-customizer-item.right{
		float: right;
		}
		@media (max-width: 600px) {
			.ti-customizer-item{
				width: 100%;
			}
		}
		</style>';

		return $markup . $style;
	}

	/**
	 * Render welcome notice content
	 */
	public function welcome_notice_content() {
		$theme_args = wp_get_theme();
		$name       = apply_filters( 'ti_wl_theme_name', $theme_args->__get( 'Name' ) );
		$slug       = $theme_args->__get( 'stylesheet' );

		$notice_template = '
			<div class="nv-notice-wrapper">
			%1$s
			<hr/>
				<div class="nv-notice-column-container">
					<div class="nv-notice-column nv-notice-image">%2$s</div>
					<div class="nv-notice-column nv-notice-starter-sites">%3$s</div>
					<div class="nv-notice-column nv-notice-documentation">%4$s</div>
				</div> 
			</div>
			<style>%5$s</style>';

		/* translators: 1 - notice title, 2 - notice message */
		$notice_header = sprintf(
			'<h2>%1$s</h2><p class="about-description">%2$s</p></hr>',
			esc_html__( 'Congratulations!', 'neve' ),
			sprintf(
				/* translators: %s - theme name */
				esc_html__( '%s is now installed and ready to use. We\'ve assembled some links to get you started.', 'neve' ),
				$name
			)
		);
		$ob_btn = sprintf(
			/* translators: 1 - onboarding url, 2 - button text */
			'<a href="%1$s" class="button button-primary button-hero install-now" >%2$s</a>',
			esc_url( admin_url( 'themes.php?page=' . $slug . '-welcome&onboarding=yes#sites_library' ) ),
			sprintf( apply_filters( 'ti_onboarding_neve_start_site_cta', esc_html__( 'Try one of our ready to use Starter Sites', 'neve' ) ) )
		);
		$ob_return_dashboard = sprintf(
			/* translators: 1 - button text */
			'<a href="#" class=" ti-return-dashboard  button button-secondary button-hero install-now" ><span>%1$s</span></a>',
			__( 'Return to your dashboard', 'neve' )
		);
		$options_page_btn = sprintf(
			/* translators: 1 - options page url, 2 - button text */
			'<a href="%1$s" class="options-page-btn">%2$s</a>',
			esc_url( admin_url( 'themes.php?page=' . $slug . '-welcome' ) ),
			esc_html__( 'or go to the theme settings', 'neve' )
		);

		$notice_picture = sprintf(
			'<picture>
					<source srcset="about:blank" media="(max-width: 1024px)">
					<img src="%1$s">
				</picture>',
			esc_url( get_template_directory_uri() . '/assets/img/sites-list.jpg' )
		);

		$notice_sites_list = sprintf(
			'<div><h3><span class="dashicons dashicons-images-alt2"></span> %1$s</h3><p>%2$s</p></div><div> <p>%3$s</p><p>%4$s</p> </div>',
			__( 'Sites Library', 'neve' ),
			// translators: %s - theme name
			sprintf( esc_html__( '%s now comes with a sites library with various designs to pick from. Visit our collection of demos that are constantly being added.', 'neve' ), $name ),
			$ob_btn,
			$options_page_btn
		);

		$notice_documentation = sprintf(
			'<div><h3><span class="dashicons dashicons-format-aside"></span> %1$s</h3><p>%2$s</p><a href="%3$s">%4$s</a></div><div> <p>%5$s</p></div>',
			__( 'Documentation', 'neve' ),
			// translators: %s - theme name
			sprintf( esc_html__( 'Need more details? Please check our full documentation for detailed information on how to use %s.', 'neve' ), $name ),
			'https://docs.themeisle.com/article/946-neve-doc',
			esc_html__( 'Read full documentation', 'neve' ),
			$ob_return_dashboard
		);
		$style = '
		.nv-notice-wrapper h2{
		    margin: 0;
		    font-size: 21px;
		    font-weight: 400;
		    line-height: 1.2;
		}
		.nv-notice-wrapper p.about-description{
            color: #72777c;
		    font-size: 16px;
		    margin: 0;
		    padding:0px;
		}
		.nv-notice-wrapper{
            padding: 23px 10px 0;
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
		.nv-notice-column-container .nv-notice-column{
             padding-right: 40px;
		} 
		.nv-notice-column-container img{ 
		    margin-top: 23px;
		    width: calc(100% - 40px);
		    border: 1px solid #f3f4f5; 
		} 
		.nv-notice-column-container { 
		    display: -ms-grid;
		    display: grid;
		    -ms-grid-columns: 24% 32% 32%;
		    grid-template-columns: 24% 32% 32%;
		    margin-bottom: 13px;
		}
		.nv-notice-column-container a.button.button-hero.button-secondary,
		.nv-notice-column-container a.button.button-hero.button-primary{
			margin:0px;
		}
		.nv-notice-column-container .nv-notice-column:not(.nv-notice-image) {
		    display: -ms-grid;
		    display: grid;
		    -ms-grid-rows: auto 100px;
		    grid-template-rows: auto 100px;
		} 
		@media screen and (max-width: 1280px) {
			.nv-notice-wrapper .nv-notice-column-container {
				-ms-grid-columns: 50% 50%;
				grid-template-columns: 50% 50%;
			}
			.nv-notice-column-container a.button.button-hero.button-secondary,
			.nv-notice-column-container a.button.button-hero.button-primary{
				padding:6px 18px;
			}
			.nv-notice-wrapper .nv-notice-image {
				display: none;
			}
		} 
		@media screen and (max-width: 870px) {
			 
			.nv-notice-wrapper .nv-notice-column-container {
				-ms-grid-columns: 100%;
				grid-template-columns: 100%;
			}
			.nv-notice-column-container a.button.button-hero.button-primary{
				padding:12px 36px;
			}
		}
		';
		echo sprintf(
			$notice_template,
			$notice_header,
			$notice_picture,
			$notice_sites_list,
			$notice_documentation,
			$style
		);// WPCS: XSS OK.
	}

	/**
	 * Load site import module.
	 */
	public function load_site_import() {
		if ( class_exists( '\Themeisle_Onboarding' ) ) {
			\Themeisle_Onboarding::instance();
		}
	}

}
