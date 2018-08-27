(function($) {
    $.neveUtilities = {
        isMobile: function() {
            var windowWidth = window.innerWidth;
            return windowWidth <= 992;
        }
    };
})(jQuery);

(function($) {
    var utils = $.neveUtilities;
    $.neveNavigation = {
        init: function() {
            this.repositionDropdowns();
            this.handleResponsiveNav();
            this.handleMobileDropdowns();
            this.handleSearch();
        },
        repositionDropdowns: function() {
            if (utils.isMobile()) {
                return false;
            }
            var windowWidth = window.innerWidth;
            var dropDowns = $(".sub-menu .sub-menu");
            if (dropDowns.length === 0) {
                return false;
            }
            $.each(dropDowns, function(key, dropDown) {
                var submenu = $(dropDown);
                var bounding = submenu.offset().left;
                if (/webkit.*mobile/i.test(navigator.userAgent)) {
                    bounding -= window.scrollX;
                }
                var dropDownWidth = submenu.outerWidth();
                if (bounding + dropDownWidth >= windowWidth) {
                    $(dropDown).css({
                        right: "100%",
                        left: "auto"
                    });
                }
            });
            return false;
        },
        handleResponsiveNav: function() {
            $(".navbar-toggle").on("click", function() {
                $(".dropdown-open").removeClass("dropdown-open");
                $("#nv-primary-navigation").toggleClass("responsive-opened");
                $(this).toggleClass("active");
                $("html").toggleClass("menu-opened");
            });
        },
        handleMobileDropdowns: function() {
            $(".caret-wrap").on("click touchstart", function() {
                if (!utils.isMobile()) {
                    return false;
                }
                $(this).parent().toggleClass("dropdown-open");
                return false;
            });
        },
        handleSearch: function() {
            var self = this;
            $(".nv-nav-search").on("click", function(e) {
                e.stopPropagation();
            });
            $(".menu-item-nav-search").on("click", function() {
                if (utils.isMobile()) {
                    return false;
                }
                $(this).toggleClass("active");
                self.createNavOverlay();
                $(".nv-nav-search .search-field").focus();
                return false;
            });
        },
        createNavOverlay: function() {
            if (utils.isMobile()) {
                return false;
            }
            var navClickaway = $(".nav-clickaway-overlay");
            if (navClickaway.length > 0) {
                return false;
            }
            navClickaway = document.createElement("div");
            navClickaway.setAttribute("class", "nav-clickaway-overlay");
            $("#nv-primary-navigation").after(navClickaway);
            $(navClickaway).on("touchstart click", function() {
                this.remove();
                $("#nv-primary-navigation li").removeClass("active");
            });
            return false;
        }
    };
})(jQuery);

var neveScripts = function($) {
    $.neveNavigation.init();
};

jQuery(document).ready(function() {
    neveScripts(jQuery);
});

var resizeTimeout;

jQuery(window).on("resize", function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        jQuery.neveNavigation.repositionDropdowns();
    }, 500);
});
//# sourceMappingURL=script.js.map