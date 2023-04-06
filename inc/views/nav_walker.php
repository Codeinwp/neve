<?php
/**
 * Custom navwalker.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      24/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

use HFG\Core\Components\Nav;
use Neve\Core\Dynamic_Css;

/**
 * Class Nav_Walker
 *
 * @package Neve\Views
 */
class Nav_Walker extends \Walker_Nav_Menu {
	/**
	 * Flag to check if the mega menu CSS was already enqueued.
	 *
	 * @var bool
	 */
	public static $mega_menu_enqueued = false;

	/**
	 * Flag used to add inline sidebar accessibility styles.
	 *
	 * @var bool
	 */
	public static $add_sidebar_accessibility_style = false;

	/**
	 * Flag used to add inline mobile submenu button styles.
	 *
	 * @var bool
	 */
	public static $add_mobile_caret_button_style = false;

	/**
	 * Flag used to add inline mobile dropdown js.
	 *
	 * @var bool
	 */
	public static $dropdowns_inline_js_enqueued = false;

	/**
	 * Flag to check if the accessibility JS was already enqueued.
	 *
	 * @var bool
	 */
	public static $accessibility_menu_enqueued = false;

	/**
	 * Nav_Walker constructor.
	 */
	public function __construct() {
		add_filter( 'nav_menu_item_args', array( $this, 'tweak_mm_heading' ), 10, 3 );
		add_filter( 'nav_menu_item_title', array( $this, 'add_caret' ), 10, 4 );

		add_action( 'neve_after_header_wrapper_hook', [ $this, 'inline_style_for_sidebar' ], 9 );
	}

	/**
	 * Print inline styles if sidebar is used.
	 */
	public function inline_style_for_sidebar() {
		if ( self::$add_sidebar_accessibility_style ) {
			return;
		}
		echo '<style>' . $this->get_sidebar_and_accessibility_style() . '</style>'; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		self::$add_sidebar_accessibility_style = true;
	}

	/**
	 * Print inline styles if mobile submenu is used.
	 */
	public function inline_style_for_caret() {
		if ( self::$add_mobile_caret_button_style ) {
			return;
		}
		echo '<style>' . $this->get_mobile_caret_style() . '</style>'; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		self::$add_mobile_caret_button_style = true;
	}

	/**
	 * Add the caret inside the menu item link.
	 *
	 * @param string    $title menu item title.
	 * @param \WP_Post  $item menu item object.
	 * @param \stdClass $args menu args.
	 * @param int       $depth the menu item depth.
	 *
	 * @return string
	 */
	public function add_caret( $title, $item, $args, $depth ) {
		if ( neve_is_amp() ) {
			return $title;
		}

		if ( strpos( $title, 'class="caret"' ) ) {
			return $title;
		}

		if ( strpos( $args->menu_id, 'nv-primary-navigation' ) === false ) {
			return $title;
		}

		if ( ! isset( $item->classes ) || ! is_array( $item->classes ) ) {
			return $title;
		}

		$args->before = '';
		$args->after  = '';

		$default_caret_settings = [
			'side'      => is_rtl() ? 'left' : 'right',
			'icon_type' => 'icon',
			'icon'      => '<svg aria-label="' . esc_attr__( 'Dropdown', 'neve' ) . '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>',
		];

		$component_id    = $args->component_id ?? '';
		$caret_settings  = apply_filters( 'neve_submenu_icon_settings', $default_caret_settings, $component_id );
		$caret_pictogram = $this->get_caret_pictogram( $caret_settings );


		$is_sidebar_item = strpos( $args->menu_id, 'sidebar' ) !== false;
		// We add tabindex 0 in order for the caret to  be focusable.
		$expanded = 'tabindex="0"';

		// Register sidebar inline styles
		if ( $item->url === '#' && ! self::$dropdowns_inline_js_enqueued ) { // @phpstan-ignore-line url is defined on WP_Post object that is used as Menu Item.
			$this->enqueue_hash_url_dropdowns_inline_js();
		}

		$args->before = '<div class="wrap">';
		$args->after  = '</div>';

		if ( in_array( 'menu-item-has-children', $item->classes, true ) ) {
			add_action( 'neve_after_header_wrapper_hook', [ $this, 'inline_style_for_caret' ], 9 );
			if ( strpos( $title, 'menu-item-title-wrap' ) === false ) {
				$title = '<span class="menu-item-title-wrap dd-title">' . $title . '</span>';
			}

			$caret_wrap_css = $caret_settings['side'] === 'right' ? 'margin-left:5px;' : 'margin-right:5px;';

			if ( $is_sidebar_item ) {
				$expand_dropdowns = apply_filters( 'neve_first_level_expanded', false );
				$additional_class = $expand_dropdowns && $depth === 0 ? 'dropdown-open' : '';

				$caret  = '<button ' . $expanded . ' type="button" class="caret-wrap navbar-toggle ' . esc_attr( (string) $item->menu_order ) . ' ' . esc_attr( $additional_class ) . '" style="' . esc_attr( $caret_wrap_css ) . '">';
				$caret .= $caret_pictogram;
				$caret .= '</button>';

				if ( $caret_settings['side'] === 'left' ) {
					$args->before = $args->before . $caret;
				} else {
					$args->after = $caret . $args->after;
				}
			} else {

				$caret  = '<div role="button" aria-pressed="false" aria-label="' . __( 'Open Submenu', 'neve' ) . '" ' . $expanded . ' class="caret-wrap caret ' . $item->menu_order . '" style="' . esc_attr( $caret_wrap_css ) . '">';
				$caret .= $caret_pictogram;
				$caret .= '</div>';

				if ( $caret_settings['side'] === 'left' ) {
					$args->before = $args->before . $caret;
				} else {
					$args->after = $caret . $args->after;
				}
			}
		}



		return $title;
	}

