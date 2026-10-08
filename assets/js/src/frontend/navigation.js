/* global menuCalcEvent getComputedStyle */
/* jshint esversion: 6 */
import {
	toggleClass,
	removeClass,
	addClass,
	addEvent,
	qs,
	qsa,
	emit,
	on,
	has,
	prevent,
	rect,
	NV_FOCUS_TRAP_START,
	NV_FOCUS_TRAP_END,
} from '../utils.js';

const strings = ['dropdown-open', 'active', 'nav-clickaway-overlay'];

// Mirrors the $laptop (960px) breakpoint where the hover dropdown applies.
const isMobile = () => window.matchMedia('(max-width: 959px)').matches;

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
	window.HFG.initSearch = () => {
		handleSearch();
		handleMobileDropdowns();
	};
};
/**
 * Reposition drop downs in case they go off screen.
 */
export const repositionDropdowns = () => {
	const dropDowns = qsa('.sub-menu, .minimal .nv-nav-search');

	if (!dropDowns.length) return;

	const windowWidth = window.innerWidth;

	// How far a dropdown runs past the viewport: negative past the left edge,
	// positive past the right edge, zero when it fits.
	const getOverflow = (bounding) => {
		if (bounding.left < 0) {
			return bounding.left;
		}

		return bounding.right > windowWidth ? bounding.right - windowWidth : 0;
	};

	dropDowns.forEach((dropDown) => {
		const style = dropDown.style;

		// Drop what an earlier pass applied, so the dropdown is measured where
		// the stylesheet puts it and stale offsets do not pile up.
		style.right = style.left = style.transform = '';

		let overflow = getOverflow(rect(dropDown));

		if (!overflow) {
			return;
		}

		const edge = dropDown.matches('.sub-menu .sub-menu') ? '100%' : '0px';

		style.right = overflow < 0 ? 'auto' : edge;
		style.left = overflow < 0 ? edge : 'auto';

		// Wider than the space on the side it opens towards, offset it to fit.
		overflow = getOverflow(rect(dropDown));

		if (overflow) {
			style.transform =
				'translateX(' +
				(overflow < 0 ? 20 - overflow : -overflow - 20) +
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
	on(document, 'click', (event) => {
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
function handleMobileDropdowns() {
	const body = document.body;
	// Per-element guard: re-inits (e.g. customizer partial refreshes) must
	// bind new carets without stacking listeners on surviving ones.
	qsa('.caret-wrap:not([data-nv-bound])').forEach((caret) => {
		caret.dataset.nvBound = '1';
		on(caret, 'click', (e) => toggleCaret(e, caret));
	});
	// Document-level guard is on <body> so a second bundle (customizer
	// preview) cannot double-register the handlers below. The handlers read
	// open state from the DOM, never from module state, so they stay
	// correct for carets a later bundle instance bound.
	if (body.dataset.nvCaretKeys) {
		return;
	}
	body.dataset.nvCaretKeys = '1';
	// WCAG 1.4.13: submenus revealed by pure CSS :hover must also be
	// dismissable without moving the pointer. Escape sets a body class
	// the stylesheet uses to hide :hover submenus; the pointer leaving
	// the hovered item re-arms hover for the next one. Registered before
	// the caret handler so its stopImmediatePropagation cannot starve
	// this one when a submenu is keyboard-open and hovered at once.
	on(document, 'keydown', (event) => {
		if (event.key !== 'Escape') {
			return;
		}
		const hovered = qs('.menu-item-has-children:hover');
		if (!hovered) {
			return;
		}
		addClass(body, 'nv-hover-off');
		on(hovered, 'mouseleave', () => removeClass(body, 'nv-hover-off'), {
			once: true,
		});
	});
	// Escape closes the open submenu and returns focus to its toggle.
	// stopImmediatePropagation keeps the sidebar focus trap (also a
	// document keydown listener, registered later) from closing the whole
	// menu on the same press; the next Escape reaches it.
	on(document, 'keydown', (event) => {
		if (event.key !== 'Escape' || openCarets().length === 0) {
			return;
		}
		const openCaret = openCarets().find((caret) =>
			caret.closest('li').contains(event.target)
		);
		if (!openCaret) {
			return;
		}
		prevent(event);
		event.stopImmediatePropagation();
		setCaretState(openCaret, false);
		openCaret.focus();
	});
	// Close a desktop submenu when keyboard focus leaves its menu item.
	// Sidebar toggles (.navbar-toggle) are exempt to keep the sidebar's
	// tap-to-toggle behavior and the neve_first_level_expanded default.
	on(document, 'focusout', (event) => {
		if (openCarets().length === 0) {
			return;
		}
		openCarets().forEach((caret) => {
			if (
				!has(caret, 'navbar-toggle') &&
				!caret.closest('li').contains(event.relatedTarget)
			) {
				setCaretState(caret, false);
			}
		});
	});
}

function openCarets() {
	return [...qsa('.caret-wrap.' + strings[0])];
}

function toggleCaret(e, caret) {
	prevent(e);
	e.stopPropagation();
	const open = !has(caret, strings[0]);
	setCaretState(caret, open);
	if (open) {
		createNavOverlay(qsa('.' + strings[0]), strings[0]);
	}
}

function setCaretState(caret, open) {
	if (has(caret, strings[0]) === open) {
		return;
	}
	const subMenu = qs('.sub-menu', caret.parentNode.parentNode);
	const applyClass = open ? addClass : removeClass;
	applyClass(caret, strings[0]);
	if (subMenu !== null) {
		applyClass(subMenu, strings[0]);
	}
	caret.setAttribute('aria-expanded', String(open));
	if (!open && openCarets().length === 0) {
		removeNavOverlay();
	}
}

/**
 * Remove the click-away overlay if present.
 */
function removeNavOverlay() {
	const overlay = qs('.' + strings[2]);
	if (overlay !== null) {
		overlay.remove();
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

	if (getComputedStyle(el).display === 'none') {
		return false;
	}
	return vis(el.parentNode);
};

function getKeyboardFocusableElements(element) {
	return [
		...qsa(
			'a[href],button,input,textarea,select,details,[tabindex]:not([tabindex="-1"])',
			element
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
on(document, NV_FOCUS_TRAP_START, (event) => {
	focusTrapDetails = event.detail;
	setTimeout(
		(ft) => {
			qs(ft.firstFocus, ft.container).focus();
		},
		100,
		focusTrapDetails
	);
	on(document, 'keydown', startFocusTrap);
});
on(document, NV_FOCUS_TRAP_END, () => {
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
		prevent(event);
		focusTrapDetails.backFocus.focus();
		// Containers other than the menu sidebar (header search) pass
		// their own close routine; closing the sidebar would leave them
		// open.
		if (typeof focusTrapDetails.onClose === 'function') {
			focusTrapDetails.onClose();
		} else {
			window.HFG.toggleMenuSidebar(false);
		}
		emit(NV_FOCUS_TRAP_END);
	}
	if (!shiftKey && tabKey && lastEl === activeEl) {
		prevent(event);
		firstEl.focus();
	}
	if (shiftKey && tabKey && firstEl === activeEl) {
		prevent(event);
		lastEl.focus();
	}
	if (tabKey && firstEl === lastEl) {
		prevent(event);
	}
}

/**
 * Handle searches.
 */
function handleSearch() {
	const navSearch = qsa('.nv-nav-search'),
		navItem = qsa('.menu-item-nav-search'),
		close = qsa('.close-responsive-search');
	syncSearchAria();
	const closeSearch = () => {
		removeClass(navItem, strings[1]);
		syncSearchAria();
		removeNavOverlay();
		emit(NV_FOCUS_TRAP_END);
	};
	addEvent(navItem, 'click', (e, searchItem) => {
		prevent(e);
		e.stopPropagation();
		toggleClass(searchItem, strings[1]);
		syncSearchAria();
		if (!has(searchItem, strings[1])) {
			// Second activation of the trigger closes the panel: end the
			// trap too, or a stale trap keeps eating Tab and Escape.
			removeNavOverlay();
			emit(NV_FOCUS_TRAP_END);
			return;
		}
		createNavOverlay(searchItem, strings[1]);
		emit(NV_FOCUS_TRAP_START, {
			container: qs('.nv-nav-search', searchItem),
			close: '.close-responsive-search',
			firstFocus: '.search-field',
			// Escape focuses backFocus: must be the trigger
			// button — the wrapper div is not focusable and
			// would drop focus to <body>.
			backFocus:
				qs('.nv-search,.nv-nav-search-icon', searchItem) || searchItem,
			onClose: closeSearch,
		});
	});
	addEvent(navSearch, 'click', (e) => {
		e.stopPropagation();
	});
	addEvent(close, 'click', (e) => {
		prevent(e);
		const item = e.target.closest('.menu-item-nav-search');
		closeSearch();
		const trigger = item && qs('.nv-search,.nv-nav-search-icon', item);
		if (trigger) {
			trigger.focus();
		}
	});
}

/**
 * Mirror the search dropdown open state onto its trigger button.
 */
function syncSearchAria() {
	qsa('.menu-item-nav-search').forEach((item) => {
		const trigger = qs('.nv-search,.nv-nav-search-icon', item);
		if (trigger) {
			trigger.setAttribute(
				'aria-expanded',
				String(has(item, strings[1]))
			);
		}
	});
}

/**
 * Handle the mini cart position in nav.
 */
function handleMiniCartPosition() {
	const items = qsa('.header--row .menu-item-nav-cart');
	if (items.length === 0) {
		return;
	}

	const mobile = isMobile();
	const sideSpacing = 2 * 16;

	items.forEach((item) => {
		const miniCart = qs('.nv-nav-cart:not(.cart-off-canvas)', item);

		if (miniCart === null) {
			return;
		}

		const style = miniCart.style;
		style.left = '';
		style.right = '';

		if (mobile) {
			const cartWidth = Math.min(360, window.innerWidth - sideSpacing);
			const itemOffset = rect(item).left;

			style.width = cartWidth + 'px';
			style.maxWidth = 'calc(100vw - ' + sideSpacing + 'px)';
			style.left =
				(window.innerWidth - cartWidth) / 2 - itemOffset + 'px';
			style.right = 'auto';
			return;
		}

		style.width = '';
		style.maxWidth = '';
		style.left = rect(item).left < 350 ? 0 : '';
	});
}

on(window, 'resize', handleMiniCartPosition);

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
	const carts = qsa('.responsive-nav-cart.dropdown');
	if (carts.length === 0) {
		return;
	}

	carts.forEach((cart) => {
		const openButton = qs('.cart-icon-wrapper', cart);
		if (openButton === null) {
			return;
		}
		on(openButton, 'click', (e) => {
			if (!isMobile() || has(cart, 'cart-is-empty')) {
				return;
			}
			prevent(e);
			cart.classList.toggle('cart-dropdown-open');
		});
	});

	// Close an open dropdown when tapping outside of it.
	on(document, 'click', (e) => {
		if (!isMobile()) {
			return;
		}
		carts.forEach((cart) => {
			if (has(cart, 'cart-dropdown-open') && !cart.contains(e.target)) {
				removeClass(cart, 'cart-dropdown-open');
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
	let navClickaway = qs('.' + strings[2]);
	if (navClickaway !== null) {
		navClickaway.remove();
	}
	navClickaway = document.createElement('div');
	addClass(navClickaway, strings[2]);

	const primaryNav = qs('header.header');
	primaryNav.parentNode.insertBefore(navClickaway, primaryNav);

	on(navClickaway, 'click', () => {
		// setCaretState owns class + aria + count for toggles; removeClass
		// covers the non-caret users of the overlay (header search).
		openCarets().forEach((caret) => setCaretState(caret, false));
		removeClass(item, classToRemove);
		syncSearchAria();
		removeNavOverlay();
		// The search panel may have an active focus trap; a no-op when
		// none is running.
		emit(NV_FOCUS_TRAP_END);
	});
}
