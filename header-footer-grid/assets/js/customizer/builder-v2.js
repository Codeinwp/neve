var CustomizeBuilder_V2;

(function($) {
	var $document = $(document);
	var wpcustomize = wp.customize || null;
	var is_rtl = HFG_Layout_Builder.is_rtl;

	CustomizeBuilder_V2 = function(options, id) {
		var Builder = {
			id          : id,
			version     : 'v2',
			controlId   : "",
			items       : [],
			container   : null,
			ready       : false,
			devices     : { desktop: "Desktop", mobile: "Mobile/Tablet" },
			activePanel : "desktop",
			panels      : {},
			activeRow   : "main",
			draggingItem: null,
			getTemplate: _.memoize(function() {
				var control = this;
				var compiled,
					/*
					 * Underscore's default ERB-style templates are incompatible with PHP
					 * when asp_tags is enabled, so WordPress uses Mustache-inspired templating syntax.
					 *
					 * @see trac ticket #22344.
					 */
					options = {
						evaluate: /<#([\s\S]+?)#>/g,
						interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
						escape: /\{\{([^\}]+?)\}\}(?!\})/g,
						variable: "data"
					};

				return function(data, id, data_variable_name) {
					if (_.isUndefined(id)) {
						id = "tmpl-customize-control-" + control.type;
					}
					if (
						!_.isUndefined(data_variable_name) &&
						_.isString(data_variable_name)
					) {
						options.variable = data_variable_name;
					} else {
						options.variable = "data";
					}
					compiled = _.template($("#" + id).html(), null, options);
					return compiled(data);
				};
			}),
			drag_drop: function() {
				var that = this;

				$(".hfg--device-panel", that.container).each(function() {
					var panel = $(this);
					var device = panel.data("device");
					var sortable_ids = [];
					$(".col-items", panel).each(function(index) {
						var data_name = $(this).attr("data-id") || "";
						var id;
						if (!data_name) {
							id = "_sid_" + device + index;
						} else {
							id = "_sid_" + device + "-" + data_name;
						}
						$(this).attr("id", id);
						sortable_ids[index] = "#" + id;
					});

					$(".col-items, .hfg-available-items", panel).each(function() {
						$(this).droppable().sortable({
							placeholder: "sortable-placeholder grid-stack-item",
							connectWith: ".col-items",
							update: function(){
								that.save();
							}
						});
					});

					var sidebar = $("#_sid_mobile-sidebar", panel);
					var sidebar_id = sidebar.attr("id") || false;
					
					if (sidebar.length > 0) {
						sidebar.sortable({
							revert: true,
							change: function(event, ui) {
								that.save();
							}
						});
					}


				});
			},

			
			addPanel: function(device) {
				var that = this;
				var template = that.getTemplate();
				var template_id = "tmpl-hfg--cb-panel-v2";
				if ($("#" + template_id).length == 0) {
					return;
				}
				if (!_.isObject(options.rows)) {
					options.rows = {};
				}
				var html = template(
					{
						device: device,
						id: options.id,
						rows: options.rows
					},
					template_id
				);
				return (
					'<div class="hfg--device-panel hfg-vertical-panel hfg--panel-' +
					device +
					'" data-device="' +
					device +
					'">' +
					html +
					"</div>"
				);
			},
			addDevicePanels: function() {
				var that = this;
				_.each(that.devices, function(device_name, device) {
					var panelHTML = that.addPanel(device);
					$(".hfg--cb-devices-switcher", that.container).append(
						'<a href="#" class="switch-to switch-to-' +
							device +
							'" data-device="' +
							device +
							'">' +
							device_name +
							"</a>"
					);
					$(".hfg--cb-body", that.container).append(panelHTML);
				});

				if ($("#hfg-upsell-tmpl").length) {
					$($("#hfg-upsell-tmpl").html()).insertAfter(
						$(".hfg--cb-devices-switcher", that.container)
					);
				}
			},
			addItem: function(node) {
				var that = this;
				var template = that.getTemplate();
				var template_id = "tmpl-hfg--cb-item";
				if ($("#" + template_id).length == 0) {
					return;
				}
				var html = template(node, template_id);
				return $(html);
			},
			
			addAvailableItems: function() {
				var that = this;

				_.each(that.devices, function(device_name, device) {
					var $itemWrapper = $(
						'<div class="hfg-available-items" data-device="' + device + '"></div>'
					);

					$(".hfg--panel-" + device, that.container).append(
						$itemWrapper
					);

					_.each(that.items, function(node) {
						var _d = true;
						if (
							!_.isUndefined(node.devices) &&
							!_.isEmpty(node.devices)
						) {
							if (_.isString(node.devices)) {
								if (node.devices != device) {
									_d = false;
								}
							} else {
								var _has_d = false;
								_.each(node.devices, function(_v) {
									if (device == _v) {
										_has_d = true;
									}
								});
								if (!_has_d) {
									_d = false;
								}
							}
						}

						if (_d) {
							var item = that.addItem(node);
							$itemWrapper.append(item);
						}
					});

				});
			},
			switchToDevice: function(device, toggle_button) {
				var that = this;
				var numberDevices = _.size(that.devices);
				if (numberDevices > 1) {
					$(
						".hfg--cb-devices-switcher a",
						that.container
					).removeClass("hfg--tab-active");
					$(
						".hfg--cb-devices-switcher .switch-to-" + device,
						that.container
					).addClass("hfg--tab-active");
					$(".hfg--device-panel", that.container).addClass(
						"hfg--panel-hide"
					);
					$(
						".hfg--device-panel.hfg--panel-" + device,
						that.container
					).removeClass("hfg--panel-hide");
					that.activePanel = device;
				} else {
					$(
						".hfg--cb-devices-switcher a",
						that.container
					).addClass("hfg--tab-active");
				}

				if (_.isUndefined(toggle_button) || toggle_button) {
					if (device == "desktop") {
						$("#customize-footer-actions .preview-desktop").trigger(
							"click"
						);
					} else {
						$("#customize-footer-actions .preview-mobile").trigger(
							"click"
						);
					}
				}
			},
			addNewWidget: function( device, row_id, col_id, node, index) {
				
				var that = this;
				var panel, row, col;
				panel = that.container.find(
					".hfg--device-panel.hfg--panel-" +device
				);
				
				row = $( '.hfg--cb-row.hfg--row-'+row_id, panel );
				col = $( '.col-items.col-'+col_id, row );

				var $item = $( '.hfg-available-items .grid-stack-item[data-id="'+node.id+'"]', panel );

				col.append($item);
			},
			addExistingRowsItems: function() {
				var that = this;

				var data = wpcustomize.control(that.controlId).params.value;
				if (!_.isObject(data)) {
					data = {};
				}
				
				_.each( that.devices, function( device_label, device ){
					var device_data = {};
					if (_.isObject(data[device])) {
						device_data = data[device];
					}
				
					_.each(device_data, function(cols, row_id) {
						if (!_.isUndefined(cols)) {
						
							_.each(cols, function( items, col_id ) {
								_.each( items, function(node, index ){
									that.addNewWidget( device, row_id, col_id, node, index );
								} );
								
							});
						}
					});
				});

				that.ready = true;
			},
			focus: function() {
				this.container.on(
					"click",
					".hfg--cb-item-setting, .hfg--cb-item-name, .item-tooltip",
					function(e) {
						e.preventDefault();
						var section = $(this).data("section") || "";
						var control = $(this).attr("data-control") || "";
						var did = false;
						if (control) {
							if (!_.isUndefined(wpcustomize.control(control))) {
								wpcustomize.control(control).focus();
								did = true;
							}
						}
						if (!did) {
							if (
								section &&
								!_.isUndefined(wpcustomize.section(section))
							) {
								wpcustomize.section(section).focus();
								did = true;
							}
						}
					}
				);

				// Focus rows
				this.container.on(
					"click",
					".hfg--cb-row-settings",
					function(e) {
						e.preventDefault();
						var id = $(this).attr("data-id") || "";
						var section = options.id + "_" + id;
						if (!_.isUndefined(wpcustomize.section(section))) {
							wpcustomize.section(section).focus();
						}
					}
				);
			},
			remove: function() {
				var that = this;
				$document.on(
					"click",
					".hfg--device-panel .hfg--cb-item-remove",
					function(e) {
						e.preventDefault();
						var item = $(this).closest(".grid-stack-item");
						var panel = item.closest(".hfg--device-panel");
						item.removeAttr("style");
						$(".hfg-available-items", panel).append(item);
						that.save();
					}
				);
			},
			encodeValue: function(value) {
				return encodeURI(JSON.stringify(value));
			},
			decodeValue: function(value) {
				return JSON.parse(decodeURI(value));
			},
			save: function() {
				var that = this;
				if (!that.ready) {
					return;
				}

				var data = {};

				_.each( that.devices, function( device_label, device ){
					data[ device ] = {};
					var devicePanel = $( '.hfg--panel-'+device, that.container );
					$( '.hfg--cb-row', devicePanel ).each( function(){
						var row = $( this );
						var row_id = row.attr( 'data-row-id' ) || false;
						var rowData = { };
						if ( row_id ) {

							$( '.col-items', row ).each( function(){
								var col = $( this );
								var col_id = col.attr( 'data-id' ) || false;
								if ( col_id ) {
									var colData = _.map(
										$(" > .grid-stack-item", col ),
										function(el) {
											el = $(el);
											return {
												id: el.data("id") || ""
											};
										}
									);
									rowData[ col_id ] = colData;
								}
							} );

							data[ device ][ row_id ] = rowData;
						}
					} );
				} );

				wpcustomize
					.control(that.controlId)
					.setting.set(that.encodeValue(data));

			},
			showPanel: function() {
				var that = this;
				this.container
					.removeClass("hfg--builder--hide")
					.addClass("hfg--builder-show");
				setTimeout(function() {
					var h = that.container.height();
					$("#customize-preview").addClass("cb--preview-panel-show");
				}, 100);
			},
			hidePanel: function() {
				this.container.removeClass("hfg--builder-show");
				$("#customize-preview")
					.removeClass("cb--preview-panel-show")
					.removeAttr("style");
			},
			togglePanel: function() {
				var that = this;
				wpcustomize.state("expandedPanel").bind(function(paneVisible) {
					if (wpcustomize.panel(options.panel).expanded()) {
						$document.trigger("hfg_panel_builder_open", [
							options.panel
						]);
						top._current_builder_panel = id;
						that.showPanel();
					} else {
						that.hidePanel();
					}
				});

				that.container.on("click", ".hfg--panel-close", function(
					e
				) {
					e.preventDefault();
					that.container.toggleClass("hfg--builder--hide");
					if (that.container.hasClass("hfg--builder--hide")) {
						$("#customize-preview").removeClass(
							"cb--preview-panel-show"
						);
					} else {
						$("#customize-preview").addClass(
							"cb--preview-panel-show"
						);
					}
				});
			},
			panelLayoutCSS: function() {
				var sidebarWidth = $("#customize-controls").width();
				if (!wpcustomize.state("paneVisible").get()) {
					sidebarWidth = 0;
				}
				if (is_rtl) {
					this.container
						.find(".hfg--cb-inner")
						.css({ "margin-right": sidebarWidth });
				} else {
					this.container
						.find(".hfg--cb-inner")
						.css({ "margin-left": sidebarWidth });
				}
			},
			init: function(controlId, items, devices) {
				var that = this;

				var template = that.getTemplate();
				var template_id = "tmpl-hfg--builder-panel";
				var html = template(options, template_id);
				that.container = $(html);
				that.container.addClass( 'hfg--panel-v2' );
				$("body .wp-full-overlay").append(that.container);
				that.controlId = controlId;
				that.items = items;
				that.devices = devices;

				if (options.section) {
					wpcustomize
						.section(options.section)
						.container.addClass("hfg--hide");
				}

				that.addDevicePanels();
				that.switchToDevice(that.activePanel);
				that.addAvailableItems();
				that.switchToDevice(that.activePanel);
				that.drag_drop();
				that.focus();
				that.remove();
				that.addExistingRowsItems();

				if (wpcustomize.panel(options.panel).expanded()) {
					that.showPanel();
				} else {
					that.hidePanel();
				}

				wpcustomize.previewedDevice.bind(function(newDevice) {
					if (newDevice === "desktop") {
						that.switchToDevice("desktop", false);
					} else {
						that.switchToDevice("mobile", false);
					}
				});

				that.togglePanel();
				if (wpcustomize.state("paneVisible").get()) {
					that.panelLayoutCSS();
				}
				wpcustomize.state("paneVisible").bind(function() {
					that.panelLayoutCSS();
				});

				$(window).resize(
					_.throttle(function() {
						that.panelLayoutCSS();
					}, 100)
				);

				// Switch panel
				that.container.on(
					"click",
					".hfg--cb-devices-switcher a.switch-to",
					function(e) {
						e.preventDefault();
						var device = $(this).data("device");
						that.switchToDevice(device);
					}
				);

				$document.trigger("hfg_builder_panel_loaded", [id, that]);
			}
		};

		var controlId = options.control_id;

		if ( typeof options.versions !== "undefined" ) {
			if ( typeof options.versions[ Builder.version ] === "undefined" ) {
				alert( 'Invaild settings' );
				return false;
			}
			controlId = options.versions[ Builder.version ].control_id;
		}

		Builder.init(controlId, options.items, options.devices);

		return Builder;
	};
})(jQuery);
