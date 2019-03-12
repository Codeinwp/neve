(function($, wpcustomize) {
	var $document = $(document);
	var hfgPanels = {};

	wpcustomize.bind("ready", function(e, b) {
		_.each(HFG_Layout_Builder.builders, function(opts, id) {
			var builder = new CustomizeBuilder_V1(opts, id);
			hfgPanels[id] = builder;
		});

		wpcustomize.bind("pane-contents-reflowed", function() {
			setTimeout(function() {
				if (
					$(
						"#sub-accordion-panel-widgets .no-widget-areas-rendered-notice .footer_moved_widgets_text"
					).length
				) {
				} else {
					$(
						"#sub-accordion-panel-widgets .no-widget-areas-rendered-notice"
					).append(
						'<p class="footer_moved_widgets_text">' +
							HFG_Layout_Builder.footer_moved_widgets_text +
							"</p>"
					);
				}
			}, 1000);
		});

		// When focus section
		wpcustomize.state("expandedSection").bind(function(section) {
			$(".hfg--device-panel .grid-stack-item").removeClass(
				"item-active"
			);
			$(".hfg--cb-row").removeClass("row-active");
			if (section) {
				$('.hfg--cb-row[data-id="' + section.id + '"]').addClass(
					"row-active"
				);
				$(
					".hfg--device-panel .grid-stack-item.for-s-" +
						section.id
				).addClass("item-active");
			}
		});
	});

	// Focus
	$document.on("click", ".focus-section", function(e) {
		e.preventDefault();
		var id = $(this).attr("data-id") || "";
		if (!id) {
			id = $(this).attr("href") || "";
			id = id.replace("#", "");
		}

		if (id) {
			if (wpcustomize.section(id)) {
				wpcustomize.section(id).focus();
			}
		}
	});

	$document.on("click", ".focus-control", function(e) {
		e.preventDefault();
		var id = $(this).attr("data-id") || "";
		if (!id) {
			id = $(this).attr("href") || "";
			id = id.replace("#", "");
		}
		if (id) {
			if (wpcustomize.control(id)) {
				wpcustomize.control(id).focus();
			}
		}
	});

	$document.on("click", ".focus-panel", function(e) {
		e.preventDefault();
		var id = $(this).attr("data-id") || "";
		if (!id) {
			id = $(this).attr("href") || "";
			id = id.replace("#", "");
		}
		if (id) {
			if (wpcustomize.panel(id)) {
				wpcustomize.panel(id).focus();
			}
		}
	});

	$document.on("mouseover", ".hfg--cb-row .grid-stack-item", function( e ) {
		var item = $(this);
		var nameW =
			$(".hfg--cb-item-remove", item).outerWidth() +
			$(".hfg--cb-item-setting", item).outerWidth();
		var itemW = $(".grid-stack-item-content", item).innerWidth();
		if (nameW > itemW - 50) {
			item.addClass("show-tooltip");
		}
	});

	$document.on("mouseleave", ".hfg--cb-row .grid-stack-item", function( e ) {
		$(this).removeClass("show-tooltip");
	});
})(jQuery, wp.customize || null);
