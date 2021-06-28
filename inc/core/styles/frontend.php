<?php
/**
 * Style generator based on settings.
 *
 * @package Neve\Core\Styles
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Customizer\Defaults\Single_Post;
use Neve\Customizer\Options\Layout_Single_Post;

/**
 * Class Generator for Frontend.
 *
 * @package Neve\Core\Styles
 */
class Frontend extends Generator {
	use Css_Vars;
	use Single_Post;

	/**
	 * Generator constructor.
	 */
	public function __construct() {
		$this->_subscribers = [];
		$this->setup_container();
		$this->setup_blog_layout();
		$this->setup_legacy_gutenberg_palette();
		$this->setup_layout_subscribers();
		$this->setup_buttons();
		$this->setup_typography();
		$this->setup_blog_meta();
		$this->setup_blog_typography();
		$this->setup_blog_colors();
		$this->setup_form_fields_style();
		$this->setup_single_post_style();
	}


	/**
	 * Setup the container styles.
	 *
	 * @return false
	 */
	private function setup_container() {
		if ( ! neve_is_new_skin() ) {
			$this->_subscribers['.container'] = [
				Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_KEY           => Config::MODS_CONTAINER_WIDTH,
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
			];

			return false;
		}

		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => ':root',
			Dynamic_Selector::KEY_RULES    => $this->get_container_rules(),
		];
	}

	/**
	 * Setup legacy gutenberg palette for old users.
	 */
	private function setup_legacy_gutenberg_palette() {
		$is_new_user           = get_option( 'neve_new_user' );
		$imported_starter_site = get_option( 'neve_imported_demo' );

		if ( $is_new_user === 'yes' && $imported_starter_site !== 'yes' ) {
			return;
		}

		$this->_subscribers['.has-neve-button-color-color']            = [
			Config::CSS_PROP_COLOR => [
				Dynamic_Selector::META_KEY       => Config::MODS_BUTTON_PRIMARY_STYLE . '.background',
				Dynamic_Selector::META_IMPORTANT => true,
				Dynamic_Selector::META_DEFAULT   => '#0366d6',
			],
		];
		$this->_subscribers['.has-neve-button-color-background-color'] = [
			Config::CSS_PROP_BACKGROUND_COLOR => [
				Dynamic_Selector::META_KEY       => Config::MODS_BUTTON_PRIMARY_STYLE . '.background',
				Dynamic_Selector::META_IMPORTANT => true,
				Dynamic_Selector::META_DEFAULT   => '#0366d6',
			],
		];
	}

	/**
	 * Add css for blog colors.
	 */
	public function setup_blog_colors() {
		$this->_subscribers['.cover-post .inner, .cover-post .inner a:not(.button), .cover-post .inner a:not(.button):hover, .cover-post .inner a:not(.button):focus, .cover-post .inner li'] = [
			Config::CSS_PROP_COLOR => [
				Dynamic_Selector::META_KEY => 'neve_blog_covers_text_color',
			],
		];

		$selector = get_theme_mod( 'neve_blog_archive_layout', 'grid' ) === 'covers' ? '.cover-post.nv-post-thumbnail-wrap' : '.nv-post-thumbnail-wrap img';

		$this->_subscribers[ $selector ] = [
			Config::CSS_PROP_BOX_SHADOW => [
				Dynamic_Selector::META_KEY    => 'neve_post_thumbnail_box_shadow',
				Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
					if ( absint( $value ) === 0 ) {
						return '';
					}
					$map = [
						1 => '0 1px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.1)',
						2 => '0 3px 6px -5px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
						3 => '0 10px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
						4 => '0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.12)',
						5 => '0 16px 38px -12px rgba(0,0,0,0.56), 0 4px 25px 0 rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.2)',
					];
					if ( ! array_key_exists( absint( $value ), $map ) ) {
						return '';
					}

					return sprintf( '%s:%s;', $css_prop, $map[ $value ] );
				},
			],
		];
	}

	/**
	 * Add css for blog typography.
	 */
	public function setup_blog_typography() {
		$archive_typography = array(
			Config::CSS_SELECTOR_ARCHIVE_POST_TITLE        => Config::MODS_TYPEFACE_ARCHIVE_POST_TITLE,
			Config::CSS_SELECTOR_ARCHIVE_POST_EXCERPT      => Config::MODS_TYPEFACE_ARCHIVE_POST_EXCERPT,
			Config::CSS_SELECTOR_ARCHIVE_POST_META         => Config::MODS_TYPEFACE_ARCHIVE_POST_META,
			Config::CSS_SELECTOR_SINGLE_POST_TITLE         => Config::MODS_TYPEFACE_SINGLE_POST_TITLE,
			Config::CSS_SELECTOR_SINGLE_POST_META          => Config::MODS_TYPEFACE_SINGLE_POST_META,
			Config::CSS_SELECTOR_SINGLE_POST_COMMENT_TITLE => Config::MODS_TYPEFACE_SINGLE_POST_COMMENT_TITLE,
		);
		foreach ( $archive_typography as $selector => $mod ) {
			$this->_subscribers[ $selector ] = [
				Config::CSS_PROP_FONT_SIZE      => [
					Dynamic_Selector::META_KEY           => $mod . '.fontSize',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => 'px',
				],
				Config::CSS_PROP_LINE_HEIGHT    => [
					Dynamic_Selector::META_KEY           => $mod . '.lineHeight',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => '',
				],
				Config::CSS_PROP_LETTER_SPACING => [
					Dynamic_Selector::META_KEY           => $mod . '.letterSpacing',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				Config::CSS_PROP_FONT_WEIGHT    => [
					Dynamic_Selector::META_KEY => $mod . '.fontWeight',
				],
				Config::CSS_PROP_TEXT_TRANSFORM => $mod . '.textTransform',
			];
		}
	}



	/**
	 * Add css for blog layout.
	 *
	 * Removed grid in new skin CSS so this should handle the grid.
	 *
	 * @since 3.0.0
	 */
	public function setup_blog_layout() {
		if ( ! neve_is_new_skin() ) {
			return false;
		}

		$blog_layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		if ( ! in_array( $blog_layout, [ 'grid', 'covers' ], true ) ) {
			return false;
		}

		$this->_subscribers[':root'] = [
			'--postWidth' => [
				Dynamic_Selector::META_KEY           => 'neve_grid_layout',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => '{"desktop":1,"tablet":1,"mobile":1}',
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) {
					if ( $value < 1 ) {
						$value = 1;
					}

					return sprintf( '%s:%s;', $css_prop, 100 / $value . '%' );
				},
			],
		];
	}

	/**
	 * Setups the legacy typography, used before 3.0.
	 *
	 * @since 3.0.0
	 */
	public function setup_legacy_typography() {
		$this->_subscribers[ Config::CSS_SELECTOR_TYPEFACE_GENERAL ] = [
			Config::CSS_PROP_FONT_SIZE      => [
				Dynamic_Selector::META_KEY           => Config::MODS_TYPEFACE_GENERAL . '.fontSize',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			],
			Config::CSS_PROP_LINE_HEIGHT    => [
				Dynamic_Selector::META_KEY           => Config::MODS_TYPEFACE_GENERAL . '.lineHeight',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => '',
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
					Dynamic_Selector::META_SUFFIX        => '',
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
		}
	}

	/**
	 * Setup typography subscribers.
	 */
	public function setup_typography() {
		if ( ! neve_is_new_skin() ) {
			$this->setup_legacy_typography();

			return;
		}
		$rules                = $this->get_typography_rules();
		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => ':root',
			Dynamic_Selector::KEY_RULES    => $rules,
		];
	}

	/**
	 * Setup legacy button.
	 */
	private function setup_legacy_buttons() {
		// Primary button config.
		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => Config::CSS_SELECTOR_BTN_PRIMARY_NORMAL,
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_BACKGROUND_COLOR => [
					Dynamic_Selector::META_KEY     => Config::MODS_BUTTON_PRIMARY_STYLE . '.background',
					Dynamic_Selector::META_DEFAULT => 'var(--nv-primary-accent)',
				],
				Config::CSS_PROP_COLOR            => Config::MODS_BUTTON_PRIMARY_STYLE . '.text',
				Config::CSS_PROP_BORDER_RADIUS    => Config::MODS_BUTTON_PRIMARY_STYLE . '.borderRadius',
				Config::CSS_PROP_CUSTOM_BTN_TYPE  => Config::MODS_BUTTON_PRIMARY_STYLE . '.type',
				Config::CSS_PROP_BORDER_WIDTH     => Config::MODS_BUTTON_PRIMARY_STYLE . '.borderWidth',
			],
			Dynamic_Selector::KEY_CONTEXT  => [
				Dynamic_Selector::CONTEXT_FRONTEND => true,
			],
		];

		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => Config::CSS_SELECTOR_BTN_PRIMARY_NORMAL,
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_FONT_SIZE      => [
					Dynamic_Selector::META_KEY           => Config::MODS_BUTTON_TYPEFACE . '.fontSize',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => 'em',
				],
				Config::CSS_PROP_LINE_HEIGHT    => [
					Dynamic_Selector::META_KEY           => Config::MODS_BUTTON_TYPEFACE . '.lineHeight',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => '',
				],
				Config::CSS_PROP_LETTER_SPACING => [
					Dynamic_Selector::META_KEY           => Config::MODS_BUTTON_TYPEFACE . '.letterSpacing',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				Config::CSS_PROP_FONT_WEIGHT    => [
					Dynamic_Selector::META_KEY => Config::MODS_BUTTON_TYPEFACE . '.fontWeight',
					'font'                     => 'mods_' . Config::MODS_FONT_GENERAL,
				],
				Config::CSS_PROP_TEXT_TRANSFORM => Config::MODS_BUTTON_TYPEFACE . '.textTransform',
			],
		];

		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => Config::CSS_SELECTOR_BTN_PRIMARY_HOVER,
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_BUTTON_PRIMARY_STYLE . '.backgroundHover',
				Config::CSS_PROP_COLOR            => Config::MODS_BUTTON_PRIMARY_STYLE . '.textHover',
			],
			Dynamic_Selector::KEY_CONTEXT  => [
				Dynamic_Selector::CONTEXT_FRONTEND => true,
			],
		];

		$secondary_rules = [
			Dynamic_Selector::KEY_RULES   => [
				Config::CSS_PROP_BACKGROUND_COLOR => [
					Dynamic_Selector::META_KEY     => Config::MODS_BUTTON_SECONDARY_STYLE . '.background',
					Dynamic_Selector::META_DEFAULT => 'rgba(0,0,0,0)',
				],
				Config::CSS_PROP_COLOR            => [
					Dynamic_Selector::META_KEY     => Config::MODS_BUTTON_SECONDARY_STYLE . '.text',
					Dynamic_Selector::META_DEFAULT => 'var(--nv-text-color)',
				],
				Config::CSS_PROP_BORDER_RADIUS    => Config::MODS_BUTTON_SECONDARY_STYLE . '.borderRadius',
				Config::CSS_PROP_CUSTOM_BTN_TYPE  => Config::MODS_BUTTON_SECONDARY_STYLE . '.type',
				Config::CSS_PROP_BORDER_WIDTH     => Config::MODS_BUTTON_SECONDARY_STYLE . '.borderWidth',
			],
			Dynamic_Selector::KEY_CONTEXT => [
				Dynamic_Selector::CONTEXT_FRONTEND => true,
			],
		];

		$this->_subscribers [] = array_merge( [ Dynamic_Selector::KEY_SELECTOR => Config::CSS_SELECTOR_BTN_SECONDARY_NORMAL ], $secondary_rules );
		$this->_subscribers [] = array_merge( [ Dynamic_Selector::KEY_SELECTOR => Config::CSS_SELECTOR_BTN_SECONDARY_DEFAULT ], $secondary_rules );

		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => Config::CSS_SELECTOR_BTN_SECONDARY_NORMAL,
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_FONT_SIZE      => [
					Dynamic_Selector::META_KEY           => Config::MODS_SECONDARY_BUTTON_TYPEFACE . '.fontSize',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => 'em',
				],
				Config::CSS_PROP_LINE_HEIGHT    => [
					Dynamic_Selector::META_KEY           => Config::MODS_SECONDARY_BUTTON_TYPEFACE . '.lineHeight',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => '',
				],
				Config::CSS_PROP_LETTER_SPACING => [
					Dynamic_Selector::META_KEY           => Config::MODS_SECONDARY_BUTTON_TYPEFACE . '.letterSpacing',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				Config::CSS_PROP_FONT_WEIGHT    => [
					Dynamic_Selector::META_KEY => Config::MODS_SECONDARY_BUTTON_TYPEFACE . '.fontWeight',
					'font'                     => 'mods_' . Config::MODS_FONT_GENERAL,
				],
				Config::CSS_PROP_TEXT_TRANSFORM => Config::MODS_SECONDARY_BUTTON_TYPEFACE . '.textTransform',
			],
		];

		$secondary_rules_hover = [
			Dynamic_Selector::KEY_RULES   => [
				Config::CSS_PROP_BACKGROUND_COLOR => [
					Dynamic_Selector::META_KEY     => Config::MODS_BUTTON_SECONDARY_STYLE . '.backgroundHover',
					Dynamic_Selector::META_DEFAULT => 'rgba(0,0,0,0)',
				],
				Config::CSS_PROP_COLOR            => [
					Dynamic_Selector::META_KEY     => Config::MODS_BUTTON_SECONDARY_STYLE . '.textHover',
					Dynamic_Selector::META_DEFAULT => 'var(--nv-text-color)',
				],
			],
			Dynamic_Selector::KEY_CONTEXT => [
				Dynamic_Selector::CONTEXT_FRONTEND => true,
			],
		];

		$this->_subscribers[] = array_merge( $secondary_rules_hover, [ Dynamic_Selector::KEY_SELECTOR => Config::CSS_SELECTOR_BTN_SECONDARY_HOVER ] );
		$this->_subscribers[] = array_merge( $secondary_rules_hover, [ Dynamic_Selector::KEY_SELECTOR => Config::CSS_SELECTOR_BTN_SECONDARY_DEFAULT_HOVER ] );

		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => Config::CSS_SELECTOR_BTN_PRIMARY_PADDING,
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_PADDING => [
					Dynamic_Selector::META_KEY           => Config::MODS_BUTTON_PRIMARY_PADDING,
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
			],
			Dynamic_Selector::KEY_CONTEXT  => [
				Dynamic_Selector::CONTEXT_FRONTEND => true,
			],
		];
		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => Config::CSS_SELECTOR_BTN_SECONDARY_PADDING,
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_PADDING => [
					Dynamic_Selector::META_KEY           => Config::MODS_BUTTON_SECONDARY_PADDING,
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
			],
			Dynamic_Selector::KEY_CONTEXT  => [
				Dynamic_Selector::CONTEXT_FRONTEND => true,
			],
		];

		if ( ! class_exists( 'WooCommerce', false ) ) {
			return;
		}

		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => '.woocommerce-mini-cart__buttons .button.checkout',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_BACKGROUND_COLOR => [
					Dynamic_Selector::META_KEY     => Config::MODS_BUTTON_PRIMARY_STYLE . '.background',
					Dynamic_Selector::META_DEFAULT => 'var(--nv-primary-accent)',
				],
				Config::CSS_PROP_COLOR            => Config::MODS_BUTTON_PRIMARY_STYLE . '.text',
				Config::CSS_PROP_BORDER_RADIUS    => Config::MODS_BUTTON_PRIMARY_STYLE . '.borderRadius',
				Config::CSS_PROP_CUSTOM_BTN_TYPE  => Config::MODS_BUTTON_PRIMARY_STYLE . '.type',
				Config::CSS_PROP_BORDER_WIDTH     => Config::MODS_BUTTON_PRIMARY_STYLE . '.borderWidth',
			],
			Dynamic_Selector::KEY_CONTEXT  => [
				Dynamic_Selector::CONTEXT_FRONTEND => true,
			],
		];

		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => '.woocommerce-mini-cart__buttons .button.checkout:hover',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_BUTTON_PRIMARY_STYLE . '.backgroundHover',
				Config::CSS_PROP_COLOR            => Config::MODS_BUTTON_PRIMARY_STYLE . '.textHover',
			],
			Dynamic_Selector::KEY_CONTEXT  => [
				Dynamic_Selector::CONTEXT_FRONTEND => true,
			],
		];

		$this->_subscribers [] = [
			Dynamic_Selector::KEY_SELECTOR => '.woocommerce .woocommerce-mini-cart__buttons.buttons a.button.wc-forward:not(.checkout)',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_BUTTON_SECONDARY_STYLE . '.background',
				Config::CSS_PROP_COLOR            => [
					Dynamic_Selector::META_KEY     => Config::MODS_BUTTON_SECONDARY_STYLE . '.text',
					Dynamic_Selector::META_DEFAULT => 'var(--nv-text-color)',
				],
				Config::CSS_PROP_BORDER_RADIUS    => Config::MODS_BUTTON_SECONDARY_STYLE . '.borderRadius',
				Config::CSS_PROP_CUSTOM_BTN_TYPE  => Config::MODS_BUTTON_SECONDARY_STYLE . '.type',
				Config::CSS_PROP_BORDER_WIDTH     => Config::MODS_BUTTON_SECONDARY_STYLE . '.borderWidth',
			],
			Dynamic_Selector::KEY_CONTEXT  => [
				Dynamic_Selector::CONTEXT_FRONTEND => true,
			],
		];

		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => '.woocommerce .woocommerce-mini-cart__buttons.buttons a.button.wc-forward:not(.checkout):hover',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_BUTTON_SECONDARY_STYLE . '.backgroundHover',
				Config::CSS_PROP_COLOR            => [
					Dynamic_Selector::META_KEY     => Config::MODS_BUTTON_SECONDARY_STYLE . '.textHover',
					Dynamic_Selector::META_DEFAULT => 'var(--nv-text-color)',
				],
			],
			Dynamic_Selector::KEY_CONTEXT  => [
				Dynamic_Selector::CONTEXT_FRONTEND => true,
			],
		];
	}

	/**
	 * Setup button subscribers.
	 */
	public function setup_buttons() {
		if ( ! neve_is_new_skin() ) {
			$this->setup_legacy_buttons();

			return;
		}

		$rules                = $this->get_button_rules();
		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => ':root',
			Dynamic_Selector::KEY_RULES    => $rules,
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

			$this->_subscribers['#content .container .col, #content .container-fluid .col']                             = [
				Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_KEY         => Config::MODS_SITEWIDE_CONTENT_WIDTH,
					Dynamic_Selector::META_SUFFIX      => '%',
					Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				],
			];
			$this->_subscribers['.alignfull > [class*="__inner-container"], .alignwide > [class*="__inner-container"]'] = [
				Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_KEY           => Config::MODS_SITEWIDE_CONTENT_WIDTH,
					Dynamic_Selector::META_DEFAULT       => 70,
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) {
						$width = Mods::to_json( Config::MODS_CONTAINER_WIDTH );
						if ( $device === Dynamic_Selector::DESKTOP ) {
							return sprintf( 'max-width:%spx', round( ( $value / 100 ) * $width[ $device ] - Config::CONTENT_DEFAULT_PADDING ) );
						}
						if ( $device === Dynamic_Selector::MOBILE ) {
							return sprintf( 'max-width:%spx;margin:auto', ( $width[ $device ] - Config::CONTENT_DEFAULT_PADDING ) );
						}

						return '';
					},
				],
			];
			$this->_subscribers['.container-fluid .alignfull > [class*="__inner-container"], .container-fluid .alignwide > [class*="__inner-container"]'] = [
				Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_KEY         => Config::MODS_SITEWIDE_CONTENT_WIDTH,
					Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
					Dynamic_Selector::META_FILTER      => function ( $css_prop, $value, $meta, $device ) {
						return sprintf( 'max-width:calc(%s%% + %spx)', $value, Config::CONTENT_DEFAULT_PADDING / 2 );
					},
				],
			];
			$this->_subscribers['.nv-sidebar-wrap, .nv-sidebar-wrap.shop-sidebar'] = [
				Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_KEY         => Config::MODS_SITEWIDE_CONTENT_WIDTH,
					Dynamic_Selector::META_FILTER      => 'minus_100',
					Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
					Dynamic_Selector::META_SUFFIX      => '%',
				],
			];

			return;
		}
		// Others content width.
		$this->_subscribers['body:not(.single):not(.archive):not(.blog):not(.search) .neve-main > .container .col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_OTHERS_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];
		$this->_subscribers['body:not(.single):not(.archive):not(.blog):not(.search) .nv-sidebar-wrap']             = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_OTHERS_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => 'minus_100',
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];
		// Archive content width.
		$this->_subscribers['.neve-main > .archive-container .nv-index-posts.col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];
		$this->_subscribers['.neve-main > .archive-container .nv-sidebar-wrap']    = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => 'minus_100',
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];
		// Single content width.
		$this->_subscribers['.neve-main > .single-post-container .nv-single-post-wrap.col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];

		$this->_subscribers['.single-post-container .alignfull > [class*="__inner-container"], .single-post-container .alignwide > [class*="__inner-container"]']                                 = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY           => Config::MODS_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEFAULT       => 70,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) {
					$width = Mods::to_json( Config::MODS_CONTAINER_WIDTH );
					$value = $device !== Dynamic_Selector::DESKTOP ? ( $width[ $device ] - Config::CONTENT_DEFAULT_PADDING ) : round( ( $value / 100 ) * $width[ $device ] - Config::CONTENT_DEFAULT_PADDING );

					return sprintf( 'max-width:%spx', $value );
				},
			],
		];
		$this->_subscribers['.container-fluid.single-post-container .alignfull > [class*="__inner-container"], .container-fluid.single-post-container .alignwide > [class*="__inner-container"]'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => function ( $css_prop, $value, $meta, $device ) {
					return sprintf( 'max-width:calc(%s%% + %spx)', $value, Config::CONTENT_DEFAULT_PADDING / 2 );
				},
			],
		];

		$this->_subscribers['.neve-main > .single-post-container .nv-sidebar-wrap'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => 'minus_100',
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];

		// TODO provide context handler for better checks.
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return;
		}

		$this->_subscribers['.archive.woocommerce .neve-main > .shop-container .nv-shop.col']     = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SHOP_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];
		$this->_subscribers['.archive.woocommerce .neve-main > .shop-container .nv-sidebar-wrap'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SHOP_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => 'minus_100',
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];


		$this->_subscribers['.single-product .neve-main > .shop-container .nv-shop.col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SHOP_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];

		$this->_subscribers['.single-product .alignfull > [class*="__inner-container"], .single-product .alignwide > [class*="__inner-container"]']                  = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY           => Config::MODS_SHOP_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEFAULT       => 70,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) {
					$width = Mods::to_json( Config::MODS_CONTAINER_WIDTH );
					$value = $device !== Dynamic_Selector::DESKTOP ? ( $width[ $device ] - Config::CONTENT_DEFAULT_PADDING ) : round( ( $value / 100 ) * $width[ $device ] - Config::CONTENT_DEFAULT_PADDING );

					return sprintf( 'max-width:%spx', $value );
				},
			],
		];
		$this->_subscribers['.single-product .container-fluid .alignfull > [class*="__inner-container"], .single-product .alignwide > [class*="__inner-container"]'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SHOP_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => function ( $css_prop, $value, $meta, $device ) {
					return sprintf( 'max-width:calc(%s%% + %spx)', $value, Config::CONTENT_DEFAULT_PADDING / 2 );
				},
			],
		];
		$this->_subscribers['.single-product .neve-main > .shop-container .nv-sidebar-wrap'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SHOP_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => 'minus_100',
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];

	}

	/**
	 * Adds form field styles
	 */
	private function setup_form_fields_style() {
		if ( ! neve_is_new_skin() ) {
			$this->setup_legacy_form_fields_style();

			return;
		}

		// Form fields
		$this->_subscribers[':root']['--formFieldSpacing'] = [
			Dynamic_Selector::META_KEY     => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_SPACING ),
			Dynamic_Selector::META_DEFAULT => Mods::get_alternative_mod_default( Config::MODS_FORM_FIELDS_SPACING ),
			Dynamic_Selector::META_SUFFIX  => 'px',
		];

		$default = array_fill_keys( Config::$directional_keys, '2' );

		$this->_subscribers[':root']['--formFieldBorderWidth'] = [
			Dynamic_Selector::META_KEY     => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_BORDER_WIDTH ),
			Dynamic_Selector::META_SUFFIX  => 'px',
			Dynamic_Selector::META_DEFAULT => $default,
			'directional-prop'             => Config::CSS_PROP_BORDER_WIDTH,
		];

		$default = array_fill_keys( Config::$directional_keys, '3' );

		$this->_subscribers[':root']['--formFieldBorderRadius'] = [
			Dynamic_Selector::META_KEY     => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_BORDER_RADIUS ),
			Dynamic_Selector::META_SUFFIX  => 'px',
			Dynamic_Selector::META_DEFAULT => $default,
			'directional-prop'             => Config::CSS_PROP_BORDER_RADIUS,
		];
		$this->_subscribers[':root']['--formFieldBgColor']      = [
			Dynamic_Selector::META_KEY     => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_BACKGROUND_COLOR ),
			Dynamic_Selector::META_DEFAULT => 'var(--nv-site-bg)',
		];
		$this->_subscribers[':root']['--formFieldBorderColor']  = [
			Dynamic_Selector::META_KEY     => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_BORDER_COLOR ),
			Dynamic_Selector::META_DEFAULT => '#dddddd',
		];
		$this->_subscribers[':root']['--formFieldColor']        = [
			Dynamic_Selector::META_KEY     => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_COLOR ),
			Dynamic_Selector::META_DEFAULT => 'var(--nv-text-color)',
		];

		$this->_subscribers[':root']['--formFieldPadding']       = [
			Dynamic_Selector::META_KEY           => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_PADDING ),
			Dynamic_Selector::META_DEFAULT       => Mods::get_alternative_mod_default( Config::MODS_FORM_FIELDS_PADDING ),
			Dynamic_Selector::META_SUFFIX        => 'px',
			Dynamic_Selector::META_IS_RESPONSIVE => false,
			'directional-prop'                   => Config::CSS_PROP_PADDING,
		];
		$this->_subscribers[':root']['--formFieldTextTransform'] = [
			Dynamic_Selector::META_KEY           => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_TYPEFACE ) . '.textTransform',
			Dynamic_Selector::META_IS_RESPONSIVE => false,
		];
		$this->_subscribers[':root']['--formFieldFontSize']      = [
			Dynamic_Selector::META_KEY           => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_TYPEFACE ) . '.fontSize',
			Dynamic_Selector::META_SUFFIX        => 'px',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
		];
		$this->_subscribers[':root']['--formFieldLineHeight']    = [
			Dynamic_Selector::META_KEY           => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_TYPEFACE ) . '.lineHeight',
			Dynamic_Selector::META_SUFFIX        => '',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
		];
		$this->_subscribers[':root']['--formFieldLetterSpacing'] = [
			Dynamic_Selector::META_KEY           => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_TYPEFACE ) . '.letterSpacing',
			Dynamic_Selector::META_SUFFIX        => 'px',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
		];
		$this->_subscribers[':root']['--formFieldFontWeight']    = [
			Dynamic_Selector::META_KEY => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_TYPEFACE ) . '.fontWeight',
		];


		// Form labels
		$this->_subscribers[':root']['--formLabelSpacing']       = [
			Dynamic_Selector::META_KEY     => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_LABELS_SPACING ),
			Dynamic_Selector::META_DEFAULT => 10,
			Dynamic_Selector::META_SUFFIX  => 'px',
		];
		$this->_subscribers[':root']['--formLabelFontSize']      = [
			Dynamic_Selector::META_KEY           => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_LABELS_TYPEFACE ) . '.fontSize',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
			Dynamic_Selector::META_SUFFIX        => 'px',
		];
		$this->_subscribers[':root']['--formLabelLineHeight']    = [
			Dynamic_Selector::META_KEY           => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_LABELS_TYPEFACE ) . '.lineHeight',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
			Dynamic_Selector::META_SUFFIX        => '',
		];
		$this->_subscribers[':root']['--formLabelLetterSpacing'] = [
			Dynamic_Selector::META_KEY           => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_LABELS_TYPEFACE ) . '.letterSpacing',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
		];
		$this->_subscribers[':root']['--formLabelFontWeight']    = [
			Dynamic_Selector::META_KEY => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_LABELS_TYPEFACE ) . '.fontWeight',
		];
		$this->_subscribers[':root']['--formLabelTextTransform'] = [
			Dynamic_Selector::META_KEY => Mods::get_alternative_mod( Config::MODS_FORM_FIELDS_LABELS_TYPEFACE ) . '.textTransform',
		];

		// Form button style. Override if needed.
		$form_buttons_type = get_theme_mod( 'neve_form_button_type', 'primary' );

		if ( $form_buttons_type === 'primary' ) {
			return;
		}

		$this->_subscribers[ Config::CSS_SELECTOR_FORM_BUTTON ]['background-color']       = [
			'key'      => 'neve_form_button_type',
			'override' => 'var(--secondaryBtnBg, transparent)',
		];
		$this->_subscribers[ Config::CSS_SELECTOR_FORM_BUTTON ]['color']                  = [
			'key'      => 'neve_form_button_type',
			'override' => 'var(--secondaryBtnColor)',
		];
		$this->_subscribers[ Config::CSS_SELECTOR_FORM_BUTTON ]['padding']                = [
			'key'      => 'neve_form_button_type',
			'override' => 'var(--secondaryBtnPadding, 7px 12px)',
		];
		$this->_subscribers[ Config::CSS_SELECTOR_FORM_BUTTON ]['border-radius']          = [
			'key'      => 'neve_form_button_type',
			'override' => 'var(--secondaryBtnBorderRadius, 3px)',
		];
		$this->_subscribers[ Config::CSS_SELECTOR_FORM_BUTTON_HOVER ]['background-color'] = [
			'key'      => 'neve_form_button_type',
			'override' => 'var(--secondaryBtnHoverBg, transparent)',
		];
		$this->_subscribers[ Config::CSS_SELECTOR_FORM_BUTTON_HOVER ]['color']            = [
			'key'      => 'neve_form_button_type',
			'override' => 'var(--secondaryBtnHoverColor)',
		];

		$mod_key_secondary = Mods::get_alternative_mod( Config::MODS_BUTTON_SECONDARY_STYLE );
		$default_secondary = Mods::get_alternative_mod_default( Config::MODS_BUTTON_SECONDARY_STYLE );
		$secondary_values  = get_theme_mod( $mod_key_secondary, $default_secondary );

		if ( ! isset( $secondary_values['type'] ) || $secondary_values['type'] !== 'outline' ) {
			return;
		}

		$this->_subscribers[ Config::CSS_SELECTOR_FORM_BUTTON ]['border-width']       = [
			'key'      => 'neve_form_button_type',
			'override' => 'var(--secondaryBtnBorderWidth, 3px)',
		];
		$this->_subscribers[ Config::CSS_SELECTOR_FORM_BUTTON ]['border-color']       = [
			'key'      => 'neve_form_button_type',
			'override' => 'var(--secondaryBtnHoverColor)',
		];
		$this->_subscribers[ Config::CSS_SELECTOR_FORM_BUTTON_HOVER ]['border-color'] = [
			'key'      => 'neve_form_button_type',
			'override' => 'var(--secondaryBtnHoverColor)',
		];
	}

	/**
	 * Add form buttons selectors to the Buttons selector.
	 *
	 * @param string $selector the CSS selector received from the filter.
	 *
	 * @return string
	 */
	public function add_form_buttons( $selector ) {
		return ( $selector . ', form input[type="submit"], form button[type="submit"]' );
	}

	/**
	 * Add form buttons hover selectors to the Buttons selector.
	 *
	 * @param string $selector the CSS selector received from the filter.
	 *
	 * @return string
	 */
	public function add_form_buttons_hover( $selector ) {
		return ( $selector . ', form input[type="submit"]:hover, form button[type="submit"]:hover' );
	}

	/**
	 * Add css for blog meta.
	 */
	public function setup_blog_meta() {
		$meta_key = Config::MODS_ARCHIVE_POST_META_AUTHOR_AVATAR_SIZE;
		if ( is_singular( 'post' ) ) {
			$meta_key = Config::MODS_SINGLE_POST_META_AUTHOR_AVATAR_SIZE;
		}

		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => '.nv-meta-list .meta.author img.photo',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_HEIGHT => [
					Dynamic_Selector::META_KEY           => $meta_key,
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				Config::CSS_PROP_WIDTH  => [
					Dynamic_Selector::META_KEY           => $meta_key,
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
			],
		];
	}

	/**
	 * Setup legacy form field styles.
	 */
	private function setup_legacy_form_fields_style() {
		$this->_subscribers[ Config::CSS_SELECTOR_FORM_INPUTS_WITH_SPACING ] = [
			Config::CSS_PROP_MARGIN_BOTTOM => [
				Dynamic_Selector::META_KEY     => Config::MODS_FORM_FIELDS_SPACING,
				Dynamic_Selector::META_DEFAULT => 10,
			],
		];

		$this->_subscribers[ Config::CSS_SELECTOR_FORM_INPUTS ] = [
			Config::CSS_PROP_BACKGROUND_COLOR => Config::MODS_FORM_FIELDS_BACKGROUND_COLOR,
			Config::CSS_PROP_BORDER_WIDTH     => Config::MODS_FORM_FIELDS_BORDER_WIDTH,
			Config::CSS_PROP_BORDER_RADIUS    => Config::MODS_FORM_FIELDS_BORDER_RADIUS,
			Config::CSS_PROP_BORDER_COLOR     => Config::MODS_FORM_FIELDS_BORDER_COLOR,
			Config::CSS_PROP_COLOR            => [
				Dynamic_Selector::META_KEY     => Config::MODS_FORM_FIELDS_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-text-color)',
			],
			Config::CSS_PROP_PADDING          => [
				Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => false,
			],
			Config::CSS_PROP_TEXT_TRANSFORM   => [
				Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_TYPEFACE . '.textTransform',
				Dynamic_Selector::META_IS_RESPONSIVE => false,
				Dynamic_Selector::META_SUFFIX        => '',
			],
			Config::CSS_PROP_FONT_SIZE        => [
				Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_TYPEFACE . '.fontSize',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			],
			Config::CSS_PROP_LINE_HEIGHT      => [
				Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_TYPEFACE . '.lineHeight',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => '',
			],
			Config::CSS_PROP_LETTER_SPACING   => [
				Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_TYPEFACE . '.letterSpacing',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
			],
			Config::CSS_PROP_FONT_WEIGHT      => [
				Dynamic_Selector::META_KEY => Config::MODS_FORM_FIELDS_TYPEFACE . '.fontWeight',
			],
			Config::CSS_PROP_FONT_FAMILY      => Config::MODS_FONT_GENERAL,
		];

		$this->_subscribers[ Config::CSS_SELECTOR_FORM_INPUTS_LABELS ] = [
			Config::CSS_PROP_MARGIN_BOTTOM  => [
				Dynamic_Selector::META_KEY     => Config::MODS_FORM_FIELDS_LABELS_SPACING,
				Dynamic_Selector::META_SUFFIX  => 'px',
				Dynamic_Selector::META_DEFAULT => 10,
			],
			Config::CSS_PROP_FONT_SIZE      => [
				Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_LABELS_TYPEFACE . '.fontSize',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			],
			Config::CSS_PROP_LINE_HEIGHT    => [
				Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_LABELS_TYPEFACE . '.lineHeight',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => '',
			],
			Config::CSS_PROP_LETTER_SPACING => [
				Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_LABELS_TYPEFACE . '.letterSpacing',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
			],
			Config::CSS_PROP_FONT_WEIGHT    => [
				Dynamic_Selector::META_KEY => Config::MODS_FORM_FIELDS_LABELS_TYPEFACE . '.fontWeight',
			],
			Config::CSS_PROP_TEXT_TRANSFORM => [
				Dynamic_Selector::META_KEY => Config::MODS_FORM_FIELDS_LABELS_TYPEFACE . '.textTransform',
			],
		];

		$this->_subscribers[ Config::CSS_SELECTOR_FORM_SEARCH_INPUTS ] = [
			Config::CSS_PROP_PADDING_RIGHT => [
				Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_PADDING . '.right',
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) {
					$value = absint( $value ) + 33;

					return sprintf( '%s:%s !important;', $css_prop, $value . 'px' );
				},
				Dynamic_Selector::META_DEFAULT       => 12,
				Dynamic_Selector::META_IS_RESPONSIVE => false,
			],
			Config::CSS_PROP_FONT_FAMILY   => Config::MODS_FONT_GENERAL,
		];

		/**
		 * Form buttons.
		 */
		$form_buttons_type = get_theme_mod( 'neve_form_button_type', 'primary' );

		if ( $form_buttons_type === 'primary' ) {
			add_filter( 'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_NORMAL, [ $this, 'add_form_buttons' ] );
			add_filter( 'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_PADDING, [ $this, 'add_form_buttons' ] );
			add_filter( 'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_HOVER, [ $this, 'add_form_buttons_hover' ] );
			return;
		}

		add_filter( 'neve_selectors_' . Config::CSS_SELECTOR_BTN_SECONDARY_NORMAL, [ $this, 'add_form_buttons' ] );
		add_filter( 'neve_selectors_' . Config::CSS_SELECTOR_BTN_SECONDARY_PADDING, [ $this, 'add_form_buttons' ] );
		add_filter( 'neve_selectors_' . Config::CSS_SELECTOR_BTN_SECONDARY_HOVER, [ $this, 'add_form_buttons_hover' ] );
	}

	/**
	 * Add css for single post.
	 */
	private function setup_single_post_style() {

		$cover_padding_default                = $this->padding_default( 'cover' );
		$this->_subscribers['.nv-post-cover'] = [
			Config::CSS_PROP_MIN_HEIGHT => [
				Dynamic_Selector::META_KEY           => Config::MODS_POST_COVER_HEIGHT,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'responsive_suffix',
				Dynamic_Selector::META_AS_JSON       => true,
				Dynamic_Selector::META_DEFAULT       => '{ "mobile": "300", "tablet": "300", "desktop": "300" }',
			],
			Config::CSS_PROP_COLOR      => [
				Dynamic_Selector::META_KEY     => Config::MODS_POST_COVER_TEXT_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-text-dark-bg)',
			],
			Config::CSS_PROP_PADDING    => [
				Dynamic_Selector::META_KEY           => Config::MODS_POST_COVER_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'responsive_unit',
				Dynamic_Selector::META_DEFAULT       => $this->padding_default( 'cover' ),
			],
		];

		$this->_subscribers['.nv-post-cover .nv-overlay'] = [
			Config::CSS_PROP_BACKGROUND_COLOR => [
				Dynamic_Selector::META_KEY     => Config::MODS_POST_COVER_BACKGROUND_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-dark-bg)',
			],
			Config::CSS_PROP_MIX_BLEND_MODE   => [
				Dynamic_Selector::META_KEY     => Config::MODS_POST_COVER_BLEND_MODE,
				Dynamic_Selector::META_DEFAULT => 'normal',
			],
			Config::CSS_PROP_OPACITY          => [
				Dynamic_Selector::META_KEY           => Config::MODS_POST_COVER_OVERLAY_OPACITY,
				Dynamic_Selector::META_DEFAULT       => '{ "mobile": 0.5, "tablet": 0.5, "desktop": 0.5 }',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
			],
		];

		$this->_subscribers['.nv-post-cover .nv-meta-list li, .nv-post-cover .nv-meta-list a'] = [
			Config::CSS_PROP_COLOR => [
				Dynamic_Selector::META_KEY     => Config::MODS_POST_COVER_TEXT_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-text-dark-bg)',
			],
		];

		$this->_subscribers['.nv-title-meta-wrap.is-boxed'] = [
			Config::CSS_PROP_PADDING          => [
				Dynamic_Selector::META_KEY           => Config::MODS_POST_COVER_BOXED_TITLE_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'responsive_unit',
				Dynamic_Selector::META_DEFAULT       => $this->padding_default( 'cover' ),
			],
			Config::CSS_PROP_BACKGROUND_COLOR => [
				Dynamic_Selector::META_KEY     => Config::MODS_POST_COVER_BOXED_TITLE_BACKGROUND,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-light-bg)',
			],
		];

		$this->_subscribers['.nv-single-post-wrap > *:not(:last-child)'] = [
			Config::CSS_PROP_MARGIN_BOTTOM => [
				Dynamic_Selector::META_KEY           => Config::MODS_SINGLE_POST_ELEMENTS_SPACING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			],
		];

		$this->_subscribers['.nv-comments-wrap.is-boxed'] = [
			Config::CSS_PROP_PADDING          => [
				Dynamic_Selector::META_KEY           => Config::MODS_POST_COMMENTS_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'responsive_unit',
				Dynamic_Selector::META_DEFAULT       => $this->padding_default(),
			],
			Config::CSS_PROP_BACKGROUND_COLOR => [
				Dynamic_Selector::META_KEY     => Config::MODS_POST_COMMENTS_BACKGROUND_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-light-bg)',
			],
		];

		$this->_subscribers['.nv-comments-wrap.is-boxed, .nv-comments-wrap.is-boxed a'] = [
			Config::CSS_PROP_COLOR => [
				Dynamic_Selector::META_KEY     => Config::MODS_POST_COMMENTS_TEXT_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-text-color)',
			],
		];

		$this->_subscribers['.comment-respond.is-boxed'] = [
			Config::CSS_PROP_PADDING          => [
				Dynamic_Selector::META_KEY           => Config::MODS_POST_COMMENTS_FORM_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'responsive_unit',
				Dynamic_Selector::META_DEFAULT       => $this->padding_default(),
			],
			Config::CSS_PROP_BACKGROUND_COLOR => [
				Dynamic_Selector::META_KEY     => Config::MODS_POST_COMMENTS_FORM_BACKGROUND_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-light-bg)',
			],
		];

		$this->_subscribers['.comment-respond.is-boxed, .comment-respond.is-boxed a'] = [
			Config::CSS_PROP_COLOR => [
				Dynamic_Selector::META_KEY     => Config::MODS_POST_COMMENTS_FORM_TEXT_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-text-color)',
			],
		];
	}
}