	/**
	 * Get submenu icon.
	 *
	 * @param array $settings Submenu icon settings.
	 *
	 * @return string
	 */
	private function get_caret_pictogram( $settings ) {
		$pictogram = $settings['icon'];

		if ( ! isset( $settings['icon_type'] ) ) {
			return '<span class="caret">' . $pictogram . '</span>';
		}

		if ( $settings['icon_type'] === 'image' && array_key_exists( 'image', $settings ) && ! empty( $settings['image'] ) ) {
			$pictogram = wp_get_attachment_image( $settings['image'], 'thumbnail', true );
		}

		return '<span class="caret">' . $pictogram . '</span>';
	}

	/**
	 * Get mobile caret inline styles
	 */
	public function get_mobile_caret_style() {
		/* Mobile button caret css. */
		$mobile_button_caret_css  = '.header-menu-sidebar .nav-ul li .wrap { padding: 0 4px; }';
		$mobile_button_caret_css .= '.header-menu-sidebar .nav-ul li .wrap a { flex-grow: 1; display: flex; }';
		$mobile_button_caret_css .= '.header-menu-sidebar .nav-ul li .wrap a .dd-title { width: var(--wrapdropdownwidth); }';
		$mobile_button_caret_css .= '.header-menu-sidebar .nav-ul li .wrap button { border: 0; z-index: 1; background: 0; }';

		return Dynamic_Css::minify_css( $mobile_button_caret_css );
	}

