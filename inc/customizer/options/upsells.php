<?php
/**
 * Customizer upsells controls.
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Core\Theme_Info;
use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Section;
use Neve\Customizer\Types\Control;

/**
 * Class Upsells
 *
 * @package Neve\Customizer\Options
 */
class Upsells extends Base_Customizer {

	use Theme_Info;

	/**
	 * Holds the main upsell url
	 *
	 * @var string
	 */
	private $upsell_url = '';

	/**
	 * Init function
	 *
	 * @return bool|void
	 */
	public function init() {
		if ( $this->has_valid_addons() ) {
			return;
		}

		$this->upsell_url = esc_url_raw( apply_filters( 'neve_upgrade_link_from_child_theme_filter', tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'learnmorebtn' ) ) );

		parent::init();
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'localize_upsell' ) );

		add_filter( 'theme_mod_neve_checkout_page_layout', array( $this, 'override_neve_checkout_page_layout_theme_mod' ), 10, 1 );
	}

	/**
	 * Overrides neve_checkout_page_layout theme mod as 'standard' if Neve Pro addon is disabled or not activated.
	 *
	 * @param  string $value current value.
	 * @return string
	 */
	public function override_neve_checkout_page_layout_theme_mod( $value ) {
		return 'standard';
	}

	/**
	 * Localize upsell script and send strings.
	 */
	public function localize_upsell() {
		wp_localize_script(
			'neve-customizer-controls',
			'upsellConfig',
			array(
				'button_url'    => esc_url_raw( apply_filters( 'neve_upgrade_link_from_child_theme_filter', tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'proheader' ) ) ),
				'button_text'   => esc_html__( 'Get the PRO version!', 'neve' ),
				'text'          => esc_html__( 'Extend your header with more components and settings, build sticky/transparent headers or display them conditionally.', 'neve' ),
				'screen_reader' => esc_html__( '(opens in a new tab)', 'neve' ),
			)
		);
	}

	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->wpc->register_section_type( '\Neve\Customizer\Controls\Simple_Upsell_Section' );
		$this->section_upsells();
		$this->control_upsells();
		$this->checkout_locked_layout();
	}

	/**
	 * Locked Checkout Layouts
	 *
	 * @return void
	 */
	private function checkout_locked_layout() {
		$this->add_control(
			new Control(
				'neve_checkout_page_layout',
				[
					'default'           => 'standard',
					'sanitize_callback' => [ $this, 'sanitize_checkout_layout' ],
				],
				[
					'section'  => 'woocommerce_checkout',
					'priority' => 5,
					'choices'  => [
						'standard' => [
							'name'  => esc_html__( 'Standard', 'neve' ),
							'image' => 'data:image/png;base64,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',
						],
						'vertical' => [
							'name'      => esc_html__( 'Vertical', 'neve' ),
							'image'     => 'data:image/png;base64,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',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'woocheckoutvertical' ),
						],
						'stepped'  => [
							'name'      => esc_html__( 'Stepped', 'neve' ),
							'image'     => 'data:image/png;base64,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',
							'upsellUrl' => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'woocheckoutstepped' ),
						],
					],
				],
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);
	}

	/**
	 * Sanitize checkout layout that forcefully updates the selection as standard.
	 *
	 * @return string
	 */
	public function sanitize_checkout_layout() {
		return 'standard';
	}

	/**
	 * Add upsells section
	 */
	private function section_upsells() {

		$this->add_section(
			new Section(
				'neve_free_pro_upsell',
				array(
					'priority' => -100,
					'title'    => esc_html__( 'Neve PRO Features', 'neve' ),
					'url'      => $this->upsell_url,
				),
				'Neve\Customizer\Controls\React\Upsell_Section'
			)
		);
	}

	/**
	 * Add upsells controls
	 */
	private function control_upsells() {
		$this->add_control(
			new Control(
				'neve_upsell_main_control',
				[ 'sanitize_callback' => 'sanitize_text_field' ],
				[
					'text'        => esc_html__( 'Neve PRO Features', 'neve' ),
					'button_text' => esc_html__( 'Learn More', 'neve' ),
					'section'     => 'neve_free_pro_upsell',
					'priority'    => PHP_INT_MIN,
					'link'        => $this->upsell_url,
				],
				'Neve\Customizer\Controls\Simple_Upsell'
			)
		);

		$upsells = [
			'blog_archive' => [
				'text'        => __( 'More blog layout customization options available in PRO', 'neve' ),
				'button_text' => __( 'Learn More', 'neve' ),
				'section'     => 'neve_blog_archive_layout',
			],
			'single_post'  => [
				'text'        => __( 'More single post components available in PRO', 'neve' ),
				'button_text' => __( 'Learn More', 'neve' ),
				'section'     => 'neve_single_post_layout',
			],
		];


		if ( class_exists( 'WooCommerce', false ) ) {
			$upsells['product_catalog']       = [
				'text'        => __( 'More product catalog options available in PRO', 'neve' ),
				'button_text' => __( 'Learn More', 'neve' ),
				'section'     => 'woocommerce_product_catalog',
			];
			$upsells['woocommerce_checkout']  = [
				'text'        => __( 'More checkout options available in PRO', 'neve' ),
				'button_text' => __( 'Learn More', 'neve' ),
				'section'     => 'woocommerce_checkout',
			];
			$upsells['single_product_layout'] = [
				'text'        => __( 'More single product options available in PRO', 'neve' ),
				'button_text' => __( 'Learn More', 'neve' ),
				'section'     => 'neve_single_product_layout',
			];
			$upsells['typography']            = [
				'text'        => __( 'WooCommerce typography options available in PRO', 'neve' ),
				'button_text' => __( 'Learn More', 'neve' ),
				'panel'       => 'neve_typography',
				'type'        => 'section',
			];
		}

		foreach ( $upsells as $id => $args ) {
			if ( isset( $args['type'] ) && $args['type'] === 'section' ) {
				$this->add_section(
					new Section(
						'neve_' . $id . '_upsell_section',
						array_merge(
							$args,
							[
								'type'     => 'nv_simple_upsell_section',
								'priority' => 10000,
								'link'     => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'panel-' . $args['panel'] ),
							]
						),
						'\Neve\Customizer\Controls\Simple_Upsell_Section'
					)
				);

				return false;
			}
			$this->add_control(
				new Control(
					'neve_' . $id . '_upsell',
					[ 'sanitize_callback' => 'sanitize_text_field' ],
					array_merge(
						$args,
						[
							'priority' => 10000,
							'link'     => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'section-' . $args['section'] ),
						]
					),
					'Neve\Customizer\Controls\Simple_Upsell'
				)
			);
		}
	}
}
