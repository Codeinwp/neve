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
	 * Nav_Walker constructor.
	 */
	public function __construct() {
		add_filter( 'nav_menu_item_args', array( $this, 'tweak_mm_heading' ), 10, 3 );
		add_filter( 'nav_menu_item_title', array( $this, 'add_caret' ), 10, 4 );
	}

	/**
	 * Add the caret inside the menu item link.
	 *
	 * @param string $title menu item title.
	 * @param object $item menu item object.
	 * @param object $args menu args.
	 * @param int    $depth the menu item depth.
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

		if ( in_array( 'menu-item-has-children', $item->classes, true ) ) {
			$title = '<span class="menu-item-title-wrap">' . $title . '</span>';

			$title .= '<div class="caret-wrap ' . $item->menu_order . '" tabindex="0">';
			$title .= '<span class="caret"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></span>';
			$title .= '</div>';
		}

		return $title;
	}

	/**
	 * Start_el
	 *
	 * @param string   $output Output.
	 * @param \WP_Post $item Item.
	 * @param int      $depth Depth.
	 * @param array    $args Args.
	 * @param int      $id id.
	 * @since 3.0.0
	 *
	 * @see   Walker::start_el()
	 */
	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		if ( ! is_object( $args ) ) {
			return;
		}

		if ( ! self::$mega_menu_enqueued && isset( $item->classes ) && in_array( 'neve-mega-menu', $item->classes ) ) {
			$this->enqueue_mega_menu_style();
		}

		if ( isset( $item->title ) && $item->title === 'divider' ) {
			$output .= '<li role="presentation" class="neve-mm-divider">';

			return;
		}

		if ( isset( $item->classes ) && in_array( 'neve-mm-col', $item->classes, true ) ) {
			$output .= '<li class="neve-mm-col">';

			return;
		}

		parent::start_el( $output, $item, $depth, $args, $id );
	}

	/**
	 * Ends the element output, if needed.
	 *
	 * @param string   $output the end el string.
	 * @param \WP_Post $item item.
	 * @param int      $depth item depth.
	 * @param array    $args item args.
	 */
	public function end_el( &$output, $item, $depth = 0, $args = array() ) {
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
				$output .= '<span class="neve-mm-description">' . esc_html( $item->description ) . '</span>';
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
			add_filter(
				'nav_menu_css_class',
				function ( $classes, $nav_item, $args, $depth ) use ( $item ) {
					if ( $nav_item !== $item ) {
						return $classes;
					}

					return array( 'neve-mm-heading' );
				},
				10,
				4
			);

			if ( $item->url === '#' ) {
				add_filter(
					'walker_nav_menu_start_el',
					function ( $item_output, $nav_item, $depth, $args ) use ( $item ) {
						if ( $nav_item !== $item ) {
							return $item_output;
						}

						$item_output = '';

						$item_output .= $args->before;
						$item_output .= '<span>';
						$item_output .= $args->link_before . $nav_item->title . $args->link_after;
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
			'depth'      => -1,
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
	 * Enqueue mega menu style
	 */
	public function enqueue_mega_menu_style() {
		if ( self::$mega_menu_enqueued ) {
			return;
		}
		wp_register_style( 'neve-mega-menu', get_template_directory_uri() . '/assets/css/mega-menu' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
		wp_style_add_data( 'neve-mega-menu', 'rtl', 'replace' );
		wp_style_add_data( 'neve-mega-menu', 'suffix', '.min' );
		wp_enqueue_style( 'neve-mega-menu' );

		$style = <<<'CSS'
.left .neve-mega-menu > .sub-menu {
	left: 0;
	right: auto;
	transform: none;
}
.center .neve-mega-menu > .sub-menu {
	transform: translateX(50%);
}
.right .neve-mega-menu > .sub-menu {
	left: auto;
	right: 0;
	transform: none;
}
CSS;
		wp_add_inline_style( 'neve-mega-menu', $style );

		// Fix for MegaMenu alignment
		$script_min = <<<'JSMIN'
function megaMenuCalc(){var e=window.innerWidth,t=document.querySelectorAll(".neve-mega-menu > .sub-menu"),a=NeveProperties.isRTL;t.forEach(function(t){var n=t.getBoundingClientRect(),i=t.parentElement.getBoundingClientRect(),l=t.parentNode.parentNode.classList.contains("sub-menu");t.style.transform="translateX(0)",t.style.left=a?"auto":"0",t.style.right=a?"0":"auto";var u=a?i.left<e/2:i.left>e/2;u&&(t.style.left=a?"0":"auto",t.style.right=a?"auto":"0"),n.left<0&&(t.style.left=l?"100%":"0",t.style.right="auto"),i.left+n.width>=e&&(t.style.left="auto",t.style.right=l?"100%":"0"),i.left-n.width<0&&i.left+n.width>=e&&(t.style.left="auto",t.style.right="calc( 100% - "+(e-i.right+i.width/2)+"px )")})}var megaResizeTimeout;window.addEventListener("resize",function(){clearTimeout(megaResizeTimeout),megaResizeTimeout=setTimeout(megaMenuCalc,500)}),document.addEventListener("DOMContentLoaded",function(e){megaMenuCalc()}),window.addEventListener("load",function(){document.addEventListener("header_builder_panel_changed",function(e){return"hfg_header_layout_partial"===e.detail.partial_id?(megaMenuCalc(),!1):"primary-menu_partial"===e.detail.partial_id?(megaMenuCalc(),!1):void 0})});
JSMIN;

		$script = <<<'JS'
function megaMenuCalcEvent() {
    console.log('Event triggered');
	var megaMenuDowns = document.querySelectorAll(
		'.neve-mega-menu > .sub-menu'
	);
	megaMenuDowns.forEach( function (dropDown) {
	    var isRTL = NeveProperties.isRTL === "1";
	    var windowWidth = window.innerWidth;
		dropDown.style.left = '0';
		dropDown.style.right = '0';
		dropDown.style.transform = 'none';

		var bounding = dropDown.getBoundingClientRect();
		var percentage = Math.round( Math.abs(bounding.left) / bounding.width * 100 );
		if ( percentage > 100 ) {
			var tmp = percentage - 100;
			percentage = 100 - tmp;
		}
		if (bounding.left < 0) {
			dropDown.style.transform = `translateX(${percentage}%)`;
		}
		if (bounding.left + bounding.width >= windowWidth) {
		    percentage = Math.round( Math.abs(bounding.left + bounding.width - windowWidth) / bounding.width * 100 );
		    percentage = percentage * -1;
			dropDown.style.transform = `translateX(${percentage}%)`;
		}
	});
}
var menuCalcEvent = new Event('menuCalc');
window.addEventListener('menuCalc', function (e) {
	megaMenuCalcEvent();
}, false);
JS;
		wp_add_inline_script( 'neve-script', $script );
		self::$mega_menu_enqueued = true;
	}
}
