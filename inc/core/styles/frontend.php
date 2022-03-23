<?php
/**
 * Style generator based on settings.
 *
 * @package Neve\Core\Styles
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Customizer\Defaults\Layout;
use Neve\Customizer\Defaults\Single_Post;

/**
 * Class Generator for Frontend.
 *
 * @package Neve\Core\Styles
 */
class Frontend extends Generator {
	use Css_Vars;
	use Single_Post;
	use Layout;

	/**
	 * Box shadow map values
	 *
	 * @var string[]
	 */
	private $box_shadow_map = [
		1 => '0 1px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.1)',
		2 => '0 3px 6px -5px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
		3 => '0 10px 20px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
		4 => '0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.12)',
		5 => '0 16px 38px -12px rgba(0,0,0,0.56), 0 4px 25px 0 rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.2)',
	];

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
		$this->setup_header_style();
		$this->setup_single_post_style();
	}

	/**
	 * Setup the container styles.
	 *
	 * @return void
	 */
	private function setup_container() {
		if ( ! neve_is_new_skin() ) {
			$this->_subscribers['.container'] = [
				Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_KEY           => Config::MODS_CONTAINER_WIDTH,
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
			];

			return;
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
	 * Setup legacy blog colors.
	 */
	private function setup_legacy_blog_colors() {
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

					if ( ! array_key_exists( absint( $value ), $this->box_shadow_map ) ) {
						return '';
					}

					return sprintf( '%s:%s;', $css_prop, $this->box_shadow_map[ $value ] );
				},
			],
		];
	}

	/**
	 * Add css for blog colors.
	 */
	public function setup_blog_colors() {
		if ( ! neve_is_new_skin() ) {
			$this->setup_legacy_blog_colors();

			return;
		}

		$layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		if ( $layout === 'covers' ) {
			$this->_subscribers['.cover-post'] = [
				'--color' => 'neve_blog_covers_text_color',
			];
		}

		$thumbnail_box_shadow_meta_name                = apply_filters( 'neve_thumbnail_box_shadow_meta_filter', 'neve_post_thumbnail_box_shadow' );
		$this->_subscribers['.nv-post-thumbnail-wrap'] = [
			'--boxShadow' => [
				Dynamic_Selector::META_KEY    => $thumbnail_box_shadow_meta_name,
				Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
					if ( absint( $value ) === 0 ) {
						return '';
					}

					if ( ! array_key_exists( absint( $value ), $this->box_shadow_map ) ) {
						return '';
					}

					return sprintf( '%s:%s;', $css_prop, $this->box_shadow_map[ $value ] );
				},
			],
		];
	}

	/**
	 * Add css for blog typography.
	 */
	public function setup_blog_typography() {
		if ( ! neve_is_new_skin() ) {
			$this->setup_legacy_blog_typography();

			return;
		}

		$archive_typography = [
			Config::CSS_SELECTOR_ARCHIVE_POST_TITLE        => [
				'mod'  => Config::MODS_TYPEFACE_ARCHIVE_POST_TITLE,
				'font' => Config::MODS_FONT_HEADINGS,
			],
			Config::CSS_SELECTOR_ARCHIVE_POST_EXCERPT      => [
				'mod'  => Config::MODS_TYPEFACE_ARCHIVE_POST_EXCERPT,
				'font' => Config::MODS_FONT_GENERAL,
			],
			Config::CSS_SELECTOR_ARCHIVE_POST_META         => [
				'mod'  => Config::MODS_TYPEFACE_ARCHIVE_POST_META,
				'font' => Config::MODS_FONT_GENERAL,
			],
			Config::CSS_SELECTOR_SINGLE_POST_TITLE         => [
				'mod'  => Config::MODS_TYPEFACE_SINGLE_POST_TITLE,
				'font' => Config::MODS_FONT_HEADINGS,
			],
			Config::CSS_SELECTOR_SINGLE_POST_META          => [
				'mod'  => Config::MODS_TYPEFACE_SINGLE_POST_META,
				'font' => Config::MODS_FONT_GENERAL,
			],
			Config::CSS_SELECTOR_SINGLE_POST_COMMENT_TITLE => [
				'mod'  => Config::MODS_TYPEFACE_SINGLE_POST_COMMENT_TITLE,
				'font' => Config::MODS_FONT_HEADINGS,
			],
		];
		foreach ( $archive_typography as $selector => $args ) {
			$this->_subscribers[ $selector ] = [
				'--fontSize'      => [
					Dynamic_Selector::META_KEY           => $args['mod'] . '.fontSize',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => 'px',
				],
				'--lineHeight'    => [
					Dynamic_Selector::META_KEY           => $args['mod'] . '.lineHeight',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => '',
				],
				'--letterSpacing' => [
					Dynamic_Selector::META_KEY           => $args['mod'] . '.letterSpacing',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => 'px',
				],
				'--fontWeight'    => [
					Dynamic_Selector::META_KEY => $args['mod'] . '.fontWeight',
					'font'                     => 'mods_' . $args['font'],
				],
				'--textTransform' => $args['mod'] . '.textTransform',
			];
		}
	}
	
	/**
	 * Add css for blog layout.
	 *
	 * Removed grid in new skin CSS so this should handle the grid.
	 *
	 * @return bool|void
	 * @since 3.0.0
	 */
	public function setup_blog_layout() {
		if ( ! neve_is_new_skin() ) {
			return false;
		}

		$this->_subscribers[':root'] = [
			'--postWidth' => [
				Dynamic_Selector::META_KEY           => 'neve_grid_layout',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => $this->grid_columns_default(),
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) {
					$blog_layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
					if ( ! in_array( $blog_layout, [ 'grid', 'covers' ], true ) ) {
						return sprintf( '%s:%s;', $css_prop, '100%' );
					}

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
		$is_advanced_on = Mods::get( Config::MODS_ADVANCED_LAYOUT_OPTIONS, neve_is_new_skin() );
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
		$this->_subscribers['body:not(.single):not(.archive):not(.blog):not(.search):not(.error404) .neve-main > .container .col, body.post-type-archive-course .neve-main > .container .col, body.post-type-archive-llms_membership .neve-main > .container .col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_OTHERS_CONTENT_WIDTH,
				Dynamic_Selector::META_DEFAULT     => $this->sidebar_layout_width_default( Config::MODS_OTHERS_CONTENT_WIDTH ),
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];
		$this->_subscribers['body:not(.single):not(.archive):not(.blog):not(.search):not(.error404) .nv-sidebar-wrap, body.post-type-archive-course .nv-sidebar-wrap, body.post-type-archive-llms_membership .nv-sidebar-wrap']                                     = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_OTHERS_CONTENT_WIDTH,
				Dynamic_Selector::META_DEFAULT     => $this->sidebar_layout_width_default( Config::MODS_OTHERS_CONTENT_WIDTH ),
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => 'minus_100',
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];
		// Archive content width.
		$this->_subscribers['.neve-main > .archive-container .nv-index-posts.col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEFAULT     => $this->sidebar_layout_width_default( Config::MODS_ARCHIVE_CONTENT_WIDTH ),
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];
		$this->_subscribers['.neve-main > .archive-container .nv-sidebar-wrap']    = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEFAULT     => $this->sidebar_layout_width_default( Config::MODS_ARCHIVE_CONTENT_WIDTH ),
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => 'minus_100',
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];
		// Single content width.
		list( $context, $allowed_context ) = $this->get_cpt_context( [ 'post' ] );
		$sidebar_content_width_meta        = $this->get_sidebar_content_width_meta( $context, $allowed_context );
		$sidebar_layout_width_default      = $this->sidebar_layout_width_default( $sidebar_content_width_meta );
		$this->_subscribers['.neve-main > .single-post-container .nv-single-post-wrap.col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => $sidebar_content_width_meta,
				Dynamic_Selector::META_DEFAULT     => $sidebar_layout_width_default,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];

		$this->_subscribers['.single-post-container .alignfull > [class*="__inner-container"], .single-post-container .alignwide > [class*="__inner-container"]']                                 = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY           => $sidebar_content_width_meta,
				Dynamic_Selector::META_DEFAULT       => $sidebar_layout_width_default,
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
				Dynamic_Selector::META_KEY         => $sidebar_content_width_meta,
				Dynamic_Selector::META_DEFAULT     => $sidebar_layout_width_default,
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => function ( $css_prop, $value, $meta, $device ) {
					return sprintf( 'max-width:calc(%s%% + %spx)', $value, Config::CONTENT_DEFAULT_PADDING / 2 );
				},
			],
		];

		$this->_subscribers['.neve-main > .single-post-container .nv-sidebar-wrap'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => $sidebar_content_width_meta,
				Dynamic_Selector::META_DEFAULT     => $sidebar_layout_width_default,
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
				Dynamic_Selector::META_DEFAULT     => $this->sidebar_layout_width_default( Config::MODS_SHOP_ARCHIVE_CONTENT_WIDTH ),
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];
		$this->_subscribers['.archive.woocommerce .neve-main > .shop-container .nv-sidebar-wrap'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SHOP_ARCHIVE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEFAULT     => $this->sidebar_layout_width_default( Config::MODS_SHOP_ARCHIVE_CONTENT_WIDTH ),
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => 'minus_100',
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];


		$this->_subscribers['.single-product .neve-main > .shop-container .nv-shop.col'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SHOP_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEFAULT     => $this->sidebar_layout_width_default( Config::MODS_SHOP_SINGLE_CONTENT_WIDTH ),
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_SUFFIX      => '%',
			],
		];

		$this->_subscribers['.single-product .alignfull > [class*="__inner-container"], .single-product .alignwide > [class*="__inner-container"]']                  = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY           => Config::MODS_SHOP_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEFAULT       => $this->sidebar_layout_width_default( Config::MODS_SHOP_SINGLE_CONTENT_WIDTH ),
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
				Dynamic_Selector::META_DEFAULT     => $this->sidebar_layout_width_default( Config::MODS_SHOP_SINGLE_CONTENT_WIDTH ),
				Dynamic_Selector::META_DEVICE_ONLY => Dynamic_Selector::DESKTOP,
				Dynamic_Selector::META_FILTER      => function ( $css_prop, $value, $meta, $device ) {
					return sprintf( 'max-width:calc(%s%% + %spx)', $value, Config::CONTENT_DEFAULT_PADDING / 2 );
				},
			],
		];
		$this->_subscribers['.single-product .neve-main > .shop-container .nv-sidebar-wrap'] = [
			Config::CSS_PROP_MAX_WIDTH => [
				Dynamic_Selector::META_KEY         => Config::MODS_SHOP_SINGLE_CONTENT_WIDTH,
				Dynamic_Selector::META_DEFAULT     => $this->sidebar_layout_width_default( Config::MODS_SHOP_SINGLE_CONTENT_WIDTH ),
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

		$border_width_default  = array_fill_keys( Config::$directional_keys, '2' );
		$border_radius_default = array_fill_keys( Config::$directional_keys, '3' );

		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => ':root',
			Dynamic_Selector::KEY_RULES    => [
				'--formFieldBorderWidth'   => [
					Dynamic_Selector::META_KEY     => Config::MODS_FORM_FIELDS_BORDER_WIDTH,
					Dynamic_Selector::META_SUFFIX  => 'px',
					Dynamic_Selector::META_DEFAULT => $border_width_default,
					'directional-prop'             => Config::CSS_PROP_BORDER_WIDTH,
				],
				'--formFieldBorderRadius'  => [
					Dynamic_Selector::META_KEY     => Config::MODS_FORM_FIELDS_BORDER_RADIUS,
					Dynamic_Selector::META_SUFFIX  => 'px',
					Dynamic_Selector::META_DEFAULT => $border_radius_default,
					'directional-prop'             => Config::CSS_PROP_BORDER_RADIUS,
				],
				'--formFieldBgColor'       => [
					Dynamic_Selector::META_KEY     => Config::MODS_FORM_FIELDS_BACKGROUND_COLOR,
					Dynamic_Selector::META_DEFAULT => 'var(--nv-site-bg)',
				],
				'--formFieldBorderColor'   => [
					Dynamic_Selector::META_KEY     => Config::MODS_FORM_FIELDS_BORDER_COLOR,
					Dynamic_Selector::META_DEFAULT => '#dddddd',
				],
				'--formFieldColor'         => [
					Dynamic_Selector::META_KEY     => Config::MODS_FORM_FIELDS_COLOR,
					Dynamic_Selector::META_DEFAULT => 'var(--nv-text-color)',
				],
				'--formFieldPadding'       => [
					Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_PADDING,
					Dynamic_Selector::META_DEFAULT       => Mods::get_alternative_mod_default( Config::MODS_FORM_FIELDS_PADDING ),
					Dynamic_Selector::META_SUFFIX        => 'px',
					Dynamic_Selector::META_IS_RESPONSIVE => false,
					'directional-prop'                   => Config::CSS_PROP_PADDING,
				],
				'--formFieldTextTransform' => [
					Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_TYPEFACE . '.textTransform',
					Dynamic_Selector::META_IS_RESPONSIVE => false,
				],
				'--formFieldFontSize'      => [
					Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_TYPEFACE . '.fontSize',
					Dynamic_Selector::META_SUFFIX        => 'px',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				'--formFieldLineHeight'    => [
					Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_TYPEFACE . '.lineHeight',
					Dynamic_Selector::META_SUFFIX        => '',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				'--formFieldLetterSpacing' => [
					Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_TYPEFACE . '.letterSpacing',
					Dynamic_Selector::META_SUFFIX        => 'px',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				'--formFieldFontWeight'    => [
					Dynamic_Selector::META_KEY => Config::MODS_FORM_FIELDS_TYPEFACE . '.fontWeight',
				],
				// Form Labels
				'--formLabelFontSize'      => [
					Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_LABELS_TYPEFACE . '.fontSize',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => 'px',
				],
				'--formLabelLineHeight'    => [
					Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_LABELS_TYPEFACE . '.lineHeight',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_SUFFIX        => '',
				],
				'--formLabelLetterSpacing' => [
					Dynamic_Selector::META_KEY           => Config::MODS_FORM_FIELDS_LABELS_TYPEFACE . '.letterSpacing',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				'--formLabelFontWeight'    => [
					Dynamic_Selector::META_KEY => Config::MODS_FORM_FIELDS_LABELS_TYPEFACE . '.fontWeight',
				],
				'--formLabelTextTransform' => [
					Dynamic_Selector::META_KEY => Config::MODS_FORM_FIELDS_LABELS_TYPEFACE . '.textTransform',
				],
			],
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

		$mod_key_secondary = Config::MODS_BUTTON_SECONDARY_STYLE;
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
		if ( ! neve_is_new_skin() ) {
			$this->setup_blog_meta_legacy();
			return;
		}

		list( $context, $allowed_context ) = $this->get_cpt_context();
		$archive_avatar_size_meta_key      = Config::MODS_ARCHIVE_POST_META_AUTHOR_AVATAR_SIZE;
		$single_avatar_size_meta_key       = Config::MODS_SINGLE_POST_META_AUTHOR_AVATAR_SIZE;
		if ( in_array( $context, $allowed_context, true ) && neve_is_new_skin() && is_singular( $context ) || is_post_type_archive( $context ) ) {
			$archive_avatar_size_meta_key = 'neve_' . $context . '_archive_author_avatar_size';
			$single_avatar_size_meta_key  = 'neve_single_' . $context . '_avatar_size';
		}

		$rules = [
			'--avatarSize' => [
				Dynamic_Selector::META_KEY           => $archive_avatar_size_meta_key,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
				Dynamic_Selector::META_DEFAULT       => '{ "mobile": 20, "tablet": 20, "desktop": 20 }',
			],
		];

		$rules_single = [
			'--avatarSize' => [
				Dynamic_Selector::META_KEY           => $single_avatar_size_meta_key,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
				Dynamic_Selector::META_DEFAULT       => Mods::get( 'neve_author_avatar_size', '{ "mobile": 20, "tablet": 20, "desktop": 20 }' ),
			],
		];

		$this->_subscribers[] = [
			'selectors' => '.nv-meta-list',
			'rules'     => $rules,
		];

		$this->_subscribers[] = [
			'selectors' => '.single .nv-meta-list',
			'rules'     => $rules_single,
		];
	}

	/**
	 * Add css for blog meta.
	 */
	public function setup_blog_meta_legacy() {

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
			add_filter(
				'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_HOVER,
				[
					$this,
					'add_form_buttons_hover',
				]
			);

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
		if ( ! neve_is_new_skin() ) {
			return;
		}

		$boxed_comments_rules = [
			'--padding' => [
				Dynamic_Selector::META_KEY           => Config::MODS_POST_COMMENTS_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => $this->padding_default(),
				'directional-prop'                   => Config::CSS_PROP_PADDING,
			],
			'--bgColor' => [
				Dynamic_Selector::META_KEY => Config::MODS_POST_COMMENTS_BACKGROUND_COLOR,
			],
			'--color'   => [
				Dynamic_Selector::META_KEY => Config::MODS_POST_COMMENTS_TEXT_COLOR,
			],
		];

		$this->_subscribers[] = [
			'selectors' => '.nv-is-boxed.nv-comments-wrap',
			'rules'     => $boxed_comments_rules,
		];

		$boxed_comment_form_rules = [
			'--padding' => [
				Dynamic_Selector::META_KEY           => Config::MODS_POST_COMMENTS_FORM_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => $this->padding_default(),
				'directional-prop'                   => Config::CSS_PROP_PADDING,
			],
			'--bgColor' => [
				Dynamic_Selector::META_KEY => Config::MODS_POST_COMMENTS_FORM_BACKGROUND_COLOR,
			],
			'--color'   => [
				Dynamic_Selector::META_KEY => Config::MODS_POST_COMMENTS_FORM_TEXT_COLOR,
			],
		];

		$this->_subscribers[] = [
			'selectors' => '.nv-is-boxed.comment-respond',
			'rules'     => $boxed_comment_form_rules,
		];

		$spacing_rules = [
			'--spacing' => [
				Dynamic_Selector::META_KEY           => Config::MODS_SINGLE_POST_ELEMENTS_SPACING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			],
		];

		$this->_subscribers[] = [
			'selectors' => '.nv-single-post-wrap',
			'rules'     => $spacing_rules,
		];
	}

	/**
	 * Check that all mods passed can be used for the provided context.
	 * We use this to check if we can register subscribers for the provided mods.
	 *
	 * @since 3.1.0
	 *
	 * @param string[] $mods               A list of mods.
	 * @param string   $context            A context for the mods.
	 * @param array    $allowed_context    A list of allowed contexts to be passed on.
	 *
	 * @return int
	 */
	private function can_use_mods( $mods, $context, $allowed_context ) {
		return array_reduce(
			$mods,
			function ( $carry, $item ) use ( $context, $allowed_context ) {
				if ( empty( $this->get_cover_meta( $context, $item, $allowed_context ) ) ) {
					return 0;
				}
				return $carry;
			},
			1
		);
	}

	/**
	 * Add css for post/page header.
	 */
	private function setup_header_style() {

		list( $context, $allowed_context ) = $this->get_cpt_context();

		$justify_map = [
			'left'   => 'flex-start',
			'center' => 'center',
			'right'  => 'flex-end',
		];

		$can_use_cover_rules = $this->can_use_mods(
			[
				Config::MODS_COVER_HEIGHT,
				Config::MODS_COVER_PADDING,
				Config::MODS_COVER_TITLE_ALIGNMENT,
				Config::MODS_COVER_TITLE_POSITION,
			],
			$context,
			$allowed_context
		);
		if ( $can_use_cover_rules ) {
			$cover_rules          = [
				'--height'    => [
					Dynamic_Selector::META_KEY           => $this->get_cover_meta( $context, Config::MODS_COVER_HEIGHT, $allowed_context ),
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_AS_JSON       => true,
					Dynamic_Selector::META_SUFFIX        => 'responsive_suffix',
					Dynamic_Selector::META_DEFAULT       => '{ "mobile": "250", "tablet": "320", "desktop": "400" }',
				],
				'--padding'   => [
					Dynamic_Selector::META_KEY           => $this->get_cover_meta( $context, Config::MODS_COVER_PADDING, $allowed_context ),
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_DEFAULT       => $this->padding_default( 'cover' ),
					'directional-prop'                   => Config::CSS_PROP_PADDING,
				],
				'--justify'   => [
					Dynamic_Selector::META_KEY           => $this->get_cover_meta( $context, Config::MODS_COVER_TITLE_ALIGNMENT, $allowed_context ),
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_DEFAULT       => self::post_title_alignment(),
					Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) use ( $justify_map ) {
						return sprintf( '%s: %s;', $css_prop, $justify_map[ $value ] );
					},
				],
				'--textAlign' => [
					Dynamic_Selector::META_KEY           => $this->get_cover_meta( $context, Config::MODS_COVER_TITLE_ALIGNMENT, $allowed_context ),
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_DEFAULT       => self::post_title_alignment(),
				],
				'--vAlign'    => [
					Dynamic_Selector::META_KEY           => $this->get_cover_meta( $context, Config::MODS_COVER_TITLE_POSITION, $allowed_context ),
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_DEFAULT       => [
						'mobile'  => 'center',
						'tablet'  => 'center',
						'desktop' => 'center',
					],
				],
			];
			$this->_subscribers[] = [
				'selectors' => '.nv-post-cover',
				'rules'     => $cover_rules,
			];
		}

		$can_use_title_rules = $this->can_use_mods(
			[ Config::MODS_COVER_TEXT_COLOR, Config::MODS_COVER_TITLE_ALIGNMENT ],
			$context,
			$allowed_context
		);
		if ( $can_use_title_rules ) {
			$title_rules          = [
				'--color'     => [
					Dynamic_Selector::META_KEY => $this->get_cover_meta( $context, Config::MODS_COVER_TEXT_COLOR, $allowed_context ),
				],
				'--textAlign' => [
					Dynamic_Selector::META_KEY           => $this->get_cover_meta( $context, Config::MODS_COVER_TITLE_ALIGNMENT, $allowed_context ),
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_DEFAULT       => self::post_title_alignment(),
				],
			];
			$this->_subscribers[] = [
				'selectors' => '.nv-post-cover .nv-title-meta-wrap, .nv-page-title-wrap, .entry-header',
				'rules'     => $title_rules,
			];
		}

		$can_use_boxed_title_rules = $this->can_use_mods(
			[ Config::MODS_COVER_BOXED_TITLE_PADDING, Config::MODS_COVER_BOXED_TITLE_BACKGROUND ],
			$context,
			$allowed_context
		);
		if ( $can_use_boxed_title_rules ) {
			$boxed_title_rules    = [
				'--padding' => [
					Dynamic_Selector::META_KEY           => $this->get_cover_meta( $context, Config::MODS_COVER_BOXED_TITLE_PADDING, $allowed_context ),
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_DEFAULT       => $this->padding_default( 'cover' ),
					'directional-prop'                   => Config::CSS_PROP_PADDING,
				],
				'--bgColor' => [
					Dynamic_Selector::META_KEY     => $this->get_cover_meta( $context, Config::MODS_COVER_BOXED_TITLE_BACKGROUND, $allowed_context ),
					Dynamic_Selector::META_DEFAULT => 'var(--nv-dark-bg)',
				],
			];
			$this->_subscribers[] = [
				'selectors' => '.nv-is-boxed.nv-title-meta-wrap',
				'rules'     => $boxed_title_rules,
			];
		}

		$can_use_overlay_rules = $this->can_use_mods(
			[ Config::MODS_COVER_BACKGROUND_COLOR, Config::MODS_COVER_OVERLAY_OPACITY, Config::MODS_COVER_BLEND_MODE ],
			$context,
			$allowed_context
		);
		if ( $can_use_overlay_rules ) {
			$overlay_rules        = [
				'--bgColor'   => [
					Dynamic_Selector::META_KEY => $this->get_cover_meta( $context, Config::MODS_COVER_BACKGROUND_COLOR, $allowed_context ),
				],
				'--opacity'   => [
					Dynamic_Selector::META_KEY     => $this->get_cover_meta( $context, Config::MODS_COVER_OVERLAY_OPACITY, $allowed_context ),
					Dynamic_Selector::META_DEFAULT => 50,
				],
				'--blendMode' => [
					Dynamic_Selector::META_KEY     => $this->get_cover_meta( $context, Config::MODS_COVER_BLEND_MODE, $allowed_context ),
					Dynamic_Selector::META_DEFAULT => 'normal',
				],
			];
			$this->_subscribers[] = [
				'selectors' => '.nv-overlay',
				'rules'     => $overlay_rules,
			];
		}

	}

	/**
	 * Setup legacy blog typography.
	 */
	private function setup_legacy_blog_typography() {
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
}
