<?php
/**
 * Style generator based on settings.
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use PHPUnit\Util\Type;

/**
 * Class Generator
 * @package Neve\Core\Styles
 */
class Generator {

	private $_subscribers = [];

	/**
	 * Generate the dynamic CSS.
	 *
	 * @param bool $echo Should we write it or return it?
	 * @param bool $for_gutenberg Is for Gutenberg?
	 *
	 * @return string|void Css output.
	 */
	public function generate( $echo = false, $for_gutenberg = false ) {
		$desktop_css = '';
		$tablet_css  = '';
		$all_css     = '';
		$this->setup_subscribers();
		/**
		 * Neve try to build the CSS as mobile first.
		 * Based on this fact, the general CSS is considere the mobile one.
		 */
		foreach ( $this->_subscribers as $subscriber ) {
			/**
			 * Subscriber object.
			 *
			 * @var Mod_Subscriber $subscriber Subscriber object.
			 */
			if ( $for_gutenberg ) {
				$subscriber->to_gutenberg();
			}
			if ( $subscriber->is_responsive() ) {
				$desktop_css .= $subscriber;
				$tablet_css  .= $subscriber->for_tablet();
				$all_css     .= $subscriber->for_mobile();
			} else {
				$all_css .= $subscriber;
			}
		}


		$css = sprintf( ' %s @media(min-width: 576px){ %s } @media(min-width: 960px){ %s } ', $all_css, $tablet_css, $desktop_css );


		if ( ! $echo ) {
			return $css;
		}
		echo $css;
	}

	public function setup_subscribers() {

		$this->_subscribers = [
			new Size_Subscriber(
				Config::MODS_CONTAINER_WIDTH,
				[
					'.container' => [
						Config::CSS_PROP_MAX_WIDTH
					]
				]
			),
			new Color_Subscriber(
				Config::MODS_LINK_COLOR, [
					'a, .has-neve-link-color-color'         => [
						Config::CSS_PROP_COLOR
					],
					'.has-neve-link-color-background-color' => [ Config::CSS_PROP_BACKGROUND_COLOR ],
					'.nv-loader'                            => [ Config::CSS_PROP_BORDER_COLOR ]
				]
			),
			new Color_Subscriber(
				Config::MODS_LINK_HOVER_COLOR,
				[
					'a:hover, a:focus, .has-neve-link-hover-color-color' => [ Config::CSS_PROP_COLOR ],
					'.has-neve-link-hover-color-background-color'        => [ Config::CSS_PROP_BACKGROUND_COLOR ],
				]
			),
			new Color_Subscriber(
				Config::MODS_TEXT_COLOR,
				[
					'body, .entry-title a, .entry-title a:hover, .entry-title a:focus,.has-neve-text-color-color' => [ Config::CSS_PROP_COLOR ],
					'.has-neve-text-color-background-color'                                                       => [ Config::CSS_PROP_BACKGROUND_COLOR ]
				]
			)
		];

		$this->setup_layout_subscribers();
		$this->setup_buttons();
		$this->setup_typography();
	}

	private function get_typography_defaults( $args ) {

		$line_height    = Mods::to_json( $args['line_height'] );
		$letter_spacing = Mods::get( $args['letter_spacing'] );
		$font_weight    = Mods::get( $args['font_weight'] );
		$text_transform = Mods::get( $args['text_transform'] );
		$defaults       = [];
		if ( ! empty( $line_height ) ) {
			$defaults[ Typeface_Subscriber::LINE_HEIGHT ] = $line_height;
		}
		if ( ! empty( $letter_spacing ) ) {
			$defaults[ Typeface_Subscriber::LETTER_SPACING ] = $letter_spacing;
		}
		if ( ! empty( $font_weight ) ) {
			$defaults[ Typeface_Subscriber::FONT_WEIGHT ] = $font_weight;
		}
		if ( ! empty( $text_transform ) ) {
			$defaults[ Typeface_Subscriber::TEXT_TRANSFORM ] = $text_transform;
		}

		return $defaults;
	}

