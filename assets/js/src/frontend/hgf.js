/* global NeveProperties */
/* jshint esversion: 6 */
import {
	addEvent,
	addClass,
	removeClass,
	qs,
	qsa,
	emit,
	NV_FOCUS_TRAP_START,
	NV_FOCUS_TRAP_END,
} from '../utils.js';

const closeNavSelector = '.close-sidebar-panel .navbar-toggle';
const sidebarClasses = [
	'is-menu-sidebar',
	'hiding-header-menu-sidebar',
	'is-active',
];

export const HFG = function () {
	this.init();
};

const toggleAria = (elements, add = true) =>
	elements.forEach((element) =>
		add
			? element.setAttribute('aria-hidden', 'true')
			: element.removeAttribute('aria-hidden')
	);

/**
 * Init mobile sidebar.
 *
 * @param {boolean} skipSidebar
 */
HFG.prototype.init = function (skipSidebar = false) {
	if (skipSidebar === false) {
		const closeButtons = qsa(closeNavSelector);
		addEvent(closeButtons, 'click', () => {
			this.toggleMenuSidebar(false);
		});
	}

	const menuMobileToggleButtons = qsa('.menu-mobile-toggle');
	addEvent(menuMobileToggleButtons, 'click', (event) => {
		this.toggleMenuSidebar(
			!event.target.parentElement.classList.contains('is-active'),
			event.target
		);
	});

	/**
	 * When click to outside of menu sidebar.
	 */
	const overlay = qs('.header-menu-sidebar-overlay');
	if (overlay) {
		addEvent(overlay, 'click', () => this.toggleMenuSidebar(false));
	}
};

/**
 * Toggle menu sidebar.
 *
 * @param {boolean} toggle
 * @param {Element} target
 */
HFG.prototype.toggleMenuSidebar = function (toggle, target = null) {
	const body = document.body;
	const buttonsContainer = qsa('.menu-mobile-toggle');
	removeClass(body, sidebarClasses[1]);

	/**
	 * Elements to apply aria-hidden on
	 */
	const ariaShowOnToggle = qsa('#header-menu-sidebar, .hfg-ov');
	const ariaHideOnToggle = qsa(
		'.neve-skip-link, #content, .scroll-to-top, #site-footer, .header--row'
	);

	if (
		((typeof NeveProperties === 'undefined' ||
			!NeveProperties.isCustomize) &&
			body.classList.contains(sidebarClasses[0])) ||
		toggle === false
	) {
		const navClickaway = qs('.nav-clickaway-overlay');
		if (navClickaway !== null) {
			navClickaway.remove();
		}
		addClass(body, sidebarClasses[1]);
		removeClass(body, sidebarClasses[0]);
		removeClass(buttonsContainer, sidebarClasses[2]);
		// Remove the hiding class after 1 second.
		setTimeout(function () {
			removeClass(body, sidebarClasses[1]);
		}, 1000);

		/**
		 * Remove aria-hidden from elements outside the sidebar menu
		 */
		toggleAria(ariaHideOnToggle, false);
		toggleAria(ariaShowOnToggle);
		// Remove focus trap when closing.
		emit(NV_FOCUS_TRAP_END);
	} else {
		addClass(body, sidebarClasses[0]);
		addClass(buttonsContainer, sidebarClasses[2]);
		if (target) {
			emit(NV_FOCUS_TRAP_START, {
				container: document.getElementById('header-menu-sidebar'),
				close: closeNavSelector,
				firstFocus: closeNavSelector + ',.menu-item a',
				backFocus: target,
			});
		}

		/**
		 * Remove aria-hidden from elements outside the sidebar menu
		 */
		toggleAria(ariaShowOnToggle, false);
		toggleAria(ariaHideOnToggle);
	}
};
