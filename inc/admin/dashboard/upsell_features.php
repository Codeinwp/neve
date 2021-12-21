<?php
/**
 * Description Holds the upsell features.
 *
 * Author:      Bogdan Preda <bogdan.preda@themeisle.com>
 * Created on:  21-12-{2021}
 *
 * @package Neve
 */
namespace Neve\Admin\Dashboard;

/**
 * Class Upsell_Features
 */
class Upsell_Features {
	/**
	 * Get doc link.
	 *
	 * @param string $utm_term utm term to use for doc link.
	 * @param string $url url to doc.
	 * @return string
	 */
	private function get_doc_link( $utm_term, $url ) {
		$args = [
			'utm_medium'   => 'aboutneve',
			'utm_source'   => 'freevspro',
			'utm_campaign' => 'neve',
			'utm_term'     => $utm_term,
		];


		return add_query_arg( $args, esc_url( $url ) );
	}

	/**
	 * Get the pro features for the free v pro table.
	 *
	 * @return array
	 */
	final public function get_upsell_features() {
		return [
			[
				'title'       => __( 'Header/Footer builder', 'neve' ),
				'description' => __( 'Easily build your header and footer by dragging and dropping all the important elements in the real-time WordPress Customizer. More advanced options are available in PRO.', 'neve' ),
				'inLite'      => true,
				'docsLink'    => $this->get_doc_link( 'Header/Footer builder', 'https://docs.themeisle.com/category/1251-neve-header-builder' ),
			],
			[
				'title'       => __( 'Page Builder Compatibility', 'neve' ),
				'description' => __( 'Neve is fully compatible with Gutenberg, the new WordPress editor and for all of you page builder fans, Neve has full compatibility with Elementor, Beaver Builder, and all the other popular page builders.', 'neve' ),
				'inLite'      => true,
				'docsLink'    => $this->get_doc_link( 'Page Builder Compatibility', 'https://docs.themeisle.com/article/946-neve-doc#pagebuilders' ),
			],
			[
				'title'       => __( 'Header Booster', 'neve' ),
				'description' => __( 'Take the header builder to a new level with new awesome components: socials, contact, breadcrumbs, language switcher, multiple HTML, sticky and transparent menu, page header builder and many more.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Header Booster', 'https://docs.themeisle.com/article/1057-header-booster-documentation' ),
			],
			[
				'title'       => __( 'Page Header Builder', 'neve' ),
				'description' => __( 'The Page Header is the horizontal area that sits directly below the header and contains the page/post title. Easily design an attractive Page Header area using our dedicated builder.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Page Header Builder', 'https://docs.themeisle.com/article/1262-neve-page-header' ),
			],
			[
				'title'       => __( 'Custom Layouts', 'neve' ),
				'description' => __( 'Powerful Custom Layouts builder which allows you to easily create your own header, footer or custom content on any of the hook locations available in the theme.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Custom Layouts', 'https://docs.themeisle.com/article/1062-custom-layouts-module' ),
			],
			[
				'title'       => __( 'Blog Booster', 'neve' ),
				'description' => __( 'Give a huge boost to your entire blogging experience with features specially designed for increased user experience.', 'neve' ) . ' ' . __( 'Sharing, custom article sorting, comments integrations, number of minutes needed to read an article and many more.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Blog Booster', 'https://docs.themeisle.com/article/1059-blog-booster-documentation' ),
			],
			[
				'title'       => __( 'Elementor Booster', 'neve' ),
				'description' => __( 'Leverage the true flexibility of Elementor with powerful addons and templates that you can import with just one click.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Elementor Booster', 'https://docs.themeisle.com/article/1063-elementor-booster-module-documentation' ),
			],
			[
				'title'       => __( 'WooCommerce Booster', 'neve' ),
				'description' => __( 'Empower your online store with awesome new features, specially designed for a smooth WooCommerce integration.', 'neve' ) . ' ' . __( 'Wishlist, quick view, video products, advanced reviews, multiple dedicated layouts and many more.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'WooCommerce Booster', 'https://docs.themeisle.com/article/1058-woocommerce-booster-documentation' ),
			],
			[
				'title'       => __( 'LifterLMS Booster', 'neve' ),
				'description' => __( 'Make your LifterLMS pages look stunning with our PRO design options. Specially created to help you set up your online courses with minimum customizations.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'LifterLMS Booster', 'https://docs.themeisle.com/article/1084-lifterlms-booster-documentation' ),
			],
			[
				'title'       => __( 'Typekit(Adobe) Fonts', 'neve' ),
				'description' => __( "The module allows for an easy way of enabling new awesome Adobe (previous Typekit) Fonts in Neve's Typography options.", 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Typekit(Adobe) Fonts', 'https://docs.themeisle.com/article/1085-typekit-fonts-documentation' ),
			],
			[
				'title'       => __( 'White Label', 'neve' ),
				'description' => __( "For any developer or agency out there building websites for their own clients, we've made it easy to present the theme as your own.", 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'White Label', 'https://docs.themeisle.com/article/1061-white-label-module-documentation' ),
			],
			[
				'title'       => __( 'Scroll To Top', 'neve' ),
				'description' => __( 'Simple but effective module to help you navigate back to the top of the really long pages.', 'neve' ),
				'inLite'      => false,
				'docsLink'    => $this->get_doc_link( 'Scroll To Top', 'https://docs.themeisle.com/article/1060-scroll-to-top-module-documentation' ),
			],
		];
	}
}
