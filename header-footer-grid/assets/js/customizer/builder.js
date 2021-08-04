/* global _, HFG_Layout_Builder, jQuery */

let CustomizeBuilderV1
let hfgPanels = {};

( function($) {
  let $document = $( document )
  let wpcustomize = wp.customize || null
  let isRTL = HFG_Layout_Builder.isRTL

  CustomizeBuilderV1 = function(options, id) {
    let Builder = {
      id: id,
      controlId: '',
      cols: 12,
      cellHeight: 45,
      items: [],
      container: null,
      widgetsSidebar: null,
      ready: false,
      devices: { desktop: 'Desktop', mobile: 'Mobile/Tablet' },
      activePanel: 'desktop',
      panels: {},
      activeRow: 'main',
      draggingItem: null,
      insertPoint: null,
      insertRow: null,
      getTemplate: _.memoize( function() {
        let control = this
        let compiled,
          /*
           * Underscore's default ERB-style templates are incompatible with PHP
           * when asp_tags is enabled, so WordPress uses Mustache-inspired templating syntax.
           *
           * @see trac ticket #22344.
           */
          options = {
            evaluate: /<#([\s\S]+?)#>/g,
            interpolate: /{{{([\s\S]+?)}}}/g,
            escape: /{{([^}]+?)}}(?!})/g,
            variable: 'data'
          }

        return function(data, id, dataLetiableName) {
          if ( _.isUndefined( id ) ) {
            id = 'tmpl-customize-control-' + control.type
          }
          if (
            !_.isUndefined( dataLetiableName ) &&
            _.isString( dataLetiableName )
          ) {
            options.variable = dataLetiableName
          } else {
            options.variable = 'data'
          }
          compiled = _.template( $( '#' + id ).html(), null, options )
          return compiled( data )
        }
      } ),
      drag_drop: function() {
        let that = this

        $( '.hfg--device-panel', that.container ).each( function() {
          let panel = $( this )
          let device = panel.data( 'device' )
          that.panels[device] = {}
          $( '.hfg--cb-items', panel ).each( function(index) {
            let dataName = $( this ).attr( 'data-id' ) || ''
            let id = '_sid_' + device + index
            if ( dataName ) {
              id = '_sid_' + device + '-' + dataName
            }
            $( this ).attr( 'id', id )
          } )
          $( '.grid-stack, .hfg--sidebar-items', panel ).each( function() {
            let _id = $( this ).attr( 'data-id' ) || ''
            that.panels[device][_id] = $( this )
            $( this ).droppable( {
              out: function(event, ui) {
              },
              over: function(event, ui) {
                //let $wrapper = $( this );
                /**
                 * @see http://api.jqueryui.com/droppable/#event-over
                 */
              },
              drop: function(event, ui) {
                let $wrapper = $( this )
                that.gridster( $wrapper, ui, event )
                that.save()
              }
            } )
          } )

          let sidebar = $( '#_sid_mobile-sidebar', panel )
          let sidebarId = sidebar.attr( 'id' ) || false
          $( '.grid-stack-item', panel ).draggable( {
            revert: 'invalid',
            connectToSortable: sidebarId
              ? '#' + sidebarId
              : false,
            start: function(event, ui) {
              $( 'body' ).addClass( 'builder-item-moving' )
              $( '.hfg--cb-items', panel ).css( 'z-index', '' )
              ui.helper.parent().css( 'z-index', 9999 )
            },
            stop: function(event, ui) {
              $( 'body' ).removeClass( 'builder-item-moving' )
              $( '.hfg--cb-items', panel ).css( 'z-index', '' )
              ui.helper.parent().css( 'z-index', '' )
            }
          } )

          if ( sidebar.length > 0 ) {
            sidebar.sortable( {
              revert: true,
              change: function(event, ui) {
                that.save()
              },
              receive: function(event, ui) {
                $( this )
                  .find( '.grid-stack-item' )
                  .removeAttr( 'style' )
                  .attr( 'data-gs-width', 1 )
                that.save()
              }
            } )

            that.panels[device]['sidebar'] = sidebar
          }
        } )
      },
      sortGrid: function($wrapper) {
        $( '.grid-stack-item', $wrapper ).each( function() {
          let el = $( this )
          let x = el.attr( 'data-gs-x' ) || 0
          x = parseInt( x )
          let next = el.next()
          if ( next.length > 0 ) {
            let nx = next.attr( 'data-gs-x' ) || 0
            nx = parseInt( nx )
            if ( x > nx ) {
              el.insertAfter( next )
            }
          }
        } )
      },
      getX: function($item) {
        let x = $item.attr( 'data-gs-x' ) || 0
        return parseInt( x )
      },
      getW: function($item, df) {
        if ( _.isUndefined( df ) ) {
          df = false
        }
        let w
        if ( df ) {
          w = $item.attr( 'data-df-width' ) || 1
        } else {
          w = $item.attr( 'data-gs-width' ) || 1
        }
        return parseInt( w )
      },
      gridGetItemInfo: function($item, flag, $wrapper) {
        let that = this
        let x = that.getX( $item )
        let w = that.getW( $item )
        let slotBefore = 0
        let slotAfter = 0
        let i

        let br = false
        // Get empty slots before
        i = x - 1
        while (i >= 0 && !br) {
          if ( flag[i] === 0 ) {
            slotBefore++
          } else {
            br = true
          }
          i--
        }

        // Get empty slots after
        br = false
        i = x + w
        while (i < that.cols && !br) {
          if ( flag[i] === 0 ) {
            slotAfter++
          } else {
            br = true
          }
          i++
        }

        return {
          flag: flag,
          x: x,
          w: w,
          item: $item,
          before: slotBefore, // empty before
          after: slotAfter, // empty after
          id: $item.attr( 'data-id' ) || '',
          wrapper: $wrapper
        }
      },
      updateItemsPositions: function(flag) {
        let maxCol = this.cols
        for ( let i = 0; i <= maxCol; i++ ) {
          if (
            typeof flag[i] === 'object' ||
            typeof flag[i] === 'function'
          ) {
            flag[i].attr( 'data-gs-x', i )
          }
        }
      },
      gridster: function($wrapper, ui, event) {
        let flag = []
        let maxCol = this.cols

        let addItemToFlag = function(node) {
          let x = node.x,
            w = node.w
          let el = node.el

          for ( let i = x; i < x + w; i++ ) {
            if ( i === x ) {
              flag[i] = el // mean start item item
            } else {
              flag[i] = 1
            }
          }
        }

        let removeNode = function(node) {
          let x = node.x,
            w = node.w
          for ( let i = x; i < x + w; i++ ) {
            flag[i] = 0
          }
        }

        let getEmptySlots = function() {
          let emptySlots = 0
          for ( let i = 0; i < maxCol; i++ ) {
            if ( flag[i] === 0 ) {
              emptySlots++
            }
          }

          return emptySlots
        }

        let getRightEmptySlotFromX = function(x, stopWhenNotEmpty) {
          let emptySlots = 0
          for ( let i = x; i < maxCol; i++ ) {
            if ( flag[i] === 0 ) {
              emptySlots++
            } else {
              if ( stopWhenNotEmpty ) {
                return emptySlots
              }
            }
          }
          return emptySlots
        }

        let getLeftEmptySlotFromX = function(x, stopWhenNotEmpty) {
          let emptySlots = 0
          if ( typeof stopWhenNotEmpty === 'undefined' ) {
            stopWhenNotEmpty = false
          }
          for ( let i = x; i >= 0; i-- ) {
            if ( flag[i] === 0 ) {
              emptySlots++
            } else {
              if ( stopWhenNotEmpty ) {
                return emptySlots
              }
            }
          }
          return emptySlots
        }

        let isEmptyX = function(x) {
          return flag[x] === 0

        }

        let checkEnoughSpaceFromX = function(x, w) {
          let check = true
          let i = x
          while (i < x + w) {
            if ( flag[i] !== 0 ) {
              return false
            }
            i++
          }
          return check
        }

        let getPrevBlock = function(x) {
          if ( x < 0 ) {
            return {
              x: -1,
              w: 1
            }
          }

          let i,
            _x = -1,
            _xw,
            found

          if ( flag[x] <= 1 ) {
            i = x
            found = false
            while (i >= 0 && !found) {
              if ( flag[i] !== 1 && flag[i] !== 0 ) {
                _x = i
                found = true
              }
              i--
            }
          } else {
            _x = x
          }

          i = _x + 1
          _xw = _x

          while (flag[i] === 1) {
            _xw++
            i++
          }
          return {
            x: _x,
            w: _xw + 1 - _x
          }
        }

        let getNextBlock = function(x) {
          let i,
            _x = -1,
            _xw,
            found

          if ( flag[x] < maxCol ) {
            i = x
            found = false
            while (i < maxCol && !found) {
              if ( flag[i] !== 1 && flag[i] !== 0 ) {
                _x = i
                found = true
              }
              i++
            }
          } else {
            _x = x
          }
          // Calculate the width of this item
          i = _x + 1
          _xw = _x // the min width is 1

          while (flag[i] === 1) {
            _xw++
            i++
          }
          return {
            x: _x,
            w: _xw + 1 - _x
          }
        }

        /**
         *  Move all Items form x to left
         * @param x
         * @param number position left need to move
         * @returns {*}
         */
        let moveAllItemsFromXToLeft = function(x, number) {
          let backupFlag = flag.slice()
          let maxNumber = getLeftEmptySlotFromX( x )

          if ( maxNumber === 0 ) {
            return number
          }
          let prev = getPrevBlock( x )
          let newX = prev.x >= 0 ? prev.x + prev.w - 1 : x
          let nMove = number
          if ( number > maxNumber ) {
            nMove = maxNumber
          }

          // Find empty positions from x to left;
          // xE is new empty position from x
          let xE = 0,
            c = 0,
            i = newX
          while (c <= nMove && i >= 0) {
            if ( flag[i] === 0 ) {
              c++
              xE = i
            }
            i--
          }

          // Move item from x to xE and we need empty flag from x to xE
          let flagNoEmpty = [],
            j = 0
          for ( i = xE; i <= newX; i++ ) {
            flag[i] = 0
            if ( backupFlag[i] !== 0 ) {
              flagNoEmpty[j] = backupFlag[i]
              j++
            }
          }

          j = 0
          for ( i = xE; i <= newX; i++ ) {
            if ( typeof flagNoEmpty[j] !== 'undefined' ) {
              flag[i] = flagNoEmpty[j]
            } else {
              flag[i] = 0
            }
            j++
          }

          // Return the number positions need to move
          return number - nMove
        }

        let moveAllItemsFromXToRight = function(x, number) {
          let backupFlag = flag.slice()
          let maxNumber = getRightEmptySlotFromX( x )
          if ( maxNumber === 0 ) {
            return number
          }

          let prev = getPrevBlock( x )
          let newX = prev.x >= 0 ? prev.x : x
          let nMove = number
          if ( number > maxNumber ) {
            nMove = maxNumber
          }

          // Find empty positions from x to right, stop when see any item while finding.
          let xE = x,
            c = 0,
            i = newX
          while (c < nMove && i < maxCol) {
            if ( flag[i] === 0 ) {
              c++
              xE = i
            }
            i++
          }

          // The new position is x, and need empty flag from x to xE
          let flagNoEmpty = [],
            j = 0

          for ( i = newX; i <= xE; i++ ) {
            flag[i] = 0
            if ( backupFlag[i] !== 0 ) {
              flagNoEmpty[j] = backupFlag[i]
              j++
            }
          }

          j = flagNoEmpty.length - 1
          for ( i = xE; i >= newX; i-- ) {
            if ( typeof flagNoEmpty[j] !== 'undefined' ) {
              flag[i] = flagNoEmpty[j]
            } else {
              flag[i] = 0
            }
            j--
          }

          // Return the number positions need to move
          return number - nMove
        }

        let updateItemsPositions = function() {
          that.updateItemsPositions( flag )
        }

        /**
         * Insert to Flag an item with the width is x and position is x
         *
         * @param node object Item node
         * @param swap boolean swap items or not
         * @returns {boolean}
         */
        let insertToFlag = function(node, swap) {
          let x = node.x,
            w = node.w

          // get Empty slots
          let emptySlots = getEmptySlots()

          // Not enough empty slots, fallback.
          if ( emptySlots <= 0 ) {
            return false
          }

          if ( _.isUndefined( swap ) ) {
            swap = false
          }

          let _x
          let _re
          let _le
          let _w

          // Check nếu từ vị trí hiện tại đủ chỗ trống rồi thì ko cần dịch chuyển nữa.
          if ( !swap ) {
            if ( isEmptyX( x ) ) {
              // Nếu đã đủ chỗ trống ko cần resize
              _w = w

              if ( checkEnoughSpaceFromX( x, _w ) ) {
                addItemToFlag( node )
                node.el.attr( 'data-gs-x', x )
                node.el.attr( 'data-gs-width', _w )
                return true
              }

              _re = getRightEmptySlotFromX( x, true )
              _le = getLeftEmptySlotFromX( x - 1, true )

              // Kiểm tra xem tổng số chỗ trống có lớn hơn chiều rộng hiện tại không
              // Và số trống còn thiếu về bên trái phải nhỏ hơn số chỗ trống bên trái
              if ( _re + _le >= w && w - _re <= _le ) {
                _x = x - ( w - _re )
              } else {
                _x = x - _le
              }

              if ( _x < 0 ) {
                _x = 0
              }

              while (_w >= 1) {
                if ( checkEnoughSpaceFromX( _x, _w ) ) {
                  node.x = _x
                  node.w = _w
                  addItemToFlag( node )
                  node.el.attr( 'data-gs-x', _x )
                  node.el.attr( 'data-gs-width', _w )
                  return true
                }
                _w--
              }
            }

            // Check nếu vị trí hiện tại x  có giá trị là 1 thì thử lùi về sau xem có chỗ nào đủ chỗ trống ko ?
            if ( flag[x] === 1 ) {
              let prev = getPrevBlock( x )
              if ( prev.x >= 0 ) {
                if (
                  x > prev.x + Math.floor( prev.w / 2 ) &&
                  x > prev.x
                ) {
                  _x = prev.x + prev.w
                  _re = getRightEmptySlotFromX( _x, true )
                  if ( _re >= w ) {
                    addItemToFlag( {
                      el: node.el,
                      x: _x,
                      w: w
                    } )
                    node.el.attr( 'data-gs-x', _x )
                    node.el.attr( 'data-gs-width', w )
                    return true
                  }
                }
              }
            }
          }

          // -------------------------
          console.log(
            '--------------------------------------------------------'
          )
          let _moveToSwap = function(node, _x) {
            let _blockPrev
            let _blockNext
            let _emptySlots = 0
            let found = false
            let i, el

            console.log( 'insert at x', _x )
            console.log( 'insert node', node )

            if ( isEmptyX( _x ) ) {
              // if insert at empty x
              console.log( 'empty_at_X', _x )
              _blockPrev = getPrevBlock( _x )
              _blockNext = getNextBlock( _x )
              if ( _blockPrev.x > -1 ) {
                // if drop item at position that have item before
                console.log( 'found_item_left', _blockPrev )
                _emptySlots = getRightEmptySlotFromX(
                  _blockPrev.x
                ) // find number empty slots from x top when have item
                if ( _emptySlots >= node.w ) {
                  // If enough slot for this item
                  if ( checkEnoughSpaceFromX( _x, node.w ) ) {
                    console.log( 'found', node )
                    x = _x
                    found = true
                  } else if ( node.ox > _x ) {
                    // move item from left to right
                    i = _blockPrev.x + _blockPrev.w
                    el = getLeftEmptySlotFromX( i )
                    if ( el <= node.w ) {
                      el = node.w - el
                    } else {
                      el = node.w
                    }
                    moveAllItemsFromXToRight( i + 1, el )
                    _emptySlots = getRightEmptySlotFromX(
                      i
                    )
                    console.log( 'loop_start_i', i )
                    while (i > _blockPrev.x + _blockPrev.w && !found) {
                      if ( checkEnoughSpaceFromX( i, node.w ) ) {
                        console.log( 'found_in_loop__i', i )
                        x = i
                        found = true
                      }
                      i--
                    }
                  }
                }

                if ( !found && node.ox < _x ) {
                  // move item from left to right
                  // try move item to the left
                  console.log(
                    'try_move_items_to_left',
                    _blockPrev
                  )
                  i = _blockPrev.x + _blockPrev.w - 1
                  el = getLeftEmptySlotFromX( _blockPrev.x )
                  console.log( 'el', el )
                  if ( el > node.w ) {
                    el = node.w
                  }
                  el -= 2
                  moveAllItemsFromXToLeft( _blockPrev.x, el )
                  console.log(
                    'try_move_items_to_left_flag',
                    flag
                  )
                  console.log( 'el2', el )
                  _emptySlots = getRightEmptySlotFromX( i )
                  i -= _emptySlots
                  _blockNext = getNextBlock( _x )
                  let max = _blockPrev.x + _blockPrev.w
                  if ( _blockNext.x > -1 ) {
                    max = _blockNext.x
                  }
                  console.log( 'loop_start 2_i', i )
                  while (i < max && !found) {
                    if ( checkEnoughSpaceFromX( i, node.w ) ) {
                      console.log(
                        'found_in_loop__@__i',
                        i
                      )
                      x = i
                      found = true
                    }
                    i++
                  }
                }

                if ( !found ) {
                  // Try to resize node width;
                  x = _blockPrev.x + _blockPrev.w
                  node.w = _emptySlots
                  node.x = x
                  console.log( 'resize_new_w', _emptySlots )
                  console.log( 'resize_new_x', x )
                }
              } else if ( _blockNext.x > -1 ) {
                // try to get right item form x
                console.log( 'found_item_right', _blockNext )
                _blockNext = getNextBlock( _x )
                _emptySlots = getRightEmptySlotFromX(
                  _x,
                  false
                )
                console.log( 'move_all_item_to Right' )
                let nMove =
                  _emptySlots >= node.w
                    ? node.w
                    : _emptySlots
                moveAllItemsFromXToRight( _x, nMove )
                i = _blockNext.x
                console.log( 'loop_start Right', i )
                while (i >= 0 && !found) {
                  if ( checkEnoughSpaceFromX( i, node.w ) ) {
                    x = i
                    node.x = x
                    found = true
                    console.log( 'found_in_while_r', i )
                  }
                  i--
                }

                if ( !found ) {
                  // Try to resize node width;
                  x = _x
                  node.w = _emptySlots
                  node.x = x
                  console.log( 'resize_r_new_w', _emptySlots )
                  console.log( 'resize_r_new_x', x )
                }
              } else {
                // the row is empty
                // Do somthing
              }
            } else {
              // if x is not empty
              // insert before item, that drop in
              console.log( 'x is not empty' )
              _blockPrev = getPrevBlock( _x )

              if ( node.ox < _blockPrev.x ) {
                // drop from left to right
                moveAllItemsFromXToLeft( _x, node.w )
                console.log( 'Move All items to left' )
                if ( isEmptyX( _x ) ) {
                  x = _x
                } else {
                  while (
                    !isEmptyX( _x ) &&
                    _x <= that.cols - 1
                    ) {
                    _x++
                  }
                  x = _x
                }
              } else {
                moveAllItemsFromXToRight( _x, node.w )
                console.log( 'Move All items to right' )
                if ( isEmptyX( _x ) ) {
                  x = _x
                } else {
                  while (!isEmptyX( _x ) && _x >= 0) {
                    _x--
                  }
                  x = _x
                }
              }
            }

            if ( x > that.cols ) {
              x = that.cols - 1
            }
            node.x = x
            console.log( 'new node x', x )
          }

          _moveToSwap( node, _.clone( x ) )

          // console.log( '--------------------------------------------------------' );
          // -------------------------
          let newX
          let i
          let le = 0

          //console.log( 'in_the_end_x', x );
          //console.log( 'in_the_end_w', w );
          if ( x + w > that.cols - 1 ) {
            le = getLeftEmptySlotFromX( x, true )
            console.log( 'le', le )
            if ( le > 0 ) {
              console.log( 'move_Left', x + w - that.cols - 1 )
            }
          }
          updateItemsPositions()
          //console.log( 'Flag update', flag );
          while (w >= 1) {
            if ( emptySlots >= w ) {
              if ( checkEnoughSpaceFromX( x, w ) ) {
                console.log( '', { x: x, w: w } )
                node.w = w
                addItemToFlag( node )
                node.el.attr( 'data-gs-x', x )
                node.el.attr( 'data-gs-width', w )
                return true
              }

              le = getLeftEmptySlotFromX( x, true )
              newX = x - le
              console.log( 'newX', newX )
              i = newX
              while (i < maxCol) {
                if ( checkEnoughSpaceFromX( i, w ) ) {
                  console.log( 'Insert in While', {
                    x: i,
                    w: w
                  } )
                  node.w = w
                  addItemToFlag( { el: node.el, x: i, w: w } )
                  node.el.attr( 'data-gs-x', i )
                  node.el.attr( 'data-gs-width', w )
                  return true
                }
                i++
              }
            }
            w--
          }

          w = node.w
          while (w >= 1) {
            i = 0
            while (i < maxCol) {
              if ( checkEnoughSpaceFromX( i, w ) ) {
                console.log( 'Insert in While 2', {
                  x: i,
                  w: w
                } )
                addItemToFlag( { el: node.el, x: i, w: w } )
                node.el.attr( 'data-gs-x', i )
                node.el.attr( 'data-gs-width', w )
                return true
              }
              i++
            }
            w--
          }

          console.log( 'Insert END While', { x: i, w: w } )
          return false
        }

        let swap = function(node, newX) {
          let w = node.w

          removeNode( node )

          let block2 = getPrevBlock( newX )

          let block2Right = 0
          if ( block2.x > -1 ) {
            block2Right = block2.x + block2.w
          }
          if ( checkEnoughSpaceFromX( newX, w ) ) {
            addItemToFlag( { el: node.el, x: newX, w: w } )
            return true
          } else if (
            block2Right > 0 &&
            checkEnoughSpaceFromX( block2Right, w ) &&
            newX >= block2Right
          ) {
            let block3 = getNextBlock( newX )
            if ( block3.x > -1 ) {
              if ( node.w + newX >= block3.x ) {
                let _newX = _.clone( newX )
                while (_newX > block2Right) {
                  if ( checkEnoughSpaceFromX( _newX, w ) ) {
                    addItemToFlag( {
                      el: node.el,
                      x: _newX,
                      w: w
                    } )
                    return true
                  }
                  _newX--
                }
              }
            }

            if ( newX + w > that.cols ) {
              // Nếu newX + w vượt quá số cols. thì thử lùi lại xem  có đủ chỗ ko ?
              let _x = that.cols - w
              if ( checkEnoughSpaceFromX( _x, w ) ) {
                addItemToFlag( { el: node.el, x: _x, w: w } )
                return true
              }
            }
            addItemToFlag( { el: node.el, x: block2Right, w: w } )
            return true
          }

          node.x = newX

          insertToFlag( node, true )
        }

        //-----------------------------------------------------------------------------------------------------------------------------
        let that = this
        flag = that.getFlag( $wrapper )
        let backupFlag = flag.slice()
        let wOffset = $wrapper.offset()
        that.draggingItem = ui.draggable
        let width = $wrapper.width()
        let colWidth = width / that.cols
        let x
        let iOffset = ui.offset
        let w, cw, itemWidth, inThisRow
        cw = that.getW( ui.draggable, false )
        w = that.getW( ui.draggable, true )
        itemWidth = ui.draggable.width()

        console.log( 'DROP ITEM WIDTH', w )
        console.log( 'DROP ITEM cw WIDTH', cw )
        let ox = that.getX( ui.draggable )
        if ( isRTL ) {
          removeNode( {
            el: ui.draggable,
            x: ox,
            w: w
          } )
        }

        let xc = 0,
          xi = 0,
          found = false

        if ( !ui.draggable.parent().is( $wrapper ) ) {
          inThisRow = false
          console.log( 'Not in this row' )
          if ( w < cw ) {
            w = cw
          }
        } else {
          inThisRow = true
          console.log( 'Item in this row' )
          w = cw
        }

        if ( !isRTL ) {
          xc = Math.round( ( event.clientX - wOffset.left ) / colWidth )
          xi = Math.round(
            ( iOffset.left - wOffset.left - 10 ) / colWidth
          )
          if ( xi < 0 ) {
            xi = 0
          }
        } else {
          xc = Math.round(
            ( wOffset.left + width + 10 - event.clientX ) / colWidth
          )

          xi = Math.round(
            ( wOffset.left +
              width -
              ( iOffset.left + itemWidth + 10 ) ) /
            colWidth
          )
          if ( xi < 0 ) {
            xi = 0
          }
        }
        if ( xc > that.cols ) {
          xc = that.cols
        }

        x = xi
        let _i
        _i = xi

        if ( isRTL ) {
          if ( !isEmptyX( _i ) ) {
            while (_i < that.cols && !found) {
              if ( isEmptyX( _i ) ) {
                found = true
              } else {
                _i++
              }
            }
            if ( x > xc ) {
              // x = xc;
            }
          }
        } else {
          if ( !isEmptyX( x ) ) {
            while (x <= xc && !found) {
              if ( isEmptyX( x ) ) {
                found = true
              } else {
                x++
              }
            }
            if ( x > xc ) {
              x = xc
            }
          }
        }

        if ( !found ) {
          if ( inThisRow ) {
            x = xi
          } else {
            x = xc
          }
        }

        if ( x < 0 ) {
          x = 0
        }

        if ( x + w >= that.cols ) {
          found = true
          _i = x
          while (_i + w > that.cols && found) {
            if ( !isEmptyX( _i ) ) {
              _i++
              found = false
            } else {
              _i--
            }
          }

          x = _i
        }

        let node = {
          el: ui.draggable,
          x: x,
          w: w,
          ox: ox,
          ow: cw
        }

        if ( node.x <= 0 ) {
          node.x = 0
        }

        let did = false
        if ( inThisRow ) {
          node.x = parseInt( ui.draggable.attr( 'data-gs-x' ) || 0 )
          node.w = parseInt( ui.draggable.attr( 'data-gs-width' ) || 1 )
          swap( node, x )
          did = true
        } else {
          did = insertToFlag( node )
          // if ( node.el[0].dataset ) {
          // 	$( '#accordion-section-' + node.el[0].dataset.section ).removeClass( 'hfg-section-inactive' );
          // }
        }

        // console.log( 'Drop on X: ' + x + ', width: '+ w );
        // console.log( 'Drop Flag: ', flag );

        if ( !did ) {
          ui.draggable.removeAttr( 'style' )
          console.log( 'Can not insert' )
          flag = backupFlag // rollback;
        } else {
          // Add drop item from somewhere to current row
          ui.draggable.removeClass( 'item-from-list' )

          $wrapper.append( ui.draggable )
          ui.draggable.removeAttr( 'style' )
          console.log( 'DID Flag: ', flag )
          //ui.draggable.attr( 'data-gs-x', x );
          //ui.draggable.attr( 'data-gs-y', y );
          that.draggingItem = null
        }

        updateItemsPositions()
        that.updateAllGrids()

        //-----------------------------------------------------------------------------------------------------------------------------
      },
      updateAllGrids: function() {
        let that = this
        _.each( that.panels[that.activePanel], function(row, rowId) {
          that.updateGridFlag( row )
        } )
      },
      setGridWidth: function($wrapper, ui) {
        let that = this
        let $item = ui.element
        let width = $wrapper.width()
        let itemWidth = ui.size.width
        let originalElementWidth = ui.originalSize.width
        let colWidth = Math.ceil( width / that.cols ) - 1
        let isShiftLeft, isShiftRight

        if ( !isRTL ) {
          isShiftLeft = ui.originalPosition.left > ui.position.left
          isShiftRight = ui.originalPosition.left < ui.position.left
        } else {
          isShiftLeft = ui.originalPosition.left > ui.position.left
          isShiftRight = originalElementWidth !== itemWidth
        }

        let ow = ui.originalElement.attr( 'data-gs-width' ) || 1
        let ox = ui.originalElement.attr( 'data-gs-x' ) || 0
        ow = parseInt( ow )
        ox = parseInt( ox )

        let addW
        let newX
        let newW
        let flag = that.getFlag( $wrapper )
        let itemInfo = that.gridGetItemInfo(
          ui.originalElement,
          flag,
          $wrapper
        )

        if ( isShiftLeft ) {
          if ( !isRTL ) {
            // Ok
            newX = Math.floor( ( ui.position.left - 1 ) / colWidth )
            addW = ox - newX
            if ( addW > itemInfo.before ) {
              addW = itemInfo.before
            }

            newX = ox - addW
            newW = ow + addW
            $item.attr( 'data-gs-x', newX ).removeAttr( 'style' )
            $item.attr( 'data-gs-width', newW ).removeAttr( 'style' )
          } else {
            // RTL

            // Ok
            newX = Math.floor( ( ui.position.left - 1 ) / colWidth )
            newX = that.cols - newX
            addW = newX - ox - ow
            if ( addW > itemInfo.after ) {
              addW = itemInfo.after
            }
            newW = ow + addW
            $item.attr( 'data-gs-x', ox ).removeAttr( 'style' )
            $item.attr( 'data-gs-width', newW ).removeAttr( 'style' )
          }

          that.updateGridFlag( $wrapper )
          return
        } else if ( isShiftRight ) {
          if ( !isRTL ) {
            // Ok
            newX = Math.round( ( ui.position.left - 1 ) / colWidth )
            addW = newX - ox
            newW = ow - addW
            if ( newW <= 0 ) {
              newW = 1
              addW = 0
            }
            newX = ox + addW
            $item.attr( 'data-gs-x', newX ).removeAttr( 'style' )
            $item.attr( 'data-gs-width', newW ).removeAttr( 'style' )
          } else {
            // RTL

            if ( ui.originalPosition.left !== ui.position.left ) {
              // Nếu resize ở mép trái của Item
              // Ok
              newX = Math.floor(
                ( ui.position.left - 1 ) / colWidth
              )
              newX = that.cols - newX
              addW = ow + ox - newX
              if ( addW > ow ) {
                addW = 0
              }
              newX = ox
              newW = ow - addW
              if ( newX <= 0 ) {
                newX = 0
              }

              console.log( 'diffRight_RTL_COL_New __left' )
            } else {
              // Nếu resize ở mép phải của Item
              // Ok
              newX = Math.ceil(
                ( ui.position.left + ui.size.width - 11 ) /
                colWidth
              )
              newX = that.cols - newX
              addW = ox - newX
              if ( addW > itemInfo.before ) {
                addW = itemInfo.before
              }
              newX = ox - addW
              newW = ow + addW
            }
            $item.attr( 'data-gs-x', newX ).removeAttr( 'style' )
            $item.attr( 'data-gs-width', newW ).removeAttr( 'style' )
          }

          that.updateGridFlag( $wrapper )
          return
        }

        let w
        let x = itemInfo.x
        let xC

        // Resize from left to right
        //Ok
        xC = Math.ceil( ( ui.position.left + ui.size.width - 11 ) / colWidth )
        w = itemInfo.w + ( xC - ( x + itemInfo.w ) )
        if ( itemInfo.x + w > itemInfo.x + itemInfo.w + itemInfo.after ) {
          w = itemInfo.w + itemInfo.after
        }

        if ( itemWidth < ui.originalSize.width ) {
          // Resize from right to left
          // Ok
          xC = Math.round(
            ( ui.position.left + ui.size.width - 11 ) / colWidth )
          if ( xC <= x ) {
            xC = x + 1
          }
          w = itemInfo.w - ( x + itemInfo.w - xC )
        }

        if ( w <= 0 ) {
          w = 1
        }

        $item.attr( 'data-gs-width', w ).removeAttr( 'style' )
        that.updateGridFlag( $wrapper )
      },
      getFlag: function($row) {
        let that = this
        let flag = $row.data( 'gridRowFlag' ) || []
        let i
        if ( _.isEmpty( flag ) ) {
          for ( i = 0; i < that.cols; i++ ) {
            flag[i] = 0
          }
          $row.data( 'gridRowFlag', flag )
        }

        return flag
      },
      updateGridFlag: function($row) {
        let that = this
        let rowFlag = []
        let i
        for ( i = 0; i < that.cols; i++ ) {
          rowFlag[i] = 0
        }
        let items
        items = $( '.grid-stack-item', $row )
        items.each( function(index) {
          $( this ).removeAttr( 'style' )
          let x = that.getX( $( this ) )
          let w = that.getW( $( this ) )

          for ( i = x; i < x + w; i++ ) {
            if ( i === x ) {
              rowFlag[i] = $( this )
            } else {
              rowFlag[i] = 1
            }
          }
        } )

        $row.data( 'gridRowFlag', rowFlag )
        that.updateItemsPositions( rowFlag )
        that.sortGrid( $row )
        return rowFlag
      },
      addNewWidget: function($item, row) {
        let that = this
        let panel = that.container.find(
          '.hfg--device-panel.hfg--panel-' +
          that.activePanel
        )
        let el = row
        if ( !_.isObject( el ) ) {
          el = panel.find( '.hfg--cb-items' ).first()
        }

        let elItem = $item
        elItem.draggable( {
          revert: 'invalid',
          appendTo: panel,
          scroll: false,
          zIndex: 99999,
          handle: '.grid-stack-item-content',
          start: function(event, ui) {
            $( 'body' ).addClass( 'builder-item-moving' )
            $( '.hfg--cb-items', panel ).css( 'z-index', '' )
            ui.helper.parent().css( 'z-index', 9999 )
          },
          stop: function(event, ui) {
            $( 'body' ).removeClass( 'builder-item-moving' )
            $( '.hfg--cb-items', panel ).css( 'z-index', '' )
            that.save()
          },
          drag: function(event, ui) {
          }
        } ).resizable( {
          handles: 'w, e',
          start: function(event, ui) {
            // RTL
            ui.originalElement.css( {
              right: 'auto',
              left: ui.position.left
            } )
          },
          stop: function(event, ui) {
            that.setGridWidth( ui.element.parent(), ui )
            that.save()
          }
        } )

        el.append( elItem )
        that.updateGridFlag( el )
        if ( elItem[0] ) {
          $( '#accordion-section-' + elItem[0].dataset.section )
            .removeClass( 'hfg-section-inactive' )
        }
      },
      addPanel: function(device) {
        let that = this
        let template = that.getTemplate()
        let templateId = 'tmpl-hfg--cb-panel'
        if ( $( '#' + templateId ).length === 0 ) {
          return
        }
        if ( !_.isObject( options.rows ) ) {
          options.rows = {}
        }
        let html = template(
          {
            device: device,
            id: options.id,
            rows: options.rows
          },
          templateId
        )
        return (
          '<div class="hfg--device-panel hfg-vertical-panel hfg--panel-' +
          device +
          '" data-device="' +
          device +
          '">' +
          html +
          '</div>'
        )
      },
      addDevicePanels: function() {
        let that = this
        _.each( that.devices, function(deviceName, device) {
          let panelHTML = that.addPanel( device )
          $( '.hfg--cb-devices-switcher', that.container ).append(
            '<a href="#" class="switch-to switch-to-' +
            device +
            '" data-device="' +
            device +
            '"><span class="icon ' + device + '-icon"></span><span>' +
            deviceName +
            '</span></a>'
          )
          $( '.hfg--cb-body', that.container ).append( panelHTML )
          $( '.hfg-widgets-panel-inner', that.widgetSidebarContainer )
            .append( '<div class=" hfg--widgets hfg--widgets-' + device +
              '" data-device="' + device + '"></div>' )
        } )

        let tmplUpsell = $( '#hfg-upsell-tmpl' )
        if ( tmplUpsell.length ) {
          $( tmplUpsell.html() ).insertAfter(
            $( '.hfg--cb-devices-switcher', that.container )
          )
        }
		$(that.container).find('.welcome-notice').removeClass('hidden');
		$(that.container).find('.conditional-header').addClass('hidden');
      },
      addItem: function(node, index) {
        let template = this.getTemplate()
        let templateId = 'tmpl-hfg--cb-item'
        if ( $( '#' + templateId ).length === 0 ) {
          return
        }
        node['elementOrder'] = index
        let html = template( node, templateId )
        return $( html )
      },
      addAvailableItems: function() {
        let that = this
        _.each( that.devices, function(deviceName, device) {
          _.each( that.items, function(node, index) {
            let _d = true
            if (
              !_.isUndefined( node.devices ) &&
              !_.isEmpty( node.devices )
            ) {
              if ( _.isString( node.devices ) ) {
                if ( node.devices !== device ) {
                  _d = false
                }
              } else {
                let _hasD = false
                _.each( node.devices, function(_v) {
                  if ( device === _v ) {
                    _hasD = true
                  }
                } )
                if ( !_hasD ) {
                  _d = false
                }
              }
            }
            if ( _d ) {
              index = Object.keys( that.items ).indexOf( index )
              let item = that.addItem( node, index )
              $( '.hfg--widgets-' + device, that.widgetSidebarContainer )
                .prepend( item )
            }
          } )
        } )
      },
      switchToDevice: function(device, toggleButton) {
        let that = this
        let numberDevices = _.size( that.devices )
        if ( numberDevices > 1 ) {
          $(
            '.hfg--cb-devices-switcher a',
            that.container
          ).removeClass( 'hfg--tab-active' )
          $(
            '.hfg--cb-devices-switcher .switch-to-' + device,
            that.container
          ).addClass( 'hfg--tab-active' )
          $( '.hfg--device-panel', that.container ).addClass(
            'hfg--panel-hide'
          )
          $(
            '.hfg--device-panel.hfg--panel-' + device,
            that.container
          ).removeClass( 'hfg--panel-hide' )
          that.activePanel = device

          $( '.hfg--device-panel .hfg-available-items .item-from-list' )
            .each( function(index, item) {
              $( '#accordion-section-' + $( item )[0].dataset.section )
                .removeClass( 'hfg-section-inactive' )
            } )

          $( '.hfg--device-panel.hfg--panel-' + device +
            ' .hfg-available-items .item-from-list' )
            .each( function(index, item) {
              $( '#accordion-section-' + $( item )[0].dataset.section )
                .addClass( 'hfg-section-inactive' )
            } )
        } else {

          $( '.hfg--device-panel.hfg--panel-' + device +
            ' .hfg-available-items .item-from-list' )
            .each( function(index, item) {
              $( '#accordion-section-' + $( item )[0].dataset.section )
                .addClass( 'hfg-section-inactive' )
            } )

          $(
            '.hfg--cb-devices-switcher a',
            that.container
          ).addClass( 'hfg--tab-active' )
        }

        if ( _.isUndefined( toggleButton ) || toggleButton ) {
          if ( device === 'desktop' ) {
            $( '#customize-footer-actions .preview-desktop' ).trigger(
              'click'
            )
          } else {
            $( '#customize-footer-actions .preview-mobile' ).trigger(
              'click'
            )
          }
        }
      },
      addExistingRowsItems: function() {
        let that = this
        let data = false
        if ( wpcustomize.control( that.controlId ).setting.get() ) {
          data = JSON.parse(
            wpcustomize.control( that.controlId ).setting.get() )
        }

        if ( !_.isObject( data ) ) {
          data = {}
        }

        _.each( that.panels, function($rows, device) {
          let deviceData = {}
          if ( _.isObject( data[device] ) ) {
            deviceData = data[device]
          }
          _.each( deviceData, function(items, rowId) {
            if ( !_.isUndefined( items ) ) {
              _.each( items, function(node, index) {
                let item = $(
                  '.hfg--widgets[data-device="' +
                  device +
                  '"] .grid-stack-item[data-id="' +
                  node.id +
                  '"]'
                ).first()
                item.attr( 'data-gs-width', node.width )
                item.attr( 'data-gs-x', node.x )
                item.removeClass( 'item-from-list' )
                that.addNewWidget( item, $rows[rowId] )
                $( '#accordion-section-' + node.id )
                  .removeClass( 'hfg-section-inactive' )
              } )
            }
          } )
          that.hideDuplicates( device )
        } )

        that.ready = true
      },
      focus: function() {
        this.container.on(
          'click',
          '.hfg--cb-item-setting, .hfg--cb-item-admin-setting, .hfg--cb-item-name, .item-tooltip',
          function(e) {
            e.preventDefault()
            let section = $( this ).data( 'section' ) || ''
            console.log( 'Clicked section' , section );

            if ( section.indexOf('neve_') !== -1 ) {
            	section = section.replace( 'neve_', '' );
				console.log( 'New section' , section );
			}

			let widget = $( this ).data( 'widget' ) || ''
			if ( widget ) {
				console.log( 'Clicked widget' , widget );
				section = widget
			}

            let control = $( this ).attr( 'data-control' ) || ''
            let did = false
            if ( control ) {
              if ( !_.isUndefined( wpcustomize.control( control ) ) ) {
                wpcustomize.control( control ).focus()
                did = true
              }
            }
            if ( !did ) {
              if (
                section &&
                !_.isUndefined( wpcustomize.section( section ) )
              ) {
              	console.log( 'Before focus section' )
                wpcustomize.section( section ).focus()
              }
            }
          }
        )

        // Focus rows
        this.container.on(
          'click',
          '.hfg--cb-row-settings',
          function(e) {
            e.preventDefault()
            let id = $( this ).attr( 'data-id' ) || ''

            let section = options.id + '_' + id

            if ( !_.isUndefined( wpcustomize.section( section ) ) ) {
              wpcustomize.section( section ).focus()
            }
          }
        )
      },
      closeComponentsSidebar: function() {
        $( '.widgets-panel--visible' ).removeClass( 'widgets-panel--visible' )
        $( '.hfg--widgets.widgets--visible' ).removeClass( 'widgets--visible' )
        $( this.widgetSidebarContainer )
          .find( '.component-search' )
          .val( '' )
          .trigger( 'keyup' )
        $( this.widgetSidebarContainer )
          .removeClass( 'preview-right preview-left' )
        $( 'body' ).removeClass( 'hfg--widgets-open' )
        $( '.hfg--component-preview.visible' ).removeClass( 'visible' )
      },
      initComponentsSidebar: function() {
        let that = this

        $( that.container ).on( 'click', '.add-button--grid', function(e) {
          that.insertPoint = $( this ).data( 'slot' )
          that.insertRow = $( this )
            .closest( '.hfg--row-inner' )
            .find( '.hfg--cb-items' )
            .data( 'id' )

          e.preventDefault()
          that.closeComponentsSidebar()
          let pos = e.target.getBoundingClientRect()
          let sidebar = $( '.wp-full-overlay' ).hasClass( 'collapsed' ) ?
            0 :
            $( '#customize-controls' ).outerWidth()
          let width = $( that.widgetSidebarContainer ).outerWidth()
          let height = $( that.widgetSidebarContainer ).outerHeight()
          let positionStyle = {
            top: pos.top - ( height + 5 )
          }

          if ( that.insertPoint > 6 ) {
            $( that.widgetSidebarContainer ).addClass( 'preview-left' )
            positionStyle.left = pos.left - sidebar - width + width / 7 +
              $( this ).outerWidth()
          } else if ( that.insertPoint < 5 ) {
            $( that.widgetSidebarContainer ).addClass( 'preview-right' )
            positionStyle.left = pos.left - sidebar - width / 7
          } else {
            positionStyle.left = pos.left - sidebar - width / 2 +
              $( this ).outerWidth() / 2
          }

          $( that.widgetSidebarContainer ).css( positionStyle )

          let panel = $( this ).closest( '.hfg--device-panel' ),
            device = panel[0].getAttribute( 'data-device' )

          $( that.widgetSidebarContainer ).addClass( 'widgets-panel--visible' )
          $( that.widgetSidebarContainer )
            .find( ' .hfg--widgets-' + device )
            .addClass( 'widgets--visible' )
        } )

        $( that.widgetSidebarContainer )
          .on( 'click', '.hfg-widgets-panel-header .close', function(e) {
            that.closeComponentsSidebar()
          } )

        $( that.widgetSidebarContainer )
          .on( 'keyup input', '.component-search', function(e) {
            let query = e.target.value.toLowerCase()
            _.each( that.widgetSidebarContainer.find( '.grid-stack-item' ),
              function(item) {
                $( item ).filter( function() {
                  if ( $( this ).hasClass( 'duplicate' ) ) {
                    return false
                  }
                  $( this ).toggle(
                    $( this ).text().toLowerCase().indexOf( query ) >
                    -1 )
                } )
              } )
          } )

        $( that.widgetSidebarContainer )
          .on( 'click', '.grid-stack-item', function(e) {
            that.closeComponentsSidebar()
            let data = JSON.parse(
              wpcustomize.control( that.controlId ).setting.get() ),
              device = $( this ).closest( '.hfg--widgets' ).data( 'device' ),
              width = $( this ).data( 'df-width' ),
              itemId = $( this ).data( 'id' )

            // Make sure we have proper objects set up for what row we're trying to insert in.
            if ( typeof data[device] === 'undefined' ) {
              data[device] = {}
            }

            if ( typeof data[device][that.insertRow] === 'undefined' ) {
              data[device][that.insertRow] = {}
            }

            // Default data gets reformatted after one change.
            // We're using only the values, or adding widgets to the sidebar is going to break.
            // Just don't change the line below pls.
            let dataInRow = Object.values( data[device][that.insertRow] )
            let newItem = {
              x: that.insertPoint,
              y: 1,
              width: width,
              height: 1,
              id: itemId
            }

            dataInRow.push( newItem )

            $( this ).attr( 'data-gs-x', that.insertPoint )
            $( this ).attr( 'data-gs-width', width )

            dataInRow.sort( function(current, next) {
              if ( current.x < next.x ) return -1
              if ( current.x > next.x ) return 1
              return 0
            } )

            for ( let i = 0; i < dataInRow.length; i++ ) {
              if ( dataInRow[i].id === itemId ) {
                if ( i === dataInRow.length - 1 ) {
                  if ( dataInRow[i].x + dataInRow[i].width > 12 ) {
                    dataInRow[i].width = dataInRow[i].x + dataInRow[i].width -
                      12
                    $( this ).attr( 'data-gs-width', dataInRow[i].width )
                  }
                } else {
                  if ( dataInRow[i].x + dataInRow[i].width >
                    dataInRow[i + 1].x ) {
                    dataInRow[i].width = dataInRow[i + 1].x - dataInRow[i].x
                    $( this ).attr( 'data-gs-width', dataInRow[i].width )
                  }
                }
              }
            }
            let item = $( this ).find( '.grid-stack-item-content' )
            item.addClass( 'hfg-highlight' )
            setTimeout( function() {
              item.removeClass( 'hfg-highlight' )
            }, 3500 )
            $( '#_sid_' + device + '-' + that.insertRow, that.container[0] )
              .append( this )
            that.addNewWidget( $( this ),
              $( that.container[0] )
                .find( ' #_sid_' + device + '-' + that.insertRow ) )
            wpcustomize.section( this.getAttribute( 'data-section' ) ).focus()
            that.save()
            that.insertRow = null
            that.insertPoint = null
            that.hideDuplicates( device )
          } )
      },
      remove: function() {
        let that = this
        $( that.container ).on(
          'click',
          '.hfg--device-panel .hfg--cb-item-remove',
          function(e) {
            e.preventDefault()
            let item = $( this ).closest( '.grid-stack-item' ),
              panel = item.closest( '.hfg--device-panel' ),
              device = panel[0].getAttribute( 'data-device' )

            item.attr( 'data-gs-x', 0 )
            item.removeAttr( 'style' )
            $( that.widgetSidebarContainer )
              .find( '.hfg--widgets-' + device )
              .prepend( item )
            $( '#accordion-section-' + item[0].dataset.section )
              .addClass( 'hfg-section-inactive' )
            that.updateAllGrids()
            that.hideDuplicates( device )
            that.save()
          }
        )
      },
      removeAllItems: function() {
        let that = this
        $( that.container )
          .find( '.grid-stack-item' )
          .each( function(index, item) {
            let panel = $( item ).closest( '.hfg--device-panel' ),
              device = panel[0].getAttribute( 'data-device' )
            $( item ).attr( 'data-gs-x', 0 )
            $( item ).removeAttr( 'style' )
            $( that.widgetSidebarContainer )
              .find( '.hfg--widgets-' + device )
              .prepend( item )
            that.updateAllGrids()
            that.hideDuplicates( device )
          } )
      },
      hideDuplicates: function(device) {
        let that = this
        let items = $( that.widgetSidebarContainer )
          .find( '.hfg--widgets-' + device + ' .grid-stack-item' )
        let map = {}
        _.each( items, function(item) {
          let slug = $( item ).data( 'slug' )
          if ( slug === 'hfg-generic-component' ) return false
          if ( typeof map[slug] === 'undefined' ) {
            map[slug] = []
          }
          map[slug].push( item )
        } )

        _.each( map, function(components, slug) {
          if ( components.length < 2 ) {
            $( components[0] ).removeClass( 'duplicate' )
            return false
          }
          _.each( components, function(component, index) {
            if ( index === 0 ) {
              $( component ).removeClass( 'duplicate' )
              return false
            }
            $( component ).addClass( 'duplicate' )
          } )
        } )
      },
      encodeValue: function(value) {
        return JSON.stringify( value )
      },
      listenForLayoutSideloading() {
        let that = this
        document.addEventListener( 'neve-changed-builder-value', function(e) {

          if ( !e.detail ) return false

          if( e.detail.id !== that.id ) return false

          wpcustomize.control( that.controlId )
            .setting
            .set( that.encodeValue( e.detail.value ) )

          that.removeAllItems()
          that.addExistingRowsItems()
        } )
      },
      decodeValue: function(value) {
        return JSON.parse( value )
      },
      save: function() {
        let that = this
        if ( !that.ready ) {
          return
        }

        let data = {}
        _.each( that.panels, function($rows, device) {
          data[device] = {}
          _.each( $rows, function(row, rowId) {
            data[device][rowId] = _.map(
              $( ' > .grid-stack-item', row ),
              function(el) {
                el = $( el )
                return {
                  x: that.getX( el ),
                  y: 1,
                  width: that.getW( el ),
                  height: 1,
                  id: el.data( 'id' ) || ''
                }
              }
            )
          } )
        } )

        wpcustomize.control( that.controlId )
          .setting
          .set( that.encodeValue( data ) )
      },
      showPanel: function() {
        let that = this
        this.container.find( '.add-button--grid' ).addClass( 'hfg-highlight' )
        setTimeout( function() {
          that.container.find( '.add-button--grid' )
            .removeClass( 'hfg-highlight' )
        }, 1000 )
        this.container.removeClass( 'hfg--builder--hide' )
          .addClass( 'hfg--builder-show' )
        setTimeout( function() {
          let h = that.container.height()
          $( '#customize-preview' )
            .addClass( 'cb--preview-panel-show' )
            .css( { bottom: h - 1, 'margin-top': '0px' } )

        }, 100 )
      },
      hidePanel: function() {
        this.container.removeClass( 'hfg--builder-show' )
        $( '#customize-preview' )
          .removeClass( 'cb--preview-panel-show' )
          .removeAttr( 'style' )
      },
      togglePanel: function() {
        let that = this
        wpcustomize.state( 'expandedPanel' ).bind( function(paneVisible) {
          if ( wpcustomize.panel( options.panel ).expanded() ) {
            $document.trigger( 'hfg_panel_builder_open', [
              options.panel
            ] )
            top._current_builder_panel = id
            that.showPanel()
          } else {
            that.hidePanel()
            that.closeComponentsSidebar()
          }
        } )

        that.container.on( 'click', '.hfg--panel-close', function(e) {
          e.preventDefault()
          that.container.toggleClass( 'hfg--builder--hide' )
          if ( that.container.hasClass( 'hfg--builder--hide' ) ) {
            $( '#customize-preview' ).removeClass(
              'cb--preview-panel-show'
            )
          } else {
            $( '#customize-preview' ).addClass(
              'cb--preview-panel-show'
            )
          }
        } )
      },
      panelLayoutCSS: function() {
        //wpcustomize.state( 'paneVisible' ).get()
        let sidebarWidth = $( '#customize-controls' ).width()
        if ( !wpcustomize.state( 'paneVisible' ).get() ) {
          sidebarWidth = 0
        }
        if ( isRTL ) {
          this.container.find( '.hfg--cb-inner' )
            .css( { 'margin-right': sidebarWidth } )
        } else {
          this.container.find( '.hfg--cb-inner' )
            .css( { 'margin-left': sidebarWidth } )
        }
      },
      populateComponentPreviews: function() {
        let that = this
        let template = that.getTemplate()
        let previewTemplate = 'tmpl-hfg--widgets-preview'
        _.each( that.devices, function(deviceName, device) {
          _.each( that.items, function(node) {
            if ( node.description === null ) {
              return false
            }
            let componentPreview = template( node, previewTemplate )
            $( that.widgetSidebarContainer ).append( componentPreview )
          } )
        } )
      },
      init: function(controlId, items, devices) {
        let that = this
        let template = that.getTemplate()
        let templateId = 'tmpl-hfg--builder-panel'
        let sidebarId = 'tmpl-hfg--widgets-sidebar'
        let html = template( options, templateId )
        let widgetsSidebar = template( options, sidebarId )
        that.container = $( html )
        that.widgetSidebarContainer = $( widgetsSidebar )
        $( 'body .wp-full-overlay' )
          .append( that.container )
          .append( that.widgetSidebarContainer )
        that.controlId = controlId
        that.items = items
        that.devices = devices
        if ( options.section ) {
          wpcustomize.section( options.section )
            .container
            .addClass( 'hfg--hide' )
        }

        that.addDevicePanels()
        that.switchToDevice( that.activePanel )
        that.addAvailableItems()
        that.populateComponentPreviews()
        that.switchToDevice( that.activePanel )
        that.drag_drop()
        that.initComponentsSidebar()
        that.focus()
        that.remove()
        that.addExistingRowsItems()
        that.listenForLayoutSideloading()

        if ( wpcustomize.panel( options.panel ).expanded() ) {
          that.showPanel()
        } else {
          that.hidePanel()
          that.closeComponentsSidebar()
        }

        wpcustomize.previewedDevice.bind( function(newDevice) {
          if ( newDevice === 'desktop' ) {
            that.switchToDevice( 'desktop', false )
          } else {
            that.switchToDevice( 'mobile', false )
          }
        } )

        that.togglePanel()
        if ( wpcustomize.state( 'paneVisible' ).get() ) {
          that.panelLayoutCSS()
        }
        wpcustomize.state( 'paneVisible' ).bind( function() {
          that.panelLayoutCSS()
        } )

        $( window ).resize(
          _.throttle( function() {
            that.panelLayoutCSS()
          }, 100 )
        )

        // Switch panel.
        that.container.on(
          'click',
          '.hfg--cb-devices-switcher a.switch-to',
          function(e) {
            e.preventDefault()
            let device = $( this ).data( 'device' )
            that.switchToDevice( device )
          }
        )

        $document.trigger( 'hfg_builder_panel_loaded', [id, that] )
      }
    }

    Builder.init( options.control_id, options.items, options.devices )
    return Builder
  }

}( jQuery ) );

