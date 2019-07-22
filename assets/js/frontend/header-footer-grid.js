/* jshint esversion: 6 */
export const hfg = function() {

	/**
	 * matches() pollyfil
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
	 */
	if ( !Element.prototype.matches ) {
		Element.prototype.matches =
				Element.prototype.msMatchesSelector ||
				Element.prototype.webkitMatchesSelector;
	}

	/**
	 * closest() pollyfil
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
	 */
	if ( !Element.prototype.closest ) {
		Element.prototype.closest = function(s) {
			let el = this;
			if ( !document.documentElement.contains( el ) ) {
				return null;
			}
			do {
				if ( el.matches( s ) ) {
					return el;
				}
				el = el.parentElement || el.parentNode;
			} while (el !== null && el.nodeType === 1);
			return null;
		};
	}

	/**
	 * Main HFG Scripts
	 */
	( function() {

		let HFG = function() {
			this.options = {
				menuToggleDuration: 300
			};

			this.init();
		};

		/**
		 * Add body class to check touch screen.
		 */
		HFG.prototype.checkTouchScreen = function() {
			if ( 'ontouchstart' in document.documentElement ) {
				document.body.classList.add( 'ontouch-screen' );
			} else {
				document.body.classList.add( 'not-touch-screen' );
			}
		};

		/**
		 * Check if current mobile viewing.
		 *
		 * @return bool
		 */
		HFG.prototype.isMobile = function() {
			return !!( navigator.userAgent.match( /Android/i ) ||
					navigator.userAgent.match( /webOS/i ) ||
					navigator.userAgent.match( /iPhone/i ) ||
					navigator.userAgent.match( /iPad/i ) ||
					navigator.userAgent.match( /iPod/i ) ||
					navigator.userAgent.match( /BlackBerry/i ) ||
					navigator.userAgent.match( /Windows Phone/i ) );
		};

		/**
		 * Init mobile sidebar.
		 */
		HFG.prototype.initMenuSidebar = function() {

			document.addEventListener(
					'customize_control_sidebar',
					function(e) {
						if ( e.detail === 'open' ) {
							this.toggleMenuSidebar( false );
						}
						if ( e.detail === 'close' ) {
							this.closeMenuSidebar();
						}
					}.bind( this )
			);

			document.addEventListener(
					'customize_section_opened',
					function(e) {
						if ( e.detail === 'header_sidebar' ) {
							this.toggleMenuSidebar( false );
						}
					}.bind( this )
			);

			let menuMobileToggleButtons = document.querySelectorAll(
					'.menu-mobile-toggle'
			);
			/**
			 * When click to toggle buttons.
			 */
			this.addEvent(
					menuMobileToggleButtons,
					'click',
					function(e) {
						e.preventDefault();
						this.toggleMenuSidebar();
					}.bind( this )
			);

			let closeButtons = document.querySelectorAll(
					'#header-menu-sidebar .close-panel, .close-sidebar-panel'
			);

			/**
			 * When click close buttons.
			 */
			this.addEvent(
					closeButtons,
					'click',
					function(e) {
						e.preventDefault();
						this.closeMenuSidebar();
					}.bind( this )
			);

			/**
			 * When click to outside of menu sidebar.
			 */
			this.addEvent(
					document,
					'click',
					function(e) {
						if ( document.body.classList.contains( 'is-menu-sidebar' ) ) {
							let menuSidebar = document.getElementById(
									'header-menu-sidebar'
							);
							let buttons = document.querySelectorAll(
									'.menu-mobile-toggle'
							);
							let outside = false;
							// If the click happened inside the the container, bail
							if (
									!e.target.closest( '#header-menu-sidebar' ) &&
									e.target !== menuSidebar
							) {
								// Outside menu sidebar.
								outside = true;
							}

							// Check if not click to menu toggle buttons.
							let onButton = false;
							if ( buttons.length ) {
								for ( let i = 0; i < buttons.length; i++ ) {
									// If click on toggle button.
									if (
											e.target.closest( '.menu-mobile-toggle' ) ||
											e.target === buttons[i]
									) {
										onButton = true;
									}
								}
							}

							if ( outside && !onButton ) {
								this.closeMenuSidebar();
							}
						}
					}.bind( this )
			);

			this.addEvent(
					document,
					'keyup',
					function(e) {
						if ( e.keyCode === 27 ) {
							this.closeMenuSidebar();
						}
					}.bind( this )
			);
		};

		/**
		 * SlideUp
		 *
		 * @param element
		 * @param duration
		 * @param callBack
		 */
		HFG.prototype.slideUp = function(element, duration, callBack) {
			if ( typeof duration !== 'number' ) {
				duration = 0;
			}

			if ( element._slideDownTimeOut ) {
				clearTimeout( element._slideDownTimeOut );
				element._slideDownTimeOut = false;
			}

			// Get original height.
			let offset = element.getBoundingClientRect();
			// Back to default.
			element.style.overflow = 'hidden';
			element.style.height = offset.height + 'px';
			element.style.transition = 'height ' + duration + 'ms linear';
			setTimeout( function() {
				element.style.height = '0px';
			}, 20 );

			element._sideUpTimeOut = setTimeout( function() {
				element.style.transition = '';
				if ( typeof callBack === 'function' ) {
					callBack.call( this );
				}
			}, duration + 20 );
		};

		/**
		 *
		 * @param element
		 * @param duration
		 * @param callBack
		 */
		HFG.prototype.slideDown = function(element, duration, callBack) {
			if ( typeof duration !== 'number' ) {
				duration = 0;
			}

			if ( element._sideUpTimeOut ) {
				clearTimeout( element._sideUpTimeOut );
				element._sideUpTimeOut = false;
			}

			// Reset element styling to get orignal height.
			element.style.height = 'initial';
			element.style.overflow = 'initial';
			element.style.transition = '';
			// Get original height.
			let offset = element.getBoundingClientRect();
			// Back to default.
			element.style.height = '0px';
			element.style.overflow = 'hidden';
			element.style.transition = 'height ' + duration + 'ms linear';
			setTimeout( function() {
				element.style.height = offset.height + 'px';
			}, 50 );

			element._sideUpTimeOut = setTimeout( function() {
				element.style.height = '';
				element.style.overflow = '';
				element.style.transition = '';
				if ( typeof callBack === 'function' ) {
					callBack.call( this );
				}
			}, duration );
		};

		HFG.prototype.insertMenuOverlayClass = function() {
			let navMobile = document.querySelector( '.nav-menu-mobile' );
			if ( navMobile ) {
				if (
						document.body.classList.contains( 'menu_sidebar_slide_overlay' )
				) {
					navMobile.classList.add( 'nav-menu-overlay' );
				} else {
					navMobile.classList.remove( 'nav-menu-overlay' );
				}
			}
		};

		/**
		 * Toggle Element class name.
		 *
		 * @param element
		 * @param className
		 */
		HFG.prototype.toggleClass = function(element, className) {
			if ( element instanceof NodeList ) {
				for ( let i = 0; i < element.length; i++ ) {
					element[i].classList.toggle( className );
				}
			} else if ( element instanceof Node || element instanceof Element ) {
				element.classList.toggle( className );
			}
		};

		/**
		 * Add class to element.
		 *
		 * @param element
		 * @param className
		 */
		HFG.prototype.addClass = function(element, className) {
			if ( element instanceof NodeList ) {
				for ( let i = 0; i < element.length; i++ ) {
					element[i].classList.add( className );
				}
			} else if ( element instanceof Node || element instanceof Element ) {
				element.classList.add( className );
			}
		};

		/**
		 * Remove class name from element.
		 *
		 * @param element
		 * @param className
		 */
		HFG.prototype.removeClass = function(element, className) {
			// Split each class by space.
			let classes = className.split( ' ' );
			if ( element instanceof NodeList ) {
				for ( let i = 0; i < element.length; i++ ) {
					for ( let j = 0; j < classes.length; j++ ) {
						element[i].classList.remove( classes[j] );
					}
				}
			} else if ( element instanceof Node || element instanceof Element ) {
				for ( let j = 0; j < classes.length; j++ ) {
					element.classList.remove( classes[j] );
				}
			}
		};

		/**
		 * Add event handle to elements.
		 *
		 * @param element
		 * @param event
		 * @param callBack
		 */
		HFG.prototype.addEvent = function(element, event, callBack) {
			if ( element instanceof NodeList ) {
				for ( let i = 0; i < element.length; i++ ) {
					element[i].addEventListener( event, callBack );
				}
			} else if ( element instanceof Node || element instanceof Element ) {
				element.addEventListener( event, callBack );
			}
		};

		/**
		 * Close menu sidebar.
		 */
		HFG.prototype.closeMenuSidebar = function() {
			document.body.classList.add( 'hiding-header-menu-sidebar' );
			document.body.classList.remove( 'is-menu-sidebar' );
			let toggleButtons = document.querySelectorAll(
					'.menu-mobile-toggle, .menu-mobile-toggle .hamburger'
			);
			this.removeClass( toggleButtons, 'is-active' );

			/**
			 * For dropdown sidebar.
			 */
			if ( document.body.classList.contains( 'menu_sidebar_dropdown' ) ) {
				this.removeClass( document.body, 'hiding-header-menu-sidebar' );
				let menuSidebar = document.getElementById( 'header-menu-sidebar' );

				this.slideUp(
						menuSidebar,
						300,
						function() {
							menuSidebar.style.height = 0;
							menuSidebar.style.display = 'block';
						}.bind( this )
				);
				return;
			}
			// Else slide sidebar.
			setTimeout(
					function() {
						this.removeClass(
								document.body,
								'hiding-header-menu-sidebar'
						);
					}.bind( this ),
					1000
			);
		};

		/**
		 * Toggle menu sidebar.
		 *
		 * @param toggle
		 */
		HFG.prototype.toggleMenuSidebar = function(toggle) {
			if ( typeof toggle === 'undefined' ) {
				toggle = true;
			}

			document.body.classList.remove( 'hiding-header-menu-sidebar' );

			if ( !toggle ) {
				document.body.classList.add( 'is-menu-sidebar' );
			} else {
				this.toggleClass( document.body, 'is-menu-sidebar' );
			}

			if ( document.body.classList.contains( 'menu_sidebar_dropdown' ) ) {
				let buttons = document.querySelectorAll(
						'.menu-mobile-toggle, .menu-mobile-toggle .hamburger'
				);
				if ( toggle ) {
					this.toggleClass( buttons, 'is-active' );
				} else {
					this.addClass( buttons, 'is-active' );
				}

				if ( document.body.classList.contains( 'is-menu-sidebar' ) ) {
					let menuSidebar = document.getElementById(
							'header-menu-sidebar'
					);
					let menuSidebarInner = document.getElementById(
							'header-menu-sidebar-inner'
					);
					let offset = menuSidebarInner.getBoundingClientRect();
					let h = offset.height;

					this.slideDown( menuSidebar, 300, function() {
						menuSidebar.style.height = h + 'px';
					} );
				} else {
					if ( toggle ) {
						this.closeMenuSidebar();
					}
				}
			}
		};

		/**
		 * Initial
		 */
		HFG.prototype.init = function() {
			this.checkTouchScreen();
			this.insertMenuOverlayClass();
			this.initMenuSidebar();

			/**
			 * Add action when Header Panel rendered by customizer.
			 */
			document.addEventListener(
					'header_builder_panel_changed',
					function() {
						this.initMenuSidebar();
						this.initMobileSubMenu();
						this.insertMenuOverlayClass();
					}.bind( this )
			);
		};

		/**
		 * Check is mobile.
		 * This may use in plugins.
		 *
		 * @deprecated 0.2.6
		 */
		function hfgIsMobile() {
			return HFG.isMobile();
		}

		window.hfg_is_mobile = hfgIsMobile;
		window.HFG = new HFG();

		/**
		 * Fix viewport units on Mobile.
		 */
		( function() {
			if ( window.HFG.isMobile() ) {
				/**
				 * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
				 */
						// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
				let vh = window.innerHeight * 0.01;
				let vw = window.innerWidth * 0.01;
				// Then we set the value in the --vh, --vw custom property to the root of the document
				document.documentElement.style.setProperty( '--vh', vh + 'px' );
				document.documentElement.style.setProperty( '--vw', vw + 'px' );

				window.addEventListener( 'resize', function() {
					let vh = window.innerHeight * 0.01;
					let vw = window.innerWidth * 0.01;
					document.documentElement.style.setProperty( '--vh', vh + 'px' );
					document.documentElement.style.setProperty( '--vw', vw + 'px' );
				} );
			}
		} )();

	} )();
};
