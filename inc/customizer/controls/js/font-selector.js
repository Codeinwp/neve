/**
 * Customizer font selector control.
 *
 * @package Neve\Customizer\Controlss
 */
(function ( $ ) {
	'use strict';
	wp.hestiaSelect = {
		init: function () {
			var self = this;

			$( '.hestia-fs-main-input, .hestia-fs-input-addon' ).on(
				'click', function ( e ) {
					$( this ).parent().toggleClass( 'active' );
					$( '.hestia-ss-wrap.active .hestia-fs-search input' ).focus();
					e.stopPropagation();
					return false;
				}
			);

			$( '.hestia-fs-option' ).on(
				'click', function () {
					var value = $( this ).data( 'option' );
					var source = $( this ).data( 'source' );
					var controlId = $( this ).data( 'control' );
					wp.customize.previewer.send( 'font-selection', { 'value': value, 'source': source, 'controlId' : controlId } );
					var mainInput = $( '.hestia-ss-wrap.active input.hestia-fs-main-input' );
					var collector = $( '.hestia-ss-wrap.active .hestia-ss-collector' );
					$( '.hestia-ss-wrap.active' ).removeClass( 'active' );
					mainInput.val( value );
					if ( value === 'Default' ) {
						value = '';
					}
					collector.val( value );
					collector.trigger( 'change' );
					return false;
				}
			);

			$( '.hestia-fs-search input' ).on(
				'keyup', function () {
					self.search( $( this ) );
					return false;
				}
			);

			$( document ).mouseup(
				function ( e ) {
					var container = $( '.hestia-ss-wrap.active .hestia-fs-dropdown' );
					if ( !container.is( e.target ) && container.has( e.target ).length === 0 ) {
						$( '.hestia-ss-wrap.active' ).removeClass( 'active' );
					}
				}
			);
		},

		search: function ( $searchInput ) {
			var itemsList = jQuery( '.hestia-ss-wrap.active .hestia-fs-options-wrapper' );
			var searchTerm = $searchInput.val().toLowerCase();
			if ( searchTerm.length > 0 ) {
				itemsList.children().children( '.hestia-fs-option' ).each(
					function () {
						if ( $( this ).filter( '[data-filter*='.concat( searchTerm ).concat( ']' ) ).length > 0 || searchTerm.length < 1 ) {
							$( this ).show();
						} else {
							$( this ).hide();
						}
					}
				);
			} else {
				itemsList.children().children().show();
			}
		}
	};

	$( document ).ready(
		function () {
			wp.hestiaSelect.init();
		}
	);
})( jQuery );
