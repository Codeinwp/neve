<?php
/**
 * Front end functionality
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Core
 */

namespace Neve\Core;

/**
 * Front end handler class.
 *
 * @package Neve\Core
 */
class Front_End {

	/**
	 * The onboarding config.
	 *
	 * @var array
	 */
	private $onboarding_config = array();

	/**
	 * Theme setup.
	 */
	public function setup_theme() {

		// Maximum allowed width for any content in the theme, like oEmbeds and images added to posts.  https://codex.wordpress.org/Content_Width
		global $content_width;
		if ( ! isset( $content_width ) ) {
			$content_width = apply_filters( 'neve_content_width', 1200 );
		}

		load_theme_textdomain( 'neve', get_template_directory() . '/languages' );

		$logo_settings = array(
			'flex-width'  => true,
			'flex-height' => true,
			'height'      => 50,
			'width'       => 200,
		);

		$custom_background_settings = array(
			'default-color' => apply_filters( 'neve_default_background_color', 'ffffff' ),
		);

		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'custom-logo', $logo_settings );
		add_theme_support( 'html5', array( 'search-form' ) );
		add_theme_support( 'customize-selective-refresh-widgets' );
		add_theme_support( 'custom-background', $custom_background_settings );
		add_theme_support( 'themeisle-demo-import', $this->get_ti_demo_content_support_data() );
		add_theme_support( 'align-wide' );
		add_theme_support( 'editor-color-palette', $this->get_gutenberg_color_palette() );
		add_theme_support( 'fl-theme-builder-headers' );
		add_theme_support( 'fl-theme-builder-footers' );
		add_theme_support( 'header-footer-elementor' );
		add_theme_support( 'lifterlms-sidebars' );
		add_theme_support( 'lifterlms' );
		add_theme_support( 'service_worker', true );

		add_filter( 'embed_oembed_html', array( $this, 'wrap_oembeds' ), 10, 3 );
		add_filter( 'video_embed_html', array( $this, 'wrap_jetpack_oembeds' ), 10, 1 );
		add_filter( 'themeisle_gutenberg_templates', array( $this, 'add_gutenberg_templates' ) );
		$this->add_amp_support();

		$nav_menus_to_register = apply_filters(
			'neve_register_nav_menus',
			array(
				'primary' => esc_html__( 'Primary Menu', 'neve' ),
				'footer'  => esc_html__( 'Footer Menu', 'neve' ),
				'top-bar' => esc_html__( 'Secondary Menu', 'neve' ),
			)
		);
		register_nav_menus( $nav_menus_to_register );

