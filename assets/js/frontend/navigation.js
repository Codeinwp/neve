/* jshint esversion: 6 */
import { isMobile, neveEach, isBestBrowserEver as isIE, unhashUrl } from './utils.js';

let pageUrl;

/**
 * Initialize nav logic.
 */
export const initNavigation = function () {
  pageUrl = window.location.href;
  repositionDropdowns();
  handleScrollLinks();
  handleMobileDropdowns();
  handleSearch();
  if (isIE() === true) {
    handleIeDropdowns();
  }
};

/**
 * Reposition drop downs in case they go off screen.
 * @returns {boolean}
 */
/**
 * Reposition drop downs in case they go off screen.
 * @returns {boolean}
 */
export const repositionDropdowns = function () {
  if (isMobile()) return false;

  let dropDowns = document.querySelectorAll('.sub-menu .sub-menu');
  if (dropDowns.length === 0) return false;

  let windowWidth = window.innerWidth;
  neveEach(dropDowns, function (dropDown) {
    let bounding = dropDown.getBoundingClientRect(),
        rightDist = bounding.left;
    if (/webkit.*mobile/i.test(navigator.userAgent)) {
      bounding -= window.scrollX;
    }

    if (rightDist + bounding.width >= windowWidth) {
      dropDown.style.right = '100%';
      dropDown.style.left = 'auto';
    }
  });
};

/**
 * Handle links that link to the current page.
 * @returns {boolean}
 */
function handleScrollLinks () {
  let links = document.querySelectorAll('.nv-nav-wrap a');
  if (links.length === 0) return false;
  neveEach(links, function (link) {
    link.addEventListener('click', function (event) {
      let href = event.target.getAttribute('href');
      if (href === null) return false;
      console.log(href);
      console.log(unhashUrl(href));
      console.log(pageUrl);
      console.log(unhashUrl(pageUrl));
      if (unhashUrl(href) === unhashUrl(pageUrl)) {
        document.body.classList.remove('is-menu-sidebar');
        neveEach(document.querySelectorAll('.dropdown-open'), function (element) {
          element.classList.remove('dropdown-open');
        });
      }
    });
  });
}

/**
 * Handle dropdowns on mobile devices.
 */
function handleMobileDropdowns () {
  let carets = document.querySelectorAll('.caret-wrap');
  neveEach(carets, function (caret) {
    caret.addEventListener('click', function (event) {
      event.preventDefault();
      let subMenu = this.parentNode.parentNode.querySelector('.sub-menu');
      this.classList.toggle('dropdown-open');
      subMenu.classList.toggle('dropdown-open');
    });
  });
}

/**
 * Handle searches.
 */
function handleSearch () {
  let navSearch = document.querySelectorAll('.nv-nav-search'),
      navItem = document.querySelectorAll('.menu-item-nav-search'),
      close = document.querySelectorAll('.close-responsive-search'),
      html = document.querySelector('html');
  // Handle search opening.
  neveEach(navItem, function (searchItem) {
    searchItem.addEventListener('click', function (e) {
      e.stopPropagation();
      searchItem.classList.toggle('active');
      html.classList.add('menu-opened');
      if (!isMobile()) {
        createNavOverlay(searchItem, 'active');
      }
    });
  });
  // Don't close thee search if interacted with.
  neveEach(navSearch, function (item) {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
  // Mobile search close buttons.
  neveEach(close, function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      neveEach(navItem, function (search) {
        search.classList.remove('active');
      });
      let overlay = document.querySelector('.nav-clickaway-overlay');
      if (overlay === null)
        return;
      overlay.parentNode.removeChild(overlay);
      html.classList.remove('menu-opened');
    });
  });
}

/**
 * Create an overlay to allow closing.
 *
 * @param item
 * @param classToRemove
 * @param multiple
 * @returns {boolean}
 */
function createNavOverlay (item, classToRemove, multiple = false) {

  let navClickaway = document.querySelector('.nav-clickaway-overlay');
  if (navClickaway !== null) {
    return false;
  }
  navClickaway = document.createElement('div');
  navClickaway.classList.add('nav-clickaway-overlay');

  let primaryNav = document.querySelector('#nv-primary-navigation');
  primaryNav.parentNode.insertBefore(navClickaway, primaryNav.nextSibling);

  navClickaway.addEventListener('click', function () {
    if (multiple === true) {
      neveEach(item, function (singleItem) {
        singleItem.classList.remove(classToRemove);
      });
    } else {
      item.classList.remove(classToRemove);
    }
    navClickaway.parentNode.removeChild(navClickaway);
  });
}

/**
 * Handle dropdowns for special browsers that...
 * have trouble understanding what hover is.
 */
function handleIeDropdowns () {
  let dropdowns = document.querySelectorAll('.header--row[data-show-on="desktop"] .sub-menu');
  neveEach(dropdowns, function (dropdown) {
    let parentItem = dropdown.parentNode;

    parentItem.addEventListener('mouseenter', function () {
      dropdown.classList.add('dropdown-open');
    });
    parentItem.addEventListener('mouseleave', function () {
      dropdown.classList.remove('dropdown-open');
    });
  });
}

