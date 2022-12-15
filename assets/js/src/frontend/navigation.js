/* global NeveProperties menuCalcEvent CustomEvent */
/* jshint esversion: 6 */
import {
	toggleClass,
	removeClass,
	addClass,
	addEvent,
	NV_FOCUS_TRAP_START,
	NV_FOCUS_TRAP_END,
} from '../utils.js';

const strings = ['dropdown-open', 'active', 'nav-clickaway-overlay'];
/**
 * Initialize nav logic.
 */
export const initNavigation = () => {
	repositionDropdowns();
	handleScrollLinks();
	handleMobileDropdowns();
	handleSearch();
	handleMiniCartPosition();
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
	const dropDowns =
		document.querySelectorAll('.sub-menu, .minimal .nv-nav-search') || [];

	if (dropDowns.length === 0) return;

	const windowWidth = window.innerWidth;
	dropDowns.forEach((dropDown) => {
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
 *
 * When we click on a link which refference a section inside the current page,
 * we close the sidebar if is open.
 */
function handleScrollLinks() {
	document.addEventListener('click', function (event) {
		if (event.target.hash && event.target.hash.includes('#')) {
			window.HFG.toggleMenuSidebar(false);
		}
	});
}

/**
 * Handle dropdowns on mobile devices.
 */
function handleMobileDropdowns() {
	const carets = document.querySelectorAll('.caret-wrap');
	addEvent(carets, 'click', openCarrets);
}

function openCarrets(e, caret) {
	e.preventDefault();
	e.stopPropagation();
	const subMenu = caret.parentNode.parentNode.querySelector('.sub-menu');
	toggleClass(caret, strings[0]);
	toggleClass(subMenu, strings[0]);
	createNavOverlay(document.querySelectorAll(`.${strings[0]}`), strings[0]);
}

function getKeyboardFocusableElements(element = document) {
	focusTrapDetails.elements = [
		...element.querySelectorAll(
			'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
		),
	].filter(
		(el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
	);
	return focusTrapDetails.elements;
}

/**
 * @namespace
 * @property {Element}  container               - The container which traps the focus.
 * @property {string}  firstFocus       - The first element which will be focusable inside the container
 * @property {string}  close         - the close element, which will be clicked to close the trap
 * @property {Element}  backFocus      - The element that receives focus when we trap is released
 * @property {NodeList} elements      - The element that receives focus when we trap is released
 */
let focusTrapDetails = {};
document.addEventListener(NV_FOCUS_TRAP_START, function (event) {
	focusTrapDetails = event.detail;
	setTimeout(() => {
		focusTrapDetails.container
			.querySelector(focusTrapDetails.firstFocus)
			.focus();
	}, 100);
	document.addEventListener('keydown', startFocusTrap);
});
document.addEventListener(NV_FOCUS_TRAP_END, function () {
	focusTrapDetails = {};
	document.removeEventListener('keydown', startFocusTrap);
});

function startFocusTrap(event) {
	const elements =
		focusTrapDetails.elements ||
		getKeyboardFocusableElements(focusTrapDetails.container);
	const tabKey = event.keyCode === 9;
	const shiftKey = event.shiftKey;
	const escKey = event.keyCode === 27;
	const activeEl = document.activeElement; // eslint-disable-line @wordpress/no-global-active-element
	const lastEl = elements[elements.length - 1];
	const firstEl = elements[0];
	if (escKey) {
		event.preventDefault();
		focusTrapDetails.container
			.querySelector(focusTrapDetails.close)
			.click();
		focusTrapDetails.backFocus.focus();
		document.dispatchEvent(new CustomEvent(NV_FOCUS_TRAP_END));
	}
	if (!shiftKey && tabKey && lastEl === activeEl) {
		event.preventDefault();
		firstEl.focus();
	}
	if (shiftKey && tabKey && firstEl === activeEl) {
		event.preventDefault();
		lastEl.focus();
	}
	if (tabKey && firstEl === lastEl) {
		event.preventDefault();
	}
}

/**
 * Handle searches.
 */
function handleSearch() {
	const navSearch = document.querySelectorAll('.nv-nav-search') || [],
		navItem = document.querySelectorAll('.menu-item-nav-search') || [],
		close = document.querySelectorAll('.close-responsive-search') || [];
	addEvent(navItem, 'click', (e, searchItem) => {
		e.preventDefault();
		e.stopPropagation();
		toggleClass(searchItem, strings[1]);
		createNavOverlay(searchItem, strings[1]);
		document.dispatchEvent(
			new CustomEvent(NV_FOCUS_TRAP_START, {
				detail: {
					container: searchItem.querySelector('.nv-nav-search'),
					close: '.close-responsive-search',
					firstFocus: '.search-field',
					backFocus: searchItem,
				},
			})
		);
	});
	addEvent(navSearch, 'click', (e) => {
		e.stopPropagation();
	});
	addEvent(close, 'click', (e) => {
		e.preventDefault();
		removeClass(navItem, strings[1]);
		const overlay = document.querySelector(`.${strings[2]}`);
		if (overlay === null) {
			return;
		}
		overlay.parentNode.removeChild(overlay);
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
	const miniCart = item.querySelector('.nv-nav-cart:not(.cart-off-canvas)');

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
