<?php
/**
 * Style generator based on settings.
 *
 * @package Neve\Core\Styles
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use PHPUnit\Util\Type;

/**
 * Class Generator
 *
 * @package Neve\Core\Styles
 */
class Generator {
	/**
	 * Subscriber list used for CSS generation.
	 *
	 * @var array Subscriber list.
	 */
	private $_subscribers     = [];
	const SUBSCRIBER_TYPE     = 'type';
	const SUBSCRIBER_MAP      = 'map';
	const SUBSCRIBER_KEY      = 'key';
	const SUBSCRIBER_DEFAULTS = 'defaults';

	/**
	 * Generate the dynamic CSS.
	 *
	 * @param bool $echo Should we write it or return it.
	 * @param bool $for_gutenberg Is for Gutenberg.
	 *
	 * @return string|void Css output.
	 */
	public function generate( $echo = false, $for_gutenberg = false ) {
		$desktop_css = '';
		$tablet_css  = '';
		$all_css     = '';

		$this->_subscribers = array_merge( $this->_subscribers, apply_filters( 'neve_style_subscribers', [] ) );
		/**
		 * Neve try to build the CSS as mobile first.
		 * Based on this fact, the general CSS is considere the mobile one.
		 */
		$dynamic_selectors = new Dynamic_Selector( $this->_subscribers );
		$all_css          .= $dynamic_selectors->for_mobile();
		$tablet_css       .= $dynamic_selectors->for_tablet();
		$desktop_css      .= $dynamic_selectors->for_desktop();
		if ( ! empty( $tablet_css ) ) {
			$all_css .= sprintf( '@media(min-width: 576px){ %s }', $tablet_css );
		}
		if ( ! empty( $desktop_css ) ) {
			$all_css .= sprintf( '@media(min-width: 960px){ %s }', $desktop_css );
		}
		if ( ! $echo ) {
			return $all_css;
		}
		echo $all_css; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Generator constructor.
	 */
	public function __construct() {
		$this->_subscribers = [
			'.container'                                  => [
				Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_KEY           => Config::MODS_CONTAINER_WIDTH,
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
			],
			'a, has-neve-link-color-color'                => [
				Config::CSS_PROP_COLOR => Config::MODS_LINK_COLOR,
			],
			'.has-neve-link-color-background-color'       => [
				Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_LINK_COLOR,
			],
			'.nv-loader'                                  => [
				Config::CSS_PROP_BORDER_COLOR => Config::MODS_LINK_COLOR,
			],
			'a:hover, a:focus, .has-neve-link-hover-color-color' => [
				Config::CSS_PROP_COLOR => Config::MODS_LINK_HOVER_COLOR,
			],
			'.has-neve-link-hover-color-background-color' => [
				Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_LINK_HOVER_COLOR,
			],
			'body, .entry-title a, .entry-title a:hover, .entry-title a:focus,.has-neve-text-color-color' => [
				Config::CSS_PROP_COLOR => Config::MODS_TEXT_COLOR,
			],
			'.has-neve-text-color-background-color'       => [
				Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_TEXT_COLOR,
			],
		];

		$this->setup_layout_subscribers();
		$this->setup_buttons();
		$this->setup_typography();
	}


	/**
	 * Setup typography subscribers.
	 */
	public function setup_typography() {


		$this->_subscribers[ Config::CSS_SELECTOR_TYPEFACE_GENERAL ] = [
			Config::CSS_PROP_FONT_SIZE      => [
				Dynamic_Selector::META_KEY           => Config::MODS_TYPEFACE_GENERAL . '.fontSize',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			],
			Config::CSS_PROP_LINE_HEIGHT    => [
				Dynamic_Selector::META_KEY           => Config::MODS_TYPEFACE_GENERAL . '.lineHeight',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
			],
			Config::CSS_PROP_LETTER_SPACING => [
				Dynamic_Selector::META_KEY           => Config::MODS_TYPEFACE_GENERAL . '.letterSpacing',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
			],
			Config::CSS_PROP_FONT_WEIGHT    => [
				Dynamic_Selector::META_KEY => Config::MODS_TYPEFACE_GENERAL . '.fontWeight',
				'font'                     => 'mods_' . Config::MODS_FONT_GENERAL,
			],
			Config::CSS_PROP_TEXT_TRANSFORM => Config::MODS_TYPEFACE_GENERAL . '.textTransform',
			Config::CSS_PROP_FONT_FAMILY    => Config::MODS_FONT_GENERAL,
		];
		foreach ( neve_get_headings_selectors() as $id => $heading_selector
		) {
			$heading_mod                             = sprintf( 'neve_%s_typeface_general', $id );
			$this->_subscribers[ $heading_selector ] = [
				Config::CSS_PROP_FONT_SIZE      => [
					Dynamic_Selector::META_KEY           => $heading_mod . '.fontSize',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => 'em',
				],
				Config::CSS_PROP_LINE_HEIGHT    => [
					Dynamic_Selector::META_KEY           => $heading_mod . '.lineHeight',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				Config::CSS_PROP_LETTER_SPACING => [
					Dynamic_Selector::META_KEY           => $heading_mod . '.letterSpacing',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				Config::CSS_PROP_FONT_WEIGHT    => [
					Dynamic_Selector::META_KEY => $heading_mod . '.fontWeight',
					'font'                     => 'mods_' . Config::MODS_FONT_HEADINGS,
				],
				Config::CSS_PROP_TEXT_TRANSFORM => $heading_mod . '.textTransform',
				Config::CSS_PROP_FONT_FAMILY    => Config::MODS_FONT_HEADINGS,
			];
		}

		// Legacy filters.
		$extra_selectors_heading = apply_filters( 'neve_headings_font_family_selectors', '' );
		if ( ! empty( $extra_selectors_heading ) ) {
			$extra_selectors_heading                        = ltrim( $extra_selectors_heading, ', ' );
			$this->_subscribers[ $extra_selectors_heading ] = [
				Config::CSS_PROP_FONT_FAMILY => Config::MODS_FONT_HEADINGS,
			];
		}


		$extra_selectors_body = apply_filters( 'neve_body_font_family_selectors', '' );
		if ( ! empty( $extra_selectors_body ) ) {
			$extra_selectors_body                        = ltrim( $extra_selectors_body, ', ' );
			$this->_subscribers[ $extra_selectors_body ] = [
				Config::CSS_PROP_LETTER_SPACING => Config::MODS_TYPEFACE_GENERAL . '.letterSpacing',
				Config::CSS_PROP_FONT_WEIGHT    => [
					Dynamic_Selector::META_KEY => Config::MODS_TYPEFACE_GENERAL . '.fontWeight',
					'font'                     => 'mods_' . Config::MODS_FONT_GENERAL,
				],
				Config::CSS_PROP_TEXT_TRANSFORM => Config::MODS_TYPEFACE_GENERAL . '.textTransform',
				Config::CSS_PROP_FONT_FAMILY    => Config::MODS_FONT_GENERAL,
			];
		}
	}

	/**
	 * Setup button subscribers.
	 */
	public function setup_buttons() {
		// Primary button config.
		$this->_subscribers[ Config::CSS_SELECTOR_BTN_PRIMARY_NORMAL ]   = [
			Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_BUTTON_PRIMARY_STYLE . '.background',
			Config::CSS_PROP_COLOR            => Config::MODS_BUTTON_PRIMARY_STYLE . '.text',
			Config::CSS_PROP_BORDER_RADIUS    => Config::MODS_BUTTON_PRIMARY_STYLE . '.borderRadius',
			Config::CSS_PROP_CUSTOM_BTN_TYPE  => Config::MODS_BUTTON_PRIMARY_STYLE . '.type',
			Config::CSS_PROP_BORDER_WIDTH     => Config::MODS_BUTTON_PRIMARY_STYLE . '.borderWidth',
		];
		$this->_subscribers[ Config::CSS_SELECTOR_BTN_PRIMARY_HOVER ]    = [
			Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_BUTTON_PRIMARY_STYLE . '.backgroundHover',
			Config::CSS_PROP_COLOR            => Config::MODS_BUTTON_PRIMARY_STYLE . '.textHover',
		];
		$this->_subscribers['.nv-tags-list a:hover']                     = [
			Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_BUTTON_PRIMARY_STYLE . '.backgroundHover',
		];
		$this->_subscribers['.nv-tags-list a']                           = [
			Config::CSS_PROP_COLOR        => Config::MODS_BUTTON_PRIMARY_STYLE . '.background',
			Config::CSS_PROP_BORDER_COLOR => Config::MODS_BUTTON_PRIMARY_STYLE . '.background',
		];
		$this->_subscribers[ Config::CSS_SELECTOR_BTN_SECONDARY_NORMAL ] = [
			Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_BUTTON_SECONDARY_STYLE . '.background',
			Config::CSS_PROP_COLOR            => Config::MODS_BUTTON_SECONDARY_STYLE . '.text',
			Config::CSS_PROP_BORDER_RADIUS    => Config::MODS_BUTTON_SECONDARY_STYLE . '.borderRadius',
			Config::CSS_PROP_CUSTOM_BTN_TYPE  => Config::MODS_BUTTON_SECONDARY_STYLE . '.type',
			Config::CSS_PROP_BORDER_WIDTH     => Config::MODS_BUTTON_SECONDARY_STYLE . '.borderWidth',
		];
		$this->_subscribers[ Config::CSS_SELECTOR_BTN_SECONDARY_HOVER ]  = [
			Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_BUTTON_SECONDARY_STYLE . '.backgroundHover',
			Config::CSS_PROP_COLOR            => Config::MODS_BUTTON_SECONDARY_STYLE . '.textHover',
		];


		$this->_subscribers[ Config::CSS_SELECTOR_BTN_PRIMARY_PADDING ]   = [
			Config::CSS_PROP_PADDING => [
				Dynamic_Selector::META_KEY           => Config::MODS_BUTTON_PRIMARY_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
			],
		];
		$this->_subscribers[ Config::CSS_SELECTOR_BTN_SECONDARY_PADDING ] = [
			Config::CSS_PROP_PADDING => [
				Dynamic_Selector::META_KEY           => Config::MODS_BUTTON_SECONDARY_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
			],
		];
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

			$this->_subscribers['#content .container .col, #content .container-fluid .col'] = [
				Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_KEY    => Config::MODS_SITEWIDE_CONTENT_WIDTH,
					Dynamic_Selector::META_SUFFIX => '%',
				],
			];
			$this->_subscribers['.nv-sidebar-wrap, .nv-sidebar-wrap.shop-sidebar']          = [
				Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_KEY    => Config::MODS_SITEWIDE_CONTENT_WIDTH,
					Dynamic_Selector::META_FILTER => 'minus_100',
					Dynamic_Selector::META_SUFFIX => '%',
				],
			];

			return;
		}
		$this->_subscribers['body:not(.single):not(.archive):not(.blog):not(.search) .neve-main > .container .col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY    => Config::MODS_OTHERS_CONTENT_WIDTH,
				Dynamic_Selector::META_SUFFIX => '%',
			],
		];
		$this->_subscribers['body:not(.single):not(.archive):not(.blog):not(.search) .nv-sidebar-wrap']             = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY    => Config::MODS_OTHERS_CONTENT_WIDTH,
				Dynamic_Selector::META_FILTER => 'minus_100',
				Dynamic_Selector::META_SUFFIX => '%',
			],
		];

		$this->_subscribers['.neve-main > .archive-container .nv-index-posts.col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY    => Config::MODS_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_SUFFIX => '%',
			],
		];
		$this->_subscribers['.neve-main > .archive-container .nv-sidebar-wrap']    = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY    => Config::MODS_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_FILTER => 'minus_100',
				Dynamic_Selector::META_SUFFIX => '%',
			],
		];

		$this->_subscribers['.neve-main > .single-post-container .nv-single-post-wrap.col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY    => Config::MODS_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_SUFFIX => '%',
			],
		];
		$this->_subscribers['.neve-main > .single-post-container .nv-sidebar-wrap']         = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY    => Config::MODS_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_FILTER => 'minus_100',
				Dynamic_Selector::META_SUFFIX => '%',
			],
		];

		// TODO provide context handler for better checks.
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return;
		}

		$this->_subscribers['.archive.woocommerce .neve-main > .shop-container .nv-shop.col']     = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY    => Config::MODS_SHOP_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_SUFFIX => '%',
			],
		];
		$this->_subscribers['.archive.woocommerce .neve-main > .shop-container .nv-sidebar-wrap'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY    => Config::MODS_SHOP_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_FILTER => 'minus_100',
				Dynamic_Selector::META_SUFFIX => '%',
			],
		];


		$this->_subscribers['.single-product .neve-main > .shop-container .nv-shop.col']     = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY    => Config::MODS_SHOP_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_SUFFIX => '%',
			],
		];
		$this->_subscribers['.single-product .neve-main > .shop-container .nv-sidebar-wrap'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY    => Config::MODS_SHOP_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_FILTER => 'minus_100',
				Dynamic_Selector::META_SUFFIX => '%',
			],
		];

	}
}
