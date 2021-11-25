/* global NeveProperties CustomEvent */
/* jshint esversion: 6 */
import {
	addEvent,
	addClass,
	removeClass,
	NV_FOCUS_TRAP_START,
} from '../utils.js';

const closeNavSelector = '.close-sidebar-panel .navbar-toggle';

export const HFG = function () {
	this.options = {
		menuToggleDuration: 300,
	};
	this.init();
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
	removeClass(document.body, 'hiding-header-menu-sidebar');

	if (
		(!NeveProperties.isCustomize &&
			document.body.classList.contains('is-menu-sidebar')) ||
		toggle === false
	) {
		const navClickaway = document.querySelector('.nav-clickaway-overlay');
		if (navClickaway !== null) {
			navClickaway.parentNode.removeChild(navClickaway);
		}
		addClass(document.body, 'hiding-header-menu-sidebar');
		removeClass(document.body, 'is-menu-sidebar');
		removeClass(buttonsContainer, 'is-active');
		// Remove the hiding class after 1 second.
		setTimeout(
			function () {
				removeClass(document.body, 'hiding-header-menu-sidebar');
			}.bind(this),
			1000
		);
	} else {
		addClass(document.body, 'is-menu-sidebar');
		addClass(buttonsContainer, 'is-active');
		if (target) {
			document.dispatchEvent(
				new CustomEvent(NV_FOCUS_TRAP_START, {
					detail: {
						container: document.getElementById(
							'header-menu-sidebar'
						),
						close: closeNavSelector,
						firstFocus: closeNavSelector,
						backFocus: target,
					},
				})
			);
		}
	}
};
