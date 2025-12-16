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
 * Run JS on load.
 */
window.addEventListener('load', initShop);
