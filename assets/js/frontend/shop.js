/* jshint esversion: 6 */
import {neveEach} from './utils.js';

/**
 * Init shop.
 * @returns {boolean}
 */
export const initShop = function () {
	if (!document.body.classList.contains( 'woocommerce' )) {
		return false;
	}
	handleShopSidebar();
};

/**
 * Handle the shop sidebar.
 *
 * @returns {boolean}
 */
const handleShopSidebar = function () {
	let sidebar, toggles, html;

	sidebar = document.querySelector( '.shop-sidebar' );
	if (sidebar === null) {
		return false;
	}
	html = document.querySelector( 'html' );
	toggles = document.querySelectorAll( '.nv-sidebar-toggle' );
	neveEach( toggles, function ( toggle ) {
		toggle.addEventListener( 'click', function () {
			sidebar.classList.toggle( 'sidebar-open' );
			html.classList.toggle( 'menu-openend' );
		} );
	} );
};
