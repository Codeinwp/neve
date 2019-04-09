import { isMobile } from "./utils.js";

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
};

/**
 * Reposition drop downs in case they go off screen.
 * @returns {boolean}
 */
const repositionDropdowns = function () {
  if (isMobile()) return false;

  let dropDowns = document.querySelectorAll('.sub-menu .sub-menu');
  if (dropDowns.length === 0) return false;

  let windowWidth = window.innerWidth;
  forEach(dropDowns, function (dropDown) {
    let bounding = dropDown.offset().left;
    if (/webkit.*mobile/i.test(navigator.userAgent)) {
      bounding -= window.scrollX;
    }
    let dropDownWidth = dropDown.outerWidth();
    if (bounding + dropDownWidth >= windowWidth) {
      dropDown.style.right = '100%';
      dropDown.style.left = 'auto';
    }
  });
};

/**
 * Handle links that link to the current page.
 * @returns {boolean}
 */
const handleScrollLinks = function () {
  let links = document.querySelectorAll('.nv-nav-wrap a');
  if (links.length === 0) return false;
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      let href = event.target.getAttribute('href');
      if (href === null) return false;
      if( href.indexOf(pageUrl) > -1) {
        document.body.classList.remove('is-menu-sidebar');
        document.querySelectorAll('.dropdown-open').forEach(function (element) {
          element.classList.remove('dropdown-open');
        });
      }
    });
  });
};

/**
 * Handle dropdowns on mobile devices.
 */
const handleMobileDropdowns = function () {
  let carets = document.querySelectorAll('.caret-wrap');
  carets.forEach(function (caret) {
    caret.addEventListener('click', function (event) {
      this.classList.toggle('dropdown-open');
      this.parentNode.parentNode.querySelector('.sub-menu').classList.toggle('dropdown-open');

      if (isMobile()) return false;


    });
  });
};

/**
 * Handle searches.
 */
const handleSearch = function () {
  let navSearch = document.querySelectorAll('.nv-nav-search'),
      navItem = document.querySelectorAll('.menu-item-nav-search'),
      close = document.querySelectorAll('.close-responsive-search'),
      html = document.querySelector('html');
  // Handle search opening.
  navItem.forEach(function (searchItem) {
    searchItem.addEventListener('click', function (e) {
      e.stopPropagation();
      searchItem.classList.toggle('active');
      html.classList.add('menu-opened');
      if( ! isMobile() ) {
       createNavOverlay(searchItem, 'active');
      }
    });
  });
  // Don't close thee search if interacted with.
  navSearch.forEach( function (item) {
  	item.addEventListener( 'click', function (e) {
  	  e.stopPropagation();
  	} );
  } );
  // Mobile search close buttons.
  close.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      navItem.forEach(function (search) {
        search.classList.remove('active');
      });
      html.classList.remove('menu-opened');
    });
  });
};

/**
 * Create an overlay to allow closing.
 *
 * @param item
 * @param classToRemove
 * @returns {boolean}
 */
const createNavOverlay = function (item, classToRemove) {
  let navClickaway = document.querySelector('.nav-clickaway-overlay');
  if (navClickaway !== null) {
    return false;
  }
  navClickaway = document.createElement('div');
  navClickaway.classList.add('nav-clickaway-overlay');

  let primaryNav = document.querySelector('#nv-primary-navigation');
  primaryNav.after(navClickaway);

  navClickaway.addEventListener('click', function (e) {
    item.classList.remove(classToRemove);
    navClickaway.parentNode.removeChild(navClickaway);
  });
};
