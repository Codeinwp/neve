<?php
/**
 * Handles Magic Tags
 *
 * @package Neve
 */

namespace HFG\Core;

use Neve\Views\Partials\Post_Meta;
use Neve\Views\Post_Layout;

/**
 * Class Short_Codes
 *
 * @package Neve\Views\Pluggable
 */
class Magic_Tags {
	/**
	 * The magic tags options used for Customizer.
	 *
	 * @var array
	 */
	private $options = [];

	/**
	 * Available short codes.
	 *
	 * @var array
	 */
	private $magic_tags = [];

	/**
	 * Magic tag regex.
	 *
	 * @var string
	 */
	private static $magic_tag_regex;

	/**
	 * Holds the instance of the class.
	 *
	 * @var Magic_Tags
	 */
	private static $_instance;

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
		$this->setup_config();
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
	 * @return string
	 */
	public function do_magic_tags( $input ) {
		if ( empty( self::$magic_tag_regex ) ) {
			return $input;
		}

		if ( ! preg_match( '/\\{\\s?\\w+\\s?\\}/', $input ) ) {
			return $input;
		}

		// Define the regular expression to match http/https links containing magic tags
		$regex = '/(https?:\/\/)(\{[^}]+\})/';

		// Replace any matches with just the magic tag name
		$input = preg_replace( $regex, '$2', $input );

		return preg_replace_callback(
			'/\\{\s?\b(?:' . self::$magic_tag_regex . ')\b\s?\\}/',
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
	 * @param array $matches matches array of regular expression.
	 *
	 * @return string
	 */
	private function do_magic_tag( $matches ) {
		$tag = $matches[0];

		$tag = trim( $tag, '{} ' );

		if ( ! method_exists( $this, $tag ) ) {
			return '';
		}

		$allowed_tags = wp_kses_allowed_html();
		if ( $tag === 'current_post_meta' || $tag === 'meta_date' ) {
			$allowed_tags['span'] = [
				'class' => [],
			];
			$allowed_tags['time'] = [
				'class'    => [],
				'datetime' => [],
				'content'  => [],
			];
		}

		if ( $tag === 'meta_author' ) {
			$allowed_tags['span'] = [
				'class' => [],
			];

			$allowed_tags['img'] = [
				'class' => [],
				'alt'   => [],
				'src'   => [],
			];
		}

		$edd_magic_tags = array(
			'edd_cart_total_currency_symbol',
			'edd_cart_total',
			'edd_currency_name',
			'edd_currency_symbol',
		);

		if ( in_array( $tag, $edd_magic_tags ) ) {

			$allowed_tags['span'] = [
				'class' => [],
			];

		}

		return wp_kses( call_user_func( [ $this, $tag ] ), $allowed_tags );
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
	 * Single Post meta.
	 *
	 * @return string.
	 */
	public function current_post_meta() {
		ob_start();
		Post_Layout::render_post_meta( false );
		$meta = ob_get_contents();
		ob_end_clean();

		return $meta;
	}

	/**
	 * Meta author.
	 *
	 * @return string.
	 */
	public function meta_author() {
		return '<span class="nv-dynamic-author-meta">' . Post_Meta::neve_get_author_meta() . '</span>';
	}

	/**
	 * Meta date.
	 *
	 * @return string.
	 */
	public function meta_date() {
		ob_start();
		do_action( 'neve_post_meta_single', array( 'date' ), false );
		$meta = ob_get_contents();
		ob_end_clean();

		return $meta;
	}

	/**
	 * Meta category.
	 *
	 * @return string.
	 */
	public function meta_category() {
		return get_the_category_list( ', ', '', get_the_ID() );
	}

	/**
	 * Meta comments.
	 *
	 * @return string.
	 */
	public function meta_comments() {
		$comments = Post_Meta::get_comments();
		return ! empty( $comments ) ? $comments : '';
	}

	/**
	 * Meta time.
	 *
	 * @return string.
	 */
	public function meta_time_to_read() {
		return apply_filters( 'neve_do_read_time', '' );
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
		if ( get_option( 'show_on_front' ) === 'page' && is_home() ) {
			$blog_page_id = get_option( 'page_for_posts' );
			return get_the_title( $blog_page_id );
		}
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
	 * Title for the page currently being viewed.
	 *
	 * @return string
	 */
	public function current_query_title() {
		if ( get_option( 'show_on_front' ) === 'page' && is_front_page() ) {
			return get_the_title();
		}

		if ( class_exists( 'WooCommerce', false ) ) {

			if ( is_product_category() || is_product_tag() ) {
				return get_the_archive_title();
			}

			if ( is_shop() ) {
				return get_the_title( get_option( 'woocommerce_shop_page_id' ) );
			}
		}

		return wp_title( '', false );
	}

	/**
	 * Author Bio.
	 *
	 * @return string
	 */
	public function author_bio() {
		return get_the_author_meta( 'description', ( (int) get_post_field( 'post_author', get_the_ID() ) ) );
	}

	/**
	 * Author Name.
	 *
	 * @return string
	 */
	public function author_name() {
		return get_the_author_meta( 'display_name', ( (int) get_post_field( 'post_author', get_the_ID() ) ) );
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
		return get_author_posts_url( ( (int) get_post_field( 'post_author', get_the_ID() ) ) );
	}

	/**
	 * Current Year.
	 *
	 * @return string
	 */
	public function current_year() {
		return gmdate( 'Y' );
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
		return is_singular( 'product' ) ? $product->get_price_html( $product->get_price() ) : '';
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

	/**
	 * User nicename.
	 *
	 * @return string
	 */
	public function user_nicename() {
		/**
		 * @var \WP_User|null $current_user
		 */
		$current_user = wp_get_current_user();
		if ( empty( $current_user ) ) {
			return '';
		}
		return $current_user->user_nicename;
	}

	/**
	 * User display name.
	 *
	 * @return string
	 */
	public function display_name() {
		/**
		 * @var \WP_User|null $current_user
		 */
		$current_user = wp_get_current_user();
		if ( empty( $current_user ) ) {
			return '';
		}
		return $current_user->display_name;
	}

	/**
	 * User email.
	 *
	 * @return string
	 */
	public function user_email() {
		/**
		 * @var \WP_User|null $current_user
		 */
		$current_user = wp_get_current_user();
		if ( empty( $current_user ) ) {
			return '';
		}
		return $current_user->user_email;
	}

	/**
	 * Get the options array.
	 *
	 * @return mixed
	 */
	public function get_options() {
		return $this->options;
	}

	/**
	 * Cart total.
	 *
	 * @return string
	 */
	public function cart_total() {
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '';
		}
		return '<span class="nv-cart-icon-total-plain">' . WC()->cart->get_cart_contents_total() . '</span>';
	}

	/**
	 * EDD Cart total.
	 *
	 * @return string
	 */
	public function edd_cart_total() {
		return '<span class="nv-edd-cart-icon-total-plain nv-edd-cart-total">' . edd_format_amount( (string) edd_get_cart_total() ) . '</span>';
	}

	/**
	 * Cart total + currency.
	 *
	 * @return string
	 */
	public function cart_total_currency_symbol() {
		if ( ! class_exists( 'WooCommerce' ) ) {
			return '';
		}
		return '<span class="nv-cart-icon-total-currency">' . WC()->cart->get_cart_total() . '</span>';
	}

	/**
	 * EDD Cart total + currency.
	 *
	 * @return string
	 */
	public function edd_cart_total_currency_symbol() {
		return '<span class="nv-edd-cart-icon-total-currency nv-edd-cart-total">' . edd_currency_filter( edd_format_amount( (string) edd_get_cart_total() ) ) . '</span>';
	}

	/**
	 * WooCommerce currency name.
	 *
	 * @return string
	 */
	public function currency_name() {
		if ( ! class_exists( 'WooCommerce' ) || ! function_exists( 'get_woocommerce_currency' ) ) {
			return '';
		}

		return get_woocommerce_currency();
	}

	/**
	 * EDD currency name.
	 *
	 * @return string
	 */
	public function edd_currency_name() {
		return '<span class="nv-edd-cart-currency-text">' . edd_get_currency() . '</span>';
	}

	/**
	 * WooCommerce currency.
	 *
	 * @return string
	 */
	public function currency_symbol() {
		if ( ! class_exists( 'WooCommerce' ) || ! function_exists( 'get_woocommerce_currency_symbol' ) ) {
			return '';
		}

		return '<span class="woocommerce-Price-currencySymbol">' . get_woocommerce_currency_symbol() . '</span>';
	}

	/**
	 * EDD currency.
	 *
	 * @return string
	 */
	public function edd_currency_symbol() {
		return '<span class="nv-edd-cart-symbol">' . edd_currency_symbol( edd_get_currency() ) . '</span>';
	}

	/**
	 * Setup the magic tags config and options array.
	 */
	private function setup_config() {
		$this->options = [
			[
				'label'    => __( 'Single', 'neve' ),
				'controls' => [
					'current_single_title'   => [
						'label' => __( 'Current Single Title', 'neve' ),
						'type'  => 'string',
					],
					'current_single_excerpt' => [
						'label' => __( 'Current Single Excerpt', 'neve' ),
						'type'  => 'string',
					],
					'current_single_url'     => [
						'label' => __( 'Current Single URL', 'neve' ),
						'type'  => 'url',
					],
					'current_post_meta'      => [
						'label' => __( 'Current Post Meta', 'neve' ),
						'type'  => 'string',
					],
					'meta_author'            => [
						'label' => __( 'Author meta', 'neve' ),
						'type'  => 'string',
					],
					'meta_date'              => [
						'label' => __( 'Date meta', 'neve' ),
						'type'  => 'string',
					],
					'meta_category'          => [
						'label' => __( 'Category meta', 'neve' ),
						'type'  => 'string',
					],
					'meta_comments'          => [
						'label' => __( 'Comments meta', 'neve' ),
						'type'  => 'string',
					],
				],
			],
			[
				'label'    => __( 'Archive', 'neve' ),
				'controls' => [
					'archive_description' => [
						'label' => __( 'Archive Description', 'neve' ),
						'type'  => 'string',
					],
					'archive_title'       => [
						'label' => __( 'Archive Title', 'neve' ),
						'type'  => 'string',
					],
					'archive_url'         => [
						'label' => __( 'Archive URL', 'neve' ),
						'type'  => 'url',
					],
				],
			],
			[
				'label'    => __( 'Author', 'neve' ),
				'controls' => [
					'author_bio'  => [
						'label' => __( 'Author Bio', 'neve' ),
						'type'  => 'string',
					],
					'author_name' => [
						'label' => __( 'Author Name', 'neve' ),
						'type'  => 'string',
					],
					'author_url'  => [
						'label' => __( 'Author URL', 'neve' ),
						'type'  => 'url',
					],
				],
			],
			[
				'label'    => __( 'Current User', 'neve' ),
				'controls' => [
					'user_nicename' => [
						'label' => __( 'User Nice Name', 'neve' ),
						'type'  => 'custom_user',
					],
					'display_name'  => [
						'label' => __( 'Display Name', 'neve' ),
						'type'  => 'custom_user',
					],
					'user_email'    => [
						'label' => __( 'User Email', 'neve' ),
						'type'  => 'custom_user',
					],
				],
			],
			[
				'label'    => __( 'Global', 'neve' ),
				'controls' => [
					'site_title'          => [
						'label' => __( 'Site Title', 'neve' ),
						'type'  => 'string',
					],
					'site_tagline'        => [
						'label' => __( 'Site Tagline', 'neve' ),
						'type'  => 'string',
					],
					'current_query_title' => [
						'label' => __( 'Current Page Title', 'neve' ),
						'type'  => 'string',
					],
					'home_url'            => [
						'label' => __( 'Home URL', 'neve' ),
						'type'  => 'url',
					],
					'current_year'        => [
						'label' => __( 'Current Year', 'neve' ),
						'type'  => 'string',
					],
				],
			],
			[
				'label'    => __( 'Cart', 'neve' ),
				'controls' => [
					'cart_total_currency_symbol' => [
						'label' => __( 'Total + Currency Symbol', 'neve' ),
						'type'  => 'custom_cart',
					],
					'cart_total'                 => [
						'label' => __( 'Total', 'neve' ),
						'type'  => 'custom_cart',
					],
					'currency_name'              => [
						'label' => __( 'Currency Name', 'neve' ),
						'type'  => 'custom_cart',
					],
					'currency_symbol'            => [
						'label' => __( 'Currency Symbol', 'neve' ),
						'type'  => 'custom_cart',
					],
				],
			],
		];

		if ( class_exists( 'Easy_Digital_Downloads', false ) ) {
			$this->options[] = [
				'label'    => __( 'EDD Cart', 'neve' ),
				'controls' => [
					'edd_cart_total_currency_symbol' => [
						'label' => __( 'Total + Currency Symbol', 'neve' ),
						'type'  => 'edd_custom_cart',
					],
					'edd_cart_total'                 => [
						'label' => __( 'Total', 'neve' ),
						'type'  => 'edd_custom_cart',
					],
					'edd_currency_name'              => [
						'label' => __( 'Currency Name', 'neve' ),
						'type'  => 'edd_custom_cart',
					],
					'edd_currency_symbol'            => [
						'label' => __( 'Currency Symbol', 'neve' ),
						'type'  => 'edd_custom_cart',
					],
				],
			];
		}

		if ( class_exists( 'WooCommerce', false ) ) {
			$this->options[] = [
				'label'    => __( 'WooCommerce', 'neve' ),
				'controls' => [
					'product_price' => [
						'label' => __( 'Product Price', 'neve' ),
						'type'  => 'string',
					],
					'product_title' => [
						'label' => __( 'Product Title', 'neve' ),
						'type'  => 'string',
					],
					'cart_link'     => [
						'label' => __( 'Cart URL', 'neve' ),
						'type'  => 'url',
					],
					'checkout_link' => [
						'label' => __( 'Checkout URL', 'neve' ),
						'type'  => 'url',
					],
				],
			];
		}

		$this->options = apply_filters( 'neve_magic_tags_config', $this->options );

		foreach ( $this->options as $magic_tag_group => $args ) {
			foreach ( $args['controls'] as $tag => $tag_args ) {
				$this->magic_tags[] = $tag;
			}
		}
	}
}
