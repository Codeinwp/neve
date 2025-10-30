/* jshint esversion: 6 */
/* global CustomEvent */
import { tns } from 'tiny-slider/src/tiny-slider';

/**
 * Init shop.
 */
function initShop() {
	if (document.body.classList.contains('woocommerce')) {
		handleShopSidebar();
	}

	const countExclusive = document.querySelectorAll(
		'.exclusive-products li.product'
	).length;

	if (
		document.body.classList.contains('nv-exclusive') &&
		countExclusive > 4
	) {
		handleExclusiveSlider();
	}

	if (
		document.body.classList.contains('single-product') &&
		!document.body.classList.contains('sp-slider-gallery')
	) {
		handleGallerySlider();
	}
}

const svgs = {
	vertical: {
		prev: '<svg width="30px" height="25px" viewBox="0 0 50 80" xml:space="preserve" style="transform: rotate(90deg)"><polyline fill="none" stroke="currentColor" stroke-width="7" points="25,76 10,38 25,0"/></svg>',
		next: '<svg width="30px" height="25px" viewBox="0 0 50 80" xml:space="preserve" style="transform: rotate(90deg)"><polyline fill="none" stroke="currentColor" stroke-width="7" points="25,0 40,38 25,75"/></svg>',
	},
	horizontal: {
		prev: '<svg width="25px" height="30px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="currentColor" stroke-width="7" points="25,76 10,38 25,0"/></svg>',
		next: '<svg width="25px" height="30px" viewBox="0 0 50 80" xml:space="preserve"><polyline fill="none" stroke="currentColor" stroke-width="7" points="25,0 40,38 25,75"/></svg>',
	},
};

/**
 * Add prev and next
 *
 * @param {Node} targetNode
 * @param {Node} slider
 * @param {string} vertical
 */
function addNextPrev(targetNode, slider, vertical = false) {
	const next = document.createElement('span');
	const prev = document.createElement('span');

	next.classList.add('neve-slider-control', 'next');
	prev.classList.add('neve-slider-control', 'prev');

	prev.innerHTML = vertical ? svgs.vertical.prev : svgs.horizontal.prev;
	next.innerHTML = vertical ? svgs.vertical.next : svgs.horizontal.next;

	prev.addEventListener('click', function () {
		slider.goTo('prev');
	});

	next.addEventListener('click', function () {
		slider.goTo('next');
	});

	targetNode.parentNode.insertBefore(prev, targetNode);
	targetNode.parentNode.appendChild(next);
}

/**
 * Handle the shop sidebar.
 */
function handleShopSidebar() {
	const sidebar = document.querySelector('.shop-sidebar');
	if (sidebar === null) {
		return;
	}
	const html = document.querySelector('html');
	const toggles = document.querySelectorAll('.nv-sidebar-toggle') || [];
	toggles.forEach((toggle) => {
		toggle.addEventListener('click', function (e) {
			e.preventDefault();
			sidebar.classList.toggle('sidebar-open');
			html.classList.toggle('menu-openend');
		});
	});
}

/**
 * Handle Exclusive Products Slider
 */
function handleExclusiveSlider() {
	const items = document.querySelector('ul.exclusive-products');

	if (items === null) return false;

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
	if (document.body.classList.contains('sparks-vs-shop-attribute')) {
		slider.events.on('transitionEnd', () => {
			document.dispatchEvent(
				new CustomEvent('sparksVSNeedsInit', {
					detail: {
						container: '.products.exclusive',
					},
				})
			);
		});
	}
}

/**
 * Handle Gallery Image Slider
 */
function handleGallerySlider() {
	const galleryNav = document.querySelector('ol.flex-control-nav');

	if (!galleryNav) return;

	const isDesktop = window.innerWidth >= 992;

	const slider = tns({
		container: 'ol.flex-control-nav',
		items: isDesktop ? 4 : 4,
		axis: isDesktop ? 'vertical' : 'horizontal',
		slideBy: 'page',
		rewind: true,
		loop: false,
		nav: false,
		controls: false,
		mouseDrag: true,
		speed: 400,
	});

	addNextPrev(
		document.querySelector('.woocommerce-product-gallery .tns-inner'),
		slider,
		isDesktop
	);
}

/**
 * Run JS on load.
 */
window.addEventListener('load', initShop);
