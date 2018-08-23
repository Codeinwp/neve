(function ( $ ) {
	var utils = $.neveUtilities;

	$.neveNavigation = {
		'init': function () {
			this.repositionDropdowns();
			this.handleResponsiveNav();
			this.handleMobileDropdowns();
		},
		'repositionDropdowns': function () {
			if( utils.isMobile() ) {
				return false;
			}
			var windowWidth = window.innerWidth;
			//Do nothing without dropdowns.
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
		'handleResponsiveNav': function () {
			$( '.navbar-toggle' ).on( 'click', function () {
				if( ! utils.isMobile() ) {
					return false;
				}
				$('.dropdown-open').removeClass('dropdown-open');
				$( '#nv-primary-navigation' ).toggleClass( 'responsive-opened' );
				$( this ).toggleClass( 'active' );
				$( 'html' ).toggleClass( 'menu-opened' );
			} );
		},
		'handleMobileDropdowns': function () {
			$( '.menu-item-has-children > a:after' ).on( 'touchstart', function (e) {
				if( ! utils.isMobile() ) {
					return false;
				}
				if( ! $(this).parent().hasClass('dropdown-open') === true ) {
					e.preventDefault();
					$(this).parent().toggleClass('dropdown-open');
				}
			} );
		},
	};
}( jQuery ));
