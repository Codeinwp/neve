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

		$this->upsell_url = esc_url( apply_filters( 'neve_upgrade_link_from_child_theme_filter', 'https://themeisle.com/themes/neve/upgrade/?utm_medium=customizer&utm_source=learnmorebtn&utm_campaign=neve' ) );

		parent::init();
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'localize_upsell' ) );
	}

	/**
	 * Localize upsell script and send strings.
	 */
	public function localize_upsell() {
		wp_localize_script(
			'neve-customizer-controls',
			'upsellConfig',
			array(
				'button_url'    => esc_url( apply_filters( 'neve_upgrade_link_from_child_theme_filter', 'https://themeisle.com/themes/neve/upgrade/?utm_medium=customizer&utm_source=getpro&utm_campaign=neve' ) ),
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
								'link'     => add_query_arg( 'utm_source', $args['panel'], 'https://themeisle.com/themes/neve/upgrade/?utm_medium=customizer&utm_campaign=neve' ),
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
							'link'     => add_query_arg( 'utm_source', $args['section'], 'https://themeisle.com/themes/neve/upgrade/?utm_medium=customizer&utm_campaign=neve' ),
						]
					),
					'Neve\Customizer\Controls\Simple_Upsell'
				)
			);
		}
	}
}
