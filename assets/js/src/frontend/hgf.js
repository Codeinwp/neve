/* jshint esversion: 6 */
import {
	addEvent,
	addClass,
	removeClass,
	neveEach
} from '../utils.js';

export let HFG = function() {
	this.options = {
		menuToggleDuration: 300
	};
	this.init();
};

/**
 * Init mobile sidebar.
 */
HFG.prototype.init = function(skipSidebar = false) {

	let selector = '.menu-mobile-toggle';

	if ( skipSidebar === false ) {
		selector += ', #header-menu-sidebar .close-panel, .close-sidebar-panel';
	}

	let menuMobileToggleButtons = document.querySelectorAll( selector );
	let handleToggle = function(e) {
		e.preventDefault();
		this.toggleMenuSidebar();
	};

	/**
	 * When click to toggle buttons.
	 */
	neveEach(menuMobileToggleButtons, function(item) {
		item.removeEventListener( 'click', handleToggle.bind( this ) );
	}.bind( this ) );

	addEvent( menuMobileToggleButtons, 'click', handleToggle.bind( this ) );

	/**
	 * When click to outside of menu sidebar.
	 */
	let overlay = document.querySelector( '.header-menu-sidebar-overlay' );
	addEvent( overlay, 'click', function() {
				this.toggleMenuSidebar( false );
			}.bind( this )
	);
};

/**
 * Toggle menu sidebar.
 *
 * @param toggle
 */
HFG.prototype.toggleMenuSidebar = function(toggle) {
	let buttons = document.querySelectorAll( '.menu-mobile-toggle' );
	removeClass( document.body, 'hiding-header-menu-sidebar' );

	if ( document.body.classList.contains( 'is-menu-sidebar' ) ||
			toggle === false ) {
		addClass( document.body, 'hiding-header-menu-sidebar' );
		removeClass( document.body, 'is-menu-sidebar' );
		removeClass( buttons, 'is-active' );
		// Remove the hiding class after 1 second.
		setTimeout( function() {
			removeClass( document.body, 'hiding-header-menu-sidebar' );
		}.bind( this ), 1000 );
	} else {
		addClass( document.body, 'is-menu-sidebar' );
		addClass( buttons, 'is-active' );
	}
};

