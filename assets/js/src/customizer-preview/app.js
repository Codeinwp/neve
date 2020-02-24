/* global neveCustomizePreview */
/* jshint esversion: 6 */
import { removeClass, addClass } from '../utils.js'

function addCss(id, content = '') {
  let style = document.querySelector( '#' + id + '-css-style' )
  if ( !style ) {
    style = document.createElement( 'style' )
    style.setAttribute( 'id', id + '-css-style' )
    style.setAttribute( 'type', 'text/css' )
    document.querySelector( 'head' ).appendChild( style )
  }
  style.innerHTML = content
}

/**
 * Run JS on load.
 */
window.addEventListener( 'load', function() {
  /**
   * Add action when Header Panel rendered by customizer.
   */
  document.addEventListener(
    'header_builder_panel_changed',
    function(e) {
      if ( e.detail.partial_id === 'hfg_header_layout_partial' ) {
        window.HFG.init()
        console.log( 'Reinitialize HFG with sidebar.' )
        return false
      }
      if ( e.detail.partial_id === 'nav-icon_partial' ) {
        window.HFG.init( true )
        console.log( 'Reinitialize HFG with skip.' )
        return false
      }
    }
  )

  document.addEventListener(
    'customize_control_sidebar',
    function(e) {
      if ( e.detail === 'open' ) {
        window.HFG.toggleMenuSidebar( true )
      }
      if ( e.detail === 'close' ) {
        window.HFG.toggleMenuSidebar( false )
      }
    }.bind( this )
  )

  document.addEventListener(
    'customize_section_opened',
    function(e) {
      if ( e.detail === 'header_sidebar' ) {
        window.HFG.toggleMenuSidebar( true )
      }
    }.bind( this )
  )
  let deviceMap = {
    'mobile': 'max-width: 576px',
    'tablet': 'min-width: 576px',
    'desktop': 'min-width: 961px'
  }

  _.each( neveCustomizePreview, function(settings, settingType) {
    _.each( settings, function(args, settingId) {
      wp.customize( settingId, function(setting) {
        setting.bind( function(newValue) {
          let style = ''
          switch (settingType) {
            case 'neve_color_control':
              _.each( args.additional, (i) => {
                newValue = newValue || i.fallback
                style += `body ${i.selector} {
                  ${i.prop}: ${newValue} !important;
                }`
              } )
              addCss( settingId, style )
              break
            case 'neve_background_control':
              if ( newValue.type === 'color' ) {
                style += 'body ' + args.selector + '{' +
                  'background-image: none !important;}'
                let color = newValue.colorValue !== 'undefined' ?
                  newValue.colorValue :
                  'inherit'
                style += 'body ' + args.selector + '{' +
                  'background-color: ' + color +
                  ' !important; }'
                style += args.selector + ':before{ content: none !important; }'
                addCss( settingId, style )
                return false
              }
              if ( newValue.useFeatured &&
                neveCustomizePreview.currentFeaturedImage ) {
                newValue.imageUrl = neveCustomizePreview.currentFeaturedImage
              }
              style += args.selector + '{'
              style += newValue.imageUrl ?
                'background-image: url("' + newValue.imageUrl +
                '") !important;' :
                'background-image: none !important;'
              style += newValue.fixed === true ?
                'background-attachment: fixed !important;' :
                'background-attachment: initial !important;'
              style += 'background-position:' +
                ( newValue.focusPoint.x * 100 ).toFixed( 2 ) + '% ' +
                ( newValue.focusPoint.y * 100 ).toFixed( 2 ) +
                '% !important;'
              style += 'background-size: cover !important;'
              if ( !document.querySelector( '.header-menu-sidebar' )
                .classList
                .contains( 'dropdown' ) ) {
                style += 'position: absolute;'
              }
              style += 'top: 0; bottom: 0; width: 100%; content:"";'
              style += '}'
              let color = newValue.overlayColorValue !== 'undefined' ?
                newValue.overlayColorValue :
                'inherit'
              style += args.selector + ':before { ' +
                'content: "";' +
                'position: absolute; top: 0; bottom: 0; width: 100%;' +
                'background-color: ' + color +
                ' !important;' +
                'opacity: ' + ( newValue.overlayOpacity / 100 ) +
                '!important;}'
              style += args.selector +
                '{ background-color: transparent !important; }'
              addCss( settingId, style )
              break
            case '\\Neve\\Customizer\\Controls\\React\\Radio_Buttons':
              if ( args.additional && args.additional.is_for ) {
                if ( args.additional.is_for === 'row_skin' ) {
                  let elements = document.querySelectorAll( args.selector )
                  removeClass( elements, 'dark-mode light-mode' )
                  addClass( elements, newValue )
                  break
                }
              }
              let itemInner = document.querySelectorAll( args.selector )
              _.each( itemInner, function(item) {
                removeClass( item.parentNode,
                  'hfg-item-center hfg-item-right hfg-item-left hfg-item-justify' )
                addClass( item.parentNode, 'hfg-item-' + newValue )
              } )
              break
            case '\\Neve\\Customizer\\Controls\\Radio_Image':
              break
            case '\\Neve\\Customizer\\Controls\\Range':
            case '\\Neve\\Customizer\\Controls\\React\\Responsive_Range':
              let value = JSON.parse( newValue )
              if ( value.mobile > 0 ) {
                style += '@media (max-width: 576px) { body ' + args.selector +
                  '{ ' + args.additional.prop + ':' +
                  value.mobile + args.additional.unit + ';}}'
              } else {
                style += '@media (max-width: 576px) { body ' + args.selector +
                  '{ ' + args.additional.prop + ':unset;}}'
              }
              if ( value.tablet > 0 ) {
                style += '@media (min-width: 576px) { body ' + args.selector +
                  '{ ' + args.additional.prop + ':' +
                  value.tablet + args.additional.unit + ';}}'
              } else {
                style += '@media (min-width: 576px) { body ' + args.selector +
                  '{ ' + args.additional.prop + ':unset;}}'
              }
              if ( value.desktop > 0 ) {
                style += '@media (min-width: 961px) { body ' + args.selector +
                  '{ ' + args.additional.prop + ':' +
                  value.desktop + args.additional.unit + ';}}'
              } else {
                style += '@media (min-width: 961px) { body ' + args.selector +
                  '{ ' + args.additional.prop + ':unset;}}'
              }
              addCss( settingId, style )
              break
            case '\\Neve\\Customizer\\Controls\\React\\Spacing':
              for ( let device in deviceMap ) {
                style += '@media (' + deviceMap[device] + ') { body ' +
                  args.selector + '{'
                for ( let optionType in newValue[device] ) {
                  if ( newValue[device][optionType] !== '' ) {
                    style += args.additional.prop + '-' + optionType + ':' +
                      newValue[device][optionType] +
                      newValue[device + '-unit'] + ';'
                  } else {
                    style += args.additional.prop + '-' + optionType +
                      ': unset;'
                  }
                }
                style += '}}'
              }
              addCss( settingId, style )
              break
            case '\\Neve\\Customizer\\Controls\\React\\Typography':
              style +=
                `html ${args.selector}{
										text-transform: ${newValue.textTransform};
										font-weight: ${newValue.fontWeight};
									}`
              for ( let device in deviceMap ) {
                style +=
                  `@media (${deviceMap[device]}) {
											html ${args.selector} {
												font-size:${newValue.fontSize[device]}${newValue.fontSize.suffix[device]};
												letter-spacing:${newValue.letterSpacing[device]}px;
												line-height:${newValue.lineHeight[device]};
											}
										}`
              }
              addCss( settingId, style )
              break
            case '\\Neve\\Customizer\\Controls\\React\\Button_Appearance':
              let bgColor = newValue.background || 'unset'
              let txtColor = newValue.text || 'currentColor'
              let borderColor = newValue.text || ''

              let mainSelector = `html ${args.selector}`,
                colorSelector = `html ${args.selector} .icon-bar`

              if ( args.additional && args.additional.additional_buttons ) {
                _.each( args.additional.additional_buttons, (button) => {
                  mainSelector += ',html ' + button.button
                  colorSelector += ',html ' + button.button + ' ' + button.text
                } )
              }
              style +=
                `${mainSelector} {
										background-color: ${bgColor};
										border-radius: ${newValue.borderRadius}px;
										color: ${txtColor};`
              if ( newValue.type === 'outline' ) {
                style += `border: ${newValue.borderWidth}px solid ${borderColor};`
              }
              if ( newValue.type === 'fill' ) {
                style += 'border: none;'
              }
              style += '}'
              style += `${colorSelector} {
										background-color: ${txtColor};
										color: ${txtColor};
									}`
              addCss( settingId, style )
              break
            case 'text':
              let textContainer = document.querySelector( args.selector )
              if ( newValue === '' ) {
                textContainer.parentNode.removeChild( textContainer )
                return false
              }
              if ( textContainer === null ) {
                let wrap = document.createElement( args.additional.html_tag )
                wrap.classList.add( args.additional.wrap_class )
                document.querySelector( args.additional.parent )
                  .prepend( wrap )
              }
              document.querySelector( args.selector ).innerHTML = newValue
              break
            case 'neve_range_control':
              if ( args.additional.type === 'svg-icon-size' ) {
                style +=
                  `html ${args.selector} {
											width: ${newValue}px;
											height: ${newValue}px;
										}`
                addCss( settingId, style )
                return false
              }

              style +=
                `html ${args.selector} {
											${args.additional.type}: ${newValue}px;
										}`
              addCss( settingId, style )

              break
            case '\\Neve\\Customizer\\Controls\\React\\Color':
            	console.log( newValue );
              let colorValue = newValue === '' ? 'unset' : newValue
              style +=
                `html ${args.selector} {
										${args.additional.prop}: ${colorValue};
									}`
              addCss( settingId, style )
              break
            case '\\Neve\\Customizer\\Controls\\React\\Font_Family':
              break
          }
        } )
      } )
    } )
  } )
  wp.customize.preview.bind( 'font-selection', function(data) {
    let selector = neveCustomizePreview[data.type][data.controlId].selector,
      source = data.source,
      id = data.controlId + '_font_family',
      defaultFontface = data.inherit ?
        'inherit' :
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'

    // Make selector more specific by adding `html` before.
    selector = selector.split( ',' )
    selector = selector.map( function(sel) {
      return 'html ' + sel
    } ).join( ',' )
    if ( data.value === false ) {
      addCss( data.controlId,
        selector + '{font-family: ' + defaultFontface + ';}' )
    } else {
      addCss( data.controlId,
        selector + '{font-family: ' + data.value + ' ;}' )
    }
    if ( source.toLowerCase() === 'google' ) {
      let linkNode = document.querySelector( '#' + id ),
        fontValue = data.value.replace( ' ', '+' ),
        url = '//fonts.googleapis.com/css?family=' + fontValue +
          '%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800'
      if ( linkNode !== null ) {
        linkNode.setAttribute( 'href', url )
        return false
      }
      let newNode = document.createElement( 'link' )
      newNode.setAttribute( 'rel', 'stylesheet' )
      newNode.setAttribute( 'id', id )
      newNode.setAttribute( 'href', url )
      newNode.setAttribute( 'type', 'text/css' )
      newNode.setAttribute( 'media', 'all' )
      document.querySelector( 'head' ).appendChild( newNode )
    }
  } )
} );

