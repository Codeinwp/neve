import { isMobile } from "./utils.js";

export const initNavigation = function () {
	repositionDropdowns();
	handleScrollLinks();
	handleMobileDropdowns();
	handleSearch();
};

/**
 * Reposition drop downs in case they go off screen.
 * @returns {boolean}
 */
const repositionDropdowns = function () {
	if (isMobile()) return false;

	let dropDowns = document.querySelectorAll( '.sub-menu .sub-menu' );
	if (dropDowns.length === 0) return false;

	let windowWidth = window.innerWidth;
	forEach( dropDowns, function ( dropDown ) {
		let bounding = dropDown.offset().left;
		if (/webkit.*mobile/i.test( navigator.userAgent )) {
			bounding -= window.scrollX;
		}
		let dropDownWidth = dropDown.outerWidth();
		if (bounding + dropDownWidth >= windowWidth) {
			dropDown.style.right = '100%';
			dropDown.style.left = 'auto';
		}
	} );
};

/**
 * Handle links that link to the current page.
 * @returns {boolean}
 */
const handleScrollLinks = function () {
	let links = document.querySelectorAll( '.nv-nav-wrap a' );
	if (links.length === 0) return false;
	links.forEach( function ( link ) {
		link.addEventListener( 'click', function ( event ) {
			let href = event.target.getAttribute( 'href' );
			if (href === null) return false;

			console.log(href);
			console.log(window.location.href);
			if (href.includes( window.location.href ) || href.charAt( 0 ) === '#') {
				document.body.classList.remove( 'is-menu-sidebar' );
				document.querySelectorAll( '.dropdown-open' ).forEach( function ( element ) {
					element.classList.remove( 'dropdown-open' );
				} );
			}
		} );
	} );
};

const handleMobileDropdowns = function () {
	let carets = document.querySelectorAll( '.caret-wrap' );
	carets.forEach( function ( caret ) {
		caret.addEventListener( 'click', function ( event ) {
			this.classList.toggle( 'dropdown-open' );
			this.parentNode.parentNode.querySelector('.sub-menu').classList.toggle( 'dropdown-open' );

			if( isMobile() ) return false;


		} );
	} )
// 			$( '.caret-wrap' ).on( 'click', function () {
// 				$( this ).toggleClass( 'dropdown-open' );
// 				$( this ).closest( 'li' ).find( 'ul.sub-menu' ).toggleClass( 'dropdown-open' );
// 				if (!utils.isMobile()) {
// 					self.createNavOverlay();
// 				}
// 				return false;
// 			} );
};
const handleSearch = function () {

};
// ( function ( $ ) {
// 	var utils = $.neveUtilities;
//
// 	$.neveNavigation = {
// 		/**
// 		 * Handle links that point to the same page
// 		 */
// 		'handleScrollLinks': function () {
//
// 		},
// 		/**
// 		 * Handle the mobile dropdowns.
// 		 */
// 		'handleMobileDropdowns': function () {
// 			var self = this;
// 			$( '.caret-wrap' ).on( 'click', function () {
// 				$( this ).toggleClass( 'dropdown-open' );
// 				$( this ).closest( 'li' ).find( 'ul.sub-menu' ).toggleClass( 'dropdown-open' );
// 				if (!utils.isMobile()) {
// 					self.createNavOverlay();
// 				}
// 				return false;
// 			} );
// 		},
// 		/**
// 		 * Handle the nav-search.
// 		 */
// 		'handleSearch': function () {
// 			var self = this;
// 			$( '.nv-nav-search' ).on( 'touchstart click', function ( e ) {
// 				e.stopPropagation();
// 			} );
//
// 			$( '.menu-item-nav-search' ).on( 'click touchstart focus', function () {
// 				$( this ).addClass( 'active' );
// 				$( 'html' ).addClass( 'menu-opened' );
// 				if (utils.isMobile()) {
// 					return false;
// 				}
// 				self.createNavOverlay();
// 				return false;
// 			} );
//
// 			$( '.close-responsive-search' ).on( 'touchstart click', function ( e ) {
// 				e.preventDefault();
// 				$( '.responsive-nav-search' ).removeClass( 'active' );
// 				$( 'html' ).removeClass( 'menu-opened' );
// 			} );
//
// 			$( '.menu-item-nav-search .search-submit' ).bind( 'focusout', function () {
// 				$( '.menu-item-nav-search' ).removeClass( 'active' );
// 				$( '.nav-clickaway-overlay' ).remove();
// 			} );
// 		},
// 		/**
// 		 * Create helper overlay used for touch dropdowns.
// 		 * @returns {boolean}
// 		 */
// 		'createNavOverlay': function () {
// 			var navClickaway = $( '.nav-clickaway-overlay' );
// 			if (navClickaway.length > 0) {
// 				return false;
// 			}
// 			navClickaway = document.createElement( 'div' );
// 			navClickaway.setAttribute( 'class', 'nav-clickaway-overlay' );
// 			$( '#nv-primary-navigation' ).after( navClickaway );
//
// 			$( navClickaway ).on( 'touchstart click', function () {
// 				$( this ).remove();
// 				$( '#nv-primary-navigation li, .menu-item-nav-search' ).removeClass( 'active dropdown-open' );
// 			} );
// 			return false;
// 		},
// 	};
// }( jQuery ) );
