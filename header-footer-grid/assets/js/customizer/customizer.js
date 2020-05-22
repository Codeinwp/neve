/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function($, api) {
	var $document = $( document );

	/**
	 * Dispatch Event
	 *
	 *
	 * @param eventName
	 * @param options
	 */
	var dispatchEvent = function(element, eventName, options) {
		var event;

		/**
		 * https://stackoverflow.com/questions/2490825/how-to-trigger-event-in-javascript
		 */
		if ( window.CustomEvent ) {
			event = new CustomEvent( eventName, options );
		} else {
			event = document.createEvent( 'CustomEvent' );
			event.initCustomEvent( eventName, true, true, options );
		}

		element.dispatchEvent( event );
	};

	var header_changed = function(partial_id, remove_items) {
		if ( _.isUndefined( remove_items ) ) {
			remove_items = false;
		}
		if (
				partial_id === 'header_builder_panel' ||
				partial_id === 'hfg_customize_render_header'
		) {
			var is_drop_down = $( 'body' ).hasClass( 'menu_sidebar_dropdown' );

			$( '.close-sidebar-panel' ).not( ':last' ).remove();
			if ( !is_drop_down ) {
				$( '.header-menu-sidebar' ).not( ':last' ).remove();
			}

			if ( remove_items ) {
				$(
						'body > .header-menu-sidebar, #page > .header-menu-sidebar'
				).remove();
			}

			if ( is_drop_down ) {
				$( '#masthead' ).append( $( '#header-menu-sidebar' ) );
				if ( $( 'body' ).hasClass( 'is-menu-sidebar' ) ) {
					$( '#header-menu-sidebar' ).css( {
						display: 'block',
						height: 'auto'
					} );
				}
			} else {
				$( 'body' ).prepend( $( '#header-menu-sidebar' ) );
			}
		}

		var header = $( '#masthead' );
		if ( $( '.search-form--mobile', header ).length ) {
			if ( remove_items ) {
				$( '.mobile-search-form-sidebar' ).remove();
			}
			var search_form = $( '.search-form--mobile' ).eq( 0 );
			search_form.addClass( 'mobile-search-form-sidebar' ).
					removeClass( 'hide-on-mobile hide-on-tablet' );
			$( 'body' ).prepend( search_form );
		}
		dispatchEvent( document, 'header_builder_panel_changed', {
			bubbles: true,
			detail: { partial_id: partial_id }
		} );
	};

	// Header text color.
	wp.customize( 'header_textcolor', function(settings) {
		settings.bind( function(to) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					clip: 'rect(1px, 1px, 1px, 1px)',
					position: 'absolute'
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					clip: 'auto',
					position: 'relative'
				} );
				$( '.site-title a, .site-description' ).css( {
					color: to
				} );
			}
		} );
	} );

	api.bind( 'preview-ready', function() {
		api.preview.bind( 'header_builder_panel_changed', function() {
			dispatchEvent( document, 'header_builder_panel_changed', {
				bubbles: true,
				detail: 'open'
			} );
		} );

		api.preview.bind( 'header_sidebar_open', function() {
			dispatchEvent( document, 'customize_control_sidebar', {
				bubbles: true,
				detail: 'open'
			} );
		} );
		api.preview.bind( 'header_sidebar_close', function() {
			dispatchEvent( document, 'customize_control_sidebar', {
				bubbles: true,
				detail: 'close'
			} );
		} );
	} );

	wp.customize( 'header_sidebar_animate', function(settings) {
		console.log( 'header_sidebar_animate -- triggered' );
		settings.bind( function(to) {
			header_changed( 'header_builder_panel', false );
			dispatchEvent( document, 'customize_section_opened', {
				bubbles: true,
				detail: 'header_sidebar'
			} );

			if ( to.indexOf( 'menu_sidebar_dropdown' ) > 1 ) {
				$(
						'.menu-mobile-toggle, .menu-mobile-toggle .hamburger'
				).addClass( 'is-active' );
			} else {
				$(
						'.menu-mobile-toggle, .menu-mobile-toggle .hamburger'
				).removeClass( 'is-active' );
			}
		} );
	} );

	api.bind( 'preview-ready', function() {
		var defaultTarget = window.parent === window ? null : window.parent;

		// When focus section
		defaultTarget.wp.customize.state( 'expandedSection' ).
				bind( function(section) {
					if ( section && !_.isUndefined( section.id ) ) {
						dispatchEvent( document, 'customize_section_opened', {
							bubbles: true,
							detail: section.id
						} );
					} else {
						dispatchEvent( document, 'customize_section_opened', {
							bubbles: true,
							detail: '__no_section_selected'
						} );
					}
				} );

		$document.on(
				'click',
				'#masthead .customize-partial-edit-shortcut-header_panel',
				function(e) {
					e.preventDefault();
					defaultTarget.wp.customize.panel( 'header_settings' ).focus();
				}
		);

		// for custom when click on preview
		$document.on(
				'click',
				'.builder-item-focus .item--preview-name, .builder-item-focus .edit-row-action',
				function(e) {
					e.preventDefault();
					e.stopPropagation();
					var p = $( this ).closest( '.builder-item-focus' );
					var section_id = p.attr( 'data-section' ) || '';
					if ( section_id ) {
						if ( defaultTarget.wp.customize.section( section_id ) ) {
							defaultTarget.wp.customize.section( section_id ).focus();
						}
					}
				}
		);

		$document.on( 'click', '.navbar-toggle', function( e ) {
			wp.customize.preview.send( 'neve-toggle-navbar', {} );
		} );

		$document.on( 'click', '.builder-item-focus', function(e) {
			if ( !e.shiftKey ) return false;

			e.preventDefault();
			e.stopPropagation();
			var p = $( this ).closest( '.builder-item-focus' );
			var section_id = p.attr( 'data-section' ) || '';

			if ( !section_id ) return false;

			defaultTarget.wp.customize.section( section_id ).focus();
		} );

		// When selective refresh re-rendered content
		wp.customize.selectiveRefresh.bind( 'partial-content-rendered', function(
				settings
		)  {
			console.log( 'settings.partial.id', settings.partial.id );
			dispatchEvent( document, 'selective-refresh-content-rendered', {
				bubbles: true,
				detail: settings.partial.id
			} );
			header_changed( settings.partial.id );
		});

		function setupPreviewNamePosition() {
			$( '.hfg-grid .has_menu.builder-item-focus' ).each( function() {
				var parentPos = $( this ).closest( '.hfg-grid' ).offset();
				var childPos = $( this ).offset();
				var h = $( this ).innerHeight();
				var top = childPos.top - parentPos.top;
				$( this ).find( '.item--preview-name' ).css( { top: top + h } );
			} );
		}

		setupPreviewNamePosition();

		$document.on(
				'selective-refresh-content-rendered  after_auto_render_css',
				function(event, id, field_name) {
					setupPreviewNamePosition();
				}
		);
	} );

	var skips_to_add_shortcut = {
		hfg_customize_render_header: 1,
		hfg_customize_render_footer: 1
	};

	/**
	 * Do not focus to header, footer customize control
	 * @see /wp-includes/js/customize-selective-refresh.js
	 */
	wp.customize.selectiveRefresh.Partial.prototype.ready = function() {
		var partial = this;

		if ( _.isUndefined( skips_to_add_shortcut[partial.id] ) ) {
			_.each( partial.placements(), function(placement) {
				$( placement.container ).attr(
						'title',
						wp.customize.selectiveRefresh.data.l10n.shiftClickToEdit
				);
				partial.createEditShortcutForPlacement( placement );
			} );
			$( document ).on( 'click', partial.params.selector, function(e) {
				if ( !e.shiftKey ) {
					return;
				}
				e.preventDefault();
				_.each( partial.placements(), function(placement) {
					if ( $( placement.container ).is( e.currentTarget ) ) {
						partial.showControl();
					}
				} );
			} );
		}
	};
} )( jQuery, wp.customize );
