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
} );

