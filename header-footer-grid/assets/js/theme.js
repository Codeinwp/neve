/**
 * HFG theme javaScript.
 *
 * @since 1.0.0
 *
 */

"use strict"; // prevent global namespace pollution

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
	Element.prototype.closest = function( s ) {
		let el = this;
		if ( !document.documentElement.contains( el ) ) {
			return null;
		}
		do {
			if ( el.matches( s ) ) {
				return el;
			}
			el = el.parentElement || el.parentNode;
		} while ( el !== null && el.nodeType === 1 );
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
		if ( "ontouchstart" in document.documentElement ) {
			document.body.classList.add( "ontouch-screen" );
		} else {
			document.body.classList.add( "not-touch-screen" );
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
		// let themeMenuSidebar;
		// if ( ! document.body.classList.contains( "menu_sidebar_dropdown" ) ) {
		// 	themeMenuSidebar = document.getElementById( "header-menu-sidebar" );
		// 	if ( themeMenuSidebar ) {
		// 		document.body.append( themeMenuSidebar );
		// 	}
		// }

		document.addEventListener(
			"customize_control_sidebar",
			function( e ) {
				if ( e.detail === "open" ) {
					this.toggleMenuSidebar( false );
				}
				if ( e.detail === "close" ) {
					this.closeMenuSidebar();
				}
			}.bind( this )
		);

		document.addEventListener(
			"customize_section_opened",
			function( e ) {
				if ( e.detail === "header_sidebar" ) {
					this.toggleMenuSidebar( false );
				}
			}.bind( this )
		);

		let menuMobileToggleButtons = document.querySelectorAll(
			".menu-mobile-toggle"
		);
		/**
		 * When click to toggle buttons.
		 */
		this.addEvent(
			menuMobileToggleButtons,
			"click",
			function( e ) {
				e.preventDefault();
				this.toggleMenuSidebar();
			}.bind( this )
		);

		let closeButtons = document.querySelectorAll(
			"#header-menu-sidebar .close-panel, .close-sidebar-panel"
		);

		/**
		 * When click close buttons.
		 */
		this.addEvent(
			closeButtons,
			"click",
			function( e ) {
				e.preventDefault();
				this.closeMenuSidebar();
			}.bind( this )
		);

		/**
		 * When click to outside of menu sidebar.
		 */
		this.addEvent(
			document,
			"click",
			function( e ) {
				if ( document.body.classList.contains( "is-menu-sidebar" ) ) {
					let menuSidebar = document.getElementById(
						"header-menu-sidebar"
					);
					let buttons = document.querySelectorAll(
						".menu-mobile-toggle"
					);
					let outside = false;
					// If the click happened inside the the container, bail
					if (
						!e.target.closest( "#header-menu-sidebar" ) &&
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
								e.target.closest( ".menu-mobile-toggle" ) ||
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
			"keyup",
			function( e ) {
				if ( e.keyCode === 27 ) {
					this.closeMenuSidebar();
				}
			}.bind( this )
		);
	};

	HFG.prototype.toggleMobileSubmenu = function( e ) {
		e.preventDefault();
		let that = this;
		let li = e.target.closest( "li" );
		let firstSubmenu = li.querySelectorAll(
			":scope  > .sub-menu, .sub-lv-0"
		);

		if ( !li.classList.contains( "open-sub" ) ) {
			// Show the sub menu.
			li.classList.add( "open-sub" );
			if ( firstSubmenu.length ) {
				for ( let i = 0; i < firstSubmenu.length; i++ ) {
					that.slideDown(
						firstSubmenu[i],
						this.options.menuToggleDuration,
						function() {
							li.classList.add( "open-sub" );
						}
					);
				}
			}
		} else {
			// Hide the sub menu.
			if ( firstSubmenu.length ) {
				for ( let i = 0; i < firstSubmenu.length; i++ ) {
					that.slideUp(
						firstSubmenu[i],
						this.options.menuToggleDuration,
						function() {
							li.classList.remove( "open-sub" );
						}
					);
				}
			}
		}
	};

	/**
	 * Add events listener for mobile toggle button.
	 *
	 * @param toggleIcon
	 */
	HFG.prototype.toggleMobileSubmenuEvents = function( toggleIcon ) {
		toggleIcon.addEventListener(
			"click",
			this.toggleMobileSubmenu.bind( this )
		);
	};

	/**
	 * Initial mobile submenu.
	 */
	HFG.prototype.initMobileSubMenu = function() {
		let menuChildren = document.querySelectorAll(
			"#header-menu-sidebar .nav-menu-mobile .menu-item-has-children"
		);

		if ( menuChildren.length ) {

			for ( let i = 0; i < menuChildren.length; i++ ) {
				let child = menuChildren[i];

				if ( !child.classList.contains( "toggle--added" ) ) {
					child.classList.add( "toggle--added" );

					let fistLink = child.querySelector( ":scope > a" );
					let d = fistLink.cloneNode( true );


					let toggleButton = document.createElement( "span" );
					toggleButton.classList.add( "nav-toggle-icon" );
					toggleButton.innerHTML = '<i class="nav-icon-angle"></i>';

					fistLink.parentNode.insertBefore( toggleButton, fistLink );
					let submenu = child.querySelector( ":scope > .sub-menu" );
					if( '1' !== HFG_JS.sidebar_menu_no_duplicator ){
						submenu.prepend( d );
					}
					let firstSubmenu = child.querySelectorAll(
						":scope  > .sub-menu, .sub-lv-0"
					);
					if ( firstSubmenu.length ) {
						for ( let j = 0; j < firstSubmenu.length; j++ ) {
							this.slideUp( firstSubmenu[j], 0 );
						}
					}
					if( '1' !== HFG_JS.sidebar_menu_no_duplicator ){
						let dWrapper = document.createElement( "li" );
						d.parentNode.prepend( dWrapper );
						dWrapper.appendChild( d );
					}
					this.toggleMobileSubmenuEvents( toggleButton );
				}
			}
		}
	};

	/**
	 * SideUp
	 *
	 * @param element
	 * @param duration
	 * @param callBack
	 */
	HFG.prototype.slideUp = function( element, duration, callBack ) {
		if ( typeof duration !== "number" ) {
			duration = 0;
		}

		if ( element._slideDownTimeOut ) {
			clearTimeout( element._slideDownTimeOut );
			element._slideDownTimeOut = false;
		}

		// Get original height.
		let offset = element.getBoundingClientRect();
		// Back to default.
		element.style.overflow = "hidden";
		element.style.height = offset.height + "px";
		element.style.transition = "height " + duration + "ms linear";
		setTimeout( function() {
			element.style.height = "0px";
		}, 20 );

		element._sideUpTimeOut = setTimeout( function() {
			element.style.transition = "";
			if ( typeof callBack === "function" ) {
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
	HFG.prototype.slideDown = function( element, duration, callBack ) {
		if ( typeof duration !== "number" ) {
			duration = 0;
		}

		if ( element._sideUpTimeOut ) {
			clearTimeout( element._sideUpTimeOut );
			element._sideUpTimeOut = false;
		}

		// Reset element styling to get orignal height.
		element.style.height = "initial";
		element.style.overflow = "initial";
		element.style.transition = "";
		// Get original height.
		let offset = element.getBoundingClientRect();
		// Back to default.
		element.style.height = "0px";
		element.style.overflow = "hidden";
		element.style.transition = "height " + duration + "ms linear";
		setTimeout( function() {
			element.style.height = offset.height + "px";
		}, 50 );

		element._sideUpTimeOut = setTimeout( function() {
			element.style.height = "";
			element.style.overflow = "";
			element.style.transition = "";
			if ( typeof callBack === "function" ) {
				callBack.call( this );
			}
		}, duration );
	};

	HFG.prototype.insertMenuOverlayClass = function() {
		let navMobile = document.querySelector( ".nav-menu-mobile" );
		if ( navMobile ) {
			if (
				document.body.classList.contains( "menu_sidebar_slide_overlay" )
			) {
				navMobile.classList.add( "nav-menu-overlay" );
			} else {
				navMobile.classList.remove( "nav-menu-overlay" );
			}
		}
	};

	/**
	 * Toggle Element class name.
	 *
	 * @param element
	 * @param className
	 */
	HFG.prototype.toggleClass = function( element, className ) {
		if ( element instanceof NodeList ) {
			for ( let i = 0; i < element.length; i++ ) {
				if ( element[i].classList.contains( className ) ) {
					element[i].classList.remove( className );
				} else {
					element[i].classList.add( className );
				}
			}
		} else if ( element instanceof Node || element instanceof Element ) {
			if ( element.classList.contains( className ) ) {
				element.classList.remove( className );
			} else {
				element.classList.add( className );
			}
		}
	};

	/**
	 * Add class to element.
	 *
	 * @param element
	 * @param className
	 */
	HFG.prototype.addClass = function( element, className ) {
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
	HFG.prototype.removeClass = function( element, className ) {
		// Split each class by space.
		let classes = className.split( " " );
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
	HFG.prototype.addEvent = function( element, event, callBack ) {
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
		document.body.classList.add( "hiding-header-menu-sidebar" );
		document.body.classList.remove( "is-menu-sidebar" );
		let toggleButtons = document.querySelectorAll(
			".menu-mobile-toggle, .menu-mobile-toggle .hamburger"
		);
		this.removeClass( toggleButtons, "is-active" );

		/**
		 * For dropdown sidebar.
		 */
		if ( document.body.classList.contains( "menu_sidebar_dropdown" ) ) {
			this.removeClass( document.body, "hiding-header-menu-sidebar" );
			let menuSidebar = document.getElementById( "header-menu-sidebar" );

			this.slideUp(
				menuSidebar,
				300,
				function() {
					menuSidebar.style.height = 0;
					menuSidebar.style.display = "block";
				}.bind( this )
			);
			return;
		}
		// Else slide sidebar.
		setTimeout(
			function() {
				this.removeClass(
					document.body,
					"hiding-header-menu-sidebar"
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
	HFG.prototype.toggleMenuSidebar = function( toggle ) {
		if ( typeof toggle === "undefined" ) {
			toggle = true;
		}

		document.body.classList.remove( "hiding-header-menu-sidebar" );

		if ( !toggle ) {
			document.body.classList.add( "is-menu-sidebar" );
		} else {
			this.toggleClass( document.body, "is-menu-sidebar" );
		}

		if ( document.body.classList.contains( "menu_sidebar_dropdown" ) ) {
			let buttons = document.querySelectorAll(
				".menu-mobile-toggle, .menu-mobile-toggle .hamburger"
			);
			if ( toggle ) {
				this.toggleClass( buttons, "is-active" );
			} else {
				this.addClass( buttons, "is-active" );
			}

			if ( document.body.classList.contains( "is-menu-sidebar" ) ) {
				let menuSidebar = document.getElementById(
					"header-menu-sidebar"
				);
				let menuSidebarInner = document.getElementById(
					"header-menu-sidebar-inner"
				);
				let offset = menuSidebarInner.getBoundingClientRect();
				let h = offset.height;

				this.slideDown( menuSidebar, 300, function() {
					menuSidebar.style.height = h + "px";
				} );
			} else {
				if ( toggle ) {
					this.closeMenuSidebar();
				}
			}
		}
	};

	/**
	 * Wrapper element
	 *
	 *
	 * @return Element
	 * @param element
	 * @param tag
	 */
	HFG.prototype.wrapper = function( element, tag ) {
		if ( typeof tag === "undefined" ) {
			tag = "div";
		}
		let wrapper = document.createElement( tag );
		element.parentNode.replaceChild( wrapper, element );
		wrapper.appendChild( element );
		return wrapper;
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
			"header_builder_panel_changed",
			function() {
				this.initMenuSidebar();
				this.initMobileSubMenu();
				this.insertMenuOverlayClass();
			}.bind( this )
		);
		// Add actions when window resize.
		window.addEventListener(
			"resize",
			function() {
				// Reset search form alignment.
				this.removeClass(
					document.querySelectorAll( ".header-search_icon-item" ),
					"active"
				);
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
			document.documentElement.style.setProperty( "--vh", vh+'px' );
			document.documentElement.style.setProperty( "--vw", vw+'px' );

			window.addEventListener( "resize", function() {
				let vh = window.innerHeight * 0.01;
				let vw = window.innerWidth * 0.01;
				document.documentElement.style.setProperty( "--vh", vh+'px' );
				document.documentElement.style.setProperty( "--vw", vw+'px' );
			} );
		}
	} )();

} )();


/**
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	let container, menu, links, i, len;

	container = document.getElementById( "site-navigation-main-desktop" );
	if ( !container ) {
		return;
	}

	menu = container.getElementsByTagName( "ul" )[0];
	// Hide menu toggle button if menu is empty and return early.
	if ( "undefined" === typeof menu ) {
		return;
	}

	menu.setAttribute( "aria-expanded", "false" );
	if ( -1 === menu.className.indexOf( "nav-menu" ) ) {
		menu.className += " nav-menu";
	}

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName( "a" );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( "focus", toggleFocus, true );
		links[i].addEventListener( "blur", toggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		let self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( "nav-menu" ) ) {
			// On li elements toggle the class .focus.
			if ( "li" === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( "focus" ) ) {
					self.className = self.className.replace( " focus", "" );
				} else {
					self.className += " focus";
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function( container ) {
		let touchStartFn,
			i,
			parentLink = container.querySelectorAll(
				".menu-item-has-children > a, .page_item_has_children > a"
			);

		if ( "ontouchstart" in window ) {
			touchStartFn = function( e ) {
				let menuItem = this.parentNode,
					i;

				if ( !menuItem.classList.contains( "focus" ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove(
							"focus"
						);
					}
					menuItem.classList.add( "focus" );
				} else {
					menuItem.classList.remove( "focus" );
				}
			};

			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener(
					"touchstart",
					touchStartFn,
					false
				);
			}
		}
	} )( container );
} )();

/**
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
( function() {
	let isIe = /(trident|msie)/i.test( navigator.userAgent );

	if ( isIe && document.getElementById && window.addEventListener ) {
		window.addEventListener(
			"hashchange",
			function() {
				let id = location.hash.substring( 1 ),
					element;

				if ( !/^[A-z0-9_-]+$/.test( id ) ) {
					return;
				}

				element = document.getElementById( id );

				if ( element ) {
					if (
						!/^(?:a|select|input|button|textarea)$/i.test(
							element.tagName
						)
					) {
						element.tabIndex = -1;
					}

					element.focus();
				}
			},
			false
		);
	}
} )();
