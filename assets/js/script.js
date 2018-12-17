(function($) {
    $.neveUtilities = {
        isMobile: function() {
            var windowWidth = window.innerWidth;
            return windowWidth <= 960;
        },
        isElementInViewport: function(el) {
            if (typeof $ === "function" && el instanceof $) {
                el = el[0];
            }
            var rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
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
                $(".nv-navbar").toggleClass("responsive-opened");
                $(this).toggleClass("active");
                if (this.attributes["aria-expanded"].value === "true") {
                    $(this).attr("aria-expanded", "false");
                } else {
                    $(this).attr("aria-expanded", "true");
                }
                $("html").toggleClass("menu-opened");
            });
        },
        handleMobileDropdowns: function() {
            var self = this;
            $(".caret-wrap").on("click", function() {
                $(this).toggleClass("dropdown-open");
                $(this).closest("li").find("ul.sub-menu").toggleClass("dropdown-open");
                if (!utils.isMobile()) {
                    self.createNavOverlay();
                }
                return false;
            });
        },
        handleSearch: function() {
            var self = this;
            $(".nv-nav-search").on("touchstart click", function(e) {
                e.stopPropagation();
            });
            $(".menu-item-nav-search").on("touchstart click focus", function() {
                $(this).addClass("active");
                $("html").addClass("menu-opened");
                if (utils.isMobile()) {
                    return false;
                }
                self.createNavOverlay();
                return false;
            });
            $(".close-responsive-search").on("touchstart click", function(e) {
                e.preventDefault();
                $(".responsive-nav-search").removeClass("active");
                $("html").removeClass("menu-opened");
            });
            $(".menu-item-nav-search input[type=search]").on("blur", function() {
                $(".menu-item-nav-search").removeClass("active");
                $(".nav-clickaway-overlay").remove();
            });
        },
        createNavOverlay: function() {
            var navClickaway = $(".nav-clickaway-overlay");
            if (navClickaway.length > 0) {
                return false;
            }
            navClickaway = document.createElement("div");
            navClickaway.setAttribute("class", "nav-clickaway-overlay");
            $("#nv-primary-navigation").after(navClickaway);
            $(navClickaway).on("touchstart click", function() {
                $(this).remove();
                $("#nv-primary-navigation li, .menu-item-nav-search").removeClass("active dropdown-open");
            });
            return false;
        }
    };
})(jQuery);

(function($) {
    var utils = $.neveUtilities;
    $.neveBlog = {
        init: function() {
            this.handleMasonry();
            this.handleInfiniteScroll();
            this.handleGutenbergAlignment();
        },
        handleMasonry: function() {
            if (NeveProperties.masonry !== "enabled") {
                return false;
            }
            var postsWrap = $(".nv-index-posts .posts-wrapper");
            if (postsWrap.length === 0) {
                return false;
            }
            $(postsWrap).masonry({
                itemSelector: "article.layout-grid",
                columnWidth: "article.layout-grid",
                percentPosition: true
            });
        },
        handleInfiniteScroll: function() {
            if (NeveProperties.infiniteScroll !== "enabled") {
                return false;
            }
            var postsWrap = $(".nv-index-posts");
            if (!postsWrap.length) {
                return false;
            }
            var lock = false;
            var page = 2;
            $(window).scroll(function() {
                var trigger = postsWrap.find(".infinite-scroll-trigger");
                var reachedTrigger = utils.isElementInViewport(trigger);
                if (reachedTrigger === false || lock === true) {
                    return false;
                }
                if (page > NeveProperties.infiniteScrollMaxPages) {
                    return false;
                }
                var counter = $("article").length;
                lock = true;
                $.ajax({
                    type: "POST",
                    url: NeveProperties.ajaxurl,
                    data: {
                        action: "infinite_scroll",
                        page: page,
                        counter: counter,
                        nonce: NeveProperties.nonce
                    },
                    beforeSend: function() {
                        $(".nv-loader").css("display", "block");
                    },
                    success: function(response) {
                        if (response) {
                            $(".nv-loader").hide();
                            var postGrid = $(".nv-index-posts .posts-wrapper");
                            postGrid.append(response);
                            if (NeveProperties.masonry === "enabled") {
                                $(postGrid).masonry("reloadItems");
                                $(postGrid).imagesLoaded().progress(function() {
                                    $(postGrid).masonry("layout");
                                });
                            }
                            page++;
                            lock = false;
                        }
                    }
                });
            });
        },
        handleGutenbergAlignment: function() {
            if ($("body").hasClass("page-template-template-pagebuilder-full-width")) {
                return false;
            }
            var fullAlignments = $(".alignfull");
            var wideAlignments = $(".alignwide");
            if (!fullAlignments.length && !wideAlignments.length) return false;
            var contentWidth = $(".neve-main > .container > .row > .col");
            if (!contentWidth.length) contentWidth = $(".neve-main > .container-fluid > .row > .col");
            if (!contentWidth.length) return;
            var containerWidth = $(contentWidth).innerWidth() - 30;
            var windowWidth = $("body").innerWidth();
            if (containerWidth === windowWidth) return false;
            var marginFullNeeded = 0;
            var marginWideNeeded = 0;
            if (utils.isMobile() || !$(".nv-sidebar-wrap").length) {
                marginFullNeeded = (windowWidth - containerWidth) / 2 + 15;
                marginWideNeeded = (windowWidth - containerWidth) / 5;
            }
            if (fullAlignments.length) {
                $(fullAlignments).each(function(index, element) {
                    $(element).css({
                        "margin-left": "-" + marginFullNeeded + "px",
                        "margin-right": "-" + marginFullNeeded + "px"
                    });
                });
            }
            if (wideAlignments.length) {
                $(wideAlignments).each(function(index, element) {
                    $(element).css({
                        "margin-left": "-" + marginWideNeeded + "px",
                        "margin-right": "-" + marginWideNeeded + "px"
                    });
                });
            }
        }
    };
})(jQuery);

(function($) {
    $.neveWoo = {
        init: function() {
            this.handleShopSidebar();
        },
        handleShopSidebar: function() {
            $(".nv-sidebar-toggle").on("click touchend", function() {
                $(".shop-sidebar").toggleClass("sidebar-open");
                $("html").toggleClass("menu-opened");
                return false;
            });
        }
    };
})(jQuery);

jQuery(document).ready(function() {
    jQuery.neveNavigation.init();
    jQuery.neveWoo.init();
});

jQuery(window).load(function() {
    jQuery.neveBlog.init();
});

var neveResizeTimeout;

jQuery(window).on("resize", function() {
    clearTimeout(neveResizeTimeout);
    neveResizeTimeout = setTimeout(function() {
        jQuery.neveNavigation.repositionDropdowns();
        jQuery.neveBlog.handleGutenbergAlignment();
    }, 500);
});
//# sourceMappingURL=script.js.map