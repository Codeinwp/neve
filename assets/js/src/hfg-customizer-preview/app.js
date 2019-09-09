/* global neveHFGPreview */
/* jshint esversion: 6 */
import { removeClass, addClass } from '../utils.js';

function addCss(id, content = '') {
	let style = document.querySelector( '#' + id + '-css-style' );
	if ( !style ) {
		style = document.createElement( 'style' );
		style.setAttribute( 'id', id + '-css-style' );
		style.setAttribute( 'type', 'text/css' );
		document.querySelector( 'head' ).appendChild( style );
	}
	style.innerHTML = content;
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
					window.HFG.init();
					console.log( 'Reinitialize HFG with sidebar.' );
					return false;
				}
				if ( e.detail.partial_id === 'nav-icon_partial' ) {
					window.HFG.init( true );
					console.log( 'Reinitialize HFG with skip.' );
					return false;
				}
			}
	);

	document.addEventListener(
			'customize_control_sidebar',
			function(e) {
				if ( e.detail === 'open' ) {
					window.HFG.toggleMenuSidebar( true );
				}
				if ( e.detail === 'close' ) {
					window.HFG.toggleMenuSidebar( false );
				}
			}.bind( this )
	);

	document.addEventListener(
			'customize_section_opened',
			function(e) {
				if ( e.detail === 'header_sidebar' ) {
					window.HFG.toggleMenuSidebar( true );
				}
			}.bind( this )
	);
	let deviceMap = {
		'mobile': 'max-width: 576px',
		'tablet': 'min-width: 576px',
		'desktop': 'min-width: 961px'
	};

	_.each( neveHFGPreview, function(settings, settingType) {
		_.each( settings, function(args, settingId) {
			wp.customize( settingId, function(setting) {
				setting.bind( function(newValue) {
					let style = '';
					switch (settingType) {
						case 'neve_background_control':
							if ( newValue.type === 'color' ) {
								style += 'body ' + args.selector + '{' +
										'background-image: none !important;}';
								let color = newValue.colorValue !== 'undefined' ?
										newValue.colorValue :
										'inherit';
								style += 'body ' + args.selector + '{' +
										'background-color: ' + color +
										' !important; }';
								style += args.selector + ':before{ content: none !important; }';
								addCss( settingId, style );
								return false;
							}

							style += args.selector + '{';
							style += newValue.imageUrl ?
									'background-image: url("' + newValue.imageUrl +
									'") !important;' :
									'background-image: none !important;';
							style += newValue.fixed === true ?
									'background-attachment: fixed !important;' :
									'background-attachment: initial !important;';
							style += 'background-position:' +
									( newValue.focusPoint.x * 100 ).toFixed( 2 ) + '% ' +
									( newValue.focusPoint.y * 100 ).toFixed( 2 ) +
									'% !important;';
							style += 'background-size: cover !important;';
							if( ! document.querySelector('.header-menu-sidebar').classList.contains('dropdown') ) {
								style += 'position: absolute;';
							}
							style += 'top: 0; bottom: 0; width: 100%; content:"";';
							style += '}';
							let color = newValue.overlayColorValue !== 'undefined' ?
									newValue.overlayColorValue :
									'inherit';
							style += args.selector + ':before { ' +
									'content: "";' +
									'position: absolute; top: 0; bottom: 0; width: 100%;' +
									'background-color: ' + color +
									' !important;' +
									'opacity: ' + ( newValue.overlayOpacity / 100 ) +
									'!important;}';
							style += args.selector +
									'{ background-color: transparent !important; }';
							addCss( settingId, style );
							break;
						case '\\Neve\\Customizer\\Controls\\Button_Group':
							let itemInner = document.querySelectorAll( args.selector );
							_.each( itemInner, function(item) {
								removeClass( item.parentNode,
										'hfg-item-center hfg-item-right hfg-item-left' );
								addClass( item.parentNode, 'hfg-item-' + newValue );
							} );
							break;
						case '\\Neve\\Customizer\\Controls\\Radio_Image':
							let elements = document.querySelectorAll( args.selector );
							removeClass( elements, 'dark-mode light-mode' );
							addClass( elements, newValue );
							break;
						case '\\Neve\\Customizer\\Controls\\Range':
							let value = JSON.parse( newValue );
							if ( value.mobile > 0 ) {
								style += '@media (max-width: 576px) { body ' + args.selector +
										'{ ' + args.additional.prop + ':' +
										value.mobile + args.additional.unit + ';}}';
							} else {
								style += '@media (max-width: 576px) { body ' + args.selector +
										'{ ' + args.additional.prop + ':unset;}}';
							}
							if ( value.tablet > 0 ) {
								style += '@media (min-width: 576px) { body ' + args.selector +
										'{ ' + args.additional.prop + ':' +
										value.tablet + args.additional.unit + ';}}';
							} else {
								style += '@media (min-width: 576px) { body ' + args.selector +
										'{ ' + args.additional.prop + ':unset;}}';
							}
							if ( value.desktop > 0 ) {
								style += '@media (min-width: 961px) { body ' + args.selector +
										'{ ' + args.additional.prop + ':' +
										value.desktop + args.additional.unit + ';}}';
							} else {
								style += '@media (min-width: 961px) { body ' + args.selector +
										'{ ' + args.additional.prop + ':unset;}}';
							}
							addCss( settingId, style );
							break;
						case '\\Neve\\Customizer\\Controls\\React\\Spacing':
							for ( let device in deviceMap ) {
								style += '@media (' + deviceMap[device] + ') { body ' +
										args.selector + '{';
								for ( let optionType in newValue[device] ) {
									if ( newValue[device][optionType] !== '' ) {
										style += args.additional.prop + '-' + optionType + ':' +
												newValue[device][optionType] +
												newValue[device + '-unit'] + ';';
									} else {
										style += args.additional.prop + '-' + optionType +
												': unset;';
									}
								}
								style += '}}';
							}
							addCss( settingId, style );
							break;
					}
				} );
			} );
		} );
	} );
} );


