/**
 * Customify theme javaScript.
 *
 * @since 0.2.6
 *
 * Copyright 2017, PressMaximum
 */

"use strict"; // prevent global namespace pollution

/**
 * matches() pollyfil
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
}

/**
 * closest() pollyfil
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;
		if (!document.documentElement.contains(el)) {
			return null;
		}
		do {
			if (el.matches(s)) {
				return el;
			}
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}


/**
 * Main Customify Scripts
 */
(function() {

	var Customify = function() {
		this.options = {
			menuToggleDuration: 300
		};

		this.menuSidebarState = "closed";
		this.isPreviewing = document.body.classList.contains(
			"customize-previewing"
		);

		this.init();
	};

	/**
	 * Add body class to check touch screen.
	 */
	Customify.prototype.checkTouchScreen = function() {
		if ("ontouchstart" in document.documentElement) {
			document.body.classList.add("ontouch-screen");
		} else {
			document.body.classList.add("not-touch-screen");
		}
	};

	/**
	 * Check if current mobile viewing.
	 *
	 * @return bool
	 */
	Customify.prototype.isMobile = function() {
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			return true;
		} else {
			return false;
		}
	};

	/**
	 * Init mobile sidebar.
	 *
	 * @todo Move menu sidebar to body.
	 * @todo Add events to menu buttons.
	 */
	Customify.prototype.initMenuSidebar = function() {
		var themeMenuSidebar;
		if (document.body.classList.contains("menu_sidebar_dropdown")) {
			// $( '#header-menu-sidebar' ).insertAfter( "#masthead" );
		} else {
			themeMenuSidebar = document.getElementById("header-menu-sidebar");
			if (themeMenuSidebar) {
				document.body.append(themeMenuSidebar);
			}
		}

		document.addEventListener(
			"customize_section_opened",
			function(e) {
				if (e.detail === "header_sidebar") {
					this.toggleMenuSidebar(false);
				}
			}.bind(this)
		);

		var menuMobileToggleButtons = document.querySelectorAll(
			".menu-mobile-toggle"
		);
		/**
		 * When click to toggle buttons.
		 */
		this.addEvent(
			menuMobileToggleButtons,
			"click",
			function(e) {
				e.preventDefault();
				this.toggleMenuSidebar();
			}.bind(this)
		);

		var closeButtons = document.querySelectorAll(
			"#header-menu-sidebar .close-panel, .close-sidebar-panel"
		);

		/**
		 * When click close buttons.
		 */
		this.addEvent(
			closeButtons,
			"click",
			function(e) {
				e.preventDefault();
				this.closeMenuSidebar();
			}.bind(this)
		);

		/**
		 * When click to ouside of menu sidebar.
		 */
		this.addEvent(
			document,
			"click",
			function(e) {
				if (document.body.classList.contains("is-menu-sidebar")) {
					var menuSidebar = document.getElementById(
						"header-menu-sidebar"
					);
					var buttons = document.querySelectorAll(
						".menu-mobile-toggle"
					);
					var outside = false;
					// If the click happened inside the the container, bail
					if (
						!e.target.closest("#header-menu-sidebar") &&
						e.target !== menuSidebar
					) {
						// Outside menu sidebar.
						outside = true;
					}

					// Check if not click to menu toggle buttons.
					var onButton = false;
					if (buttons.length) {
						for (var i = 0; i < buttons.length; i++) {
							// If click on toggle button.
							if (
								e.target.closest(".menu-mobile-toggle") ||
								e.target === buttons[i]
							) {
								onButton = true;
							}
						}
					}

					if (outside && !onButton) {
						this.closeMenuSidebar();
					}
				}
			}.bind(this)
		);

		this.addEvent(
			document,
			"keyup",
			function(e) {
				if (e.keyCode === 27) {
					this.closeMenuSidebar();
				}
			}.bind(this)
		);
	};

	/**
	 * Init mobile search form
	 *
	 * @todo Need check
	 */
	Customify.prototype.initMobieSearchForm = function() {
		var mobileSearchForm = document.querySelector(".search-form--mobile");
		if (mobileSearchForm) {
			mobileSearchForm.classList.add(
				"mobile-search-form-sidebar menu-sidebar-panel"
			);
			mobileSearchForm.classList.remove("hide-on-mobile hide-on-tablet");
			document.body.prepend(mobileSearchForm);
		}
	};

	Customify.prototype.toggleMobileSubmenu = function(e) {
		e.preventDefault();
		var that = this;
		var li = e.target.closest("li");
		var firstSubmenu = li.querySelectorAll(
			":scope  > .sub-menu, .sub-lv-0"
		);

		if (!li.classList.contains("open-sub")) {
			// Show the sub menu.
			li.classList.add("open-sub");
			if (firstSubmenu.length) {
				for (var i = 0; i < firstSubmenu.length; i++) {
					that.slideDown(
						firstSubmenu[i],
						this.options.menuToggleDuration,
						function() {
							li.classList.add("open-sub");
						}
					);
				}
			}
		} else {
			// Hide the sub menu.
			if (firstSubmenu.length) {
				for (var i = 0; i < firstSubmenu.length; i++) {
					that.slideUp(
						firstSubmenu[i],
						this.options.menuToggleDuration,
						function() {
							li.classList.remove("open-sub");
						}
					);
				}
			}
		}
	};

	/**
	 * Add events listener for mobile toggle button.
	 *
	 * @param Element toggleIcon
	 */
	Customify.prototype.toggleMobileSubmenuEvents = function(toggleIcon) {
		toggleIcon.addEventListener(
			"click",
			this.toggleMobileSubmenu.bind(this)
		);
	};

	/**
	 * Inital mobile submenu.
	 */
	Customify.prototype.initMobileSubMenu = function() {
		var menuChildren = document.querySelectorAll(
			"#header-menu-sidebar .nav-menu-mobile .menu-item-has-children"
		);
	
		if (menuChildren.length) {
		
			for (var i = 0; i < menuChildren.length; i++) {
				var child = menuChildren[i];
		
				if (!child.classList.contains("toggle--added")) {
					child.classList.add("toggle--added");

					var fistLink = child.querySelector(":scope > a");
					var d = fistLink.cloneNode(true);

					if (this.isPreviewing) {
					}

					var toggleButton = document.createElement("span");
					toggleButton.classList.add("nav-toggle-icon");
					toggleButton.innerHTML = '<i class="nav-icon-angle"></i>';

					fistLink.parentNode.insertBefore(toggleButton, fistLink);
					var submenu = child.querySelector(":scope > .sub-menu");
					if( '1' !== Customify_JS.sidebar_menu_no_duplicator ){
						submenu.prepend(d);
					}
					var firstSubmenu = child.querySelectorAll(
						":scope  > .sub-menu, .sub-lv-0"
					);
					if (firstSubmenu.length) {
						for (var j = 0; j < firstSubmenu.length; j++) {
							this.slideUp(firstSubmenu[j], 0);
						}
					}
					if( '1' !== Customify_JS.sidebar_menu_no_duplicator ){
						var dWrapper = document.createElement("li");
						d.parentNode.prepend(dWrapper);
						dWrapper.appendChild(d);
					}
					this.toggleMobileSubmenuEvents(toggleButton);
				}
			}
		}
	};

	/**
	 * SideUp
	 *
	 * @param Element element
	 * @param number duration
	 * @param function callBack
	 */
	Customify.prototype.slideUp = function(element, duration, callBack) {
		if (typeof duration !== "number") {
			duration = 0;
		}

		// if ( element._sideUpTimeOut ) {
		// 	clearTimeout( element._sideUpTimeOut );
		// 	element._sideUpTimeOut = false;
		// }

		if (element._slideDownTimeOut) {
			clearTimeout(element._slideDownTimeOut);
			element._slideDownTimeOut = false;
		}

		// Get orignal height.
		var offset = element.getBoundingClientRect();
		// Back to default.
		element.style.overflow = "hidden";
		element.style.height = offset.height + "px";
		element.style.transition = "height " + duration + "ms linear";
		setTimeout(function() {
			element.style.height = "0px";
		}, 20);

		element._sideUpTimeOut = setTimeout(function() {
			element.style.transition = "";
			if (typeof callBack === "function") {
				callBack.call(this);
			}
		}, duration + 20);
	};

	/**
	 *
	 * @param Element element
	 * @param number duration
	 * @param function callBack
	 */
	Customify.prototype.slideDown = function(element, duration, callBack) {
		if (typeof duration !== "number") {
			duration = 0;
		}

		if (element._sideUpTimeOut) {
			clearTimeout(element._sideUpTimeOut);
			element._sideUpTimeOut = false;
		}

		// if ( element._slideDownTimeOut ) {
		// 	clearTimeout( element._slideDownTimeOut );
		// 	element._slideDownTimeOut = false;
		// }

		// Reset element styling to get orignal height.
		element.style.height = "initial";
		element.style.overflow = "initial";
		element.style.transition = "";
		// Get orignal height.
		var offset = element.getBoundingClientRect();
		// Back to default.
		element.style.height = "0px";
		element.style.overflow = "hidden";
		element.style.transition = "height " + duration + "ms linear";
		setTimeout(function() {
			element.style.height = offset.height + "px";
		}, 50);

		element._sideUpTimeOut = setTimeout(function() {
			element.style.height = "";
			element.style.overflow = "";
			element.style.transition = "";
			if (typeof callBack === "function") {
				callBack.call(this);
			}
		}, duration);
	};

	Customify.prototype.insertMenuOverlayClass = function() {
		var navMobile = document.querySelector(".nav-menu-mobile");
		if (navMobile) {
			if (
				document.body.classList.contains("menu_sidebar_slide_overlay")
			) {
				navMobile.classList.add("nav-menu-overlay");
			} else {
				navMobile.classList.remove("nav-menu-overlay");
			}
		}
	};

	Customify.prototype.setupMobileItemAnimations = function(element) {
		var h = window.height;
		if (typeof element === "undefined") {
			element = document.getElementById("header-menu-sidebar");
		}

		var t = 0.2;
		var index = 0;
		var itemsInner = element.querySelectorAll(".item--inner");
		if (itemsInner.length) {
			for (var i = 0; i < itemsInner.length; i++) {
				index++;
				itemsInner[i].style.transitionDelay = index * t + "s";
			}
		}
	};

	/**
	 * Toogle Element class name.
	 *
	 * @param Element element
	 * @param string className
	 */
	Customify.prototype.toggleClass = function(element, className) {
		if (element instanceof NodeList) {
			for (var i = 0; i < element.length; i++) {
				if (element[i].classList.contains(className)) {
					element[i].classList.remove(className);
				} else {
					element[i].classList.add(className);
				}
			}
		} else if (element instanceof Node || element instanceof Element) {
			if (element.classList.contains(className)) {
				element.classList.remove(className);
			} else {
				element.classList.add(className);
			}
		}
	};

	/**
	 * Add class to element.
	 *
	 * @param Element element
	 * @param string className
	 */
	Customify.prototype.addClass = function(element, className) {
		if (element instanceof NodeList) {
			for (var i = 0; i < element.length; i++) {
				element[i].classList.add(className);
			}
		} else if (element instanceof Node || element instanceof Element) {
			element.classList.add(className);
		}
	};

	/**
	 * Remove class name from element.
	 *
	 * @param Element element
	 * @param string className
	 */
	Customify.prototype.removeClass = function(element, className) {
		// Split each class by space.
		var classes = className.split(" ");
		if (element instanceof NodeList) {
			for (var i = 0; i < element.length; i++) {
				for (var j = 0; j < classes.length; j++) {
					element[i].classList.remove(classes[j]);
				}
			}
		} else if (element instanceof Node || element instanceof Element) {
			for (var j = 0; j < classes.length; j++) {
				element.classList.remove(classes[j]);
			}
		}
	};

	/**
	 * Add event handle to elements.
	 *
	 * @param Element element
	 * @param string event
	 * @param function callBack
	 */
	Customify.prototype.addEvent = function(element, event, callBack) {
		if (element instanceof NodeList) {
			for (var i = 0; i < element.length; i++) {
				element[i].addEventListener(event, callBack);
			}
		} else if (element instanceof Node || element instanceof Element) {
			element.addEventListener(event, callBack);
		}
	};

	/**
	 * Close menu sidebar.
	 */
	Customify.prototype.closeMenuSidebar = function() {
		document.body.classList.add("hiding-header-menu-sidebar");
		document.body.classList.remove("is-menu-sidebar");
		var toggleButtons = document.querySelectorAll(
			".menu-mobile-toggle, .menu-mobile-toggle .hamburger"
		);
		this.removeClass(toggleButtons, "is-active");

		/**
		 * For dropdown sidebar.
		 */
		if (document.body.classList.contains("menu_sidebar_dropdown")) {
			this.removeClass(document.body, "hiding-header-menu-sidebar");
			var menuSidebar = document.getElementById("header-menu-sidebar");
			var menuSidebarInner = document.getElementById(
				"header-menu-sidebar-inner"
			);
			var offset = menuSidebarInner.getBoundingClientRect();
			var h = offset.height;

			this.slideUp(
				menuSidebar,
				300,
				function() {
					menuSidebar.style.height = 0;
					menuSidebar.style.display = "block";
				}.bind(this)
			);
		} else {
			// Else slide sidebar.
			setTimeout(
				function() {
					this.removeClass(
						document.body,
						"hiding-header-menu-sidebar"
					);
				}.bind(this),
				1000
			);
		}
	};

	/**
	 * Toggle menu sidebar.
	 *
	 * @param bool open use animation or not.
	 */
	Customify.prototype.toggleMenuSidebar = function(toggle) {
		if (typeof toggle === "undefined") {
			toggle = true;
		}

		document.body.classList.remove("hiding-header-menu-sidebar");

		if (!toggle) {
			document.body.classList.add("is-menu-sidebar");
		} else {
			this.toggleClass(document.body, "is-menu-sidebar");
		}

		if (document.body.classList.contains("menu_sidebar_dropdown")) {
			var buttons = document.querySelectorAll(
				".menu-mobile-toggle, .menu-mobile-toggle .hamburger"
			);
			if (toggle) {
				this.toggleClass(buttons, "is-active");
			} else {
				this.addClass(buttons, "is-active");
			}

			if (document.body.classList.contains("is-menu-sidebar")) {
				var menuSidebar = document.getElementById(
					"header-menu-sidebar"
				);
				var menuSidebarInner = document.getElementById(
					"header-menu-sidebar-inner"
				);
				var offset = menuSidebarInner.getBoundingClientRect();
				var h = offset.height;

				this.slideDown(menuSidebar, 300, function() {
					menuSidebar.style.height = h + "px";
				});
			} else {
				if (toggle) {
					this.closeMenuSidebar();
				}
			}
		}
	};

	/**
	 * Auto align search form.
	 */
	Customify.prototype.searchFormAutoAlign = function() {
		var searchItems = document.querySelectorAll(".header-search_icon-item");
		var w = window.innerWidth;

		for (var i = 0; i < searchItems.length; i++) {
			var container = searchItems[i];
			var button = container.querySelector(".search-icon");
			var buttonOffset = button.getBoundingClientRect();
			this.removeClass(container, "search-right search-left");
			if (buttonOffset.left > w / 2) {
				this.removeClass(container, "search-right");
				this.addClass(container, "search-left");
			} else {
				this.removeClass(container, "search-left");
				this.addClass(container, "search-right");
			}
		}
	};

	/**
	 * Search form.
	 */
	Customify.prototype.initSearchForm = function() {
		var searchItems = document.querySelectorAll(".header-search_icon-item");
		var that = this;

		searchItems.forEach( function( container ){
			//let container = searchItems[i];
			that.removeClass(container, "active");
			var icon = container.querySelector(".search-icon");

			/**
			 * Add event handle when click to icon.
			 */
			that.addEvent(
				icon,
				"click",
				function(e) {
					e.preventDefault();
					this.toggleClass( container, "active");
					var inputField = container.querySelector(".search-field");
				
					if (!container.classList.contains("active")) {
						inputField.blur();
					} else {
						inputField.focus();
					}
				}.bind(that)
			);

			/**
			 * When click outside search form.
			 */
			that.addEvent(
				document,
				"click",
				function(e) {
					// if the target of the click isn't the container nor a descendant of the container
					if (
						!(container === e.target) &&
						!container.contains(e.target)
					) {
						that.removeClass(container, "active");
					}
				}.bind(that)
			);


		} );
		

		that.searchFormAutoAlign();
	};

	/**
	 * Wrapper element
	 *
	 * @param Element element
	 * @param strig tag Tag name.
	 *
	 * @return Element
	 */
	Customify.prototype.wrapper = function(element, tag) {
		if (typeof tag === "undefined") {
			tag = "div";
		}
		var wrapper = document.createElement(tag);
		element.parentNode.replaceChild(wrapper, element);
		wrapper.appendChild(element);
		return wrapper;
	};

	/**
	 * Responsive table.
	 */
	Customify.prototype.responsiveTable = function() {
		var tables = document.querySelectorAll(".entry-content table");
		for (var i = 0; i < tables.length; i++) {
			if (!tables[i].parentNode.classList.contains("table-wrapper")) {
				// Wrap table by each div.table-wrapper
				var dWrapper = document.createElement("div");
				dWrapper.classList.add("table-wrapper");
				tables[i].parentNode.replaceChild(dWrapper, tables[i]);
				dWrapper.appendChild(tables[i]);
			}
		}
	};

	/**
	 * Reponsive video style.
	 */
	Customify.prototype.responsiveVideos = function() {
		
	};

	/**
	 * Inittial
	 */
	Customify.prototype.init = function() {
		this.checkTouchScreen();
		this.initMobieSearchForm();
		this.initMobileSubMenu();
		this.insertMenuOverlayClass();
		this.setupMobileItemAnimations();
		this.initMenuSidebar();
		this.initSearchForm();
		this.responsiveTable();
		this.responsiveVideos();

		/**
		 * Add action when Header Panel rendered by customizer.
		 */
		document.addEventListener(
			"header_builder_panel_changed",
			function() {
				this.initMobileSubMenu();
				this.insertMenuOverlayClass();
			}.bind(this)
		);
		// Add actions when window resize.
		var tf;
		window.addEventListener(
			"resize",
			function() {
				// Resetup mobile animations
				this.setupMobileItemAnimations();

				// Resetup search form alignmenet.
				this.removeClass(
					document.querySelectorAll(".header-search_icon-item"),
					"active"
				);
				if (tf) {
					clearTimeout(tf);
				}
				tf = setTimeout(this.searchFormAutoAlign.bind(this), 100);
			}.bind(this)
		);

		document.addEventListener(
			"selective-refresh-content-rendered",
			function(e) {
				if (e.detail === "customify_customize_render_header") {
					this.initSearchForm();
				}
			}.bind(this)
		);
	};

	/**
	 * Check is mobile.
	 * This may use in plugins.
	 *
	 * @deprecated 0.2.6
	 */
	function customify_is_mobile() {
		return Customify.isMobile();
	}

	window.customify_is_mobile = customify_is_mobile;
	window.Customify = new Customify();

	/**
	 * Fix viewport units on Mobile.
	 */
	(function() {
		if ( window.Customify.isMobile() ) {
			/**
			 * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
			 */
			// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
			var vh = window.innerHeight * 0.01;
			var vw = window.innerWidth * 0.01;
			// Then we set the value in the --vh, --vw custom property to the root of the document
			document.documentElement.style.setProperty("--vh", vh+'px');
			document.documentElement.style.setProperty("--vw", vw+'px');

			window.addEventListener("resize", function() {
				var vh = window.innerHeight * 0.01;
				var vw = window.innerWidth * 0.01;
				document.documentElement.style.setProperty("--vh", vh+'px');
				document.documentElement.style.setProperty("--vw", vw+'px');
			});
		}
	})();
	
})();


