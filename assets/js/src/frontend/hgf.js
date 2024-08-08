/* global NeveProperties */
/* jshint esversion: 6 */
import {
	addEvent,
	addClass,
	removeClass,
	NV_FOCUS_TRAP_START,
	NV_FOCUS_TRAP_END,
} from '../utils.js';

const clickEvent = 'click';
const closeNavSelector = '.close-sidebar-panel .navbar-toggle';
const sidebarClasses = [
	'is-menu-sidebar',
	'hiding-header-menu-sidebar',
	'is-active',
];

export const HFG = function () {
	this.options = {
		menuToggleDuration: 300,
	};
	this.init();
};

const toggleAria = (elements, add = true) => {
	elements.forEach(function (element) {
		if (!add) {
			element.removeAttribute('aria-hidden');
			return;
		}
		element.setAttribute('aria-hidden', 'true');
	});
};

/**
 * Init mobile sidebar.
 *
 * @param {boolean} skipSidebar
 */
HFG.prototype.init = function (skipSidebar = false) {
	const doc = document;
	if (skipSidebar === false) {
		// Close buttons.
		addEvent(doc.querySelectorAll(closeNavSelector), clickEvent, () => {
			this.toggleMenuSidebar(false);
		});
	}

	// Mobile menu toggle buttons.
	addEvent(
		doc.querySelectorAll('.menu-mobile-toggle'),
		clickEvent,
		(event) => {
			this.toggleMenuSidebar(
				!event.target.parentElement.classList.contains('is-active'),
				event.target
			);
		}
	);

	/**
	 * When click to outside of menu sidebar.
	 */
	const overlay = doc.querySelector('.header-menu-sidebar-overlay');
	if (overlay) {
		addEvent(
			overlay,
			clickEvent,
			function () {
				this.toggleMenuSidebar(false);
			}.bind(this)
		);
	}
};

/**
 * Toggle menu sidebar.
 *
 * @param {boolean} toggle
 * @param {Element} target
 */
HFG.prototype.toggleMenuSidebar = function (toggle, target = null) {
	const TOGGLE_CLASS_CONTAINER = '.menu-mobile-toggle';
	const doc = document;
	const buttonsContainer = doc.querySelectorAll(TOGGLE_CLASS_CONTAINER);
	removeClass(doc.body, sidebarClasses[1]);

	/**
	 * Elements to apply aria-hidden on
	 */
	const ariaShowOnToggle = doc.querySelectorAll(
		'#header-menu-sidebar, .hfg-ov'
	);
	const ariaHideOnToggle = doc.querySelectorAll(
		'.neve-skip-link, #content, .scroll-to-top, #site-footer, .header--row'
	);

	if (
		(!NeveProperties.isCustomize &&
			doc.body.classList.contains(sidebarClasses[0])) ||
		toggle === false
	) {
		const navClickaway = doc.querySelector('.nav-clickaway-overlay');
		if (navClickaway !== null) {
			navClickaway.parentNode.removeChild(navClickaway);
		}
		addClass(doc.body, sidebarClasses[1]);
		removeClass(doc.body, sidebarClasses[0]);
		removeClass(buttonsContainer, sidebarClasses[2]);
		// Remove the hiding class after 1 second.
		setTimeout(
			function () {
				removeClass(doc.body, sidebarClasses[1]);
			}.bind(this),
			1000
		);

		/**
		 * Remove aria-hidden from elements outside the sidebar menu
		 */
		toggleAria(ariaHideOnToggle, false);
		toggleAria(ariaShowOnToggle);
		// Remove focus trap when closing.
		doc.dispatchEvent(new CustomEvent(NV_FOCUS_TRAP_END));
	} else {
		addClass(doc.body, sidebarClasses[0]);
		addClass(buttonsContainer, sidebarClasses[2]);
		if (target) {
			doc.dispatchEvent(
				new CustomEvent(NV_FOCUS_TRAP_START, {
					detail: {
						container: doc.getElementById('header-menu-sidebar'),
						close: closeNavSelector,
						firstFocus: closeNavSelector + ',.menu-item a',
						backFocus: target,
					},
				})
			);
		}

		/**
		 * Remove aria-hidden from elements outside the sidebar menu
		 */
		toggleAria(ariaShowOnToggle, false);
		toggleAria(ariaHideOnToggle);
	}
};