	/**
	 * Get sidebar inline styles and accessibility
	 */
	public function get_sidebar_and_accessibility_style() {
		/* Showing Menu Sidebar animation css. */
		$sidebar_animation_css  = '.is-menu-sidebar .header-menu-sidebar { visibility: visible; }';
		$sidebar_animation_css .= '.is-menu-sidebar.menu_sidebar_slide_left .header-menu-sidebar { transform: translate3d(0, 0, 0); left: 0; }';
		$sidebar_animation_css .= '.is-menu-sidebar.menu_sidebar_slide_right .header-menu-sidebar { transform: translate3d(0, 0, 0); right: 0; }';
		$sidebar_animation_css .= '.is-menu-sidebar.menu_sidebar_pull_right .header-menu-sidebar, .is-menu-sidebar.menu_sidebar_pull_left .header-menu-sidebar { transform: translateX(0); }';
		$sidebar_animation_css .= '.is-menu-sidebar.menu_sidebar_dropdown .header-menu-sidebar { height: auto; }';
		$sidebar_animation_css .= '.is-menu-sidebar.menu_sidebar_dropdown .header-menu-sidebar-inner { max-height: 400px; padding: 20px 0; }';
		$sidebar_animation_css .= '.is-menu-sidebar.menu_sidebar_full_canvas .header-menu-sidebar { opacity: 1; }';
		$sidebar_animation_css .= '.header-menu-sidebar .menu-item-nav-search { pointer-events: none; }';
		$sidebar_animation_css .= '.header-menu-sidebar .menu-item-nav-search .is-menu-sidebar & { pointer-events: unset; }';
		/* Accessibility css. */
		$accessibility_caret_css  = '.nav-ul li:focus-within .wrap.active + .sub-menu { opacity: 1; visibility: visible; }';
		$accessibility_caret_css .= '.nav-ul li.neve-mega-menu:focus-within .wrap.active + .sub-menu { display: grid; }';
		$accessibility_caret_css .= '.nav-ul li > .wrap { display: flex; align-items: center; position: relative; padding: 0 4px; }';
		$accessibility_caret_css .= '.nav-ul:not(.menu-mobile):not(.neve-mega-menu) > li > .wrap > a { padding-top: 1px }';

		return Dynamic_Css::minify_css( $sidebar_animation_css . $accessibility_caret_css );
	}

	/**
	 * Start_el
	 *
	 * @param string    $output Output.
	 * @param \WP_Post  $item Item.
	 * @param int       $depth Depth.
	 * @param \stdClass $args Args.
	 * @param int       $id id.
	 * @since 3.0.0
	 *
	 * @see   Walker::start_el()
	 */
	public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
		if ( ! is_object( $args ) ) {
			return;
		}

		// Only enqueue accessibility js listeners if menu uses sub-menus.
		if ( ! self::$accessibility_menu_enqueued && $args->walker->has_children ) {
			$this->enqueue_accessibility_menu_js();
		}

		if ( ! self::$mega_menu_enqueued && isset( $item->classes ) && in_array( 'neve-mega-menu', $item->classes ) ) {
			$this->enqueue_mega_menu_style();
		}

		if ( isset( $item->title ) && $item->title === 'divider' ) {
			$classes = [ 'neve-mm-divider' ];

			if ( isset( $item->classes ) ) {
				$classes = array_merge( $classes, $item->classes );
			}

			$output .= '<li role="presentation" class="' . esc_attr( join( ' ', $classes ) ) . '">';

			return;
		}

		if ( isset( $item->classes ) && in_array( 'neve-mm-col', $item->classes, true ) ) {
			$output .= '<li class="' . esc_attr( join( ' ', $item->classes ) ) . '">';

			return;
		}

