/* global NeveProperties */
/* jshint esversion: 6 */
import {
  isMobile,
  isIe,
  unhashUrl,
  toggleClass,
  removeClass,
  addClass,
  neveEach
} from '../utils.js'

let pageUrl

/**
 * Initialize nav logic.
 */
export const initNavigation = () => {
  pageUrl = window.location.href
  repositionDropdowns()
  handleScrollLinks()
  handleMobileDropdowns()
  handleSearch()
  handleMiniCartPosition()
  if (isIe() === true) {
	handleIeDropdowns()
  }
  window.HFG.initSearch = function () {
	handleSearch()
	handleMobileDropdowns()
  }
}

/**
 * Reposition drop downs in case they go off screen.
 * @returns {boolean}
 */
export const repositionDropdowns = () => {
  let { isRTL } = NeveProperties,
	left,
	right,
	dropDowns = document.querySelectorAll('.sub-menu')

  if (dropDowns.length === 0) return false

  let windowWidth = window.innerWidth;
  neveEach(dropDowns, (dropDown) => {
	let bounding = dropDown.getBoundingClientRect(),
	  rightDist = bounding.left

	if (rightDist < 0) {
	  left = isRTL ? 'auto' : 0;
	  right = isRTL ? '-100%' : 'auto';
	  dropDown.style.right = right
	  dropDown.style.left = left
	}

	if (rightDist + bounding.width >= windowWidth) {
	  right = isRTL ? 0 : '100%';
	  left = 'auto';
	  dropDown.style.right = right
	  dropDown.style.left = left
	}
  })
}

/**
 * Handle links that link to the current page.
 * @returns {boolean}
 */
function handleScrollLinks() {
  let links = document.querySelectorAll('.nv-nav-wrap a')
  if (links.length === 0) return false

  neveEach(links, (link) => {
	link.addEventListener('click', (event) => {
	  let href = event.target.getAttribute('href')
	  if (href === null) return false
	  if (unhashUrl(href) === unhashUrl(pageUrl)) {
		window.HFG.toggleMenuSidebar(false)
	  }
	})
  })
}

/**
 * Handle dropdowns on mobile devices.
 */
function handleMobileDropdowns() {
  let carets = document.querySelectorAll('.caret-wrap')
  neveEach(carets, (caret) => {
	caret.addEventListener('click', (e) => {
	  e.preventDefault()
	  e.stopPropagation()
	  let subMenu = caret.parentNode.parentNode.querySelector('.sub-menu')
	  toggleClass(caret, 'dropdown-open')
	  toggleClass(subMenu, 'dropdown-open')
	  createNavOverlay(document.querySelectorAll('.dropdown-open'), 'dropdown-open')
	})
  })
}

/**
 * Handle searches.
 */
function handleSearch() {
  let navSearch = document.querySelectorAll('.nv-nav-search'),
	navItem = document.querySelectorAll('.menu-item-nav-search'),
	close = document.querySelectorAll('.close-responsive-search')
  // Handle search opening.
  neveEach(navItem, (searchItem) => {
	searchItem.addEventListener('click', (e) => {
	  e.preventDefault()
	  e.stopPropagation()
	  toggleClass(searchItem, 'active')
	  searchItem.querySelector('.search-field').focus()
	  if (!isMobile()) {
		createNavOverlay(searchItem, 'active')
	  }
	})
  })
  // Don't close thee search if interacted with.
  neveEach(navSearch, (item) => {
	item.addEventListener('click', (e) => {
	  e.stopPropagation()
	})
  })
  // Mobile search close buttons.
  neveEach(close, (button) => {
	button.addEventListener('click', (e) => {
	  e.preventDefault()
	  neveEach(navItem, (search) => {
		removeClass(search, 'active')
	  })
	  let overlay = document.querySelector('.nav-clickaway-overlay')
	  if (overlay === null) {
		return
	  }
	  overlay.parentNode.removeChild(overlay)
	})
  })
}

/**
 * Handle the mini cart position in nav.
 */
function handleMiniCartPosition() {
  let elem = document.querySelectorAll('.header--row .nv-nav-cart')
  if (elem.length === 0) {
	return
  }
  neveEach(elem, (item) => {
	let bounding = item.getBoundingClientRect()
	if (bounding.left < 0) {
	  item.style.left = 0
	}
  })
}

window.addEventListener('resize', handleMiniCartPosition)

/**
 * Create an overlay to allow closing.
 *
 * @param item
 * @param classToRemove
 * @param multiple
 * @returns {boolean}
 */
function createNavOverlay(item, classToRemove) {

  let navClickaway = document.querySelector('.nav-clickaway-overlay')
  if (navClickaway !== null) {
	navClickaway.parentNode.removeChild(navClickaway)
  }
  navClickaway = document.createElement('div')
  addClass(navClickaway, 'nav-clickaway-overlay')

  let primaryNav = document.querySelector('header.header')
  primaryNav.parentNode.insertBefore(navClickaway, primaryNav)

  navClickaway.addEventListener('click', () => {
	removeClass(item, classToRemove)
	navClickaway.parentNode.removeChild(navClickaway)
  })
}

/**
 * Handle dropdowns for special browsers that...
 * have trouble understanding what hover is.
 */
function handleIeDropdowns() {
  let dropdowns = document.querySelectorAll(
	'.header--row[data-show-on="desktop"] .sub-menu')
  neveEach(dropdowns, (dropdown) => {
	let parentItem = dropdown.parentNode

	parentItem.addEventListener('mouseenter', () => {
	  addClass(dropdown, 'dropdown-open')
	})
	parentItem.addEventListener('mouseleave', () => {
	  removeClass(dropdown, 'dropdown-open')
	})
  });
}