( function($, wpcustomize) {
  let $document = $( document )

  wpcustomize.bind( 'ready', function(e, b) {
    _.each( HFG_Layout_Builder.builders, function(opts, id) {
      hfgPanels[id] = new CustomizeBuilderV1( opts, id )
    } )

    wpcustomize.bind( 'pane-contents-reflowed', function() {
      setTimeout( function() {
        let panelWidgetsLength = $(
          '#sub-accordion-panel-widgets .no-widget-areas-rendered-notice .footer_moved_widgets_text' ).length
        if ( panelWidgetsLength === 0 ) {
          $(
            '#sub-accordion-panel-widgets .no-widget-areas-rendered-notice'
          ).append(
            '<p class="footer_moved_widgets_text">' +
            HFG_Layout_Builder.footer_moved_widgets_text +
            '</p>'
          )
        }
      }, 1000 )
    } )

    // When focus section
    wpcustomize.state( 'expandedSection' ).bind( function(section) {
      $( '.hfg--device-panel .grid-stack-item' ).removeClass(
        'item-active'
      )
      $( '.hfg--cb-row' ).removeClass( 'row-active' )
      if ( section ) {
        $( '.hfg--cb-row[data-id="' + section.id + '"]' ).addClass(
          'row-active'
        )
        $(
          '.hfg--device-panel .grid-stack-item.for-s-' +
          section.id
        ).addClass( 'item-active' )
      }
    } )
  } )

  // Focus
  $document.on( 'click', '.focus-section', function(e) {
    e.preventDefault()
    let id = $( this ).attr( 'data-id' ) || ''
    if ( !id ) {
      id = $( this ).attr( 'href' ) || ''
      id = id.replace( '#', '' )
    }

    if ( id ) {
      if ( wpcustomize.section( id ) ) {
        wpcustomize.section( id ).focus()
      }
    }
  } )

  $document.on( 'click', '.focus-control', function(e) {
    e.preventDefault()
    let id = $( this ).attr( 'data-id' ) || ''
    if ( !id ) {
      id = $( this ).attr( 'href' ) || ''
      id = id.replace( '#', '' )
    }
    if ( id ) {
      if ( wpcustomize.control( id ) ) {
        wpcustomize.control( id ).focus()
      }
    }
  } )

  $document.on( 'click', '.focus-panel', function(e) {
    e.preventDefault()
    let id = $( this ).attr( 'data-id' ) || ''
    if ( !id ) {
      id = $( this ).attr( 'href' ) || ''
      id = id.replace( '#', '' )
    }
    if ( id ) {
      if ( wpcustomize.panel( id ) ) {
        wpcustomize.panel( id ).focus()
      }
    }
  } )

  $document.on( 'mouseover', '.hfg--widgets .grid-stack-item', function(e) {
    let item = $( this )
    let id = item.attr( 'data-id' )
    let description = $( item )
      .closest( '.hfg--widgets-panel' )
      .find( '[data-for-component="' + id + '"]' )

    description.addClass( 'visible' )
  } )

  $document.on( 'mouseleave', '.hfg--widgets .grid-stack-item', function(e) {
    let item = $( this )
    let id = item.attr( 'data-id' )
    let description = $( item )
      .closest( '.hfg--widgets-panel' )
      .find( '[data-for-component="' + id + '"]' )

    description.removeClass( 'visible' )
  } )

  $document.on( 'mouseover', '.hfg--cb-row .grid-stack-item', function(e) {
    let item = $( this )
    let nameW =
      $( '.hfg--cb-item-remove', item ).outerWidth() +
      $( '.hfg--cb-item-setting', item ).outerWidth()
    let itemW = $( '.grid-stack-item-content', item ).innerWidth()
    if ( nameW > itemW - 50 ) {
      item.addClass( 'show-tooltip' )
    }
  } )

  $document.on( 'mouseleave', '.hfg--cb-row .grid-stack-item', function(e) {
    $( this ).removeClass( 'show-tooltip' )
  } )

  wpcustomize.bind( 'ready', function() {
    wpcustomize.section.each( function(section) {
      section.expanded.bind( function(isExpanding) {
        let inSidebar = []
        $(
          '.hfg--sidebar-items .grid-stack-item .grid-stack-item-content .hfg--cb-item-name' )
          .each( function(index, el) {
            inSidebar.push( $( el ).data( 'section' ) )
          } )
        // inSidebar.push( 'header_menu_icon' );
        inSidebar.push( 'hfg_header_layout_sidebar' )

        if ( inSidebar.indexOf( section.id ) !== -1 && isExpanding &&
          wpcustomize.previewedDevice.get() !== 'desktop' ) {
          toggleMobileMenu( true )
        } else {
          toggleMobileMenu( false )
        }
      } )
    } )

    wpcustomize.previewer.bind( 'neve-toggle-navbar', function() {
      $( '.hfg--cp-sidebar .toggle' ).toggleClass( 'active' )
    } )
  } )

  $document.on( 'click', '.hfg--cp-sidebar .toggle', function() {
    toggleMobileMenu()
  } )
  $document.on( 'click',
    '.hfg--cp-sidebar .hfg--cb-row-settings,.hfg--cp-sidebar .grid-stack-item',
    function() {
      toggleMobileMenu( true )
    } )

  //Quick links
  $document.on( 'click', '.quick-links a', function(e) {
    e.preventDefault()
    e.stopPropagation()
    var control = $( this ).data( 'control-focus' )
	if( control === 'toggle_sidebar' ) {
	  toggleMobileMenu(true);
	  return false;
	}
    wp.customize.control( control ).focus()
    $( 'label.' + control ).click()
  } )

  function toggleMobileMenu(type) {
    let item = $( '.hfg--cp-sidebar .toggle' )
    if ( type === true ) {
      item.addClass( 'active' )
      wpcustomize.previewer.send( 'header_sidebar_open' )
      return false
    }
    if ( type === false ) {
      item.removeClass( 'active' )
      wpcustomize.previewer.send( 'header_sidebar_close' )
      return false
    }
    if ( item.hasClass( 'active' ) ) {
      wpcustomize.previewer.send( 'header_sidebar_close' )
    } else {
      wpcustomize.previewer.send( 'header_sidebar_open' )
    }
    item.toggleClass( 'active' )
  }
} )( jQuery, wp.customize || null )

hashCode = function(string) {
  var hash = 0, i, chr
  if ( string.length === 0 ) return hash
  for ( i = 0; i < this.length; i++ ) {
    chr = this.charCodeAt( i )
    hash = ( ( hash << 5 ) - hash ) + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

wp.customize.sectionConstructor['hfg_instructions'] = wp.customize.Section.extend(
  {

    // No events for this type of section.
    attachEvents: function() {
    },

    // Always make the section active.
    isContextuallyActive: function() {
      return true
    }
  } )
