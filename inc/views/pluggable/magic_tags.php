<?php
/**
 * Handles Magic Tags
 *
 * @package Neve
 */

namespace Neve\Views\Pluggable;

/**
 * Class Short_Codes
 *
 * @package Neve\Views\Pluggable
 */
class Magic_Tags {
	/**
	 * Available short codes.
	 *
	 * @var array
	 */
	private $magic_tags = [
		'current_single_title',
		'current_single_excerpt',
		'archive_description',
		'archive_title',
		'site_title',
		'site_tagline',
		'author_bio',
		'author_name',
		'current_single_url',
		'home_url',
		'archive_url',
		'author_url',
		'current_year',
	];

	/**
	 * Magic tag regex.
	 *
	 * @var string
	 */
	static private $magic_tag_regex;

	/**
	 * Holds the instance of the class.
	 *
	 * @var Magic_Tags
	 */
	static private $_instance;

	/**
	 * Returns the instance of the class.
	 *
	 * @return Magic_Tags
	 */
	public static function get_instance() {
		if ( null === self::$_instance ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function __construct() {
		if ( class_exists( 'WooCommerce', false ) ) {
			$this->magic_tags = array_merge(
				$this->magic_tags,
				[
					'product_price',
					'product_title',
					'cart_link',
					'checkout_link',
				]
			);
		}
		self::$magic_tag_regex = implode( '|', $this->magic_tags );
	}

	/**
	 * Do the magic tags inside the string.
	 *
	 * @param string $input the input.
	 *
	 * @return string|
	 */
	public function do_magic_tags( $input ) {
		if ( empty( self::$magic_tag_regex ) ) {
			return $input;
		}

		if ( ! preg_match( '/\\{\\w+\\}/', $input ) ) {
			return $input;
		}

		return preg_replace_callback(
			'/\\{\b(?:' . self::$magic_tag_regex . ')\b\\}/',
			[
				$this,
				'do_magic_tag',
			],
			$input
		);
	}

	/**
	 * Do single magic tag.
	 *
	 * @param string $tag the magic tag.
	 *
	 * @return string
	 */
	private function do_magic_tag( $tag ) {
		if ( is_array( $tag ) ) {
			$tag = reset( $tag );
		}

		$tag = substr( $tag, 1, - 1 );

		return wp_kses_post( call_user_func( [ $this, $tag ] ) );
	}

	/**
	 * Single title.
	 *
	 * @return string
	 */
	public function current_single_title() {
		return is_singular() ? get_the_title() : '';
	}

	/**
	 * Single Excerpt.
	 *
	 * @return string
	 */
	public function current_single_excerpt() {
		return is_singular() ? get_the_excerpt() : '';
	}

	/**
	 * Archive Description.
	 *
	 * @return string
	 */
	public function archive_description() {
		return get_the_archive_description();
	}

	/**
	 * Archive Title.
	 *
	 * @return string
	 */
	public function archive_title() {
		return html_entity_decode( get_the_archive_title() );
	}

	/**
	 * Site Title.
	 *
	 * @return string
	 */
	public function site_title() {
		return get_bloginfo( 'title' );
	}

	/**
	 * Site Tagline.
	 *
	 * @return string
	 */
	public function site_tagline() {
		return get_bloginfo( 'description' );
	}

	/**
	 * Author Bio.
	 *
	 * @return string
	 */
	public function author_bio() {
		return get_the_author_meta( 'description', get_post_field( 'post_author', get_the_ID() ) );
	}

	/**
	 * Author Name.
	 *
	 * @return string
	 */
	public function author_name() {
		return get_the_author_meta( 'display_name', get_post_field( 'post_author', get_the_ID() ) );
	}

	/**
	 * Single URL.
	 *
	 * @return string
	 */
	public function current_single_url() {
		return is_singular() ? get_permalink() : '';
	}

	/**
	 * Home URL.
	 *
	 * @return string
	 */
	public function home_url() {
		return get_home_url();
	}

	/**
	 * Archive URL.
	 *
	 * @return string
	 */
	public function archive_url() {
		return get_post_type_archive_link( get_post_field( 'post_type' ) );
	}

	/**
	 * Author URL.
	 *
	 * @return string
	 */
	public function author_url() {
		return get_author_posts_url( get_post_field( 'post_author', get_the_ID() ) );
	}

	/**
	 * Current Year.
	 *
	 * @return string
	 */
	public function current_year() {
		return date( 'Y' );
	}

	/**
	 * Product Price.
	 *
	 * @return string
	 */
	public function product_price() {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return '';
		}
		$product = wc_get_product( get_the_ID() );

		return is_singular( 'product' ) ? wc_price( $product->get_price() ) : '';
	}

	/**
	 * Product Title.
	 *
	 * @return string
	 */
	public function product_title() {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return '';
		}
		$product = wc_get_product( get_the_ID() );

		return is_singular( 'product' ) ? $product->get_title() : '';
	}

	/**
	 * Cart Link.
	 *
	 * @return string
	 */
	public function cart_link() {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return '';
		}

		return wc_get_cart_url();
	}

	/**
	 * Checkout Link.
	 *
	 * @return string
	 */
	public function checkout_link() {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return '';
		}

		return wc_get_checkout_url();
	}
}