	/**
	 * Setup typography subscribers.
	 */
	public function setup_typography() {
		$defaults = $this->get_typography_defaults( [
			'line_height'    => 'neve_body_line_height',
			'letter_spacing' => 'neve_body_letter_spacing',
			'font_weight'    => 'neve_body_font_weight',
			'text_transform' => 'neve_body_text_transform',
		] );

		$font_size = Mods::to_json( 'neve_body_font_size' );
		if ( ! empty( $font_size ) ) {
			$defaults[ Typeface_Subscriber::FONT_SIZE ] = $font_size;
		}

		$this->_subscribers[] = new Typeface_Subscriber( Config::MODS_TYPEFACE_GENERAL, [
			Config::CSS_SELECTOR_TYPEFACE_GENERAL => [
				Config::CSS_PROP_FONT_SIZE      => Typeface_Subscriber::FONT_SIZE,
				Config::CSS_PROP_LINE_HEIGHT    => Typeface_Subscriber::LINE_HEIGHT,
				Config::CSS_PROP_LETTER_SPACING => Typeface_Subscriber::LETTER_SPACING,
				Config::CSS_PROP_FONT_WEIGHT    => Typeface_Subscriber::FONT_WEIGHT,
				Config::CSS_PROP_TEXT_TRANSFORM => Typeface_Subscriber::TEXT_TRANSFORM,
				Config::CSS_PROP_FONT_FAMILY    => Config::MODS_FONT_GENERAL,
			]
		], $defaults );

		$defaults = $this->get_typography_defaults( [
			'line_height'    => 'neve_headings_line_height',
			'letter_spacing' => 'neve_headings_letter_spacing',
			'font_weight'    => 'neve_headings_font_weight',
			'text_transform' => 'neve_headings_text_transform',
		] );
		foreach (
			[
				Config::MODS_TYPEFACE_H1 => Config::CSS_SELECTOR_TYPEFACE_H1,
				Config::MODS_TYPEFACE_H2 => Config::CSS_SELECTOR_TYPEFACE_H2,
				Config::MODS_TYPEFACE_H3 => Config::CSS_SELECTOR_TYPEFACE_H3,
				Config::MODS_TYPEFACE_H4 => Config::CSS_SELECTOR_TYPEFACE_H4,
				Config::MODS_TYPEFACE_H5 => Config::CSS_SELECTOR_TYPEFACE_H5,
				Config::MODS_TYPEFACE_H6 => Config::CSS_SELECTOR_TYPEFACE_H6
			] as $heading_mod => $heading_selector
		) {
			switch ( $heading_mod ) {
				case Config::MODS_TYPEFACE_H1:
					$font_size_mod_legacy   = 'neve_h1_font_size';
					$line_height_mod_legacy = 'neve_h1_line_height';
					break;
				case Config::MODS_TYPEFACE_H2:
					$font_size_mod_legacy   = 'neve_h2_font_size';
					$line_height_mod_legacy = 'neve_h2_line_height';
					break;
				case Config::MODS_TYPEFACE_H3:
					$font_size_mod_legacy   = 'neve_h3_font_size';
					$line_height_mod_legacy = 'neve_h3_line_height';
					break;
				case Config::MODS_TYPEFACE_H4:
					$font_size_mod_legacy   = 'neve_h4_font_size';
					$line_height_mod_legacy = 'neve_h4_line_height';
					break;
				case Config::MODS_TYPEFACE_H5:
					$font_size_mod_legacy   = 'neve_h5_font_size';
					$line_height_mod_legacy = 'neve_h5_line_height';
					break;
				case Config::MODS_TYPEFACE_H6:
					$font_size_mod_legacy   = 'neve_h6_font_size';
					$line_height_mod_legacy = 'neve_h6_line_height';
					break;
			}

			$font_size = Mods::to_json( $font_size_mod_legacy );
			if ( ! empty( $font_size ) ) {
				$defaults[ Typeface_Subscriber::FONT_SIZE ] = $font_size;
			}
			$line_height = Mods::to_json( $line_height_mod_legacy );
			if ( ! empty( $line_height ) ) {
				$defaults[ Typeface_Subscriber::LINE_HEIGHT ] = $line_height;
			}
			$this->_subscribers[] = new Typeface_Subscriber( $heading_mod, [
				$heading_selector => [
					Config::CSS_PROP_FONT_SIZE      => Typeface_Subscriber::FONT_SIZE,
					Config::CSS_PROP_LINE_HEIGHT    => Typeface_Subscriber::LINE_HEIGHT,
					Config::CSS_PROP_LETTER_SPACING => Typeface_Subscriber::LETTER_SPACING,
					Config::CSS_PROP_FONT_WEIGHT    => Typeface_Subscriber::FONT_WEIGHT,
					Config::CSS_PROP_TEXT_TRANSFORM => Typeface_Subscriber::TEXT_TRANSFORM,
					Config::CSS_PROP_FONT_FAMILY    => Config::MODS_FONT_HEADINGS
				]
			], $defaults );
		}


		//Legacy filters.
		$extra_selectors_heading = apply_filters( 'neve_headings_font_family_selectors', '' );
		if ( ! empty( $extra_selectors_heading ) ) {
			$extra_selectors_heading = ltrim( $extra_selectors_heading, ', ' );
			$this->_subscribers[]    = new Typeface_Subscriber( Config::MODS_FONT_HEADINGS, [
				$extra_selectors_heading => [
					Config::CSS_PROP_FONT_FAMILY => Config::MODS_FONT_HEADINGS
				]
			] );
		}


		$extra_selectors_body = apply_filters( 'neve_body_font_family_selectors', '' );
		if ( ! empty( $extra_selectors_body ) ) {
			$extra_selectors_body = ltrim( $extra_selectors_body, ', ' );
			$this->_subscribers[] = new Typeface_Subscriber( Config::MODS_TYPEFACE_GENERAL, [
				$extra_selectors_body => [
					Config::CSS_PROP_LETTER_SPACING => Typeface_Subscriber::LETTER_SPACING,
					Config::CSS_PROP_FONT_WEIGHT    => Typeface_Subscriber::FONT_WEIGHT,
					Config::CSS_PROP_TEXT_TRANSFORM => Typeface_Subscriber::TEXT_TRANSFORM,
					Config::CSS_PROP_FONT_FAMILY    => Config::MODS_FONT_GENERAL
				]
			] );
		}
	}