		parent::start_el( $output, $item, $depth, $args, $id );
	}

	/**
	 * Ends the element output, if needed.
	 *
	 * @param string    $output the end el string.
	 * @param \WP_Post  $item item.
	 * @param int       $depth item depth.
	 * @param \stdClass $args item args.
	 */
	public function end_el( &$output, $item, $depth = 0, $args = null ) {
		if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
			$t = '';
			$n = '';
		} else {
			$t = "\t";
			$n = "\n";
		}
		if ( $depth >= 1 ) {
			if ( isset( $item->description ) && ! empty( $item->description ) ) {
				if ( ! self::$mega_menu_enqueued ) {
					$this->enqueue_mega_menu_style();
				}
				$output .= '<div class="neve-mm-description">' . esc_html( $item->description ) . '</div>';
			}
		}
		$output .= "</li>{$n}";
	}


	/**
	 * Tweak the mega menu heading markup.
	 *
	 * @param array    $args the menu item args.
	 * @param \WP_Post $item the menu item.
	 * @param int      $depth the depth of the menu item.
	 *
	 * @return mixed
	 */
	public function tweak_mm_heading( $args, $item, $depth ) {
		if ( ! isset( $item->classes ) ) {
			return $args;
		}

		if ( in_array( 'neve-mm-heading', $item->classes, true ) ) {
			if ( $item->url === '#' ) { // @phpstan-ignore-line url is defined on WP_Post object that is used as Menu Item.
				add_filter(
					'walker_nav_menu_start_el',
					function ( $item_output, $nav_item, $depth, $args ) use ( $item ) {
						if ( $nav_item !== $item ) {
							return $item_output;
						}

						$item_output = '';

						$item_output .= $args->before;
						$item_output .= '<span>';
						$item_output .= $args->link_before . $nav_item->title . $args->link_after; // @phpstan-ignore-line title is defined on WP_Post object that is used as Menu Item.
						$item_output .= '</span>';
						$item_output .= $args->after;

						return $item_output;
					},
					10,
					4
				);
			}
		}

		return $args;
	}

	/**
	 * Display all pages when there is no menu assigned to the primary location
	 */
	public static function fallback() {
		$fallback_args = array(
			'depth'      => - 1,
			'menu_id'    => 'nv-primary-navigation-' . \HFG\current_row( \HFG\Core\Builder\Header::BUILDER_NAME ),
			'menu_class' => 'primary-menu-ul nav-ul',
			'container'  => 'ul',
			'before'     => '',
			'echo'       => false,
			'after'      => '',
		);

		return wp_page_menu( $fallback_args );
	}

	/**
	 * Enqueue menu accessibility script
	 */
	public function enqueue_accessibility_menu_js() {
		if ( self::$accessibility_menu_enqueued ) {
			return;
		}

		$script = <<<'JS'
var menuCarets = document.querySelectorAll(
		'.nav-ul li > .wrap > .caret'
	);
menuCarets.forEach( function (caretElem) {
	caretElem.addEventListener( "keydown", (event) => {
		if ( event.keyCode === 13 ) {
			event.target.parentElement.classList.toggle('active');
		}
	});
	caretElem.parentElement.parentElement.addEventListener( "focusout", (event) => {
		// If focus is still in the element, do nothing
		if ( caretElem.parentElement.parentElement.contains(event.relatedTarget) ) {
			return;
		};
		caretElem.parentElement.classList.remove('active');
	});
} );
JS;

		$script_min_js = <<<'JSMIN'
var menuCarets=document.querySelectorAll(".nav-ul li > .wrap > .caret");menuCarets.forEach((function(e){e.addEventListener("keydown",(e=>{13===e.keyCode&&e.target.parentElement.classList.toggle("active")})),e.parentElement.parentElement.addEventListener("focusout",(t=>{e.parentElement.parentElement.contains(t.relatedTarget)||e.parentElement.classList.remove("active")}))}));
JSMIN;


		wp_add_inline_script( 'neve-script', ( NEVE_DEBUG ) ? $script : $script_min_js );
		self::$accessibility_menu_enqueued = true;
	}
	/**
	 * Enqueue mega menu style
	 */
	public function enqueue_mega_menu_style() {
		if ( self::$mega_menu_enqueued ) {
			return;
		}

		wp_enqueue_style( 'neve-mega-menu' );
		self::$mega_menu_enqueued = true;
	}

	/**
	 * Enqueue JS for dropdowns with hash link.
	 */
	public function enqueue_hash_url_dropdowns_inline_js() {
		if ( self::$dropdowns_inline_js_enqueued ) {
			return;
		}

		// Fix for MegaMenu alignment
		$script = <<<'JS'
function initNoLinkDD() {
    var noLinkDDs = document.querySelectorAll(
		'.header-menu-sidebar-inner .menu-item-has-children a[href="#"]'
	);

    if( noLinkDDs.length < 1 ) {
        return;
	}

    noLinkDDs.forEach( function (noLinkDD) {
        var dropdownButton = noLinkDD.parentElement.querySelector('button');
		noLinkDD.addEventListener('click', function (e) {
			e.preventDefault();
            dropdownButton.click();
		});
	});
}
window.addEventListener('DOMContentLoaded', initNoLinkDD);
JS;
		wp_add_inline_script( 'neve-script', $script );
		self::$dropdowns_inline_js_enqueued = true;
	}
}
