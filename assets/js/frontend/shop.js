/* jshint esversion: 6 */
import { neveEach } from './utils.js';
import { tns } from 'tiny-slider/src/tiny-slider';

/**
 * Init shop.
 * @returns {boolean}
 */
export const initShop = function () {
	if (document.body.classList.contains('woocommerce')) {
		handleShopSidebar();
	}
	if (document.body.classList.contains('nv-exclusive')) {
		handleExclusiveSlider();
	}

	handleCartExpand();
};

/**
 * Handle the shop sidebar.
 *
 * @returns {boolean}
 */
const handleShopSidebar = function () {
	let sidebar, toggles, html;

	sidebar = document.querySelector('.shop-sidebar');
	if (sidebar === null) {
		return false;
	}
	html = document.querySelector('html');
	toggles = document.querySelectorAll('.nv-sidebar-toggle');
	neveEach(toggles, function (toggle) {
		toggle.addEventListener('click', function () {
			sidebar.classList.toggle('sidebar-open');
			html.classList.toggle('menu-openend');
		});
	});
};

/**
 * Handle Exclusive Products Slider
 */
const handleExclusiveSlider = function () {

	let responsive = {
		"0": {'items': 2, 'gutter': 21},
		"768": {'items': 4, 'gutter': 27},
		"1200": {'items': 4, 'gutter': 30},
	};

	let slider = tns({
		container: 'ul.exclusive-products',
		slideBy: 'page',
		mouseDrag: true,
		arrowKeys: true,
		loop: true,
		autoplay: true,
		items: 4,
		edgePadding: 0,
		autoplayButtonOutput: false,
		autoplayHoverPause: true,
		speed: 500,
		autoplayTimeout: 2500,
		autoplayButton: false,
		controls: false,
		navPosition: 'bottom',
		responsive,
	});
};

/**
 * Handle the expanding navigation cart.
 */
const handleCartExpand = function () {

};
