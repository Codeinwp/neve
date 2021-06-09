/* global NeveProperties */
/* jshint esversion: 6 */
import {
	isMobile,
	isIe,
	unhashUrl,
	toggleClass,
	removeClass,
	addClass,
	neveEach,
} from '../utils.js';

let pageUrl;

/**
 * Initialize nav logic.
 */
export const initNavigation = () => {
	pageUrl = window.location.href;
	repositionDropdowns();
	handleScrollLinks();
	handleMobileDropdowns();
	handleSearch();
	handleMiniCartPosition();
	if (isIe() === true) {
		handleIeDropdowns();
	}
	window.HFG.initSearch = function () {
		handleSearch();
		handleMobileDropdowns();
	};
};

/**
 * Reposition drop downs in case they go off screen.
 */
export const repositionDropdowns = () => {
	const { isRTL } = NeveProperties;
	const dropDowns = document.querySelectorAll(
		'.neve-mega-menu > .sub-menu, .minimal .nv-nav-search'
	);

	if (dropDowns.length === 0) return;

	const windowWidth = window.innerWidth;
	neveEach(dropDowns, (dropDown) => {
		const bounding = dropDown.getBoundingClientRect();
		const parentBounding = dropDown.parentElement.getBoundingClientRect();

		if (bounding.left < 0) {
			dropDown.style.left = isRTL ? '0' : '100%';
			dropDown.style.right = 'auto';
		}
		if (parentBounding.left + bounding.width >= windowWidth) {
			dropDown.style.left = 'auto';
			dropDown.style.right = '-100%';
		}

		if (
			parentBounding.left - bounding.width < 0 &&
			parentBounding.left + bounding.width >= windowWidth
		) {
			dropDown.style.left = 'auto';
			dropDown.style.right =
				'calc( 100% - ' + bounding.width / 2 + 'px )';
		}
	});
};

/**
 * Handle links that link to the current page.
 */
function handleScrollLinks() {
	const links = document.querySelectorAll('.nv-nav-wrap a');
	if (links.length === 0) return;

	neveEach(links, (link) => {
		link.addEventListener('click', (event) => {
			const href = event.target.getAttribute('href');
			if (href === null) return false;
			if (unhashUrl(href) === unhashUrl(pageUrl)) {
				window.HFG.toggleMenuSidebar(false);
			}
		});
	});
}

/**
 * Handle dropdowns on mobile devices.
 */
function handleMobileDropdowns() {
	const carets = document.querySelectorAll('.caret-wrap');
	neveEach(carets, (caret) => {
		caret.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			const subMenu = caret.parentNode.parentNode.querySelector(
				'.sub-menu'
			);
			toggleClass(caret, 'dropdown-open');
			toggleClass(subMenu, 'dropdown-open');
			createNavOverlay(
				document.querySelectorAll('.dropdown-open'),
				'dropdown-open'
			);
		});
	});
}

/**
 * Handle searches.
 */
function handleSearch() {
	const navSearch = document.querySelectorAll('.nv-nav-search'),
		navItem = document.querySelectorAll('.menu-item-nav-search'),
		close = document.querySelectorAll('.close-responsive-search');
	// Handle search opening.
	neveEach(navItem, (searchItem) => {
		searchItem.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			toggleClass(searchItem, 'active');
			setTimeout(() => {
				searchItem.querySelector('.search-field').focus();
			}, 50);
			if (!isMobile()) {
				createNavOverlay(searchItem, 'active');
			}
		});
	});
	// Don't close thee search if interacted with.
	neveEach(navSearch, (item) => {
		item.addEventListener('click', (e) => {
			e.stopPropagation();
		});
	});
	// Mobile search close buttons.
	neveEach(close, (button) => {
		button.addEventListener('click', (e) => {
			e.preventDefault();
			neveEach(navItem, (search) => {
				removeClass(search, 'active');
			});
			const overlay = document.querySelector('.nav-clickaway-overlay');
			if (overlay === null) {
				return;
			}
			overlay.parentNode.removeChild(overlay);
		});
	});
}

/**
 * Handle the mini cart position in nav.
 */
function handleMiniCartPosition() {
	const item = document.querySelector('.header--row .menu-item-nav-cart');
	if (item === null) {
		return;
	}

	const miniCart = item.querySelector('.nv-nav-cart');

	if (miniCart !== null) {
		miniCart.style.left =
			item.getBoundingClientRect().left < 350 ? 0 : null;
	}
}

window.addEventListener('resize', handleMiniCartPosition);

/**
 * Create an overlay to allow closing.
 *
 * @param {Object} item
 * @param {string} classToRemove
 */
function createNavOverlay(item, classToRemove) {
	let navClickaway = document.querySelector('.nav-clickaway-overlay');
	if (navClickaway !== null) {
		navClickaway.parentNode.removeChild(navClickaway);
	}
	navClickaway = document.createElement('div');
	addClass(navClickaway, 'nav-clickaway-overlay');

	const primaryNav = document.querySelector('header.header');
	primaryNav.parentNode.insertBefore(navClickaway, primaryNav);

	navClickaway.addEventListener('click', () => {
		removeClass(item, classToRemove);
		navClickaway.parentNode.removeChild(navClickaway);
	});
}

/**
 * Handle dropdowns for special browsers that...
 * have trouble understanding what hover is.
 */
function handleIeDropdowns() {
	const dropdowns = document.querySelectorAll(
		'.header--row[data-show-on="desktop"] .sub-menu'
	);
	neveEach(dropdowns, (dropdown) => {
		const parentItem = dropdown.parentNode;

		parentItem.addEventListener('mouseenter', () => {
			addClass(dropdown, 'dropdown-open');
		});
		parentItem.addEventListener('mouseleave', () => {
			removeClass(dropdown, 'dropdown-open');
		});
	});
}
