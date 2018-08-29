(function($) {
    $.neveCustomizeUtilities = {
        setLiveCss: function(settings, to) {
            "use strict";
            var result = "";
            var styleClass = $("." + settings.styleClass);
            if (to === null && typeof to !== "object") {
                $(settings.selectors).css(settings.cssProperty, to + "px");
            }
            $.each(to, function(key, value) {
                var style_to_add;
                style_to_add = settings.selectors + "{ " + settings.cssProperty + ":" + value + settings.propertyUnit + "}";
                switch (key) {
                  case "desktop":
                    result += style_to_add;
                    break;

                  case "tablet":
                    result += "@media (max-width: 767px){" + style_to_add + "}";
                    break;

                  case "mobile":
                    result += "@media (max-width: 480px){" + style_to_add + "}";
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

var fontControls = {
    neve_body_font_family: {
        linkNodeId: "neve-google-font-body-css",
        selectors: "body"
    },
    neve_headings_font_family: {
        linkNodeId: "neve-google-font-headings-css",
        selectors: "h1,h2,h3,h4,h5,h6"
    }
};

var fontSelectionPreview = function($) {
    "use strict";
    $(function() {
        wp.customize.preview.bind("font-selection", function(data) {
            $("#" + fontControls[data.controlId].linkNodeId).remove();
            if (data.source !== "system") {
                generateLinkNode(fontControls[data.controlId].linkNodeId, data.value);
            }
            if (data.value === "Default") {
                $(fontControls[data.controlId].selectors).css("font-family", "");
            }
            $(fontControls[data.controlId].selectors).css("font-family", data.value);
            return false;
        });
    });
};

fontSelectionPreview(jQuery);

function generateLinkNode(elementId, googleFontName) {
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
}

var layoutRanges = {
    neve_container_width: {
        selector: ".container",
        cssProp: "max-width",
        unit: "px",
        styleClass: "container-width-css"
    },
    neve_sidebar_width: {
        selector: ".nv-sidebar-wrap",
        cssProp: "max-width",
        unit: "%",
        styleClass: "sidebar-width-css"
    }
};

var layoutLivePreview = function($) {
    "use strict";
    $.each(layoutRanges, function(id, args) {
        wp.customize(id, function(value) {
            value.bind(function(newval) {
                var values = JSON.parse(newval);
                if (!values) {
                    return true;
                }
                var settings = {
                    selectors: args.selector,
                    cssProperty: args.cssProp,
                    propertyUnit: args.unit,
                    styleClass: args.styleClass
                };
                $.neveCustomizeUtilities.setLiveCss(settings, values);
            });
        });
    });
};

layoutLivePreview(jQuery);

var containersLayoutMap = {
    neve_default_container_style: ".page:not(.woocommerce) .single-page-container",
    neve_blog_archive_container_style: ".archive-container",
    neve_single_post_container_style: ".single-post-container",
    neve_shop_archive_container_style: ".woocommerce-page:not(.single-product) .single-page-container",
    neve_single_product_container_style: ".single-product .single-post-container"
};

var containersLivePreview = function($) {
    "use strict";
    $.each(containersLayoutMap, function(controlId, cssSelector) {
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
};

containersLivePreview(jQuery);
//# sourceMappingURL=customizer-preview.js.map