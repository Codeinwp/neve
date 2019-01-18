(function($) {
    $.neveCustomizeUtilities = {
        setLiveCss: function(settings, to) {
            "use strict";
            var result = "";
            var styleClass = $("." + settings.styleClass);
            if (typeof to !== "object") {
                $(settings.selectors).css(settings.cssProperty, to.toString() + settings.propertyUnit);
                return false;
            }
            $.each(to, function(key, value) {
                var style_to_add;
                if (key === "suffix") {
                    return true;
                }
                var unit = settings.propertyUnit;
                if (typeof settings.propertyUnit === "object") {
                    unit = settings.propertyUnit[key];
                }
                style_to_add = settings.selectors + "{ " + settings.cssProperty + ":" + value + unit + "}";
                switch (key) {
                  default:
                  case "mobile":
                    result += style_to_add;
                    break;

                  case "desktop":
                    result += "@media(min-width: 960px) {" + style_to_add + "}";
                    break;

                  case "tablet":
                    result += "@media (min-width: 576px){" + style_to_add + "}";
                    break;
                }
            });
            if (styleClass.length > 0) {
                styleClass.text(result);
            } else {
                $("head").append('<style type="text/css" class="' + settings.styleClass + '">' + result + "</style>");
            }
        }
    };
})(jQuery);

(function($) {
    $.neveTypographyPreview = {
        init: function() {
            this.fontSelectionPreview();
            this.fontPropertiesPreview();
        },
        fontControls: {
            neve_body_font_family: {
                linkNodeId: "neve-google-font-body-css",
                selectors: "body"
            },
            neve_headings_font_family: {
                linkNodeId: "neve-google-font-headings-css",
                selectors: "h1,h2,h3,h4,h5,h6"
            }
        },
        fontSelectionPreview: function() {
            "use strict";
            var self = this;
            $(function() {
                wp.customize.preview.bind("font-selection", function(data) {
                    $("#" + self.fontControls[data.controlId].linkNodeId).remove();
                    if (data.source !== "system") {
                        self.generateLinkNode(self.fontControls[data.controlId].linkNodeId, data.value);
                    }
                    if (data.value === "Default") {
                        $(self.fontControls[data.controlId].selectors).css("font-family", '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif');
                    }
                    $(self.fontControls[data.controlId].selectors).css("font-family", data.value);
                    return false;
                });
            });
        },
        generateLinkNode: function(elementId, googleFontName) {
            var linkNode = $("#" + elementId);
            var fontValue = googleFontName.replace(" ", "+");
            var url = "//fonts.googleapis.com/css?family=" + fontValue + "%3A300%2C400%2C500%2C700&subset=latin&ver=4.9.8";
            if (linkNode.length !== 0) {
                return false;
            }
            var newNode = document.createElement("link");
            newNode.setAttribute("rel", "stylesheet");
            newNode.setAttribute("id", elementId);
            newNode.setAttribute("href", url);
            newNode.setAttribute("type", "text/css");
            newNode.setAttribute("media", "all");
            $("#neve-style-css").after(newNode);
        },
        fontPropertiesRanges: {
            neve_container_width: {
                selector: ".container",
                cssProp: "max-width",
                unit: "px",
                styleClass: "container-width-css"
            },
            neve_body_font_size: {
                selector: "body",
                cssProp: "font-size",
                styleClass: "body-font-size-css"
            },
            neve_body_line_height: {
                selector: "body",
                cssProp: "line-height",
                unit: " ",
                styleClass: "body-line-height-css"
            },
            neve_h1_font_size: {
                selector: "h1, .single .entry-title",
                cssProp: "font-size",
                styleClass: "h1-font-size-css"
            },
            neve_h1_line_height: {
                selector: "h1, .single .entry-title",
                cssProp: "line-height",
                unit: " ",
                styleClass: "h1-line-height-css"
            },
            neve_h2_font_size: {
                selector: "h2",
                cssProp: "font-size",
                styleClass: "h2-font-size-css"
            },
            neve_h2_line_height: {
                selector: "h2",
                cssProp: "line-height",
                unit: " ",
                styleClass: "h2-line-height-css"
            },
            neve_h3_font_size: {
                selector: "h3",
                cssProp: "font-size",
                styleClass: "h3-font-size-css"
            },
            neve_h3_line_height: {
                selector: "h3",
                cssProp: "line-height",
                unit: " ",
                styleClass: "h3-line-height-css"
            },
            neve_h4_font_size: {
                selector: "h4",
                cssProp: "font-size",
                styleClass: "h4-font-size-css"
            },
            neve_h4_line_height: {
                selector: "h4",
                cssProp: "line-height",
                unit: " ",
                styleClass: "h4-line-height-css"
            },
            neve_h5_font_size: {
                selector: "h5",
                cssProp: "font-size",
                styleClass: "h5-font-size-css"
            },
            neve_h5_line_height: {
                selector: "h5",
                cssProp: "line-height",
                unit: " ",
                styleClass: "h5-line-height-css"
            },
            neve_h6_font_size: {
                selector: "h6",
                cssProp: "font-size",
                styleClass: "h6-font-size-css"
            },
            neve_h6_line_height: {
                selector: "h6",
                cssProp: "line-height",
                unit: " ",
                styleClass: "h6-line-height-css"
            }
        },
        fontPropertiesPreview: function() {
            "use strict";
            $.each(this.fontPropertiesRanges, function(id, args) {
                wp.customize(id, function(value) {
                    value.bind(function(newval) {
                        var values = JSON.parse(newval);
                        if (!values) {
                            return true;
                        }
                        if (typeof values.suffix === "object") {
                            args.unit = values.suffix;
                        }
                        var settings = {
                            selectors: args.selector,
                            cssProperty: args.cssProp,
                            propertyUnit: args.unit ? args.unit : "",
                            styleClass: args.styleClass
                        };
                        $.neveCustomizeUtilities.setLiveCss(settings, values);
                    });
                });
            });
        }
    };
})(jQuery);

