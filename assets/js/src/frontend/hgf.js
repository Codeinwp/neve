/* global NeveProperties */
/* jshint esversion: 6 */
import { addEvent, addClass, removeClass } from '../utils.js';

export const HFG = function () {
	this.options = {
		menuToggleDuration: 300,
	};
	this.init();
};

/**
 * Init mobile sidebar.
 *
 * @param skipSidebar
 */
HFG.prototype.init = function ( skipSidebar = false ) {
	if ( skipSidebar === false ) {
		const closeButtons = document.querySelectorAll(
			'.close-sidebar-panel .navbar-toggle'
		);
		addEvent( closeButtons, 'click', () => {
			this.toggleMenuSidebar( false );
		} );
	}

	const menuMobileToggleButtons = document.querySelectorAll(
		'.menu-mobile-toggle'
	);
	addEvent( menuMobileToggleButtons, 'click', () => {
		this.toggleMenuSidebar( true );
	} );

	/**
	 * When click to outside of menu sidebar.
	 */
	const overlay = document.querySelector( '.header-menu-sidebar-overlay' );
	addEvent(
		overlay,
		'click',
		function () {
			this.toggleMenuSidebar( false );
		}.bind( this )
	);
};

/**
 * Toggle menu sidebar.
 *
 * @param toggle
 */
HFG.prototype.toggleMenuSidebar = function ( toggle ) {
	const buttons = document.querySelectorAll( '.menu-mobile-toggle' );
	removeClass( document.body, 'hiding-header-menu-sidebar' );

	if (
		( ! NeveProperties.isCustomize &&
			document.body.classList.contains( 'is-menu-sidebar' ) ) ||
		toggle === false
	) {
		const navClickaway = document.querySelector( '.nav-clickaway-overlay' );
		if ( navClickaway !== null ) {
			navClickaway.parentNode.removeChild( navClickaway );
		}
		addClass( document.body, 'hiding-header-menu-sidebar' );
		removeClass( document.body, 'is-menu-sidebar' );
		removeClass( buttons, 'is-active' );
		// Remove the hiding class after 1 second.
		setTimeout(
			function () {
				removeClass( document.body, 'hiding-header-menu-sidebar' );
			}.bind( this ),
			1000
		);
	} else {
		addClass( document.body, 'is-menu-sidebar' );
		addClass( buttons, 'is-active' );
	}
};
