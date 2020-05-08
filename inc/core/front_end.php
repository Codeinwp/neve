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
		$this->onboarding_config = [
			'bulk_json'   => 'https://s20206.pcdn.co/wp-json/ti-demo-data/data?type=all',
			'editors'     => [
				'elementor',
				'brizy',
				'beaver builder',
				'thrive architect',
				'divi builder',
			],
			'remote'      => [
				'elementor'      => [
					'neve-main'               => [
						'url'        => 'https://demosites.io/onboarding/',
						'remote_url' => 'https://api.themeisle.com/sites/onboarding/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-original.png',
						'title'      => 'Original',
					],
					'neve-web-agency'         => [
						'url'              => 'https://demosites.io/web-agency/',
						'remote_url'       => 'https://api.themeisle.com/sites/web-agency/',
						'title'            => 'Web Agency',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-agency-all-new.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/9015394/neve-digital-agency/c794fcd505d0ac7fe2134479c3b8f670',
					],
					'neve-blogger'            => [
						'url'              => 'https://demosites.io/blogger/',
						'remote_url'       => 'https://api.themeisle.com/sites/blogger/',
						'title'            => 'Blogger',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-blogger.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8936140/minimal-blog',
					],
					'neve-restaurant'         => [
						'url'              => 'https://demosites.io/restaurant/',
						'remote_url'       => 'https://api.themeisle.com/sites/restaurant/',
						'title'            => 'Restaurant',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
					],
					'neve-charity'            => [
						'url'              => 'https://demosites.io/charity/',
						'remote_url'       => 'https://api.themeisle.com/sites/charity/',
						'title'            => 'Charity',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
					],
					'neve-vet-center'         => [
						'url'              => 'https://demosites.io/vet-center/',
						'remote_url'       => 'https://api.themeisle.com/sites/vet-center/',
						'title'            => 'Vet Center',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
					],
					'neve-doctors'            => [
						'url'              => 'https://demosites.io/doctors/',
						'remote_url'       => 'https://api.themeisle.com/sites/doctors/',
						'title'            => 'Doctors',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
					],
					'neve-architecture'       => [
						'url'              => 'https://demosites.io/architecture/',
						'remote_url'       => 'https://api.themeisle.com/sites/architecture/',
						'title'            => 'Architecture',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
					],
					'neve-fitness'            => [
						'url'              => 'https://demosites.io/fitness/',
						'remote_url'       => 'https://api.themeisle.com/sites/fitness/',
						'title'            => 'Fitness',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/6800490/fitness-gym',
					],
					'neve-vacation-rental'    => [
						'url'              => 'https://demosites.io/vacation-rental/',
						'remote_url'       => 'https://api.themeisle.com/sites/vacation-rental/',
						'title'            => 'Vacation Rental',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
					],
					'neve-music-band'         => [
						'url'              => 'https://demosites.io/music-band/',
						'remote_url'       => 'https://api.themeisle.com/sites/music-band/',
						'title'            => 'Music Band',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
					],
					'neve-wedding'            => [
						'url'              => 'https://demosites.io/wedding/',
						'remote_url'       => 'https://api.themeisle.com/sites/wedding/',
						'title'            => 'Wedding',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8116784/wedding/9afa9f6ba14422f348e1c7a49a9d51e9',
					],
					'neve-themotion'          => [
						'url'              => 'https://demosites.io/themotion/',
						'remote_url'       => 'https://api.themeisle.com/sites/themotion/',
						'title'            => 'Video Blog',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8256651/neve-the-motion/79f8c5a63926e7cee4deed75bc6724fc',
					],
					'neve-amadeus'            => [
						'url'              => 'https://demosites.io/amadeus/',
						'remote_url'       => 'https://api.themeisle.com/sites/amadeus/',
						'title'            => 'Music Teacher',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
					],
					'neve-oblique'            => [
						'url'              => 'https://demosites.io/oblique/',
						'remote_url'       => 'https://api.themeisle.com/sites/oblique/',
						'title'            => 'Vintage',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
					],
					'neve-rokophoto'          => [
						'url'              => 'https://demosites.io/rokophoto/',
						'remote_url'       => 'https://api.themeisle.com/sites/rokophoto/',
						'title'            => 'Photography',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
					],
					'neve-energy-panels'      => [
						'url'              => 'https://demosites.io/energy-panels/',
						'remote_url'       => 'https://api.themeisle.com/sites/energy-panels/',
						'title'            => 'Energy Panels',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
					],
					'neve-lawyers'            => [
						'url'              => 'https://demosites.io/lawyers/',
						'remote_url'       => 'https://api.themeisle.com/sites/lawyers/',
						'title'            => 'Lawyers',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
					],
					'neve-freelancer'         => [
						'url'              => 'https://demosites.io/freelancer/',
						'remote_url'       => 'https://api.themeisle.com/sites/freelancer/',
						'title'            => 'Freelancer',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
					],
					'neve-shop'               => [
						'url'              => 'https://demosites.io/shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/shop/',
						'title'            => 'Shop',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587704/shop/56488e52ed6e70495219537f7d3846f2',
					],
					'neve-tattoo'             => [
						'url'              => 'https://demosites.io/tatoo/',
						'remote_url'       => 'https://api.themeisle.com/sites/tatoo/',
						'title'            => 'Tattoo',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
					],
					'neve-zelle'              => [
						'url'              => 'https://demosites.io/zelle/',
						'remote_url'       => 'https://api.themeisle.com/sites/zelle/',
						'title'            => 'Travel Agency',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-9.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
					],
					'neve-life-coach'         => [
						'url'              => 'https://demosites.io/scholar/',
						'remote_url'       => 'https://api.themeisle.com/sites/scholar/',
						'title'            => 'Life Coach',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-10.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
					],
					'neve-creative-portfolio' => [
						'url'              => 'https://demosites.io/creative-portfolio/',
						'remote_url'       => 'https://api.themeisle.com/sites/creative-portfolio/',
						'title'            => 'Creative Portfolio',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-11.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
					],
					'neve-fitness-trainer'    => [
						'url'              => 'https://demosites.io/fitness-trainer/',
						'remote_url'       => 'https://api.themeisle.com/sites/fitness-trainer/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-trainer.jpg',
						'title'            => 'Fitness Trainer',
						'unsplash_gallery' => 'https://unsplash.com/collections/9852165/fitness-trainer',
					],
					'neve-band'               => [
						'url'              => 'https://demosites.io/band/',
						'remote_url'       => 'https://api.themeisle.com/sites/band/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-band.jpg',
						'title'            => 'Music Band 2',
						'unsplash_gallery' => 'https://unsplash.com/collections/9846128/music-band',
					],
					'neve-perfume-shop'       => [
						'url'              => 'https://demosites.io/perfume-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/perfume-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-perfume-big.jpg',
						'title'            => 'Perfume Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/9861326/neve-perfume/2b9b54c5c38cad45cc9d516bc35ff444',
					],
					'neve-jewellery-2'        => [
						'url'              => 'https://demosites.io/jewellery/',
						'remote_url'       => 'https://api.themeisle.com/sites/jewellery/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-jewellery-2.jpg',
						'title'            => 'Jewellery Shop 2',
						'unsplash_gallery' => 'https://unsplash.com/collections/9394656/neve-jewellery-shop/666f976701a01f90039e2d0ca45f4bbd',
					],
					'neve-boat-rental'        => [
						'url'              => 'https://demosites.io/boat-rental/',
						'remote_url'       => 'https://api.themeisle.com/sites/boat-rental/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-boat.jpg',
						'title'            => 'Boat Rental',
						'unsplash_gallery' => 'https://unsplash.com/collections/9844589/neve-boat-rental/173e04907bafee611ff844133b45da60',
					],
					'neve-apparel'            => [
						'url'              => 'https://demosites.io/apparel/',
						'remote_url'       => 'https://api.themeisle.com/sites/apparel/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-apparel.jpg',
						'title'            => 'Apparel',
						'unsplash_gallery' => 'https://unsplash.com/collections/9816182/neve-apparel/fb6435873d539d4c76084e01b8621d74',
					],
					'neve-pet-shop'           => [
						'url'              => 'https://demosites.io/pet-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/pet-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-pet.jpg',
						'title'            => 'Pet Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/9809183/pet-shop',
					],
					'neve-doctor'             => [
						'url'              => 'https://demosites.io/doctor/',
						'remote_url'       => 'https://api.themeisle.com/sites/doctor/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-doctors-2.jpg',
						'title'            => 'Doctors 2',
						'unsplash_gallery' => 'https://unsplash.com/collections/9809310/medical',
					],
					'neve-psychologist'       => [
						'url'              => 'https://demosites.io/psychologist/',
						'remote_url'       => 'https://api.themeisle.com/sites/psychologist/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-psychologist.jpg',
						'title'            => 'Psychologist',
						'unsplash_gallery' => 'https://unsplash.com/collections/9852234/neve-psychology/8784d7afa417b664cb07c9220343a6e0',
					],
					'neve-book-shop'          => [
						'url'              => 'https://demosites.io/book-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/book-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-book.jpg',
						'title'            => 'Book Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/9794162/neve-book-shop/4d24e3716ee5e23fa5b8ca96c485f8fe',
					],
				],
				'brizy'          => [
					'neve-brizy-main'               => [
						'url'        => 'https://demosites.io/onboarding-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/onboarding-brizy/',
						'title'      => 'Original',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-original.png',
					],
					'neve-brizy-restaurant'         => [
						'url'              => 'https://demosites.io/restaurant-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/restaurant-brizy/',
						'title'            => 'Restaurant',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.png',
					],
					'neve-brizy-charity'            => [
						'url'              => 'https://demosites.io/charity-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/charity-brizy/',
						'title'            => 'Charity',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.png',
					],
					'neve-brizy-vet-center'         => [
						'url'              => 'https://demosites.io/vet-center-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/vet-center-brizy/',
						'title'            => 'Vet Center',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.png',
					],
					'neve-brizy-doctors'            => [
						'url'              => 'https://demosites.io/doctors-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/doctors-brizy/',
						'title'            => 'Doctors',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.png',
					],
					'neve-brizy-architecture'       => [
						'url'              => 'https://demosites.io/architecture-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/architecture-brizy/',
						'title'            => 'Architecture',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
					],
					'neve-brizy-fitness'            => [
						'url'              => 'https://demosites.io/fitness-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/fitness-brizy/',
						'title'            => 'Fitness',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.png',
					],
					'neve-brizy-vacation-rental'    => [
						'url'              => 'https://demosites.io/vacation-rental-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/vacation-rental-brizy/',
						'title'            => 'Vacation Rental',
						'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.png',
					],
					'neve-brizy-music-band'         => [
						'url'              => 'https://demosites.io/music-band-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/music-band-brizy/',
						'title'            => 'Music Band',
						'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.png',
					],
					'neve-brizy-amadeus'            => [
						'url'              => 'https://demosites.io/amadeus-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/amadeus-brizy/',
						'title'            => 'Music Teacher',
						'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.jpg',
					],
					'neve-brizy-oblique'            => [
						'url'              => 'https://demosites.io/oblique-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/oblique-brizy/',
						'title'            => 'Vintage',
						'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.jpg',
					],
					'neve-brizy-rokophoto'          => [
						'url'              => 'https://demosites.io/rokophoto-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/rokophoto-brizy/',
						'title'            => 'Photography',
						'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.jpg',
					],
					'neve-brizy-energy-panels'      => [
						'url'              => 'https://demosites.io/energy-panels-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/energy-panels-brizy/',
						'title'            => 'Energy Panels',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.jpg',
					],
					'neve-brizy-lawyers'            => [
						'url'              => 'https://demosites.io/lawyers-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/lawyers-brizy/',
						'title'            => 'Lawyers',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-lawyers.jpg',
					],
					'neve-brizy-freelancer'         => [
						'url'              => 'https://demosites.io/freelancer-brizy',
						'remote_url'       => 'https://api.themeisle.com/sites/freelancer-brizy/',
						'title'            => 'Freelancer',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.jpg',
					],
					'neve-brizy-shop'               => [
						'url'              => 'https://demosites.io/shop-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/shop-brizy/',
						'title'            => 'Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587704/shop/56488e52ed6e70495219537f7d3846f2',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.png',
					],
					'neve-brizy-tattoo'             => [
						'url'              => 'https://demosites.io/tatoo-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/tatoo-brizy/',
						'title'            => 'Tattoo',
						'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.jpg',
					],
					'neve-brizy-zelle'              => [
						'url'              => 'https://demosites.io/zelle-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/zelle-brizy/',
						'title'            => 'Travel Agency',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-9.jpg',
					],
					'neve-brizy-life-coach'         => [
						'url'              => 'https://demosites.io/scholar-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/scholar-brizy/',
						'title'            => 'Life Coach',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-10.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
					],
					'neve-brizy-creative-portfolio' => [
						'url'              => 'https://demosites.io/creative-portfolio-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/creative-portfolio-brizy/',
						'title'            => 'Creative Portfolio',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-11.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
					],
				],
				'beaver builder' => [
					'neve-beaver-onboarding'         => [
						'url'        => 'https://demosites.io/onboarding-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/onboarding-bb/',
						'title'      => 'Original',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-original.png',
					],
					'neve-beaver-web-agency'         => [
						'url'              => 'https://demosites.io/web-agency-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/web-agency-bb/',
						'title'            => 'Web Agency',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-agency-all-new.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/9015394/neve-digital-agency/c794fcd505d0ac7fe2134479c3b8f670',
					],
					'neve-beaver-blogger'            => [
						'url'        => 'https://demosites.io/blogger-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/blogger-bb/',
						'title'      => 'Blogger',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-blogger.jpg',
					],
					'neve-beaver-restaurant'         => [
						'url'              => 'https://demosites.io/bb-restaurant/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-restaurant/',
						'title'            => 'Restaurant',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.png',
					],
					'neve-beaver-charity'            => [
						'url'              => 'https://demosites.io/charity-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/charity-bb/',
						'title'            => 'Charity',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.png',
					],
					'neve-beaver-vet-center'         => [
						'url'              => 'https://demosites.io/vet-center-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/vet-center-bb/',
						'title'            => 'Vet Center',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.png',
					],
					'neve-beaver-doctors'            => [
						'url'              => 'https://demosites.io/bb-doctors/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-doctors/',
						'title'            => 'Doctors',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.png',
					],
					'neve-beaver-architecture'       => [
						'url'              => 'https://demosites.io/bb-architecture/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-architecture/',
						'title'            => 'Architecture',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.png',
					],
					'neve-beaver-fitness'            => [
						'url'              => 'https://demosites.io/fitness-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/fitness-bb/',
						'title'            => 'Fitness',
						'unsplash_gallery' => 'https://unsplash.com/collections/6800490/fitness-gym',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.png',
					],
					'neve-beaver-vacation-rental'    => [
						'url'              => 'https://demosites.io/bb-vacantion-rental/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-vacantion-rental/',
						'title'            => 'Vacation Rental',
						'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.png',
					],
					'neve-beaver-music-band'         => [
						'url'              => 'https://demosites.io/bb-music-band/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-music-band/',
						'title'            => 'Music Band',
						'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.png',
					],
					'neve-beaver-wedding'            => [
						'url'              => 'https://demosites.io/wedding-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/wedding-bb/',
						'title'            => 'Wedding',
						'unsplash_gallery' => 'https://unsplash.com/collections/8116784/wedding/9afa9f6ba14422f348e1c7a49a9d51e9',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.jpg',
					],
					'neve-beaver-themotion'          => [
						'url'              => 'https://demosites.io/themotion-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/themotion-bb/',
						'title'            => 'Video Blog',
						'unsplash_gallery' => 'https://unsplash.com/collections/8256651/neve-the-motion/79f8c5a63926e7cee4deed75bc6724fc',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.jpg',
					],
					'neve-beaver-amadeus'            => [
						'url'              => 'https://demosites.io/amadeus-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/amadeus-bb/',
						'title'            => 'Music Teacher',
						'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.jpg',
					],
					'neve-beaver-oblique'            => [
						'url'              => 'https://demosites.io/oblique-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/oblique-bb/',
						'title'            => 'Vintage',
						'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.jpg',
					],
					'neve-beaver-rokophoto'          => [
						'url'              => 'https://demosites.io/rokophoto-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/rokophoto-bb/',
						'title'            => 'Photography',
						'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.jpg',
					],
					'neve-beaver-energy-panels'      => [
						'url'              => 'https://demosites.io/energy-panels-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/energy-panels-bb/',
						'title'            => 'Energy Panels',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.jpg',
					],
					'neve-beaver-shop'               => [
						'url'              => 'https://demosites.io/shop-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/shop-bb/',
						'title'            => 'Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587704/shop/56488e52ed6e70495219537f7d3846f2',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.png',
					],
					'neve-beaver-freelancer'         => [
						'url'              => 'https://demosites.io/bb-freelancer/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-freelancer/',
						'title'            => 'Freelancer',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.jpg',
					],
					'neve-beaver-lawyers'            => [
						'url'              => 'https://demosites.io/lawyers-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/lawyers-bb/',
						'title'            => 'Lawyers',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-lawyers.jpg',
					],
					'neve-beaver-tattoo'             => [
						'url'              => 'https://demosites.io/tatoo-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/tatoo-bb/',
						'title'            => 'Tattoo',
						'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.jpg',
					],
					'neve-beaver-zelle'              => [
						'url'              => 'https://demosites.io/zelle-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/zelle-b/',
						'title'            => 'Travel Agency',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-9.jpg',
					],
					'neve-beaver-life-coach'         => [
						'url'              => 'https://demosites.io/scholar-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/scholar-bb/',
						'title'            => 'Life Coach',
						'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-10.jpg',
					],
					'neve-beaver-creative-portfolio' => [
						'url'              => 'https://demosites.io/creative-portfolio-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/creative-portfolio-bb/',
						'title'            => 'Creative Portfolio',
						'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-11.jpg',
					],
				],
			],
			'upsell'      => [
				'divi builder'     => [
					'neve-divi-lawyers'      => [
						'url'        => 'https://demosites.io/lawyers-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-lawyers.jpg',
						'title'      => 'Lawyers',
					],
					'neve-divi-cafe'         => [
						'url'        => 'https://demosites.io/cafe-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
					],
					'neve-divi-fashion'      => [
						'url'        => 'https://demosites.io/fashion-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
					],
					'neve-divi-job-listings' => [
						'url'        => 'https://demosites.io/job-listing-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
					],
					'neve-divi-real-estate'  => [
						'url'        => 'https://demosites.io/real-estate-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
					],
					'neve-divi-events'       => [
						'url'        => 'https://demosites.io/events-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
					],
					'neve-divi-farm'         => [
						'url'        => 'https://demosites.io/farm-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
					],
					'neve-divi-kindergarten' => [
						'url'        => 'https://demosites.io/kindergarten-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
					],
					'neve-divi-speed'        => [
						'url'        => 'https://demosites.io/speed-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'      => 'Speed',
					],
					'neve-divi-funnel'       => [
						'url'        => 'https://demosites.io/sales-funnel-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'      => 'Sales Funnel',
					],
				],
				'thrive architect' => [
					'neve-thrive-cafe'                  => [
						'url'        => 'https://demosites.io/cafe-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
					],
					'neve-thrive-fashion'               => [
						'url'        => 'https://demosites.io/fashion-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
					],
					'neve-thrive-showcase'              => [
						'url'        => 'https://demosites.io/showcase-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
					],
					'neve-thrive-job-listings'          => [
						'url'        => 'https://demosites.io/job-listings-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
					],
					'neve-thrive-real-estate'           => [
						'url'        => 'https://demosites.io/real-estate-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
					],
					'neve-thrive-events'                => [
						'url'        => 'https://demosites.io/events-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
					],
					'neve-thrive-photography-portfolio' => [
						'url'        => 'https://demosites.io/photography-portfolio-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
					],
					'neve-thrive-video-agency'          => [
						'url'        => 'https://demosites.io/video-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
					],
					'neve-thrive-farm'                  => [
						'url'        => 'https://demosites.io/farm-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
					],
					'neve-thrive-speed'                 => [
						'url'        => 'https://demosites.io/speed-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'      => 'Speed',
					],
				],
				'beaver builder'   => [
					'neve-beaver-cafe'                  => [
						'url'        => 'https://demosites.io/cafe-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
					],
					'neve-beaver-constructions'         => [
						'url'        => 'https://demosites.io/constructions-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'      => 'Constructions Company',
					],
					'neve-beaver-fashion'               => [
						'url'        => 'https://demosites.io/bb-fashion/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
					],
					'neve-beaver-showcase'              => [
						'url'        => 'https://demosites.io/showcase-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
					],
					'neve-beaver-consultants'           => [
						'url'        => 'https://demosites.io/consultants-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
					],
					'neve-beaver-job-listings'          => [
						'url'        => 'https://demosites.io/job-listings-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
					],
					'neve-beaver-barber-shop'           => [
						'url'        => 'https://demosites.io/barber-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
					],
					'neve-beaver-personal-trainer'      => [
						'url'        => 'https://demosites.io/personal-trainer-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
					],
					'neve-beaver-real-estate'           => [
						'url'        => 'https://demosites.io/real-estate-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
					],
					'neve-beaver-events'                => [
						'url'        => 'https://demosites.io/events-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
					],
					'neve-beaver-photography-portfolio' => [
						'url'        => 'https://demosites.io/photography-portfolio-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
					],
					'neve-beaver-video-agency'          => [
						'url'        => 'https://demosites.io/video-agency-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
					],
					'neve-beaver-furniture-shop'        => [
						'url'        => 'https://demosites.io/furniture-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
					],
					'neve-beaver-portrait-photography'  => [
						'url'        => 'https://demosites.io/portrait-photopraphy-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
					],
					'neve-beaver-farm'                  => [
						'url'        => 'https://demosites.io/farm-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
					],
					'neve-beaver-photographer'          => [
						'url'        => 'https://demosites.io/photography-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-photographer.jpg',
						'title'      => 'Photographer',
					],
					'neve-beaver-kindergarten'          => [
						'url'        => 'https://demosites.io/kindergarden-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
					],
					'neve-beaver-florist'               => [
						'url'        => 'https://demosites.io/florist-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-florist.jpg',
						'title'      => 'Florist',
					],
					'neve-beaver-cake-shop'             => [
						'url'        => 'https://demosites.io/cake-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cake-shop.jpg',
						'title'      => 'Cake Shop',
					],
					'neve-beaver-transport'             => [
						'url'        => 'https://demosites.io/transport-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-transport.jpg',
						'title'      => 'Transport',
					],
					'neve-beaver-ebook'                 => [
						'url'        => 'https://demosites.io/ebook-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-ebook.jpg',
						'title'      => 'eBook',
					],
					'neve-beaver-speed'                 => [
						'url'        => 'https://demosites.io/speed-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'      => 'Speed',
					],
					'neve-beaver-food-magazine'         => [
						'url'        => 'https://demosites.io/food-magazine-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-food-magazine.jpg',
						'title'      => 'Food Magazine',
					],
					'neve-beaver-web-design'            => [
						'url'        => 'https://demosites.io/web-design-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-design.jpg',
						'title'      => 'eCourse - Web Design',
					],
					'neve-beaver-yoga-studio'           => [
						'url'        => 'https://demosites.io/yoga-studio-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-yoga.jpg',
						'title'      => 'Yoga Studio',
					],
					'neve-beaver-sales-funnel'          => [
						'url'        => 'https://demosites.io/sales-funnel-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'      => 'Sales Funnel',
					],
					'neve-beaver-church'                => [
						'url'        => 'https://demosites.io/church-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-church.jpg',
						'title'      => 'Church',
					],
					'neve-beaver-fashion-magazine'      => [
						'url'        => 'https://demosites.io/fashion-magazine-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
						'title'      => 'Fashion Magazine',
					],
					'neve-beaver-winery'                => [
						'url'        => 'https://demosites.io/winery-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-winery.png',
						'title'      => 'Winery - Wine Shop',
					],
					'neve-beaver-news-magazine'         => [
						'url'        => 'https://demosites.io/news-magazine-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-news.jpg',
						'title'      => 'News Magazine',
					],
					'neve-beaver-coworking'             => [
						'url'        => 'https://demosites.io/coworking-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coworking.jpg',
						'title'      => 'Coworking Space',
					],
					'neve-beaver-car-rental'            => [
						'url'        => 'https://demosites.io/car-rental-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cart-rental.jpg',
						'title'      => 'Car Rental',
					],
					'neve-beaver-moving-company'        => [
						'url'        => 'https://demosites.io/moving-company-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-moving-company.jpg',
						'title'      => 'Moving Company Logistics Services',
					],
					'neve-beaver-translation-services'  => [
						'url'        => 'https://demosites.io/translation-services-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-translations.jpg',
						'title'      => 'Translation and Interpreter Services',
					],
					'neve-beaver-blogger'               => [
						'url'        => 'https://demosites.io/blogger-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-blogger.jpg',
						'title'      => 'Blogger',
					],
					'neve-beaver-coupons'               => [
						'url'        => 'https://demosites.io/coupons-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coupons.jpg',
						'title'      => 'Coupons Discounts and Offers',
					],
					'neve-beaver-escape-room'           => [
						'url'        => 'https://demosites.io/escape-room-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-escape-room.jpg',
						'title'      => 'Escape Room',
					],
					'neve-beaver-cv'                    => [
						'url'        => 'https://demosites.io/cv-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-resume.jpg',
						'title'      => 'Resume',
					],
					'neve-beaver-wellness'              => [
						'url'        => 'https://demosites.io/wellness-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wellness.jpg',
						'title'      => 'Wellness Spa',
					],
					'neve-beaver-courses'               => [
						'url'        => 'https://demosites.io/courses-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-courses.jpg',
						'title'      => 'Online Courses',
					],
					'neve-beaver-model-agency'          => [
						'url'        => 'https://demosites.io/model-agency-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-model-agency.jpg',
						'title'      => 'Fashion Model Agency',
					],
					'neve-beaver-it-company'            => [
						'url'        => 'https://demosites.io/it-company-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-it-solution.jpg',
						'title'      => 'IT Technology Agency',
					],
					'neve-beaver-podcast'               => [
						'url'        => 'https://demosites.io/podcast-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-podcast.jpg',
						'title'      => 'Podcast',
					],
					'neve-beaver-digital-agency'        => [
						'url'        => 'https://demosites.io/digital-agency-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-digital-agency.jpg',
						'title'      => 'Digital Agency',
					],
					'neve-beaver-industrial'            => [
						'url'        => 'https://demosites.io/industrial-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-industrial.jpg',
						'title'      => 'Industrial',
					],
					'neve-beaver-adventure'             => [
						'url'        => 'https://demosites.io/adventure-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-adventure.jpg',
						'title'      => 'Adventure',
					],
					'neve-beaver-product-launch'        => [
						'url'        => 'https://demosites.io/product-launch-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-product-lunch.jpg',
						'title'      => 'Product Launch',
					],
					'neve-beaver-accounting'            => [
						'url'        => 'https://demosites.io/accounting-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-accounting.jpg',
						'title'      => 'Accounting',
					],
					'neve-beaver-beauty-shop'           => [
						'url'        => 'https://demosites.io/beauty-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-beauty-shop.jpg',
						'title'      => 'Beauty Shop',
					],
					'neve-beaver-recruitment'           => [
						'url'        => 'https://demosites.io/recruitment-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-recruitment.jpg',
						'title'      => 'Recruitment Agency',
					],
					'neve-beaver-artist'                => [
						'url'        => 'https://demosites.io/artist-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-artist.jpg',
						'title'      => 'Artist',
					],
					'neve-beaver-vr-studio'             => [
						'url'        => 'https://demosites.io/vr-studio-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vr.jpg',
						'title'      => 'VR Studio',
					],
					'neve-beaver-makeup-artist'         => [
						'url'        => 'https://demosites.io/makeup-artist-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-makeup.jpg',
						'title'      => 'Makeup Artist',
					],
					'neve-beaver-diving'                => [
						'url'        => 'https://demosites.io/diving-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-diving.jpg',
						'title'      => 'Scuba Diving',
					],
					'neve-beaver-wine-bar'              => [
						'url'        => 'https://demosites.io/wine-bar-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/wine-bar.jpg',
						'title'      => 'Wine Bar',
					],
					'neve-beaver-mtb-race'              => [
						'url'        => 'https://demosites.io/mtb-race-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-race.jpg',
						'title'      => 'Mountain Biking Race',
					],
					'neve-beaver-movie'                 => [
						'url'        => 'https://demosites.io/movie-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-movie.jpg',
						'title'      => 'Movie Showcase',
					],
					'neve-beaver-running-club'          => [
						'url'        => 'https://demosites.io/running-club-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-run.jpg',
						'title'      => 'Running Club',
					],
					'neve-beaver-jewellery-shop'        => [
						'url'        => 'https://demosites.io/jewellery-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-jewellery.jpg',
						'title'      => 'Jewellery Shop',
					],
					'neve-beaver-car-service'           => [
						'url'        => 'https://demosites.io/car-service-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-car-service.jpg',
						'title'      => 'Car Vehicle Service',
					],
					'neve-beaver-museum'                => [
						'url'        => 'https://demosites.io/museum-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-museum.jpg',
						'title'      => 'Museum',
					],
					'neve-beaver-exhibition'            => [
						'url'        => 'https://demosites.io/exhibition-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-art-expo.jpg',
						'title'      => 'Art Exhibition',
					],
					'neve-beaver-conference'            => [
						'url'        => 'https://demosites.io/conference-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-conference.jpg',
						'title'      => 'Conference',
					],
					'neve-beaver-insurance'             => [
						'url'        => 'https://demosites.io/insurance-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-insurance.jpg',
						'title'      => 'Insurance',
					],
					'neve-beaver-personal-blog'         => [
						'url'        => 'https://demosites.io/personal-blog-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-blog.jpg',
						'title'      => 'Personal Blog',
					],
				],
				'elementor'        => [
					'neve-cafe'                  => [
						'url'        => 'https://demosites.io/cafe/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
					],
					'neve-constructions'         => [
						'url'        => 'https://demosites.io/constructions/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'      => 'Constructions Company',
					],
					'neve-fashion'               => [
						'url'        => 'https://demosites.io/fashion/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
					],
					'neve-showcase'              => [
						'url'        => 'https://demosites.io/showcase/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
					],
					'neve-consultants'           => [
						'url'        => 'https://demosites.io/consultants/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
					],
					'neve-job-listings'          => [
						'url'        => 'https://demosites.io/job-listings/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
					],
					'neve-barber-shop'           => [
						'url'        => 'https://demosites.io/barber-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
					],
					'neve-personal-traner'       => [
						'url'        => 'https://demosites.io/personal-trainer/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
					],
					'neve-real-estate'           => [
						'url'        => 'https://demosites.io/real-estate/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
					],
					'neve-events'                => [
						'url'        => 'https://demosites.io/events/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
					],
					'neve-portrait-photopraphy'  => [
						'url'        => 'https://demosites.io/portrait-photopraphy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
					],
					'neve-photography-portfolio' => [
						'url'        => 'https://demosites.io/photography-portfolio/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
					],
					'neve-video-agency'          => [
						'url'        => 'https://demosites.io/video-agency/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
					],
					'neve-furniture-shop'        => [
						'url'        => 'https://demosites.io/furniture-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
					],
					'neve-farm'                  => [
						'url'        => 'https://demosites.io/farm/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
					],
					'neve-photographer'          => [
						'url'        => 'https://demosites.io/photography/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-photographer.jpg',
						'title'      => 'Photographer',
					],
					'neve-kindergarten'          => [
						'url'        => 'https://demosites.io/kindergarten/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
					],
					'neve-florist'               => [
						'url'        => 'https://demosites.io/florist/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-florist.jpg',
						'title'      => 'Florist',
					],
					'neve-cake-shop'             => [
						'url'        => 'https://demosites.io/cake-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cake-shop.jpg',
						'title'      => 'Cake Shop',
					],
					'neve-transport'             => [
						'url'        => 'https://demosites.io/transport/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-transport.jpg',
						'title'      => 'Transport',
					],
					'neve-ebook'                 => [
						'url'        => 'https://demosites.io/ebook/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-ebook.jpg',
						'title'      => 'eBook',
					],
					'neve-speed'                 => [
						'url'        => 'https://demosites.io/speed/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'      => 'Speed',
					],
					'neve-food-magazine'         => [
						'url'        => 'https://demosites.io/food-magazine/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-food-magazine.jpg',
						'title'      => 'Food Magazine',
					],
					'neve-web-design'            => [
						'url'        => 'https://demosites.io/web-design/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-design.jpg',
						'title'      => 'eCourse - Web Design',
					],
					'neve-yoga-studio'           => [
						'url'        => 'https://demosites.io/yoga-studio/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-yoga.jpg',
						'title'      => 'Yoga Studio',
					],
					'neve-sales-funnel'          => [
						'url'        => 'https://demosites.io/sales-funnel/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'      => 'Sales Funnel',
					],
					'neve-church'                => [
						'url'        => 'https://demosites.io/church/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-church.jpg',
						'title'      => 'Church',
					],
					'neve-fashion-magazine'      => [
						'url'        => 'https://demosites.io/fashion-magazine/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
						'title'      => 'Fashion Magazine',
					],
					'neve-winery'                => [
						'url'        => 'https://demosites.io/winery/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-winery.png',
						'title'      => 'Winery - Wine Shop',
					],
					'neve-news-magazine'         => [
						'url'        => 'https://demosites.io/news-magazine/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-news.jpg',
						'title'      => 'News Magazine',
					],
					'neve-coworking'             => [
						'url'        => 'https://demosites.io/coworking/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coworking.jpg',
						'title'      => 'Coworking Space',
					],
					'neve-fishing-club'          => [
						'url'        => 'https://demosites.io/fishing-club/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fishing.jpg',
						'title'      => 'Fishing and Hunting Club',
					],
					'neve-car-rental'            => [
						'url'        => 'https://demosites.io/car-rental/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cart-rental.jpg',
						'title'      => 'Car Rental',
					],
					'neve-ski-resort'            => [
						'url'        => 'https://demosites.io/ski-resort/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/sky-resort.jpg',
						'title'      => 'Ski Resort Winter Hotel',
					],
					'neve-digital-product'       => [
						'url'        => 'https://demosites.io/digital-product-funnel/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-digital-product.jpg',
						'title'      => 'Digital Product Funnel',
					],
					'neve-moving-company'        => [
						'url'        => 'https://demosites.io/moving-company/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-moving-company.jpg',
						'title'      => 'Moving Company Logistics Services',
					],
					'neve-translation-services'  => [
						'url'        => 'https://demosites.io/translation-services/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-translations.jpg',
						'title'      => 'Translation and Interpreter Services',
					],
					'neve-blogger'               => [
						'url'        => 'https://demosites.io/blogger/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-blogger.jpg',
						'title'      => 'Blogger',
					],
					'neve-coupons'               => [
						'url'        => 'https://demosites.io/coupons/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coupons.jpg',
						'title'      => 'Coupons Discounts and Offers',
					],
					'neve-escape-room'           => [
						'url'        => 'https://demosites.io/escape-room/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-escape-room.jpg',
						'title'      => 'Escape Room',
					],
					'neve-cv'                    => [
						'url'        => 'https://demosites.io/cv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-resume.jpg',
						'title'      => 'Resume',
					],
					'neve-wellness'              => [
						'url'        => 'https://demosites.io/wellness/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wellness.jpg',
						'title'      => 'Wellness Spa',
					],
					'neve-courses'               => [
						'url'        => 'https://demosites.io/courses/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-courses.jpg',
						'title'      => 'Online Courses',
					],
					'neve-model-agency'          => [
						'url'        => 'https://demosites.io/model-agency/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-model-agency.jpg',
						'title'      => 'Fashion Model Agency',
					],
					'neve-it-company'            => [
						'url'        => 'https://demosites.io/it-company/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-it-solution.jpg',
						'title'      => 'IT Technology Agency',
					],
					'neve-christmas-market'      => [
						'url'        => 'https://demosites.io/christmas-market/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-christmas.jpg',
						'title'      => 'Christmas Market',
					],
					'neve-podcast'               => [
						'url'        => 'https://demosites.io/podcast/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-podcast.jpg',
						'title'      => 'Podcast',
					],
					'neve-digital-agency'        => [
						'url'        => 'https://demosites.io/digital-agency/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-digital-agency.jpg',
						'title'      => 'Digital Agency',
					],
					'neve-industrial'            => [
						'url'        => 'https://demosites.io/industrial/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-industrial.jpg',
						'title'      => 'Industrial',
					],
					'neve-adventure'             => [
						'url'        => 'https://demosites.io/adventure/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-adventure.jpg',
						'title'      => 'Adventure',
					],
					'neve-product-launch'        => [
						'url'        => 'https://demosites.io/product-launch/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-product-lunch.jpg',
						'title'      => 'Product Launch',
					],
					'neve-accounting'            => [
						'url'        => 'https://demosites.io/accounting/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-accounting.jpg',
						'title'      => 'Accounting',
					],
					'neve-beauty-shop'           => [
						'url'        => 'https://demosites.io/beauty-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-beauty-shop.jpg',
						'title'      => 'Beauty Shop',
					],
					'neve-recruitment'           => [
						'url'        => 'https://demosites.io/recruitment/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-recruitment.jpg',
						'title'      => 'Recruitment Agency',
					],
					'neve-artist'                => [
						'url'        => 'https://demosites.io/artist/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-artist.jpg',
						'title'      => 'Artist',
					],
					'neve-vr-studio'             => [
						'url'        => 'https://demosites.io/vr-studio/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vr.jpg',
						'title'      => 'VR Studio',
					],
					'neve-makeup-artist'         => [
						'url'        => 'https://demosites.io/makeup-artist/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-makeup.jpg',
						'title'      => 'Makeup Artist',
					],
					'neve-diving'                => [
						'url'        => 'https://demosites.io/diving/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-diving.jpg',
						'title'      => 'Scuba Diving',
					],
					'neve-wine-bar'              => [
						'url'        => 'https://demosites.io/wine-bar/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/wine-bar.jpg',
						'title'      => 'Wine Bar',
					],
					'neve-mtb-race'              => [
						'url'        => 'https://demosites.io/mtb-race/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-race.jpg',
						'title'      => 'Mountain Biking Race',
					],
					'neve-movie'                 => [
						'url'        => 'https://demosites.io/movie/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-movie.jpg',
						'title'      => 'Movie Showcase',
					],
					'neve-running-club'          => [
						'url'        => 'https://demosites.io/running-club/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-run.jpg',
						'title'      => 'Running Club',
					],
					'neve-jewellery-shop'        => [
						'url'        => 'https://demosites.io/jewellery-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-jewellery.jpg',
						'title'      => 'Jewellery Shop',
					],
					'neve-car-service'           => [
						'url'        => 'https://demosites.io/car-service/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-car-service.jpg',
						'title'      => 'Car Vehicle Service',
					],
					'neve-museum'                => [
						'url'        => 'https://demosites.io/museum/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-museum.jpg',
						'title'      => 'Museum',
					],
					'neve-exhibition'            => [
						'url'        => 'https://demosites.io/exhibition/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-art-expo.jpg',
						'title'      => 'Art Exhibition',
					],
					'neve-conference'            => [
						'url'        => 'https://demosites.io/conference/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-conference.jpg',
						'title'      => 'Conference',
					],
					'neve-university'            => [
						'url'        => 'https://demosites.io/university/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-university.jpg',
						'title'      => 'University',
					],
					'neve-interior-design'       => [
						'url'        => 'https://demosites.io/interior-design/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-interior-design-2.jpg',
						'title'      => 'Interior Design',
					],
					'neve-electronics-store'     => [
						'url'        => 'https://demosites.io/electronics-store/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-electronics.jpg',
						'title'      => 'Electronics Shop',
					],
					'neve-print-shop'            => [
						'url'        => 'https://demosites.io/print-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-print.jpg',
						'title'      => 'Print Shop',
					],
					'neve-city-tour'             => [
						'url'        => 'https://demosites.io/city-tour/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-city-tour.jpg',
						'title'      => 'City Tours',
					],
					'neve-insurance'             => [
						'url'        => 'https://demosites.io/insurance/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-insurance.jpg',
						'title'      => 'Insurance',
					],
					'neve-personal-blog'         => [
						'url'        => 'https://demosites.io/personal-blog/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-blog.jpg',
						'title'      => 'Personal Blog',
					],
					'neve-travel-blog'           => [
						'url'        => 'https://demosites.io/travel-blog/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-travel-blog.jpg',
						'title'      => 'Travel Blog',
					],
					'neve-dj'                    => [
						'url'        => 'https://demosites.io/dj/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-dj.jpg',
						'title'      => 'DJ',
					],
					'neve-tech-lab'              => [
						'url'        => 'https://demosites.io/tech-lab/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-tech.jpg',
						'title'      => 'Tech Lab',
					],
					'neve-equitation'            => [
						'url'        => 'https://demosites.io/equitation/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-horses.jpg',
						'title'      => 'Equitation',
					],
					'neve-restaurant-2'          => [
						'url'        => 'https://demosites.io/restaurant-2/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-restaurant-2.jpg',
						'title'      => 'Restaurant 2',
					],
					'neve-copywriter'            => [
						'url'        => 'https://demosites.io/copywriter/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-copyright.jpg',
						'title'      => 'Copywriter',
					],
				],
				'brizy'            => [
					'neve-brizy-cafe'                 => [
						'url'        => 'https://demosites.io/cafe-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
					],
					'neve-brizy-constructions'        => [
						'url'        => 'https://demosites.io/constructions-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'      => 'Constructions Company',
					],
					'neve-brizy-fashion'              => [
						'url'        => 'https://demosites.io/fashion-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
					],
					'neve-brizy-showcase'             => [
						'url'        => 'https://demosites.io/showcase-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
					],
					'neve-brizy-consultants'          => [
						'url'        => 'https://demosites.io/consultants-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
					],
					'neve-brizy-job-listings'         => [
						'url'        => 'https://demosites.io/job-listings-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
					],
					'neve-brizy-barber-shop'          => [
						'url'        => 'https://demosites.io/barber-shop-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
					],
					'neve-brizy-personal-traner'      => [
						'url'        => 'https://demosites.io/personal-trainer-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
					],
					'neve-brizy-real-estate'          => [
						'url'        => 'https://demosites.io/real-estate-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
					],
					'neve-brizy-events'               => [
						'url'        => 'https://demosites.io/events-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
					],
					'neve-brizy-portrait-photopraphy' => [
						'url'        => 'https://demosites.io/portrait-photography-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
					],
					'neve-brizy-furniture-shop'       => [
						'url'        => 'https://demosites.io/furniture-shop-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
					],
					'neve-brizy-farm'                 => [
						'url'        => 'https://demosites.io/farm-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
					],
				],
			],
			'can_migrate' => [
				'zerif-pro'  => [
					'theme_name'        => 'Zelle Pro',
					'theme_mod_check'   => 'zelle_frontpage_was_imported',
					'template'          => 'zelle',
					'heading'           => __( 'Want to keep using Zelle\'s homepage?', 'neve' ),
					'description'       => __( 'Hi! We\'ve noticed you were using Zelle before. To make your transition easier, we can help you keep the same beautiful homepage you had before, by converting it into an Elementor template. This option will also import your homepage content.', 'neve' ),
					'mandatory_plugins' => [
						'elementor' => 'Elementor Page Builder',
					],
				],
				'zerif-lite' => [
					'theme_name'        => 'Zelle Lite',
					'theme_mod_check'   => 'zelle_frontpage_was_imported',
					'template'          => 'zelle',
					'heading'           => __( 'Want to keep using Zelle\'s homepage?', 'neve' ),
					'description'       => __( 'Hi! We\'ve noticed you were using Zelle before. To make your transition easier, we can help you keep the same beautiful homepage you had before, by converting it into an Elementor template. This option will also import your homepage content.', 'neve' ),
					'mandatory_plugins' => [
						'elementor' => 'Elementor Page Builder',
					],
				],
			],
			'pro_link'    => 'https://themeisle.com/themes/neve/upgrade/',
		];
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
		$this->onboarding_config['remote']['gutenberg'] = [
			'neve-main-gutenberg'               => [
				'url'        => 'https://demosites.io/onboarding-gutenberg',
				'remote_url' => 'https://api.themeisle.com/sites/onboarding-gutenberg/',
				'title'      => 'Original',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-original.png',
			],
			'neve-web-agency-gutenberg'         => [
				'url'        => 'https://demosites.io/web-agency-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/web-agency-gb/',
				'title'      => 'Web Agency',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-agency-all-new.png',
			],
			'neve-blogger-gutenberg'            => [
				'url'        => 'https://demosites.io/blogger-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/blogger-gb/',
				'title'      => 'Blogger',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-blogger.jpg',
			],
			'neve-restaurant-gutenberg'         => [
				'url'              => 'https://demosites.io/restaurant-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/restaurant-gb/',
				'title'            => 'Restaurant',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
			],
			'neve-charity-gutenberg'            => [
				'url'              => 'https://demosites.io/charity-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/charity-gb/',
				'title'            => 'Charity',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
			],
			'neve-vet-center-gutenberg'         => [
				'url'              => 'https://demosites.io/vet-center-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/vet-center-gb/',
				'title'            => 'Vet Center',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
			],
			'neve-doctors-gutenberg'            => [
				'url'              => 'https://demosites.io/doctors-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/doctors-gb/',
				'title'            => 'Doctors',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
			],
			'neve-architecture-gutenberg'       => [
				'url'              => 'https://demosites.io/architecture-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/architecture-gb/',
				'title'            => 'Architecture',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
			],
			'neve-fitness-gutenberg'            => [
				'url'              => 'https://demosites.io/fitness-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/fitness-gb/',
				'title'            => 'Fitness',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/6800490/fitness-gym',
			],
			'neve-vacation-rental-gutenberg'    => [
				'url'              => 'https://demosites.io/vacation-rental-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/vacation-rental-gb/',
				'title'            => 'Vacation Rental',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
			],
			'neve-music-band-gutenberg'         => [
				'url'              => 'https://demosites.io/music-band-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/music-band-gb/',
				'title'            => 'Music Band',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
			],
			'neve-wedding-gutenberg'            => [
				'url'              => 'https://demosites.io/wedding-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/wedding-gb/',
				'title'            => 'Wedding',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8116784/wedding/9afa9f6ba14422f348e1c7a49a9d51e9',
			],
			'neve-themotion-gutenberg'          => [
				'url'              => 'https://demosites.io/themotion-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/themotion-gb/',
				'title'            => 'Video Blog',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8256651/neve-the-motion/79f8c5a63926e7cee4deed75bc6724fc',
			],
			'neve-amadeus-gutenberg'            => [
				'url'              => 'https://demosites.io/amadeus-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/amadeus-gb/',
				'title'            => 'Music Teacher',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
			],
			'neve-oblique-gutenberg'            => [
				'url'              => 'https://demosites.io/oblique-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/oblique-gb/',
				'title'            => 'Vintage',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
			],
			'neve-rokophoto-gutenberg'          => [
				'url'              => 'https://demosites.io/rokophoto-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/rokophoto-gb/',
				'title'            => 'Photography',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
			],
			'neve-energy-panels-gutenberg'      => [
				'url'              => 'https://demosites.io/energy-panels-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/energy-panels-gb/',
				'title'            => 'Energy Panels',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
			],
			'neve-lawyers-gutenberg'            => [
				'url'              => 'https://demosites.io/lawyers-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/lawyers-gb/',
				'title'            => 'Lawyers',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
			],
			'neve-freelancer-gutenberg'         => [
				'url'              => 'https://demosites.io/freelancer-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/freelancer-gb/',
				'title'            => 'Freelancer',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
			],
			'neve-tattoo-gutenberg'             => [
				'url'              => 'https://demosites.io/tatoo-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/tatoo-gb/',
				'title'            => 'Tattoo',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
			],
			'neve-zelle-gutenberg'              => [
				'url'              => 'https://demosites.io/zelle-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/zelle-gb/',
				'title'            => 'Travel Agency',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-9.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
			],
			'neve-life-coach-gutenberg'         => [
				'url'              => 'https://demosites.io/scholar-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/scholar-gb/',
				'title'            => 'Life Coach',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-10.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
			],
			'neve-creative-portfolio-gutenberg' => [
				'url'              => 'https://demosites.io/creative-portofolio-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/creative-portofolio-gb/',
				'title'            => 'Creative Portfolio',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-11.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
			],
		];
		$this->onboarding_config['upsell']['gutenberg'] = [
			'neve-cafe-gutenberg'             => [
				'url'        => 'https://demosites.io/cafe-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
				'title'      => 'Coffee Shop',
			],
			'neve-constructions-gutenberg'    => [
				'url'        => 'https://demosites.io/constructions-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
				'title'      => 'Constructions Company',
			],
			'neve-fashion-gutenberg'          => [
				'url'        => 'https://demosites.io/fashion-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
				'title'      => 'Fashion',
			],
			'neve-consultants-gutenberg'      => [
				'url'        => 'https://demosites.io/consultants-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
				'title'      => 'Business Consulting',
			],
			'neve-job-listings-gutenberg'     => [
				'url'        => 'https://demosites.io/job-listings-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
				'title'      => 'Job Listing',
			],
			'neve-real-estate-gutenberg'      => [
				'url'        => 'https://demosites.io/real-estate-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
				'title'      => 'Real Estate',
			],
			'neve-events-gutenberg'           => [
				'url'        => 'https://demosites.io/events-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
				'title'      => 'Events',
			],
			'neve-fashion-magazine-gutenberg' => [
				'url'        => 'https://demosites.io/fashion-magazine-gb/',
				'title'      => 'Fashion Magazine',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
			],
		];
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
	 * @param array $templates_list the templates list array.
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

		return array_merge( $templates, $templates_list );
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