	/**
	 * Setup button subscribers.
	 */
	public function setup_buttons() {
		//Primary button config.
		$this->_subscribers[] = new Button_Subscriber( Config::MODS_BUTTON_PRIMARY_STYLE, [
			Config::CSS_SELECTOR_BTN_PRIMARY_NORMAL => [
				Config::CSS_PROP_BACKGROUND_COLOR => Button_Subscriber::BACKGROUND,
				Config::CSS_PROP_COLOR            => Button_Subscriber::TEXT,
				Config::CSS_PROP_BORDER_RADIUS    => Button_Subscriber::BORDER_RADIUS,
				Config::CSS_PROP_BORDER           => Button_Subscriber::TYPE,
				Config::CSS_PROP_BORDER_WIDTH     => Button_Subscriber::BORDER_WIDTH
			],
			Config::CSS_SELECTOR_BTN_PRIMARY_HOVER  => [
				Config::CSS_PROP_COLOR            => Button_Subscriber::TEXT_HOVER,
				Config::CSS_PROP_BACKGROUND_COLOR => Button_Subscriber::BACKGROUND_HOVER
			],
			'.nv-tags-list a:hover'                 => [
				Config::CSS_PROP_BORDER_COLOR => Button_Subscriber::BACKGROUND_HOVER
			],
			'.nv-tags-list a'                       => [
				Config::CSS_PROP_COLOR        => Button_Subscriber::BACKGROUND,
				Config::CSS_PROP_BORDER_COLOR => Button_Subscriber::BACKGROUND,
			]
		], neve_get_button_appearance_default() );

		//Secondary button config.
		$this->_subscribers[] = new Button_Subscriber( Config::MODS_BUTTON_SECONDARY_STYLE, [
			Config::CSS_SELECTOR_BTN_SECONDARY_NORMAL => [
				Config::CSS_PROP_BACKGROUND_COLOR => Button_Subscriber::BACKGROUND,
				Config::CSS_PROP_COLOR            => Button_Subscriber::TEXT,
				Config::CSS_PROP_BORDER_COLOR     => Button_Subscriber::TEXT,
				Config::CSS_PROP_BORDER_RADIUS    => Button_Subscriber::BORDER_RADIUS,
				Config::CSS_PROP_BORDER           => Button_Subscriber::TYPE,
				Config::CSS_PROP_BORDER_WIDTH     => Button_Subscriber::BORDER_WIDTH
			],
			Config::CSS_SELECTOR_BTN_SECONDARY_HOVER  => [
				Config::CSS_PROP_COLOR            => Button_Subscriber::TEXT_HOVER,
				Config::CSS_PROP_BACKGROUND_COLOR => Button_Subscriber::BACKGROUND_HOVER
			]
		], neve_get_button_appearance_default( 'secondary_button' ) );


		//Padding for primary btns.
		$this->_subscribers[] = new Group_Size_Subscriber( Config::MODS_BUTTON_PRIMARY_PADDING, [
			Config::CSS_SELECTOR_BTN_PRIMARY_PADDING => [
				Config::CSS_PROP_PADDING
			]
		] );
		//Padding for secondary btns.
		$this->_subscribers[] = new Group_Size_Subscriber( Config::MODS_BUTTON_SECONDARY_PADDING, [
			Config::CSS_SELECTOR_BTN_SECONDARY_PADDING => [
				Config::CSS_PROP_PADDING
			]
		] );
	}

