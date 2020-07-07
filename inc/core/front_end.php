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
		add_action( 'init', [ $this, 'add_sites_library_support' ] );
		$this->add_woo_support();
	}

	/**
	 * Adds sites library support.
	 */
	public function add_sites_library_support() {
		add_theme_support( 'themeisle-demo-import', $this->get_ti_demo_content_support_data() );
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
		$upsell_status = $this->get_upsell_status();

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
				'elementor'        => [
					'neve-main'                  => [
						'url'        => 'https://demosites.io/onboarding/',
						'remote_url' => 'https://api.themeisle.com/sites/onboarding/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:onboarding/wp-content/uploads/2020/05/neve-original.png',
						'title'      => 'Original',
						'keywords'   => [ 'business', 'woocommerce', 'consulting', 'product', 'creative', 'design' ],
					],
					'neve-web-agency'            => [
						'url'        => 'https://demosites.io/web-agency/',
						'remote_url' => 'https://api.themeisle.com/sites/web-agency/',
						'title'      => 'Web Agency',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:web-agency/wp-content/uploads/2020/05/neve-web-agency-all-new.png',
						'keywords'   => [ 'business', 'portfolio', 'services', 'product', 'agency', 'creative', 'photography' ],
					],
					'neve-blogger'               => [
						'url'        => 'https://demosites.io/blogger/',
						'remote_url' => 'https://api.themeisle.com/sites/blogger/',
						'title'      => 'Blogger',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:blogger/wp-content/uploads/2020/05/neve-blogger.jpg',
						'keywords'   => [ 'services', 'resume', 'blog', 'CV', 'creative', 'magazine', 'writing', 'author' ],
					],
					'neve-restaurant'            => [
						'url'        => 'https://demosites.io/restaurant/',
						'remote_url' => 'https://api.themeisle.com/sites/restaurant/',
						'title'      => 'Restaurant',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:restaurant/wp-content/uploads/2020/05/screenshot.png',
						'keywords'   => [ 'business', 'other', 'restaurant', 'venue', 'coffee', 'dining', 'family' ],
					],
					'neve-charity'               => [
						'url'        => 'https://demosites.io/charity/',
						'remote_url' => 'https://api.themeisle.com/sites/charity/',
						'title'      => 'Charity',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:charity/wp-content/uploads/2020/05/screenshot-1.png',
						'keywords'   => [ 'other', 'donation', 'charity', 'non-profit' ],
					],
					'neve-vet-center'            => [
						'url'        => 'https://demosites.io/vet-center/',
						'remote_url' => 'https://api.themeisle.com/sites/vet-center/',
						'title'      => 'Vet Center',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:vet-center/wp-content/uploads/2020/05/screenshot-2.png',
						'keywords'   => [ 'business', 'other', 'pet', 'doctor', 'clinic', 'medical', 'health', 'animal' ],
					],
					'neve-doctors'               => [
						'url'        => 'https://demosites.io/doctors/',
						'remote_url' => 'https://api.themeisle.com/sites/doctors/',
						'title'      => 'Doctors',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:doctors/wp-content/uploads/2020/05/screenshot-3.png',
						'keywords'   => [ 'medical', 'other', 'doctor', 'beauty', 'fitness', 'sports', 'clinic' ],
					],
					'neve-architecture'          => [
						'url'        => 'https://demosites.io/architecture/',
						'remote_url' => 'https://api.themeisle.com/sites/architecture/',
						'title'      => 'Architecture',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:architecture/wp-content/uploads/2020/05/screenshot-4.png',
						'keywords'   => [ 'business', 'portfolio', 'architect', 'consulting', 'corporate', 'garden', 'creative', 'design', 'home', 'building' ],
					],
					'neve-fitness'               => [
						'url'        => 'https://demosites.io/fitness/',
						'remote_url' => 'https://api.themeisle.com/sites/fitness/',
						'title'      => 'Fitness',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fitness/wp-content/uploads/2020/05/screenshot-5.png',
						'keywords'   => [ 'business', 'other', 'fitness', 'gym', 'consulting', 'health', 'medical' ],
					],
					'neve-vacation-rental'       => [
						'url'        => 'https://demosites.io/vacation-rental/',
						'remote_url' => 'https://api.themeisle.com/sites/vacation-rental/',
						'title'      => 'Vacation Rental',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:vacation-rental/wp-content/uploads/2020/05/screenshot-6.png',
						'keywords'   => [ 'business', 'portfolio', 'other', 'sea', 'boat', 'marine', 'summer', 'travel', 'tourist', 'magazine', 'wellness', 'venue', 'listing', 'event', 'architect', 'home', 'building', 'rental' ],
					],
					'neve-music-band'            => [
						'url'        => 'https://demosites.io/music-band/',
						'remote_url' => 'https://api.themeisle.com/sites/music-band/',
						'title'      => 'Music Band',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:music-band/wp-content/uploads/2020/05/screenshot-7.png',
						'keywords'   => [ 'other', 'portfolio', 'music', 'DJ', 'creative', 'artist', 'sound', 'technology' ],
					],
					'neve-wedding'               => [
						'url'        => 'https://demosites.io/wedding/',
						'remote_url' => 'https://api.themeisle.com/sites/wedding/',
						'title'      => 'Wedding',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:wedding/wp-content/uploads/2020/05/screenshot.jpg',
						'keywords'   => [ 'other', 'wedding', 'invitation', 'event' ],
					],
					'neve-themotion'             => [
						'url'        => 'https://demosites.io/themotion/',
						'remote_url' => 'https://api.themeisle.com/sites/themotion/',
						'title'      => 'Video Blog',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:themotion/wp-content/uploads/2020/05/screenshot-1.jpg',
						'keywords'   => [ 'blog', 'author', 'design', 'clean', 'magazine' ],
					],
					'neve-amadeus'               => [
						'url'        => 'https://demosites.io/amadeus/',
						'remote_url' => 'https://api.themeisle.com/sites/amadeus/',
						'title'      => 'Music Teacher',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:amadeus/wp-content/uploads/2020/05/screenshot-2.jpg',
						'keywords'   => [ 'portfolio', 'personal', 'music', 'event', 'creative', 'sound', 'artist', 'listing', 'author', 'writing' ],
					],
					'neve-oblique'               => [
						'url'        => 'https://demosites.io/oblique/',
						'remote_url' => 'https://api.themeisle.com/sites/oblique/',
						'title'      => 'Vintage',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:oblique/wp-content/uploads/2020/05/screenshot-3.jpg',
						'keywords'   => [ 'blog', 'fashion', 'magazine', 'author', 'writing', 'beauty' ],
					],
					'neve-rokophoto'             => [
						'url'        => 'https://demosites.io/rokophoto/',
						'remote_url' => 'https://api.themeisle.com/sites/rokophoto/',
						'title'      => 'Photography',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:rokophoto/wp-content/uploads/2020/05/screenshot-4.jpg',
						'keywords'   => [ 'photography', 'portfolio', 'services', 'creative', 'magazine' ],
					],
					'neve-energy-panels'         => [
						'url'        => 'https://demosites.io/energy-panels/',
						'remote_url' => 'https://api.themeisle.com/sites/energy-panels/',
						'title'      => 'Energy Panels',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:energy-panels/wp-content/uploads/2020/05/screenshot-5.jpg',
						'keywords'   => [ 'business', 'other', 'energy', 'solar', 'power', 'corporate', 'consulting', 'services', 'clean' ],
					],
					'neve-lawyers'               => [
						'url'        => 'https://demosites.io/lawyers/',
						'remote_url' => 'https://api.themeisle.com/sites/lawyers/',
						'title'      => 'Lawyers',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:lawyers/wp-content/uploads/2020/05/screenshot-6.jpg',
						'keywords'   => [ 'business', 'law', 'consulting', 'corporate', 'services', 'financial', 'writing', 'book' ],
					],
					'neve-freelancer'            => [
						'url'        => 'https://demosites.io/freelancer/',
						'remote_url' => 'https://api.themeisle.com/sites/freelancer/',
						'title'      => 'Freelancer',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:freelancer/wp-content/uploads/2020/05/screenshot-7.jpg',
						'keywords'   => [ 'portfolio', 'personal', 'consulting', 'services', 'product', 'CV', 'resume', 'artist', 'creative', 'developer' ],
					],
					'neve-shop'                  => [
						'url'        => 'https://demosites.io/shop/',
						'remote_url' => 'https://api.themeisle.com/sites/shop/',
						'title'      => 'Shop',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:shop/wp-content/uploads/2020/05/screenshot-8.png',
						'keywords'   => [ 'woocommerce', 'clothing', 'apparel', 'corporate', 'creative', 'beauty', 'wellness', 'magazine', 'fashion' ],
					],
					'neve-tattoo'                => [
						'url'        => 'https://demosites.io/tatoo/',
						'remote_url' => 'https://api.themeisle.com/sites/tatoo/',
						'title'      => 'Tattoo',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:tatoo/wp-content/uploads/2020/05/screenshot-8.jpg',
						'keywords'   => [ 'portfolio', 'personal', 'artist', 'medical', 'tattoo', 'beauty', 'creative' ],
					],
					'neve-zelle'                 => [
						'url'        => 'https://demosites.io/zelle/',
						'remote_url' => 'https://api.themeisle.com/sites/zelle/',
						'title'      => 'Travel Agency',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:zelle/wp-content/uploads/2020/05/screenshot-9.jpg',
						'keywords'   => [ 'business', 'blog', 'other', 'travel', 'tourist', 'magazine', 'writing', 'author', 'fitness', 'sports', 'nature' ],
					],
					'neve-life-coach'            => [
						'url'        => 'https://demosites.io/scholar/',
						'remote_url' => 'https://api.themeisle.com/sites/scholar/',
						'title'      => 'Life Coach',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:scholar/wp-content/uploads/2020/05/screenshot-10.jpg',
						'keywords'   => [ 'business', 'personal', 'blog', 'fitness', 'medical', 'health', 'consulting', 'services', 'family', 'instructor', 'coaching' ],
					],
					'neve-creative-portfolio'    => [
						'url'        => 'https://demosites.io/creative-portfolio/',
						'remote_url' => 'https://api.themeisle.com/sites/creative-portfolio/',
						'title'      => 'Creative Portfolio',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:creative-portfolio/wp-content/uploads/2020/05/screenshot-11.jpg',
						'keywords'   => [ 'portfolio', 'services', 'product', 'creative', 'technology', 'design' ],
					],
					'neve-fitness-trainer'       => [
						'url'        => 'https://demosites.io/fitness-trainer/',
						'remote_url' => 'https://api.themeisle.com/sites/fitness-trainer/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fitness-trainer/wp-content/uploads/2020/05/neve-trainer.jpg',
						'title'      => 'Fitness Trainer',
						'keywords'   => [ 'business', 'other', 'fitness', 'gym', 'consulting', 'health', 'medical' ],
					],
					'neve-band'                  => [
						'url'        => 'https://demosites.io/band/',
						'remote_url' => 'https://api.themeisle.com/sites/band/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:band/wp-content/uploads/2020/05/neve-band.jpg',
						'title'      => 'Music Band 2',
						'keywords'   => [ 'personal', 'other', 'creative', 'music', 'artist', 'sound' ],
					],
					'neve-perfume-shop'          => [
						'url'        => 'https://demosites.io/perfume-shop/',
						'remote_url' => 'https://api.themeisle.com/sites/perfume-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:perfume-shop/wp-content/uploads/2020/05/neve-perfume-big.jpg',
						'title'      => 'Perfume Shop',
						'keywords'   => [ 'woocommerce', 'business', 'beauty', 'apparel', 'clothing', 'health' ],
					],
					'neve-jewellery-2'           => [
						'url'        => 'https://demosites.io/jewellery/',
						'remote_url' => 'https://api.themeisle.com/sites/jewellery/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:jewellery/wp-content/uploads/2020/05/neve-jewellery-2.jpg',
						'title'      => 'Jewellery Shop 2',
						'keywords'   => [ 'woocommerce', 'clothing', 'apparel', 'jewellery', 'beauty' ],
					],
					'neve-boat-rental'           => [
						'url'        => 'https://demosites.io/boat-rental/',
						'remote_url' => 'https://api.themeisle.com/sites/boat-rental/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:boat-rental/wp-content/uploads/2020/05/neve-boat.jpg',
						'title'      => 'Boat Rental',
						'keywords'   => [ 'sea', 'other', 'business', 'woocommerce', 'rental', 'boat', 'marine' ],
					],
					'neve-apparel'               => [
						'url'        => 'https://demosites.io/apparel/',
						'remote_url' => 'https://api.themeisle.com/sites/apparel/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:apparel/wp-content/uploads/2020/05/neve-apparel.jpg',
						'title'      => 'Apparel',
						'keywords'   => [ 'fashion', 'clothing', 'woocommerce', 'magazine', 'sports' ],
					],
					'neve-pet-shop'              => [
						'url'        => 'https://demosites.io/pet-shop/',
						'remote_url' => 'https://api.themeisle.com/sites/pet-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:pet-shop/wp-content/uploads/2020/05/neve-pet.jpg',
						'title'      => 'Pet Shop',
						'keywords'   => [ 'medical', 'woocommerce', 'business', 'health', 'green', 'pet', 'animal', 'product' ],
					],
					'neve-doctor'                => [
						'url'        => 'https://demosites.io/doctor/',
						'remote_url' => 'https://api.themeisle.com/sites/doctor/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:doctor/wp-content/uploads/2020/05/neve-doctors-2.jpg',
						'title'      => 'Doctors 2',
						'keywords'   => [ 'medical', 'other', 'doctor', 'beauty', 'fitness', 'sports', 'clinic' ],
					],
					'neve-psychologist'          => [
						'url'        => 'https://demosites.io/psychologist/',
						'remote_url' => 'https://api.themeisle.com/sites/psychologist/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:psychologist/wp-content/uploads/2020/05/neve-psychologist.jpg',
						'title'      => 'Psychologist',
						'keywords'   => [ 'other', 'fitness', 'medical', 'consulting', 'health', 'doctor' ],
					],
					'neve-book-shop'             => [
						'url'        => 'https://demosites.io/book-shop/',
						'remote_url' => 'https://api.themeisle.com/sites/book-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:book-shop/wp-content/uploads/2020/05/neve-book.jpg',
						'title'      => 'Book Shop',
						'keywords'   => [ 'woocommerce', 'education', 'book', 'product', 'magazine' ],
					],
					'neve-cafe'                  => [
						'url'        => 'https://demosites.io/cafe/',
						'remote_url' => 'https://api.themeisle.com/sites/cafe/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:cafe/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
						'keywords'   => [ 'business', 'coffee', 'store', 'venue', 'product', 'dining', 'services' ],
						'upsell'     => $upsell_status,
					],
					'neve-constructions'         => [
						'url'        => 'https://demosites.io/constructions/',
						'remote_url' => 'https://api.themeisle.com/sites/constructions/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:constructions/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'      => 'Constructions Company',
						'keywords'   => [ 'business', 'corporate', 'building', 'home', 'architect' ],
						'upsell'     => $upsell_status,
					],
					'neve-fashion'               => [
						'url'        => 'https://demosites.io/fashion/',
						'remote_url' => 'https://api.themeisle.com/sites/fashion/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fashion/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
						'keywords'   => [ 'blog', 'apparel', 'clothing', 'magazine', 'beauty', 'wellness', 'design', 'writing', 'author' ],
						'upsell'     => $upsell_status,
					],
					'neve-showcase'              => [
						'url'        => 'https://demosites.io/showcase/',
						'remote_url' => 'https://api.themeisle.com/sites/showcase/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:showcase/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
						'keywords'   => [ 'portfolio', 'personal', 'blog', 'corporate', 'services', 'agency', 'creative', 'photography' ],
						'upsell'     => $upsell_status,
					],
					'neve-consultants'           => [
						'url'        => 'https://demosites.io/consultants/',
						'remote_url' => 'https://api.themeisle.com/sites/consultants/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:consultants/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
						'keywords'   => [ 'business', 'portfolio', 'consulting', 'corporate', 'services', 'law', 'financial' ],
						'upsell'     => $upsell_status,
					],
					'neve-job-listings'          => [
						'url'        => 'https://demosites.io/job-listings/',
						'remote_url' => 'https://api.themeisle.com/sites/job-listings/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:job-listings/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
						'keywords'   => [ 'business', 'portfolio', 'CV', 'job', 'consulting', 'corporate', 'services', 'magazine', 'membership', 'listing' ],
						'upsell'     => $upsell_status,
					],
					'neve-barber-shop'           => [
						'url'        => 'https://demosites.io/barber-shop/',
						'remote_url' => 'https://api.themeisle.com/sites/barber-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:barber-shop/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
						'keywords'   => [ 'business', 'barber', 'hair', 'services', 'beauty', 'wellness', 'store' ],
						'upsell'     => $upsell_status,
					],
					'neve-personal-traner'       => [
						'url'        => 'https://demosites.io/personal-trainer/',
						'remote_url' => 'https://api.themeisle.com/sites/personal-trainer/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:personal-trainer/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
						'keywords'   => [ 'portfolio', 'personal', 'fitness', 'sports', 'consulting', 'medical', 'health', 'membership', 'instructor' ],
						'upsell'     => $upsell_status,
					],
					'neve-real-estate'           => [
						'url'        => 'https://demosites.io/real-estate/',
						'remote_url' => 'https://api.themeisle.com/sites/real-estate/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:real-estate/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
						'keywords'   => [ 'other', 'business', 'home', 'architect', 'building', 'membership', 'venue', 'magazine', 'financial', 'services', 'consulting', 'corporate', 'listing' ],
						'upsell'     => $upsell_status,
					],
					'neve-events'                => [
						'url'        => 'https://demosites.io/events/',
						'remote_url' => 'https://api.themeisle.com/sites/events/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:events/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
						'keywords'   => [ 'business', 'other', 'event', 'listing', 'tourist', 'travel', 'magazine', 'artist' ],
						'upsell'     => $upsell_status,
					],
					'neve-portrait-photopraphy'  => [
						'url'        => 'https://demosites.io/portrait-photopraphy/',
						'remote_url' => 'https://api.themeisle.com/sites/portrait-photopraphy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:portrait-photopraphy/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
						'keywords'   => [ 'photography', 'wedding', 'minimal' ],
						'upsell'     => $upsell_status,
					],
					'neve-photography-portfolio' => [
						'url'        => 'https://demosites.io/photography-portfolio/',
						'remote_url' => 'https://api.themeisle.com/sites/photography-portfolio/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:photography-portfolio/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
						'keywords'   => [ 'photography', 'other', 'portfolio', 'services', 'product', 'creative', 'artist', 'magazine', 'design' ],
						'upsell'     => $upsell_status,
					],
					'neve-video-agency'          => [
						'url'        => 'https://demosites.io/video-agency/',
						'remote_url' => 'https://api.themeisle.com/sites/video-agency/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:video-agency/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
						'keywords'   => [ 'other', 'portfolio', 'video', 'agency', 'consulting', 'services', 'creative', 'artist', 'technology' ],
						'upsell'     => $upsell_status,
					],
					'neve-furniture-shop'        => [
						'url'        => 'https://demosites.io/furniture-shop/',
						'remote_url' => 'https://api.themeisle.com/sites/furniture-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:furniture-shop/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
						'keywords'   => [ 'business', 'portfolio', 'product', 'services', 'furniture', 'architect', 'building' ],
						'upsell'     => $upsell_status,
					],
					'neve-farm'                  => [
						'url'        => 'https://demosites.io/farm/',
						'remote_url' => 'https://api.themeisle.com/sites/farm/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:farm/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
						'keywords'   => [ 'other', 'health', 'food', 'green', 'garden', 'wellness', 'membership', 'home', 'family', 'nature' ],
						'upsell'     => $upsell_status,
					],
					'neve-photographer'          => [
						'url'        => 'https://demosites.io/photography/',
						'remote_url' => 'https://api.themeisle.com/sites/photography/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:photography/wp-content/uploads/2020/05/neve-photographer.jpg',
						'title'      => 'Photographer',
						'keywords'   => [ 'photography', 'other', 'portfolio', 'agency', 'services', 'artist', 'creative', 'design' ],
						'upsell'     => $upsell_status,
					],
					'neve-kindergarten'          => [
						'url'        => 'https://demosites.io/kindergarten/',
						'remote_url' => 'https://api.themeisle.com/sites/kindergarten/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:kindergarten/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
						'keywords'   => [ 'other', 'school', 'kids', 'membership', 'coaching', 'instructor', 'family', 'education' ],
						'upsell'     => $upsell_status,
					],
					'neve-florist'               => [
						'url'        => 'https://demosites.io/florist/',
						'remote_url' => 'https://api.themeisle.com/sites/florist/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:florist/wp-content/uploads/2020/05/neve-florist.jpg',
						'title'      => 'Florist',
						'keywords'   => [ 'business', 'other', 'services', 'product', 'green', 'garden', 'wellness', 'nature', 'flower', 'shop' ],
						'upsell'     => $upsell_status,
					],
					'neve-cake-shop'             => [
						'url'        => 'https://demosites.io/cake-shop/',
						'remote_url' => 'https://api.themeisle.com/sites/cake-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:cake-shop/wp-content/uploads/2020/05/neve-cake-shop.jpg',
						'title'      => 'Cake Shop',
						'keywords'   => [ 'other', 'business', 'shop', 'food', 'product', 'store' ],
						'upsell'     => $upsell_status,
					],
					'neve-transport'             => [
						'url'        => 'https://demosites.io/transport/',
						'remote_url' => 'https://api.themeisle.com/sites/transport/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:transport/wp-content/uploads/2020/05/neve-transport.jpg',
						'title'      => 'Transport',
						'keywords'   => [ 'business', 'corporate', 'consulting', 'services', 'product', 'technology', 'transportation', 'logistics' ],
						'upsell'     => $upsell_status,
					],
					'neve-ebook'                 => [
						'url'        => 'https://demosites.io/ebook/',
						'remote_url' => 'https://api.themeisle.com/sites/ebook/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:ebook/wp-content/uploads/2020/05/neve-ebook.jpg',
						'title'      => 'eBook',
						'keywords'   => [ 'other', 'book', 'e-book', 'product', 'creative', 'shop' ],
						'upsell'     => $upsell_status,
					],
					'neve-speed'                 => [
						'url'        => 'https://demosites.io/speed/',
						'remote_url' => 'https://api.themeisle.com/sites/speed/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:speed/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'      => 'Speed',
						'keywords'   => [ 'portfolio', 'business', 'woocommerce', 'consulting', 'corporate', 'creative', 'magazine', 'technology' ],
						'upsell'     => $upsell_status,
					],
					'neve-food-magazine'         => [
						'url'        => 'https://demosites.io/food-magazine/',
						'remote_url' => 'https://api.themeisle.com/sites/food-magazine/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:food-magazine/wp-content/uploads/2020/05/neve-food-magazine.jpg',
						'title'      => 'Food Magazine',
						'keywords'   => [ 'food', 'blog', 'magazine', 'green', 'garden', 'product', 'author', 'writing', 'dining' ],
						'upsell'     => $upsell_status,
					],
					'neve-web-design'            => [
						'url'        => 'https://demosites.io/web-design/',
						'remote_url' => 'https://api.themeisle.com/sites/web-design/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:web-design/wp-content/uploads/2020/05/neve-web-design.jpg',
						'title'      => 'eCourse - Web Design',
						'keywords'   => [ 'other', 'consulting', 'courses', 'services', 'product', 'sales', 'marketing' ],
						'upsell'     => $upsell_status,
					],
					'neve-yoga-studio'           => [
						'url'        => 'https://demosites.io/yoga-studio/',
						'remote_url' => 'https://api.themeisle.com/sites/yoga-studio/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:yoga-studio/wp-content/uploads/2020/05/neve-yoga.jpg',
						'title'      => 'Yoga Studio',
						'keywords'   => [ 'wellness', 'portfolio', 'other', 'fitness', 'yoga', 'health', 'courses' ],
						'upsell'     => $upsell_status,
					],
					'neve-sales-funnel'          => [
						'url'        => 'https://demosites.io/sales-funnel/',
						'remote_url' => 'https://api.themeisle.com/sites/sales-funnel/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:sales-funnel/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'      => 'Sales Funnel',
						'keywords'   => [ 'other', 'education', 'courses', 'consulting', 'product', 'creative', 'sales', 'marketing' ],
						'upsell'     => $upsell_status,
					],
					'neve-church'                => [
						'url'        => 'https://demosites.io/church/',
						'remote_url' => 'https://api.themeisle.com/sites/church/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:church/wp-content/uploads/2020/05/neve-church.jpg',
						'title'      => 'Church',
						'keywords'   => [ 'church', 'other', 'spiritual', 'faith', 'sermon', 'wedding' ],
						'upsell'     => $upsell_status,
					],
					'neve-fashion-magazine'      => [
						'url'        => 'https://demosites.io/fashion-magazine/',
						'remote_url' => 'https://api.themeisle.com/sites/fashion-magazine/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fashion-magazine/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
						'title'      => 'Fashion Magazine',
						'keywords'   => [ 'fashion', 'blog', 'personal', 'apparel', 'clothing', 'product', 'artist', 'magazine', 'beauty', 'wellness', 'jewellery' ],
						'upsell'     => $upsell_status,
					],
					'neve-winery'                => [
						'url'        => 'https://demosites.io/winery/',
						'remote_url' => 'https://api.themeisle.com/sites/winery/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:winery/wp-content/uploads/2020/05/neve-winery.png',
						'title'      => 'Winery - Wine Shop',
						'keywords'   => [ 'business', 'wine', 'nature', 'green', 'garden' ],
						'upsell'     => $upsell_status,
					],
					'neve-news-magazine'         => [
						'url'        => 'https://demosites.io/news-magazine/',
						'remote_url' => 'https://api.themeisle.com/sites/news-magazine/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:news-magazine/wp-content/uploads/2020/05/neve-news.jpg',
						'title'      => 'News Magazine',
						'keywords'   => [ 'blog', 'creative', 'news', 'magazine' ],
						'upsell'     => $upsell_status,
					],
					'neve-coworking'             => [
						'url'        => 'https://demosites.io/coworking/',
						'remote_url' => 'https://api.themeisle.com/sites/coworking/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:coworking/wp-content/uploads/2020/05/neve-coworking.jpg',
						'title'      => 'Coworking Space',
						'keywords'   => [ 'other', 'coworking', 'corporate', 'courses', 'creative', 'job', 'CV', 'technology', 'venue', 'design', 'architect', 'event', 'listing' ],
						'upsell'     => $upsell_status,
					],
					'neve-fishing-club'          => [
						'url'        => 'https://demosites.io/fishing-club/',
						'remote_url' => 'https://api.themeisle.com/sites/fishing-club/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fishing-club/wp-content/uploads/2020/05/neve-fishing.jpg',
						'title'      => 'Fishing and Hunting Club',
						'keywords'   => [ 'other', 'nature', 'sports', 'membership', 'marine', 'summer', 'boat', 'sea' ],
						'upsell'     => $upsell_status,
					],
					'neve-car-rental'            => [
						'url'        => 'https://demosites.io/car-rental/',
						'remote_url' => 'https://api.themeisle.com/sites/car-rental/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:car-rental/wp-content/uploads/2020/05/neve-cart-rental.jpg',
						'title'      => 'Car Rental',
						'keywords'   => [ 'other', 'business', 'corporate', 'services', 'transportation', 'logistics', 'rental' ],
						'upsell'     => $upsell_status,
					],
					'neve-ski-resort'            => [
						'url'        => 'https://demosites.io/ski-resort/',
						'remote_url' => 'https://api.themeisle.com/sites/ski-resort/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:ski-resort/wp-content/uploads/2020/05/sky-resort.jpg',
						'title'      => 'Ski Resort Winter Hotel',
						'keywords'   => [ 'other', 'holidays', 'ski', 'snow' ],
						'upsell'     => $upsell_status,
					],
					'neve-digital-product'       => [
						'url'        => 'https://demosites.io/digital-product-funnel/',
						'remote_url' => 'https://api.themeisle.com/sites/digital-product-funnel/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:digital-product-funnel/wp-content/uploads/2020/05/neve-digital-product.jpg',
						'title'      => 'Digital Product Funnel',
						'keywords'   => [ 'other', 'marketing', 'technology', 'product', 'creative', 'membership', 'e-book' ],
						'upsell'     => $upsell_status,
					],
					'neve-moving-company'        => [
						'url'        => 'https://demosites.io/moving-company/',
						'remote_url' => 'https://api.themeisle.com/sites/moving-company/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:moving-company/wp-content/uploads/2020/05/neve-moving-company.jpg',
						'title'      => 'Moving Company Logistics Services',
						'keywords'   => [ 'logistics', 'business', 'transportation', 'furniture', 'building', 'family', 'home' ],
						'upsell'     => $upsell_status,
					],
					'neve-translation-services'  => [
						'url'        => 'https://demosites.io/translation-services/',
						'remote_url' => 'https://api.themeisle.com/sites/translation-services/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:translation-services/wp-content/uploads/2020/05/neve-translations.jpg',
						'title'      => 'Translation and Interpreter Services',
						'keywords'   => [ 'business', 'translation', 'services', 'consulting', 'corporate', 'technology', 'writing', 'author' ],
						'upsell'     => $upsell_status,
					],
					'neve-coupons'               => [
						'url'        => 'https://demosites.io/coupons/',
						'remote_url' => 'https://api.themeisle.com/sites/coupons/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:coupons/wp-content/uploads/2020/05/neve-coupons.jpg',
						'title'      => 'Coupons Discounts and Offers',
						'keywords'   => [ 'other', 'coupons', 'listing', 'services', 'membership' ],
						'upsell'     => $upsell_status,
					],
					'neve-escape-room'           => [
						'url'        => 'https://demosites.io/escape-room/',
						'remote_url' => 'https://api.themeisle.com/sites/escape-room/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:escape-room/wp-content/uploads/2020/05/neve-escape-room.jpg',
						'title'      => 'Escape Room',
						'keywords'   => [ 'other', 'adventure', 'event', 'creative', 'venue' ],
						'upsell'     => $upsell_status,
					],
					'neve-cv'                    => [
						'url'        => 'https://demosites.io/cv/',
						'remote_url' => 'https://api.themeisle.com/sites/cv/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:cv/wp-content/uploads/2020/05/neve-resume.jpg',
						'title'      => 'Resume',
						'keywords'   => [ 'portfolio', 'personal', 'resume', 'CV' ],
						'upsell'     => $upsell_status,
					],
					'neve-wellness'              => [
						'url'        => 'https://demosites.io/wellness/',
						'remote_url' => 'https://api.themeisle.com/sites/wellness/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:wellness/wp-content/uploads/2020/05/neve-wellness.jpg',
						'title'      => 'Wellness Spa',
						'keywords'   => [ 'wellness', 'business', 'beauty', 'health', 'medical', 'fitness', 'yoga' ],
						'upsell'     => $upsell_status,
					],
					'neve-courses'               => [
						'url'        => 'https://demosites.io/courses/',
						'remote_url' => 'https://api.themeisle.com/sites/courses/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:courses/wp-content/uploads/2020/05/neve-courses.jpg',
						'title'      => 'Online Courses',
						'keywords'   => [ 'education', 'other', 'education', 'developer', 'design', 'creative', 'job', 'resume' ],
						'upsell'     => $upsell_status,
					],
					'neve-model-agency'          => [
						'url'        => 'https://demosites.io/model-agency/',
						'remote_url' => 'https://api.themeisle.com/sites/model-agency/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:model-agency/wp-content/uploads/2020/05/neve-model-agency.jpg',
						'title'      => 'Fashion Model Agency',
						'keywords'   => [ 'fashion', 'agency', 'business', 'other', 'portfolio', 'model', 'beauty', 'wellness' ],
						'upsell'     => $upsell_status,
					],
					'neve-it-company'            => [
						'url'        => 'https://demosites.io/it-company/',
						'remote_url' => 'https://api.themeisle.com/sites/it-company/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:it-company/wp-content/uploads/2020/05/neve-it-solution.jpg',
						'title'      => 'IT Technology Agency',
						'keywords'   => [ 'business', 'portfolio', 'technology', 'corporate', 'creative', 'VR', 'coworking', 'developer', 'design' ],
						'upsell'     => $upsell_status,
					],
					'neve-christmas-market'      => [
						'url'        => 'https://demosites.io/christmas-market/',
						'remote_url' => 'https://api.themeisle.com/sites/christmas-market/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:christmas-market/wp-content/uploads/2020/05/neve-christmas.jpg',
						'title'      => 'Christmas Market',
						'keywords'   => [ 'other', 'christmas', 'holidays', 'event', 'product', 'sales', 'venue' ],
						'upsell'     => $upsell_status,
					],
					'neve-podcast'               => [
						'url'        => 'https://demosites.io/podcast/',
						'remote_url' => 'https://api.themeisle.com/sites/podcast/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:podcast/wp-content/uploads/2020/05/neve-podcast.jpg',
						'title'      => 'Podcast',
						'keywords'   => [ 'blog', 'personal', 'other', 'podcast', 'magazine', 'technology' ],
						'upsell'     => $upsell_status,
					],
					'neve-digital-agency'        => [
						'url'        => 'https://demosites.io/digital-agency/',
						'remote_url' => 'https://api.themeisle.com/sites/digital-agency/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:digital-agency/wp-content/uploads/2020/05/neve-digital-agency.jpg',
						'title'      => 'Digital Agency',
						'keywords'   => [ 'portfolio', 'business', 'agency', 'technology', 'design', 'developer', 'services' ],
						'upsell'     => $upsell_status,
					],
					'neve-industrial'            => [
						'url'        => 'https://demosites.io/industrial/',
						'remote_url' => 'https://api.themeisle.com/sites/industrial/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:industrial/wp-content/uploads/2020/05/neve-industrial.jpg',
						'title'      => 'Industrial',
						'keywords'   => [ 'business', 'logistics', 'transportation', 'services', 'corporate', 'building', 'factory' ],
						'upsell'     => $upsell_status,
					],
					'neve-adventure'             => [
						'url'        => 'https://demosites.io/adventure/',
						'remote_url' => 'https://api.themeisle.com/sites/adventure/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:adventure/wp-content/uploads/2020/05/neve-adventure.jpg',
						'title'      => 'Adventure',
						'keywords'   => [ 'other', 'blog', 'personal', 'magazine', 'travel', 'adventure', 'nature', 'writing', 'author' ],
						'upsell'     => $upsell_status,
					],
					'neve-product-launch'        => [
						'url'        => 'https://demosites.io/product-launch/',
						'remote_url' => 'https://api.themeisle.com/sites/product-launch/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:product-launch/wp-content/uploads/2020/05/neve-product-lunch.jpg',
						'title'      => 'Product Launch',
						'keywords'   => [ 'business', 'portfolio', 'other', 'product', 'marketing', 'car', 'bike', 'shop' ],
						'upsell'     => $upsell_status,
					],
					'neve-accounting'            => [
						'url'        => 'https://demosites.io/accounting/',
						'remote_url' => 'https://api.themeisle.com/sites/accounting/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:accounting/wp-content/uploads/2020/05/neve-accounting.jpg',
						'title'      => 'Accounting',
						'keywords'   => [ 'business', 'accounting', 'consulting', 'corporate', 'law' ],
						'upsell'     => $upsell_status,
					],
					'neve-beauty-shop'           => [
						'url'        => 'https://demosites.io/beauty-shop/',
						'remote_url' => 'https://api.themeisle.com/sites/beauty-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:beauty-shop/wp-content/uploads/2020/05/neve-beauty-shop.jpg',
						'title'      => 'Beauty Shop',
						'keywords'   => [ 'woocommerce', 'business', 'beauty', 'medical', 'health', 'wellness', 'fashion', 'make-up' ],
						'upsell'     => $upsell_status,
					],
					'neve-recruitment'           => [
						'url'        => 'https://demosites.io/recruitment/',
						'remote_url' => 'https://api.themeisle.com/sites/recruitment/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:recruitment/wp-content/uploads/2020/05/neve-recruitment.jpg',
						'title'      => 'Recruitment Agency',
						'keywords'   => [ 'business', 'agency', 'other', 'listing', 'job', 'CV', 'corporate', 'recruitment', 'HR' ],
						'upsell'     => $upsell_status,
					],
					'neve-artist'                => [
						'url'        => 'https://demosites.io/artist/',
						'remote_url' => 'https://api.themeisle.com/sites/artist/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:artist/wp-content/uploads/2020/05/neve-artist.jpg',
						'title'      => 'Artist',
						'keywords'   => [ 'other', 'personal', 'art', 'artist', 'creative', 'exhibition' ],
						'upsell'     => $upsell_status,
					],
					'neve-vr-studio'             => [
						'url'        => 'https://demosites.io/vr-studio/',
						'remote_url' => 'https://api.themeisle.com/sites/vr-studio/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:vr-studio/wp-content/uploads/2020/05/neve-vr.jpg',
						'title'      => 'VR Studio',
						'keywords'   => [ 'other', 'portfolio', 'creative', 'technology', 'VR', 'art' ],
						'upsell'     => $upsell_status,
					],
					'neve-makeup-artist'         => [
						'url'        => 'https://demosites.io/makeup-artist/',
						'remote_url' => 'https://api.themeisle.com/sites/makeup-artist/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:makeup-artist/wp-content/uploads/2020/05/neve-makeup.jpg',
						'title'      => 'Makeup Artist',
						'keywords'   => [ 'personal', 'other', 'CV', 'job', 'artist', 'fitness', 'medical', 'beauty', 'wellness' ],
						'upsell'     => $upsell_status,
					],
					'neve-diving'                => [
						'url'        => 'https://demosites.io/diving/',
						'remote_url' => 'https://api.themeisle.com/sites/diving/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:diving/wp-content/uploads/2020/05/neve-diving.jpg',
						'title'      => 'Scuba Diving',
						'keywords'   => [ 'sports', 'other', 'courses', 'fitness', 'green', 'sea', 'boat', 'marine', 'summer', 'travel', 'tourist', 'family' ],
						'upsell'     => $upsell_status,
					],
					'neve-wine-bar'              => [
						'url'        => 'https://demosites.io/wine-bar/',
						'remote_url' => 'https://api.themeisle.com/sites/wine-bar/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:wine-bar/wp-content/uploads/2020/05/wine-bar.jpg',
						'title'      => 'Wine Bar',
						'keywords'   => [ 'business', 'wine', 'health', 'food', 'green', 'garden', 'wellness', 'home', 'family' ],
						'upsell'     => $upsell_status,
					],
					'neve-mtb-race'              => [
						'url'        => 'https://demosites.io/mtb-race/',
						'remote_url' => 'https://api.themeisle.com/sites/mtb-race/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:mtb-race/wp-content/uploads/2020/05/neve-race.jpg',
						'title'      => 'Mountain Biking Race',
						'keywords'   => [ 'sports', 'other', 'business', 'event', 'bike', 'adventure', 'nature' ],
						'upsell'     => $upsell_status,
					],
					'neve-movie'                 => [
						'url'        => 'https://demosites.io/movie/',
						'remote_url' => 'https://api.themeisle.com/sites/movie/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:movie/wp-content/uploads/2020/05/neve-movie.jpg',
						'title'      => 'Movie Showcase',
						'keywords'   => [ 'entertainment', 'portfolio', 'other', 'movie', 'agency', 'creative', 'music', 'artist', 'magaizne', 'video' ],
						'upsell'     => $upsell_status,
					],
					'neve-running-club'          => [
						'url'        => 'https://demosites.io/running-club/',
						'remote_url' => 'https://api.themeisle.com/sites/running-club/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:running-club/wp-content/uploads/2020/05/neve-run.jpg',
						'title'      => 'Running Club',
						'keywords'   => [ 'sports', 'other', 'fitness', 'health', 'services', 'membership', 'running', 'wellness' ],
						'upsell'     => $upsell_status,
					],
					'neve-jewellery-shop'        => [
						'url'        => 'https://demosites.io/jewellery-shop/',
						'remote_url' => 'https://api.themeisle.com/sites/jewellery-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:jewellery-shop/wp-content/uploads/2020/05/neve-jewellery.jpg',
						'title'      => 'Jewellery Shop',
						'keywords'   => [ 'other', 'woocommerce', 'jewellery', 'shop', 'fashion', 'store', 'product', 'beauty' ],
						'upsell'     => $upsell_status,
					],
					'neve-car-service'           => [
						'url'        => 'https://demosites.io/car-service/',
						'remote_url' => 'https://api.themeisle.com/sites/car-service/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:car-service/wp-content/uploads/2020/05/neve-car-service.jpg',
						'title'      => 'Car Vehicle Service',
						'keywords'   => [ 'business', 'repair', 'car', 'services' ],
						'upsell'     => $upsell_status,
					],
					'neve-museum'                => [
						'url'        => 'https://demosites.io/museum/',
						'remote_url' => 'https://api.themeisle.com/sites/museum/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:museum/wp-content/uploads/2020/05/neve-museum.jpg',
						'title'      => 'Museum',
						'keywords'   => [ 'other', 'education', 'artist', 'art', 'venue', 'event', 'creative', 'building', 'exhibition' ],
						'upsell'     => $upsell_status,
					],
					'neve-exhibition'            => [
						'url'        => 'https://demosites.io/exhibition/',
						'remote_url' => 'https://api.themeisle.com/sites/exhibition/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:exhibition/wp-content/uploads/2020/05/neve-art-expo.jpg',
						'title'      => 'Art Exhibition',
						'keywords'   => [ 'other', 'art', 'exhibition', 'artist', 'venue' ],
						'upsell'     => $upsell_status,
					],
					'neve-conference'            => [
						'url'        => 'https://demosites.io/conference/',
						'remote_url' => 'https://api.themeisle.com/sites/conference/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:conference/wp-content/uploads/2020/05/neve-conference.jpg',
						'title'      => 'Conference',
						'keywords'   => [ 'other', 'event', 'conference', 'listing', 'corporate', 'membership' ],
						'upsell'     => $upsell_status,
					],
					'neve-university'            => [
						'url'        => 'https://demosites.io/university/',
						'remote_url' => 'https://api.themeisle.com/sites/university/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:university/wp-content/uploads/2020/05/neve-university.jpg',
						'title'      => 'University',
						'keywords'   => [ 'education', 'other', 'courses', 'consulting', 'resume', 'job', 'university' ],
						'upsell'     => $upsell_status,
					],
					'neve-interior-design'       => [
						'url'        => 'https://demosites.io/interior-design/',
						'remote_url' => 'https://api.themeisle.com/sites/interior-design/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:interior-design/wp-content/uploads/2020/05/neve-interior-design-2.jpg',
						'title'      => 'Interior Design',
						'keywords'   => [ 'portfolio', 'consulting', 'garden', 'services', 'design' ],
						'upsell'     => $upsell_status,
					],
					'neve-electronics-store'     => [
						'url'        => 'https://demosites.io/electronics-store/',
						'remote_url' => 'https://api.themeisle.com/sites/electronics-store/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:electronics-store/wp-content/uploads/2020/05/neve-electronics.jpg',
						'title'      => 'Electronics Shop',
						'keywords'   => [ 'woocommerce', 'business', 'technology', 'product', 'store' ],
						'upsell'     => $upsell_status,
					],
					'neve-print-shop'            => [
						'url'        => 'https://demosites.io/print-shop/',
						'remote_url' => 'https://api.themeisle.com/sites/print-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:print-shop/wp-content/uploads/2020/05/neve-print.jpg',
						'title'      => 'Print Shop',
						'keywords'   => [ 'woocommerce', 'portfolio', 'consulting', 'services', 'clothing', 'product', 'creative', 'technology', 'store' ],
						'upsell'     => $upsell_status,
					],
					'neve-city-tour'             => [
						'url'        => 'https://demosites.io/city-tour/',
						'remote_url' => 'https://api.themeisle.com/sites/city-tour/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:city-tour/wp-content/uploads/2020/05/neve-city-tour.jpg',
						'title'      => 'City Tours',
						'keywords'   => [ 'blog', 'other', 'fitness', 'sports', 'services', 'health', 'tourist' ],
						'upsell'     => $upsell_status,
					],
					'neve-insurance'             => [
						'url'        => 'https://demosites.io/insurance/',
						'remote_url' => 'https://api.themeisle.com/sites/insurance/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:insurance/wp-content/uploads/2020/05/neve-insurance.jpg',
						'title'      => 'Insurance',
						'keywords'   => [ 'business', 'consulting', 'corporate', 'family' ],
						'upsell'     => $upsell_status,
					],
					'neve-personal-blog'         => [
						'url'        => 'https://demosites.io/personal-blog/',
						'remote_url' => 'https://api.themeisle.com/sites/personal-blog/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:personal-blog/wp-content/uploads/2020/05/neve-personal-blog.jpg',
						'title'      => 'Personal Blog',
						'keywords'   => [ 'personal', 'blog', 'food', 'green', 'resume', 'creative', 'job', 'travel', 'magazine', 'book', 'design', 'writing', 'author' ],
						'upsell'     => $upsell_status,
					],
					'neve-travel-blog'           => [
						'url'        => 'https://demosites.io/travel-blog/',
						'remote_url' => 'https://api.themeisle.com/sites/travel-blog/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:travel-blog/wp-content/uploads/2020/05/neve-travel-blog.jpg',
						'title'      => 'Travel Blog',
						'keywords'   => [ 'blog', 'personal', 'travel', 'fitness', 'sports', 'summer', 'magazine' ],
						'upsell'     => $upsell_status,
					],
					'neve-dj'                    => [
						'url'        => 'https://demosites.io/dj/',
						'remote_url' => 'https://api.themeisle.com/sites/dj/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:dj/wp-content/uploads/2020/05/neve-dj.jpg',
						'title'      => 'DJ',
						'keywords'   => [ 'entertainment', 'music', 'other', 'creative', 'resume', 'artist', 'sound' ],
						'upsell'     => $upsell_status,
					],
					'neve-tech-lab'              => [
						'url'        => 'https://demosites.io/tech-lab/',
						'remote_url' => 'https://api.themeisle.com/sites/tech-lab/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:tech-lab/wp-content/uploads/2020/05/neve-tech.jpg',
						'title'      => 'Tech Lab',
						'keywords'   => [ 'business', 'portfolio', 'technology', 'consulting', 'corporate', 'services', 'product' ],
						'upsell'     => $upsell_status,
					],
					'neve-equitation'            => [
						'url'        => 'https://demosites.io/equitation/',
						'remote_url' => 'https://api.themeisle.com/sites/equitation/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:equitation/wp-content/uploads/2020/05/neve-horses.jpg',
						'title'      => 'Equitation',
						'keywords'   => [ 'sports', 'business', 'horse', 'other', 'membership', 'animal' ],
						'upsell'     => $upsell_status,
					],
					'neve-restaurant-2'          => [
						'url'        => 'https://demosites.io/restaurant-2/',
						'remote_url' => 'https://api.themeisle.com/sites/restaurant-2/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:restaurant-2/wp-content/uploads/2020/05/neve-restaurant-2.jpg',
						'title'      => 'Restaurant 2',
						'keywords'   => [ 'food', 'business', 'other', 'green', 'job', 'venue', 'restaurant', 'coffee', 'dining' ],
						'upsell'     => $upsell_status,
					],
					'neve-copywriter'            => [
						'url'        => 'https://demosites.io/copywriter/',
						'remote_url' => 'https://api.themeisle.com/sites/copywriter/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:copywriter/wp-content/uploads/2020/05/neve-copyright.jpg',
						'title'      => 'Copywriter',
						'keywords'   => [ 'personal', 'portfolio', 'CV', 'job', 'services' ],
						'upsell'     => $upsell_status,
					],
					'neve-laundry-services'      => [
						'url'        => 'https://demosites.io/laundry-services/',
						'remote_url' => 'https://api.themeisle.com/sites/laundry-services/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:laundry-services/wp-content/uploads/2020/05/neve-laundry.jpg',
						'title'      => 'Laundry Services',
						'keywords'   => [ 'business', 'apparel', 'services', 'clean' ],
						'upsell'     => $upsell_status,
					],
					'neve-craft-beer'            => [
						'url'        => 'https://demosites.io/craft-beer/',
						'remote_url' => 'https://api.themeisle.com/sites/craft-beer/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:craft-beer/wp-content/uploads/2020/05/neve-craft-beer.jpg',
						'title'      => 'Craft Beer',
						'keywords'   => [ 'business', 'woocommerce', 'product', 'food' ],
						'upsell'     => $upsell_status,
					],
					'neve-gardening'             => [
						'url'        => 'https://demosites.io/gardening/',
						'remote_url' => 'https://api.themeisle.com/sites/gardening/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:gardening/wp-content/uploads/2020/05/neve-gardening.jpg',
						'title'      => 'Gardening',
						'keywords'   => [ 'green', 'business', 'garden', 'services', 'health', 'food' ],
						'upsell'     => $upsell_status,
					],
					'neve-resume-2'              => [
						'url'        => 'https://demosites.io/resume/',
						'remote_url' => 'https://api.themeisle.com/sites/resume/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:resume/wp-content/uploads/2020/05/neve-resume-2.jpg',
						'title'      => 'Resume 2',
						'keywords'   => [ 'personal', 'portfolio', 'resume', 'CV', 'job', 'creative' ],
						'upsell'     => $upsell_status,
					],
					'neve-leather-shop'          => [
						'url'        => 'https://demosites.io/leather-shop/',
						'remote_url' => 'https://api.themeisle.com/sites/leather-shop/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:leather-shop/wp-content/uploads/2020/06/leather-shop.jpg',
						'title'      => 'Leather Shop',
						'keywords'   => [ 'woocommerce', 'business', 'apparel', 'clothing' ],
						'upsell'     => $upsell_status,
					],
					'neve-public-notary'         => [
						'url'        => 'https://demosites.io/public-notary/',
						'remote_url' => 'https://api.themeisle.com/sites/public-notary/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:public-notary/wp-content/uploads/2020/06/public-notary.jpg',
						'title'      => 'Public Notary',
						'keywords'   => [ 'business', 'law', 'corporate', 'services' ],
						'upsell'     => $upsell_status,
					],
					'neve-pharmacy'              => [
						'url'        => 'https://demosites.io/pharmacy/',
						'remote_url' => 'https://api.themeisle.com/sites/pharmacy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:pharmacy/wp-content/uploads/2020/06/pharmacy.jpg',
						'title'      => 'Pharmacy',
						'keywords'   => [ 'woocommerce', 'medical', 'health' ],
						'upsell'     => $upsell_status,
					],
					'neve-investment-consulting' => [
						'url'        => 'https://demosites.io/investment-consulting/',
						'remote_url' => 'https://api.themeisle.com/sites/investment-consulting/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:investment-consulting/wp-content/uploads/2020/06/investment-consulting.jpg',
						'title'      => 'Investment Consulting',
						'keywords'   => [ 'consulting', 'business', 'corporate', 'services', 'financial' ],
						'upsell'     => $upsell_status,
					],
					'neve-sports-academy'        => [
						'url'        => 'https://demosites.io/sports-academy/',
						'remote_url' => 'https://api.themeisle.com/sites/sports-academy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:sports-academy/wp-content/uploads/2020/07/sports-academy.jpg',
						'title'      => 'Sports Academy',
						'keywords'   => [ 'business', 'other', 'fitness', 'courses', 'sports' ],
						'upsell'     => $upsell_status,
					],
				],
				'brizy'            => [
					'neve-brizy-main'                 => [
						'url'        => 'https://demosites.io/onboarding-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/onboarding-brizy/',
						'title'      => 'Original',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:onboarding-brizy/wp-content/uploads/2020/05/neve-original.png',
						'keywords'   => [ 'business', 'woocommerce', 'consulting', 'product', 'creative', 'design' ],
					],
					'neve-brizy-restaurant'           => [
						'url'        => 'https://demosites.io/restaurant-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/restaurant-brizy/',
						'title'      => 'Restaurant',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:restaurant-brizy/wp-content/uploads/2020/05/screenshot.png',
						'keywords'   => [ 'business', 'other', 'restaurant', 'venue', 'coffee', 'dining', 'family' ],
					],
					'neve-brizy-charity'              => [
						'url'        => 'https://demosites.io/charity-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/charity-brizy/',
						'title'      => 'Charity',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:charity-brizy/wp-content/uploads/2020/05/screenshot-1.png',
						'keywords'   => [ 'other', 'donation', 'charity', 'non-profit' ],
					],
					'neve-brizy-vet-center'           => [
						'url'        => 'https://demosites.io/vet-center-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/vet-center-brizy/',
						'title'      => 'Vet Center',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:vet-center-brizy/wp-content/uploads/2020/05/screenshot-2.png',
						'keywords'   => [ 'business', 'other', 'pet', 'doctor', 'clinic', 'medical', 'health', 'animal' ],
					],
					'neve-brizy-doctors'              => [
						'url'        => 'https://demosites.io/doctors-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/doctors-brizy/',
						'title'      => 'Doctors',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:doctors-brizy/wp-content/uploads/2020/05/screenshot-3.png',
						'keywords'   => [ 'medical', 'other', 'doctor', 'beauty', 'fitness', 'sports', 'clinic' ],
					],
					'neve-brizy-architecture'         => [
						'url'        => 'https://demosites.io/architecture-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/architecture-brizy/',
						'title'      => 'Architecture',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:architecture-brizy/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'keywords'   => [ 'business', 'portfolio', 'architect', 'consulting', 'corporate', 'garden', 'creative', 'design', 'home', 'building' ],
					],
					'neve-brizy-fitness'              => [
						'url'        => 'https://demosites.io/fitness-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/fitness-brizy/',
						'title'      => 'Fitness',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fitness-brizy/wp-content/uploads/2020/05/screenshot-5.png',
						'keywords'   => [ 'business', 'other', 'fitness', 'gym', 'consulting', 'health', 'medical' ],
					],
					'neve-brizy-vacation-rental'      => [
						'url'        => 'https://demosites.io/vacation-rental-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/vacation-rental-brizy/',
						'title'      => 'Vacation Rental',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:vacation-rental-brizy/wp-content/uploads/2020/05/screenshot-6.png',
						'keywords'   => [ 'business', 'portfolio', 'other', 'sea', 'boat', 'marine', 'summer', 'travel', 'tourist', 'magazine', 'wellness', 'venue', 'listing', 'event', 'architect', 'home', 'building', 'rental' ],
					],
					'neve-brizy-music-band'           => [
						'url'        => 'https://demosites.io/music-band-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/music-band-brizy/',
						'title'      => 'Music Band',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:music-band-brizy/wp-content/uploads/2020/05/screenshot-7.png',
						'keywords'   => [ 'other', 'portfolio', 'music', 'DJ', 'creative', 'artist', 'sound', 'technology' ],
					],
					'neve-brizy-wedding'              => [
						'url'        => 'https://demosites.io/wedding-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/wedding-brizy/',
						'title'      => 'Wedding',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:wedding-brizy/wp-content/uploads/2020/05/screenshot.jpg',
						'keywords'   => [ 'other', 'wedding', 'invitation', 'event' ],
					],
					'neve-brizy-themotion'            => [
						'url'        => 'https://demosites.io/themotion-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/themotion-brizy/',
						'title'      => 'Video Blog',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:themotion-brizy/wp-content/uploads/2020/05/screenshot-1.jpg',
						'keywords'   => [ 'blog', 'author', 'design', 'clean', 'magazine' ],
					],
					'neve-brizy-amadeus'              => [
						'url'        => 'https://demosites.io/amadeus-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/amadeus-brizy/',
						'title'      => 'Music Teacher',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:amadeus-brizy/wp-content/uploads/2020/05/screenshot-2.jpg',
						'keywords'   => [ 'portfolio', 'personal', 'music', 'event', 'creative', 'sound', 'artist', 'listing', 'author', 'writing' ],
					],
					'neve-brizy-oblique'              => [
						'url'        => 'https://demosites.io/oblique-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/oblique-brizy/',
						'title'      => 'Vintage',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:oblique-brizy/wp-content/uploads/2020/05/screenshot-3.jpg',
						'keywords'   => [ 'blog', 'fashion', 'magazine', 'author', 'writing', 'beauty' ],
					],
					'neve-brizy-rokophoto'            => [
						'url'        => 'https://demosites.io/rokophoto-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/rokophoto-brizy/',
						'title'      => 'Photography',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:rokophoto-brizy/wp-content/uploads/2020/05/screenshot-4.jpg',
						'keywords'   => [ 'photography', 'portfolio', 'services', 'creative', 'magazine' ],
					],
					'neve-brizy-energy-panels'        => [
						'url'        => 'https://demosites.io/energy-panels-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/energy-panels-brizy/',
						'title'      => 'Energy Panels',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:energy-panels-brizy/wp-content/uploads/2020/05/screenshot-5.jpg',
						'keywords'   => [ 'business', 'other', 'energy', 'solar', 'power', 'corporate', 'consulting', 'services', 'clean' ],
					],
					'neve-brizy-lawyers'              => [
						'url'        => 'https://demosites.io/lawyers-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/lawyers-brizy/',
						'title'      => 'Lawyers',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:lawyers-brizy/wp-content/uploads/2020/05/neve-lawyers.jpg',
						'keywords'   => [ 'business', 'law', 'consulting', 'corporate', 'services', 'financial', 'writing', 'book' ],
					],
					'neve-brizy-freelancer'           => [
						'url'        => 'https://demosites.io/freelancer-brizy',
						'remote_url' => 'https://api.themeisle.com/sites/freelancer-brizy/',
						'title'      => 'Freelancer',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:freelancer-brizy/wp-content/uploads/2020/05/screenshot-7.jpg',
						'keywords'   => [ 'portfolio', 'personal', 'consulting', 'services', 'product', 'CV', 'resume', 'artist', 'creative', 'developer' ],
					],
					'neve-brizy-shop'                 => [
						'url'        => 'https://demosites.io/shop-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/shop-brizy/',
						'title'      => 'Shop',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:shop-brizy/wp-content/uploads/2020/05/screenshot-8.png',
						'keywords'   => [ 'woocommerce', 'clothing', 'apparel', 'corporate', 'creative', 'beauty', 'wellness', 'magazine', 'fashion' ],
					],
					'neve-brizy-tattoo'               => [
						'url'        => 'https://demosites.io/tatoo-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/tatoo-brizy/',
						'title'      => 'Tattoo',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:tatoo-brizy/wp-content/uploads/2020/05/screenshot-8.jpg',
						'keywords'   => [ 'portfolio', 'personal', 'artist', 'medical', 'tattoo', 'beauty', 'creative' ],
					],
					'neve-brizy-zelle'                => [
						'url'        => 'https://demosites.io/zelle-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/zelle-brizy/',
						'title'      => 'Travel Agency',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:zelle-brizy/wp-content/uploads/2020/05/screenshot-9.jpg',
						'keywords'   => [ 'business', 'blog', 'other', 'travel', 'tourist', 'magazine', 'writing', 'author', 'fitness', 'sports', 'nature' ],
					],
					'neve-brizy-life-coach'           => [
						'url'        => 'https://demosites.io/scholar-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/scholar-brizy/',
						'title'      => 'Life Coach',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:scholar-brizy/wp-content/uploads/2020/05/screenshot-10.jpg',
						'keywords'   => [ 'business', 'personal', 'blog', 'fitness', 'medical', 'health', 'consulting', 'services', 'family', 'instructor', 'coaching' ],
					],
					'neve-brizy-creative-portfolio'   => [
						'url'        => 'https://demosites.io/creative-portfolio-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/creative-portfolio-brizy/',
						'title'      => 'Creative Portfolio',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:creative-portfolio-brizy/wp-content/uploads/2020/05/screenshot-11.jpg',
						'keywords'   => [ 'portfolio', 'services', 'product', 'creative', 'technology', 'design' ],
					],
					'neve-brizy-cafe'                 => [
						'url'        => 'https://demosites.io/cafe-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/cafe-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:cafe-brizy/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
						'keywords'   => [ 'business', 'coffee', 'store', 'venue', 'product', 'dining', 'services' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-constructions'        => [
						'url'        => 'https://demosites.io/constructions-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/constructions-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:constructions-brizy/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'      => 'Constructions Company',
						'keywords'   => [ 'business', 'corporate', 'building', 'home', 'architect' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-fashion'              => [
						'url'        => 'https://demosites.io/fashion-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/fashion-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fashion-brizy/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
						'keywords'   => [ 'blog', 'apparel', 'clothing', 'magazine', 'beauty', 'wellness', 'design', 'writing', 'author' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-showcase'             => [
						'url'        => 'https://demosites.io/showcase-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/showcase-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:showcase-brizy/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
						'keywords'   => [ 'portfolio', 'personal', 'blog', 'corporate', 'services', 'agency', 'creative', 'photography' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-consultants'          => [
						'url'        => 'https://demosites.io/consultants-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/consultants-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:consultants-brizy/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
						'keywords'   => [ 'business', 'portfolio', 'consulting', 'corporate', 'services', 'law', 'financial' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-job-listings'         => [
						'url'        => 'https://demosites.io/job-listings-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/job-listings-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:job-listings-brizy/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
						'keywords'   => [ 'business', 'portfolio', 'CV', 'job', 'consulting', 'corporate', 'services', 'magazine', 'membership', 'listing' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-barber-shop'          => [
						'url'        => 'https://demosites.io/barber-shop-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/barber-shop-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:barber-shop-brizy/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
						'keywords'   => [ 'business', 'barber', 'hair', 'services', 'beauty', 'wellness', 'store' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-personal-trainer'     => [
						'url'        => 'https://demosites.io/personal-trainer-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/personal-trainer-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:personal-trainer-brizy/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
						'keywords'   => [ 'portfolio', 'personal', 'fitness', 'sports', 'consulting', 'medical', 'health', 'membership', 'instructor' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-real-estate'          => [
						'url'        => 'https://demosites.io/real-estate-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/real-estate-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:real-estate-brizy/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
						'keywords'   => [ 'other', 'business', 'home', 'architect', 'building', 'membership', 'venue', 'magazine', 'financial', 'services', 'consulting', 'corporate', 'listing' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-events'               => [
						'url'        => 'https://demosites.io/events-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/events-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:events-brizy/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
						'keywords'   => [ 'business', 'other', 'event', 'listing', 'tourist', 'travel', 'magazine', 'artist' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-portrait-photopraphy' => [
						'url'        => 'https://demosites.io/portrait-photography-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/portrait-photography-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:portrait-photography-brizy/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
						'keywords'   => [ 'photography', 'wedding', 'other', 'portfolio', 'services', 'agency' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-furniture-shop'       => [
						'url'        => 'https://demosites.io/furniture-shop-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/furniture-shop-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:furniture-shop-brizy/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
						'keywords'   => [ 'business', 'portfolio', 'product', 'services', 'furniture', 'architect', 'building' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-farm'                 => [
						'url'        => 'https://demosites.io/farm-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/farm-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:farm-brizy/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
						'keywords'   => [ 'other', 'health', 'food', 'green', 'garden', 'wellness', 'membership', 'home', 'family', 'nature' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-kindergarten'         => [
						'url'        => 'https://demosites.io/kindergarten-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/kindergarten-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:kindergarten-brizy/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
						'keywords'   => [ 'other', 'school', 'kids', 'membership', 'coaching', 'instructor', 'family', 'education' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-florist'              => [
						'url'        => 'hhttps://demosites.io/florist-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/florist-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:florist-brizy/wp-content/uploads/2020/05/neve-florist.jpg',
						'title'      => 'Florist',
						'keywords'   => [ 'business', 'other', 'services', 'product', 'green', 'garden', 'wellness', 'nature', 'flower', 'shop' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-cake-shop'            => [
						'url'        => 'https://demosites.io/cake-shop-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/cake-shop-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:cake-shop-brizy/wp-content/uploads/2020/05/neve-cake-shop.jpg',
						'title'      => 'Cake Shop',
						'keywords'   => [ 'other', 'business', 'shop', 'food', 'product', 'store' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-food-magazine'        => [
						'url'        => 'https://demosites.io/food-magazine-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/food-magazine-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:food-magazine-brizy/wp-content/uploads/2020/05/neve-food-magazine.jpg',
						'title'      => 'Food Magazine',
						'keywords'   => [ 'food', 'blog', 'magazine', 'green', 'garden', 'product', 'author', 'writing', 'dining' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-web-design'           => [
						'url'        => 'https://demosites.io/web-design-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/web-design-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:web-design-brizy/wp-content/uploads/2020/05/neve-web-design.jpg',
						'title'      => 'eCourse - Web Design',
						'keywords'   => [ 'other', 'consulting', 'courses', 'services', 'product', 'sales', 'marketing' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-yoga-studio'          => [
						'url'        => 'https://demosites.io/yoga-studio-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/yoga-studio-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:yoga-studio-brizy/wp-content/uploads/2020/05/neve-yoga.jpg',
						'title'      => 'Yoga Studio',
						'keywords'   => [ 'wellness', 'portfolio', 'other', 'fitness', 'yoga', 'health', 'courses' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-sales-funnel'         => [
						'url'        => 'https://demosites.io/sales-funnel-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/sales-funnel-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:sales-funnel-brizy/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'      => 'Sales Funnel',
						'keywords'   => [ 'other', 'education', 'courses', 'consulting', 'product', 'creative', 'sales', 'marketing' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-news-magazine'        => [
						'url'        => 'https://demosites.io/news-magazine-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/news-magazine-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:news-magazine-brizy/wp-content/uploads/2020/05/neve-news.jpg',
						'title'      => 'News Magazine',
						'keywords'   => [ 'blog', 'creative', 'news', 'magazine' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-fishing-club'         => [
						'url'        => 'https://demosites.io/fishing-club-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/fishing-club-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fishing-club-brizy/wp-content/uploads/2020/05/neve-fishing.jpg',
						'title'      => 'Fishing and Hunting Club',
						'keywords'   => [ 'other', 'nature', 'sports', 'membership', 'marine', 'summer', 'boat', 'sea' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-car-rental'           => [
						'url'        => 'https://demosites.io/car-rental-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/car-rental-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:car-rental-brizy/wp-content/uploads/2020/05/neve-cart-rental.jpg',
						'title'      => 'Car Rental',
						'keywords'   => [ 'other', 'business', 'corporate', 'services', 'transportation', 'logistics', 'rental' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-digital-product'      => [
						'url'        => 'https://demosites.io/digital-product-funnel-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/digital-product-funnel-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:digital-product-funnel-brizy/wp-content/uploads/2020/05/neve-digital-product.jpg',
						'title'      => 'Digital Product Funnel',
						'keywords'   => [ 'other', 'marketing', 'technology', 'product', 'creative', 'membership', 'e-book' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-moving-company'       => [
						'url'        => 'https://demosites.io/moving-company-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/moving-company-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:moving-company-brizy/wp-content/uploads/2020/05/neve-moving-company.jpg',
						'title'      => 'Moving Company Logistics Services',
						'keywords'   => [ 'logistics', 'business', 'transportation', 'furniture', 'building', 'family', 'home' ],
						'upsell'     => $upsell_status,
					],
					'neve-brizy-translation-services' => [
						'url'        => 'https://demosites.io/translation-services-brizy/',
						'remote_url' => 'https://api.themeisle.com/sites/translation-services-brizy/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:translation-services-brizy/wp-content/uploads/2020/05/neve-translations.jpg',
						'title'      => 'Translation and Interpreter Services',
						'keywords'   => [ 'business', 'translation', 'services', 'consulting', 'corporate', 'technology', 'writing', 'author' ],
						'upsell'     => $upsell_status,
					],
				],
				'beaver builder'   => [
					'neve-beaver-onboarding'            => [
						'url'        => 'https://demosites.io/onboarding-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/onboarding-bb/',
						'title'      => 'Original',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:onboarding-bb/wp-content/uploads/2020/05/neve-original.png',
						'keywords'   => [ 'business', 'woocommerce', 'consulting', 'product', 'creative', 'design' ],
					],
					'neve-beaver-web-agency'            => [
						'url'        => 'https://demosites.io/web-agency-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/web-agency-bb/',
						'title'      => 'Web Agency',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:web-agency-bb/wp-content/uploads/2020/05/neve-web-agency-all-new.png',
						'keywords'   => [ 'business', 'portfolio', 'services', 'product', 'agency', 'creative', 'photography' ],
					],
					'neve-beaver-blogger'               => [
						'url'        => 'https://demosites.io/blogger-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/blogger-bb/',
						'title'      => 'Blogger',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:blogger-bb/wp-content/uploads/2020/05/neve-blogger.jpg',
						'keywords'   => [ 'services', 'resume', 'blog', 'CV', 'creative', 'magazine', 'writing', 'author' ],
					],
					'neve-beaver-restaurant'            => [
						'url'        => 'https://demosites.io/bb-restaurant/',
						'remote_url' => 'https://api.themeisle.com/sites/bb-restaurant/',
						'title'      => 'Restaurant',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:bb-restaurant/wp-content/uploads/2020/05/screenshot.png',
						'keywords'   => [ 'business', 'other', 'restaurant', 'venue', 'coffee', 'dining', 'family' ],
					],
					'neve-beaver-charity'               => [
						'url'        => 'https://demosites.io/charity-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/charity-bb/',
						'title'      => 'Charity',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:charity-bb/wp-content/uploads/2020/05/screenshot-1.png',
						'keywords'   => [ 'other', 'donation', 'charity', 'non-profit' ],
					],
					'neve-beaver-vet-center'            => [
						'url'        => 'https://demosites.io/vet-center-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/vet-center-bb/',
						'title'      => 'Vet Center',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:vet-center-bb/wp-content/uploads/2020/05/screenshot-2.png',
						'keywords'   => [ 'business', 'other', 'pet', 'doctor', 'clinic', 'medical', 'health', 'animal' ],
					],
					'neve-beaver-doctors'               => [
						'url'        => 'https://demosites.io/bb-doctors/',
						'remote_url' => 'https://api.themeisle.com/sites/bb-doctors/',
						'title'      => 'Doctors',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:bb-doctors/wp-content/uploads/2020/05/screenshot-3.png',
						'keywords'   => [ 'medical', 'one page', 'minimal', 'responsive', 'free' ],
					],
					'neve-beaver-architecture'          => [
						'url'        => 'https://demosites.io/bb-architecture/',
						'remote_url' => 'https://api.themeisle.com/sites/bb-architecture/',
						'title'      => 'Architecture',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:bb-architecture/wp-content/uploads/2020/05/screenshot-4.png',
						'keywords'   => [ 'business', 'portfolio', 'architect', 'consulting', 'corporate', 'garden', 'creative', 'design', 'home', 'building' ],
					],
					'neve-beaver-fitness'               => [
						'url'        => 'https://demosites.io/fitness-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/fitness-bb/',
						'title'      => 'Fitness',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fitness-bb/wp-content/uploads/2020/05/screenshot-5.png',
						'keywords'   => [ 'business', 'other', 'fitness', 'gym', 'consulting', 'health', 'medical' ],
					],
					'neve-beaver-vacation-rental'       => [
						'url'        => 'https://demosites.io/bb-vacantion-rental/',
						'remote_url' => 'https://api.themeisle.com/sites/bb-vacantion-rental/',
						'title'      => 'Vacation Rental',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:bb-vacantion-rental/wp-content/uploads/2020/05/screenshot-6.png',
						'keywords'   => [ 'business', 'portfolio', 'other', 'sea', 'boat', 'marine', 'summer', 'travel', 'tourist', 'magazine', 'wellness', 'venue', 'listing', 'event', 'architect', 'home', 'building', 'rental' ],
					],
					'neve-beaver-music-band'            => [
						'url'        => 'https://demosites.io/bb-music-band/',
						'remote_url' => 'https://api.themeisle.com/sites/bb-music-band/',
						'title'      => 'Music Band',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:bb-music-band/wp-content/uploads/2020/05/screenshot-7.png',
						'keywords'   => [ 'other', 'portfolio', 'music', 'DJ', 'creative', 'artist', 'sound', 'technology' ],
					],
					'neve-beaver-wedding'               => [
						'url'        => 'https://demosites.io/wedding-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/wedding-bb/',
						'title'      => 'Wedding',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:wedding-bb/wp-content/uploads/2020/05/screenshot.jpg',
						'keywords'   => [ 'other', 'wedding', 'invitation', 'event' ],
					],
					'neve-beaver-themotion'             => [
						'url'        => 'https://demosites.io/themotion-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/themotion-bb/',
						'title'      => 'Video Blog',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:themotion-bb/wp-content/uploads/2020/05/screenshot-1.jpg',
						'keywords'   => [ 'blog', 'author', 'design', 'clean', 'magazine' ],
					],
					'neve-beaver-amadeus'               => [
						'url'        => 'https://demosites.io/amadeus-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/amadeus-bb/',
						'title'      => 'Music Teacher',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:amadeus-bb/wp-content/uploads/2020/05/screenshot-2.jpg',
						'keywords'   => [ 'portfolio', 'personal', 'music', 'event', 'creative', 'sound', 'artist', 'listing', 'author', 'writing' ],
					],
					'neve-beaver-oblique'               => [
						'url'        => 'https://demosites.io/oblique-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/oblique-bb/',
						'title'      => 'Vintage',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:oblique-bb/wp-content/uploads/2020/05/screenshot-3.jpg',
						'keywords'   => [ 'blog', 'fashion', 'magazine', 'author', 'writing', 'beauty' ],
					],
					'neve-beaver-rokophoto'             => [
						'url'        => 'https://demosites.io/rokophoto-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/rokophoto-bb/',
						'title'      => 'Photography',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:rokophoto-bb/wp-content/uploads/2020/05/screenshot-4.jpg',
						'keywords'   => [ 'photography', 'portfolio', 'services', 'creative', 'magazine' ],
					],
					'neve-beaver-energy-panels'         => [
						'url'        => 'https://demosites.io/energy-panels-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/energy-panels-bb/',
						'title'      => 'Energy Panels',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:energy-panels-bb/wp-content/uploads/2020/05/screenshot-5.jpg',
						'keywords'   => [ 'business', 'other', 'energy', 'solar', 'power', 'corporate', 'consulting', 'services', 'clean' ],
					],
					'neve-beaver-shop'                  => [
						'url'        => 'https://demosites.io/shop-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/shop-bb/',
						'title'      => 'Shop',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:shop-bb/wp-content/uploads/2020/05/screenshot-8.png',
						'keywords'   => [ 'woocommerce', 'clothing', 'apparel', 'corporate', 'creative', 'beauty', 'wellness', 'magazine', 'fashion' ],
					],
					'neve-beaver-freelancer'            => [
						'url'        => 'https://demosites.io/bb-freelancer/',
						'remote_url' => 'https://api.themeisle.com/sites/bb-freelancer/',
						'title'      => 'Freelancer',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:bb-freelancer/wp-content/uploads/2020/05/screenshot-7.jpg',
						'keywords'   => [ 'portfolio', 'personal', 'consulting', 'services', 'product', 'CV', 'resume', 'artist', 'creative', 'developer' ],
					],
					'neve-beaver-lawyers'               => [
						'url'        => 'https://demosites.io/lawyers-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/lawyers-bb/',
						'title'      => 'Lawyers',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:lawyers-bb/wp-content/uploads/2020/05/neve-lawyers.jpg',
						'keywords'   => [ 'business', 'law', 'consulting', 'corporate', 'services', 'financial', 'writing', 'book' ],
					],
					'neve-beaver-tattoo'                => [
						'url'        => 'https://demosites.io/tatoo-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/tatoo-bb/',
						'title'      => 'Tattoo',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:tatoo-bb/wp-content/uploads/2020/05/screenshot-8.jpg',
						'keywords'   => [ 'portfolio', 'personal', 'artist', 'medical', 'tattoo', 'beauty', 'creative' ],
					],
					'neve-beaver-zelle'                 => [
						'url'        => 'https://demosites.io/zelle-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/zelle-b/',
						'title'      => 'Travel Agency',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:zelle-b/wp-content/uploads/2020/05/screenshot-9.jpg',
						'keywords'   => [ 'business', 'blog', 'other', 'travel', 'tourist', 'magazine', 'writing', 'author', 'fitness', 'sports', 'nature' ],
					],
					'neve-beaver-life-coach'            => [
						'url'        => 'https://demosites.io/scholar-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/scholar-bb/',
						'title'      => 'Life Coach',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:scholar-bb/wp-content/uploads/2020/05/screenshot-10.jpg',
						'keywords'   => [ 'business', 'personal', 'blog', 'fitness', 'medical', 'health', 'consulting', 'services', 'family', 'instructor', 'coaching' ],
					],
					'neve-beaver-creative-portfolio'    => [
						'url'        => 'https://demosites.io/creative-portfolio-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/creative-portfolio-bb/',
						'title'      => 'Creative Portfolio',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:creative-portfolio-bb/wp-content/uploads/2020/05/screenshot-11.jpg',
						'keywords'   => [ 'portfolio', 'services', 'product', 'creative', 'technology', 'design' ],
					],
					'neve-beaver-psychologist'          => [
						'url'        => 'https://demosites.io/psychologist-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/psychologist-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:psychologist-bb/wp-content/uploads/2020/05/neve-psychologist.jpg',
						'title'      => 'Psychologist',
						'keywords'   => [ 'other', 'fitness', 'medical', 'consulting', 'health', 'doctor' ],
					],
					'neve-beaver-cafe'                  => [
						'url'        => 'https://demosites.io/cafe-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/cafe-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:cafe-bb/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'      => 'Coffee Shop',
						'keywords'   => [ 'business', 'coffee', 'store', 'venue', 'product', 'dining', 'services' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-constructions'         => [
						'url'        => 'https://demosites.io/constructions-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/constructions-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:constructions-bb/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
						'title'      => 'Constructions Company',
						'keywords'   => [ 'business', 'corporate', 'building', 'home', 'architect' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-fashion'               => [
						'url'        => 'https://demosites.io/bb-fashion/',
						'remote_url' => 'https://api.themeisle.com/sites/bb-fashion/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:bb-fashion/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'      => 'Fashion',
						'keywords'   => [ 'blog', 'apparel', 'clothing', 'magazine', 'beauty', 'wellness', 'design', 'writing', 'author' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-showcase'              => [
						'url'        => 'https://demosites.io/showcase-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/showcase-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:showcase-bb/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'      => 'Showcase',
						'keywords'   => [ 'portfolio', 'personal', 'blog', 'corporate', 'services', 'agency', 'creative', 'photography' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-consultants'           => [
						'url'        => 'https://demosites.io/consultants-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/consultants-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:consultants-bb/wp-content/uploads/2020/05/neve-business-consulting.jpg',
						'title'      => 'Business Consulting',
						'keywords'   => [ 'business', 'portfolio', 'consulting', 'corporate', 'services', 'law', 'financial' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-job-listings'          => [
						'url'        => 'https://demosites.io/job-listings-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/job-listings-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:job-listings-bb/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'      => 'Job Listing',
						'keywords'   => [ 'business', 'portfolio', 'CV', 'job', 'consulting', 'corporate', 'services', 'magazine', 'membership', 'listing' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-barber-shop'           => [
						'url'        => 'https://demosites.io/barber-shop-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/barber-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:barber-shop-bb/wp-content/uploads/2020/05/neve-barber-shop.jpg',
						'title'      => 'Barber Shop',
						'keywords'   => [ 'business', 'barber', 'hair', 'services', 'beauty', 'wellness', 'store' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-personal-trainer'      => [
						'url'        => 'https://demosites.io/personal-trainer-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/personal-trainer-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:personal-trainer-bb/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
						'title'      => 'Personal Trainer',
						'keywords'   => [ 'portfolio', 'personal', 'fitness', 'sports', 'consulting', 'medical', 'health', 'membership', 'instructor' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-real-estate'           => [
						'url'        => 'https://demosites.io/real-estate-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/real-estate-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:real-estate-bb/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'      => 'Real Estate',
						'keywords'   => [ 'other', 'business', 'home', 'architect', 'building', 'membership', 'venue', 'magazine', 'financial', 'services', 'consulting', 'corporate', 'listing' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-events'                => [
						'url'        => 'https://demosites.io/events-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/events-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:events-bb/wp-content/uploads/2020/05/neve-events.jpg',
						'title'      => 'Events',
						'keywords'   => [ 'business', 'other', 'event', 'listing', 'tourist', 'travel', 'magazine', 'artist' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-photography-portfolio' => [
						'url'        => 'https://demosites.io/photography-portfolio-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/photography-portfolio-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:photography-portfolio-bb/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'      => 'Photography Studio',
						'keywords'   => [ 'photography', 'other', 'portfolio', 'services', 'product', 'creative', 'artist', 'magazine', 'design' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-video-agency'          => [
						'url'        => 'https://demosites.io/video-agency-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/video-agency-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:video-agency-bb/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'      => 'Video Agency',
						'keywords'   => [ 'other', 'portfolio', 'video', 'agency', 'consulting', 'services', 'creative', 'artist', 'technology' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-furniture-shop'        => [
						'url'        => 'https://demosites.io/furniture-shop-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/furniture-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:furniture-shop-bb/wp-content/uploads/2020/05/neve-furniture-shop.jpg',
						'title'      => 'Furniture Shop',
						'keywords'   => [ 'business', 'portfolio', 'product', 'services', 'furniture', 'architect', 'building' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-portrait-photography'  => [
						'url'        => 'https://demosites.io/portrait-photopraphy-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/portrait-photopraphy-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:portrait-photopraphy-bb/wp-content/uploads/2020/05/neve-wedding-photography.jpg',
						'title'      => 'Wedding Photography',
						'keywords'   => [ 'photography', 'wedding', 'other', 'portfolio', 'services', 'agency' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-farm'                  => [
						'url'        => 'https://demosites.io/farm-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/farm-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:farm-bb/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'      => 'Farm',
						'keywords'   => [ 'other', 'health', 'food', 'green', 'garden', 'wellness', 'membership', 'home', 'family', 'nature' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-photographer'          => [
						'url'        => 'https://demosites.io/photography-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/photography-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:photography-bb/wp-content/uploads/2020/05/neve-photographer.jpg',
						'title'      => 'Photographer',
						'keywords'   => [ 'photography', 'other', 'portfolio', 'agency', 'services', 'artist', 'creative', 'design' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-kindergarten'          => [
						'url'        => 'https://demosites.io/kindergarden-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/kindergarden-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:kindergarden-bb/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'      => 'Kindergarten',
						'keywords'   => [ 'other', 'school', 'kids', 'membership', 'coaching', 'instructor', 'family', 'education' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-florist'               => [
						'url'        => 'https://demosites.io/florist-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/florist-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:florist-bb/wp-content/uploads/2020/05/neve-florist.jpg',
						'title'      => 'Florist',
						'keywords'   => [ 'business', 'other', 'services', 'product', 'green', 'garden', 'wellness', 'nature', 'flower', 'shop' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-cake-shop'             => [
						'url'        => 'https://demosites.io/cake-shop-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/cake-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:cake-shop-bb/wp-content/uploads/2020/05/neve-cake-shop.jpg',
						'title'      => 'Cake Shop',
						'keywords'   => [ 'other', 'business', 'shop', 'food', 'product', 'store' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-transport'             => [
						'url'        => 'https://demosites.io/transport-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/transport-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:transport-bb/wp-content/uploads/2020/05/neve-transport.jpg',
						'title'      => 'Transport',
						'keywords'   => [ 'business', 'corporate', 'consulting', 'services', 'product', 'technology', 'transportation', 'logistics' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-ebook'                 => [
						'url'        => 'https://demosites.io/ebook-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/ebook-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:ebook-bb/wp-content/uploads/2020/05/neve-ebook.jpg',
						'title'      => 'eBook',
						'keywords'   => [ 'other', 'book', 'e-book', 'product', 'creative', 'shop' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-speed'                 => [
						'url'        => 'https://demosites.io/speed-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/speed-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:speed-bb/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'      => 'Speed',
						'keywords'   => [ 'portfolio', 'business', 'woocommerce', 'consulting', 'corporate', 'creative', 'magazine', 'technology' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-food-magazine'         => [
						'url'        => 'https://demosites.io/food-magazine-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/food-magazine-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:food-magazine-bb/wp-content/uploads/2020/05/neve-food-magazine.jpg',
						'title'      => 'Food Magazine',
						'keywords'   => [ 'food', 'blog', 'magazine', 'green', 'garden', 'product', 'author', 'writing', 'dining' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-web-design'            => [
						'url'        => 'https://demosites.io/web-design-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/web-design-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:web-design-bb/wp-content/uploads/2020/05/neve-web-design.jpg',
						'title'      => 'eCourse - Web Design',
						'keywords'   => [ 'other', 'consulting', 'courses', 'services', 'product', 'sales', 'marketing' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-yoga-studio'           => [
						'url'        => 'https://demosites.io/yoga-studio-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/yoga-studio-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:yoga-studio-bb/wp-content/uploads/2020/05/neve-yoga.jpg',
						'title'      => 'Yoga Studio',
						'keywords'   => [ 'wellness', 'portfolio', 'other', 'fitness', 'yoga', 'health', 'courses' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-sales-funnel'          => [
						'url'        => 'https://demosites.io/sales-funnel-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/sales-funnel-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:sales-funnel-bb/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'      => 'Sales Funnel',
						'keywords'   => [ 'other', 'education', 'courses', 'consulting', 'product', 'creative', 'sales', 'marketing' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-church'                => [
						'url'        => 'https://demosites.io/church-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/church-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:church-bb/wp-content/uploads/2020/05/neve-church.jpg',
						'title'      => 'Church',
						'keywords'   => [ 'church', 'other', 'spiritual', 'faith', 'sermon', 'wedding' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-fashion-magazine'      => [
						'url'        => 'https://demosites.io/fashion-magazine-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/fashion-magazine-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fashion-magazine-bb/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
						'title'      => 'Fashion Magazine',
						'keywords'   => [ 'fashion', 'blog', 'personal', 'apparel', 'clothing', 'product', 'artist', 'magazine', 'beauty', 'wellness', 'jewellery' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-winery'                => [
						'url'        => 'https://demosites.io/winery-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/winery-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:winery-bb/wp-content/uploads/2020/05/neve-winery.png',
						'title'      => 'Winery - Wine Shop',
						'keywords'   => [ 'business', 'wine', 'nature', 'green', 'garden' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-news-magazine'         => [
						'url'        => 'https://demosites.io/news-magazine-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/news-magazine-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:news-magazine-bb/wp-content/uploads/2020/05/neve-news.jpg',
						'title'      => 'News Magazine',
						'keywords'   => [ 'blog', 'creative', 'news', 'magazine' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-coworking'             => [
						'url'        => 'https://demosites.io/coworking-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/coworking-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:coworking-bb/wp-content/uploads/2020/05/neve-coworking.jpg',
						'title'      => 'Coworking Space',
						'keywords'   => [ 'other', 'coworking', 'corporate', 'courses', 'creative', 'job', 'CV', 'technology', 'venue', 'design', 'architect', 'event', 'listing' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-car-rental'            => [
						'url'        => 'https://demosites.io/car-rental-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/car-rental-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:car-rental-bb/wp-content/uploads/2020/05/neve-cart-rental.jpg',
						'title'      => 'Car Rental',
						'keywords'   => [ 'other', 'business', 'corporate', 'services', 'transportation', 'logistics', 'rental' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-moving-company'        => [
						'url'        => 'https://demosites.io/moving-company-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/moving-company-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:moving-company-bb/wp-content/uploads/2020/05/neve-moving-company.jpg',
						'title'      => 'Moving Company Logistics Services',
						'keywords'   => [ 'logistics', 'business', 'transportation', 'furniture', 'building', 'family', 'home' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-translation-services'  => [
						'url'        => 'https://demosites.io/translation-services-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/translation-services-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:translation-services-bb/wp-content/uploads/2020/05/neve-translations.jpg',
						'title'      => 'Translation and Interpreter Services',
						'keywords'   => [ 'business', 'translation', 'services', 'consulting', 'corporate', 'technology', 'writing', 'author' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-coupons'               => [
						'url'        => 'https://demosites.io/coupons-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/coupons-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:coupons-bb/wp-content/uploads/2020/05/neve-coupons.jpg',
						'title'      => 'Coupons Discounts and Offers',
						'keywords'   => [ 'other', 'coupons', 'listing', 'services', 'membership' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-escape-room'           => [
						'url'        => 'https://demosites.io/escape-room-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/escape-room-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:escape-room-bb/wp-content/uploads/2020/05/neve-escape-room.jpg',
						'title'      => 'Escape Room',
						'keywords'   => [ 'other', 'adventure', 'event', 'creative', 'venue' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-cv'                    => [
						'url'        => 'https://demosites.io/cv-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/cv-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:cv-bb/wp-content/uploads/2020/05/neve-resume.jpg',
						'title'      => 'Resume',
						'keywords'   => [ 'portfolio', 'personal', 'resume', 'CV' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-resume-2'              => [
						'url'        => 'https://demosites.io/resume-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/resume-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:resume-bb/wp-content/uploads/2020/05/neve-resume-2.jpg',
						'title'      => 'Resume 2',
						'keywords'   => [ 'personal', 'portfolio', 'resume', 'CV', 'job', 'creative' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-wellness'              => [
						'url'        => 'https://demosites.io/wellness-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/wellness-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:wellness-bb/wp-content/uploads/2020/05/neve-wellness.jpg',
						'title'      => 'Wellness Spa',
						'keywords'   => [ 'wellness', 'business', 'beauty', 'health', 'medical', 'fitness', 'yoga' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-courses'               => [
						'url'        => 'https://demosites.io/courses-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/courses-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:courses-bb/wp-content/uploads/2020/05/neve-courses.jpg',
						'title'      => 'Online Courses',
						'keywords'   => [ 'education', 'other', 'education', 'developer', 'design', 'creative', 'job', 'resume' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-model-agency'          => [
						'url'        => 'https://demosites.io/model-agency-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/model-agency-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:model-agency-bb/wp-content/uploads/2020/05/neve-model-agency.jpg',
						'title'      => 'Fashion Model Agency',
						'keywords'   => [ 'fashion', 'agency', 'business', 'other', 'portfolio', 'model', 'beauty', 'wellness' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-it-company'            => [
						'url'        => 'https://demosites.io/it-company-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/it-company-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:it-company-bb/wp-content/uploads/2020/05/neve-it-solution.jpg',
						'title'      => 'IT Technology Agency',
						'keywords'   => [ 'business', 'portfolio', 'technology', 'corporate', 'creative', 'VR', 'coworking', 'developer', 'design' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-podcast'               => [
						'url'        => 'https://demosites.io/podcast-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/podcast-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:podcast-bb/wp-content/uploads/2020/05/neve-podcast.jpg',
						'title'      => 'Podcast',
						'keywords'   => [ 'blog', 'personal', 'other', 'podcast', 'magazine', 'technology' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-digital-agency'        => [
						'url'        => 'https://demosites.io/digital-agency-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/digital-agency-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:digital-agency-bb/wp-content/uploads/2020/05/neve-digital-agency.jpg',
						'title'      => 'Digital Agency',
						'keywords'   => [ 'portfolio', 'business', 'agency', 'technology', 'design', 'developer', 'services' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-industrial'            => [
						'url'        => 'https://demosites.io/industrial-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/industrial-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:industrial-bb/wp-content/uploads/2020/05/neve-industrial.jpg',
						'title'      => 'Industrial',
						'keywords'   => [ 'business', 'logistics', 'transportation', 'services', 'corporate', 'building', 'factory' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-adventure'             => [
						'url'        => 'https://demosites.io/adventure-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/adventure-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:adventure-bb/wp-content/uploads/2020/05/neve-adventure.jpg',
						'title'      => 'Adventure',
						'keywords'   => [ 'other', 'blog', 'personal', 'magazine', 'travel', 'adventure', 'nature', 'writing', 'author' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-product-launch'        => [
						'url'        => 'https://demosites.io/product-launch-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/product-launch-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:product-launch-bb/wp-content/uploads/2020/05/neve-product-lunch.jpg',
						'title'      => 'Product Launch',
						'keywords'   => [ 'business', 'portfolio', 'other', 'product', 'marketing', 'car', 'bike', 'shop' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-accounting'            => [
						'url'        => 'https://demosites.io/accounting-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/accounting-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:accounting-bb/wp-content/uploads/2020/05/neve-accounting.jpg',
						'title'      => 'Accounting',
						'keywords'   => [ 'business', 'accounting', 'consulting', 'corporate', 'law' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-beauty-shop'           => [
						'url'        => 'https://demosites.io/beauty-shop-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/beauty-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:beauty-shop-bb/wp-content/uploads/2020/05/neve-beauty-shop.jpg',
						'title'      => 'Beauty Shop',
						'keywords'   => [ 'woocommerce', 'business', 'beauty', 'medical', 'health', 'wellness', 'fashion', 'make-up' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-recruitment'           => [
						'url'        => 'https://demosites.io/recruitment-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/recruitment-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:recruitment-bb/wp-content/uploads/2020/05/neve-recruitment.jpg',
						'title'      => 'Recruitment Agency',
						'keywords'   => [ 'business', 'agency', 'other', 'listing', 'job', 'CV', 'corporate', 'recruitment', 'HR' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-artist'                => [
						'url'        => 'https://demosites.io/artist-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/artist-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:artist-bb/wp-content/uploads/2020/05/neve-artist.jpg',
						'title'      => 'Artist',
						'keywords'   => [ 'other', 'personal', 'art', 'artist', 'creative', 'exhibition' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-vr-studio'             => [
						'url'        => 'https://demosites.io/vr-studio-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/vr-studio-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:vr-studio-bb/wp-content/uploads/2020/05/neve-vr.jpg',
						'title'      => 'VR Studio',
						'keywords'   => [ 'other', 'portfolio', 'creative', 'technology', 'VR', 'art' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-makeup-artist'         => [
						'url'        => 'https://demosites.io/makeup-artist-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/makeup-artist-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:makeup-artist-bb/wp-content/uploads/2020/05/neve-makeup.jpg',
						'title'      => 'Makeup Artist',
						'keywords'   => [ 'personal', 'other', 'CV', 'job', 'artist', 'fitness', 'medical', 'beauty', 'wellness' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-diving'                => [
						'url'        => 'https://demosites.io/diving-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/diving-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:diving-bb/wp-content/uploads/2020/05/neve-diving.jpg',
						'title'      => 'Scuba Diving',
						'keywords'   => [ 'sports', 'other', 'courses', 'fitness', 'green', 'sea', 'boat', 'marine', 'summer', 'travel', 'tourist', 'family' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-wine-bar'              => [
						'url'        => 'https://demosites.io/wine-bar-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/wine-bar-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:wine-bar-bb/wp-content/uploads/2020/05/wine-bar.jpg',
						'title'      => 'Wine Bar',
						'keywords'   => [ 'business', 'wine', 'health', 'food', 'green', 'garden', 'wellness', 'home', 'family' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-mtb-race'              => [
						'url'        => 'https://demosites.io/mtb-race-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/mtb-race-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:mtb-race-bb/wp-content/uploads/2020/05/neve-race.jpg',
						'title'      => 'Mountain Biking Race',
						'keywords'   => [ 'sports', 'other', 'business', 'event', 'bike', 'adventure', 'nature' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-movie'                 => [
						'url'        => 'https://demosites.io/movie-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/movie-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:movie-bb/wp-content/uploads/2020/05/neve-movie.jpg',
						'title'      => 'Movie Showcase',
						'keywords'   => [ 'entertainment', 'portfolio', 'other', 'movie', 'agency', 'creative', 'music', 'artist', 'magaizne', 'video' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-running-club'          => [
						'url'        => 'https://demosites.io/running-club-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/running-club-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:running-club-bb/wp-content/uploads/2020/05/neve-run.jpg',
						'title'      => 'Running Club',
						'keywords'   => [ 'sports', 'other', 'fitness', 'health', 'services', 'membership', 'running', 'wellness' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-jewellery-shop'        => [
						'url'        => 'https://demosites.io/jewellery-shop-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/jewellery-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:jewellery-shop-bb/wp-content/uploads/2020/05/neve-jewellery.jpg',
						'title'      => 'Jewellery Shop',
						'keywords'   => [ 'other', 'woocommerce', 'jewellery', 'shop', 'fashion', 'store', 'product', 'beauty' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-car-service'           => [
						'url'        => 'https://demosites.io/car-service-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/car-service-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:car-service-bb/wp-content/uploads/2020/05/neve-car-service.jpg',
						'title'      => 'Car Vehicle Service',
						'keywords'   => [ 'business', 'repair', 'car', 'services' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-museum'                => [
						'url'        => 'https://demosites.io/museum-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/museum-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:museum-bb/wp-content/uploads/2020/05/neve-museum.jpg',
						'title'      => 'Museum',
						'keywords'   => [ 'other', 'education', 'artist', 'art', 'venue', 'event', 'creative', 'building', 'exhibition' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-exhibition'            => [
						'url'        => 'https://demosites.io/exhibition-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/exhibition-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:exhibition-bb/wp-content/uploads/2020/05/neve-art-expo.jpg',
						'title'      => 'Art Exhibition',
						'keywords'   => [ 'other', 'art', 'exhibition', 'artist', 'venue' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-conference'            => [
						'url'        => 'https://demosites.io/conference-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/conference-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:conference-bb/wp-content/uploads/2020/05/neve-conference.jpg',
						'title'      => 'Conference',
						'keywords'   => [ 'other', 'event', 'conference', 'listing', 'corporate', 'membership' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-university'            => [
						'url'        => 'https://demosites.io/university-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/university-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:university-bb/wp-content/uploads/2020/05/neve-university.jpg',
						'title'      => 'University',
						'keywords'   => [ 'education', 'other', 'courses', 'consulting', 'resume', 'job', 'university' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-interior-design'       => [
						'url'        => 'https://demosites.io/interior-design-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/interior-design-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:interior-design-bb/wp-content/uploads/2020/05/neve-interior-design-2.jpg',
						'title'      => 'Interior Design',
						'keywords'   => [ 'portfolio', 'consulting', 'garden', 'services', 'design' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-electronics-store'     => [
						'url'        => 'https://demosites.io/electronic-store-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/electronic-store-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:electronic-store-bb/wp-content/uploads/2020/05/neve-electronics.jpg',
						'title'      => 'Electronics Shop',
						'keywords'   => [ 'woocommerce', 'business', 'technology', 'product', 'store' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-print-shop'            => [
						'url'        => 'https://demosites.io/print-shop-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/print-shop-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:print-shop-bb/wp-content/uploads/2020/05/neve-print.jpg',
						'title'      => 'Print Shop',
						'keywords'   => [ 'woocommerce', 'portfolio', 'consulting', 'services', 'clothing', 'product', 'creative', 'technology', 'store' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-city-tour'             => [
						'url'        => 'https://demosites.io/city-tour-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/city-tour-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:city-tour-bb/wp-content/uploads/2020/05/neve-city-tour.jpg',
						'title'      => 'City Tours',
						'keywords'   => [ 'blog', 'other', 'fitness', 'sports', 'services', 'health', 'tourist' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-insurance'             => [
						'url'        => 'https://demosites.io/insurance-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/insurance-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:insurance-bb/wp-content/uploads/2020/05/neve-insurance.jpg',
						'title'      => 'Insurance',
						'keywords'   => [ 'business', 'consulting', 'corporate', 'family' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-personal-blog'         => [
						'url'        => 'https://demosites.io/personal-blog-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/personal-blog-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:personal-blog-bb/wp-content/uploads/2020/05/neve-personal-blog.jpg',
						'title'      => 'Personal Blog',
						'keywords'   => [ 'personal', 'blog', 'food', 'green', 'resume', 'creative', 'job', 'travel', 'magazine', 'book', 'design', 'writing', 'author' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-equitation'            => [
						'url'        => 'https://demosites.io/equitation-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/equitation-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:equitation-bb/wp-content/uploads/2020/05/neve-horses.jpg',
						'title'      => 'Equitation',
						'keywords'   => [ 'sports', 'business', 'horse', 'other', 'membership', 'animal' ],
						'upsell'     => $upsell_status,
					],
					'neve-beaver-travel-blog'           => [
						'url'        => 'https://demosites.io/travel-blog-bb/',
						'remote_url' => 'https://api.themeisle.com/sites/travel-blog-bb/',
						'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:travel-blog-bb/wp-content/uploads/2020/05/neve-travel-blog.jpg',
						'title'      => 'Travel Blog',
						'keywords'   => [ 'blog', 'personal', 'travel', 'fitness', 'sports', 'summer', 'magazine' ],
						'upsell'     => $upsell_status,
					],
				],
				'divi builder'     => [
					'neve-divi-lawyers'      => [
						'url'              => 'https://demosites.io/lawyers-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/lawyers-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:lawyers-dv/wp-content/uploads/2020/05/neve-lawyers.jpg',
						'title'            => 'Lawyers',
						'keywords'         => [ 'business', 'law', 'consulting', 'corporate', 'services', 'financial', 'writing', 'book' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-cafe'         => [
						'url'              => 'https://demosites.io/cafe-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/cafe-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:cafe-dv/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'            => 'Coffee Shop',
						'keywords'         => [ 'business', 'coffee', 'store', 'venue', 'product', 'dining', 'services' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-fashion'      => [
						'url'              => 'https://demosites.io/fashion-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/fashion-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:fashion-dv/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'            => 'Fashion',
						'keywords'         => [ 'blog', 'apparel', 'clothing', 'magazine', 'beauty', 'wellness', 'design', 'writing', 'author' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-job-listings' => [
						'url'              => 'https://demosites.io/job-listing-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/job-listing-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:job-listing-dv/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'            => 'Job Listing',
						'keywords'         => [ 'business', 'portfolio', 'CV', 'job', 'consulting', 'corporate', 'services', 'magazine', 'membership', 'listing' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-real-estate'  => [
						'url'              => 'https://demosites.io/real-estate-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/real-estate-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:real-estate-dv/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'            => 'Real Estate',
						'keywords'         => [ 'other', 'business', 'home', 'architect', 'building', 'membership', 'venue', 'magazine', 'financial', 'services', 'consulting', 'corporate', 'listing' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-events'       => [
						'url'              => 'https://demosites.io/events-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/events-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:events-dv/wp-content/uploads/2020/05/neve-events.jpg',
						'title'            => 'Events',
						'keywords'         => [ 'business', 'other', 'event', 'listing', 'tourist', 'travel', 'magazine', 'artist' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-farm'         => [
						'url'              => 'https://demosites.io/farm-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/farm-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:farm-dv/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'            => 'Farm',
						'keywords'         => [ 'other', 'health', 'food', 'green', 'garden', 'wellness', 'membership', 'home', 'family', 'nature' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-kindergarten' => [
						'url'              => 'https://demosites.io/kindergarten-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/kindergarten-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:kindergarten-dv/wp-content/uploads/2020/05/neve-kindergarden.jpg',
						'title'            => 'Kindergarten',
						'keywords'         => [ 'other', 'school', 'kids', 'membership', 'coaching', 'instructor', 'family', 'education' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-speed'        => [
						'url'              => 'https://demosites.io/speed-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/speed-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:speed-dv/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'            => 'Speed',
						'keywords'         => [ 'portfolio', 'business', 'woocommerce', 'consulting', 'corporate', 'creative', 'magazine', 'technology' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $divi_plugin_config,
					],
					'neve-divi-funnel'       => [
						'url'              => 'https://demosites.io/sales-funnel-dv/',
						'remote_url'       => 'https://api.themeisle.com/sites/sales-funnel-dv/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:sales-funnel-dv/wp-content/uploads/2020/05/neve-sales.jpg',
						'title'            => 'Sales Funnel',
						'keywords'         => [ 'other', 'education', 'courses', 'consulting', 'product', 'creative', 'sales', 'marketing' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $divi_plugin_config,
					],
				],
				'thrive architect' => [
					'neve-thrive-cafe'                  => [
						'url'              => 'https://demosites.io/cafe-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/cafe-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:cafe-th/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
						'title'            => 'Coffee Shop',
						'keywords'         => [ 'business', 'coffee', 'store', 'venue', 'product', 'dining', 'services' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-fashion'               => [
						'url'              => 'https://demosites.io/fashion-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/fashion-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:fashion-th/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
						'title'            => 'Fashion',
						'keywords'         => [ 'blog', 'apparel', 'clothing', 'magazine', 'beauty', 'wellness', 'design', 'writing', 'author' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-showcase'              => [
						'url'              => 'https://demosites.io/showcase-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/showcase-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:showcase-th/wp-content/uploads/2020/05/neve-showcase-new.jpg',
						'title'            => 'Showcase',
						'keywords'         => [ 'portfolio', 'personal', 'blog', 'corporate', 'services', 'agency', 'creative', 'photography' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-job-listings'          => [
						'url'              => 'https://demosites.io/job-listings-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/job-listings-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:job-listings-th/wp-content/uploads/2020/05/neve-job-listings.jpg',
						'title'            => 'Job Listing',
						'keywords'         => [ 'business', 'portfolio', 'CV', 'job', 'consulting', 'corporate', 'services', 'magazine', 'membership', 'listing' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-real-estate'           => [
						'url'              => 'https://demosites.io/real-estate-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/real-estate-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:real-estate-th/wp-content/uploads/2020/05/neve-real-estate.jpg',
						'title'            => 'Real Estate',
						'keywords'         => [ 'other', 'business', 'home', 'architect', 'building', 'membership', 'venue', 'magazine', 'financial', 'services', 'consulting', 'corporate', 'listing' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-events'                => [
						'url'              => 'https://demosites.io/events-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/events-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:events-th/wp-content/uploads/2020/05/neve-events.jpg',
						'title'            => 'Events',
						'keywords'         => [ 'business', 'other', 'event', 'listing', 'tourist', 'travel', 'magazine', 'artist' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-photography-portfolio' => [
						'url'              => 'https://demosites.io/photography-portfolio-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/photography-portfolio-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:photography-portfolio-th/wp-content/uploads/2020/05/neve-studio-photography.jpg',
						'title'            => 'Photography Studio',
						'keywords'         => [ 'photography', 'other', 'portfolio', 'services', 'product', 'creative', 'artist', 'magazine', 'design' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-video-agency'          => [
						'url'              => 'https://demosites.io/video-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/video-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:video-th/wp-content/uploads/2020/05/neve-vide-agency.jpg',
						'title'            => 'Video Agency',
						'keywords'         => [ 'other', 'portfolio', 'video', 'agency', 'consulting', 'services', 'creative', 'artist', 'technology' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-farm'                  => [
						'url'              => 'https://demosites.io/farm-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/farm-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:farm-th/wp-content/uploads/2020/05/neve-farm.jpg',
						'title'            => 'Farm',
						'keywords'         => [ 'other', 'health', 'food', 'green', 'garden', 'wellness', 'membership', 'home', 'family', 'nature' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $thrive_plugin_config,
					],
					'neve-thrive-speed'                 => [
						'url'              => 'https://demosites.io/speed-th/',
						'remote_url'       => 'https://api.themeisle.com/sites/speed-th/',
						'screenshot'       => 'https://api.themeisle.com/sites/images/q:auto/cb:speed-th/wp-content/uploads/2020/05/neve-speed.jpg',
						'title'            => 'Speed',
						'keywords'         => [ 'portfolio', 'business', 'woocommerce', 'consulting', 'corporate', 'creative', 'magazine', 'technology' ],
						'upsell'           => $upsell_status,
						'external_plugins' => $thrive_plugin_config,
					],
				],
			],
			'upsell'      => [],
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
		$this->onboarding_config['remote'] = $this->shuffle_sites_array( $this->onboarding_config['remote'] );

		return apply_filters( 'neve_filter_onboarding_sites', $this->onboarding_config );
	}


	/**
	 * Shuffle available sites to change display order.
	 *
	 * @param array $sites sites array.
	 *
	 * @return array
	 */
	private function shuffle_sites_array( $sites ) {
		$fixed      = array(
			'elementor'      => array(
				'neve-web-agency' => true,
				'neve-main'       => true,
			),
			'beaver builder' => array(
				'neve-beaver-web-agency' => true,
				'neve-beaver-onboarding' => true,
			),
			'gutenberg'      => array(
				'neve-web-agency-gutenberg' => true,
				'neve-main-gutenberg'       => true,
			),
			'brizy'          => array( 'neve-brizy-main' => true ),
		);
		$normalized = array();
		foreach ( $sites as $editor => $sites_for_editor ) {
			$normalized[ $editor ] = isset( $fixed[ $editor ] ) ? $fixed[ $editor ] : array();
			$sites_for_editor      = $this->shuffle_associative_array( $sites_for_editor );
			foreach ( $sites_for_editor as $site_slug => $site_data ) {
				if ( isset( $normalized[ $editor ][ $site_slug ] ) ) {
					$normalized[ $editor ][ $site_slug ] = $site_data;
					unset( $sites_for_editor[ $site_slug ] );
				}
			}
			$normalized[ $editor ] = array_merge( $normalized[ $editor ], $sites_for_editor );
		}

		return $normalized;
	}

	/**
	 * Shuffle associative array.
	 *
	 * @param array $array associative array.
	 *
	 * @return array
	 */
	private function shuffle_associative_array( $array ) {
		$keys     = array_keys( $array );
		$shuffled = array();

		shuffle( $keys );
		foreach ( $keys as $key ) {
			$shuffled[ $key ] = $array[ $key ];
		}

		return $shuffled;
	}

	/**
	 * Add gutenberg starter sites if wp_version > 5.0.0
	 */
	private function add_gutenberg_starter_sites() {
		global $wp_version;

		if ( version_compare( $wp_version, '5.0', '>' ) === false ) {
			return;
		}
		$upsell_status = $this->get_upsell_status();

		$this->onboarding_config['editors'][]           = 'gutenberg';
		$this->onboarding_config['remote']['gutenberg'] = [
			'neve-main-gutenberg'               => [
				'url'        => 'https://demosites.io/onboarding-gutenberg',
				'remote_url' => 'https://api.themeisle.com/sites/onboarding-gutenberg/',
				'title'      => 'Original',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:onboarding-gutenberg/wp-content/uploads/2020/05/neve-original.png',
				'keywords'   => [ 'business', 'woocommerce', 'consulting', 'product', 'creative', 'design' ],
			],
			'neve-web-agency-gutenberg'         => [
				'url'        => 'https://demosites.io/web-agency-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/web-agency-gb/',
				'title'      => 'Web Agency',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:web-agency-gb/wp-content/uploads/2020/05/neve-web-agency-all-new.png',
				'keywords'   => [ 'business', 'portfolio', 'services', 'product', 'agency', 'creative', 'photography' ],
			],
			'neve-blogger-gutenberg'            => [
				'url'        => 'https://demosites.io/blogger-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/blogger-gb/',
				'title'      => 'Blogger',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:blogger-gb/wp-content/uploads/2020/05/neve-blogger.jpg',
				'keywords'   => [ 'services', 'resume', 'blog', 'CV', 'creative', 'magazine', 'writing', 'author' ],
			],
			'neve-restaurant-gutenberg'         => [
				'url'        => 'https://demosites.io/restaurant-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/restaurant-gb/',
				'title'      => 'Restaurant',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:restaurant-gb/wp-content/uploads/2020/05/screenshot.png',
				'keywords'   => [ 'business', 'other', 'restaurant', 'venue', 'coffee', 'dining', 'family' ],
			],
			'neve-charity-gutenberg'            => [
				'url'        => 'https://demosites.io/charity-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/charity-gb/',
				'title'      => 'Charity',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:charity-gb/wp-content/uploads/2020/05/screenshot-1.png',
				'keywords'   => [ 'other', 'donation', 'charity', 'non-profit' ],
			],
			'neve-vet-center-gutenberg'         => [
				'url'        => 'https://demosites.io/vet-center-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/vet-center-gb/',
				'title'      => 'Vet Center',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:vet-center-gb/wp-content/uploads/2020/05/screenshot-2.png',
				'keywords'   => [ 'business', 'other', 'pet', 'doctor', 'clinic', 'medical', 'health', 'animal' ],
			],
			'neve-doctors-gutenberg'            => [
				'url'        => 'https://demosites.io/doctors-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/doctors-gb/',
				'title'      => 'Doctors',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:doctors-gb/wp-content/uploads/2020/05/screenshot-3.png',
				'keywords'   => [ 'medical', 'other', 'doctor', 'beauty', 'fitness', 'sports', 'clinic' ],
			],
			'neve-architecture-gutenberg'       => [
				'url'        => 'https://demosites.io/architecture-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/architecture-gb/',
				'title'      => 'Architecture',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:architecture-gb/wp-content/uploads/2020/05/screenshot-4.png',
				'keywords'   => [ 'business', 'portfolio', 'architect', 'consulting', 'corporate', 'garden', 'creative', 'design', 'home', 'building' ],
			],
			'neve-fitness-gutenberg'            => [
				'url'        => 'https://demosites.io/fitness-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/fitness-gb/',
				'title'      => 'Fitness',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fitness-gb/wp-content/uploads/2020/05/screenshot-5.png',
				'keywords'   => [ 'business', 'other', 'fitness', 'gym', 'consulting', 'health', 'medical' ],
			],
			'neve-vacation-rental-gutenberg'    => [
				'url'        => 'https://demosites.io/vacation-rental-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/vacation-rental-gb/',
				'title'      => 'Vacation Rental',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:vacation-rental-gb/wp-content/uploads/2020/05/screenshot-6.png',
				'keywords'   => [ 'business', 'portfolio', 'other', 'sea', 'boat', 'marine', 'summer', 'travel', 'tourist', 'magazine', 'wellness', 'venue', 'listing', 'event', 'architect', 'home', 'building', 'rental' ],
			],
			'neve-music-band-gutenberg'         => [
				'url'        => 'https://demosites.io/music-band-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/music-band-gb/',
				'title'      => 'Music Band',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:music-band-gb/wp-content/uploads/2020/05/screenshot-7.png',
				'keywords'   => [ 'other', 'portfolio', 'music', 'DJ', 'creative', 'artist', 'sound', 'technology' ],
			],
			'neve-wedding-gutenberg'            => [
				'url'        => 'https://demosites.io/wedding-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/wedding-gb/',
				'title'      => 'Wedding',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:wedding-gb/wp-content/uploads/2020/05/screenshot.jpg',
				'keywords'   => [ 'other', 'wedding', 'invitation', 'event' ],
			],
			'neve-themotion-gutenberg'          => [
				'url'        => 'https://demosites.io/themotion-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/themotion-gb/',
				'title'      => 'Video Blog',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:themotion-gb/wp-content/uploads/2020/05/screenshot-1.jpg',
				'keywords'   => [ 'blog', 'author', 'design', 'clean', 'magazine' ],
			],
			'neve-amadeus-gutenberg'            => [
				'url'        => 'https://demosites.io/amadeus-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/amadeus-gb/',
				'title'      => 'Music Teacher',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:amadeus-gb/wp-content/uploads/2020/05/screenshot-2.jpg',
				'keywords'   => [ 'portfolio', 'personal', 'music', 'event', 'creative', 'sound', 'artist', 'listing', 'author', 'writing' ],
			],
			'neve-oblique-gutenberg'            => [
				'url'        => 'https://demosites.io/oblique-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/oblique-gb/',
				'title'      => 'Vintage',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:oblique-gb/wp-content/uploads/2020/05/screenshot-3.jpg',
				'keywords'   => [ 'blog', 'fashion', 'magazine', 'author', 'writing', 'beauty' ],
			],
			'neve-rokophoto-gutenberg'          => [
				'url'        => 'https://demosites.io/rokophoto-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/rokophoto-gb/',
				'title'      => 'Photography',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:rokophoto-gb/wp-content/uploads/2020/05/screenshot-4.jpg',
				'keywords'   => [ 'photography', 'portfolio', 'services', 'creative', 'magazine' ],
			],
			'neve-energy-panels-gutenberg'      => [
				'url'        => 'https://demosites.io/energy-panels-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/energy-panels-gb/',
				'title'      => 'Energy Panels',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:energy-panels-gb/wp-content/uploads/2020/05/screenshot-5.jpg',
				'keywords'   => [ 'business', 'other', 'energy', 'solar', 'power', 'corporate', 'consulting', 'services', 'clean' ],
			],
			'neve-lawyers-gutenberg'            => [
				'url'        => 'https://demosites.io/lawyers-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/lawyers-gb/',
				'title'      => 'Lawyers',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:lawyers-gb/wp-content/uploads/2020/05/screenshot-6.jpg',
				'keywords'   => [ 'business', 'law', 'consulting', 'corporate', 'services', 'financial', 'writing', 'book' ],
			],
			'neve-freelancer-gutenberg'         => [
				'url'        => 'https://demosites.io/freelancer-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/freelancer-gb/',
				'title'      => 'Freelancer',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:freelancer-gb/wp-content/uploads/2020/05/screenshot-7.jpg',
				'keywords'   => [ 'portfolio', 'personal', 'consulting', 'services', 'product', 'CV', 'resume', 'artist', 'creative', 'developer' ],
			],
			'neve-tattoo-gutenberg'             => [
				'url'        => 'https://demosites.io/tatoo-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/tatoo-gb/',
				'title'      => 'Tattoo',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:tatoo-gb/wp-content/uploads/2020/05/screenshot-8.jpg',
				'keywords'   => [ 'portfolio', 'personal', 'artist', 'medical', 'tattoo', 'beauty', 'creative' ],
			],
			'neve-zelle-gutenberg'              => [
				'url'        => 'https://demosites.io/zelle-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/zelle-gb/',
				'title'      => 'Travel Agency',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:zelle-gb/wp-content/uploads/2020/05/screenshot-9.jpg',
				'keywords'   => [ 'business', 'blog', 'other', 'travel', 'tourist', 'magazine', 'writing', 'author', 'fitness', 'sports', 'nature' ],
			],
			'neve-life-coach-gutenberg'         => [
				'url'        => 'https://demosites.io/scholar-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/scholar-gb/',
				'title'      => 'Life Coach',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:scholar-gb/wp-content/uploads/2020/05/screenshot-10.jpg',
				'keywords'   => [ 'business', 'personal', 'blog', 'fitness', 'medical', 'health', 'consulting', 'services', 'family', 'instructor', 'coaching' ],
			],
			'neve-creative-portfolio-gutenberg' => [
				'url'        => 'https://demosites.io/creative-portofolio-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/creative-portofolio-gb/',
				'title'      => 'Creative Portfolio',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:creative-portofolio-gb/wp-content/uploads/2020/05/screenshot-11.jpg',
				'keywords'   => [ 'portfolio', 'services', 'product', 'creative', 'technology', 'design' ],
			],
			'neve-band-gutenberg'               => [
				'url'        => 'https://demosites.io/band-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/band-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:band-gb/wp-content/uploads/2020/05/neve-band.jpg',
				'title'      => 'Music Band 2',
				'keywords'   => [ 'personal', 'other', 'creative', 'music', 'artist', 'sound' ],
			],
			'neve-jewellery-2-gutenberg'        => [
				'url'        => 'https://demosites.io/jewellery-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/jewellery-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:jewellery-gb/wp-content/uploads/2020/05/neve-jewellery-2.jpg',
				'title'      => 'Jewellery Shop 2',
				'keywords'   => [ 'woocommerce', 'clothing', 'apparel', 'jewellery', 'beauty' ],
			],
			'neve-psychologist-gutenberg'       => [
				'url'        => 'https://demosites.io/psychologist-gb/',
				'remote_url' => 'https://api.themeisle.com/sites/psychologist-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:psychologist-gb/wp-content/uploads/2020/05/neve-psychologist.jpg',
				'title'      => 'Psychologist',
				'keywords'   => [ 'other', 'fitness', 'medical', 'consulting', 'health', 'doctor' ],
			],
			'neve-cafe-gutenberg'               => [
				'url'        => 'https://demosites.io/cafe-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:cafe-gb/wp-content/uploads/2020/05/neve-caffe-new-ss.png',
				'title'      => 'Coffee Shop',
				'keywords'   => [ 'business', 'coffee', 'store', 'venue', 'product', 'dining', 'services' ],
				'upsell'     => $upsell_status,
			],
			'neve-constructions-gutenberg'      => [
				'url'        => 'https://demosites.io/constructions-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:constructions-gb/wp-content/uploads/2020/05/neve-construction-new-screenshot.png',
				'title'      => 'Constructions Company',
				'keywords'   => [ 'business', 'corporate', 'building', 'home', 'architect' ],
				'upsell'     => $upsell_status,
			],
			'neve-fashion-gutenberg'            => [
				'url'        => 'https://demosites.io/fashion-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fashion-gb/wp-content/uploads/2020/05/neve-fashion-demo-screenshot.png',
				'title'      => 'Fashion',
				'keywords'   => [ 'blog', 'apparel', 'clothing', 'magazine', 'beauty', 'wellness', 'design', 'writing', 'author' ],
				'upsell'     => $upsell_status,
			],
			'neve-showcase-gutenberg'           => [
				'url'        => 'https://demosites.io/showcase-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:showcase-gb/wp-content/uploads/2020/05/neve-showcase-new.jpg',
				'title'      => 'Showcase',
				'keywords'   => [ 'portfolio', 'personal', 'blog', 'corporate', 'services', 'agency', 'creative', 'photography' ],
				'upsell'     => $upsell_status,
			],
			'neve-consultants-gutenberg'        => [
				'url'        => 'https://demosites.io/consultants-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:consultants-gb/wp-content/uploads/2020/05/neve-business-consulting.jpg',
				'title'      => 'Business Consulting',
				'keywords'   => [ 'business', 'portfolio', 'consulting', 'corporate', 'services', 'law', 'financial' ],
				'upsell'     => $upsell_status,
			],
			'neve-job-listings-gutenberg'       => [
				'url'        => 'https://demosites.io/job-listings-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:job-listings-gb/wp-content/uploads/2020/05/neve-job-listings.jpg',
				'title'      => 'Job Listing',
				'keywords'   => [ 'business', 'portfolio', 'CV', 'job', 'consulting', 'corporate', 'services', 'magazine', 'membership', 'listing' ],
				'upsell'     => $upsell_status,
			],
			'neve-barber-shop-gutenberg'        => [
				'url'        => 'https://demosites.io/barber-shop-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:barber-shop-gb/wp-content/uploads/2020/05/neve-barber-shop.jpg',
				'title'      => 'Barber Shop',
				'keywords'   => [ 'business', 'barber', 'hair', 'services', 'beauty', 'wellness', 'store' ],
				'upsell'     => $upsell_status,
			],
			'neve-personal-trainer-gutenberg'   => [
				'url'        => 'https://demosites.io/personal-trainer-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:personal-trainer-gb/wp-content/uploads/2020/05/neve-personal-trainer.jpg',
				'title'      => 'Personal Trainer',
				'keywords'   => [ 'portfolio', 'personal', 'fitness', 'sports', 'consulting', 'medical', 'health', 'membership', 'instructor' ],
				'upsell'     => $upsell_status,
			],
			'neve-real-estate-gutenberg'        => [
				'url'        => 'https://demosites.io/real-estate-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:real-estate-gb/wp-content/uploads/2020/05/neve-real-estate.jpg',
				'title'      => 'Real Estate',
				'keywords'   => [ 'other', 'business', 'home', 'architect', 'building', 'membership', 'venue', 'magazine', 'financial', 'services', 'consulting', 'corporate', 'listing' ],
				'upsell'     => $upsell_status,
			],
			'neve-events-gutenberg'             => [
				'url'        => 'https://demosites.io/events-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:events-gb/wp-content/uploads/2020/05/neve-events.jpg',
				'title'      => 'Events',
				'keywords'   => [ 'business', 'other', 'event', 'listing', 'tourist', 'travel', 'magazine', 'artist' ],
				'upsell'     => $upsell_status,
			],
			'neve-video-agency-gutenberg'       => [
				'url'        => 'https://demosites.io/video-agency-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:video-agency-gb/wp-content/uploads/2020/05/neve-vide-agency.jpg',
				'title'      => 'Video Agency',
				'keywords'   => [ 'other', 'portfolio', 'video', 'agency', 'consulting', 'services', 'creative', 'artist', 'technology' ],
				'upsell'     => $upsell_status,
			],
			'neve-farm-gutenberg'               => [
				'url'        => 'https://demosites.io/farm-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:farm-gb/wp-content/uploads/2020/05/neve-farm.jpg',
				'title'      => 'Farm',
				'keywords'   => [ 'other', 'health', 'food', 'green', 'garden', 'wellness', 'membership', 'home', 'family', 'nature' ],
				'upsell'     => $upsell_status,
			],
			'neve-florist-gutenberg'            => [
				'url'        => 'https://demosites.io/florist-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:florist-gb/wp-content/uploads/2020/05/neve-florist.jpg',
				'title'      => 'Florist',
				'keywords'   => [ 'business', 'other', 'services', 'product', 'green', 'garden', 'wellness', 'nature', 'flower', 'shop' ],
				'upsell'     => $upsell_status,
			],
			'neve-cake-shop-gutenberg'          => [
				'url'        => 'https://demosites.io/cakeshop-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:cakeshop-gb/wp-content/uploads/2020/05/neve-cake-shop.jpg',
				'title'      => 'Cake Shop',
				'keywords'   => [ 'other', 'business', 'shop', 'food', 'product', 'store' ],
				'upsell'     => $upsell_status,
			],
			'neve-ebook-gutenberg'              => [
				'url'        => 'https://demosites.io/ebook-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:ebook-gb/wp-content/uploads/2020/05/neve-ebook.jpg',
				'title'      => 'eBook',
				'keywords'   => [ 'other', 'book', 'e-book', 'product', 'creative', 'shop' ],
				'upsell'     => $upsell_status,
			],
			'neve-food-magazine-gutenberg'      => [
				'url'        => 'https://demosites.io/food-magazine-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:food-magazine-gb/wp-content/uploads/2020/05/neve-food-magazine.jpg',
				'title'      => 'Food Magazine',
				'keywords'   => [ 'food', 'blog', 'magazine', 'green', 'garden', 'product', 'author', 'writing', 'dining' ],
				'upsell'     => $upsell_status,
			],
			'neve-yoga-studio-gutenberg'        => [
				'url'        => 'https://demosites.io/yoga-studio-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:yoga-studio-gb/wp-content/uploads/2020/05/neve-yoga.jpg',
				'title'      => 'Yoga Studio',
				'keywords'   => [ 'wellness', 'portfolio', 'other', 'fitness', 'yoga', 'health', 'courses' ],
				'upsell'     => $upsell_status,
			],
			'neve-fashion-magazine-gutenberg'   => [
				'url'        => 'https://demosites.io/fashion-magazine-gb/',
				'title'      => 'Fashion Magazine',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:fashion-magazine-gb/wp-content/uploads/2020/05/neve-fashion-mag.jpg',
				'keywords'   => [ 'fashion', 'blog', 'personal', 'apparel', 'clothing', 'product', 'artist', 'magazine', 'beauty', 'wellness', 'jewellery' ],
				'upsell'     => $upsell_status,
			],
			'neve-winery-gutenberg'             => [
				'url'        => 'https://demosites.io/winery-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:winery-gb/wp-content/uploads/2020/05/neve-winery.png',
				'title'      => 'Winery - Wine Shop',
				'keywords'   => [ 'business', 'wine', 'nature', 'green', 'garden' ],
				'upsell'     => $upsell_status,
			],
			'neve-public-notary-gutenberg'      => [
				'url'        => 'https://demosites.io/public-notary-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:public-notary-gb/wp-content/uploads/2020/06/public-notary.jpg',
				'title'      => 'Public Notary',
				'keywords'   => [ 'business', 'law', 'corporate', 'services' ],
				'upsell'     => $upsell_status,
			],
			'neve-sports-academy-gutenberg'     => [
				'url'        => 'https://demosites.io/sports-academy-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:sports-academy-gb/wp-content/uploads/2020/07/sports-academy.jpg',
				'title'      => 'Sports Academy',
				'keywords'   => [ 'business', 'other', 'fitness', 'courses', 'sports' ],
				'upsell'     => $upsell_status,
			],
			'neve-craft-beer-gutenberg'         => [
				'url'        => 'https://demosites.io/craft-beer-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:craft-beer-gb/wp-content/uploads/2020/05/neve-craft-beer.jpg',
				'title'      => 'Craft Beer',
				'keywords'   => [ 'business', 'woocommerce', 'product', 'food' ],
				'upsell'     => $upsell_status,
			],
			'neve-travel-blog-gutenberg'        => [
				'url'        => 'https://demosites.io/travel-blog-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:travel-blog-gb/wp-content/uploads/2020/05/neve-travel-blog.jpg',
				'title'      => 'Travel Blog',
				'keywords'   => [ 'blog', 'personal', 'travel', 'fitness', 'sports', 'summer', 'magazine' ],
				'upsell'     => $upsell_status,
			],
			'neve-personal-blog-gutenberg'      => [
				'url'        => 'https://demosites.io/personal-blog-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:personal-blog-gb/wp-content/uploads/2020/05/neve-personal-blog.jpg',
				'title'      => 'Personal Blog',
				'keywords'   => [ 'personal', 'blog', 'food', 'green', 'resume', 'creative', 'job', 'travel', 'magazine', 'book', 'design', 'writing', 'author' ],
				'upsell'     => $upsell_status,
			],
			'neve-makeup-artist-gutenberg'      => [
				'url'        => 'https://demosites.io/makeup-artist-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:makeup-artist-gb/wp-content/uploads/2020/05/neve-makeup.jpg',
				'title'      => 'Makeup Artist',
				'keywords'   => [ 'personal', 'other', 'CV', 'job', 'artist', 'fitness', 'medical', 'beauty', 'wellness' ],
				'upsell'     => $upsell_status,
			],
			'neve-beauty-shop-gutenberg'        => [
				'url'        => 'https://demosites.io/beauty-shop-gb/',
				'screenshot' => 'https://api.themeisle.com/sites/images/q:auto/cb:beauty-shop-gb/wp-content/uploads/2020/05/neve-beauty-shop.jpg',
				'title'      => 'Beauty Shop',
				'keywords'   => [ 'woocommerce', 'business' ],
				'upsell'     => $upsell_status,
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
				'product_grid' => array(
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

	/**
	 * Get upsell status.
	 *
	 * @return bool
	 */
	private function get_upsell_status() {
		$category         = apply_filters( 'product_neve_license_plan', -1 );
		$category_mapping = [
			1 => 1,
			2 => 1,
			3 => 2,
			4 => 2,
			5 => 3,
			6 => 3,
			7 => 1,
			8 => 2,
			9 => 3,
		];
		return ! isset( $category_mapping[ $category ] ) || $category_mapping[ $category ] < 2;
	}
}
