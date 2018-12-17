(function ( $ ) {
	var utils = $.neveUtilities;

	$.neveNavigation = {
		'init': function () {
			this.repositionDropdowns();
			this.handleResponsiveNav();
			this.handleMobileDropdowns();
			this.handleSearch();
		},
		/**
		 * Reposition dropdowns if they go off-screen.
		 */
		'repositionDropdowns': function () {
			if ( utils.isMobile() ) {
				return false;
			}

			var windowWidth = window.innerWidth;
			//Do nothing without drop-downs.
			var dropDowns = $( '.sub-menu .sub-menu' );
			if ( dropDowns.length === 0 ) {
				return false;
			}
			//Loop drop-downs and move them if needed.
			$.each( dropDowns, function ( key, dropDown ) {
				var submenu = $( dropDown );
				var bounding = submenu.offset().left;
				if ( /webkit.*mobile/i.test( navigator.userAgent ) ) {
					bounding -= window.scrollX;
				}
				var dropDownWidth = submenu.outerWidth();
				if ( bounding + dropDownWidth >= windowWidth ) {
					$( dropDown ).css( { 'right': '100%', 'left': 'auto' } );
				}
			} );
			return false;
		},
		/**
		 * Handle the responsive navigation toggle.
		 */
		'handleResponsiveNav': function () {
			$( '.navbar-toggle' ).on( 'click', function () {
				$( '.dropdown-open' ).removeClass( 'dropdown-open' );
				$( '.nv-navbar' ).toggleClass( 'responsive-opened' );
				$( this ).toggleClass( 'active' );
				if ( this.attributes[ 'aria-expanded' ].value === 'true' ) {
					$( this ).attr( 'aria-expanded', 'false' );
				} else {
					$( this ).attr( 'aria-expanded', 'true' );
				}
				$( 'html' ).toggleClass( 'menu-opened' );
			} );
		},
		/**
		 * Handle the mobile dropdowns.
		 */
		'handleMobileDropdowns': function () {
			var self = this;
			$( '.caret-wrap' ).on( 'click', function () {
				$( this ).toggleClass( 'dropdown-open' );
				$( this ).closest('li').find( 'ul.sub-menu' ).toggleClass( 'dropdown-open' );
				if ( !utils.isMobile() ) {
					self.createNavOverlay();
				}
				return false;
			} );
		},
		/**
		 * Handle the nav-search.
		 */
		'handleSearch': function () {
			var self = this;
			$( '.nv-nav-search' ).on( 'touchstart click', function ( e ) {
				e.stopPropagation();
			} );

			$( '.menu-item-nav-search' ).on( 'touchstart click focus', function () {
				$( this ).addClass( 'active' );
				$( 'html' ).addClass( 'menu-opened' );
				if ( utils.isMobile() ) {
					return false;
				}
				self.createNavOverlay();
				return false;
			} );

			$( '.close-responsive-search' ).on( 'touchstart click', function ( e ) {
				e.preventDefault();
				$( '.responsive-nav-search' ).removeClass( 'active' );
				$( 'html' ).removeClass( 'menu-opened' );
			} );

			$( '.menu-item-nav-search input[type=search]' ).on( 'blur', function () {
				$( '.menu-item-nav-search' ).removeClass( 'active' );
				$( '.nav-clickaway-overlay' ).remove();
			} );
		},
		/**
		 * Create helper overlay used for touch dropdowns.
		 * @returns {boolean}
		 */
		'createNavOverlay': function () {
			var navClickaway = $( '.nav-clickaway-overlay' );
			if ( navClickaway.length > 0 ) {
				return false;
			}
			navClickaway = document.createElement( 'div' );
			navClickaway.setAttribute( 'class', 'nav-clickaway-overlay' );
			$( '#nv-primary-navigation' ).after( navClickaway );

			$( navClickaway ).on( 'touchstart click', function () {
				$( this ).remove();
				$( '#nv-primary-navigation li, .menu-item-nav-search' ).removeClass( 'active dropdown-open' );
			} );
			return false;
		},
	};
}( jQuery ));
