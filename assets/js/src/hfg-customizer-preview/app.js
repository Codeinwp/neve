/* global neveHFGPreview */
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

								style += 'body ' + args.selector + '{' +
										'background-color: ' + newValue.colorValue +
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
							style += 'position: absolute; top: 0; bottom: 0; width: 100%; content:"";';
							style += '}';
							style += args.selector + ':before { ' +
									'content: "";' +
									'position: absolute; top: 0; bottom: 0; width: 100%;' +
									'background-color: ' + newValue.overlayColorValue +
									' !important;' +
									'opacity: ' + ( newValue.overlayOpacity / 100 ) +
									'!important;}';
							style += args.selector +
									'{ background-color: transparent !important; }';
							addCss( settingId, style );
							break;
					}
				} );
			} );
		} );
	} );
} );