/**
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function() {
	var container, button, menu, links, i, len;

	container = document.getElementById("site-navigation-main-desktop");
	if (!container) {
		return;
	}

	menu = container.getElementsByTagName("ul")[0];
	// Hide menu toggle button if menu is empty and return early.
	if ("undefined" === typeof menu) {
		return;
	}

	menu.setAttribute("aria-expanded", "false");
	if (-1 === menu.className.indexOf("nav-menu")) {
		menu.className += " nav-menu";
	}

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName("a");

	// Each time a menu link is focused or blurred, toggle focus.
	for (i = 0, len = links.length; i < len; i++) {
		links[i].addEventListener("focus", toggleFocus, true);
		links[i].addEventListener("blur", toggleFocus, true);
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while (-1 === self.className.indexOf("nav-menu")) {
			// On li elements toggle the class .focus.
			if ("li" === self.tagName.toLowerCase()) {
				if (-1 !== self.className.indexOf("focus")) {
					self.className = self.className.replace(" focus", "");
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
	(function(container) {
		var touchStartFn,
			i,
			parentLink = container.querySelectorAll(
				".menu-item-has-children > a, .page_item_has_children > a"
			);

		if ("ontouchstart" in window) {
			touchStartFn = function(e) {
				var menuItem = this.parentNode,
					i;

				if (!menuItem.classList.contains("focus")) {
					e.preventDefault();
					for (i = 0; i < menuItem.parentNode.children.length; ++i) {
						if (menuItem === menuItem.parentNode.children[i]) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove(
							"focus"
						);
					}
					menuItem.classList.add("focus");
				} else {
					menuItem.classList.remove("focus");
				}
			};

			for (i = 0; i < parentLink.length; ++i) {
				parentLink[i].addEventListener(
					"touchstart",
					touchStartFn,
					false
				);
			}
		}
	})(container);
})();

/**
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function() {
	var isIe = /(trident|msie)/i.test(navigator.userAgent);

	if (isIe && document.getElementById && window.addEventListener) {
		window.addEventListener(
			"hashchange",
			function() {
				var id = location.hash.substring(1),
					element;

				if (!/^[A-z0-9_-]+$/.test(id)) {
					return;
				}

				element = document.getElementById(id);

				if (element) {
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
})();
