(function($, wpcustomize) {
	var $document = $(document);
	var customifyPanels = {};

	wpcustomize.bind("ready", function(e, b) {
		var addVersionChange = function(opts, builder, id, version) {
			if (typeof opts.versions === "object") {
				var select_options = "";
				$.each(opts.versions, function(key, _opts) {
					var seleced = "";
					if (key === version) {
						seleced = ' selected="selected" ';
					}
					select_options +=
						'<option value="' +
						key +
						'" ' +
						seleced +
						">" +
						_opts.label +
						"</option>";
				});
				
				if (select_options) {
					var $select_options = $(
						'<select class="builder-version-change button-primary">' +
							select_options +
							"</select>"
					);
					$(".customify--cb-actions", builder.container).prepend(
						$select_options
					);
				}

				$select_options.on("change", function() {
					var newVer = $(this).val();
					if ( customifyPanels[id + version] ) {
						customifyPanels[id + version].container.hide();
					}
					
					if (typeof customifyPanels[id + newVer] === "undefined") {
						var _builder;
						if ("v2" === newVer) {
							_builder = new CustomizeBuilder_V2(opts, id);
						} else {
							_builder = new CustomizeBuilder_V1(opts, id);
						}
						addVersionChange(opts, _builder, id, newVer);
						customifyPanels[id + newVer] = _builder;
					}
					
					var control = wpcustomize.control(opts.version_id);
					control.setting.set( newVer );
					// Dispacth to conditional
					$document.trigger("customify/customizer/value_changed" );
					
					if ( customifyPanels[id + newVer] ) {
						customifyPanels[id + newVer].container.show();
					}
					
					// Reset select.
					$select_options.find("option").removeAttr("selected");
					$select_options
						.find('option[value="' + version + '"]')
						.attr("selected", "selected");
				});
			}
		};

		_.each(Customify_Layout_Builder.builders, function(opts, id) {
			var builder;
			var version = "v1";
			if (typeof opts.version_id !== "undefined") {
				version = wpcustomize.control(opts.version_id).params.value;
			} else {
				opts.version_id = false;
			}
			if ("v2" === version) {
				builder = new CustomizeBuilder_V2(opts, id);
			} else {
				builder = new CustomizeBuilder_V1(opts, id);
			}

			customifyPanels[id + version] = builder;
			addVersionChange(opts, builder, id, version);
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
							Customify_Layout_Builder.footer_moved_widgets_text +
							"</p>"
					);
				}
			}, 1000);
		});

		// When focus section
		wpcustomize.state("expandedSection").bind(function(section) {
			$(".customify--device-panel .grid-stack-item").removeClass(
				"item-active"
			);
			$(".customify--cb-row").removeClass("row-active");
			if (section) {
				$('.customify--cb-row[data-id="' + section.id + '"]').addClass(
					"row-active"
				);
				$(
					".customify--device-panel .grid-stack-item.for-s-" +
						section.id
				).addClass("item-active");
			}
		});

		//Event when panel toggle
		/**
		 * See /wp-admin/js/customize-controls.js L4690
		 */
		/*
        wpcustomize.state( 'paneVisible' ).bind( function( paneVisible ) {
            console.log( 'paneVisible state', paneVisible );
        });

        wpcustomize.state( 'expandedPanel' ).bind( function( paneVisible ) {
            console.log( 'expandedPanel state', paneVisible );
            console.log( 'expandedPanel state Builder', wpcustomize.state( 'expandedPanel' ).get() );
        });
        */
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

	// Save Template
	$document.on(
		"click",
		".save-template-form .save-builder-template",
		function(e) {
			e.preventDefault();
			var form = $(this).closest(".customize-control");
			var input = $(".template-input-name", form);
			var template_name = input.val();
			if (template_name && template_name !== "") {
				// Need Improve
				$.post(
					ajaxurl,
					{
						action: "customify_builder_save_template",
						name: input.val(),
						id: input.attr("data-builder-id") || "",
						control: input.attr("data-control-id") || "",
						preview_data: wpcustomize.get()
					},
					function(res) {
						if (res.success) {
							input.val("");
							form.find(".list-saved-templates").prepend(
								res.data.li
							);
							form.find(".list-saved-templates").addClass(
								"has-templates"
							);
						}

						/**
						 * @see app/public/wp-admin/js/customize-controls.js L1452
						 *  loadThemePreview
						 */
					}
				);
			}
		}
	);

	$document.on(
		"click",
		".list-saved-templates .saved_template .remove-tpl",
		function(e) {
			e.preventDefault();
			var item = $(this).parent();
			var form = $(this).closest(".customize-control");
			var input = $(".template-input-name", form);
			var key = item.data("id") || "";
			$.post(
				ajaxurl,
				{
					action: "customify_builder_save_template",
					id: input.attr("data-builder-id") || "",
					remove: key
				},
				function(res) {
					item.remove();
					if (
						form.find(".list-saved-templates li.saved_template")
							.length <= 0
					) {
						form.find(".list-saved-templates").removeClass(
							"has-templates"
						);
					}
				}
			);
		}
	);

	var encodeValue = function(value) {
		return encodeURI(JSON.stringify(value));
	};

	// Load templates
	$document.on(
		"click",
		".list-saved-templates .saved_template .load-tpl",
		function(e) {
			e.preventDefault();
			var item = $(this).parent();
			var deferred = $.Deferred();
			var urlParser = _.clone(window.location);
			var control_id = item.data("control-id") || "";

			var data = item.data("data") || {};
			if (!_.isObject(data)) {
				data = {};
			}

			_.each(data, function(value, key) {
				if (wpcustomize.control(key)) {
					if (!_.isEmpty(value)) {
						wpcustomize
							.control(key)
							.setting.set(encodeValue(value));
					}
				}
			});

			var overlay = $(".wp-full-overlay");
			overlay.addClass(
				"customize-active full-overlay-active customize-loading"
			);

			var onceProcessingComplete = function() {
				var request;
				if (wpcustomize.state("processing").get() > 0) {
					return;
				}

				wpcustomize.state("processing").unbind(onceProcessingComplete);

				request = wpcustomize.requestChangesetUpdate();
				request.done(function() {
					$(window).off("beforeunload.customize-confirm");
					top.location.href =
						urlParser.origin +
						urlParser.pathname +
						"?autofocus[control]=" +
						control_id +
						"&url=" +
						encodeURIComponent(
							wpcustomize.previewer.previewUrl.get()
						) +
						"&changeset_uuid=" +
						wpcustomize.settings.changeset.uuid;
					deferred.resolve();
				});
				request.fail(function() {
					overlay.removeClass("customize-loading");
					deferred.reject();
				});

				return deferred.promise();
			};

			if (0 === wpcustomize.state("processing").get()) {
				onceProcessingComplete();
			} else {
				wpcustomize.state("processing").bind(onceProcessingComplete);
			}
		}
	);

	$document.on("mouseover", ".customify--cb-row .grid-stack-item", function(
		e
	) {
		var item = $(this);
		var nameW =
			$(".customify--cb-item-remove", item).outerWidth() +
			$(".customify--cb-item-setting", item).outerWidth();
		var itemW = $(".grid-stack-item-content", item).innerWidth();
		if (nameW > itemW - 50) {
			item.addClass("show-tooltip");
		}
	});

	$document.on("mouseleave", ".customify--cb-row .grid-stack-item", function(
		e
	) {
		$(this).removeClass("show-tooltip");
	});
})(jQuery, wp.customize || null);
