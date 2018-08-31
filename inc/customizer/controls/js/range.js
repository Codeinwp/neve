/**
 * Range control in customizer
 */

/* global wp */
/* global jQuery */
wp.customize.controlConstructor['range-value'] = wp.customize.Control.extend(
	{

		ready: function(){
			'use strict';

			jQuery.fn.exists = function(){return this.length > 0;};
			var control        = this,
				changeAction;
			var theme_controls = jQuery( '#customize-theme-controls' );

			function syncRangeText( slider, input, from ){
				switch (from) {
					case 'slider':
						var value = slider.val();
						var type  = jQuery( input ).attr( 'type' );
						if (type === 'text') { // inputBox
							if (value >= 0) {
								value = '+' + value;
							}
						}
						input.val( value );
						break;
					case 'input':
						slider.val( input.val() );
						break;
				}
			}

			function updateValues( control ){
				var collector    = control.find( '.range-collector' );
				var values       = getSliderValues( control );
				var have_queries = Object.keys( values ).length > 1;
				if ( have_queries ) {
					collector.val( JSON.stringify( values ) );
				} else {
					collector.val( values.desktop );
				}
				collector.trigger( 'change' );
			}

			function getSliderValues( control ) {
				var values          = {};
				var desktopSelector = control.find( '.range-slider__range[data-query="desktop"]' ),
					tabletSelector      = control.find( '.range-slider__range[data-query="tablet"]' ) ,
					mobileSelector      = control.find( '.range-slider__range[data-query="mobile"]' ),
					desktopValue, tabletValue, mobileValue;

				if ( desktopSelector.exists() ) {
					desktopValue = desktopSelector.val();
					if ( desktopValue !== 'undefined' && desktopValue !== '' ) {
						values.desktop = desktopValue;
					}
				}

				if ( tabletSelector.exists() ) {
					tabletValue = tabletSelector.val();
					if ( tabletValue !== 'undefined' && tabletValue !== '' ) {
						values.tablet = tabletValue;
					}
				}

				if ( mobileSelector.exists() ) {
					mobileValue = mobileSelector.val();
					if ( mobileValue !== 'undefined' && mobileValue !== '' ) {
						values.mobile = mobileValue;
					}
				}

				return values;
			}

			theme_controls.unbind().on(
				'click', '.preview-desktop.active', function () {
					jQuery( '.responsive-switchers' ).toggleClass( 'responsive-switchers-open' );
				}
			);

			theme_controls.on(
				'input', '.range-slider__range', function () {
					var slider  = jQuery( this );
					var input   = jQuery( this ).next();
					var control = jQuery( this ).parent().parent();
					syncRangeText( slider, input, 'slider' );
					updateValues( control );
				}
			);

			theme_controls.on(
				'keyup', '.range-slider-value', function(){
					var control = jQuery( this ).parent().parent();
					updateValues( control );
				}
			);
			theme_controls.on(
				'keydown', '.range-slider-value', function(){
					var slider = jQuery( this ).prev();
					var input  = jQuery( this );
					syncRangeText( slider, input, 'input' );
				}
			);

			theme_controls.on(
				'click', '.range-reset-slider', function (event) {
					event.preventDefault();
					var input        = jQuery( this ).prev();
					var slider       = input.prev();
					var control      = jQuery( this ).parent().parent();
					var defaultValue = slider.data( 'default' );
					var type  = jQuery( input ).attr( 'type' );
					if (type === 'text') { // inputBox
						defaultValue = '+0';
					}
					input.val( defaultValue );
					slider.val( defaultValue );
					updateValues( control );
				}
			);

			if ( 'postMessage' === control.setting.transport ) {
				changeAction = 'mousemove change';
			} else {
				changeAction = 'change';
			}

			// Change the value
			this.container.on(
				changeAction, '.range-collector', function() {
					control.setting.set( jQuery( this ).val() );
				}
			);
		}
	}
);
