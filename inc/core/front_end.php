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
		require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
		$divi_plugin_config   = [
			[
				'name'       => 'Divi Builder',
				'active'     => is_plugin_active( 'divi-builder/divi-builder.php' ),
				'author_url' => esc_url( 'https://www.elegantthemes.com/gallery/divi/' ),
			],
		];
		$thrive_plugin_config = [
			[
				'name'       => 'Thrive Architect',
				'active'     => is_plugin_active( 'thrive-visual-editor/thrive-visual-editor.php' ),
				'author_url' => esc_url( 'https://thrivethemes.com/architect/' ),
			],
		];

		$this->onboarding_config = [
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
						'url'              => 'https://demosites.io/lawyers-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/lawyers-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-lawyers.jpg',
						'title'            => 'Lawyers',
						'keywords'         => [ 'business', 'minimal' ],
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-cafe'         => [
						'url'              => 'https://demosites.io/cafe-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/cafe-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'            => 'Coffee Shop',
						'keywords'         => [ 'one page', 'food' ],
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-fashion'      => [
						'url'              => 'https://demosites.io/fashion-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/fashion-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'            => 'Fashion',
						'keywords'         => [ 'fashion', 'responsive' ],
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-job-listings' => [
						'url'              => 'https://demosites.io/job-listing-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/job-listing-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'            => 'Job Listing',
						'keywords'         => [ 'responsive', 'minimal' ],
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-real-estate'  => [
						'url'              => 'https://demosites.io/real-estate-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/real-estate-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'            => 'Real Estate',
						'keywords'         => [ 'one page', 'business', 'responsive' ],
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-events'       => [
						'url'              => 'https://demosites.io/events-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/events-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'            => 'Events',
						'keywords'         => [ 'entertainment', 'one page', 'event' ],
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-farm'         => [
						'url'              => 'https://demosites.io/farm-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/farm-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'            => 'Farm',
						'keywords'         => [ 'food', 'responsive' ],
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-kindergarten' => [
						'url'              => 'https://demosites.io/kindergarten-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/kindergarten-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'            => 'Kindergarten',
						'keywords'         => [ 'education', 'responsive' ],
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-speed'        => [
						'url'              => 'https://demosites.io/speed-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/pro-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'            => 'Speed',
						'keywords'         => [ 'ecommerce', 'business', 'one page', 'responsive', 'blog' ],
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-funnel'       => [
						'url'              => 'https://demosites.io/sales-funnel-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/sales-funnel-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'            => 'Sales Funnel',
						'keywords'         => [ 'ecommerce', 'business', 'responsive' ],
						'external_plugins' => $divi_plugin_config,
					],
				],
				'thrive architect' => [
					'neve-thrive-cafe'                  => [
						'url'              => 'https://demosites.io/cafe-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/cafe-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'            => 'Coffee Shop',
						'keywords'         => [ 'food', 'one page' ],
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-fashion'               => [
						'url'              => 'https://demosites.io/fashion-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/fashion-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'            => 'Fashion',
						'keywords'         => [ 'fashion', 'minimal' ],
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-showcase'              => [
						'url'              => 'https://demosites.io/showcase-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/showcase-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'            => 'Showcase',
						'keywords'         => [ 'entertainment', 'responsive' ],
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-job-listings'          => [
						'url'              => 'https://demosites.io/job-listings-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/job-listings-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'            => 'Job Listing',
						'keywords'         => [ 'responsive', 'minimal' ],
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-real-estate'           => [
						'url'              => 'https://demosites.io/real-estate-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/real-estate-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'            => 'Real Estate',
						'keywords'         => [ 'one page', 'business', 'responsive' ],
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-events'                => [
						'url'              => 'https://demosites.io/events-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/events-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'            => 'Events',
						'keywords'         => [ 'entertainment', 'one page', 'event' ],
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-photography-portfolio' => [
						'url'              => 'https://demosites.io/photography-portfolio-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/photography-portfolio-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'            => 'Photography Studio',
						'keywords'         => [ 'photography', 'blog', 'minimal' ],
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-video-agency'          => [
						'url'              => 'https://demosites.io/video-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/video-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'            => 'Video Agency',
						'keywords'         => [ 'photography', 'responsive', 'agency' ],
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-farm'                  => [
						'url'              => 'https://demosites.io/farm-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/farm-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'            => 'Farm',
						'keywords'         => [ 'food', 'responsive' ],
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-speed'                 => [
						'url'              => 'https://demosites.io/speed-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/pro-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'            => 'Speed',
						'keywords'         => [ 'ecommerce', 'business', 'one page', 'responsive', 'blog' ],
						'external_plugins' => $thrive_plugin_config,
					],
				],
				'beaver builder'   => [
					'neve-beaver-cafe'                  => [
						'url'              => 'https://demosites.io/cafe-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/cafe-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'            => 'Coffee Shop',
						'keywords'         => [ 'one page', 'food' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587666/cafe',
					],
					'neve-beaver-constructions'         => [
						'url'              => 'https://demosites.io/constructions-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/constructions-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'            => 'Constructions Company',
						'keywords'         => [ 'one page', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4847783/construction',
					],
					'neve-beaver-fashion'               => [
						'url'              => 'https://demosites.io/bb-fashion/',
						'remote_url'       => 'https://api.themeisle.com/sites/bb-fashion/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'            => 'Fashion',
						'keywords'         => [ 'fashion', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4926520/fashion',
					],
					'neve-beaver-showcase'              => [
						'url'              => 'https://demosites.io/showcase-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/showcase-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'            => 'Showcase',
						'keywords'         => [ 'entertainment', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587690/showcase/ed70b13c3a6d1219334f193873aaad61',
					],
					'neve-beaver-consultants'           => [
						'url'              => 'https://demosites.io/consultants-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/consultants-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'            => 'Business Consulting',
						'keywords'         => [ 'business', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8366058/consultants',
					],
					'neve-beaver-job-listings'          => [
						'url'              => 'https://demosites.io/job-listings-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/job-listings-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'            => 'Job Listing',
						'keywords'         => [ 'responsive', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8327271/job-listing',
					],
					'neve-beaver-barber-shop'           => [
						'url'              => 'https://demosites.io/barber-shop-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/barber-shop-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'            => 'Barber Shop',
						'keywords'         => [ 'ecommerce', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8357212/barber-shop',
					],
					'neve-beaver-personal-trainer'      => [
						'url'              => 'https://demosites.io/personal-trainer-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/personal-trainer-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'            => 'Personal Trainer',
						'keywords'         => [ 'sports', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8351250/personal-trainer/4f469c0cb610352567f5233410c61742',
					],
					'neve-beaver-real-estate'           => [
						'url'              => 'https://demosites.io/real-estate-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/real-estate-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'            => 'Real Estate',
						'keywords'         => [ 'one page', 'business', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8280384/real-estate',
					],
					'neve-beaver-events'                => [
						'url'              => 'https://demosites.io/events-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/events-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'            => 'Events',
						'keywords'         => [ 'entertainment', 'one page', 'event' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8311870/music-events',
					],
					'neve-beaver-photography-portfolio' => [
						'url'              => 'https://demosites.io/photography-portfolio-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/photography-portfolio-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'            => 'Photography Studio',
						'keywords'         => [ 'photography', 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587698/photography-portfolio',
					],
					'neve-beaver-video-agency'          => [
						'url'              => 'https://demosites.io/video-agency-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/video-agency-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'            => 'Video Agency',
						'keywords'         => [ 'photography', 'responsive', 'agency' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4770565/video-agency',
					],
					'neve-beaver-furniture-shop'        => [
						'url'              => 'https://demosites.io/furniture-shop-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/furniture-shop-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'            => 'Furniture Shop',
						'keywords'         => [ 'ecommerce', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8527065/furniture-shop',
					],
					'neve-beaver-portrait-photography'  => [
						'url'              => 'https://demosites.io/portrait-photopraphy-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/portrait-photopraphy-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'            => 'Wedding Photography',
						'keywords'         => [ 'photography', 'wedding', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587751/portrait-wedding-photography',
					],
					'neve-beaver-farm'                  => [
						'url'              => 'https://demosites.io/farm-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/farm-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'            => 'Farm',
						'keywords'         => [ 'food', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8509382/farm',
					],
					'neve-beaver-photographer'          => [
						'url'              => 'https://demosites.io/photography-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/photography-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-photographer.jpg',
						'title'            => 'Photographer',
						'keywords'         => [ 'photography', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8676181/neve-photography/d47fed0fbab045ca4c4636a01fe53c0d',
					],
					'neve-beaver-kindergarten'          => [
						'url'              => 'https://demosites.io/kindergarden-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/kindergarden-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'            => 'Kindergarten',
						'keywords'         => [ 'education', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8606727/kindergarten',
					],
					'neve-beaver-florist'               => [
						'url'              => 'https://demosites.io/florist-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/florist-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-florist.jpg',
						'title'            => 'Florist',
						'keywords'         => [ 'ecommerce', 'flowers', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8715558/neve-florist/f9106cdfcd1a7309bac7c606760d7918',
					],
					'neve-beaver-cake-shop'             => [
						'url'              => 'https://demosites.io/cake-shop-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/cake-shop-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cake-shop.jpg',
						'title'            => 'Cake Shop',
						'keywords'         => [ 'ecommerce', 'food' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/7772437/cakery-bakery/5f40022a676873e52e1dc76b113c5915',
					],
					'neve-beaver-transport'             => [
						'url'              => 'https://demosites.io/transport-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/transport-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-transport.jpg',
						'title'            => 'Transport',
						'keywords'         => [ 'travel', 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8333254/logistics',
					],
					'neve-beaver-ebook'                 => [
						'url'              => 'https://demosites.io/ebook-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/ebook-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-ebook.jpg',
						'title'            => 'eBook',
						'keywords'         => [ 'education', 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8687501/neve-ebook/53451c76913e4e176e377c0208e2e755',
					],
					'neve-beaver-speed'                 => [
						'url'              => 'https://demosites.io/speed-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/pro-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'            => 'Speed',
						'keywords'         => [ 'ecommerce', 'business', 'one page', 'responsive', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8698685/neve-pro',
					],
					'neve-beaver-food-magazine'         => [
						'url'              => 'https://demosites.io/food-magazine-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/food-magazine-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-food-magazine.jpg',
						'title'            => 'Food Magazine',
						'keywords'         => [ 'food', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8789337/neve-food-magazine',
					],
					'neve-beaver-web-design'            => [
						'url'              => 'https://demosites.io/web-design-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/web-design-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-design.jpg',
						'title'            => 'eCourse - Web Design',
						'keywords'         => [ 'business', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8778651/neve-web-design-course/e3a1b8568395786acef49c20929c5dce',
					],
					'neve-beaver-yoga-studio'           => [
						'url'              => 'https://demosites.io/yoga-studio-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/yoga-studio-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-yoga.jpg',
						'title'            => 'Yoga Studio',
						'keywords'         => [ 'wellness', 'responsive', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8778361/yoga-studio/fd02983f43e4d1b4f9ea9651d1fd8233',
					],
					'neve-beaver-sales-funnel'          => [
						'url'              => 'https://demosites.io/sales-funnel-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/sales-funnel-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'            => 'Sales Funnel',
						'keywords'         => [ 'ecommerce', 'business' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8758788/sales-funnel-1/ce1d2f6de0dab35699688bab193323d0',
					],
					'neve-beaver-church'                => [
						'url'              => 'https://demosites.io/church-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/church-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-church.jpg',
						'title'            => 'Church',
						'keywords'         => [ 'church', 'minimal', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8805198/neve-church/58329104fbc1dd6ea065330ee9749198',
					],
					'neve-beaver-fashion-magazine'      => [
						'url'              => 'https://demosites.io/fashion-magazine-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/fashion-magazine-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
						'title'            => 'Fashion Magazine',
						'keywords'         => [ 'fashion', 'responsive', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8815720/fashion-mag',
					],
					'neve-beaver-winery'                => [
						'url'              => 'https://demosites.io/winery-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/winery-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-winery.png',
						'title'            => 'Winery - Wine Shop',
						'keywords'         => [ 'food', 'ecommerce' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8821407/winery',
					],
					'neve-beaver-news-magazine'         => [
						'url'              => 'https://demosites.io/news-magazine-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/news-magazine-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-news.jpg',
						'title'            => 'News Magazine',
						'keywords'         => [ 'blog', 'minimal', 'news' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8843126/news-magazine/87e04aee675f7288715a01a4c674d2fc',
					],
					'neve-beaver-coworking'             => [
						'url'              => 'https://demosites.io/coworking-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/coworking-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coworking.jpg',
						'title'            => 'Coworking Space',
						'keywords'         => [ 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8820504/coworking/f3c1ba01d1177d2e2c4caa75dbf3066d',
					],
					'neve-beaver-car-rental'            => [
						'url'              => 'https://demosites.io/car-rental-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/car-rental-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cart-rental.jpg',
						'title'            => 'Car Rental',
						'keywords'         => [ 'car', 'one page', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8826109/car-rental',
					],
					'neve-beaver-moving-company'        => [
						'url'              => 'https://demosites.io/moving-company-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/moving-company-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-moving-company.jpg',
						'title'            => 'Moving Company Logistics Services',
						'keywords'         => [ 'logistics', 'one page', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8907717/moving-company/9274ab9f8d8de88bcdea5d79598e80e4',
					],
					'neve-beaver-translation-services'  => [
						'url'              => 'https://demosites.io/translation-services-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/translation-services-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-translations.jpg',
						'title'            => 'Translation and Interpreter Services',
						'keywords'         => [ 'responsive', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8903458/translation-services/f2ba08f0cb507af6bb520cd5c9643c5d',
					],
					'neve-beaver-coupons'               => [
						'url'              => 'https://demosites.io/coupons-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/coupons-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coupons.jpg',
						'title'            => 'Coupons Discounts and Offers',
						'keywords'         => [ 'discount', 'coupons', 'blog', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8936046/neve-coupons/2f70b203a4a269b514f5839826d21f61',
					],
					'neve-beaver-escape-room'           => [
						'url'              => 'https://demosites.io/escape-room-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/escape-room-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-escape-room.jpg',
						'title'            => 'Escape Room',
						'keywords'         => [ 'entertainment', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8924433/escape-room/c3145a3aca8fafa22251b01b280c1dbf',
					],
					'neve-beaver-cv'                    => [
						'url'              => 'https://demosites.io/cv-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/cv-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-resume.jpg',
						'title'            => 'Resume',
						'keywords'         => [ 'blog', 'one page', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8972123/neve-resume-cv/ac3c66b0b032068b43bbd37d8dccbb46',
					],
					'neve-beaver-wellness'              => [
						'url'              => 'https://demosites.io/wellness-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/wellness-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wellness.jpg',
						'title'            => 'Wellness Spa',
						'keywords'         => [ 'wellness', 'responsive', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8924925/wellness-and-spa/8c130f9a4809a74e12a9dfe5d1579af8',
					],
					'neve-beaver-courses'               => [
						'url'              => 'https://demosites.io/courses-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/courses-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-courses.jpg',
						'title'            => 'Online Courses',
						'keywords'         => [ 'education', 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8983337/neve-courses/23700703215f81990fe9ad618b886ae3',
					],
					'neve-beaver-model-agency'          => [
						'url'              => 'https://demosites.io/model-agency-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/model-agency-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-model-agency.jpg',
						'title'            => 'Fashion Model Agency',
						'keywords'         => [ 'fashion', 'agency', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9037292/fashion-agency',
					],
					'neve-beaver-it-company'            => [
						'url'              => 'https://demosites.io/it-company-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/it-company-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-it-solution.jpg',
						'title'            => 'IT Technology Agency',
						'keywords'         => [ 'one page', 'responsive', 'agency' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587644/agency',
					],
					'neve-beaver-podcast'               => [
						'url'              => 'https://demosites.io/podcast-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/podcast-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-podcast.jpg',
						'title'            => 'Podcast',
						'keywords'         => [ 'blog', 'entertainment', 'education' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8984175/neve-podcast/15ccb231f732a4a157321544c8e771fc',
					],
					'neve-beaver-digital-agency'        => [
						'url'              => 'https://demosites.io/digital-agency-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/digital-agency-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-digital-agency.jpg',
						'title'            => 'Digital Agency',
						'keywords'         => [ 'blog', 'business', 'agency' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9015394/neve-digital-agency/c794fcd505d0ac7fe2134479c3b8f670',
					],
					'neve-beaver-industrial'            => [
						'url'              => 'https://demosites.io/industrial-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/industrial-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-industrial.jpg',
						'title'            => 'Industrial',
						'keywords'         => [ 'minimal', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9025360/neve-industrial',
					],
					'neve-beaver-adventure'             => [
						'url'              => 'https://demosites.io/adventure-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/adventure-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-adventure.jpg',
						'title'            => 'Adventure',
						'keywords'         => [ 'sports', 'one page', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9049522/neve-adventure/760767c5436dbc0b4968749624c496b5',
					],
					'neve-beaver-product-launch'        => [
						'url'              => 'https://demosites.io/product-launch-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/product-launch-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-product-lunch.jpg',
						'title'            => 'Product Launch',
						'keywords'         => [ 'business', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9262386/neve-product-launch/bc5aaed5b8b69da0e4ad8046bf381f7f',
					],
					'neve-beaver-accounting'            => [
						'url'              => 'https://demosites.io/accounting-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/accounting-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-accounting.jpg',
						'title'            => 'Accounting',
						'keywords'         => [ 'one page', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9333537/neve-accounting',
					],
					'neve-beaver-beauty-shop'           => [
						'url'              => 'https://demosites.io/beauty-shop-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/beauty-shop-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-beauty-shop.jpg',
						'title'            => 'Beauty Shop',
						'keywords'         => [ 'ecommerce', 'fashion' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9266980/neve-beauty-shop/a63d896725855f02f51bf970c25b41c7',
					],
					'neve-beaver-recruitment'           => [
						'url'              => 'https://demosites.io/recruitment-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/recruitment-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-recruitment.jpg',
						'title'            => 'Recruitment Agency',
						'keywords'         => [ 'minimal', 'agency', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9359902/neve-recruitment',
					],
					'neve-beaver-artist'                => [
						'url'              => 'https://demosites.io/artist-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/artist-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-artist.jpg',
						'title'            => 'Artist',
						'keywords'         => [ 'entertainment', 'blog', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9339397/neve-artist',
					],
					'neve-beaver-vr-studio'             => [
						'url'              => 'https://demosites.io/vr-studio-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/vr-studio-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vr.jpg',
						'title'            => 'VR Studio',
						'keywords'         => [ 'entertainment', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9354886/neve-vr-studio',
					],
					'neve-beaver-makeup-artist'         => [
						'url'              => 'https://demosites.io/makeup-artist-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/makeup-artist-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-makeup.jpg',
						'title'            => 'Makeup Artist',
						'keywords'         => [ 'fashion', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9308448/makeup-artist',
					],
					'neve-beaver-diving'                => [
						'url'              => 'https://demosites.io/diving-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/diving-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-diving.jpg',
						'title'            => 'Scuba Diving',
						'keywords'         => [ 'sports', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9568292/neve-diving/fb3b68f89e22f1466d3b95400af3f12d',
					],
					'neve-beaver-wine-bar'              => [
						'url'              => 'https://demosites.io/wine-bar-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/wine-bar-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/wine-bar.jpg',
						'title'            => 'Wine Bar',
						'keywords'         => [ 'food', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9519955/wine-bar/e47446ef8f67886ed643acee951c1421',
					],
					'neve-beaver-mtb-race'              => [
						'url'              => 'https://demosites.io/mtb-race-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/mtb-race-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-race.jpg',
						'title'            => 'Mountain Biking Race',
						'keywords'         => [ 'sports', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9531208/neve-mtb-race/a58d04599c26e52f5d4f32036374dc32',
					],
					'neve-beaver-movie'                 => [
						'url'              => 'https://demosites.io/movie-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/movie-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-movie.jpg',
						'title'            => 'Movie Showcase',
						'keywords'         => [ 'entertainment', 'education', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9520410/neve-movie/eeccbed16a1ffd4d86845d9c115ad480',
					],
					'neve-beaver-running-club'          => [
						'url'              => 'https://demosites.io/running-club-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/running-club-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-run.jpg',
						'title'            => 'Running Club',
						'keywords'         => [ 'sports', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9463053/neve-running-club/fb0ee6fc8a320a51c737952a5092dde9',
					],
					'neve-beaver-jewellery-shop'        => [
						'url'              => 'https://demosites.io/jewellery-shop-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/jewellery-shop-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-jewellery.jpg',
						'title'            => 'Jewellery Shop',
						'keywords'         => [ 'ecommerce', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9394656/neve-jewellery-shop/666f976701a01f90039e2d0ca45f4bbd',
					],
					'neve-beaver-car-service'           => [
						'url'              => 'https://demosites.io/car-service-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/car-service-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-car-service.jpg',
						'title'            => 'Car Vehicle Service',
						'keywords'         => [ 'minimal', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9487947/car-repair',
					],
					'neve-beaver-museum'                => [
						'url'              => 'https://demosites.io/museum-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/museum-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-museum.jpg',
						'title'            => 'Museum',
						'keywords'         => [ 'entertainment', 'education', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9456353/neve-museum/94de9ce18efa4440eb48825deb211d24',
					],
					'neve-beaver-exhibition'            => [
						'url'              => 'https://demosites.io/exhibition-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/exhibition-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-art-expo.jpg',
						'title'            => 'Art Exhibition',
						'keywords'         => [ 'entertainment', 'education', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9339050/neve-exhibition',
					],
					'neve-beaver-conference'            => [
						'url'              => 'https://demosites.io/conference-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/conference-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-conference.jpg',
						'title'            => 'Conference',
						'keywords'         => [ 'entertainment', 'education', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9236647/neve-conference',
					],
					'neve-beaver-electronics-store'     => [
						'url'              => 'https://demosites.io/electronic-store-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/electronic-store-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-electronics.jpg',
						'title'            => 'Electronics Shop',
						'keywords'         => [ 'ecommerce', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9614226/neve-electronics-store/bc776b1b1a8eeb5e9a91e0bdcefef919',
					],
					'neve-beaver-print-shop'            => [
						'url'              => 'https://demosites.io/print-shop-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/print-shop-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-print.jpg',
						'title'            => 'Print Shop',
						'keywords'         => [ 'ecommerce', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9581663/neve-print-shop/7e3ada6f4ff6c2ea85e92a31b0a0d308',
					],
					'neve-beaver-city-tour'             => [
						'url'              => 'https://demosites.io/city-tour-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/city-tour-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-city-tour.jpg',
						'title'            => 'City Tours',
						'keywords'         => [ 'entertainment', 'responsive', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9607249/neve-city-tour/8c25fd0bd662a8c0311be4b114be52ac',
					],
					'neve-beaver-insurance'             => [
						'url'              => 'https://demosites.io/insurance-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/insurance-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-insurance.jpg',
						'title'            => 'Insurance',
						'keywords'         => [ 'business', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9556177/neve-insurance/7133d31d3dfa101e65ec96a865761e9b',
					],
					'neve-beaver-personal-blog'         => [
						'url'              => 'https://demosites.io/personal-blog-bb/',
						'remote_url'       => 'https://api.themeisle.com/sites/personal-blog-bb/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-blog.jpg',
						'title'            => 'Personal Blog',
						'keywords'         => [ 'blog', 'minimal', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9633204/neve-personal-blog/236da7a7ec4aaba3f8de60b4b10ab1a7',
					],
				],
				'elementor'        => [
					'neve-cafe'                  => [
						'url'              => 'https://demosites.io/cafe/',
						'remote_url'       => 'https://api.themeisle.com/sites/cafe/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'            => 'Coffee Shop',
						'keywords'         => [ 'food', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587666/cafe',
					],
					'neve-constructions'         => [
						'url'              => 'https://demosites.io/constructions/',
						'remote_url'       => 'https://api.themeisle.com/sites/constructions/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'            => 'Constructions Company',
						'keywords'         => [ 'one page', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4847783/construction',
					],
					'neve-fashion'               => [
						'url'              => 'https://demosites.io/fashion/',
						'remote_url'       => 'https://api.themeisle.com/sites/fashion/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'            => 'Fashion',
						'keywords'         => [ 'fashion', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4926520/fashion',
					],
					'neve-showcase'              => [
						'url'              => 'https://demosites.io/showcase/',
						'remote_url'       => 'https://api.themeisle.com/sites/showcase/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'            => 'Showcase',
						'keywords'         => [ 'entertainment', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587690/showcase/ed70b13c3a6d1219334f193873aaad61',
					],
					'neve-consultants'           => [
						'url'              => 'https://demosites.io/consultants/',
						'remote_url'       => 'https://api.themeisle.com/sites/consultants/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'            => 'Business Consulting',
						'keywords'         => [ 'business', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8366058/consultants',
					],
					'neve-job-listings'          => [
						'url'              => 'https://demosites.io/job-listings/',
						'remote_url'       => 'https://api.themeisle.com/sites/job-listings/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'            => 'Job Listing',
						'keywords'         => [ 'responsive', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8327271/job-listing',
					],
					'neve-barber-shop'           => [
						'url'              => 'https://demosites.io/barber-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/barber-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'            => 'Barber Shop',
						'keywords'         => [ 'ecommerce', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8357212/barber-shop',
					],
					'neve-personal-traner'       => [
						'url'              => 'https://demosites.io/personal-trainer/',
						'remote_url'       => 'https://api.themeisle.com/sites/personal-trainer/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'            => 'Personal Trainer',
						'keywords'         => [ 'sports', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8351250/personal-trainer/4f469c0cb610352567f5233410c61742',
					],
					'neve-real-estate'           => [
						'url'              => 'https://demosites.io/real-estate/',
						'remote_url'       => 'https://api.themeisle.com/sites/real-estate/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'            => 'Real Estate',
						'keywords'         => [ 'one page', 'business', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8280384/real-estate',
					],
					'neve-events'                => [
						'url'              => 'https://demosites.io/events/',
						'remote_url'       => 'https://api.themeisle.com/sites/events/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'            => 'Events',
						'keywords'         => [ 'entertainment', 'one page', 'event' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8311870/music-events',
					],
					'neve-portrait-photopraphy'  => [
						'url'              => 'https://demosites.io/portrait-photopraphy/',
						'remote_url'       => 'https://api.themeisle.com/sites/portrait-photopraphy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'            => 'Wedding Photography',
						'keywords'         => [ 'photography', 'wedding', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587751/portrait-wedding-photography',
					],
					'neve-photography-portfolio' => [
						'url'              => 'https://demosites.io/photography-portfolio/',
						'remote_url'       => 'https://api.themeisle.com/sites/photography-portfolio/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'            => 'Photography Studio',
						'keywords'         => [ 'photography', 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587698/photography-portfolio',
					],
					'neve-video-agency'          => [
						'url'              => 'https://demosites.io/video-agency/',
						'remote_url'       => 'https://s20206.pcdn.co/video-agency/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'            => 'Video Agency',
						'keywords'         => [ 'photography', 'responsive', 'agency' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4770565/video-agency',
					],
					'neve-furniture-shop'        => [
						'url'              => 'https://demosites.io/furniture-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/furniture-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'            => 'Furniture Shop',
						'keywords'         => [ 'ecommerce', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8527065/furniture-shop',
					],
					'neve-farm'                  => [
						'url'              => 'https://demosites.io/farm/',
						'remote_url'       => 'https://api.themeisle.com/sites/farm/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'            => 'Farm',
						'keywords'         => [ 'food', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8509382/farm',
					],
					'neve-photographer'          => [
						'url'              => 'https://demosites.io/photography/',
						'remote_url'       => 'https://api.themeisle.com/sites/photography/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-photographer.jpg',
						'title'            => 'Photographer',
						'keywords'         => [ 'photography', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8676181/neve-photography/d47fed0fbab045ca4c4636a01fe53c0d',
					],
					'neve-kindergarten'          => [
						'url'              => 'https://demosites.io/kindergarten/',
						'remote_url'       => 'https://api.themeisle.com/sites/kindergarten/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'            => 'Kindergarten',
						'keywords'         => [ 'education', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8606727/kindergarten',
					],
					'neve-florist'               => [
						'url'              => 'https://demosites.io/florist/',
						'remote_url'       => 'https://api.themeisle.com/sites/florist/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-florist.jpg',
						'title'            => 'Florist',
						'keywords'         => [ 'ecommerce', 'flowers', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8715558/neve-florist/f9106cdfcd1a7309bac7c606760d7918',
					],
					'neve-cake-shop'             => [
						'url'              => 'https://demosites.io/cake-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/cake-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cake-shop.jpg',
						'title'            => 'Cake Shop',
						'keywords'         => [ 'ecommerce', 'food' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/7772437/cakery-bakery/5f40022a676873e52e1dc76b113c5915',
					],
					'neve-transport'             => [
						'url'              => 'https://demosites.io/transport/',
						'remote_url'       => 'https://api.themeisle.com/sites/transport/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-transport.jpg',
						'title'            => 'Transport',
						'keywords'         => [ 'travel', 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8333254/logistics',
					],
					'neve-ebook'                 => [
						'url'              => 'https://demosites.io/ebook/',
						'remote_url'       => 'https://api.themeisle.com/sites/ebook/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-ebook.jpg',
						'title'            => 'eBook',
						'keywords'         => [ 'education', 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8687501/neve-ebook/53451c76913e4e176e377c0208e2e755',
					],
					'neve-speed'                 => [
						'url'              => 'https://demosites.io/speed/',
						'remote_url'       => 'https://api.themeisle.com/sites/pro/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'            => 'Speed',
						'keywords'         => [ 'ecommerce', 'business', 'one page', 'responsive', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8698685/neve-pro',
					],
					'neve-food-magazine'         => [
						'url'              => 'https://demosites.io/food-magazine/',
						'remote_url'       => 'https://api.themeisle.com/sites/food-magazine/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-food-magazine.jpg',
						'title'            => 'Food Magazine',
						'keywords'         => [ 'food', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8789337/neve-food-magazine',
					],
					'neve-web-design'            => [
						'url'              => 'https://demosites.io/web-design/',
						'remote_url'       => 'https://api.themeisle.com/sites/web-design/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-web-design.jpg',
						'title'            => 'eCourse - Web Design',
						'keywords'         => [ 'business', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8778651/neve-web-design-course/e3a1b8568395786acef49c20929c5dce',
					],
					'neve-yoga-studio'           => [
						'url'              => 'https://demosites.io/yoga-studio/',
						'remote_url'       => 'https://api.themeisle.com/sites/yoga-studio/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-yoga.jpg',
						'title'            => 'Yoga Studio',
						'keywords'         => [ 'wellness', 'responsive', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8778361/yoga-studio/fd02983f43e4d1b4f9ea9651d1fd8233',
					],
					'neve-sales-funnel'          => [
						'url'              => 'https://demosites.io/sales-funnel/',
						'remote_url'       => 'https://api.themeisle.com/sites/sales-funnel/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'            => 'Sales Funnel',
						'keywords'         => [ 'ecommerce', 'business' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8758788/sales-funnel-1/ce1d2f6de0dab35699688bab193323d0',
					],
					'neve-church'                => [
						'url'              => 'https://demosites.io/church/',
						'remote_url'       => 'https://api.themeisle.com/sites/church/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-church.jpg',
						'title'            => 'Church',
						'keywords'         => [ 'church', 'minimal', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8805198/neve-church/58329104fbc1dd6ea065330ee9749198',
					],
					'neve-fashion-magazine'      => [
						'url'              => 'https://demosites.io/fashion-magazine/',
						'remote_url'       => 'https://api.themeisle.com/sites/fashion-magazine/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
						'title'            => 'Fashion Magazine',
						'keywords'         => [ 'fashion', 'responsive', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8815720/fashion-mag',
					],
					'neve-winery'                => [
						'url'              => 'https://demosites.io/winery/',
						'remote_url'       => 'https://api.themeisle.com/sites/winery/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-winery.png',
						'title'            => 'Winery - Wine Shop',
						'keywords'         => [ 'food', 'ecommerce' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8821407/winery',
					],
					'neve-news-magazine'         => [
						'url'              => 'https://demosites.io/news-magazine/',
						'remote_url'       => 'https://api.themeisle.com/sites/news-magazine/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-news.jpg',
						'title'            => 'News Magazine',
						'keywords'         => [ 'blog', 'minimal', 'news' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8843126/news-magazine/87e04aee675f7288715a01a4c674d2fc',
					],
					'neve-coworking'             => [
						'url'              => 'https://demosites.io/coworking/',
						'remote_url'       => 'https://api.themeisle.com/sites/coworking/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coworking.jpg',
						'title'            => 'Coworking Space',
						'keywords'         => [ 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8820504/coworking/f3c1ba01d1177d2e2c4caa75dbf3066d',
					],
					'neve-fishing-club'          => [
						'url'              => 'https://demosites.io/fishing-club/',
						'remote_url'       => 'https://api.themeisle.com/sites/fishing-club/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fishing.jpg',
						'title'            => 'Fishing and Hunting Club',
						'keywords'         => [ 'sports', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8868787/hunting-and-fishing/6f67a5235958b49102a57b3c9364e5cf',
					],
					'neve-car-rental'            => [
						'url'              => 'https://demosites.io/car-rental/',
						'remote_url'       => 'https://api.themeisle.com/sites/car-rental/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cart-rental.jpg',
						'title'            => 'Car Rental',
						'keywords'         => [ 'car', 'one page', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8826109/car-rental',
					],
					'neve-ski-resort'            => [
						'url'              => 'https://demosites.io/ski-resort/',
						'remote_url'       => 'https://api.themeisle.com/sites/ski-resort/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/sky-resort.jpg',
						'title'            => 'Ski Resort Winter Hotel',
						'keywords'         => [ 'travel', 'sports' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8869398/ski-resort/66f972e2406deafd52d439b5a32f76fd',
					],
					'neve-digital-product'       => [
						'url'              => 'https://demosites.io/digital-product-funnel/',
						'remote_url'       => 'https://api.themeisle.com/sites/digital-product-funnel/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-digital-product.jpg',
						'title'            => 'Digital Product Funnel',
						'keywords'         => [ 'ecommerce', 'business' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8869329/digital-product',
					],
					'neve-moving-company'        => [
						'url'              => 'https://demosites.io/moving-company/',
						'remote_url'       => 'https://api.themeisle.com/sites/moving-company/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-moving-company.jpg',
						'title'            => 'Moving Company Logistics Services',
						'keywords'         => [ 'logistics', 'one page', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8907717/moving-company/9274ab9f8d8de88bcdea5d79598e80e4',
					],
					'neve-translation-services'  => [
						'url'              => 'https://demosites.io/translation-services/',
						'remote_url'       => 'https://api.themeisle.com/sites/translation-services/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-translations.jpg',
						'title'            => 'Translation and Interpreter Services',
						'keywords'         => [ 'responsive', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8903458/translation-services/f2ba08f0cb507af6bb520cd5c9643c5d',
					],
					'neve-coupons'               => [
						'url'              => 'https://demosites.io/coupons/',
						'remote_url'       => 'https://api.themeisle.com/sites/coupons/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-coupons.jpg',
						'title'            => 'Coupons Discounts and Offers',
						'keywords'         => [ 'discount', 'coupons', 'blog', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8936046/neve-coupons/2f70b203a4a269b514f5839826d21f61',
					],
					'neve-escape-room'           => [
						'url'              => 'https://demosites.io/escape-room/',
						'remote_url'       => 'https://api.themeisle.com/sites/escape-room/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-escape-room.jpg',
						'title'            => 'Escape Room',
						'keywords'         => [ 'entertainment', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8924433/escape-room/c3145a3aca8fafa22251b01b280c1dbf',
					],
					'neve-cv'                    => [
						'url'              => 'https://demosites.io/cv/',
						'remote_url'       => 'https://api.themeisle.com/sites/cv/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-resume.jpg',
						'title'            => 'Resume',
						'keywords'         => [ 'blog', 'one page', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8972123/neve-resume-cv/ac3c66b0b032068b43bbd37d8dccbb46',
					],
					'neve-wellness'              => [
						'url'              => 'https://demosites.io/wellness/',
						'remote_url'       => 'https://api.themeisle.com/sites/wellness/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wellness.jpg',
						'title'            => 'Wellness Spa',
						'keywords'         => [ 'wellness', 'responsive', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8924925/wellness-and-spa/8c130f9a4809a74e12a9dfe5d1579af8',
					],
					'neve-courses'               => [
						'url'              => 'https://demosites.io/courses/',
						'remote_url'       => 'https://api.themeisle.com/sites/courses/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-courses.jpg',
						'title'            => 'Online Courses',
						'keywords'         => [ 'education', 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8983337/neve-courses/23700703215f81990fe9ad618b886ae3',
					],
					'neve-model-agency'          => [
						'url'              => 'https://demosites.io/model-agency/',
						'remote_url'       => 'https://api.themeisle.com/sites/model-agency/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-model-agency.jpg',
						'title'            => 'Fashion Model Agency',
						'keywords'         => [ 'fashion', 'agency', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9037292/fashion-agency',
					],
					'neve-it-company'            => [
						'url'              => 'https://demosites.io/it-company/',
						'remote_url'       => 'https://api.themeisle.com/sites/it-company/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-it-solution.jpg',
						'title'            => 'IT Technology Agency',
						'keywords'         => [ 'one page', 'responsive', 'agency' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8907927/it-solutions/5b5c3086b3dcc45a5d3f2c98188e261a',
					],
					'neve-christmas-market'      => [
						'url'              => 'https://demosites.io/christmas-market/',
						'remote_url'       => 'https://api.themeisle.com/sites/christmas-market/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-christmas.jpg',
						'title'            => 'Christmas Market',
						'keywords'         => [ 'entertainment', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8992903/christmas-market/925e60bcf54eed468b3f80adb515008d',
					],
					'neve-podcast'               => [
						'url'              => 'https://demosites.io/podcast/',
						'remote_url'       => 'https://api.themeisle.com/sites/podcast/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-podcast.jpg',
						'title'            => 'Podcast',
						'keywords'         => [ 'blog', 'entertainment', 'education' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8984175/neve-podcast/15ccb231f732a4a157321544c8e771fc',
					],
					'neve-digital-agency'        => [
						'url'              => 'https://demosites.io/digital-agency/',
						'remote_url'       => 'https://api.themeisle.com/sites/digital-agency/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-digital-agency.jpg',
						'title'            => 'Digital Agency',
						'keywords'         => [ 'blog', 'business', 'agency' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9015394/neve-digital-agency/c794fcd505d0ac7fe2134479c3b8f670',
					],
					'neve-industrial'            => [
						'url'              => 'https://demosites.io/industrial/',
						'remote_url'       => 'https://api.themeisle.com/sites/industrial/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-industrial.jpg',
						'title'            => 'Industrial',
						'keywords'         => [ 'minimal', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9025360/neve-industrial',
					],
					'neve-adventure'             => [
						'url'              => 'https://demosites.io/adventure/',
						'remote_url'       => 'https://api.themeisle.com/sites/adventure/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-adventure.jpg',
						'title'            => 'Adventure',
						'keywords'         => [ 'sports', 'one page', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9049522/neve-adventure/760767c5436dbc0b4968749624c496b5',
					],
					'neve-product-launch'        => [
						'url'              => 'https://demosites.io/product-launch/',
						'remote_url'       => 'https://api.themeisle.com/sites/product-launch/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-product-lunch.jpg',
						'title'            => 'Product Launch',
						'keywords'         => [ 'business', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9262386/neve-product-launch/bc5aaed5b8b69da0e4ad8046bf381f7f',
					],
					'neve-accounting'            => [
						'url'              => 'https://demosites.io/accounting/',
						'remote_url'       => 'https://api.themeisle.com/sites/accounting/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-accounting.jpg',
						'title'            => 'Accounting',
						'keywords'         => [ 'one page', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9333537/neve-accounting',
					],
					'neve-beauty-shop'           => [
						'url'              => 'https://demosites.io/beauty-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/beauty-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-beauty-shop.jpg',
						'title'            => 'Beauty Shop',
						'keywords'         => [ 'fashion', 'ecommerce' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9266980/neve-beauty-shop/a63d896725855f02f51bf970c25b41c7',
					],
					'neve-recruitment'           => [
						'url'              => 'https://demosites.io/recruitment/',
						'remote_url'       => 'https://api.themeisle.com/sites/recruitment/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-recruitment.jpg',
						'title'            => 'Recruitment Agency',
						'keywords'         => [ 'minimal', 'agency' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9359902/neve-recruitment',
					],
					'neve-artist'                => [
						'url'              => 'https://demosites.io/artist/',
						'remote_url'       => 'https://api.themeisle.com/sites/artist/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-artist.jpg',
						'title'            => 'Artist',
						'keywords'         => [ 'entertainment', 'blog', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9339397/neve-artist',
					],
					'neve-vr-studio'             => [
						'url'              => 'https://demosites.io/vr-studio/',
						'remote_url'       => 'https://api.themeisle.com/sites/vr-studio/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vr.jpg',
						'title'            => 'VR Studio',
						'keywords'         => [ 'entertainment', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9354886/neve-vr-studio',
					],
					'neve-makeup-artist'         => [
						'url'              => 'https://demosites.io/makeup-artist/',
						'remote_url'       => 'https://api.themeisle.com/sites/makeup-artist/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-makeup.jpg',
						'title'            => 'Makeup Artist',
						'keywords'         => [ 'fashion', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9308448/makeup-artist',
					],
					'neve-diving'                => [
						'url'              => 'https://demosites.io/diving/',
						'remote_url'       => 'https://api.themeisle.com/sites/diving/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-diving.jpg',
						'title'            => 'Scuba Diving',
						'keywords'         => [ 'sports', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9568292/neve-diving/fb3b68f89e22f1466d3b95400af3f12d',
					],
					'neve-wine-bar'              => [
						'url'              => 'https://demosites.io/wine-bar/',
						'remote_url'       => 'https://api.themeisle.com/sites/wine-bar/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/wine-bar.jpg',
						'title'            => 'Wine Bar',
						'keywords'         => [ 'food', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9519955/wine-bar/e47446ef8f67886ed643acee951c1421',
					],
					'neve-mtb-race'              => [
						'url'              => 'https://demosites.io/mtb-race/',
						'remote_url'       => 'https://api.themeisle.com/sites/mtb-race/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-race.jpg',
						'title'            => 'Mountain Biking Race',
						'keywords'         => [ 'sports', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9531208/neve-mtb-race/a58d04599c26e52f5d4f32036374dc32',
					],
					'neve-movie'                 => [
						'url'              => 'https://demosites.io/movie/',
						'remote_url'       => 'https://api.themeisle.com/sites/movie/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-movie.jpg',
						'title'            => 'Movie Showcase',
						'keywords'         => [ 'entertainment', 'education', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9520410/neve-movie/eeccbed16a1ffd4d86845d9c115ad480',
					],
					'neve-running-club'          => [
						'url'              => 'https://demosites.io/running-club/',
						'remote_url'       => 'https://api.themeisle.com/sites/running-club/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-run.jpg',
						'title'            => 'Running Club',
						'keywords'         => [ 'sports', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9463053/neve-running-club/fb0ee6fc8a320a51c737952a5092dde9',
					],
					'neve-jewellery-shop'        => [
						'url'              => 'https://demosites.io/jewellery-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/jewellery-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-jewellery.jpg',
						'title'            => 'Jewellery Shop',
						'keywords'         => [ 'ecommerce', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9394656/neve-jewellery-shop/666f976701a01f90039e2d0ca45f4bbd',
					],
					'neve-car-service'           => [
						'url'              => 'https://demosites.io/car-service/',
						'remote_url'       => 'https://api.themeisle.com/sites/car-service/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-car-service.jpg',
						'title'            => 'Car Vehicle Service',
						'keywords'         => [ 'responsive', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9487947/car-repair',
					],
					'neve-museum'                => [
						'url'              => 'https://demosites.io/museum/',
						'remote_url'       => 'https://api.themeisle.com/sites/museum/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-museum.jpg',
						'title'            => 'Museum',
						'keywords'         => [ 'entertainment', 'education', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9456353/neve-museum/94de9ce18efa4440eb48825deb211d24',
					],
					'neve-exhibition'            => [
						'url'              => 'https://demosites.io/exhibition/',
						'remote_url'       => 'https://api.themeisle.com/sites/exhibition/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-art-expo.jpg',
						'title'            => 'Art Exhibition',
						'keywords'         => [ 'entertainment', 'education', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9339050/neve-exhibition',
					],
					'neve-conference'            => [
						'url'              => 'https://demosites.io/conference/',
						'remote_url'       => 'https://api.themeisle.com/sites/conference/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-conference.jpg',
						'title'            => 'Conference',
						'keywords'         => [ 'entertainment', 'education', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9236647/neve-conference',
					],
					'neve-university'            => [
						'url'              => 'https://demosites.io/university/',
						'remote_url'       => 'https://api.themeisle.com/sites/university/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-university.jpg',
						'title'            => 'University',
						'keywords'         => [ 'education', 'minimal', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9683046/neve-university/81b2d9ae33db8a28c087bed619404626',
					],
					'neve-interior-design'       => [
						'url'              => 'https://demosites.io/interior-design/',
						'remote_url'       => 'https://api.themeisle.com/sites/interior-design/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-interior-design-2.jpg',
						'title'            => 'Interior Design',
						'keywords'         => [ 'responsive', 'blog', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9631913/neve-interior-design/655af3fe67840388345c10f425611721',
					],
					'neve-electronics-store'     => [
						'url'              => 'https://demosites.io/electronics-store/',
						'remote_url'       => 'https://api.themeisle.com/sites/electronics-store/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-electronics.jpg',
						'title'            => 'Electronics Shop',
						'keywords'         => [ 'ecommerce', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9614226/neve-electronics-store/bc776b1b1a8eeb5e9a91e0bdcefef919',
					],
					'neve-print-shop'            => [
						'url'              => 'https://demosites.io/print-shop/',
						'remote_url'       => 'https://api.themeisle.com/sites/print-shop/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-print.jpg',
						'title'            => 'Print Shop',
						'keywords'         => [ 'ecommerce', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9581663/neve-print-shop/7e3ada6f4ff6c2ea85e92a31b0a0d308',
					],
					'neve-city-tour'             => [
						'url'              => 'https://demosites.io/city-tour/',
						'remote_url'       => 'https://api.themeisle.com/sites/city-tour/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-city-tour.jpg',
						'title'            => 'City Tours',
						'keywords'         => [ 'entertainment', 'responsive', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9607249/neve-city-tour/8c25fd0bd662a8c0311be4b114be52ac',
					],
					'neve-insurance'             => [
						'url'              => 'https://demosites.io/insurance/',
						'remote_url'       => 'https://api.themeisle.com/sites/insurance/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-insurance.jpg',
						'title'            => 'Insurance',
						'keywords'         => [ 'business', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9556177/neve-insurance/7133d31d3dfa101e65ec96a865761e9b',
					],
					'neve-personal-blog'         => [
						'url'              => 'https://demosites.io/personal-blog/',
						'remote_url'       => 'https://api.themeisle.com/sites/personal-blog/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-blog.jpg',
						'title'            => 'Personal Blog',
						'keywords'         => [ 'blog', 'minimal', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9633204/neve-personal-blog/236da7a7ec4aaba3f8de60b4b10ab1a7',
					],
					'neve-travel-blog'           => [
						'url'              => 'https://demosites.io/travel-blog/',
						'remote_url'       => 'https://api.themeisle.com/sites/travel-blog/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-travel-blog.jpg',
						'title'            => 'Travel Blog',
						'keywords'         => [ 'travel', 'blog', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9768330/neve-travel-blog/c5d2a7747789c057876483a4dff2dc7b',
					],
					'neve-dj'                    => [
						'url'              => 'https://demosites.io/dj/',
						'remote_url'       => 'https://api.themeisle.com/sites/dj/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-dj.jpg',
						'title'            => 'DJ',
						'keywords'         => [ 'entertainment', 'music' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9723476/neve-dj/0bc2b891c597aed047d6274fc70452e4',
					],
					'neve-tech-lab'              => [
						'url'              => 'https://demosites.io/tech-lab/',
						'remote_url'       => 'https://api.themeisle.com/sites/tech-lab/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-tech.jpg',
						'title'            => 'Tech Lab',
						'keywords'         => [ 'business', 'responsive', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9706216/tech-lab/6fd056cd21716c9e2257acd99cc107eb',
					],
					'neve-equitation'            => [
						'url'              => 'https://demosites.io/equitation/',
						'remote_url'       => 'https://api.themeisle.com/sites/equitation/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-horses.jpg',
						'title'            => 'Equitation',
						'keywords'         => [ 'sports', 'responsive', 'horse' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9656821/neve-horse-riding/37daf600916343291b06efb64e4d091c',
					],
					'neve-restaurant-2'          => [
						'url'              => 'https://demosites.io/restaurant-2/',
						'remote_url'       => 'https://api.themeisle.com/sites/restaurant-2/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-restaurant-2.jpg',
						'title'            => 'Restaurant 2',
						'keywords'         => [ 'food', 'ecommerce', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9681752/neve---restaurant-2',
					],
					'neve-copywriter'            => [
						'url'              => 'https://demosites.io/copywriter/',
						'remote_url'       => 'https://api.themeisle.com/sites/copywriter/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-copyright.jpg',
						'title'            => 'Copywriter',
						'keywords'         => [ 'one page', 'blog' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/10013340/neve-copywriter/fd20236454382b25cb11c4a5ea8b9f67',
					],
					'neve-laundry-services'      => [
						'url'              => 'https://demosites.io/laundry-services/',
						'remote_url'       => 'https://api.themeisle.com/sites/laundry-services/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-laundry.jpg',
						'title'            => 'Laundry Services',
						'keywords'         => [ 'one page', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/10086441/laundry-services/cbcb238e92c3d628f5ff17343cf71f33',
					],
					'neve-craft-beer'            => [
						'url'              => 'https://demosites.io/craft-beer/',
						'remote_url'       => 'https://api.themeisle.com/sites/craft-beer/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-craft-beer.jpg',
						'title'            => 'Craft Beer',
						'keywords'         => [ 'food', 'ecommerce' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/10064967/craft-beer/d0feeb4e9b047f25963f93bb6f548003',
					],
					'neve-gardening'             => [
						'url'              => 'https://demosites.io/gardening/',
						'remote_url'       => 'https://api.themeisle.com/sites/gardening/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-gardening.jpg',
						'title'            => 'Gardening',
						'keywords'         => [ 'one page', 'ecommerce' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/9993072/neve-gardening/d87f7fb075b4df6caa580427e4bf99cd',
					],
					'neve-resume-2'              => [
						'url'              => 'https://demosites.io/resume/',
						'remote_url'       => 'https://api.themeisle.com/sites/resume/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-resume-2.jpg',
						'title'            => 'Resume 2',
						'keywords'         => [ 'responsive', 'business' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/10442260/resume/0d0bb885aef689075600517be914fae5',
					],
				],
				'brizy'            => [
					'neve-brizy-cafe'                 => [
						'url'              => 'https://demosites.io/cafe-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/cafe-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'            => 'Coffee Shop',
						'keywords'         => [ 'food', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587666/cafe',
					],
					'neve-brizy-constructions'        => [
						'url'              => 'https://demosites.io/constructions-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/constructions-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'            => 'Constructions Company',
						'keywords'         => [ 'one page', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4847783/construction',
					],
					'neve-brizy-fashion'              => [
						'url'              => 'https://demosites.io/fashion-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/fashion-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'            => 'Fashion',
						'keywords'         => [ 'fashion', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4926520/fashion',
					],
					'neve-brizy-showcase'             => [
						'url'              => 'https://demosites.io/showcase-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/showcase-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'            => 'Showcase',
						'keywords'         => [ 'entertainment', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587690/showcase/ed70b13c3a6d1219334f193873aaad61',
					],
					'neve-brizy-consultants'          => [
						'url'              => 'https://demosites.io/consultants-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/consultants-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'            => 'Business Consulting',
						'keywords'         => [ 'business', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8366058/consultants',
					],
					'neve-brizy-job-listings'         => [
						'url'              => 'https://demosites.io/job-listings-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/job-listings-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'            => 'Job Listing',
						'keywords'         => [ 'responsive', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8327271/job-listing',
					],
					'neve-brizy-barber-shop'          => [
						'url'              => 'https://demosites.io/barber-shop-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/barber-shop-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'            => 'Barber Shop',
						'keywords'         => [ 'ecommerce', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8357212/barber-shop',
					],
					'neve-brizy-personal-trainer'     => [
						'url'              => 'https://demosites.io/personal-trainer-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/personal-trainer-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'            => 'Personal Trainer',
						'keywords'         => [ 'sports', 'one page' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8351250/personal-trainer/4f469c0cb610352567f5233410c61742',
					],
					'neve-brizy-real-estate'          => [
						'url'              => 'https://demosites.io/real-estate-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/real-estate-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'            => 'Real Estate',
						'keywords'         => [ 'one page', 'business', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8280384/real-estate',
					],
					'neve-brizy-events'               => [
						'url'              => 'https://demosites.io/events-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/events-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-events.jpg',
						'title'            => 'Events',
						'keywords'         => [ 'entertainment', 'one page', 'event' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8311870/music-events',
					],
					'neve-brizy-portrait-photopraphy' => [
						'url'              => 'https://demosites.io/portrait-photography-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/portrait-photography-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'            => 'Wedding Photography',
						'keywords'         => [ 'photography', 'wedding', 'minimal' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/4587751/portrait-wedding-photography',
					],
					'neve-brizy-furniture-shop'       => [
						'url'              => 'https://demosites.io/furniture-shop-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/furniture-shop-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'            => 'Furniture Shop',
						'keywords'         => [ 'ecommerce', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8527065/furniture-shop',
					],
					'neve-brizy-farm'                 => [
						'url'              => 'https://demosites.io/farm-brizy/',
						'remote_url'       => 'https://api.themeisle.com/sites/farm-brizy/',
						'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'            => 'Farm',
						'keywords'         => [ 'food', 'responsive' ],
						'unsplash_gallery' => 'https://unsplash.com/collections/8509382/farm',
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

		return apply_filters( 'neve_filter_onboarding_sites', $this->onboarding_config );
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
			'neve-showcase-gutenberg'         => [
				'url'              => 'https://demosites.io/showcase-gb/',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-showcase-new.jpg',
				'title'            => 'Showcase',
				'keywords'         => [ 'entertainment', 'minimal' ],
				'unsplash_gallery' => 'https://unsplash.com/collections/4587690/showcase/ed70b13c3a6d1219334f193873aaad61',
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
			'neve-barber-shop-gutenberg'      => [
				'url'              => 'https://demosites.io/barber-shop-gb/',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-barber-shop.jpg',
				'title'            => 'Barber Shop',
				'keywords'         => [ 'ecommerce', 'responsive' ],
				'unsplash_gallery' => 'https://unsplash.com/collections/8357212/barber-shop',
			],
			'neve-personal-trainer-gutenberg' => [
				'url'              => 'https://demosites.io/personal-trainer-gb/',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
				'title'            => 'Personal Trainer',
				'keywords'         => [ 'sports', 'one page' ],
				'unsplash_gallery' => 'https://unsplash.com/collections/8351250/personal-trainer/4f469c0cb610352567f5233410c61742',
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
			'neve-video-agency-gutenberg'     => [
				'url'              => 'https://demosites.io/video-agency-gb/',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-vide-agency.jpg',
				'title'            => 'Video Agency',
				'keywords'         => [ 'photography', 'responsive', 'agency' ],
				'unsplash_gallery' => 'https://unsplash.com/collections/4770565/video-agency',
			],
			'neve-farm-gutenberg'             => [
				'url'              => 'https://demosites.io/farm-gb/',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-farm.jpg',
				'title'            => 'Farm',
				'keywords'         => [ 'food', 'responsive' ],
				'unsplash_gallery' => 'https://unsplash.com/collections/8509382/farm',
			],
			'neve-cake-shop-gutenberg'        => [
				'url'              => 'https://demosites.io/cakeshop-gb/',
				'screenshot'       => 'https://api.themeisle.com/sites/wp-content/uploads/2020/05/neve-cake-shop.jpg',
				'title'            => 'Cake Shop',
				'keywords'         => [ 'ecommerce', 'food' ],
				'unsplash_gallery' => 'https://unsplash.com/collections/7772437/cakery-bakery/5f40022a676873e52e1dc76b113c5915',
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
