/* jshint esversion: 6 */
/* global jQuery, CustomEvent */
/* global  neveShopSlider */
import { tns } from 'tiny-slider/src/tiny-slider';

(function ($) {
	/**
	 * Init shop.
	 */
	function initShop() {
		const $body = $('body');
		if ($body.hasClass('woocommerce')) {
			handleShopSidebar();
		}

		const countExclusive = $('.exclusive-products li.product').length;

		if ($body.hasClass('nv-exclusive') && countExclusive > 4) {
			handleExclusiveSlider();
		}

		if (
			'1' !== neveShopSlider.isSparkActive &&
			$body.hasClass('single-product')
		) {
			handleGallerySlider();
		}
	}

	/**
	 * Add prev and next
	 *
	 * @param {Node} targetNode
	 * @param {Node} slider
	 * @param {string} vertical
	 */
	function addNextPrev(targetNode, slider, vertical = false) {
		const $next = $('<span/>')
			.addClass('next dashicons')
			.addClass(
				'dashicons-arrow-' + (vertical ? 'down' : 'right') + '-alt2'
			);
		const $prev = $('<span/>')
			.addClass('prev dashicons')
			.addClass(
				'dashicons-arrow-' + (vertical ? 'up' : 'left') + '-alt2'
			);

		$prev.on('click', () => slider.goTo('prev'));

		$next.on('click', () => slider.goTo('next'));

		const $target = $(targetNode);
		$prev.insertBefore($target);
		$next.insertAfter($target);
	}

	/**
	 * Handle the shop sidebar.
	 */
	function handleShopSidebar() {
		const $sidebar = $('.shop-sidebar');
		if (0 === $sidebar.length) {
			return;
		}
		const $html = $('html');
		const $toggles = $('.nv-sidebar-toggle');
		$toggles.each(function () {
			$(this).on('click', function (e) {
				e.preventDefault();
				$sidebar.toggleClass('sidebar-open');
				$html.toggleClass('menu-openend');
			});
		});
	}

	/**
	 * Handle Exclusive Products Slider
	 */
	function handleExclusiveSlider() {
		const $items = $('ul.exclusive-products');

		if (0 === $items.length) return;

		const responsive = {
			0: { items: 2, gutter: 21 },
			768: { items: 4, gutter: 27 },
			1200: { items: 4, gutter: 30 },
		};

		const slider = tns({
			container: 'ul.exclusive-products',
			slideBy: 1,
			arrowKeys: true,
			loop: true,
			autoplay: true,
			items: 4,
			edgePadding: 0,
			autoplayButtonOutput: false,
			autoplayHoverPause: true,
			speed: 1000,
			autoplayTimeout: 3000,
			autoplayButton: false,
			controls: false,
			navPosition: 'bottom',
			navContainer: '.dots-nav',
			navAsThumbnails: true,
			responsive,
		});

		// [If Sparks Variation Swatches is enabled and ] Initialize Sparks Variation Swatches for cloned products.
		if ($('body').hasClass('sparks-vs-shop-attribute')) {
			slider.events.on('transitionEnd', () => {
				document.dispatchEvent(
					new CustomEvent('sparksVSNeedsInit', {
						detail: { container: '.products.exclusive' },
					})
				);
			});
		}
	}

	/**
	 * Handle Gallery Image Slider
	 */
	function handleGallerySlider() {
		const $galleryNav = $('ol.flex-control-nav');

		if (0 === $galleryNav.length) return;

		const isDesktop = window.innerWidth >= 992;

		const slider = tns({
			container: 'ol.flex-control-nav',
			items: 4,
			axis: isDesktop ? 'vertical' : 'horizontal',
			slideBy: 'page',
			rewind: true,
			loop: false,
			nav: false,
			controls: false,
			mouseDrag: true,
		});

		addNextPrev(
			$('.woocommerce-product-gallery .tns-inner')[0],
			slider,
			isDesktop
		);
	}

	/**
	 * Run JS on load.
	 */
	$(function () {
		initShop();
	});
})(jQuery);