( function($) {
  $.neveCustomizeUtilities = {
    setLiveCss: function(settings, to) {
      'use strict'
      var result = ''
      var styleClass = $( '.' + settings.styleClass )
      if ( typeof to !== 'object' ) {
        $( settings.selectors )
          .css( settings.cssProperty, to.toString() + settings.propertyUnit )
        return false
      }
      $.each( to, function(key, value) {
        var style_to_add
        if ( key === 'suffix' ) {
          return true
        }
        var unit = settings.propertyUnit
        if ( typeof settings.propertyUnit === 'object' ) {
          unit = settings.propertyUnit[key]
        }
        style_to_add = settings.selectors + '{ ' + settings.cssProperty + ':' +
          value + unit + '}'
        switch (key) {
          default:
          case 'mobile':
            result += style_to_add
            break

          case 'desktop':
            result += '@media(min-width: 960px) {' + style_to_add + '}'
            break

          case 'tablet':
            result += '@media (min-width: 576px){' + style_to_add + '}'
            break
        }
      } )
      if ( styleClass.length > 0 ) {
        styleClass.text( result )
      } else {
        $( 'head' ).append(
          '<style type="text/css" class="' + settings.styleClass + '">' +
          result + '</style>' )
      }
    }
  }
} )( jQuery );

