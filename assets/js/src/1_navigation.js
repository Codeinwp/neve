(function ($) {
  var utils = $.neveUtilities;

  $.neveNavigation = {
    'init': function () {
      this.repositionDropdowns();
      this.handleResponsiveNav();
      this.handleScrollLinks();
      this.handleMobileDropdowns();
      this.handleSearch();
    },
    /**
     * Reposition dropdowns if they go off-screen.
     */
    'repositionDropdowns': function () {
      if (utils.isMobile()) {
        return false;
      }

      var windowWidth = window.innerWidth;
      //Do nothing without drop-downs.
      var dropDowns = $('.sub-menu .sub-menu');
      if (dropDowns.length === 0) {
        return false;
      }
      //Loop drop-downs and move them if needed.
      $.each(dropDowns, function (key, dropDown) {
        var submenu = $(dropDown);
        var bounding = submenu.offset().left;
        if (/webkit.*mobile/i.test(navigator.userAgent)) {
          bounding -= window.scrollX;
        }
        var dropDownWidth = submenu.outerWidth();
        if (bounding + dropDownWidth >= windowWidth) {
          $(dropDown).css({ 'right': '100%', 'left': 'auto' });
        }
      });
      return false;
    },
    /**
     * Handle the responsive navigation toggle.
     */
    'handleResponsiveNav': function () {
      $('.navbar-toggle').on('click', function () {
        $('.dropdown-open').removeClass('dropdown-open');
        $('.nv-navbar').toggleClass('responsive-opened');
        $(this).toggleClass('active');
        $(this).attr('aria-expanded', this.attributes['aria-expanded'].value === 'true' ? 'false' : 'true');
        $('html').toggleClass('menu-opened');
      });
    },
    /**
     * Handle links that point to the same page
     */
    'handleScrollLinks': function () {
      $('.nv-nav-wrap a').on('click', function () {
        var href = $(this).attr('href');
        if (typeof href === 'undefined') {
          return false;
        }
        if (href.indexOf(window.location.href) > -1 || href.charAt(0) === '#') {
          $('html').removeClass('menu-opened');
          $('.dropdown-open').removeClass('dropdown-open');
          $('.nv-navbar').removeClass('responsive-opened');
          $('.navbar-toggle').removeClass('active');
          $('.navbar-toggle').attr('aria-expanded', 'false');
        }
      });
    },
    /**
     * Handle the mobile dropdowns.
     */
    'handleMobileDropdowns': function () {
      var self = this;
      $('.caret-wrap').on('click', function () {
        $(this).toggleClass('dropdown-open');
        $(this).closest('li').find('ul.sub-menu').toggleClass('dropdown-open');
        if (!utils.isMobile()) {
          self.createNavOverlay();
        }
        return false;
      });
    },
    /**
     * Handle the nav-search.
     */
    'handleSearch': function () {
      var self = this;
      $('.nv-nav-search').on('touchstart click', function (e) {
        e.stopPropagation();
      });

      $('.menu-item-nav-search').on('touchstart focus', function () {
        $(this).addClass('active');
        $('html').addClass('menu-opened');
        if (utils.isMobile()) {
          return false;
        }
        self.createNavOverlay();
        return false;
      });

      $('.close-responsive-search').on('touchstart click', function (e) {
        e.preventDefault();
        $('.responsive-nav-search').removeClass('active');
        $('html').removeClass('menu-opened');
      });

      $('.menu-item-nav-search .search-submit').bind('focusout', function () {
        $('.menu-item-nav-search').removeClass('active');
        $('.nav-clickaway-overlay').remove();
      });
    },
    /**
     * Create helper overlay used for touch dropdowns.
     * @returns {boolean}
     */
    'createNavOverlay': function () {
      var navClickaway = $('.nav-clickaway-overlay');
      if (navClickaway.length > 0) {
        return false;
      }
      navClickaway = document.createElement('div');
      navClickaway.setAttribute('class', 'nav-clickaway-overlay');
      $('#nv-primary-navigation').after(navClickaway);

      $(navClickaway).on('touchstart click', function () {
        $(this).remove();
        $('#nv-primary-navigation li, .menu-item-nav-search').removeClass('active dropdown-open');
      });
      return false;
    },
  };
}(jQuery));
