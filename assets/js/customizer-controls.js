(function($) {
    "use strict";
    wp.tiCustomizeButton = {
        init: function() {
            jQuery("#customize-theme-controls").on("click", ".menu-shortcut", function(e) {
                wp.customize.section("menu_locations").focus();
                e.preventDefault();
            });
        }
    };
    $(document).ready(function() {
        wp.tiCustomizeButton.init();
    });
})(jQuery);

(function($) {
    "use strict";
    wp.neveSelect = {
        init: function() {
            var self = this;
            $(".neve-fs-main-input, .neve-fs-input-addon").on("click", function(e) {
                $(this).parent().toggleClass("active");
                $(".neve-ss-wrap.active .neve-fs-search input").focus();
                e.stopPropagation();
                return false;
            });
            $(".neve-fs-option").on("click", function() {
                var value = $(this).data("option");
                var source = $(this).data("source");
                var controlId = $(this).data("control");
                wp.customize.previewer.send("font-selection", {
                    value: value,
                    source: source,
                    controlId: controlId
                });
                var mainInput = $(".neve-ss-wrap.active input.neve-fs-main-input");
                var collector = $(".neve-ss-wrap.active .neve-ss-collector");
                $(".neve-ss-wrap.active").removeClass("active");
                mainInput.val(value);
                if (value === "Default") {
                    value = "";
                }
                collector.val(value);
                collector.trigger("change");
                return false;
            });
            $(".neve-fs-search input").on("keyup", function() {
                self.search($(this));
                return false;
            });
            $(document).mouseup(function(e) {
                var container = $(".neve-ss-wrap.active .neve-fs-dropdown");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    $(".neve-ss-wrap.active").removeClass("active");
                }
            });
        },
        search: function($searchInput) {
            var itemsList = jQuery(".neve-ss-wrap.active .neve-fs-options-wrapper");
            var searchTerm = $searchInput.val().toLowerCase();
            if (searchTerm.length > 0) {
                itemsList.children().children(".neve-fs-option").each(function() {
                    if ($(this).filter("[data-filter*=".concat(searchTerm).concat("]")).length > 0 || searchTerm.length < 1) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            } else {
                itemsList.children().children().show();
            }
        }
    };
    $(document).ready(function() {
        wp.neveSelect.init();
    });
})(jQuery);

(function($) {
    "use strict";
    wp.neveHeadingAccordion = {
        init: function() {
            this.handleToggle();
        },
        handleToggle: function() {
            $(".customize-control-customizer-heading.accordion .neve-customizer-heading").on("click", function() {
                var accordion = $(this).closest(".accordion");
                $(accordion).toggleClass("expanded");
                return false;
            });
        }
    };
    $(document).ready(function() {
        wp.neveHeadingAccordion.init();
    });
})(jQuery);

(function($, api) {
    "use strict";
    api.controlConstructor["select-multiple"] = api.Control.extend({
        ready: function() {
            var control = this;
            $("select", control.container).change(function() {
                var value = $(this).val();
                if (null === value) {
                    control.setting.set("");
                } else {
                    control.setting.set(value);
                }
            });
        }
    });
})(jQuery, wp.customize);

(function($) {
    "use strict";
    wp.neveOrderControl = {
        init: function() {
            this.setupSorting();
            this.handleHide();
        },
        setupSorting: function() {
            var self = this;
            $(".ti-order-sortable").each(function() {
                $(this).sortable({
                    revert: true,
                    axis: "y",
                    containment: "parent",
                    update: function() {
                        self.updateOrder(this);
                    }
                });
            });
        },
        updateOrder: function(control) {
            var value = [];
            var items = $(control).find("li.enabled");
            $(items).each(function() {
                value.push($(this).data("id"));
            });
            $(control).next().val(JSON.stringify(value));
            $(control).next().trigger("change");
        },
        handleHide: function() {
            var self = this;
            $(".toggle-display").on("click touchstart", function() {
                $(this).parent().toggleClass("enabled");
                self.updateOrder($(this).closest(".ti-order-sortable"));
            });
        }
    };
    $(document).ready(function() {
        wp.neveOrderControl.init();
    });
})(jQuery);

wp.customize.controlConstructor["range-value"] = wp.customize.Control.extend({
    ready: function() {
        "use strict";
        jQuery.fn.exists = function() {
            return this.length > 0;
        };
        var control = this, changeAction;
        var theme_controls = jQuery("#customize-theme-controls");
        function syncRangeText(slider, input, from) {
            switch (from) {
              case "slider":
                var value = slider.val();
                var type = jQuery(input).attr("type");
                if (type === "text") {
                    if (value >= 0) {
                        value = "+" + value;
                    }
                }
                input.val(value);
                break;

              case "input":
                slider.val(input.val());
                break;
            }
        }
        function updateValues(control) {
            var collector = control.find(".range-collector");
            var values = getSliderValues(control);
            var have_queries = Object.keys(values).length > 1;
            if (have_queries) {
                collector.val(JSON.stringify(values));
            } else {
                collector.val(values.desktop);
            }
            collector.trigger("change");
        }
        function getSliderValues(control) {
            var values = {};
            var desktopSelector = control.find('.range-slider__range[data-query="desktop"]'), tabletSelector = control.find('.range-slider__range[data-query="tablet"]'), mobileSelector = control.find('.range-slider__range[data-query="mobile"]'), desktopValue, tabletValue, mobileValue;
            if (mobileSelector.exists()) {
                mobileValue = mobileSelector.val();
                if (mobileValue !== "undefined" && mobileValue !== "") {
                    values.mobile = mobileValue;
                }
            }
            if (tabletSelector.exists()) {
                tabletValue = tabletSelector.val();
                if (tabletValue !== "undefined" && tabletValue !== "") {
                    values.tablet = tabletValue;
                }
            }
            if (desktopSelector.exists()) {
                desktopValue = desktopSelector.val();
                if (desktopValue !== "undefined" && desktopValue !== "") {
                    values.desktop = desktopValue;
                }
            }
            return values;
        }
        theme_controls.on("input", ".range-slider__range", function() {
            var slider = jQuery(this);
            var input = jQuery(this).next();
            var control = jQuery(this).parent().parent();
            syncRangeText(slider, input, "slider");
            updateValues(control);
        });
        theme_controls.on("keyup change", ".range-slider-value", function() {
            var control = jQuery(this).parent().parent();
            var slider = jQuery(this).prev();
            var input = jQuery(this);
            syncRangeText(slider, input, "input");
            updateValues(control);
        });
        theme_controls.on("blur", ".range-slider-value", function() {
            var slider = jQuery(this).prev();
            var min = parseInt(slider.attr("min"));
            var max = parseInt(slider.attr("max"));
            var input = jQuery(this);
            var value = parseInt(jQuery(this).val());
            if (value < min) {
                input.val(min);
                return false;
            } else if (value > max) {
                input.val(max);
                return false;
            }
        });
        theme_controls.on("click", ".range-reset-slider", function(event) {
            event.preventDefault();
            var input = jQuery(this).prev();
            var slider = input.prev();
            var control = jQuery(this).parent().parent();
            var defaultValue = slider.data("default");
            var type = jQuery(input).attr("type");
            if (type === "text") {
                defaultValue = "+0";
            }
            input.val(defaultValue);
            slider.val(defaultValue);
            updateValues(control);
        });
        if ("postMessage" === control.setting.transport) {
            changeAction = "mousemove change";
        } else {
            changeAction = "change";
        }
        this.container.on(changeAction, ".range-collector", function() {
            control.setting.set(jQuery(this).val());
        });
    }
});

wp.customize.controlConstructor["responsive-number"] = wp.customize.Control.extend({
    ready: function() {
        "use strict";
        var control = this;
        this.container.on("change keyup paste", "input.responsive-number--input, select.responsive-number--select", function() {
            control.updateValue();
        });
        this.container.on("click touchstart", ".reset-number-input", function() {
            control.resetValues();
        });
    },
    resetValues: function() {
        "use strict";
        this.container.find(".responsive-number--input").each(function() {
            jQuery(this).val(jQuery(this).data("default"));
        });
        this.container.find(".responsive-number--select").each(function() {
            jQuery(this).find("option").removeAttr("selected");
            jQuery(this).find("option[value=" + jQuery(this).data("default") + "]").attr("selected", "selected");
        });
        this.updateValue();
    },
    updateValue: function() {
        "use strict";
        var control = this, newValue = {
            suffix: {}
        };
        control.container.find(".control-wrap").each(function() {
            var controlValue = jQuery(this).find("input").val();
            var controlUnit = jQuery(this).find("select").val();
            var query = jQuery(this).find("input").data("query");
            newValue[query] = controlValue;
            if (typeof controlUnit !== "undefined") {
                newValue.suffix[query] = controlUnit;
            }
        });
        var collector = jQuery(control).find(".responsive-number-collector");
        collector.val(JSON.stringify(newValue));
        control.setting.set(JSON.stringify(newValue));
    }
});

jQuery(document).ready(function($) {
    "use strict";
    $.responsiveSwitchers = {
        init: function() {
            this.manageSwitchers();
            this.manageWPDevices();
        },
        manageSwitchers: function() {
            jQuery(".customize-control .responsive-switchers button").on("click", function(event) {
                var $this = $(this), $devices = $(".responsive-switchers"), $device = $(event.currentTarget).data("device"), $control = $(".customize-control .has-media-queries"), $body = $(".wp-full-overlay"), $footer_devices = $(".wp-full-overlay-footer .devices");
                $devices.find("button").removeClass("active");
                $devices.find("button.preview-" + $device).addClass("active");
                $control.find(".control-wrap").removeClass("active");
                $control.find(".control-wrap." + $device).addClass("active");
                $body.removeClass("preview-desktop preview-tablet preview-mobile").addClass("preview-" + $device);
                $footer_devices.find("button").removeClass("active").attr("aria-pressed", false);
                $footer_devices.find("button.preview-" + $device).addClass("active").attr("aria-pressed", true);
                if ($this.hasClass("preview-desktop")) {
                    $devices.toggleClass("responsive-switchers-open");
                }
            });
        },
        manageWPDevices: function() {
            jQuery("#customize-footer-actions .devices button").on("click", function(event) {
                event.preventDefault();
                var device = jQuery(this).data("device");
                var queries = jQuery(".responsive-switchers");
                if (device !== "desktop") {
                    queries.addClass("responsive-switchers-open");
                } else {
                    queries.removeClass("responsive-switchers-open");
                }
                queries.find("button").removeClass("active");
                queries.find("button.preview-" + device).addClass("active");
                var control = jQuery(".range-slider.has-media-queries");
                control.find(".desktop-range").removeClass("active");
                control.find(".tablet-range").removeClass("active");
                control.find(".mobile-range").removeClass("active");
                control.find("." + device + "-range").addClass("active");
            });
        }
    };
    $.responsiveSwitchers.init();
});

(function($, api) {
    var control = api.Control.extend({
        ready: function() {
            var control = this;
            control.container.find(".buttonset").buttonset();
            api.bind("ready", function() {
                api(control.id, function(value) {
                    var func = function(newval) {
                        var i, j, k, controlName, selector, currentControl, currentControl2, selector2, subControlsToShow, controlName2;
                        var controls = control.params.subcontrols;
                        var sectionName = control.section();
                        var sectionContainer = wp.customize.section(sectionName).container;
                        var currentValue = newval;
                        var controlsToShow = controls[currentValue];
                        if (typeof control.params.parent !== "undefined") {
                            var parentName = control.params.parent;
                            var parentControl = wp.customize.control(parentName);
                            if (typeof parentControl !== "undefined") {
                                var parentValue = parentControl.setting._value;
                                var parentOptions = parentControl.params.subcontrols[parentValue];
                                if (typeof parentOptions !== "undefined" && parentOptions.length === 0) {
                                    controlsToShow = [];
                                }
                            }
                        }
                        var allControlsArray = Object.values(controls);
                        allControlsArray = [].concat.apply([], allControlsArray);
                        for (i in allControlsArray) {
                            controlName = allControlsArray[i];
                            if (controlName === "widgets") {
                                jQuery(sectionContainer).children('li[class*="widget"]').css("display", "none");
                            } else {
                                currentControl = wp.customize.control(controlName);
                                if (typeof currentControl.params.subcontrols !== "undefined") {
                                    for (j in currentControl.params.subcontrols) {
                                        for (k in currentControl.params.subcontrols[j]) {
                                            selector = api.control(currentControl.params.subcontrols[j][k]).selector;
                                            jQuery(selector).hide();
                                        }
                                    }
                                }
                                if (typeof currentControl !== "undefined") {
                                    selector = currentControl.selector;
                                    jQuery(selector).hide();
                                }
                            }
                        }
                        for (i in controlsToShow) {
                            controlName = controlsToShow[i];
                            if (controlName === "widgets") {
                                jQuery(sectionContainer).children('li[class*="widget"]').css("display", "list-item");
                            } else {
                                currentControl = wp.customize.control(controlName);
                                if (typeof currentControl !== "undefined") {
                                    selector = currentControl.selector;
                                    jQuery(selector).show();
                                    currentValue = currentControl.setting._value;
                                    if (typeof wp.customize.control(controlName).params.subcontrols !== "undefined") {
                                        subControlsToShow = wp.customize.control(controlName).params.subcontrols[currentValue];
                                        for (j in subControlsToShow) {
                                            controlName2 = subControlsToShow[j];
                                            currentControl2 = wp.customize.control(controlName2);
                                            if (typeof currentControl2 !== "undefined") {
                                                selector2 = currentControl2.selector;
                                                jQuery(selector2).show();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                    func(value.get());
                    value.bind(func);
                });
            });
        }
    });
    api.controlConstructor["radio-image"] = control;
    api.controlConstructor["select-hiding"] = control;
})(jQuery, wp.customize);

wp.customize.controlConstructor["interface-tabs"] = wp.customize.Control.extend({
    ready: function() {
        wp.customize.previewer.bind("tab-previewer-edit", function(data) {
            jQuery(data.selector).trigger("click");
        });
        wp.customize.previewer.bind("focus-control", function(data) {
            setTimeout(function() {
                var control = wp.customize.control(data);
                if (typeof control !== "undefined") {
                    wp.customize.control(data).focus();
                }
            }, 100);
        });
        wp.customize.previewer.bind("focus-section", function(data) {
            setTimeout(function() {
                wp.customize.section(data).focus();
            }, 100);
        });
        wp.customize.previewer.bind("ready", function() {
            var parts = window.location.search.substr(1).split("&");
            var $_GET = {};
            for (var i = 0; i < parts.length; i++) {
                var temp = parts[i].split("=");
                $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
            }
            if (typeof $_GET["autofocus[control]"] !== "undefined" && $_GET["autofocus[control]"] !== "") {
                jQuery('li[id^="customize-control-sidebars_widgets"]').on("DOMNodeInserted", function() {
                    jQuery(".neve-customizer-tab > label." + $_GET["autofocus[control]"]).trigger("click");
                });
            }
        });
        this.init();
        this.handleClick();
    },
    init: function() {
        var control = this;
        var section = control.section();
        setTimeout(function() {
            jQuery('li[id^="customize-control-sidebars_widgets"]').each(function() {
                jQuery(this).on("DOMNodeInserted", function() {
                    jQuery(".neve-customizer-tab.active > label").trigger("click");
                });
            });
        }, 100);
        wp.customize.bind("ready", function() {
            control.hideAllControls(section);
            var tab = Object.keys(control.params.controls)[0];
            var controlsToShow = control.params.controls[tab];
            var allControls = [];
            for (var controlName in controlsToShow) {
                if (controlsToShow.hasOwnProperty(controlName)) {
                    if (jQuery.isEmptyObject(controlsToShow[controlName]) === false && typeof wp.customize.control(controlName) !== "undefined") {
                        var subTabValue = wp.customize.control(controlName).setting._value;
                        allControls = allControls.concat(controlsToShow[controlName][subTabValue]);
                    }
                    allControls.push(controlName);
                }
            }
            control.showControls(allControls, section);
        });
    },
    hideAllControls: function(section) {
        var controls = wp.customize.section(section).controls();
        var tabControl = this.id;
        for (var i in controls) {
            var controlId = controls[i].id;
            if (controlId === "widgets") {
                var sectionContainer = wp.customize.section(section).container;
                jQuery(sectionContainer).children('li[class*="widget"]').css("display", "none");
            } else {
                if (controlId !== tabControl) {
                    var selector = wp.customize.control(controlId).selector;
                    jQuery(selector).hide();
                }
            }
        }
    },
    handleClick: function() {
        var control = this;
        var section = control.section();
        var container = control.container;
        jQuery(container).find(".neve-customizer-tab").on("click", function() {
            jQuery(this).parent().find(".neve-customizer-tab").removeClass("active");
            jQuery(this).addClass("active");
            control.hideAllControls(section);
            var tab = jQuery(this).data("tab");
            var controlsToShow = control.params.controls[tab];
            var allControls = [];
            for (var controlName in controlsToShow) {
                if (jQuery.isEmptyObject(controlsToShow[controlName]) === false && typeof wp.customize.control(controlName) !== "undefined") {
                    var subTabValue = wp.customize.control(controlName).setting._value;
                    allControls = allControls.concat(controlsToShow[controlName][subTabValue]);
                }
                allControls.push(controlName);
            }
            control.showControls(allControls, section);
        });
    },
    showControls: function(controls, section) {
        for (var i in controls) {
            var controlName = controls[i];
            if (controlName === "widgets") {
                var sectionContainer = wp.customize.section(section).container;
                jQuery(sectionContainer).children('li[class*="widget"]').css("display", "list-item");
            } else {
                if (typeof wp.customize.control(controlName) !== "undefined") {
                    var selector = wp.customize.control(controlName).selector;
                    jQuery(selector).show();
                }
            }
        }
    }
});
//# sourceMappingURL=customizer-controls.js.map