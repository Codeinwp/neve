/* global NeveProperties menuCalcEvent */
/* jshint esversion: 6 */
import {
	isIe,
	unhashUrl,
	toggleClass,
	removeClass,
	addClass,
	neveEach,
} from '../utils.js';

let pageUrl;
const strings = ['dropdown-open', 'active', 'nav-clickaway-overlay'];

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
	positionPaginationJumper();
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
		'.sub-menu, .minimal .nv-nav-search'
	);

	if (dropDowns.length === 0) return;

	const windowWidth = window.innerWidth;
	neveEach(dropDowns, (dropDown) => {
		const bounding = dropDown.getBoundingClientRect(),
			rightDist = bounding.left;

		if (rightDist < 0) {
			dropDown.style.right = isRTL ? '-100%' : 'auto';
			dropDown.style.left = isRTL ? 'auto' : 0;
		}

		if (rightDist + bounding.width >= windowWidth) {
			dropDown.style.right = isRTL ? 0 : '100%';
			dropDown.style.left = 'auto';
		}
	});
	if (typeof menuCalcEvent !== 'undefined') {
		window.dispatchEvent(menuCalcEvent);
	}
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
			toggleClass(caret, strings[0]);
			toggleClass(subMenu, strings[0]);
			createNavOverlay(
				document.querySelectorAll(`.${strings[0]}`),
				strings[0]
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
			toggleClass(searchItem, strings[1]);
			setTimeout(() => {
				searchItem.querySelector('.search-field').focus();
			}, 50);
			createNavOverlay(searchItem, strings[1]);
		});
	});
	// Don't close the search if interacted with.
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
				removeClass(search, strings[1]);
			});
			const overlay = document.querySelector(`.${strings[2]}`);
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
	let navClickaway = document.querySelector(`.${strings[2]}`);
	if (navClickaway !== null) {
		navClickaway.parentNode.removeChild(navClickaway);
	}
	navClickaway = document.createElement('div');
	addClass(navClickaway, strings[2]);

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
			addClass(dropdown, strings[0]);
		});
		parentItem.addEventListener('mouseleave', () => {
			removeClass(dropdown, strings[0]);
		});
	});
}

/**
 * Position the Jump to pagination input box.
 */
function positionPaginationJumper() {
	const paginationNumbers = document.querySelector('ul.page-numbers');

	const jumpto = document.querySelector('#nv-pagination-jump');

	if (!paginationNumbers || !jumpto) {
		return;
	}

	const lastElement = paginationNumbers.lastElementChild;

	const nextBtn = document.querySelector('.next.page-numbers');

	if (nextBtn) {
		lastElement.insertAdjacentElement('beforebegin', jumpto);
	} else {
		lastElement.insertAdjacentElement('afterend', jumpto);
	}
}