( function($) {
  $.neveRangesPreview = {
    init: function() {
      this.rangesPreview()
    },
    ranges: {
      neve_container_width: {
        selector: '.container',
        cssProp: 'max-width',
        unit: 'px',
        styleClass: 'container-width-css'
      }
    },
    rangesPreview: function() {
      'use strict'
      _.each( this.ranges, function(args, id) {
        wp.customize( id, function(value) {
          value.bind( function(newval) {
            var values = JSON.parse( newval )
            if ( !values ) {
              return true
            }
            if ( typeof values.suffix === 'object' ) {
              args.unit = values.suffix
            }
            var settings = {
              selectors: args.selector,
              cssProperty: args.cssProp,
              propertyUnit: args.unit ? args.unit : '',
              styleClass: args.styleClass
            }
            $.neveCustomizeUtilities.setLiveCss( settings, values )
          } )
        } )
      } )
    }
  }
} )( jQuery )
jQuery.neveRangesPreview.init();

( function($) {
  $.neveLayoutPreview = {
    init: function() {
      this.contentWidthsPreview()
      this.containersLivePreview()
    },
    contentWidths: {
      neve_sitewide_content_width: {
        content: '.neve-main > .container .col',
        sidebar: '.nv-sidebar-wrap'
      },
      neve_blog_archive_content_width: {
        content: '.archive-container .nv-index-posts',
        sidebar: '.archive-container .nv-sidebar-wrap'
      },
      neve_single_post_content_width: {
        content: '.single-post-container .nv-single-post-wrap',
        sidebar: '.single-post-container .nv-sidebar-wrap'
      },
      neve_shop_archive_content_width: {
        content: '.archive.woocommerce .shop-container .nv-shop.col',
        sidebar: '.archive.woocommerce .shop-container .nv-sidebar-wrap'
      },
      neve_single_product_content_width: {
        content: '.single-product .shop-container .nv-shop.col',
        sidebar: '.single-product .shop-container .nv-sidebar-wrap'
      },
      neve_other_pages_content_width: {
        content: 'body:not(.single):not(.archive):not(.blog):not(.search) .neve-main > .container .col',
        sidebar: 'body:not(.single):not(.archive):not(.blog):not(.search) .nv-sidebar-wrap'
      }
    },
    contentWidthsPreview: function() {
      $.each( this.contentWidths, function(id, args) {
        wp.customize( id, function(value) {
          value.bind( function(newval) {
            let style = ` @media (min-width: 961px) {
							${args.content} { max-width: ${newval}% !important; }
							${args.sidebar} { max-width: ${100 - newval}% !important; }
						}`
            addCss( id + '-css', style )
          } )
        } )
      } )
    },
    containersLayoutMap: {
      neve_default_container_style: '.page:not(.woocommerce) .single-page-container',
      neve_blog_archive_container_style: '.archive-container',
      neve_single_post_container_style: '.single-post-container',
      neve_shop_archive_container_style: '.woocommerce-page.post-type-archive .neve-main > div',
      neve_single_product_container_style: '.single-product .neve-main > div'
    },
    containersLivePreview: function() {
      'use strict'
      $.each( this.containersLayoutMap, function(controlId, cssSelector) {
        cssSelector += ':not(.set-in-metabox)'
        wp.customize( controlId, function(value) {
          value.bind( function(newval) {
            if ( newval === 'contained' ) {
              $( cssSelector )
                .removeClass( 'container-fluid' )
                .addClass( 'container' )
              return false
            }
            $( cssSelector )
              .removeClass( 'container' )
              .addClass( 'container-fluid' )
          } )
        } )
      } )
    }
  }
} )( jQuery )

jQuery.neveLayoutPreview.init()
//# sourceMappingURL=customizer-preview.js.map
