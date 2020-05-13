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

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;

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
	 * @param string $url embed url.
	 * @param array  $attr embed attributes [width/height].
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
						'keywords'   => [ 'blog', 'ecommerce', 'responsive', 'one page', 'business', 'free' ],
					],
					'neve-web-agency'         => [
						'url'              => 'https://demosites.io/web-agency/',
						'remote_url'       => 'https://api.themeisle.com/sites/web-agency/',
						'title'            => 'Web Agency',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-agency-all-new.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/9015394/neve-digital-agency/c794fcd505d0ac7fe2134479c3b8f670',
						'keywords'         => [ 'business', 'one page', 'minimal', 'blog', 'free', 'agency' ],
					],
					'neve-blogger'            => [
						'url'              => 'https://demosites.io/blogger/',
						'remote_url'       => 'https://api.themeisle.com/sites/blogger/',
						'title'            => 'Blogger',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-blogger.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8936140/minimal-blog',
						'keywords'         => [ 'minimal', 'one page', 'blog', 'responsive', 'free' ],
					],
					'neve-restaurant'         => [
						'url'              => 'https://demosites.io/restaurant/',
						'remote_url'       => 'https://api.themeisle.com/sites/restaurant/',
						'title'            => 'Restaurant',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
						'keywords'         => [ 'food', 'business', 'responsive', 'free' ],
					],
					'neve-charity'            => [
						'url'              => 'https://demosites.io/charity/',
						'remote_url'       => 'https://api.themeisle.com/sites/charity/',
						'title'            => 'Charity',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
						'keywords'         => [ 'one page', 'minimal', 'business', 'free' ],
					],
					'neve-vet-center'         => [
						'url'              => 'https://demosites.io/vet-center/',
						'remote_url'       => 'https://api.themeisle.com/sites/vet-center/',
						'title'            => 'Vet Center',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
						'keywords'         => [ 'medical', 'minimal', 'responsive', 'free' ],
					],
					'neve-doctors'            => [
						'url'              => 'https://demosites.io/doctors/',
						'remote_url'       => 'https://api.themeisle.com/sites/doctors/',
						'title'            => 'Doctors',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
						'keywords'         => [ 'medical', 'one page', 'minimal', 'responsive', 'free' ],
					],
					'neve-architecture'       => [
						'url'              => 'https://demosites.io/architecture/',
						'remote_url'       => 'https://api.themeisle.com/sites/architecture/',
						'title'            => 'Architecture',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
						'keywords'         => [ 'minimal', 'one page', 'business', 'responsive', 'free' ],
					],
					'neve-fitness'            => [
						'url'              => 'https://demosites.io/fitness/',
						'remote_url'       => 'https://api.themeisle.com/sites/fitness/',
						'title'            => 'Fitness',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/6800490/fitness-gym',
						'keywords'         => [ 'sports', 'one page', 'free' ],
					],
					'neve-vacation-rental'    => [
						'url'              => 'https://demosites.io/vacation-rental/',
						'remote_url'       => 'https://api.themeisle.com/sites/vacation-rental/',
						'title'            => 'Vacation Rental',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
						'keywords'         => [ 'minimal', 'blog', 'free' ],
					],
					'neve-music-band'         => [
						'url'              => 'https://demosites.io/music-band/',
						'remote_url'       => 'https://api.themeisle.com/sites/music-band/',
						'title'            => 'Music Band',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
						'keywords'         => [ 'one page', 'business', 'blog', 'responsive', 'free', 'music' ],
					],
					'neve-wedding'            => [
						'url'              => 'https://demosites.io/wedding/',
						'remote_url'       => 'https://api.themeisle.com/sites/wedding/',
						'title'            => 'Wedding',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8116784/wedding/9afa9f6ba14422f348e1c7a49a9d51e9',
						'keywords'         => [ 'business', 'minimal', 'responsive', 'free', 'wedding' ],
					],
					'neve-themotion'          => [
						'url'              => 'https://demosites.io/themotion/',
						'remote_url'       => 'https://api.themeisle.com/sites/themotion/',
						'title'            => 'Video Blog',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8256651/neve-the-motion/79f8c5a63926e7cee4deed75bc6724fc',
						'keywords'         => [ 'photography', 'blog', 'responsive', 'free' ],
					],
					'neve-amadeus'            => [
						'url'              => 'https://demosites.io/amadeus/',
						'remote_url'       => 'https://api.themeisle.com/sites/amadeus/',
						'title'            => 'Music Teacher',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
						'keywords'         => [ 'education', 'responsive', 'free', 'music' ],
					],
					'neve-oblique'            => [
						'url'              => 'https://demosites.io/oblique/',
						'remote_url'       => 'https://api.themeisle.com/sites/oblique/',
						'title'            => 'Vintage',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
						'keywords'         => [ 'photography', 'minimal', 'blog', 'free' ],
					],
					'neve-rokophoto'          => [
						'url'              => 'https://demosites.io/rokophoto/',
						'remote_url'       => 'https://api.themeisle.com/sites/rokophoto/',
						'title'            => 'Photography',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
						'keywords'         => [ 'photography', 'blog', 'responsive', 'free' ],
					],
					'neve-energy-panels'      => [
						'url'              => 'https://demosites.io/energy-panels/',
						'remote_url'       => 'https://api.themeisle.com/sites/energy-panels/',
						'title'            => 'Energy Panels',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
						'keywords'         => [ 'business', 'minimal', 'free' ],
					],
					'neve-lawyers'            => [
						'url'              => 'https://demosites.io/lawyers/',
						'remote_url'       => 'https://api.themeisle.com/sites/lawyers/',
						'title'            => 'Lawyers',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
						'keywords'         => [ 'business', 'blog', 'free' ],
					],
					'neve-freelancer'         => [
						'url'              => 'https://demosites.io/freelancer/',
						'remote_url'       => 'https://api.themeisle.com/sites/freelancer/',
						'title'            => 'Freelancer',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
						'keywords'         => [ 'education', 'minimal', 'blog', 'free' ],
					],
					'neve-shop'               => [
						'url'              => 'https://demosites.io/shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/shop/',
						'title'            => 'Shop',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587704/shop/56488e52ed6e70495219537f7d3846f2',
						'keywords'         => [ 'fashion', 'business', 'ecommerce', 'free' ],
					],
					'neve-tattoo'             => [
						'url'              => 'https://demosites.io/tatoo/',
						'remote_url'       => 'https://api.themeisle.com/sites/tatoo/',
						'title'            => 'Tattoo',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
						'keywords'         => [ 'one page', 'responsive', 'free' ],
					],
					'neve-zelle'              => [
						'url'              => 'https://demosites.io/zelle/',
						'remote_url'       => 'https://api.themeisle.com/sites/zelle/',
						'title'            => 'Travel Agency',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-9.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
						'keywords'         => [ 'one page', 'business', 'blog', 'free', 'agency' ],
					],
					'neve-life-coach'         => [
						'url'              => 'https://demosites.io/scholar/',
						'remote_url'       => 'https://api.themeisle.com/sites/scholar/',
						'title'            => 'Life Coach',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-10.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
						'keywords'         => [ 'education', 'responsive', 'blog', 'free' ],
					],
					'neve-creative-portfolio' => [
						'url'              => 'https://demosites.io/creative-portfolio/',
						'remote_url'       => 'https://api.themeisle.com/sites/creative-portfolio/',
						'title'            => 'Creative Portfolio',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-11.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
						'keywords'         => [ 'one page', 'minimal', 'business', 'free' ],
					],
					'neve-fitness-trainer'    => [
						'url'              => 'https://demosites.io/fitness-trainer/',
						'remote_url'       => 'https://api.themeisle.com/sites/fitness-trainer/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-trainer.jpg',
						'title'            => 'Fitness Trainer',
						'unsplash_gallery' => 'https://unsplash.com/collections/9852165/fitness-trainer',
						'keywords'         => [ 'sports', 'one page', 'business', 'free' ],
					],
					'neve-band'               => [
						'url'              => 'https://demosites.io/band/',
						'remote_url'       => 'https://api.themeisle.com/sites/band/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-band.jpg',
						'title'            => 'Music Band 2',
						'unsplash_gallery' => 'https://unsplash.com/collections/9846128/music-band',
						'keywords'         => [ 'one page', 'business', 'free', 'music' ],
					],
					'neve-perfume-shop'       => [
						'url'              => 'https://demosites.io/perfume-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/perfume-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-perfume-big.jpg',
						'title'            => 'Perfume Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/9861326/neve-perfume/2b9b54c5c38cad45cc9d516bc35ff444',
						'keywords'         => [ 'fashion', 'business', 'responsive', 'ecommerce', 'free' ],
					],
					'neve-jewellery-2'        => [
						'url'              => 'https://demosites.io/jewellery/',
						'remote_url'       => 'https://api.themeisle.com/sites/jewellery/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-jewellery-2.jpg',
						'title'            => 'Jewellery Shop 2',
						'unsplash_gallery' => 'https://unsplash.com/collections/9394656/neve-jewellery-shop/666f976701a01f90039e2d0ca45f4bbd',
						'keywords'         => [ 'fashion', 'minimal', 'business', 'ecommerce', 'free' ],
					],
					'neve-boat-rental'        => [
						'url'              => 'https://demosites.io/boat-rental/',
						'remote_url'       => 'https://api.themeisle.com/sites/boat-rental/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-boat.jpg',
						'title'            => 'Boat Rental',
						'unsplash_gallery' => 'https://unsplash.com/collections/9844589/neve-boat-rental/173e04907bafee611ff844133b45da60',
						'keywords'         => [ 'travel', 'sports', 'business', 'ecommerce', 'free' ],
					],
					'neve-apparel'            => [
						'url'              => 'https://demosites.io/apparel/',
						'remote_url'       => 'https://api.themeisle.com/sites/apparel/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-apparel.jpg',
						'title'            => 'Apparel',
						'unsplash_gallery' => 'https://unsplash.com/collections/9816182/neve-apparel/fb6435873d539d4c76084e01b8621d74',
						'keywords'         => [ 'fashion', 'business', 'ecommerce', 'free' ],
					],
					'neve-pet-shop'           => [
						'url'              => 'https://demosites.io/pet-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/pet-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-pet.jpg',
						'title'            => 'Pet Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/9809183/pet-shop',
						'keywords'         => [ 'medical', 'minimal', 'ecommerce', 'blog', 'free' ],
					],
					'neve-doctor'             => [
						'url'              => 'https://demosites.io/doctor/',
						'remote_url'       => 'https://api.themeisle.com/sites/doctor/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-doctors-2.jpg',
						'title'            => 'Doctors 2',
						'unsplash_gallery' => 'https://unsplash.com/collections/9809310/medical',
						'keywords'         => [ 'medical', 'one page', 'responsive', 'free' ],
					],
					'neve-psychologist'       => [
						'url'              => 'https://demosites.io/psychologist/',
						'remote_url'       => 'https://api.themeisle.com/sites/psychologist/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-psychologist.jpg',
						'title'            => 'Psychologist',
						'unsplash_gallery' => 'https://unsplash.com/collections/9852234/neve-psychology/8784d7afa417b664cb07c9220343a6e0',
						'keywords'         => [ 'medical', 'business', 'blog', 'free' ],
					],
					'neve-book-shop'          => [
						'url'              => 'https://demosites.io/book-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/book-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-book.jpg',
						'title'            => 'Book Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/9794162/neve-book-shop/4d24e3716ee5e23fa5b8ca96c485f8fe',
						'keywords'         => [ 'entertainment', 'education', 'ecommerce', 'blog', 'free' ],
					],
				],
				'brizy'          => [
					'neve-brizy-main'               => [
						'url'        => 'https://demosites.io/onboarding-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/onboarding-brizy/',
						'title'      => 'Original',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-original.png',
						'keywords'   => [ 'business', 'blog', 'ecommerce', 'free' ],
					],
					'neve-brizy-restaurant'         => [
						'url'              => 'https://demosites.io/restaurant-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/restaurant-brizy/',
						'title'            => 'Restaurant',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.png',
						'keywords'         => [ 'food', 'business', 'responsive', 'free' ],
					],
					'neve-brizy-charity'            => [
						'url'              => 'https://demosites.io/charity-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/charity-brizy/',
						'title'            => 'Charity',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.png',
						'keywords'         => [ 'one page', 'minimal', 'free' ],
					],
					'neve-brizy-vet-center'         => [
						'url'              => 'https://demosites.io/vet-center-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/vet-center-brizy/',
						'title'            => 'Vet Center',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.png',
						'keywords'         => [ 'medical', 'minimal', 'responsive', 'free' ],
					],
					'neve-brizy-doctors'            => [
						'url'              => 'https://demosites.io/doctors-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/doctors-brizy/',
						'title'            => 'Doctors',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.png',
						'keywords'         => [ 'medical', 'one page', 'minimal', 'responsive', 'free' ],
					],
					'neve-brizy-architecture'       => [
						'url'              => 'https://demosites.io/architecture-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/architecture-brizy/',
						'title'            => 'Architecture',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'keywords'         => [ 'minimal', 'business', 'responsive', 'free' ],
					],
					'neve-brizy-fitness'            => [
						'url'              => 'https://demosites.io/fitness-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/fitness-brizy/',
						'title'            => 'Fitness',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.png',
						'keywords'         => [ 'sports', 'one page', 'free' ],
					],
					'neve-brizy-vacation-rental'    => [
						'url'              => 'https://demosites.io/vacation-rental-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/vacation-rental-brizy/',
						'title'            => 'Vacation Rental',
						'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.png',
						'keywords'         => [ 'minimal', 'blog', 'free' ],
					],
					'neve-brizy-music-band'         => [
						'url'              => 'https://demosites.io/music-band-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/music-band-brizy/',
						'title'            => 'Music Band',
						'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.png',
						'keywords'         => [ 'entertainment', 'one page', 'business', 'responsive', 'blog', 'free', 'music' ],
					],
					'neve-brizy-amadeus'            => [
						'url'              => 'https://demosites.io/amadeus-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/amadeus-brizy/',
						'title'            => 'Music Teacher',
						'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.jpg',
						'keywords'         => [ 'education', 'responsive', 'free', 'music' ],
					],
					'neve-brizy-oblique'            => [
						'url'              => 'https://demosites.io/oblique-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/oblique-brizy/',
						'title'            => 'Vintage',
						'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.jpg',
						'keywords'         => [ 'photography', 'minimal', 'blog', 'free' ],
					],
					'neve-brizy-rokophoto'          => [
						'url'              => 'https://demosites.io/rokophoto-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/rokophoto-brizy/',
						'title'            => 'Photography',
						'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.jpg',
						'keywords'         => [ 'photography', 'business', 'responsive', 'free' ],
					],
					'neve-brizy-energy-panels'      => [
						'url'              => 'https://demosites.io/energy-panels-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/energy-panels-brizy/',
						'title'            => 'Energy Panels',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.jpg',
						'keywords'         => [ 'business', 'business', 'minimal', 'free' ],
					],
					'neve-brizy-lawyers'            => [
						'url'              => 'https://demosites.io/lawyers-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/lawyers-brizy/',
						'title'            => 'Lawyers',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-lawyers.jpg',
						'keywords'         => [ 'business', 'blog', 'responsive', 'free' ],
					],
					'neve-brizy-freelancer'         => [
						'url'              => 'https://demosites.io/freelancer-brizy',
						'remote_url'       => 'https://api.themeisle.com/sites/freelancer-brizy/',
						'title'            => 'Freelancer',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.jpg',
						'keywords'         => [ 'education', 'education', 'minimal', 'blog', 'free' ],
					],
					'neve-brizy-shop'               => [
						'url'              => 'https://demosites.io/shop-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/shop-brizy/',
						'title'            => 'Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587704/shop/56488e52ed6e70495219537f7d3846f2',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.png',
						'keywords'         => [ 'fashion', 'business', 'ecommerce', 'free' ],
					],
					'neve-brizy-tattoo'             => [
						'url'              => 'https://demosites.io/tatoo-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/tatoo-brizy/',
						'title'            => 'Tattoo',
						'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.jpg',
						'keywords'         => [ 'one page', 'responsive', 'free' ],
					],
					'neve-brizy-zelle'              => [
						'url'              => 'https://demosites.io/zelle-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/zelle-brizy/',
						'title'            => 'Travel Agency',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-9.jpg',
						'keywords'         => [ 'one page', 'ecommerce', 'blog', 'free', 'agency' ],
					],
					'neve-brizy-life-coach'         => [
						'url'              => 'https://demosites.io/scholar-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/scholar-brizy/',
						'title'            => 'Life Coach',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-10.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
						'keywords'         => [ 'education', 'responsive', 'blog', 'free' ],
					],
					'neve-brizy-creative-portfolio' => [
						'url'              => 'https://demosites.io/creative-portfolio-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/creative-portfolio-brizy/',
						'title'            => 'Creative Portfolio',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-11.jpg',
						'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
						'keywords'         => [ 'one page', 'minimal', 'business', 'free' ],
					],
				],
				'beaver builder' => [
					'neve-beaver-onboarding'         => [
						'url'        => 'https://demosites.io/onboarding-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/onboarding-bb/',
						'title'      => 'Original',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-original.png',
						'keywords'   => [ 'business', 'blog', 'one page', 'free' ],
					],
					'neve-beaver-web-agency'         => [
						'url'              => 'https://demosites.io/web-agency-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/web-agency-bb/',
						'title'            => 'Web Agency',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-agency-all-new.png',
						'unsplash_gallery' => 'https://unsplash.com/collections/9015394/neve-digital-agency/c794fcd505d0ac7fe2134479c3b8f670',
						'keywords'         => [ 'business', 'blog', 'responsive', 'free', 'agency' ],
					],
					'neve-beaver-blogger'            => [
						'url'        => 'https://demosites.io/blogger-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/blogger-bb/',
						'title'      => 'Blogger',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-blogger.jpg',
						'keywords'   => [ 'minimal', 'blog', 'responsive', 'free' ],
					],
					'neve-beaver-restaurant'         => [
						'url'              => 'https://demosites.io/bb-restaurant/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-restaurant/',
						'title'            => 'Restaurant',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.png',
						'keywords'         => [ 'food', 'business', 'responsive', 'free' ],
					],
					'neve-beaver-charity'            => [
						'url'              => 'https://demosites.io/charity-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/charity-bb/',
						'title'            => 'Charity',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.png',
						'keywords'         => [ 'one page', 'minimal', 'free' ],
					],
					'neve-beaver-vet-center'         => [
						'url'              => 'https://demosites.io/vet-center-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/vet-center-bb/',
						'title'            => 'Vet Center',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.png',
						'keywords'         => [ 'medical', 'minimal', 'responsive', 'free' ],
					],
					'neve-beaver-doctors'            => [
						'url'              => 'https://demosites.io/bb-doctors/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-doctors/',
						'title'            => 'Doctors',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.png',
						'keywords'         => [ 'medical', 'one page', 'minimal', 'responsive', 'free' ],
					],
					'neve-beaver-architecture'       => [
						'url'              => 'https://demosites.io/bb-architecture/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-architecture/',
						'title'            => 'Architecture',
						'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.png',
						'keywords'         => [ 'minimal', 'business', 'responsive', 'free' ],
					],
					'neve-beaver-fitness'            => [
						'url'              => 'https://demosites.io/fitness-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/fitness-bb/',
						'title'            => 'Fitness',
						'unsplash_gallery' => 'https://unsplash.com/collections/6800490/fitness-gym',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.png',
						'keywords'         => [ 'sports', 'one page', 'free' ],
					],
					'neve-beaver-vacation-rental'    => [
						'url'              => 'https://demosites.io/bb-vacantion-rental/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-vacantion-rental/',
						'title'            => 'Vacation Rental',
						'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.png',
						'keywords'         => [ 'minimal', 'blog', 'free' ],
					],
					'neve-beaver-music-band'         => [
						'url'              => 'https://demosites.io/bb-music-band/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-music-band/',
						'title'            => 'Music Band',
						'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.png',
						'keywords'         => [ 'entertainment', 'one page', 'business', 'responsive', 'blog', 'free', 'music' ],
					],
					'neve-beaver-wedding'            => [
						'url'              => 'https://demosites.io/wedding-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/wedding-bb/',
						'title'            => 'Wedding',
						'unsplash_gallery' => 'https://unsplash.com/collections/8116784/wedding/9afa9f6ba14422f348e1c7a49a9d51e9',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.jpg',
						'keywords'         => [ 'business', 'blog', 'responsive', 'free', 'wedding' ],
					],
					'neve-beaver-themotion'          => [
						'url'              => 'https://demosites.io/themotion-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/themotion-bb/',
						'title'            => 'Video Blog',
						'unsplash_gallery' => 'https://unsplash.com/collections/8256651/neve-the-motion/79f8c5a63926e7cee4deed75bc6724fc',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.jpg',
						'keywords'         => [ 'photography', 'blog', 'responsive', 'free' ],
					],
					'neve-beaver-amadeus'            => [
						'url'              => 'https://demosites.io/amadeus-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/amadeus-bb/',
						'title'            => 'Music Teacher',
						'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.jpg',
						'keywords'         => [ 'education', 'responsive', 'free', 'music' ],
					],
					'neve-beaver-oblique'            => [
						'url'              => 'https://demosites.io/oblique-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/oblique-bb/',
						'title'            => 'Vintage',
						'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.jpg',
						'keywords'         => [ 'photography', 'minimal', 'blog', 'free' ],
					],
					'neve-beaver-rokophoto'          => [
						'url'              => 'https://demosites.io/rokophoto-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/rokophoto-bb/',
						'title'            => 'Photography',
						'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.jpg',
						'keywords'         => [ 'photography', 'responsive', 'free' ],
					],
					'neve-beaver-energy-panels'      => [
						'url'              => 'https://demosites.io/energy-panels-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/energy-panels-bb/',
						'title'            => 'Energy Panels',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.jpg',
						'keywords'         => [ 'business', 'blog', 'responsive', 'free' ],
					],
					'neve-beaver-shop'               => [
						'url'              => 'https://demosites.io/shop-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/shop-bb/',
						'title'            => 'Shop',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587704/shop/56488e52ed6e70495219537f7d3846f2',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.png',
						'keywords'         => [ 'fashion', 'business', 'ecommerce', 'free' ],
					],
					'neve-beaver-freelancer'         => [
						'url'              => 'https://demosites.io/bb-freelancer/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-freelancer/',
						'title'            => 'Freelancer',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.jpg',
						'keywords'         => [ 'education', 'minimal', 'blog', 'free' ],
					],
					'neve-beaver-lawyers'            => [
						'url'              => 'https://demosites.io/lawyers-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/lawyers-bb/',
						'title'            => 'Lawyers',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-lawyers.jpg',
						'keywords'         => [ 'business', 'blog', 'responsive', 'free' ],
					],
					'neve-beaver-tattoo'             => [
						'url'              => 'https://demosites.io/tatoo-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/tatoo-bb/',
						'title'            => 'Tattoo',
						'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.jpg',
						'keywords'         => [ 'one page', 'responsive', 'free' ],
					],
					'neve-beaver-zelle'              => [
						'url'              => 'https://demosites.io/zelle-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/zelle-b/',
						'title'            => 'Travel Agency',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-9.jpg',
						'keywords'         => [ 'one page', 'business', 'blog', 'free', 'agency' ],
					],
					'neve-beaver-life-coach'         => [
						'url'              => 'https://demosites.io/scholar-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/scholar-bb/',
						'title'            => 'Life Coach',
						'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-10.jpg',
						'keywords'         => [ 'education', 'responsive', 'blog', 'free' ],
					],
					'neve-beaver-creative-portfolio' => [
						'url'              => 'https://demosites.io/creative-portfolio-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/creative-portfolio-bb/',
						'title'            => 'Creative Portfolio',
						'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-11.jpg',
						'keywords'         => [ 'one page', 'minimal', 'business', 'free' ],
					],
				],
			],
			'upsell'      => [
				'divi builder'     => [
					'neve-divi-lawyers'      => [
						'url'        => 'https://demosites.io/lawyers-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-lawyers.jpg',
						'title'      => 'Lawyers',
						'keywords'   => [ 'business', 'minimal' ],
					],
					'neve-divi-cafe'         => [
						'url'        => 'https://demosites.io/cafe-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
						'keywords'   => [ 'one page', 'food' ],
					],
					'neve-divi-fashion'      => [
						'url'        => 'https://demosites.io/fashion-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
						'keywords'   => [ 'fashion', 'responsive' ],
					],
					'neve-divi-job-listings' => [
						'url'        => 'https://demosites.io/job-listing-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
						'keywords'   => [ 'responsive', 'minimal' ],
					],
					'neve-divi-real-estate'  => [
						'url'        => 'https://demosites.io/real-estate-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
						'keywords'   => [ 'one page', 'business', 'responsive' ],
					],
					'neve-divi-events'       => [
						'url'        => 'https://demosites.io/events-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
						'keywords'   => [ 'entertainment', 'one page', 'event' ],
					],
					'neve-divi-farm'         => [
						'url'        => 'https://demosites.io/farm-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
						'keywords'   => [ 'food', 'responsive' ],
					],
					'neve-divi-kindergarten' => [
						'url'        => 'https://demosites.io/kindergarten-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
						'keywords'   => [ 'education', 'responsive' ],
					],
					'neve-divi-speed'        => [
						'url'        => 'https://demosites.io/speed-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'      => 'Speed',
						'keywords'   => [ 'ecommerce', 'business', 'one page', 'responsive', 'blog' ],
					],
					'neve-divi-funnel'       => [
						'url'        => 'https://demosites.io/sales-funnel-dv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'      => 'Sales Funnel',
						'keywords'   => [ 'ecommerce', 'business', 'responsive' ],
					],
				],
				'thrive architect' => [
					'neve-thrive-cafe'                  => [
						'url'        => 'https://demosites.io/cafe-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
						'keywords'   => [ 'food', 'one page' ],
					],
					'neve-thrive-fashion'               => [
						'url'        => 'https://demosites.io/fashion-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
						'keywords'   => [ 'fashion', 'minimal' ],
					],
					'neve-thrive-showcase'              => [
						'url'        => 'https://demosites.io/showcase-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
						'keywords'   => [ 'entertainment', 'responsive' ],
					],
					'neve-thrive-job-listings'          => [
						'url'        => 'https://demosites.io/job-listings-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
						'keywords'   => [ 'responsive', 'minimal' ],
					],
					'neve-thrive-real-estate'           => [
						'url'        => 'https://demosites.io/real-estate-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
						'keywords'   => [ 'one page', 'business', 'responsive' ],
					],
					'neve-thrive-events'                => [
						'url'        => 'https://demosites.io/events-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
						'keywords'   => [ 'entertainment', 'one page', 'event' ],
					],
					'neve-thrive-photography-portfolio' => [
						'url'        => 'https://demosites.io/photography-portfolio-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
						'keywords'   => [ 'photography', 'blog', 'minimal' ],
					],
					'neve-thrive-video-agency'          => [
						'url'        => 'https://demosites.io/video-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
						'keywords'   => [ 'photography', 'responsive', 'agency' ],
					],
					'neve-thrive-farm'                  => [
						'url'        => 'https://demosites.io/farm-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
						'keywords'   => [ 'food', 'responsive' ],
					],
					'neve-thrive-speed'                 => [
						'url'        => 'https://demosites.io/speed-th/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'      => 'Speed',
						'keywords'   => [ 'ecommerce', 'business', 'one page', 'responsive', 'blog' ],
					],
				],
				'beaver builder'   => [
					'neve-beaver-cafe'                  => [
						'url'        => 'https://demosites.io/cafe-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
						'keywords'   => [ 'one page', 'food' ],
					],
					'neve-beaver-constructions'         => [
						'url'        => 'https://demosites.io/constructions-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'      => 'Constructions Company',
						'keywords'   => [ 'one page', 'responsive' ],
					],
					'neve-beaver-fashion'               => [
						'url'        => 'https://demosites.io/bb-fashion/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
						'keywords'   => [ 'fashion', 'responsive' ],
					],
					'neve-beaver-showcase'              => [
						'url'        => 'https://demosites.io/showcase-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
						'keywords'   => [ 'entertainment', 'responsive' ],
					],
					'neve-beaver-consultants'           => [
						'url'        => 'https://demosites.io/consultants-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
						'keywords'   => [ 'business', 'one page' ],
					],
					'neve-beaver-job-listings'          => [
						'url'        => 'https://demosites.io/job-listings-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
						'keywords'   => [ 'responsive', 'minimal' ],
					],
					'neve-beaver-barber-shop'           => [
						'url'        => 'https://demosites.io/barber-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
						'keywords'   => [ 'ecommerce', 'responsive' ],
					],
					'neve-beaver-personal-trainer'      => [
						'url'        => 'https://demosites.io/personal-trainer-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
						'keywords'   => [ 'sports', 'one page' ],
					],
					'neve-beaver-real-estate'           => [
						'url'        => 'https://demosites.io/real-estate-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
						'keywords'   => [ 'one page', 'business', 'responsive' ],
					],
					'neve-beaver-events'                => [
						'url'        => 'https://demosites.io/events-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
						'keywords'   => [ 'entertainment', 'one page', 'event' ],
					],
					'neve-beaver-photography-portfolio' => [
						'url'        => 'https://demosites.io/photography-portfolio-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
						'keywords'   => [ 'photography', 'blog', 'minimal' ],
					],
					'neve-beaver-video-agency'          => [
						'url'        => 'https://demosites.io/video-agency-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
						'keywords'   => [ 'photography', 'responsive', 'agency' ],
					],
					'neve-beaver-furniture-shop'        => [
						'url'        => 'https://demosites.io/furniture-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
						'keywords'   => [ 'ecommerce', 'responsive' ],
					],
					'neve-beaver-portrait-photography'  => [
						'url'        => 'https://demosites.io/portrait-photopraphy-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
						'keywords'   => [ 'photography', 'wedding', 'minimal' ],
					],
					'neve-beaver-farm'                  => [
						'url'        => 'https://demosites.io/farm-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
						'keywords'   => [ 'food', 'responsive' ],
					],
					'neve-beaver-photographer'          => [
						'url'        => 'https://demosites.io/photography-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-photographer.jpg',
						'title'      => 'Photographer',
						'keywords'   => [ 'photography', 'responsive' ],
					],
					'neve-beaver-kindergarten'          => [
						'url'        => 'https://demosites.io/kindergarden-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
						'keywords'   => [ 'education', 'responsive' ],
					],
					'neve-beaver-florist'               => [
						'url'        => 'https://demosites.io/florist-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-florist.jpg',
						'title'      => 'Florist',
						'keywords'   => [ 'ecommerce', 'flowers', 'blog' ],
					],
					'neve-beaver-cake-shop'             => [
						'url'        => 'https://demosites.io/cake-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cake-shop.jpg',
						'title'      => 'Cake Shop',
						'keywords'   => [ 'ecommerce', 'food' ],
					],
					'neve-beaver-transport'             => [
						'url'        => 'https://demosites.io/transport-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-transport.jpg',
						'title'      => 'Transport',
						'keywords'   => [ 'travel', 'blog', 'minimal' ],
					],
					'neve-beaver-ebook'                 => [
						'url'        => 'https://demosites.io/ebook-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-ebook.jpg',
						'title'      => 'eBook',
						'keywords'   => [ 'education', 'blog', 'minimal' ],
					],
					'neve-beaver-speed'                 => [
						'url'        => 'https://demosites.io/speed-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'      => 'Speed',
						'keywords'   => [ 'ecommerce', 'business', 'one page', 'responsive', 'blog' ],
					],
					'neve-beaver-food-magazine'         => [
						'url'        => 'https://demosites.io/food-magazine-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-food-magazine.jpg',
						'title'      => 'Food Magazine',
						'keywords'   => [ 'food', 'blog' ],
					],
					'neve-beaver-web-design'            => [
						'url'        => 'https://demosites.io/web-design-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-design.jpg',
						'title'      => 'eCourse - Web Design',
						'keywords'   => [ 'business', 'blog' ],
					],
					'neve-beaver-yoga-studio'           => [
						'url'        => 'https://demosites.io/yoga-studio-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-yoga.jpg',
						'title'      => 'Yoga Studio',
						'keywords'   => [ 'wellness', 'responsive', 'minimal' ],
					],
					'neve-beaver-sales-funnel'          => [
						'url'        => 'https://demosites.io/sales-funnel-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'      => 'Sales Funnel',
						'keywords'   => [ 'ecommerce', 'business' ],
					],
					'neve-beaver-church'                => [
						'url'        => 'https://demosites.io/church-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-church.jpg',
						'title'      => 'Church',
						'keywords'   => [ 'church', 'minimal', 'one page' ],
					],
					'neve-beaver-fashion-magazine'      => [
						'url'        => 'https://demosites.io/fashion-magazine-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
						'title'      => 'Fashion Magazine',
						'keywords'   => [ 'fashion', 'responsive', 'blog' ],
					],
					'neve-beaver-winery'                => [
						'url'        => 'https://demosites.io/winery-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-winery.png',
						'title'      => 'Winery - Wine Shop',
						'keywords'   => [ 'food', 'ecommerce' ],
					],
					'neve-beaver-news-magazine'         => [
						'url'        => 'https://demosites.io/news-magazine-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-news.jpg',
						'title'      => 'News Magazine',
						'keywords'   => [ 'blog', 'minimal', 'news' ],
					],
					'neve-beaver-coworking'             => [
						'url'        => 'https://demosites.io/coworking-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coworking.jpg',
						'title'      => 'Coworking Space',
						'keywords'   => [ 'blog', 'minimal' ],
					],
					'neve-beaver-car-rental'            => [
						'url'        => 'https://demosites.io/car-rental-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cart-rental.jpg',
						'title'      => 'Car Rental',
						'keywords'   => [ 'car', 'one page', 'minimal' ],
					],
					'neve-beaver-moving-company'        => [
						'url'        => 'https://demosites.io/moving-company-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-moving-company.jpg',
						'title'      => 'Moving Company Logistics Services',
						'keywords'   => [ 'logistics', 'one page', 'responsive' ],
					],
					'neve-beaver-translation-services'  => [
						'url'        => 'https://demosites.io/translation-services-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-translations.jpg',
						'title'      => 'Translation and Interpreter Services',
						'keywords'   => [ 'responsive', 'blog' ],
					],
					'neve-beaver-blogger'               => [
						'url'        => 'https://demosites.io/blogger-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-blogger.jpg',
						'title'      => 'Blogger',
						'keywords'   => [ 'minimal', 'blog', 'responsive' ],
					],
					'neve-beaver-coupons'               => [
						'url'        => 'https://demosites.io/coupons-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coupons.jpg',
						'title'      => 'Coupons Discounts and Offers',
						'keywords'   => [ 'discount', 'coupons', 'blog', 'responsive' ],
					],
					'neve-beaver-escape-room'           => [
						'url'        => 'https://demosites.io/escape-room-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-escape-room.jpg',
						'title'      => 'Escape Room',
						'keywords'   => [ 'entertainment', 'responsive' ],
					],
					'neve-beaver-cv'                    => [
						'url'        => 'https://demosites.io/cv-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-resume.jpg',
						'title'      => 'Resume',
						'keywords'   => [ 'blog', 'one page', 'minimal' ],
					],
					'neve-beaver-wellness'              => [
						'url'        => 'https://demosites.io/wellness-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wellness.jpg',
						'title'      => 'Wellness Spa',
						'keywords'   => [ 'wellness', 'responsive', 'minimal' ],
					],
					'neve-beaver-courses'               => [
						'url'        => 'https://demosites.io/courses-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-courses.jpg',
						'title'      => 'Online Courses',
						'keywords'   => [ 'education', 'blog', 'minimal' ],
					],
					'neve-beaver-model-agency'          => [
						'url'        => 'https://demosites.io/model-agency-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-model-agency.jpg',
						'title'      => 'Fashion Model Agency',
						'keywords'   => [ 'fashion', 'agency', 'blog' ],
					],
					'neve-beaver-it-company'            => [
						'url'        => 'https://demosites.io/it-company-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-it-solution.jpg',
						'title'      => 'IT Technology Agency',
						'keywords'   => [ 'one page', 'responsive', 'agency' ],
					],
					'neve-beaver-podcast'               => [
						'url'        => 'https://demosites.io/podcast-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-podcast.jpg',
						'title'      => 'Podcast',
						'keywords'   => [ 'blog', 'entertainment', 'education' ],
					],
					'neve-beaver-digital-agency'        => [
						'url'        => 'https://demosites.io/digital-agency-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-digital-agency.jpg',
						'title'      => 'Digital Agency',
						'keywords'   => [ 'blog', 'business', 'agency' ],
					],
					'neve-beaver-industrial'            => [
						'url'        => 'https://demosites.io/industrial-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-industrial.jpg',
						'title'      => 'Industrial',
						'keywords'   => [ 'minimal', 'responsive' ],
					],
					'neve-beaver-adventure'             => [
						'url'        => 'https://demosites.io/adventure-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-adventure.jpg',
						'title'      => 'Adventure',
						'keywords'   => [ 'sports', 'one page', 'responsive' ],
					],
					'neve-beaver-product-launch'        => [
						'url'        => 'https://demosites.io/product-launch-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-product-lunch.jpg',
						'title'      => 'Product Launch',
						'keywords'   => [ 'business', 'minimal' ],
					],
					'neve-beaver-accounting'            => [
						'url'        => 'https://demosites.io/accounting-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-accounting.jpg',
						'title'      => 'Accounting',
						'keywords'   => [ 'one page', 'responsive' ],
					],
					'neve-beaver-beauty-shop'           => [
						'url'        => 'https://demosites.io/beauty-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-beauty-shop.jpg',
						'title'      => 'Beauty Shop',
						'keywords'   => [ 'ecommerce', 'fashion' ],
					],
					'neve-beaver-recruitment'           => [
						'url'        => 'https://demosites.io/recruitment-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-recruitment.jpg',
						'title'      => 'Recruitment Agency',
						'keywords'   => [ 'minimal', 'agency', 'responsive' ],
					],
					'neve-beaver-artist'                => [
						'url'        => 'https://demosites.io/artist-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-artist.jpg',
						'title'      => 'Artist',
						'keywords'   => [ 'entertainment', 'blog', 'responsive' ],
					],
					'neve-beaver-vr-studio'             => [
						'url'        => 'https://demosites.io/vr-studio-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vr.jpg',
						'title'      => 'VR Studio',
						'keywords'   => [ 'entertainment', 'one page' ],
					],
					'neve-beaver-makeup-artist'         => [
						'url'        => 'https://demosites.io/makeup-artist-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-makeup.jpg',
						'title'      => 'Makeup Artist',
						'keywords'   => [ 'fashion', 'minimal' ],
					],
					'neve-beaver-diving'                => [
						'url'        => 'https://demosites.io/diving-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-diving.jpg',
						'title'      => 'Scuba Diving',
						'keywords'   => [ 'sports', 'responsive' ],
					],
					'neve-beaver-wine-bar'              => [
						'url'        => 'https://demosites.io/wine-bar-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/wine-bar.jpg',
						'title'      => 'Wine Bar',
						'keywords'   => [ 'food', 'responsive' ],
					],
					'neve-beaver-mtb-race'              => [
						'url'        => 'https://demosites.io/mtb-race-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-race.jpg',
						'title'      => 'Mountain Biking Race',
						'keywords'   => [ 'sports', 'responsive' ],
					],
					'neve-beaver-movie'                 => [
						'url'        => 'https://demosites.io/movie-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-movie.jpg',
						'title'      => 'Movie Showcase',
						'keywords'   => [ 'entertainment', 'education', 'minimal' ],
					],
					'neve-beaver-running-club'          => [
						'url'        => 'https://demosites.io/running-club-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-run.jpg',
						'title'      => 'Running Club',
						'keywords'   => [ 'sports', 'one page' ],
					],
					'neve-beaver-jewellery-shop'        => [
						'url'        => 'https://demosites.io/jewellery-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-jewellery.jpg',
						'title'      => 'Jewellery Shop',
						'keywords'   => [ 'ecommerce', 'minimal' ],
					],
					'neve-beaver-car-service'           => [
						'url'        => 'https://demosites.io/car-service-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-car-service.jpg',
						'title'      => 'Car Vehicle Service',
						'keywords'   => [ 'minimal', 'one page' ],
					],
					'neve-beaver-museum'                => [
						'url'        => 'https://demosites.io/museum-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-museum.jpg',
						'title'      => 'Museum',
						'keywords'   => [ 'entertainment', 'education', 'responsive' ],
					],
					'neve-beaver-exhibition'            => [
						'url'        => 'https://demosites.io/exhibition-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-art-expo.jpg',
						'title'      => 'Art Exhibition',
						'keywords'   => [ 'entertainment', 'education', 'one page' ],
					],
					'neve-beaver-conference'            => [
						'url'        => 'https://demosites.io/conference-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-conference.jpg',
						'title'      => 'Conference',
						'keywords'   => [ 'entertainment', 'education', 'responsive' ],
					],
					'neve-beaver-insurance'             => [
						'url'        => 'https://demosites.io/insurance-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-insurance.jpg',
						'title'      => 'Insurance',
						'keywords'   => [ 'business', 'minimal' ],
					],
					'neve-beaver-personal-blog'         => [
						'url'        => 'https://demosites.io/personal-blog-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-blog.jpg',
						'title'      => 'Personal Blog',
						'keywords'   => [ 'blog', 'minimal', 'responsive' ],
					],
				],
				'elementor'        => [
					'neve-cafe'                  => [
						'url'        => 'https://demosites.io/cafe/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
						'keywords'   => [ 'food', 'one page' ],
					],
					'neve-constructions'         => [
						'url'        => 'https://demosites.io/constructions/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'      => 'Constructions Company',
						'keywords'   => [ 'one page', 'responsive' ],
					],
					'neve-fashion'               => [
						'url'        => 'https://demosites.io/fashion/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
						'keywords'   => [ 'fashion', 'responsive' ],
					],
					'neve-showcase'              => [
						'url'        => 'https://demosites.io/showcase/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
						'keywords'   => [ 'entertainment', 'minimal' ],
					],
					'neve-consultants'           => [
						'url'        => 'https://demosites.io/consultants/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
						'keywords'   => [ 'business', 'one page' ],
					],
					'neve-job-listings'          => [
						'url'        => 'https://demosites.io/job-listings/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
						'keywords'   => [ 'responsive', 'minimal' ],
					],
					'neve-barber-shop'           => [
						'url'        => 'https://demosites.io/barber-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
						'keywords'   => [ 'ecommerce', 'responsive' ],
					],
					'neve-personal-traner'       => [
						'url'        => 'https://demosites.io/personal-trainer/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
						'keywords'   => [ 'sports', 'one page' ],
					],
					'neve-real-estate'           => [
						'url'        => 'https://demosites.io/real-estate/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
						'keywords'   => [ 'one page', 'business', 'responsive' ],
					],
					'neve-events'                => [
						'url'        => 'https://demosites.io/events/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
						'keywords'   => [ 'entertainment', 'one page', 'event' ],
					],
					'neve-portrait-photopraphy'  => [
						'url'        => 'https://demosites.io/portrait-photopraphy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
						'keywords'   => [ 'photography', 'wedding', 'minimal' ],
					],
					'neve-photography-portfolio' => [
						'url'        => 'https://demosites.io/photography-portfolio/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
						'keywords'   => [ 'photography', 'blog', 'minimal' ],
					],
					'neve-video-agency'          => [
						'url'        => 'https://demosites.io/video-agency/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
						'keywords'   => [ 'photography', 'responsive', 'agency' ],
					],
					'neve-furniture-shop'        => [
						'url'        => 'https://demosites.io/furniture-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
						'keywords'   => [ 'ecommerce', 'responsive' ],
					],
					'neve-farm'                  => [
						'url'        => 'https://demosites.io/farm/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
						'keywords'   => [ 'food', 'responsive' ],
					],
					'neve-photographer'          => [
						'url'        => 'https://demosites.io/photography/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-photographer.jpg',
						'title'      => 'Photographer',
						'keywords'   => [ 'photography', 'responsive' ],
					],
					'neve-kindergarten'          => [
						'url'        => 'https://demosites.io/kindergarten/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
						'keywords'   => [ 'education', 'responsive' ],
					],
					'neve-florist'               => [
						'url'        => 'https://demosites.io/florist/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-florist.jpg',
						'title'      => 'Florist',
						'keywords'   => [ 'ecommerce', 'flowers', 'blog' ],
					],
					'neve-cake-shop'             => [
						'url'        => 'https://demosites.io/cake-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cake-shop.jpg',
						'title'      => 'Cake Shop',
						'keywords'   => [ 'ecommerce', 'food' ],
					],
					'neve-transport'             => [
						'url'        => 'https://demosites.io/transport/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-transport.jpg',
						'title'      => 'Transport',
						'keywords'   => [ 'travel', 'blog', 'minimal' ],
					],
					'neve-ebook'                 => [
						'url'        => 'https://demosites.io/ebook/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-ebook.jpg',
						'title'      => 'eBook',
						'keywords'   => [ 'education', 'blog', 'minimal' ],
					],
					'neve-speed'                 => [
						'url'        => 'https://demosites.io/speed/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'      => 'Speed',
						'keywords'   => [ 'ecommerce', 'business', 'one page', 'responsive', 'blog' ],
					],
					'neve-food-magazine'         => [
						'url'        => 'https://demosites.io/food-magazine/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-food-magazine.jpg',
						'title'      => 'Food Magazine',
						'keywords'   => [ 'food', 'blog' ],
					],
					'neve-web-design'            => [
						'url'        => 'https://demosites.io/web-design/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-design.jpg',
						'title'      => 'eCourse - Web Design',
						'keywords'   => [ 'business', 'blog' ],
					],
					'neve-yoa-studio'            => [
						'url'        => 'https://demosites.io/yoga-studio/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-yoga.jpg',
						'title'      => 'Yoga Studio',
						'keywords'   => [ 'wellness', 'responsive', 'minimal' ],
					],
					'neve-sales-funnel'          => [
						'url'        => 'https://demosites.io/sales-funnel/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'      => 'Sales Funnel',
						'keywords'   => [ 'ecommerce', 'business' ],
					],
					'neve-church'                => [
						'url'        => 'https://demosites.io/church/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-church.jpg',
						'title'      => 'Church',
						'keywords'   => [ 'church', 'minimal', 'one page' ],
					],
					'neve-fashion-magazine'      => [
						'url'        => 'https://demosites.io/fashion-magazine/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
						'title'      => 'Fashion Magazine',
						'keywords'   => [ 'fashion', 'responsive', 'blog' ],
					],
					'neve-winery'                => [
						'url'        => 'https://demosites.io/winery/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-winery.png',
						'title'      => 'Winery - Wine Shop',
						'keywords'   => [ 'food', 'ecommerce' ],
					],
					'neve-news-magazine'         => [
						'url'        => 'https://demosites.io/news-magazine/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-news.jpg',
						'title'      => 'News Magazine',
						'keywords'   => [ 'blog', 'minimal', 'news' ],
					],
					'neve-coworking'             => [
						'url'        => 'https://demosites.io/coworking/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coworking.jpg',
						'title'      => 'Coworking Space',
						'keywords'   => [ 'blog', 'minimal' ],
					],
					'neve-fishing-club'          => [
						'url'        => 'https://demosites.io/fishing-club/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fishing.jpg',
						'title'      => 'Fishing and Hunting Club',
						'keywords'   => [ 'sports', 'responsive' ],
					],
					'neve-car-rental'            => [
						'url'        => 'https://demosites.io/car-rental/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cart-rental.jpg',
						'title'      => 'Car Rental',
						'keywords'   => [ 'car', 'one page', 'minimal' ],
					],
					'neve-ski-resort'            => [
						'url'        => 'https://demosites.io/ski-resort/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/sky-resort.jpg',
						'title'      => 'Ski Resort Winter Hotel',
						'keywords'   => [ 'travel', 'sports' ],
					],
					'neve-digital-product'       => [
						'url'        => 'https://demosites.io/digital-product-funnel/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-digital-product.jpg',
						'title'      => 'Digital Product Funnel',
						'keywords'   => [ 'ecommerce', 'business' ],
					],
					'neve-moving-company'        => [
						'url'        => 'https://demosites.io/moving-company/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-moving-company.jpg',
						'title'      => 'Moving Company Logistics Services',
						'keywords'   => [ 'logistics', 'one page', 'responsive' ],
					],
					'neve-translation-services'  => [
						'url'        => 'https://demosites.io/translation-services/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-translations.jpg',
						'title'      => 'Translation and Interpreter Services',
						'keywords'   => [ 'responsive', 'blog' ],
					],
					'neve-blogger'               => [
						'url'        => 'https://demosites.io/blogger/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-blogger.jpg',
						'title'      => 'Blogger',
						'keywords'   => [ 'minimal', 'blog', 'responsive' ],
					],
					'neve-coupons'               => [
						'url'        => 'https://demosites.io/coupons/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coupons.jpg',
						'title'      => 'Coupons Discounts and Offers',
						'keywords'   => [ 'discount', 'coupons', 'blog', 'responsive' ],
					],
					'neve-escape-room'           => [
						'url'        => 'https://demosites.io/escape-room/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-escape-room.jpg',
						'title'      => 'Escape Room',
						'keywords'   => [ 'entertainment', 'responsive' ],
					],
					'neve-cv'                    => [
						'url'        => 'https://demosites.io/cv/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-resume.jpg',
						'title'      => 'Resume',
						'keywords'   => [ 'blog', 'one page', 'minimal' ],
					],
					'neve-wellness'              => [
						'url'        => 'https://demosites.io/wellness/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wellness.jpg',
						'title'      => 'Wellness Spa',
						'keywords'   => [ 'wellness', 'responsive', 'minimal' ],
					],
					'neve-courses'               => [
						'url'        => 'https://demosites.io/courses/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-courses.jpg',
						'title'      => 'Online Courses',
						'keywords'   => [ 'education', 'blog', 'minimal' ],
					],
					'neve-model-agency'          => [
						'url'        => 'https://demosites.io/model-agency/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-model-agency.jpg',
						'title'      => 'Fashion Model Agency',
						'keywords'   => [ 'fashion', 'agency', 'blog' ],
					],
					'neve-it-company'            => [
						'url'        => 'https://demosites.io/it-company/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-it-solution.jpg',
						'title'      => 'IT Technology Agency',
						'keywords'   => [ 'one page', 'responsive', 'agency' ],
					],
					'neve-christmas-market'      => [
						'url'        => 'https://demosites.io/christmas-market/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-christmas.jpg',
						'title'      => 'Christmas Market',
						'keywords'   => [ 'entertainment', 'blog' ],
					],
					'neve-podcast'               => [
						'url'        => 'https://demosites.io/podcast/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-podcast.jpg',
						'title'      => 'Podcast',
						'keywords'   => [ 'blog', 'entertainment', 'education' ],
					],
					'neve-digital-agency'        => [
						'url'        => 'https://demosites.io/digital-agency/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-digital-agency.jpg',
						'title'      => 'Digital Agency',
						'keywords'   => [ 'blog', 'business', 'agency' ],
					],
					'neve-industrial'            => [
						'url'        => 'https://demosites.io/industrial/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-industrial.jpg',
						'title'      => 'Industrial',
						'keywords'   => [ 'minimal', 'responsive' ],
					],
					'neve-adventure'             => [
						'url'        => 'https://demosites.io/adventure/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-adventure.jpg',
						'title'      => 'Adventure',
						'keywords'   => [ 'sports', 'one page', 'responsive' ],
					],
					'neve-product-launch'        => [
						'url'        => 'https://demosites.io/product-launch/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-product-lunch.jpg',
						'title'      => 'Product Launch',
						'keywords'   => [ 'business', 'minimal' ],
					],
					'neve-accounting'            => [
						'url'        => 'https://demosites.io/accounting/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-accounting.jpg',
						'title'      => 'Accounting',
						'keywords'   => [ 'one page', 'responsive' ],
					],
					'neve-beauty-shop'           => [
						'url'        => 'https://demosites.io/beauty-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-beauty-shop.jpg',
						'title'      => 'Beauty Shop',
						'keywords'   => [ 'fashion', 'ecommerce' ],
					],
					'neve-recruitment'           => [
						'url'        => 'https://demosites.io/recruitment/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-recruitment.jpg',
						'title'      => 'Recruitment Agency',
						'keywords'   => [ 'minimal', 'agency' ],
					],
					'neve-artist'                => [
						'url'        => 'https://demosites.io/artist/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-artist.jpg',
						'title'      => 'Artist',
						'keywords'   => [ 'entertainment', 'blog', 'responsive' ],
					],
					'neve-vr-studio'             => [
						'url'        => 'https://demosites.io/vr-studio/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vr.jpg',
						'title'      => 'VR Studio',
						'keywords'   => [ 'entertainment', 'one page' ],
					],
					'neve-makeup-artist'         => [
						'url'        => 'https://demosites.io/makeup-artist/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-makeup.jpg',
						'title'      => 'Makeup Artist',
						'keywords'   => [ 'fashion', 'minimal' ],
					],
					'neve-diving'                => [
						'url'        => 'https://demosites.io/diving/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-diving.jpg',
						'title'      => 'Scuba Diving',
						'keywords'   => [ 'sports', 'responsive' ],
					],
					'neve-wine-bar'              => [
						'url'        => 'https://demosites.io/wine-bar/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/wine-bar.jpg',
						'title'      => 'Wine Bar',
						'keywords'   => [ 'food', 'responsive' ],
					],
					'neve-mtb-race'              => [
						'url'        => 'https://demosites.io/mtb-race/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-race.jpg',
						'title'      => 'Mountain Biking Race',
						'keywords'   => [ 'sports', 'responsive' ],
					],
					'neve-movie'                 => [
						'url'        => 'https://demosites.io/movie/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-movie.jpg',
						'title'      => 'Movie Showcase',
						'keywords'   => [ 'entertainment', 'education', 'minimal' ],
					],
					'neve-running-club'          => [
						'url'        => 'https://demosites.io/running-club/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-run.jpg',
						'title'      => 'Running Club',
						'keywords'   => [ 'sports', 'one page' ],
					],
					'neve-jewellery-shop'        => [
						'url'        => 'https://demosites.io/jewellery-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-jewellery.jpg',
						'title'      => 'Jewellery Shop',
						'keywords'   => [ 'ecommerce', 'minimal' ],
					],
					'neve-car-service'           => [
						'url'        => 'https://demosites.io/car-service/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-car-service.jpg',
						'title'      => 'Car Vehicle Service',
						'keywords'   => [ 'responsive', 'minimal' ],
					],
					'neve-museum'                => [
						'url'        => 'https://demosites.io/museum/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-museum.jpg',
						'title'      => 'Museum',
						'keywords'   => [ 'entertainment', 'education', 'responsive' ],
					],
					'neve-exhibition'            => [
						'url'        => 'https://demosites.io/exhibition/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-art-expo.jpg',
						'title'      => 'Art Exhibition',
						'keywords'   => [ 'entertainment', 'education', 'one page' ],
					],
					'neve-conference'            => [
						'url'        => 'https://demosites.io/conference/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-conference.jpg',
						'title'      => 'Conference',
						'keywords'   => [ 'entertainment', 'education', 'responsive' ],
					],
					'neve-university'            => [
						'url'        => 'https://demosites.io/university/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-university.jpg',
						'title'      => 'University',
						'keywords'   => [ 'education', 'minimal', 'one page' ],
					],
					'neve-interior-design'       => [
						'url'        => 'https://demosites.io/interior-design/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-interior-design-2.jpg',
						'title'      => 'Interior Design',
						'keywords'   => [ 'responsive', 'blog', 'minimal' ],
					],
					'neve-electronics-store'     => [
						'url'        => 'https://demosites.io/electronics-store/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-electronics.jpg',
						'title'      => 'Electronics Shop',
						'keywords'   => [ 'ecommerce', 'one page' ],
					],
					'neve-print-shop'            => [
						'url'        => 'https://demosites.io/print-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-print.jpg',
						'title'      => 'Print Shop',
						'keywords'   => [ 'ecommerce', 'minimal' ],
					],
					'neve-city-tour'             => [
						'url'        => 'https://demosites.io/city-tour/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-city-tour.jpg',
						'title'      => 'City Tours',
						'keywords'   => [ 'entertainment', 'responsive', 'blog' ],
					],
					'neve-insurance'             => [
						'url'        => 'https://demosites.io/insurance/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-insurance.jpg',
						'title'      => 'Insurance',
						'keywords'   => [ 'business', 'minimal' ],
					],
					'neve-personal-blog'         => [
						'url'        => 'https://demosites.io/personal-blog/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-blog.jpg',
						'title'      => 'Personal Blog',
						'keywords'   => [ 'blog', 'minimal', 'responsive' ],
					],
					'neve-travel-blog'           => [
						'url'        => 'https://demosites.io/travel-blog/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-travel-blog.jpg',
						'title'      => 'Travel Blog',
						'keywords'   => [ 'travel', 'blog', 'responsive' ],
					],
					'neve-dj'                    => [
						'url'        => 'https://demosites.io/dj/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-dj.jpg',
						'title'      => 'DJ',
						'keywords'   => [ 'entertainment', 'music' ],
					],
					'neve-tech-lab'              => [
						'url'        => 'https://demosites.io/tech-lab/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-tech.jpg',
						'title'      => 'Tech Lab',
						'keywords'   => [ 'business', 'responsive', 'minimal' ],
					],
					'neve-equitation'            => [
						'url'        => 'https://demosites.io/equitation/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-horses.jpg',
						'title'      => 'Equitation',
						'keywords'   => [ 'sports', 'responsive', 'horse' ],
					],
					'neve-restaurant-2'          => [
						'url'        => 'https://demosites.io/restaurant-2/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-restaurant-2.jpg',
						'title'      => 'Restaurant 2',
						'keywords'   => [ 'food', 'ecommerce', 'responsive' ],
					],
					'neve-copywriter'            => [
						'url'        => 'https://demosites.io/copywriter/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-copyright.jpg',
						'title'      => 'Copywriter',
						'keywords'   => [ 'one page', 'blog' ],
					],
				],
				'brizy'            => [
					'neve-brizy-cafe'                 => [
						'url'        => 'https://demosites.io/cafe-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
						'keywords'   => [ 'food', 'one page' ],
					],
					'neve-brizy-constructions'        => [
						'url'        => 'https://demosites.io/constructions-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'      => 'Constructions Company',
						'keywords'   => [ 'one page', 'responsive' ],
					],
					'neve-brizy-fashion'              => [
						'url'        => 'https://demosites.io/fashion-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
						'keywords'   => [ 'fashion', 'responsive' ],
					],
					'neve-brizy-showcase'             => [
						'url'        => 'https://demosites.io/showcase-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
						'keywords'   => [ 'entertainment', 'responsive' ],
					],
					'neve-brizy-consultants'          => [
						'url'        => 'https://demosites.io/consultants-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
						'keywords'   => [ 'business', 'one page' ],
					],
					'neve-brizy-job-listings'         => [
						'url'        => 'https://demosites.io/job-listings-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
						'keywords'   => [ 'responsive', 'minimal' ],
					],
					'neve-brizy-barber-shop'          => [
						'url'        => 'https://demosites.io/barber-shop-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
						'keywords'   => [ 'ecommerce', 'responsive' ],
					],
					'neve-brizy-personal-traner'      => [
						'url'        => 'https://demosites.io/personal-trainer-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
						'keywords'   => [ 'sports', 'one page' ],
					],
					'neve-brizy-real-estate'          => [
						'url'        => 'https://demosites.io/real-estate-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
						'keywords'   => [ 'one page', 'business', 'responsive' ],
					],
					'neve-brizy-events'               => [
						'url'        => 'https://demosites.io/events-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
						'keywords'   => [ 'entertainment', 'one page', 'event' ],
					],
					'neve-brizy-portrait-photopraphy' => [
						'url'        => 'https://demosites.io/portrait-photography-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
						'keywords'   => [ 'photography', 'wedding', 'minimal' ],
					],
					'neve-brizy-furniture-shop'       => [
						'url'        => 'https://demosites.io/furniture-shop-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
						'keywords'   => [ 'ecommerce', 'responsive' ],
					],
					'neve-brizy-farm'                 => [
						'url'        => 'https://demosites.io/farm-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
						'keywords'   => [ 'food', 'responsive' ],
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
				'keywords'   => [ 'business', 'blog', 'ecommerce', 'free' ],
			],
			'neve-web-agency-gutenberg'         => [
				'url'        => 'https://demosites.io/web-agency-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/web-agency-gb/',
				'title'      => 'Web Agency',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-agency-all-new.png',
				'keywords'   => [ 'business', 'blog', 'ecommerce', 'free', 'agency' ],
			],
			'neve-blogger-gutenberg'            => [
				'url'        => 'https://demosites.io/blogger-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/blogger-gb/',
				'title'      => 'Blogger',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-blogger.jpg',
				'keywords'   => [ 'business', 'minimal', 'blog', 'responsive', 'free' ],
			],
			'neve-restaurant-gutenberg'         => [
				'url'              => 'https://demosites.io/restaurant-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/restaurant-gb/',
				'title'            => 'Restaurant',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
				'keywords'         => [ 'food', 'business', 'responsive', 'free' ],
			],
			'neve-charity-gutenberg'            => [
				'url'              => 'https://demosites.io/charity-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/charity-gb/',
				'title'            => 'Charity',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
				'keywords'         => [ 'one page', 'minimal', 'business', 'free' ],
			],
			'neve-vet-center-gutenberg'         => [
				'url'              => 'https://demosites.io/vet-center-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/vet-center-gb/',
				'title'            => 'Vet Center',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
				'keywords'         => [ 'medical', 'minimal', 'responsive', 'free' ],
			],
			'neve-doctors-gutenberg'            => [
				'url'              => 'https://demosites.io/doctors-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/doctors-gb/',
				'title'            => 'Doctors',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
				'keywords'         => [ 'medical', 'one page', 'minimal', 'responsive', 'free' ],
			],
			'neve-architecture-gutenberg'       => [
				'url'              => 'https://demosites.io/architecture-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/architecture-gb/',
				'title'            => 'Architecture',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/6802313/architecture/f59e19df059789d86d1066ea80130a87',
				'keywords'         => [ 'minimal', 'responsive', 'free' ],
			],
			'neve-fitness-gutenberg'            => [
				'url'              => 'https://demosites.io/fitness-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/fitness-gb/',
				'title'            => 'Fitness',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/6800490/fitness-gym',
				'keywords'         => [ 'sports', 'one page', 'free' ],
			],
			'neve-vacation-rental-gutenberg'    => [
				'url'              => 'https://demosites.io/vacation-rental-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/vacation-rental-gb/',
				'title'            => 'Vacation Rental',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/7851106/hotel',
				'keywords'         => [ 'minimal', 'blog', 'free' ],
			],
			'neve-music-band-gutenberg'         => [
				'url'              => 'https://demosites.io/music-band-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/music-band-gb/',
				'title'            => 'Music Band',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.png',
				'unsplash_gallery' => 'https://unsplash.com/collections/7338489/music/746c95e4a72ad242a07001a2ca0fa7cb',
				'keywords'         => [ 'entertainment', 'one page', 'business', 'responsive', 'blog', 'free', 'music' ],
			],
			'neve-wedding-gutenberg'            => [
				'url'              => 'https://demosites.io/wedding-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/wedding-gb/',
				'title'            => 'Wedding',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8116784/wedding/9afa9f6ba14422f348e1c7a49a9d51e9',
				'keywords'         => [ 'business', 'minimal', 'responsive', 'free', 'wedding' ],
			],
			'neve-themotion-gutenberg'          => [
				'url'              => 'https://demosites.io/themotion-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/themotion-gb/',
				'title'            => 'Video Blog',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-1.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8256651/neve-the-motion/79f8c5a63926e7cee4deed75bc6724fc',
				'keywords'         => [ 'photography', 'blog', 'responsive', 'free' ],
			],
			'neve-amadeus-gutenberg'            => [
				'url'              => 'https://demosites.io/amadeus-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/amadeus-gb/',
				'title'            => 'Music Teacher',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-2.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8271695/neve-amadeus/ba699571eb4fc205ad8385c0440ced80',
				'keywords'         => [ 'education', 'responsive', 'free', 'music' ],
			],
			'neve-oblique-gutenberg'            => [
				'url'              => 'https://demosites.io/oblique-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/oblique-gb/',
				'title'            => 'Vintage',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-3.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8325788/oblique/7281d963f7b798d5fa7d6327bfd26804',
				'keywords'         => [ 'photography', 'minimal', 'blog', 'free' ],
			],
			'neve-rokophoto-gutenberg'          => [
				'url'              => 'https://demosites.io/rokophoto-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/rokophoto-gb/',
				'title'            => 'Photography',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-4.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8311183/rokophoto/ecebabcd40134eacf11cbd3cba504f44',
				'keywords'         => [ 'photography', 'business', 'responsive', 'free' ],
			],
			'neve-energy-panels-gutenberg'      => [
				'url'              => 'https://demosites.io/energy-panels-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/energy-panels-gb/',
				'title'            => 'Energy Panels',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-5.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587602/energy-panels',
				'keywords'         => [ 'business', 'blog', 'minimal', 'free' ],
			],
			'neve-lawyers-gutenberg'            => [
				'url'              => 'https://demosites.io/lawyers-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/lawyers-gb/',
				'title'            => 'Lawyers',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-6.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587639/neve-lawyers',
				'keywords'         => [ 'business', 'minimal', 'responsive', 'free' ],
			],
			'neve-freelancer-gutenberg'         => [
				'url'              => 'https://demosites.io/freelancer-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/freelancer-gb/',
				'title'            => 'Freelancer',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-7.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587634/freelancer/920c5eb680fa5f20b9b19a0d84a385eb',
				'keywords'         => [ 'education', 'minimal', 'blog', 'free' ],
			],
			'neve-tattoo-gutenberg'             => [
				'url'              => 'https://demosites.io/tatoo-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/tatoo-gb/',
				'title'            => 'Tattoo',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-8.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8459353/tatoo-studio',
				'keywords'         => [ 'one page', 'responsive', 'free' ],
			],
			'neve-zelle-gutenberg'              => [
				'url'              => 'https://demosites.io/zelle-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/zelle-gb/',
				'title'            => 'Travel Agency',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-9.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/4587771/zelle',
				'keywords'         => [ 'travel', 'one page', 'blog', 'free', 'agency' ],
			],
			'neve-life-coach-gutenberg'         => [
				'url'              => 'https://demosites.io/scholar-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/scholar-gb/',
				'title'            => 'Life Coach',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-10.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8532052/life-coach',
				'keywords'         => [ 'education', 'responsive', 'blog', 'free' ],
			],
			'neve-creative-portfolio-gutenberg' => [
				'url'              => 'https://demosites.io/creative-portofolio-gb/',
				'remote_url'       => 'https://api.themeisle.com/sites/creative-portofolio-gb/',
				'title'            => 'Creative Portfolio',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/screenshot-11.jpg',
				'unsplash_gallery' => 'https://unsplash.com/collections/8334242/creative-portfolio',
				'keywords'         => [ 'one page', 'minimal', 'business', 'free' ],
			],
		];
		$this->onboarding_config['upsell']['gutenberg'] = [
			'neve-cafe-gutenberg'             => [
				'url'        => 'https://demosites.io/cafe-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
				'title'      => 'Coffee Shop',
				'keywords'   => [ 'one page', 'food' ],
			],
			'neve-constructions-gutenberg'    => [
				'url'        => 'https://demosites.io/constructions-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
				'title'      => 'Constructions Company',
				'keywords'   => [ 'one page', 'responsive' ],
			],
			'neve-fashion-gutenberg'          => [
				'url'        => 'https://demosites.io/fashion-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
				'title'      => 'Fashion',
				'keywords'   => [ 'fashion', 'responsive' ],
			],
			'neve-consultants-gutenberg'      => [
				'url'        => 'https://demosites.io/consultants-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
				'title'      => 'Business Consulting',
				'keywords'   => [ 'business', 'one page' ],
			],
			'neve-job-listings-gutenberg'     => [
				'url'        => 'https://demosites.io/job-listings-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
				'title'      => 'Job Listing',
				'keywords'   => [ 'responsive', 'minimal' ],
			],
			'neve-real-estate-gutenberg'      => [
				'url'        => 'https://demosites.io/real-estate-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
				'title'      => 'Real Estate',
				'keywords'   => [ 'one page', 'business', 'responsive' ],
			],
			'neve-events-gutenberg'           => [
				'url'        => 'https://demosites.io/events-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
				'title'      => 'Events',
				'keywords'   => [ 'entertainment', 'business', 'event' ],
			],
			'neve-fashion-magazine-gutenberg' => [
				'url'        => 'https://demosites.io/fashion-magazine-gb/',
				'title'      => 'Fashion Magazine',
				'screenshot' => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
				'keywords'   => [ 'fashion', 'responsive', 'blog' ],
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
			'neve-button-color'     => array(
				'setting' => Config::MODS_BUTTON_PRIMARY_STYLE . '.background',
				'label'   => __( 'Button Color', 'neve' ),
			),
			'neve-link-color'       => array(
				'setting' => Config::MODS_LINK_COLOR,
				'label'   => __( 'Link Color', 'neve' ),
			),
			'neve-link-hover-color' => array(
				'setting' => Config::MODS_LINK_HOVER_COLOR,
				'label'   => __( 'Link Hover Color', 'neve' ),
			),
			'neve-text-color'       => array(
				'setting' => Config::MODS_TEXT_COLOR,
				'label'   => __( 'Text Color', 'neve' ),
			),
			'neve-btn-text'         => array(
				'setting' => Config::MODS_BUTTON_PRIMARY_STYLE . '.text',
				'label'   => __( 'Button text color', 'neve' ),
			),
			'neve-btn-text-hover'   => array(
				'setting' => Config::MODS_BUTTON_PRIMARY_STYLE . '.textHover',
				'label'   => __( 'Button Hover text color', 'neve' ),
			),
			'neve-btn-bg-hover'     => array(
				'setting' => Config::MODS_BUTTON_PRIMARY_STYLE . '.backgroundHover',
				'label'   => __( 'Button Hover Color', 'neve' ),
			),
		);
		foreach ( $color_controls as $control_name => $control_data ) {
			$color = Mods::get( $control_data['setting'] );
			if ( empty( $color ) ) {
				continue;
			}
			$color_name = $control_data['label'];
			array_push(
				$gutenberg_color_palette,
				array(
					'name'  => esc_html( $color_name ),
					'slug'  => esc_html( $control_name ),
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