	/**
	 * Setup settings subscribers for layout.
	 *
	 * TODO: Exclude sidebar CSS when there is not sidebar option selected.
	 * TODO: Better exclude classes when Woo is not present, i.e shop-sidebar class is added even when Woo is not used.
	 */
	public function setup_layout_subscribers() {
		$is_advanced_on = Mods::get( Config::MODS_ADVANCED_LAYOUT_OPTIONS, false );
		if ( ! $is_advanced_on ) {

			$this->_subscribers[] = new Content_Width_Subscriber(
				Config::MODS_SITEWIDE_CONTENT_WIDTH,
				[
					'#content .container .col, #content .container-fluid .col' => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::CONTENT ],
					'.nv-sidebar-wrap, .nv-sidebar-wrap.shop-sidebar'          => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::SIDEBAR ]
				]
			);

			return;
		}

		$this->_subscribers[] = new Content_Width_Subscriber(
			Config::MODS_OTHERS_CONTENT_WIDTH,
			[
				'body:not(.single):not(.archive):not(.blog):not(.search) .neve-main > .container .col' => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::CONTENT ],
				'body:not(.single):not(.archive):not(.blog):not(.search) .nv-sidebar-wrap'             => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::SIDEBAR ]
			]
		);
		$this->_subscribers[] = new Content_Width_Subscriber(
			Config::MODS_ARCHIVE_CONTENT_WIDTH,
			[
				'.neve-main > .archive-container .nv-index-posts.col' => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::CONTENT ],
				'.neve-main > .archive-container .nv-sidebar-wrap'    => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::SIDEBAR ]
			]
		);
		$this->_subscribers[] = new Content_Width_Subscriber(
			Config::MODS_SINGLE_CONTENT_WIDTH,
			[
				'.neve-main > .single-post-container .nv-single-post-wrap.col' => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::CONTENT ],
				'.neve-main > .single-post-container .nv-sidebar-wrap'         => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::SIDEBAR ]
			]
		);


		//TODO provide context handler for better checks.
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return;
		}


		$this->_subscribers[] = new Content_Width_Subscriber(
			Config::MODS_SHOP_ARCHIVE_CONTENT_WIDTH,
			[
				'.archive.woocommerce .neve-main > .shop-container .nv-shop.col'     => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::CONTENT ],
				'.archive.woocommerce .neve-main > .shop-container .nv-sidebar-wrap' => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::SIDEBAR ]
			]
		);

		$this->_subscribers[] = new Content_Width_Subscriber(
			Config::MODS_SHOP_SINGLE_CONTENT_WIDTH,
			[
				'.single-product .neve-main > .shop-container .nv-shop.col'     => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::CONTENT ],
				'.single-product .neve-main > .shop-container .nv-sidebar-wrap' => [ Config::CSS_PROP_MAX_WIDTH => Content_Width_Subscriber::SIDEBAR ]
			]
		);

	}
}
