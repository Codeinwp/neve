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
	handleMiniCartMobileToggle();
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

	dropDowns.forEach((dropDown) => {
		let bounding = dropDown.getBoundingClientRect(),
			rightDist = bounding.left;

		if (rightDist < 0) {
			dropDown.style.right = isRTL ? '-100%' : 'auto';
			dropDown.style.left = isRTL ? 'auto' : 0;
		}

		if (rightDist + bounding.width >= windowWidth) {
			dropDown.style.right = isRTL ? 0 : '100%';
			dropDown.style.left = 'auto';
		}

		// Recalculate bounding after we've made adjustments.
		bounding = dropDown.getBoundingClientRect();
		rightDist = bounding.left;

		if (rightDist < 0 || rightDist + bounding.width >= windowWidth) {
			// Calculate how much should we offset the dropdown to make it fit.
			dropDown.style.transform =
				'translateX(' +
				(isRTL ? '-' : '') +
				(Math.abs(rightDist) + 20) +
				'px)';
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
 * Handle submenu dropdown toggles (desktop and mobile).
 *
 * The toggles are native buttons, so click covers mouse, Enter, Space and
 * assistive-technology activation with a single code path and a single
 * open state (`dropdown-open`), mirrored to aria-expanded.
 */
let openCaretCount = 0;

function handleMobileDropdowns() {
	// Per-element guard: re-inits (e.g. customizer partial refreshes) must
	// bind new carets without stacking listeners on surviving ones.
	document
		.querySelectorAll('.caret-wrap:not([data-nv-bound])')
		.forEach((caret) => {
			caret.dataset.nvBound = '1';
			caret.addEventListener('click', (e) => toggleCaret(e, caret));
		});
	// Sidebar carets can render pre-expanded (neve_first_level_expanded).
	openCaretCount = openCarets().length;
	// Document-level guard is on <body> so a second bundle (customizer
	// preview) cannot double-register the handlers below.
	if (document.body.dataset.nvCaretKeys) {
		return;
	}
	document.body.dataset.nvCaretKeys = '1';
	// Escape closes the open submenu and returns focus to its toggle.
	// stopImmediatePropagation keeps the sidebar focus trap (also a
	// document keydown listener) from closing the whole menu on the same
	// press; the next Escape reaches it.
	document.addEventListener('keydown', (event) => {
		if (event.key !== 'Escape' || openCaretCount === 0) {
			return;
		}
		const openCaret = openCarets().find((caret) =>
			caret.closest('li').contains(event.target)
		);
		if (!openCaret) {
			return;
		}
		event.preventDefault();
		event.stopImmediatePropagation();
		setCaretState(openCaret, false);
		openCaret.focus();
	});
	// Close a desktop submenu when keyboard focus leaves its menu item.
	// Sidebar toggles (.navbar-toggle) are exempt to keep the sidebar's
	// tap-to-toggle behavior and the neve_first_level_expanded default.
	document.addEventListener('focusout', (event) => {
		if (openCaretCount === 0) {
			return;
		}
		openCarets().forEach((caret) => {
			if (
				!caret.classList.contains('navbar-toggle') &&
				!caret.closest('li').contains(event.relatedTarget)
			) {
				setCaretState(caret, false);
			}
		});
	});
}

function openCarets() {
	return [...document.querySelectorAll(`.caret-wrap.${strings[0]}`)];
}

function toggleCaret(e, caret) {
	e.preventDefault();
	e.stopPropagation();
	const open = !caret.classList.contains(strings[0]);
	setCaretState(caret, open);
	if (open) {
		createNavOverlay(
			document.querySelectorAll(`.${strings[0]}`),
			strings[0]
		);
	}
}

function setCaretState(caret, open) {
	if (caret.classList.contains(strings[0]) === open) {
		return;
	}
	openCaretCount += open ? 1 : -1;
	const subMenu = caret.parentNode.parentNode.querySelector('.sub-menu');
	const applyClass = open ? addClass : removeClass;
	applyClass(caret, strings[0]);
	if (subMenu !== null) {
		applyClass(subMenu, strings[0]);
	}
	caret.setAttribute('aria-expanded', open ? 'true' : 'false');
	if (!open && openCaretCount === 0) {
		removeNavOverlay();
	}
}

/**
 * Remove the click-away overlay if present.
 */
function removeNavOverlay() {
	const overlay = document.querySelector(`.${strings[2]}`);
	if (overlay !== null) {
		overlay.parentNode.removeChild(overlay);
	}
}

/**
 * Check that element is visible.
 *
 * @param {Element} el
 * @return {boolean} If element is visible or not.
 */
const vis = (el) => {
	if (el === document) {
		return true;
	}

	if (window.getComputedStyle(el, null).display === 'none') {
		return false;
	}
	return vis(el.parentNode);
};

function getKeyboardFocusableElements(element = document) {
	return [
		...element.querySelectorAll(
			'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
		),
	].filter(
		(el) =>
			!el.hasAttribute('disabled') &&
			!el.getAttribute('aria-hidden') &&
			vis(el)
	);
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
	setTimeout(
		function (ft) {
			ft.container.querySelector(ft.firstFocus).focus();
		},
		100,
		focusTrapDetails
	);
	document.addEventListener('keydown', startFocusTrap);
});
document.addEventListener(NV_FOCUS_TRAP_END, function () {
	focusTrapDetails = {};
	document.removeEventListener('keydown', startFocusTrap);
});

function startFocusTrap(event) {
	const elements = getKeyboardFocusableElements(focusTrapDetails.container);
	const tabKey = event.keyCode === 9;
	const shiftKey = event.shiftKey;
	const escKey = event.keyCode === 27;
	const activeEl = document.activeElement; // eslint-disable-line @wordpress/no-global-active-element
	const lastEl = elements[elements.length - 1];
	const firstEl = elements[0];
	if (escKey) {
		event.preventDefault();
		focusTrapDetails.backFocus.focus();
		// Containers other than the menu sidebar (header search) pass
		// their own close routine; closing the sidebar would leave them
		// open.
		if (typeof focusTrapDetails.onClose === 'function') {
			focusTrapDetails.onClose();
		} else {
			window.HFG.toggleMenuSidebar(false);
		}
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
	const doc = window.document;
	const navSearch = doc.querySelectorAll('.nv-nav-search') || [],
		navItem = doc.querySelectorAll('.menu-item-nav-search') || [],
		close = doc.querySelectorAll('.close-responsive-search') || [];
	syncSearchAria();
	const closeSearch = () => {
		removeClass(navItem, strings[1]);
		syncSearchAria();
		removeNavOverlay();
		doc.dispatchEvent(new CustomEvent(NV_FOCUS_TRAP_END));
	};
	addEvent(navItem, 'click', (e, searchItem) => {
		e.preventDefault();
		e.stopPropagation();
		toggleClass(searchItem, strings[1]);
		syncSearchAria();
		if (!searchItem.classList.contains(strings[1])) {
			// Second activation of the trigger closes the panel: end the
			// trap too, or a stale trap keeps eating Tab and Escape.
			removeNavOverlay();
			doc.dispatchEvent(new CustomEvent(NV_FOCUS_TRAP_END));
			return;
		}
		createNavOverlay(searchItem, strings[1]);
		doc.dispatchEvent(
			new CustomEvent(NV_FOCUS_TRAP_START, {
				detail: {
					container: searchItem.querySelector('.nv-nav-search'),
					close: '.close-responsive-search',
					firstFocus: '.search-field',
					// Escape focuses backFocus: must be the trigger
					// button — the wrapper div is not focusable and
					// would drop focus to <body>.
					backFocus:
						searchItem.querySelector(
							'.nv-search,.nv-nav-search-icon'
						) || searchItem,
					onClose: closeSearch,
				},
			})
		);
	});
	addEvent(navSearch, 'click', (e) => {
		e.stopPropagation();
	});
	addEvent(close, 'click', (e) => {
		e.preventDefault();
		const item = e.target.closest('.menu-item-nav-search');
		closeSearch();
		const trigger =
			item && item.querySelector('.nv-search,.nv-nav-search-icon');
		if (trigger) {
			trigger.focus();
		}
	});
}

/**
 * Mirror the search dropdown open state onto its trigger button.
 */
function syncSearchAria() {
	document.querySelectorAll('.menu-item-nav-search').forEach((item) => {
		const trigger = item.querySelector('.nv-search,.nv-nav-search-icon');
		if (trigger) {
			trigger.setAttribute(
				'aria-expanded',
				String(item.classList.contains(strings[1]))
			);
		}
	});
}

/**
 * Handle the mini cart position in nav.
 */
function handleMiniCartPosition() {
	const items = document.querySelectorAll('.header--row .menu-item-nav-cart');
	if (items.length === 0) {
		return;
	}

	const isMobile = window.matchMedia('(max-width: 959px)').matches;
	const sideSpacing = 2 * 16;

	items.forEach((item) => {
		const miniCart = item.querySelector(
			'.nv-nav-cart:not(.cart-off-canvas)'
		);

		if (miniCart === null) {
			return;
		}

		miniCart.style.left = '';
		miniCart.style.right = '';

		if (isMobile) {
			const cartWidth = Math.min(360, window.innerWidth - sideSpacing);
			const itemOffset = item.getBoundingClientRect().left;

			miniCart.style.width = `${cartWidth}px`;
			miniCart.style.maxWidth = `calc(100vw - ${sideSpacing}px)`;
			miniCart.style.left = `${
				(window.innerWidth - cartWidth) / 2 - itemOffset
			}px`;
			miniCart.style.right = 'auto';
			return;
		}

		miniCart.style.width = '';
		miniCart.style.maxWidth = '';
		miniCart.style.left = item.getBoundingClientRect().left < 350 ? 0 : '';
	});
}

window.addEventListener('resize', handleMiniCartPosition);

/**
 * Toggle the dropdown mini cart on tap for mobile.
 *
 * On desktop the dropdown mini cart opens on hover. Touch devices have no
 * hover, so without this the cart icon would just follow its link to the cart
 * page. Below the laptop breakpoint we toggle a `cart-dropdown-open` class on
 * tap instead; the dropdown's appearance is reused from the desktop styles
 * (see the woocommerce nav-cart styles), so customers can preview the cart and
 * keep shopping. It closes on a second tap or when tapping outside of it.
 */
function handleMiniCartMobileToggle() {
	const carts = document.querySelectorAll('.responsive-nav-cart.dropdown');
	if (carts.length === 0) {
		return;
	}

	// Mirrors the $laptop (960px) breakpoint where the hover dropdown applies.
	const isMobile = () => window.matchMedia('(max-width: 959px)').matches;

	carts.forEach((cart) => {
		const openButton = cart.querySelector('.cart-icon-wrapper');
		if (openButton === null) {
			return;
		}
		openButton.addEventListener('click', function (e) {
			if (!isMobile() || cart.classList.contains('cart-is-empty')) {
				return;
			}
			e.preventDefault();
			cart.classList.toggle('cart-dropdown-open');
		});
	});

	// Close an open dropdown when tapping outside of it.
	document.addEventListener('click', function (e) {
		if (!isMobile()) {
			return;
		}
		carts.forEach((cart) => {
			if (
				cart.classList.contains('cart-dropdown-open') &&
				!cart.contains(e.target)
			) {
				cart.classList.remove('cart-dropdown-open');
			}
		});
	});
}

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
		// setCaretState owns class + aria + count for toggles; removeClass
		// covers the non-caret users of the overlay (header search).
		openCarets().forEach((caret) => setCaretState(caret, false));
		removeClass(item, classToRemove);
		syncSearchAria();
		removeNavOverlay();
		// The search panel may have an active focus trap; a no-op when
		// none is running.
		document.dispatchEvent(new CustomEvent(NV_FOCUS_TRAP_END));
	});
}