		add_image_size( 'neve-blog', 930, 620, true );
		add_filter( 'wp_nav_menu_args', array( $this, 'nav_walker' ), 1001 );
		$this->add_woo_support();
	}

	/**
	 * Wrap embeds.
	 *
	 * @param string $markup embed markup.
	 * @param string $url    embed url.
	 * @param array  $attr   embed attributes [width/height].
	 *
	 * @return string
	 */
	public function wrap_oembeds( $markup, $url, $attr ) {
		$sources = [
			'youtube.com',
			'youtu.be',
			'cloudup.com',
			'dailymotion.com',
			'collegehumor.com',
			'ted.com',
			'vimeo.com',
		];
		foreach ( $sources as $source ) {
			if ( strpos( $url, $source ) !== false ) {
				return '<div class="nv-iframe-embed">' . $markup . '</div>';
			}
		}

		return $markup;
	}

	/**
	 * Wrap Jetpack embeds.
	 * Fixes the compose module aspect ratio issue.
	 *
	 * @param string $markup embed markup.
	 *
	 * @return string
	 */
	public function wrap_jetpack_oembeds( $markup ) {
		return '<div class="nv-iframe-embed">' . $markup . '</div>';
	}

	/**
	 * Tweak menu walker to support selective refresh.
	 *
	 * @param array $args List of arguments for navigation.
	 *
	 * @return mixed
	 */
	public function nav_walker( $args ) {
		if ( isset( $args['walker'] ) && is_string( $args['walker'] ) && class_exists( $args['walker'] ) ) {
			$args['walker'] = new $args['walker']();
		}

		return $args;
	}

	/**
	 * Reorder starter sites based on previous theme
	 *
	 * @return bool
	 */
	private function reorder_starter_sites() {
		$previous_theme = get_theme_mod( 'ti_prev_theme' );
		if ( empty( $previous_theme ) ) {
			return false;
		}

		$slug_association = array(
			'zerif-pro'      => 'neve-zelle',
			'zerif-lite'     => 'neve-zelle',
			'themotion'      => 'neve-themotion',
			'themotion-lite' => 'neve-themotion',
			'amadeus'        => 'neve-amadeus',
			'rokophoto-lite' => 'neve-rokophoto',
			'rokophoto'      => 'neve-rokophoto',
			'oblique'        => 'neve-oblique',
			'shop-isle'      => 'neve-shop',
			'shop-isle-pro'  => 'neve-shop',
			'lawyeria-lite'  => 'neve-lawyer',
			'lawyeria'       => 'neve-lawyer',
		);
		if ( ! array_key_exists( $previous_theme, $slug_association ) ) {
			return false;
		}
		if ( ! isset( $this->onboarding_config['local']['elementor'][ $slug_association[ $previous_theme ] ] ) ) {
			return false;
		}
		$starter_site = $this->onboarding_config['local']['elementor'][ $slug_association[ $previous_theme ] ];
		unset( $this->onboarding_config['local']['elementor'][ $slug_association[ $previous_theme ] ] );
		$this->onboarding_config['local']['elementor'] = array( $slug_association[ $previous_theme ] => $starter_site ) + $this->onboarding_config['local']['elementor'];

		return true;
	}

	/**
	 * Get the themeisle demo content support data.
	 *
	 * @return array
	 */
	private function get_ti_demo_content_support_data() {
		$theme_options = wp_get_theme();
		$theme_name    = apply_filters( 'ti_wl_theme_name', $theme_options->__get( 'Name' ) );

		$this->onboarding_config = array(
			'bulk_json'   => 'https://s20206.pcdn.co/wp-json/ti-demo-data/data?type=all',
			'editors'     => array(
				'elementor',
				'brizy',
				'beaver builder',
				'thrive architect',
				'divi builder',
			),
			'remote'      => array(
				'elementor'      => array(
					'neve-main'               => array(
						'url'        => 'https://demo.themeisle.com/neve-onboarding/',
						'remote_url' => 'https://s20206.pcdn.co/neve-onboarding/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-original.png',
						'title'      => 'Original',
					),
					'neve-web-agency'         => array(
						'url'              => 'https://demo.themeisle.com/neve-web-agency/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-web-agency/',
						'title'            => 'Web Agency',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-web-agency-all-new.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/9015394/neve-digital-agency/c794fcd505d0ac7fe2134479c3b8f670',
					),
					'neve-blogger'            => array(
						'url'              => 'https://demo.themeisle.com/neve-blogger/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-blogger/',
						'title'            => 'Blogger',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-blogger.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8936140/minimal-blog',
					),
					'neve-restaurant'         => array(
						'url'              => 'https://demo.themeisle.com/neve-restaurant/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-restaurant/',
						'title'            => 'Restaurant',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
					),
					'neve-charity'            => array(
						'url'              => 'https://demo.themeisle.com/neve-charity/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-charity/',
						'title'            => 'Charity',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-1.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
					),
					'neve-vet-center'         => array(
						'url'              => 'https://demo.themeisle.com/neve-vet-center/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-vet-center/',
						'title'            => 'Vet Center',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-2.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
					),
					'neve-doctors'            => array(
						'url'              => 'https://demo.themeisle.com/neve-doctors/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-doctors/',
						'title'            => 'Doctors',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-3.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
					),
					'neve-architecture'       => array(
						'url'              => 'https://demo.themeisle.com/neve-architecture/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-architecture/',
						'title'            => 'Architecture',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-4.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
					),
					'neve-fitness'            => array(
						'url'              => 'https://demo.themeisle.com/neve-fitness/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-fitness/',
						'title'            => 'Fitness',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-5.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/6800490/fitness-gym',
					),
					'neve-vacation-rental'    => array(
						'url'              => 'https://demo.themeisle.com/neve-vacation-rental/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-vacation-rental/',
						'title'            => 'Vacation Rental',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-6.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
					),
					'neve-music-band'         => array(
						'url'              => 'https://demo.themeisle.com/neve-music-band/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-music-band/',
						'title'            => 'Music Band',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-7.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
					),
					'neve-wedding'            => array(
						'url'              => 'https://demo.themeisle.com/neve-wedding/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-wedding/',
						'title'            => 'Wedding',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8116784/wedding/9afa9f6ba14422f348e1c7a49a9d51e9',
					),
					'neve-themotion'          => array(
						'url'              => 'https://demo.themeisle.com/neve-themotion/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-themotion/',
						'title'            => 'Video Blog',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-1.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8256651/neve-the-motion/79f8c5a63926e7cee4deed75bc6724fc',
					),
					'neve-amadeus'            => array(
						'url'              => 'https://demo.themeisle.com/neve-amadeus/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-amadeus/',
						'title'            => 'Music Teacher',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-2.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
					),
					'neve-oblique'            => array(
						'url'              => 'https://demo.themeisle.com/neve-oblique/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-oblique/',
						'title'            => 'Vintage',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-3.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
					),
					'neve-rokophoto'          => array(
						'url'              => 'https://demo.themeisle.com/neve-rokophoto/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-rokophoto/',
						'title'            => 'Photography',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-4.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
					),
					'neve-energy-panels'      => array(
						'url'              => 'https://demo.themeisle.com/neve-energy-panels/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-energy-panels/',
						'title'            => 'Energy Panels',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-5.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
					),
					'neve-lawyers'            => array(
						'url'              => 'https://demo.themeisle.com/neve-lawyers/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-lawyers/',
						'title'            => 'Lawyers',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-6.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
					),
					'neve-freelancer'         => array(
						'url'              => 'https://demo.themeisle.com/neve-freelancer/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-freelancer/',
						'title'            => 'Freelancer',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-7.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
					),
					'neve-shop'               => array(
						'url'              => 'https://demo.themeisle.com/neve-shop/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-shop/',
						'title'            => 'Shop',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-8.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587704/shop/56488e52ed6e70495219537f7d3846f2',
					),
					'neve-tattoo'             => array(
						'url'              => 'https://demo.themeisle.com/neve-tatoo/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-tatoo/',
						'title'            => 'Tattoo',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-8.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
					),
					'neve-zelle'              => array(
						'url'              => 'https://demo.themeisle.com/neve-zelle/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-zelle/',
						'title'            => 'Travel Agency',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-9.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
					),
					'neve-life-coach'         => array(
						'url'              => 'https://demo.themeisle.com/neve-scholar/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-scholar/',
						'title'            => 'Life Coach',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-10.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
					),
					'neve-creative-portfolio' => array(
						'url'              => 'https://demo.themeisle.com/neve-creative-portfolio/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-creative-portfolio/',
						'title'            => 'Creative Portfolio',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-11.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
					),
				),
				'brizy'          => array(
					'neve-brizy-main'               => array(
						'url'        => 'https://demo.themeisle.com/neve-onboarding-brizy/',
						'remote_url' => 'https://s20206.pcdn.co/neve-onboarding-brizy/',
						'title'      => 'Original',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-original.png',
					),
					'neve-brizy-restaurant'         => array(
						'url'              => 'https://demo.themeisle.com/neve-restaurant-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-restaurant-brizy/',
						'title'            => 'Restaurant',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot.png',
					),
					'neve-brizy-charity'            => array(
						'url'              => 'https://demo.themeisle.com/neve-charity-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-charity-brizy/',
						'title'            => 'Charity',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-1.png',
					),
					'neve-brizy-vet-center'         => array(
						'url'              => 'https://demo.themeisle.com/neve-vet-center-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-vet-center-brizy/',
						'title'            => 'Vet Center',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-2.png',
					),
					'neve-brizy-doctors'            => array(
						'url'              => 'https://demo.themeisle.com/neve-doctors-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-doctors-brizy/',
						'title'            => 'Doctors',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-3.png',
					),
					'neve-brizy-architecture'       => array(
						'url'              => 'https://demo.themeisle.com/neve-architecture-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-architecture-brizy/',
						'title'            => 'Architecture',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-caffe-new-ss.jpg',
					),
					'neve-brizy-fitness'            => array(
						'url'              => 'https://demo.themeisle.com/neve-fitness-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-fitness-brizy/',
						'title'            => 'Fitness',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-5.png',
					),
					'neve-brizy-vacation-rental'    => array(
						'url'              => 'https://demo.themeisle.com/neve-vacation-rental-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-vacation-rental-brizy/',
						'title'            => 'Vacation Rental',
						'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-6.png',
					),
					'neve-brizy-music-band'         => array(
						'url'              => 'https://demo.themeisle.com/neve-music-band-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-music-band-brizy/',
						'title'            => 'Music Band',
						'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-7.png',
					),
					'neve-brizy-amadeus'            => array(
						'url'              => 'https://demo.themeisle.com/neve-amadeus-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-amadeus-brizy/',
						'title'            => 'Music Teacher',
						'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-2.jpg',
					),
					'neve-brizy-oblique'            => array(
						'url'              => 'https://demo.themeisle.com/neve-oblique-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-oblique-brizy/',
						'title'            => 'Vintage',
						'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-3.jpg',
					),
					'neve-brizy-rokophoto'          => array(
						'url'              => 'https://demo.themeisle.com/neve-rokophoto-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-rokophoto-brizy/',
						'title'            => 'Photography',
						'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-4.jpg',
					),
					'neve-brizy-energy-panels'      => array(
						'url'              => 'https://demo.themeisle.com/neve-energy-panels-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-energy-panels-brizy/',
						'title'            => 'Energy Panels',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-5.jpg',
					),
					'neve-brizy-lawyers'            => array(
						'url'              => 'https://demo.themeisle.com/neve-lawyers-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-lawyers-brizy/',
						'title'            => 'Lawyers',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-lawyers.jpg',
					),
					'neve-brizy-freelancer'         => array(
						'url'              => 'https://demo.themeisle.com/neve-freelancer-brizy',
						'remote_url'       => 'https://s20206.pcdn.co/neve-freelancer-brizy/',
						'title'            => 'Freelancer',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-7.jpg',
					),
					'neve-brizy-shop'               => array(
						'url'              => 'https://demo.themeisle.com/neve-shop-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-shop-brizy/',
						'title'            => 'Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587704/shop/56488e52ed6e70495219537f7d3846f2',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-8.png',
					),
					'neve-brizy-tattoo'             => array(
						'url'              => 'https://demo.themeisle.com/neve-tatoo-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-tatoo-brizy/',
						'title'            => 'Tattoo',
						'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-8.jpg',
					),
					'neve-brizy-zelle'              => array(
						'url'              => 'https://demo.themeisle.com/neve-zelle-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-zelle-brizy/',
						'title'            => 'Travel Agency',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-9.jpg',
					),
					'neve-brizy-life-coach'         => array(
						'url'              => 'https://demo.themeisle.com/neve-scholar-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-scholar-brizy/',
						'title'            => 'Life Coach',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-10.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
					),
					'neve-brizy-creative-portfolio' => array(
						'url'              => 'https://demo.themeisle.com/neve-creative-portfolio-brizy/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-creative-portfolio-brizy/',
						'title'            => 'Creative Portfolio',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-11.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
					),
				),
				'beaver builder' => [
					'neve-beaver-onboarding'         => array(
						'url'        => 'https://demo.themeisle.com/neve-onboarding-bb/',
						'remote_url' => 'https://s20206.pcdn.co/neve-onboarding-bb/',
						'title'      => 'Original',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-original.png',
					),
					'neve-beaver-blogger'            => array(
						'url'        => 'https://demo.themeisle.com/neve-blogger-bb/',
						'remote_url' => 'https://s20206.pcdn.co/neve-blogger-bb/',
						'title'      => 'Blogger',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-blogger.jpg',
					),
					'neve-beaver-restaurant'         => array(
						'url'              => 'https://demo.themeisle.com/neve-bb-restaurant/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-bb-restaurant/',
						'title'            => 'Restaurant',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot.png',
					),
					'neve-beaver-charity'            => array(
						'url'              => 'https://demo.themeisle.com/neve-charity-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-charity-bb/',
						'title'            => 'Charity',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-1.png',
					),
					'neve-beaver-vet-center'         => array(
						'url'              => 'https://demo.themeisle.com/neve-vet-center-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-vet-center-bb/',
						'title'            => 'Vet Center',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-2.png',
					),
					'neve-beaver-doctors'            => array(
						'url'              => 'https://demo.themeisle.com/neve-bb-doctors/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-bb-doctors/',
						'title'            => 'Doctors',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-3.png',
					),
					'neve-beaver-architecture'       => array(
						'url'              => 'https://demo.themeisle.com/neve-bb-architecture/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-bb-architecture/',
						'title'            => 'Architecture',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-caffe-new-ss.jpg',
					),
					'neve-beaver-fitness'            => array(
						'url'              => 'https://demo.themeisle.com/neve-fitness-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-fitness-bb/',
						'title'            => 'Fitness',
						'unsplash_gallery' => 'https://unsplash.com/collections/6800490/fitness-gym',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-5.png',
					),
					'neve-beaver-vacation-rental'    => array(
						'url'              => 'https://demo.themeisle.com/neve-bb-vacantion-rental/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-bb-vacantion-rental/',
						'title'            => 'Vacation Rental',
						'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-6.png',
					),
					'neve-beaver-music-band'         => array(
						'url'              => 'https://demo.themeisle.com/neve-bb-music-band/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-bb-music-band/',
						'title'            => 'Music Band',
						'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-7.png',
					),
					'neve-beaver-wedding'            => array(
						'url'              => 'https://demo.themeisle.com/neve-wedding-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-wedding-bb/',
						'title'            => 'Wedding',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8116784/wedding/9afa9f6ba14422f348e1c7a49a9d51e9',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot.jpg',
					),
					'neve-beaver-themotion'          => array(
						'url'              => 'https://demo.themeisle.com/neve-themotion-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-themotion-bb/',
						'title'            => 'Video Blog',
						'unsplash_gallery' => 'https://unsplash.com/collections/8256651/neve-the-motion/79f8c5a63926e7cee4deed75bc6724fc',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-1.jpg',
					),
					'neve-beaver-amadeus'            => array(
						'url'              => 'https://demo.themeisle.com/neve-amadeus-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-amadeus-bb/',
						'title'            => 'Music Teacher',
						'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-2.jpg',
					),
					'neve-beaver-oblique'            => array(
						'url'              => 'https://demo.themeisle.com/neve-oblique-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-oblique-bb/',
						'title'            => 'Vintage',
						'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-3.jpg',
					),
					'neve-beaver-rokophoto'          => array(
						'url'              => 'https://demo.themeisle.com/neve-rokophoto-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-rokophoto-bb/',
						'title'            => 'Photography',
						'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-4.jpg',
					),
					'neve-beaver-energy-panels'      => array(
						'url'              => 'https://demo.themeisle.com/neve-energy-panels-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-energy-panels-bb/',
						'title'            => 'Energy Panels',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-5.jpg',
					),
					'neve-beaver-shop'               => array(
						'url'              => 'https://demo.themeisle.com/neve-shop-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-shop-bb/',
						'title'            => 'Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587704/shop/56488e52ed6e70495219537f7d3846f2',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-8.png',
					),
					'neve-beaver-freelancer'         => array(
						'url'              => 'https://demo.themeisle.com/neve-bb-freelancer/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-bb-freelancer/',
						'title'            => 'Freelancer',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-7.jpg',
					),
					'neve-beaver-lawyers'            => array(
						'url'              => 'https://demo.themeisle.com/neve-lawyers-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-lawyers-bb/',
						'title'            => 'Lawyers',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-lawyers.jpg',
					),
					'neve-beaver-tattoo'             => array(
						'url'              => 'https://demo.themeisle.com/neve-tatoo-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-tatoo-bb/',
						'title'            => 'Tattoo',
						'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-8.jpg',
					),
					'neve-beaver-zelle'              => array(
						'url'              => 'https://demo.themeisle.com/neve-zelle-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-zelle-b/',
						'title'            => 'Travel Agency',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-9.jpg',
					),
					'neve-beaver-life-coach'         => array(
						'url'              => 'https://demo.themeisle.com/neve-scholar-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-scholar-bb/',
						'title'            => 'Life Coach',
						'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-10.jpg',
					),
					'neve-beaver-creative-portfolio' => array(
						'url'              => 'https://demo.themeisle.com/neve-creative-portfolio-bb/',
						'remote_url'       => 'https://s20206.pcdn.co/neve-creative-portfolio-bb/',
						'title'            => 'Creative Portfolio',
						'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
						'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-11.jpg',
					),
				],
			),
			'upsell'      => array(
				'divi builder'     => array(
					'neve-divi-lawyers'      => array(
						'url'        => 'https://demo.themeisle.com/neve-lawyers-dv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-lawyers.jpg',
						'title'      => 'Lawyers',
					),
					'neve-divi-cafe'         => array(
						'url'        => 'https://demo.themeisle.com/neve-cafe-dv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-caffe-new-ss.jpg',
						'title'      => 'Coffee Shop',
					),
					'neve-divi-fashion'      => array(
						'url'        => 'https://demo.themeisle.com/neve-fashion-dv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/07/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
					),
					'neve-divi-job-listings' => array(
						'url'        => 'https://demo.themeisle.com/neve-job-listing-dv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-job-listings.jpg',
						'title'      => 'Job Listing',
					),
					'neve-divi-real-estate'  => array(
						'url'        => 'https://demo.themeisle.com/neve-real-estate-dv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-real-estate.jpg',
						'title'      => 'Real Estate',
					),
					'neve-divi-events'       => array(
						'url'        => 'https://demo.themeisle.com/neve-events-dv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-events.jpg',
						'title'      => 'Events',
					),
					'neve-divi-farm'         => array(
						'url'        => 'https://demo.themeisle.com/neve-farm-dv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-farm.jpg',
						'title'      => 'Farm',
					),
					'neve-divi-kindergarten' => array(
						'url'        => 'https://demo.themeisle.com/neve-kindergarten-dv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
					),
					'neve-divi-speed'        => array(
						'url'        => 'https://demo.themeisle.com/neve-pro-dv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-speed.jpg',
						'title'      => 'Speed',
					),
					'neve-divi-funnel'       => array(
						'url'        => 'https://demo.themeisle.com/neve-sales-funnel-dv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-sales.jpg',
						'title'      => 'Sales Funnel',
					),
				),
				'thrive architect' => array(
					'neve-thrive-cafe'                  => array(
						'url'        => 'https://demo.themeisle.com/neve-cafe-th/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-caffe-new-ss.jpg',
						'title'      => 'Coffee Shop',
					),
					'neve-thrive-fashion'               => array(
						'url'        => 'https://demo.themeisle.com/neve-fashion-th/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/07/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
					),
					'neve-thrive-showcase'              => array(
						'url'        => 'https://demo.themeisle.com/neve-showcase-th/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-showcase-new.jpg',
						'title'      => 'Showcase',
					),
					'neve-thrive-job-listings'          => array(
						'url'        => 'https://demo.themeisle.com/neve-job-listings-th/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-job-listings.jpg',
						'title'      => 'Job Listing',
					),
					'neve-thrive-real-estate'           => array(
						'url'        => 'https://demo.themeisle.com/neve-real-estate-th/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-real-estate.jpg',
						'title'      => 'Real Estate',
					),
					'neve-thrive-events'                => array(
						'url'        => 'https://demo.themeisle.com/neve-events-th/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-events.jpg',
						'title'      => 'Events',
					),
					'neve-thrive-photography-portfolio' => array(
						'url'        => 'https://demo.themeisle.com/neve-photography-portfolio-th/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
					),
					'neve-thrive-video-agency'          => array(
						'url'        => 'https://demo.themeisle.com/neve-video-th/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
					),
					'neve-thrive-farm'                  => array(
						'url'        => 'https://demo.themeisle.com/neve-farm-th/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-farm.jpg',
						'title'      => 'Farm',
					),
					'neve-thrive-speed'                 => array(
						'url'        => 'https://demo.themeisle.com/neve-pro-th/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-speed.jpg',
						'title'      => 'Speed',
					),
				),
				'beaver builder'   => array(
					'neve-beaver-cafe'                  => array(
						'url'        => 'https://demo.themeisle.com/neve-cafe-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-caffe-new-ss.jpg',
						'title'      => 'Coffee Shop',
					),
					'neve-beaver-constructions'         => array(
						'url'        => 'https://demo.themeisle.com/neve-constructions-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-construction-new-screenshot.jpg',
						'title'      => 'Constructions Company',
					),
					'neve-beaver-fashion'               => array(
						'url'        => 'https://demo.themeisle.com/neve-bb-fashion/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/07/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
					),
					'neve-beaver-showcase'              => array(
						'url'        => 'https://demo.themeisle.com/neve-showcase-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-showcase-new.jpg',
						'title'      => 'Showcase',
					),
					'neve-beaver-consultants'           => array(
						'url'        => 'https://demo.themeisle.com/neve-consultants-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
					),
					'neve-beaver-job-listings'          => array(
						'url'        => 'https://demo.themeisle.com/neve-job-listings-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-job-listings.jpg',
						'title'      => 'Job Listing',
					),
					'neve-beaver-barber-shop'           => array(
						'url'        => 'https://demo.themeisle.com/neve-barber-shop-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
					),
					'neve-beaver-personal-trainer'      => array(
						'url'        => 'https://demo.themeisle.com/neve-personal-trainer-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
					),
					'neve-beaver-real-estate'           => array(
						'url'        => 'https://demo.themeisle.com/neve-real-estate-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-real-estate.jpg',
						'title'      => 'Real Estate',
					),
					'neve-beaver-events'                => array(
						'url'        => 'https://demo.themeisle.com/neve-events-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-events.jpg',
						'title'      => 'Events',
					),
					'neve-beaver-photography-portfolio' => array(
						'url'        => 'https://demo.themeisle.com/neve-photography-portfolio-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
					),
					'neve-beaver-video-agency'          => array(
						'url'        => 'https://demo.themeisle.com/neve-video-agency-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
					),
					'neve-beaver-furniture-shop'        => array(
						'url'        => 'https://demo.themeisle.com/neve-furniture-shop-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
					),
					'neve-beaver-portrait-photography'  => array(
						'url'        => 'https://demo.themeisle.com/neve-portrait-photopraphy-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
					),
					'neve-beaver-farm'                  => array(
						'url'        => 'https://demo.themeisle.com/neve-farm-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-farm.jpg',
						'title'      => 'Farm',
					),
					'neve-beaver-photographer'          => array(
						'url'        => 'https://demo.themeisle.com/neve-photography-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-photographer.jpg',
						'title'      => 'Photographer',
					),
					'neve-beaver-kindergarten'          => array(
						'url'        => 'https://demo.themeisle.com/neve-kindergarden-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
					),
					'neve-beaver-florist'               => array(
						'url'        => 'https://demo.themeisle.com/neve-florist-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-florist.jpg',
						'title'      => 'Florist',
					),
					'neve-beaver-cake-shop'             => array(
						'url'        => 'https://demo.themeisle.com/neve-cake-shop-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-cake-shop.jpg',
						'title'      => 'Cake Shop',
					),
					'neve-beaver-transport'             => array(
						'url'        => 'https://demo.themeisle.com/neve-transport-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-transport.jpg',
						'title'      => 'Transport',
					),
					'neve-beaver-ebook'                 => array(
						'url'        => 'https://demo.themeisle.com/neve-ebook-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-ebook.jpg',
						'title'      => 'eBook',
					),
					'neve-beaver-speed'                 => array(
						'url'        => 'https://demo.themeisle.com/neve-pro-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-speed.jpg',
						'title'      => 'Speed',
					),
					'neve-beaver-food-magazine'         => array(
						'url'        => 'https://demo.themeisle.com/neve-food-magazine-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-food-magazine.jpg',
						'title'      => 'Food Magazine',
					),
					'neve-beaver-web-design'            => array(
						'url'        => 'https://demo.themeisle.com/neve-web-design-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-web-design.jpg',
						'title'      => 'eCourse - Web Design',
					),
					'neve-beaver-yoga-studio'           => array(
						'url'        => 'https://demo.themeisle.com/neve-yoga-studio-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-yoga.jpg',
						'title'      => 'Yoga Studio',
					),
					'neve-beaver-sales-funnel'          => array(
						'url'        => 'https://demo.themeisle.com/neve-sales-funnel-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-sales.jpg',
						'title'      => 'Sales Funnel',
					),
					'neve-beaver-church'                => array(
						'url'        => 'https://demo.themeisle.com/neve-church-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-church.jpg',
						'title'      => 'Church',
					),
					'neve-beaver-fashion-magazine'      => array(
						'url'        => 'https://demo.themeisle.com/neve-fashion-magazine-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-fashion-mag.jpg',
						'title'      => 'Fashion Magazine',
					),
					'neve-beaver-winery'                => array(
						'url'        => 'https://demo.themeisle.com/neve-winery-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-winery.png',
						'title'      => 'Winery - Wine Shop',
					),
					'neve-beaver-news-magazine'         => array(
						'url'        => 'https://demo.themeisle.com/neve-news-magazine-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-news.jpg',
						'title'      => 'News Magazine',
					),
					'neve-beaver-coworking'             => array(
						'url'        => 'https://demo.themeisle.com/neve-coworking-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-coworking.jpg',
						'title'      => 'Coworking Space',
					),
					'neve-beaver-car-rental'            => array(
						'url'        => 'https://demo.themeisle.com/neve-car-rental-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-cart-rental.jpg',
						'title'      => 'Car Rental',
					),
					'neve-beaver-moving-company'        => array(
						'url'        => 'https://demo.themeisle.com/neve-moving-company-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-moving-company.jpg',
						'title'      => 'Moving Company Logistics Services',
					),
					'neve-beaver-translation-services'  => array(
						'url'        => 'https://demo.themeisle.com/neve-translation-services-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-translations.jpg',
						'title'      => 'Translation and Interpreter Services',
					),
					'neve-beaver-blogger'               => array(
						'url'        => 'https://demo.themeisle.com/neve-blogger-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-blogger.jpg',
						'title'      => 'Blogger',
					),
					'neve-beaver-coupons'               => array(
						'url'        => 'https://demo.themeisle.com/neve-coupons-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-coupons.jpg',
						'title'      => 'Coupons Discounts and Offers',
					),
					'neve-beaver-escape-room'           => array(
						'url'        => 'https://demo.themeisle.com/neve-escape-room-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-escape-room.jpg',
						'title'      => 'Escape Room',
					),
					'neve-beaver-cv'                    => array(
						'url'        => 'https://demo.themeisle.com/neve-cv-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-resume.jpg',
						'title'      => 'Resume',
					),
					'neve-beaver-wellness'              => array(
						'url'        => 'https://demo.themeisle.com/neve-wellness-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-wellness.jpg',
						'title'      => 'Wellness Spa',
					),
					'neve-beaver-courses'               => array(
						'url'        => 'https://demo.themeisle.com/neve-courses-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-courses.jpg',
						'title'      => 'Online Courses',
					),
					'neve-beaver-model-agency'          => array(
						'url'        => 'https://demo.themeisle.com/neve-model-agency-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-model-agency.jpg',
						'title'      => 'Fashion Model Agency',
					),
					'neve-beaver-it-company'            => array(
						'url'        => 'https://demo.themeisle.com/neve-it-company-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-it-solution.jpg',
						'title'      => 'IT Technology Agency',
					),
					'neve-beaver-podcast'               => array(
						'url'        => 'https://demo.themeisle.com/neve-podcast-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-podcast.jpg',
						'title'      => 'Podcast',
					),
					'neve-beaver-digital-agency'        => array(
						'url'        => 'https://demo.themeisle.com/neve-digital-agency-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-digital-agency.jpg',
						'title'      => 'Digital Agency',
					),
					'neve-beaver-industrial'            => array(
						'url'        => 'https://demo.themeisle.com/neve-industrial-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-industrial.jpg',
						'title'      => 'Industrial',
					),
					'neve-beaver-adventure'             => array(
						'url'        => 'https://demo.themeisle.com/neve-adventure-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-adventure.jpg',
						'title'      => 'Adventure',
					),
					'neve-beaver-product-launch'        => array(
						'url'        => 'https://demo.themeisle.com/neve-product-launch-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-product-lunch.jpg',
						'title'      => 'Product Launch',
					),
					'neve-beaver-accounting'            => array(
						'url'        => 'https://demo.themeisle.com/neve-accounting-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-accounting.jpg',
						'title'      => 'Accounting',
					),
					'neve-beaver-beauty-shop'           => array(
						'url'        => 'https://demo.themeisle.com/neve-beauty-shop-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-beauty-shop.jpg',
						'title'      => 'Beauty Shop',
					),
					'neve-beaver-recruitment'           => array(
						'url'        => 'https://demo.themeisle.com/neve-recruitment-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-recruitment.jpg',
						'title'      => 'Recruitment Agency',
					),
					'neve-beaver-artist'                => array(
						'url'        => 'https://demo.themeisle.com/neve-artist-bb/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-artist.jpg',
						'title'      => 'Artist',
					),
				),
				'elementor'        => array(
					'neve-cafe'                  => array(
						'url'        => 'https://demo.themeisle.com/neve-cafe/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-caffe-new-ss.jpg',
						'title'      => 'Coffee Shop',
					),
					'neve-constructions'         => array(
						'url'        => 'https://demo.themeisle.com/neve-constructions/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-construction-new-screenshot.jpg',
						'title'      => 'Constructions Company',
					),
					'neve-fashion'               => array(
						'url'        => 'https://demo.themeisle.com/neve-fashion/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/07/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
					),
					'neve-showcase'              => array(
						'url'        => 'https://demo.themeisle.com/neve-showcase/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-showcase-new.jpg',
						'title'      => 'Showcase',
					),
					'neve-consultants'           => array(
						'url'        => 'https://demo.themeisle.com/neve-consultants/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
					),
					'neve-job-listings'          => array(
						'url'        => 'https://demo.themeisle.com/neve-job-listings/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-job-listings.jpg',
						'title'      => 'Job Listing',
					),
					'neve-barber-shop'           => array(
						'url'        => 'https://demo.themeisle.com/neve-barber-shop/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
					),
					'neve-personal-traner'       => array(
						'url'        => 'https://demo.themeisle.com/neve-personal-trainer/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
					),
					'neve-real-estate'           => array(
						'url'        => 'https://demo.themeisle.com/neve-real-estate/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-real-estate.jpg',
						'title'      => 'Real Estate',
					),
					'neve-events'                => array(
						'url'        => 'https://demo.themeisle.com/neve-events/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-events.jpg',
						'title'      => 'Events',
					),
					'neve-portrait-photopraphy'  => array(
						'url'        => 'https://demo.themeisle.com/neve-portrait-photopraphy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
					),
					'neve-photography-portfolio' => array(
						'url'        => 'https://demo.themeisle.com/neve-photography-portfolio/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
					),
					'neve-video-agency'          => array(
						'url'        => 'https://demo.themeisle.com/video-agency/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
					),
					'neve-furniture-shop'        => array(
						'url'        => 'https://demo.themeisle.com/neve-furniture-shop/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
					),
					'neve-farm'                  => array(
						'url'        => 'https://demo.themeisle.com/neve-farm/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-farm.jpg',
						'title'      => 'Farm',
					),
					'neve-photographer'          => array(
						'url'        => 'https://demo.themeisle.com/neve-photography/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-photographer.jpg',
						'title'      => 'Photographer',
					),
					'neve-kindergarten'          => array(
						'url'        => 'https://demo.themeisle.com/neve-kindergarten/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
					),
					'neve-florist'               => array(
						'url'        => 'https://demo.themeisle.com/neve-florist/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-florist.jpg',
						'title'      => 'Florist',
					),
					'neve-cake-shop'             => array(
						'url'        => 'https://demo.themeisle.com/neve-cake-shop/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-cake-shop.jpg',
						'title'      => 'Cake Shop',
					),
					'neve-transport'             => array(
						'url'        => 'https://demo.themeisle.com/neve-transport/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-transport.jpg',
						'title'      => 'Transport',
					),
					'neve-ebook'                 => array(
						'url'        => 'https://demo.themeisle.com/neve-ebook/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-ebook.jpg',
						'title'      => 'eBook',
					),
					'neve-speed'                 => array(
						'url'        => 'https://demo.themeisle.com/neve-pro/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-speed.jpg',
						'title'      => 'Speed',
					),
					'neve-food-magazine'         => array(
						'url'        => 'https://demo.themeisle.com/neve-food-magazine/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-food-magazine.jpg',
						'title'      => 'Food Magazine',
					),
					'neve-web-design'            => array(
						'url'        => 'https://demo.themeisle.com/neve-web-design/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-web-design.jpg',
						'title'      => 'eCourse - Web Design',
					),
					'neve-yoga-studio'           => array(
						'url'        => 'https://demo.themeisle.com/neve-yoga-studio/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-yoga.jpg',
						'title'      => 'Yoga Studio',
					),
					'neve-sales-funnel'          => array(
						'url'        => 'https://demo.themeisle.com/neve-sales-funnel/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-sales.jpg',
						'title'      => 'Sales Funnel',
					),
					'neve-church'                => array(
						'url'        => 'https://demo.themeisle.com/neve-church/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-church.jpg',
						'title'      => 'Church',
					),
					'neve-fashion-magazine'      => array(
						'url'        => 'https://demo.themeisle.com/neve-fashion-magazine/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-fashion-mag.jpg',
						'title'      => 'Fashion Magazine',
					),
					'neve-winery'                => array(
						'url'        => 'https://demo.themeisle.com/neve-winery/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-winery.png',
						'title'      => 'Winery - Wine Shop',
					),
					'neve-news-magazine'         => array(
						'url'        => 'https://demo.themeisle.com/neve-news-magazine/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-news.jpg',
						'title'      => 'News Magazine',
					),
					'neve-coworking'             => array(
						'url'        => 'https://demo.themeisle.com/neve-coworking/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-coworking.jpg',
						'title'      => 'Coworking Space',
					),
					'neve-fishing-club'          => array(
						'url'        => 'https://demo.themeisle.com/neve-fishing-club/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-fishing.jpg',
						'title'      => 'Fishing and Hunting Club',
					),
					'neve-car-rental'            => array(
						'url'        => 'https://demo.themeisle.com/neve-car-rental/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-cart-rental.jpg',
						'title'      => 'Car Rental',
					),
					'neve-ski-resort'            => array(
						'url'        => 'https://demo.themeisle.com/neve-ski-resort/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/sky-resort.jpg',
						'title'      => 'Ski Resort Winter Hotel',
					),
					'neve-digital-product'       => array(
						'url'        => 'https://demo.themeisle.com/neve-digital-product-funnel/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-digital-product.jpg',
						'title'      => 'Digital Product Funnel',
					),
					'neve-moving-company'        => array(
						'url'        => 'https://demo.themeisle.com/neve-moving-company/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-moving-company.jpg',
						'title'      => 'Moving Company Logistics Services',
					),
					'neve-translation-services'  => array(
						'url'        => 'https://demo.themeisle.com/neve-translation-services/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-translations.jpg',
						'title'      => 'Translation and Interpreter Services',
					),
					'neve-blogger'               => array(
						'url'        => 'https://demo.themeisle.com/neve-blogger/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-blogger.jpg',
						'title'      => 'Blogger',
					),
					'neve-coupons'               => array(
						'url'        => 'https://demo.themeisle.com/neve-coupons/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-coupons.jpg',
						'title'      => 'Coupons Discounts and Offers',
					),
					'neve-escape-room'           => array(
						'url'        => 'https://demo.themeisle.com/neve-escape-room/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-escape-room.jpg',
						'title'      => 'Escape Room',
					),
					'neve-cv'                    => array(
						'url'        => 'https://demo.themeisle.com/neve-cv/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-resume.jpg',
						'title'      => 'Resume',
					),
					'neve-wellness'              => array(
						'url'        => 'https://demo.themeisle.com/neve-wellness/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-wellness.jpg',
						'title'      => 'Wellness Spa',
					),
					'neve-courses'               => array(
						'url'        => 'https://demo.themeisle.com/neve-courses/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-courses.jpg',
						'title'      => 'Online Courses',
					),
					'neve-model-agency'          => array(
						'url'        => 'https://demo.themeisle.com/neve-model-agency/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-model-agency.jpg',
						'title'      => 'Fashion Model Agency',
					),
					'neve-it-company'            => array(
						'url'        => 'https://demo.themeisle.com/neve-it-company/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-it-solution.jpg',
						'title'      => 'IT Technology Agency',
					),
					'neve-christmas-market'      => array(
						'url'        => 'https://demo.themeisle.com/neve-christmas-market/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-christmas.jpg',
						'title'      => 'Christmas Market',
					),
					'neve-podcast'               => array(
						'url'        => 'https://demo.themeisle.com/neve-podcast/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-podcast.jpg',
						'title'      => 'Podcast',
					),
					'neve-digital-agency'        => array(
						'url'        => 'https://demo.themeisle.com/neve-digital-agency/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/12/neve-digital-agency.jpg',
						'title'      => 'Digital Agency',
					),
					'neve-industrial'            => array(
						'url'        => 'https://demo.themeisle.com/neve-industrial/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-industrial.jpg',
						'title'      => 'Industrial',
					),
					'neve-adventure'             => array(
						'url'        => 'https://demo.themeisle.com/neve-adventure/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-adventure.jpg',
						'title'      => 'Adventure',
					),
					'neve-product-launch'        => array(
						'url'        => 'https://demo.themeisle.com/neve-product-launch/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-product-lunch.jpg',
						'title'      => 'Product Launch',
					),
					'neve-accounting'            => array(
						'url'        => 'https://demo.themeisle.com/neve-accounting/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-accounting.jpg',
						'title'      => 'Accounting',
					),
					'neve-beauty-shop'           => array(
						'url'        => 'https://demo.themeisle.com/neve-beauty-shop/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-beauty-shop.jpg',
						'title'      => 'Beauty Shop',
					),
					'neve-recruitment'           => array(
						'url'        => 'https://demo.themeisle.com/neve-recruitment/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-recruitment.jpg',
						'title'      => 'Recruitment Agency',
					),
					'neve-artist'                => array(
						'url'        => 'https://demo.themeisle.com/neve-artist/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-artist.jpg',
						'title'      => 'Artist',
					),
					'neve-vr-studio'             => array(
						'url'        => 'https://demo.themeisle.com/neve-vr-studio/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-vr.jpg',
						'title'      => 'VR Studio',
					),
					'neve-makeup-artist'         => array(
						'url'        => 'https://demo.themeisle.com/neve-makeup-artist/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-makeup.jpg',
						'title'      => 'Makeup Artist',
					),
					'neve-diving'                => array(
						'url'        => 'https://demo.themeisle.com/neve-diving/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-diving.jpg',
						'title'      => 'Scuba Diving',
					),
					'neve-wine-bar'              => array(
						'url'        => 'https://demo.themeisle.com/neve-wine-bar/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/wine-bar.jpg',
						'title'      => 'Wine Bar',
					),
					'neve-mtb-race'              => array(
						'url'        => 'https://demo.themeisle.com/neve-mtb-race/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-race.jpg',
						'title'      => 'Mountain Biking Race',
					),
					'neve-movie'                 => array(
						'url'        => 'https://demo.themeisle.com/neve-movie/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-movie.jpg',
						'title'      => 'Movie Showcase',
					),
					'neve-running-club'          => array(
						'url'        => 'https://demo.themeisle.com/neve-running-club/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-run.jpg',
						'title'      => 'Running Club',
					),
					'neve-jewellery-shop'        => array(
						'url'        => 'https://demo.themeisle.com/neve-jewellery-shop/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-jewellery.jpg',
						'title'      => 'Jewellery Shop',
					),
					'neve-car-service'           => array(
						'url'        => 'https://demo.themeisle.com/neve-car-service/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-car-service.jpg',
						'title'      => 'Car Vehicle Service',
					),
					'neve-museum'                => array(
						'url'        => 'https://demo.themeisle.com/neve-museum/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-museum.jpg',
						'title'      => 'Museum',
					),
					'neve-exhibition'            => array(
						'url'        => 'https://demo.themeisle.com/neve-exhibition/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-art-expo.jpg',
						'title'      => 'Art Exhibition',
					),
					'neve-conference'            => array(
						'url'        => 'https://demo.themeisle.com/neve-conference/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-conference.jpg',
						'title'      => 'Conference',
					),
				),
				'brizy'            => array(
					'neve-brizy-cafe'                 => array(
						'url'        => 'https://demo.themeisle.com/neve-cafe-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-caffe-new-ss.jpg',
						'title'      => 'Coffee Shop',
					),
					'neve-brizy-constructions'        => array(
						'url'        => 'https://demo.themeisle.com/neve-constructions-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-construction-new-screenshot.jpg',
						'title'      => 'Constructions Company',
					),
					'neve-brizy-fashion'              => array(
						'url'        => 'https://demo.themeisle.com/neve-fashion-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/07/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
					),
					'neve-brizy-showcase'             => array(
						'url'        => 'https://demo.themeisle.com/neve-showcase-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-showcase-new.jpg',
						'title'      => 'Showcase',
					),
					'neve-brizy-consultants'          => array(
						'url'        => 'https://demo.themeisle.com/neve-consultants-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
					),
					'neve-brizy-job-listings'         => array(
						'url'        => 'https://demo.themeisle.com/neve-job-listings-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-job-listings.jpg',
						'title'      => 'Job Listing',
					),
					'neve-brizy-barber-shop'          => array(
						'url'        => 'https://demo.themeisle.com/neve-barber-shop-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
					),
					'neve-brizy-personal-traner'      => array(
						'url'        => 'https://demo.themeisle.com/neve-personal-trainer-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
					),
					'neve-brizy-real-estate'          => array(
						'url'        => 'https://demo.themeisle.com/neve-real-estate-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-real-estate.jpg',
						'title'      => 'Real Estate',
					),
					'neve-brizy-events'               => array(
						'url'        => 'https://demo.themeisle.com/neve-events-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-events.jpg',
						'title'      => 'Events',
					),
					'neve-brizy-portrait-photopraphy' => array(
						'url'        => 'https://demo.themeisle.com/neve-portrait-photography-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
					),
					'neve-brizy-furniture-shop'       => array(
						'url'        => 'https://demo.themeisle.com/neve-furniture-shop-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
					),
					'neve-brizy-farm'                 => array(
						'url'        => 'https://demo.themeisle.com/neve-farm-brizy/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/09/neve-farm.jpg',
						'title'      => 'Farm',
					),
				),
			),
			'can_migrate' => array(
				'zerif-pro'  => array(
					'theme_name'        => 'Zelle Pro',
					'theme_mod_check'   => 'zelle_frontpage_was_imported',
					'template'          => 'zelle',
					'heading'           => __( 'Want to keep using Zelle\'s homepage?', 'neve' ),
					'description'       => __( 'Hi! We\'ve noticed you were using Zelle before. To make your transition easier, we can help you keep the same beautiful homepage you had before, by converting it into an Elementor template. This option will also import your homepage content.', 'neve' ),
					'mandatory_plugins' => array(
						'elementor' => 'Elementor Page Builder',
					),
				),
				'zerif-lite' => array(
					'theme_name'        => 'Zelle Lite',
					'theme_mod_check'   => 'zelle_frontpage_was_imported',
					'template'          => 'zelle',
					'heading'           => __( 'Want to keep using Zelle\'s homepage?', 'neve' ),
					'description'       => __( 'Hi! We\'ve noticed you were using Zelle before. To make your transition easier, we can help you keep the same beautiful homepage you had before, by converting it into an Elementor template. This option will also import your homepage content.', 'neve' ),
					'mandatory_plugins' => array(
						'elementor' => 'Elementor Page Builder',
					),
				),
			),
			'i18n'        => array(
				'templates_title'       => __( 'Ready to use pre-built websites with 1-click installation', 'neve' ),
				/* translators: %s - theme name */
				'templates_description' => sprintf( __( 'With %s, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve' ), $theme_name ),
			),
			'pro_link'    => 'https://themeisle.com/themes/neve/upgrade/',

		);
		$this->reorder_starter_sites();
		$this->add_gutenberg_starter_sites();

		return apply_filters( 'neve_filter_onboarding_data', $this->onboarding_config );
	}

	/**
	 * Add gutenberg starter sites if wp_version > 5.0.0
	 */
	private function add_gutenberg_starter_sites() {
		global $wp_version;

		if ( version_compare( $wp_version, '5.0', '>' ) === false ) {
			return;
		}

		$this->onboarding_config['editors'][]           = 'gutenberg';
		$this->onboarding_config['remote']['gutenberg'] = array(
			'neve-main-gutenberg'            => array(
				'url'        => 'https://demo.themeisle.com/neve-onboarding-gutenberg',
				'remote_url' => 'https://s20206.pcdn.co/neve-onboarding-gutenberg/',
				'title'      => 'Original',
				'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/neve-original.png',
			),
			'neve-web-agency-gutenberg'      => array(
				'url'        => 'https://demo.themeisle.com/neve-web-agency-gb/',
				'remote_url' => 'https://s20206.pcdn.co/neve-web-agency-gb/',
				'title'      => 'Web Agency',
				'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/02/neve-web-agency-all-new.png',
			),
			'neve-blogger-gutenberg'         => array(
				'url'        => 'https://demo.themeisle.com/neve-blogger-gb/',
				'remote_url' => 'https://s20206.pcdn.co/neve-blogger-gb/',
				'title'      => 'Blogger',
				'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/11/neve-blogger.jpg',
			),
			'neve-restaurant-gutenberg'      => array(
				'url'              => 'https://demo.themeisle.com/neve-restaurant-gb/',
				'remote_url'       => 'https://s20206.pcdn.co/neve-restaurant-gb/',
				'title'            => 'Restaurant',
				'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
			),
			'neve-vet-center-gutenberg'      => array(
				'url'              => 'https://demo.themeisle.com/neve-vet-center-gb/',
				'remote_url'       => 'https://s20206.pcdn.co/neve-vet-center-gb/',
				'title'            => 'Vet Center',
				'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-2.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
			),
			'neve-doctors-gutenberg'         => array(
				'url'              => 'https://demo.themeisle.com/neve-doctors-gb/',
				'remote_url'       => 'https://s20206.pcdn.co/neve-doctors-gb/',
				'title'            => 'Doctors',
				'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-3.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
			),
			'neve-architecture-gutenberg'    => array(
				'url'              => 'https://demo.themeisle.com/neve-architecture-gb/',
				'remote_url'       => 'https://s20206.pcdn.co/neve-architecture-gb/',
				'title'            => 'Architecture',
				'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-4.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
			),
			'neve-fitness-gutenberg'         => array(
				'url'              => 'https://demo.themeisle.com/neve-fitness-gb/',
				'remote_url'       => 'https://s20206.pcdn.co/neve-fitness-gb/',
				'title'            => 'Fitness',
				'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-5.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/6800490/fitness-gym',
			),
			'neve-vacation-rental-gutenberg' => array(
				'url'              => 'https://demo.themeisle.com/neve-vacation-rental-gb/',
				'remote_url'       => 'https://s20206.pcdn.co/neve-vacation-rental-gb/',
				'title'            => 'Vacation Rental',
				'screenshot'       => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2020/01/screenshot-6.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
			),
		);
		$this->onboarding_config['upsell']['gutenberg'] = array(
			'neve-fashion-magazine-gutenberg' => array(
				'url'        => 'https://demo.themeisle.com/neve-fashion-magazine-gb/',
				'title'      => 'Fashion Magazine',
				'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/10/neve-fashion-mag.jpg',
			),
		);
	}

	/**
	 * Gutenberg Block Color Palettes.
	 *
	 * Get the color palette in Gutenberg from Customizer colors.
	 */
	private function get_gutenberg_color_palette() {
		$gutenberg_color_palette = array();

		array_push(
			$gutenberg_color_palette,
			array(
				'name'  => __( 'Black', 'neve' ),
				'slug'  => 'black',
				'color' => '#000000',
			)
		);

		array_push(
			$gutenberg_color_palette,
			array(
				'name'  => __( 'White', 'neve' ),
				'slug'  => 'white',
				'color' => '#ffffff',
			)
		);

		$color_controls = array(
			'neve_button_color'     => array(
				'default' => '#0366d6',
				'label'   => __( 'Button Color', 'neve' ),
			),
			'neve_link_color'       => array(
				'default' => '#0366d6',
				'label'   => __( 'Link Color', 'neve' ),
			),
			'neve_link_hover_color' => array(
				'default' => '#0366d6',
				'label'   => __( 'Link Hover Color', 'neve' ),
			),
			'neve_text_color'       => array(
				'default' => '#404248',
				'label'   => __( 'Text Color', 'neve' ),
			),
		);

		foreach ( $color_controls as $control_name => $control_data ) {
			$color      = get_theme_mod( $control_name, $control_data['default'] );
			$color_name = $control_data['label'];
			$slug       = preg_replace( '~[^\pL\d]+~u', '-', strtolower( $control_name ) );
			array_push(
				$gutenberg_color_palette,
				array(
					'name'  => esc_html( $color_name ),
					'slug'  => esc_html( $slug ),
					'color' => sanitize_hex_color( $color ),
				)
			);
		}

		/**
		 * Remove duplicate colors.
		 */
		$temp_arr = array_unique(
			array_map(
				function ( $el ) {
					return $el['color'];
				},
				$gutenberg_color_palette
			)
		);

		$colors = array_intersect_key( $gutenberg_color_palette, $temp_arr );

		return array_values( $colors );
	}

	/**
	 * Add new Gutenberg templates on Otter plugin.
	 *
	 * @return array
	 */
	public function add_gutenberg_templates( $templates_list ) {
		$current_theme = wp_get_theme()->Name;

		$templates = array(
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'big title', 'header', 'about' ),
				'categories'     => array( 'header' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/big-title/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/big-title/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'about us', 'about', 'description', 'showcase' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/about-us/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/about-us/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'focus', 'our focus', 'services', 'features', 'showcase' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/our-focus/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/our-focus/screenshot.png',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'video', 'embed', 'youtube', 'movie' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/video/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/video/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array(
					'team',
					'our team',
					'employees',
					'clients',
					'members',
					'people',
					'image',
					'card',
				),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/our-team/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/our-team/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'ribbon', 'statistics', 'numbers', 'clients', 'banner', 'logo', 'carousel' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/ribbon/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/ribbon/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'pricing', 'plan', 'packages', 'membership', 'product' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/pricing/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/pricing/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'testimonials', 'review', 'feedback', 'testimonial', 'happy', 'clients' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/testimonials/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/testimonials/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array(
					'features',
					'card',
					'about',
					'services',
					'advantages',
					'items',
					'boxes',
					'why',
				),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/features/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/features/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'blog', 'stories', 'posts', 'grid' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/blog/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/blog/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array(
					'contact',
					'us',
					'form',
					'message',
					'email',
					'support',
					'get',
					'in',
					'touch',
				),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/contact/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/contact/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'footer', 'resources', 'links', 'credits', 'contact', 'social', 'sharing' ),
				'categories'     => array( 'footer' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/footer/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/footer/screenshot.png',
			),
		);

		$list = array_merge( $templates, $templates_list );

		return $list;
	}

	/**
	 * Add AMP support
	 */
	private function add_amp_support() {
		if ( ! defined( 'AMP__VERSION' ) ) {
			return;
		}
		if ( version_compare( AMP__VERSION, '1.0.0', '<' ) ) {
			return;
		}
		add_theme_support(
			'amp',
			apply_filters(
				'neve_filter_amp_support',
				array(
					'paired' => true,
				)
			)
		);
	}

	/**
	 * Add WooCommerce support
	 */
	private function add_woo_support() {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return;
		}

		$woocommerce_settings = apply_filters(
			'neves_woocommerce_args',
			array(
				'single_image_width'            => 600,
				'thumbnail_image_width'         => 230,
				'gallery_thumbnail_image_width' => 160,
				'product_grid'                  => array(
					'default_columns' => 3,
					'default_rows'    => 4,
					'min_columns'     => 1,
					'max_columns'     => 6,
					'min_rows'        => 1,
				),
			)
		);

		add_theme_support( 'woocommerce', $woocommerce_settings );
		add_theme_support( 'wc-product-gallery-zoom' );
		add_theme_support( 'wc-product-gallery-lightbox' );
		add_theme_support( 'wc-product-gallery-slider' );

	}

	/**
	 * Enqueue scripts and styles.
	 */
	public function enqueue_scripts() {
		$this->add_styles();
		$this->add_scripts();
	}

	/**
	 * Enqueue styles.
	 */
	private function add_styles() {
		if ( class_exists( 'WooCommerce', false ) ) {
			wp_register_style( 'neve-woocommerce', NEVE_ASSETS_URL . 'css/woocommerce' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
			wp_style_add_data( 'neve-woocommerce', 'rtl', 'replace' );
			wp_style_add_data( 'neve-woocommerce', 'suffix', '.min' );
			wp_enqueue_style( 'neve-woocommerce' );
		}

		wp_register_style( 'neve-style', get_template_directory_uri() . '/style' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
		wp_style_add_data( 'neve-style', 'rtl', 'replace' );
		wp_style_add_data( 'neve-style', 'suffix', '.min' );
		wp_enqueue_style( 'neve-style' );
	}

	/**
	 * Enqueue scripts.
	 */
	private function add_scripts() {
		if ( neve_is_amp() ) {
			return;
		}

		wp_register_script( 'neve-script', NEVE_ASSETS_URL . 'js/build/modern/frontend.js', apply_filters( 'neve_filter_main_script_dependencies', array() ), NEVE_VERSION, true );

		wp_localize_script(
			'neve-script',
			'NeveProperties',
			apply_filters(
				'neve_filter_main_script_localization',
				array(
					'ajaxurl' => esc_url( admin_url( 'admin-ajax.php' ) ),
					'nonce'   => wp_create_nonce( 'wp_rest' ),
				)
			)
		);
		wp_enqueue_script( 'neve-script' );
		if ( class_exists( 'WooCommerce', false ) && is_woocommerce() ) {
			wp_register_script( 'neve-shop-script', NEVE_ASSETS_URL . 'js/build/modern/shop.js', array(), NEVE_VERSION, true );
			wp_enqueue_script( 'neve-shop-script' );
		}


		if ( is_singular() ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}

	/**
	 * Register widgets for the theme.
	 *
	 * @since    1.0.0
	 */
	public function register_sidebars() {
		$sidebars = array(
			'blog-sidebar' => esc_html__( 'Sidebar', 'neve' ),
			'shop-sidebar' => esc_html__( 'Shop Sidebar', 'neve' ),
		);

		$footer_sidebars = apply_filters(
			'neve_footer_widget_areas_array',
			array(
				'footer-one-widgets'   => esc_html__( 'Footer One', 'neve' ),
				'footer-two-widgets'   => esc_html__( 'Footer Two', 'neve' ),
				'footer-three-widgets' => esc_html__( 'Footer Three', 'neve' ),
				'footer-four-widgets'  => esc_html__( 'Footer Four', 'neve' ),
			)
		);

		$sidebars = array_merge( $sidebars, $footer_sidebars );

		foreach ( $sidebars as $sidebar_id => $sidebar_name ) {
			$sidebar_settings = array(
				'name'          => $sidebar_name,
				'id'            => $sidebar_id,
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<p class="widget-title">',
				'after_title'   => '</p>',
			);
			register_sidebar( $sidebar_settings );
		}
	}
}
