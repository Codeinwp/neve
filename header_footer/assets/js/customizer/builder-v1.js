var CustomizeBuilder_V1;

(function($) {
	var $document = $(document);
	var wpcustomize = wp.customize || null;
	var is_rtl = Customify_Layout_Builder.is_rtl;

	CustomizeBuilder_V1 = function(options, id) {
		var Builder = {
			id: id,
			controlId: "",
			cols: 12,
			cellHeight: 45,
			items: [],
			container: null,
			ready: false,
			devices: { desktop: "Desktop", mobile: "Mobile/Tablet" },
			activePanel: "desktop",
			panels: {},
			activeRow: "main",
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

				$(".customify--device-panel", that.container).each(function() {
					var panel = $(this);
					var device = panel.data("device");
					var sortable_ids = [];
					that.panels[device] = {};
					$(".customify--cb-items", panel).each(function(index) {
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
					$(".grid-stack", panel).each(function() {
						var _id = $(this).attr("data-id") || "";
						that.panels[device][_id] = $(this);
						$(this).droppable({
							out: function(event, ui) {},
							over: function(event, ui) {
								//var $wrapper = $( this );
								/**
								 * @see http://api.jqueryui.com/droppable/#event-over
								 */
							},
							drop: function(event, ui) {
								var $wrapper = $(this);
								that.gridster($wrapper, ui, event);
								that.save();
							}
						});
					});

					var sidebar = $("#_sid_mobile-sidebar", panel);
					var sidebar_id = sidebar.attr("id") || false;

					$(
						".customify-available-items .grid-stack-item",
						panel
					).draggable({
						revert: "invalid",
						connectToSortable: sidebar_id
							? "#" + sidebar_id
							: false,
						start: function(event, ui) {
							$("body").addClass("builder-item-moving");
							$(".customify--cb-items", panel).css("z-index", "");
							ui.helper.parent().css("z-index", 9999);
						},
						stop: function(event, ui) {
							$("body").removeClass("builder-item-moving");
							$(".customify--cb-items", panel).css("z-index", "");
							ui.helper.parent().css("z-index", "");
						}
					});

					if (sidebar.length > 0) {
						sidebar.sortable({
							revert: true,
							change: function(event, ui) {
								that.save();
							},
							receive: function(event, ui) {
								$(this)
									.find(".grid-stack-item")
									.removeAttr("style")
									.attr("data-gs-width", 1);
								that.save();
							}
						});

						that.panels[device]["sidebar"] = sidebar;
					}

					$(
						".customify-available-items .grid-stack-item",
						panel
					).resizable({
						handles: "w, e",
						stop: function(event, ui) {
							that.setGridWidth(ui.element.parent(), ui);
							that.save();
						}
					});
				});
			},
			sortGrid: function($wrapper) {
				$(".grid-stack-item", $wrapper).each(function() {
					var el = $(this);
					var x = el.attr("data-gs-x") || 0;
					x = parseInt(x);
					var next = el.next();
					if (next.length > 0) {
						var nx = next.attr("data-gs-x") || 0;
						nx = parseInt(nx);
						if (x > nx) {
							el.insertAfter(next);
						}
					}
				});
			},
			getX: function($item) {
				var x = $item.attr("data-gs-x") || 0;
				return parseInt(x);
			},
			getW: function($item, df) {
				if (_.isUndefined(df)) {
					df = false;
				}
				var w;
				if (df) {
					w = $item.attr("data-df-width") || 1;
				} else {
					w = $item.attr("data-gs-width") || 1;
				}
				return parseInt(w);
			},
			gridGetItemInfo: function($item, flag, $wrapper) {
				var that = this;
				var x = that.getX($item);
				var w = that.getW($item);
				var slot_before = 0;
				var slot_after = 0;
				var i;

				var br = false;
				// Get empty slots before
				i = x - 1;
				while (i >= 0 && !br) {
					if (flag[i] === 0) {
						slot_before++;
					} else {
						br = true;
					}
					i--;
				}

				// Get empty slots after
				br = false;
				i = x + w;
				while (i < that.cols && !br) {
					if (flag[i] === 0) {
						slot_after++;
					} else {
						br = true;
					}
					i++;
				}

				return {
					flag: flag,
					x: x,
					w: w,
					item: $item,
					before: slot_before, // empty before
					after: slot_after, // empty after
					id: $item.attr("data-id") || "",
					wrapper: $wrapper
				};
			},
			updateItemsPositions: function(flag) {
				var maxCol = this.cols;
				for (var i = 0; i <= maxCol; i++) {
					if (
						typeof flag[i] === "object" ||
						typeof flag[i] === "function"
					) {
						flag[i].attr("data-gs-x", i);
					}
				}
			},
			gridster: function($wrapper, ui, event) {
				var flag = [],
					backupFlag = [],
					that = this;
				var maxCol = this.cols;

				var addItemToFlag = function(node) {
					var x = node.x,
						w = node.w;
					var el = node.el;

					for (var i = x; i < x + w; i++) {
						if (i === x) {
							flag[i] = el; // mean start item item
						} else {
							flag[i] = 1;
						}
					}
				};

				var removeNode = function(node) {
					var x = node.x,
						w = node.w;
					var el = node.el;
					for (var i = x; i < x + w; i++) {
						flag[i] = 0;
					}
				};

				var getEmptySlots = function() {
					var emptySlots = 0;
					for (var i = 0; i < maxCol; i++) {
						if (flag[i] === 0) {
							emptySlots++;
						}
					}

					return emptySlots;
				};

				var getRightEmptySlotFromX = function(x, stopWhenNotEmpty) {
					var emptySlots = 0;
					for (var i = x; i < maxCol; i++) {
						if (flag[i] === 0) {
							emptySlots++;
						} else {
							if (stopWhenNotEmpty) {
								return emptySlots;
							}
						}
					}
					return emptySlots;
				};

				var getLeftEmptySlotFromX = function(x, stopWhenNotEmpty) {
					var emptySlots = 0;
					if (typeof stopWhenNotEmpty === "undefined") {
						stopWhenNotEmpty = false;
					}
					for (var i = x; i >= 0; i--) {
						if (flag[i] === 0) {
							emptySlots++;
						} else {
							if (stopWhenNotEmpty) {
								return emptySlots;
							}
						}
					}
					return emptySlots;
				};

				var isEmptyX = function(x) {
					if (flag[x] === 0) {
						return true;
					}
					return false;
				};

				var checkEnoughSpaceFromX = function(x, w) {
					var check = true;
					var i = x;
					var j;
					while (i < x + w && check) {
						if (flag[i] !== 0) {
							return false;
						}
						i++;
					}
					return check;
				};

				var getPrevBlock = function(x) {
					if (x < 0) {
						return {
							x: -1,
							w: 1
						};
					}

					var i,
						_x = -1,
						_xw,
						found;

					if (flag[x] <= 1) {
						i = x;
						found = false;
						while (i >= 0 && !found) {
							if (flag[i] !== 1 && flag[i] !== 0) {
								_x = i;
								found = true;
							}
							i--;
						}
					} else {
						_x = x;
					}
					// tìm kiếm độ rộng của chuỗi này
					i = _x + 1;
					_xw = _x; // chiều rộng nhỏ nhất là môt

					while (flag[i] === 1) {
						_xw++;
						i++;
					}
					return {
						x: _x,
						w: _xw + 1 - _x
					};
				};

				var getNextBlock = function(x) {
					var i,
						_x = -1,
						_xw,
						found;

					if (flag[x] < maxCol) {
						i = x;
						found = false;
						while (i < maxCol && !found) {
							if (flag[i] !== 1 && flag[i] !== 0) {
								_x = i;
								found = true;
							}
							i++;
						}
					} else {
						_x = x;
					}
					// Calculate the width of this item
					i = _x + 1;
					_xw = _x; // the min width is 1

					while (flag[i] === 1) {
						_xw++;
						i++;
					}
					return {
						x: _x,
						w: _xw + 1 - _x
					};
				};

				/**
				 *  Move all Items form x to left
				 * @param x
				 * @param number position left need to move
				 * @returns {*}
				 */
				var moveAllItemsFromXToLeft = function(x, number) {
					var backupFlag = flag.slice();
					var maxNumber = getLeftEmptySlotFromX(x);

					if (maxNumber === 0) {
						return number;
					}
					var prev = getPrevBlock(x);
					var newX = prev.x >= 0 ? prev.x + prev.w - 1 : x;
					var nMove = number;
					if (number > maxNumber) {
						nMove = maxNumber;
					} else {
						nMove = number;
					}

					// Find empty positions from x to left;
					// xE is new empty position from x
					var xE = 0,
						c = 0,
						i = newX;
					while (c <= nMove && i >= 0) {
						if (flag[i] === 0) {
							c++;
							xE = i;
						}
						i--;
					}

					// Move item from x to xE and we need empty flag from x to xE
					var flagNoEmpty = [],
						j = 0;
					for (i = xE; i <= newX; i++) {
						flag[i] = 0;
						if (backupFlag[i] !== 0) {
							flagNoEmpty[j] = backupFlag[i];
							j++;
						}
					}

					j = 0;
					for (i = xE; i <= newX; i++) {
						if (typeof flagNoEmpty[j] !== "undefined") {
							flag[i] = flagNoEmpty[j];
						} else {
							flag[i] = 0;
						}
						j++;
					}

					// Return the number positions need to move
					var left = number - nMove;
					return left;
				};

				var moveAllItemsFromXToRight = function(x, number) {
					var backupFlag = flag.slice();
					var maxNumber = getRightEmptySlotFromX(x);
					if (maxNumber === 0) {
						return number;
					}

					var prev = getPrevBlock(x);
					var newX = prev.x >= 0 ? prev.x : x;
					var nMove = number;
					if (number <= maxNumber) {
						nMove = number;
					} else {
						nMove = maxNumber;
					}

					// Find empty positions from x to right, stop when see any item while finding.
					var xE = x,
						c = 0,
						i = newX;
					while (c < nMove && i < maxCol) {
						if (flag[i] === 0) {
							c++;
							xE = i;
						}
						i++;
					}

					// The new position is x, and need empty flag from x to xE
					var flagNoEmpty = [],
						j = 0;

					for (i = newX; i <= xE; i++) {
						flag[i] = 0;
						if (backupFlag[i] !== 0) {
							flagNoEmpty[j] = backupFlag[i];
							j++;
						}
					}

					j = flagNoEmpty.length - 1;
					for (i = xE; i >= newX; i--) {
						if (typeof flagNoEmpty[j] !== "undefined") {
							flag[i] = flagNoEmpty[j];
						} else {
							flag[i] = 0;
						}
						j--;
					}

					// Return the number positions need to move
					var left = number - nMove;
					return left;
				};

				var updateItemsPositions = function() {
					that.updateItemsPositions(flag);
				};

				/**
				 * Insert to Flag an item with the width is x and position is x
				 *
				 * @param node object Item node
				 * @param swap boolean swap items or not
				 * @returns {boolean}
				 */
				var insertToFlag = function(node, swap) {
					var x = node.x,
						w = node.w;

					// get Empty slots
					var emptySlots = getEmptySlots();

					// Not enough empty slots, fallback.
					if (emptySlots <= 0) {
						return false;
					}

					if (_.isUndefined(swap)) {
						swap = false;
					}

					var _x;
					var _re;
					var _le;
					var _w;

					// Check nếu từ vị trí hiện tại đủ chỗ trống rồi thì ko cần dịch chuyển nữa.
					if (!swap) {
						if (isEmptyX(x)) {
							// Nếu đã đủ chỗ trống ko cần resize
							_w = w;

							if (checkEnoughSpaceFromX(x, _w)) {
								addItemToFlag(node);
								node.el.attr("data-gs-x", x);
								node.el.attr("data-gs-width", _w);
								return true;
							}

							_re = getRightEmptySlotFromX(x, true);
							_le = getLeftEmptySlotFromX(x - 1, true);

							// Kiểm tra xem tổng số chỗ trống có lớn hơn chiều rộng hiện tại không
							// Và số trống còn thiếu về bên trái phải nhỏ hơn số chỗ trống bên trái
							if (_re + _le >= w && w - _re <= _le) {
								_x = x - (w - _re);
							} else {
								_x = x - _le;
							}

							if (_x < 0) {
								_x = 0;
							}
							console.log("_re", _re);
							console.log("_le", _le);
							console.log("__x", _x);

							while (_w >= 1) {
								if (checkEnoughSpaceFromX(_x, _w)) {
									console.log({ x: _x, w: _w });
									node.x = _x;
									node.w = _w;
									addItemToFlag(node);
									node.el.attr("data-gs-x", _x);
									node.el.attr("data-gs-width", _w);
									return true;
								}
								_w--;
							}
						}

						// Check nếu vị trí hiện tại x  có giá trị là 1 thì thử lùi về sau xem có chỗ nào đủ chỗ trống ko ?
						if (flag[x] === 1) {
							var prev = getPrevBlock(x);
							if (prev.x >= 0) {
								if (
									x > prev.x + Math.floor(prev.w / 2) &&
									x > prev.x
								) {
									_x = prev.x + prev.w;
									_re = getRightEmptySlotFromX(_x, true);
									console.log("__re", _re);
									console.log("__re_X", _x);
									if (_re >= w) {
										addItemToFlag({
											el: node.el,
											x: _x,
											w: w
										});
										node.el.attr("data-gs-x", _x);
										node.el.attr("data-gs-width", w);
										return true;
									}
								}
							}
						}
					}

					var remain = 0;

					// -------------------------
					console.log(
						"--------------------------------------------------------"
					);
					var _move_to_swap = function(node, _x) {
						var _block_prev;
						var _block_next;
						var _empty_slots = 0;
						var found = false;
						var i, el, er;

						console.log("insert at x", _x);
						console.log("insert node", node);

						if (isEmptyX(_x)) {
							// if insert at empty x
							console.log("empty_at_X", _x);
							_block_prev = getPrevBlock(_x);
							_block_next = getNextBlock(_x);
							if (_block_prev.x > -1) {
								// if drop item at position that have item before
								console.log("found_item_left", _block_prev);
								_empty_slots = getRightEmptySlotFromX(
									_block_prev.x
								); // find number empty slots from x top when have item
								if (_empty_slots >= node.w) {
									// If enough slot for this item
									if (checkEnoughSpaceFromX(_x, node.w)) {
										console.log("found", node);
										x = _x;
										found = true;
									} else if (node.ox > _x) {
										// move item from left to right
										i = _block_prev.x + _block_prev.w;
										el = getLeftEmptySlotFromX(i);
										if (el <= node.w) {
											el = node.w - el;
										} else {
											el = node.w;
										}
										moveAllItemsFromXToRight(i + 1, el);
										_empty_slots = getRightEmptySlotFromX(
											i
										);
										console.log("loop_start_i", i);
										found = false;
										while (
											i > _block_prev.x + _block_prev.w &&
											!found
										) {
											if (
												checkEnoughSpaceFromX(i, node.w)
											) {
												console.log(
													"found_in_loop__i",
													i
												);
												x = i;
												found = true;
											}
											i--;
										}
									}
								}

								if (!found && node.ox < _x) {
									// move item from left to right
									// try move item to the left
									console.log(
										"try_move_items_to_left",
										_block_prev
									);
									i = _block_prev.x + _block_prev.w - 1;
									el = getLeftEmptySlotFromX(_block_prev.x);
									console.log("el", el);
									if (el > node.w) {
										el = node.w;
									}
									el -= 2;
									moveAllItemsFromXToLeft(_block_prev.x, el);
									console.log(
										"try_move_items_to_left_flag",
										flag
									);
									console.log("el2", el);
									_empty_slots = getRightEmptySlotFromX(i);
									i -= _empty_slots;
									_block_next = getNextBlock(_x);
									var max = _block_prev.x + _block_prev.w;
									if (_block_next.x > -1) {
										max = _block_next.x;
									}
									console.log("loop_start 2_i", i);
									while (i < max && !found) {
										if (checkEnoughSpaceFromX(i, node.w)) {
											console.log(
												"found_in_loop__@__i",
												i
											);
											x = i;
											found = true;
										}
										i++;
									}
								}

								if (!found) {
									// Try to resize node width;
									x = _block_prev.x + _block_prev.w;
									node.w = _empty_slots;
									node.x = x;
									console.log("resize_new_w", _empty_slots);
									console.log("resize_new_x", x);
								}
							} else if (_block_next.x > -1) {
								// try to get right item form x
								console.log("found_item_right", _block_next);
								_block_next = getNextBlock(_x);
								_empty_slots = getRightEmptySlotFromX(
									_x,
									false
								);
								console.log("move_all_item_to Right");
								var n_move =
									_empty_slots >= node.w
										? node.w
										: _empty_slots;
								moveAllItemsFromXToRight(_x, n_move);
								i = _block_next.x;
								console.log("loop_start Right", i);
								while (i >= 0 && !found) {
									if (checkEnoughSpaceFromX(i, node.w)) {
										x = i;
										node.x = x;
										found = true;
										console.log("found_in_while_r", i);
									}
									i--;
								}

								if (!found) {
									// Try to resize node width;
									x = _x;
									node.w = _empty_slots;
									node.x = x;
									console.log("resize_r_new_w", _empty_slots);
									console.log("resize_r_new_x", x);
								}
							} else {
								// the row is empty
								// Do somthing
							}
						} else {
							// if x is not empty
							// insert before item, that drop in
							console.log("x is not empty");
							_block_prev = getPrevBlock(_x);

							if (node.ox < _block_prev.x) {
								// drop from left to right
								moveAllItemsFromXToLeft(_x, node.w);
								console.log("Move All items to left");
								if (isEmptyX(_x)) {
									x = _x;
								} else {
									while (
										!isEmptyX(_x) &&
										_x <= that.cols - 1
									) {
										_x++;
									}
									x = _x;
								}
							} else {
								moveAllItemsFromXToRight(_x, node.w);
								console.log("Move All items to right");
								if (isEmptyX(_x)) {
									x = _x;
								} else {
									while (!isEmptyX(_x) && _x >= 0) {
										_x--;
									}
									x = _x;
								}
							}
						}

						if (x > that.cols) {
							x = that.cols - 1;
						}
						node.x = x;
						console.log("new node x", x);
					};

					_move_to_swap(node, _.clone(x));

					// console.log( '--------------------------------------------------------' );
					// -------------------------
					var newX = x;
					var i;
					var found = false;
					var le = 0;

					//console.log( 'in_the_end_x', x );
					//console.log( 'in_the_end_w', w );
					if (x + w > that.cols - 1) {
						le = getLeftEmptySlotFromX(x, true);
						console.log("le", le);
						if (le > 0) {
							console.log("move_Left", x + w - that.cols - 1);
						}
					}
					updateItemsPositions();
					//console.log( 'Flag update', flag );
					le = 0;
					while (w >= 1) {
						// Nếu số chỗ trống lớn hơn hoặc  = chiều rộng của item
						if (emptySlots >= w) {
							// Nếu tại vị trí hiện tại mà đủ chỗ trống
							if (checkEnoughSpaceFromX(x, w)) {
								console.log("", { x: x, w: w });
								node.w = w;
								addItemToFlag(node);
								node.el.attr("data-gs-x", x);
								node.el.attr("data-gs-width", w);
								return true;
							}

							found = false;
							le = getLeftEmptySlotFromX(x, true);
							// Nếu trỗ trông bên trái nhiều hơn bên phải
							newX = x - le;
							// tìm kiếm từ vị trí trống từ new sang bên phải xem có chỗ nào chèn dc ko ?
							console.log("newX", newX);
							i = newX;
							while (i < maxCol && !found) {
								if (checkEnoughSpaceFromX(i, w)) {
									console.log("Insert in While", {
										x: i,
										w: w
									});
									node.w = w;
									addItemToFlag({ el: node.el, x: i, w: w });
									node.el.attr("data-gs-x", i);
									node.el.attr("data-gs-width", w);
									found = true;
									return true;
								}
								i++;
							}
						}
						w--;
					}

					// Chèn vào bất kỳ đâu đủ chỗ
					w = node.w;
					found = false;
					while (w >= 1) {
						i = 0;
						while (i < maxCol && !found) {
							if (checkEnoughSpaceFromX(i, w)) {
								console.log("Insert in While 2", {
									x: i,
									w: w
								});
								addItemToFlag({ el: node.el, x: i, w: w });
								node.el.attr("data-gs-x", i);
								node.el.attr("data-gs-width", w);
								found = true;
								return true;
							}
							i++;
						}
						w--;
					}

					console.log("Insert END While", { x: i, w: w });
					return false;
				};

				/**
				 * Dổi chỗ 2 item trong 1 hàng
				 * @param x Vị trị bắt đầu của item dc thay đổi
				 * @param newX Vị trí của item chuyển đến
				 */
				var swap = function(node, newX) {
					var x = node.x;
					var w = node.w;

					removeNode(node);
					console.log("Swap newX", newX);
					console.log("Before Swap FLAG", flag);

					var block2 = getPrevBlock(newX);

					var block2_right = 0;
					if (block2.x > -1) {
						block2_right = block2.x + block2.w;
					}
					if (checkEnoughSpaceFromX(newX, w)) {
						addItemToFlag({ el: node.el, x: newX, w: w });
						return true;
					} else if (
						block2_right > 0 &&
						checkEnoughSpaceFromX(block2_right, w) &&
						newX >= block2_right
					) {
						var block3 = getNextBlock(newX);
						if (block3.x > -1) {
							// Nếu phía sau nó có item
							// nếu item chèn vào mà đủ chỗ
							// nhưng từ trí từ vị trí thả chuột xuống ko đủ chỗ để chèn vào
							// lùi vị trí chèn vào cho đến khi nào đủ
							if (node.w + newX >= block3.x) {
								var _newX = _.clone(newX);
								while (_newX > block2_right) {
									if (checkEnoughSpaceFromX(_newX, w)) {
										addItemToFlag({
											el: node.el,
											x: _newX,
											w: w
										});
										return true;
									}
									_newX--;
								}
							}
						}

						if (newX + w > that.cols) {
							// Nếu newX + w vượt quá số cols. thì thử lùi lại xem  có đủ chỗ ko ?
							var _x = that.cols - w;
							if (checkEnoughSpaceFromX(_x, w)) {
								addItemToFlag({ el: node.el, x: _x, w: w });
								return true;
							}
						}
						addItemToFlag({ el: node.el, x: block2_right, w: w });
						return true;
					}

					node.x = newX;

					insertToFlag(node, true);
				};

				//-----------------------------------------------------------------------------------------------------------------------------
				var that = this;
				flag = that.getFlag($wrapper);
				backupFlag = flag.slice();
				var wOffset = $wrapper.offset();
				that.draggingItem = ui.draggable;
				var width = $wrapper.width();
				var colWidth = width / that.cols;
				var x = 0;
				var iOffset = ui.offset;
				var w, cw, itemWidth, in_this_row;
				cw = that.getW(ui.draggable, false);
				w = that.getW(ui.draggable, true);
				itemWidth = ui.draggable.width();

				console.log("DROP ITEM WIDTH", w);
				console.log("DROP ITEM cw WIDTH", cw);
				var ox = that.getX(ui.draggable);
				if (is_rtl) {
					removeNode({
						el: ui.draggable,
						x: ox,
						w: w
					});
				}

				var xc = 0,
					xi = 0,
					found = false;

				if (!ui.draggable.parent().is($wrapper)) {
					in_this_row = false;
					console.log("Not in this row");
					if (w < cw) {
						w = cw;
					}
				} else {
					in_this_row = true;
					console.log("Item in this row");
					w = cw;
				}

				// Kiểm tra RTL
				if (!is_rtl) {
					// nếu ko phải RTL
					// Lấy vị trí thả xuống từ con trỏ chuột tính theo bên trái của trình duyệt và mép trái của row
					xc = Math.round((event.clientX - wOffset.left) / colWidth);

					// Lấy vị trí thả xuống từ mép trái của item
					xi = Math.round(
						(iOffset.left - wOffset.left - 10) / colWidth
					);
					if (xi < 0) {
						xi = 0;
					}
				} else {
					// Nếu là RTL

					// Lấy vị trí thả xuống từ con trỏ chuột tính theo bên trái của trình duyệt và mép phải của row
					xc = Math.round(
						(wOffset.left + width + 10 - event.clientX) / colWidth
					);

					// Lấy vị trí thả xuống từ mép phải của item theo bên phải của row
					xi = Math.round(
						(wOffset.left +
							width -
							(iOffset.left + itemWidth + 10)) /
							colWidth
					);
					if (xi < 0) {
						xi = 0;
					}
				}
				if (xc > that.cols) {
					xc = that.cols;
				}

				x = xi;
				var _i;
				_i = xi;

				if (is_rtl) {
					if (!isEmptyX(_i)) {
						while (_i < that.cols && !found) {
							if (isEmptyX(_i)) {
								found = true;
							} else {
								_i++;
							}
						}
						if (x > xc) {
							// x = xc;
						}
					} else {
						x = xi;
						found = true;
					}
				} else {
					if (!isEmptyX(x)) {
						while (x <= xc && !found) {
							if (isEmptyX(x)) {
								found = true;
							} else {
								x++;
							}
						}
						if (x > xc) {
							x = xc;
						}
					} else {
						x = xi;
						found = true;
					}
				}

				if (!found) {
					if (in_this_row) {
						x = xi;
					} else {
						x = xc;
					}
				}

				if (x < 0) {
					x = 0;
				}

				if (x + w >= that.cols) {
					found = true;
					_i = x;
					while (_i + w > that.cols && found) {
						if (!isEmptyX(_i)) {
							_i++;
							found = false;
						} else {
							_i--;
						}
						console.log("loop_i", _i);
					}

					console.log("Find new _i, w: " + w, _i);

					x = _i;
				}

				delete found;

				console.log("DROP Cursor", xc);
				console.log("DROP row x cacl", x);
				console.log("DROP item w", w);

				var node = {
					el: ui.draggable,
					x: x,
					w: w,
					ox: ox,
					ow: cw
				};

				if (node.x <= 0) {
					node.x = 0;
				}

				var did = false;
				if (in_this_row) {
					node.x = parseInt(ui.draggable.attr("data-gs-x") || 0);
					node.w = parseInt(ui.draggable.attr("data-gs-width") || 1);
					console.log("swap node", node);
					swap(node, x);
					did = true;
				} else {
					did = insertToFlag(node);
					console.log("Insert node");
				}

				// console.log( 'Drop on X: ' + x + ', width: '+ w );
				// console.log( 'Drop Flag: ', flag );

				if (!did) {
					ui.draggable.removeAttr("style");
					console.log("Can not insert");
					flag = backupFlag; // rollback;
				} else {
					// Add drop item from somewhere to current row
					ui.draggable.removeClass("item-from-list");

					$wrapper.append(ui.draggable);
					ui.draggable.removeAttr("style");
					console.log("DID Flag: ", flag);
					//ui.draggable.attr( 'data-gs-x', x );
					//ui.draggable.attr( 'data-gs-y', y );
					that.draggingItem = null;
				}

				updateItemsPositions();
				that.updateAllGrids();

				//-----------------------------------------------------------------------------------------------------------------------------
			},
			updateAllGrids: function() {
				var that = this;
				_.each(that.panels[that.activePanel], function(row, row_id) {
					that.updateGridFlag(row);
				});
			},
			setGridWidth: function($wrapper, ui) {
				var that = this;
				var $item = ui.element;
				var width = $wrapper.width();
				var itemWidth = ui.size.width;
				var originalElementWidth = ui.originalSize.width;
				var colWidth = Math.ceil(width / that.cols) - 1;
				var isShiftLeft, isShiftRight;

				if (!is_rtl) {
					isShiftLeft = ui.originalPosition.left > ui.position.left;
					isShiftRight = ui.originalPosition.left < ui.position.left;
				} else {
					isShiftLeft = ui.originalPosition.left > ui.position.left;
					isShiftRight = originalElementWidth !== itemWidth;
				}

				var ow = ui.originalElement.attr("data-gs-width") || 1;
				var ox = ui.originalElement.attr("data-gs-x") || 0;
				ow = parseInt(ow);
				ox = parseInt(ox);

				var addW;
				var newX;
				var newW;
				var flag = that.getFlag($wrapper);
				var itemInfo = that.gridGetItemInfo(
					ui.originalElement,
					flag,
					$wrapper
				);
				var diffLeft, diffRight;

				if (isShiftLeft) {
					if (!is_rtl) {
						// Ok
						newX = Math.floor((ui.position.left - 1) / colWidth);
						addW = ox - newX;
						if (addW > itemInfo.before) {
							addW = itemInfo.before;
						}

						newX = ox - addW;
						newW = ow + addW;
						$item.attr("data-gs-x", newX).removeAttr("style");
						$item.attr("data-gs-width", newW).removeAttr("style");
					} else {
						// RTL

						// Ok
						newX = Math.floor((ui.position.left - 1) / colWidth);
						newX = that.cols - newX;
						addW = newX - ox - ow;
						if (addW > itemInfo.after) {
							addW = itemInfo.after;
						}
						newW = ow + addW;
						$item.attr("data-gs-x", ox).removeAttr("style");
						$item.attr("data-gs-width", newW).removeAttr("style");
					}

					that.updateGridFlag($wrapper);
					return;
				} else if (isShiftRight) {
					if (!is_rtl) {
						// Ok
						newX = Math.round((ui.position.left - 1) / colWidth);
						addW = newX - ox;
						newW = ow - addW;
						if (newW <= 0) {
							newW = 1;
							addW = 0;
						}
						newX = ox + addW;
						$item.attr("data-gs-x", newX).removeAttr("style");
						$item.attr("data-gs-width", newW).removeAttr("style");
					} else {
						// RTL

						if (ui.originalPosition.left !== ui.position.left) {
							// Nếu resize ở mép trái của Item
							// Ok
							newX = Math.floor(
								(ui.position.left - 1) / colWidth
							);
							newX = that.cols - newX;
							addW = ow + ox - newX;
							if (addW > ow) {
								addW = 0;
							}
							newX = ox;
							newW = ow - addW;
							if (newX <= 0) {
								newX = 0;
							}

							console.log("diffRight_RTL_COL_New __left");
						} else {
							// Nếu resize ở mép phải của Item
							// Ok
							newX = Math.ceil(
								(ui.position.left + ui.size.width - 11) /
									colWidth
							);
							newX = that.cols - newX;
							addW = ox - newX;
							if (addW > itemInfo.before) {
								addW = itemInfo.before;
							}
							newX = ox - addW;
							newW = ow + addW;
						}
						$item.attr("data-gs-x", newX).removeAttr("style");
						$item.attr("data-gs-width", newW).removeAttr("style");
					}

					that.updateGridFlag($wrapper);
					return;
				}

				var w;
				var x = itemInfo.x;
				var x_c;

				if (itemWidth < ui.originalSize.width) {
					// Resize from right to left
					// Ok
					x_c = Math.round(
						(ui.position.left + ui.size.width - 11) / colWidth
					);
					if (x_c <= x) {
						x_c = x + 1;
					}
					w = itemInfo.w - (x + itemInfo.w - x_c);
				} else {
					// Resize from left to right
					//Ok
					x_c = Math.ceil(
						(ui.position.left + ui.size.width - 11) / colWidth
					);
					w = itemInfo.w + (x_c - (x + itemInfo.w));
					if (
						itemInfo.x + w >
						itemInfo.x + itemInfo.w + itemInfo.after
					) {
						w = itemInfo.w + itemInfo.after;
					}
				}

				if (w <= 0) {
					w = 1;
				}

				$item.attr("data-gs-width", w).removeAttr("style");
				that.updateGridFlag($wrapper);
			},
			getFlag: function($row) {
				var that = this;
				var flag = $row.data("gridRowFlag") || [];
				var i;
				if (_.isEmpty(flag)) {
					for (i = 0; i < that.cols; i++) {
						flag[i] = 0;
					}
					$row.data("gridRowFlag", flag);
				}

				return flag;
			},
			updateGridFlag: function($row) {
				var that = this;
				var rowFlag = [];
				var i;
				for (i = 0; i < that.cols; i++) {
					rowFlag[i] = 0;
				}
				var items;
				items = $(".grid-stack-item", $row);
				items.each(function(index) {
					$(this).removeAttr("style");
					var x = that.getX($(this));
					var w = that.getW($(this));

					for (i = x; i < x + w; i++) {
						if (i === x) {
							rowFlag[i] = $(this);
						} else {
							rowFlag[i] = 1;
						}
					}
				});

				$row.data("gridRowFlag", rowFlag);
				that.updateItemsPositions(rowFlag);
				that.sortGrid($row);
				return rowFlag;
			},
			addNewWidget: function($item, row) {
				var that = this;
				var panel = that.container.find(
					".customify--device-panel.customify--panel-" +
						that.activePanel
				);
				var el = row;
				if (!_.isObject(el)) {
					el = panel.find(".customify--cb-items").first();
				}

				var elItem = $item;
				elItem
					.draggable({
						revert: "invalid",
						appendTo: panel,
						scroll: false,
						zIndex: 99999,
						handle: ".grid-stack-item-content",
						start: function(event, ui) {
							$("body").addClass("builder-item-moving");
							$(".customify--cb-items", panel).css("z-index", "");
							ui.helper.parent().css("z-index", 9999);
						},
						stop: function(event, ui) {
							$("body").removeClass("builder-item-moving");
							$(".customify--cb-items", panel).css("z-index", "");
							that.save();
						},
						drag: function(event, ui) {}
					})
					.resizable({
						handles: "w, e",
						start: function(event, ui) {
							// RTL
							ui.originalElement.css({
								right: "auto",
								left: ui.position.left
							});
						},
						stop: function(event, ui) {
							that.setGridWidth(ui.element.parent(), ui);
							that.save();
						}
					});

				el.append(elItem);
				that.updateGridFlag(el);
			},
			addPanel: function(device) {
				var that = this;
				var template = that.getTemplate();
				var template_id = "tmpl-customify--cb-panel";
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
					'<div class="customify--device-panel customify-vertical-panel customify--panel-' +
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
					$(".customify--cb-devices-switcher", that.container).append(
						'<a href="#" class="switch-to switch-to-' +
							device +
							'" data-device="' +
							device +
							'">' +
							device_name +
							"</a>"
					);
					$(".customify--cb-body", that.container).append(panelHTML);
				});

				if ($("#customify-upsell-tmpl").length) {
					$($("#customify-upsell-tmpl").html()).insertAfter(
						$(".customify--cb-devices-switcher", that.container)
					);
				}
			},
			addItem: function(node) {
				var that = this;
				var template = that.getTemplate();
				var template_id = "tmpl-customify--cb-item";
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
						'<div class="customify-available-items" data-device="' +
							device +
							'"></div>'
					);
					$(".customify--panel-" + device, that.container).append(
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
						".customify--cb-devices-switcher a",
						that.container
					).removeClass("customify--tab-active");
					$(
						".customify--cb-devices-switcher .switch-to-" + device,
						that.container
					).addClass("customify--tab-active");
					$(".customify--device-panel", that.container).addClass(
						"customify--panel-hide"
					);
					$(
						".customify--device-panel.customify--panel-" + device,
						that.container
					).removeClass("customify--panel-hide");
					that.activePanel = device;
				} else {
					$(
						".customify--cb-devices-switcher a",
						that.container
					).addClass("customify--tab-active");
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
			addExistingRowsItems: function() {
				var that = this;

				var data = wpcustomize.control(that.controlId).params.value;
				if (!_.isObject(data)) {
					data = {};
				}
				_.each(that.panels, function($rows, device) {
					var device_data = {};
					if (_.isObject(data[device])) {
						device_data = data[device];
					}
					_.each(device_data, function(items, row_id) {
						if (!_.isUndefined(items)) {
							_.each(items, function(node, index) {
								var item = $(
									'.customify-available-items[data-device="' +
										device +
										'"] .grid-stack-item[data-id="' +
										node.id +
										'"]'
								).first();
								item.attr("data-gs-width", node.width);
								item.attr("data-gs-x", node.x);
								item.removeClass("item-from-list");
								that.addNewWidget(item, $rows[row_id]);
							});
						}
					});
				});

				that.ready = true;
			},
			focus: function() {
				this.container.on(
					"click",
					".customify--cb-item-setting, .customify--cb-item-name, .item-tooltip",
					function(e) {
						e.preventDefault();
						var section = $(this).data("section") || "";
						//console.log( 'Clicked section' , section );
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
					".customify--cb-row-settings",
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
					".customify--device-panel .customify--cb-item-remove",
					function(e) {
						e.preventDefault();
						var item = $(this).closest(".grid-stack-item");
						var panel = item.closest(".customify--device-panel");
						item.attr("data-gs-width", 1);
						item.attr("data-gs-x", 0);
						item.removeAttr("style");
						$(".customify-available-items", panel).append(item);
						that.updateAllGrids();
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
				_.each(that.panels, function($rows, device) {
					data[device] = {};
					_.each($rows, function(row, row_id) {
						var rowData = _.map(
							$(" > .grid-stack-item", row),
							function(el) {
								el = $(el);
								return {
									x: that.getX(el),
									y: 1,
									width: that.getW(el),
									height: 1,
									id: el.data("id") || ""
								};
							}
						);
						data[device][row_id] = rowData;
					});
				});


				wpcustomize
					.control(that.controlId)
					.setting.set(that.encodeValue(data));
				
			},
			showPanel: function() {
				var that = this;
				this.container
					.removeClass("customify--builder--hide")
					.addClass("customify--builder-show");
				setTimeout(function() {
					var h = that.container.height();
					$("#customize-preview")
						.addClass("cb--preview-panel-show")
						.css({ bottom: h - 1, "margin-top": "0px" });
				}, 100);
			},
			hidePanel: function() {
				this.container.removeClass("customify--builder-show");
				$("#customize-preview")
					.removeClass("cb--preview-panel-show")
					.removeAttr("style");
			},
			togglePanel: function() {
				var that = this;
				wpcustomize.state("expandedPanel").bind(function(paneVisible) {
					if (wpcustomize.panel(options.panel).expanded()) {
						$document.trigger("customify_panel_builder_open", [
							options.panel
						]);
						console.log( options );
						console.log("open-builder:", options.panel);
						top._current_builder_panel = id;
						that.showPanel();
					} else {
						that.hidePanel();
					}
				});

				that.container.on("click", ".customify--panel-close", function(
					e
				) {
					e.preventDefault();
					that.container.toggleClass("customify--builder--hide");
					if (that.container.hasClass("customify--builder--hide")) {
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
				//wpcustomize.state( 'paneVisible' ).get()
				var sidebarWidth = $("#customize-controls").width();
				if (!wpcustomize.state("paneVisible").get()) {
					sidebarWidth = 0;
				}
				if (is_rtl) {
					this.container
						.find(".customify--cb-inner")
						.css({ "margin-right": sidebarWidth });
				} else {
					this.container
						.find(".customify--cb-inner")
						.css({ "margin-left": sidebarWidth });
				}
			},
			init: function(controlId, items, devices) {
				var that = this;

				var template = that.getTemplate();
				var template_id = "tmpl-customify--builder-panel";
				var html = template(options, template_id);
				that.container = $(html);
				$("body .wp-full-overlay").append(that.container);
				that.controlId = controlId;
				that.items = items;
				that.devices = devices;

				console.log( options.section )
				console.log( wpcustomize.section )
				if (options.section) {
					wpcustomize
						.section(options.section)
						.container.addClass("customify--hide");
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
					console.log("open-builder:", options.panel);
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

				// Switch panel.
				that.container.on(
					"click",
					".customify--cb-devices-switcher a.switch-to",
					function(e) {
						e.preventDefault();
						var device = $(this).data("device");
						that.switchToDevice(device);
					}
				);

				$document.trigger("customify_builder_panel_loaded", [id, that]);
			}
		};
	
		Builder.init(options.control_id, options.items, options.devices);
		return Builder;
	};

}( jQuery ));
