/* jshint esversion: 6 */
import { tns } from 'tiny-slider/src/tiny-slider';
import { neveEach } from '../utils';

/**
 * Init shop.
 */
function initShop() {
	if (document.body.classList.contains('woocommerce')) {
		handleShopSidebar();
	}
	if (document.body.classList.contains('nv-exclusive')) {
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
	const toggles = document.querySelectorAll('.nv-sidebar-toggle');
	neveEach(toggles, (toggle) => {
		toggle.addEventListener('click', function () {
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

	tns({
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
}

/**
 * Run JS on load.
 */
window.addEventListener('load', initShop);
