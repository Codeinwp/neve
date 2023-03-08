/* global NeveProperties CustomEvent */
/* jshint esversion: 6 */
import {
	addEvent,
	addClass,
	removeClass,
	NV_FOCUS_TRAP_START,
	NV_FOCUS_TRAP_END,
} from '../utils.js';

const closeNavSelector = '.ffocus';
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
	if (skipSidebar === false) {
		const closeButtons = document.querySelectorAll(closeNavSelector);
		addEvent(closeButtons, 'click', () => {
			this.toggleMenuSidebar(false);
		});
	}

	const menuMobileToggleButtons = document.querySelectorAll(
		'.menu-mobile-toggle'
	);
	addEvent(menuMobileToggleButtons, 'click', (event) => {
		this.toggleMenuSidebar(true, event.target);
	});

	/**
	 * When click to outside of menu sidebar.
	 */
	const overlay = document.querySelector('.header-menu-sidebar-overlay');
	if (overlay) {
		addEvent(
			overlay,
			'click',
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
	const buttonsContainer = document.querySelectorAll(TOGGLE_CLASS_CONTAINER);
	removeClass(document.body, sidebarClasses[1]);

	/**
	 * Elements to apply aria-hidden on
	 */
	const ariaShowOnToggle = document.querySelectorAll(
		'#header-menu-sidebar, .hfg-ov'
	);
	const ariaHideOnToggle = document.querySelectorAll(
		'.neve-skip-link, #content, .scroll-to-top, #site-footer, .header--row'
	);

	if (
		(!NeveProperties.isCustomize &&
			document.body.classList.contains(sidebarClasses[0])) ||
		toggle === false
	) {
		const navClickaway = document.querySelector('.nav-clickaway-overlay');
		if (navClickaway !== null) {
			navClickaway.parentNode.removeChild(navClickaway);
		}
		addClass(document.body, sidebarClasses[1]);
		removeClass(document.body, sidebarClasses[0]);
		removeClass(buttonsContainer, sidebarClasses[2]);
		// Remove the hiding class after 1 second.
		setTimeout(
			function () {
				removeClass(document.body, sidebarClasses[1]);
			}.bind(this),
			1000
		);

		/**
		 * Remove aria-hidden from elements outside the sidebar menu
		 */
		toggleAria(ariaHideOnToggle, false);
		toggleAria(ariaShowOnToggle);
		// Remove focus trap when closing.
		document.dispatchEvent(new CustomEvent(NV_FOCUS_TRAP_END));
	} else {
		addClass(document.body, sidebarClasses[0]);
		addClass(buttonsContainer, sidebarClasses[2]);
		if (target) {
			document.dispatchEvent(
				new CustomEvent(NV_FOCUS_TRAP_START, {
					detail: {
						container: document.getElementById(
							'header-menu-sidebar'
						),
						close: closeNavSelector,
						firstFocus: closeNavSelector + ', .menu-item a',
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
