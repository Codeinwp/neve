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
	 * Add the about page.
	 */
	public function do_about_page() {
		/*
		 * About page instance
		 */
		$config = array(
			'welcome_notice'  => array(
				'type'            => 'custom',
				'notice_class'    => 'nv-welcome-notice',
				'dismiss_option'  => 'neve_notice_dismissed',
				'render_callback' => array( $this, 'welcome_notice_content' ),
			),
			'footer_messages' => array(
				'type'     => 'custom',
				'messages' => array(
					array(
						'heading'   => __( 'Neve Community', 'neve' ),
						'text'      => __( 'Join the community of Neve users. Get connected, share opinions, ask questions and help each other!', 'neve' ),
						'link_text' => __( 'Join our Facebook Group', 'neve' ),
						'link'      => 'https://www.facebook.com/groups/648646435537266/',
					),
					array(
						'heading'   => __( 'Leave us a review', 'neve' ),
						'text'      => __( 'Are you are enjoying Neve? We would love to hear your feedback.', 'neve' ),
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
						'text'   => esc_html__( 'Neve now comes with a sites library with various designs to pick from. Visit our collection of demos that are constantly being added.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'See demos', 'neve' ),
							'link'      => esc_url( '#sites_library' ),
							'is_button' => true,
							'blank'     => false,
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
					'visualizer',
					'wpforms-lite',
					'translatepress-multilingual',
				),
			),
			'support'         => array(
				'type'    => 'columns-2',
				'title'   => __( 'Documentation', 'neve' ),
				'content' => array(
					array(
						'icon'   => 'dashicons dashicons-sos',
						'title'  => esc_html__( 'Contact Support', 'neve' ),
						'text'   => esc_html__( 'We want to make sure you have the best experience using Neve, and that is why we have gathered all the necessary information here for you. We hope you will enjoy using Neve as much as we enjoy creating great products.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'Contact Support', 'neve' ),
							'link'      => esc_url( 'https://themeisle.com/contact/' ),
							'is_button' => true,
							'blank'     => true,
						),
					),
					array(
						'icon'   => 'dashicons dashicons-book-alt',
						'title'  => esc_html__( 'Documentation', 'neve' ),
						'text'   => esc_html__( 'Need more details? Please check our full documentation for detailed information on how to use Neve.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'Read full documentation', 'neve' ),
							'link'      => 'https://docs.themeisle.com/article/946-neve-doc',
							'is_button' => false,
							'blank'     => true,
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
							'blank'     => false,
						),

					),
					array(
						'title'  => esc_html__( 'Create a child theme', 'neve' ),
						'icon'   => 'dashicons dashicons-admin-customizer',
						'text'   => esc_html__( "If you want to make changes to the theme's files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.", 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => 'http://docs.themeisle.com/article/14-how-to-create-a-child-theme',
							'is_button' => false,
							'blank'     => true,
						),
					),
					array(
						'title'  => esc_html__( 'Speed up your site', 'neve' ),
						'icon'   => 'dashicons dashicons-controls-skipforward',
						'text'   => esc_html__( 'If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => 'http://docs.themeisle.com/article/63-speed-up-your-wordpress-site',
							'is_button' => false,
							'blank'     => true,
						),
					),
					array(
						'title'  => esc_html__( 'Build a landing page with a drag-and-drop content builder', 'neve' ),
						'icon'   => 'dashicons dashicons-images-alt2',
						'text'   => esc_html__( 'In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => 'http://docs.themeisle.com/article/219-how-to-build-a-landing-page-with-a-drag-and-drop-content-builder',
							'is_button' => false,
							'blank'     => true,
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
				<i class="dashicons ' . esc_attr( $customizer_item['icon'] ) . '"></i><a target="_blank" href="' . esc_url( $customizer_item['link'] ) . '">' . wp_kses_post( $customizer_item['text'] ) . '</a>
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
		$name       = $theme_args->__get( 'Name' );
		$slug       = $theme_args->__get( 'stylesheet' );

		$notice_template = '
			<div class="nv-notice-wrapper">
				<div class="nv-notice-image">%1$s</div>
				<div class="nv-notice-text">%2$s</div>
				<div class="nv-notice-button">%3$s</div>
			</div>
			<style>%4$s</style>';

		$image = sprintf(
			/* translators: 1 - logo url, 2 - theme name */
			'<img src="%1$s" alt="%2$s"/>',
			esc_url( NEVE_ASSETS_URL . '/img/logo.png' ),
			$name
		);

		$content = sprintf(
			/* translators: 1 - notice title, 2 - notice message */
			'<h3>%1$s</h3><p>%2$s</p>',
			sprintf(
				/* translators: 1 - theme name */
				esc_html__( 'Thanks for installing %1$s!', 'neve' ),
				$name
			),
			esc_html__( 'Now, let\'s get you ready. It will take only a few minutes.', 'neve' )
		);

		$button = sprintf(
			/* translators: 1 - onboarding url, 2 - button text */
			'<a href="%1$s" class="button button-primary" style="text-decoration: none;">%2$s</a>',
			esc_url( admin_url( 'themes.php?page=' . $slug . '-welcome&onboarding=yes#sites_library' ) ),
			/* translators: 1 - theme name (Neve) */
			sprintf( esc_html__( 'Get started with %s', 'neve' ), $name )
		);

		$style = '
		.wrap .notice.nv-welcome-notice{
			border:0;
			padding:10px;
			margin: 20px 0;
		}
		.nv-notice-wrapper {
			display: flex;
		    justify-content: center;
		    align-items: center;
		    flex-direction: column;
		    background: #e6edf1;
		    padding: 60px 0;
		}
		.nv-notice-image, .nv-notice-text, .nv-notice-button {text-align:center;}
		.nv-notice-image{
		    display: flex;
		    justify-content: center;
		    align-items: center;
		    flex-direction: column;
			width: 90px;
			height: 90px;
			border-radius: 50%;
			background: #fff;
			margin-bottom:20px;
		}
		.nv-notice-image img{
			max-width:65px;
		}
		.nv-notice-text h3{
		    margin: 0 12px 8px;
		    padding: 0;
		    font-size: 16px;
		    font-weight: 400;
		    color: #23282d;
		}
		.nv-notice-text p{
			color: #59798f;
			margin-bottom: 20px;
		}
		';

		echo sprintf(
			$notice_template,
			$image,
			$content,
			$button,
			$style
		);
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