jQuery.neveTypographyPreview.init();

(function($) {
    $.neveLayoutPreview = {
        init: function() {
            this.contentWidthsPreview();
            this.containersLivePreview();
        },
        contentWidths: {
            neve_sitewide_content_width: {
                content: ".neve-main > .container .col",
                sidebar: ".nv-sidebar-wrap"
            },
            neve_blog_archive_content_width: {
                content: ".archive-container .nv-index-posts",
                sidebar: ".archive-container .nv-sidebar-wrap"
            },
            neve_single_post_content_width: {
                content: ".single-post-container .nv-single-post-wrap",
                sidebar: ".single-post-container .nv-sidebar-wrap"
            },
            neve_shop_archive_content_width: {
                content: ".archive.woocommerce .shop-container .nv-shop.col",
                sidebar: ".archive.woocommerce .shop-container .nv-sidebar-wrap"
            },
            neve_single_product_content_width: {
                content: ".single-product .shop-container .nv-shop.col",
                sidebar: ".single-product .shop-container .nv-sidebar-wrap"
            },
            neve_other_pages_content_width: {
                content: "body:not(.single):not(.archive):not(.blog) .neve-main > .container .col",
                sidebar: "body:not(.single):not(.archive):not(.blog) .nv-sidebar-wrap"
            }
        },
        contentWidthsPreview: function() {
            $.each(this.contentWidths, function(id, args) {
                wp.customize(id, function(value) {
                    value.bind(function(newval) {
                        jQuery(args.content).css("max-width", newval + "%");
                        jQuery(args.sidebar).css("max-width", 100 - newval + "%");
                    });
                });
            });
        },
        containersLayoutMap: {
            neve_default_container_style: ".page:not(.woocommerce) .single-page-container",
            neve_blog_archive_container_style: ".archive-container",
            neve_single_post_container_style: ".single-post-container",
            neve_shop_archive_container_style: ".woocommerce-page.post-type-archive .neve-main > div",
            neve_single_product_container_style: ".single-product .neve-main > div"
        },
        containersLivePreview: function() {
            "use strict";
            $.each(this.containersLayoutMap, function(controlId, cssSelector) {
                cssSelector += ":not(.set-in-metabox)";
                wp.customize(controlId, function(value) {
                    value.bind(function(newval) {
                        if (newval === "contained") {
                            $(cssSelector).removeClass("container-fluid").addClass("container");
                            return false;
                        }
                        $(cssSelector).removeClass("container").addClass("container-fluid");
                    });
                });
            });
        }
    };
})(jQuery);

jQuery.neveLayoutPreview.init();
//# sourceMappingURL=customizer-preview.js.map