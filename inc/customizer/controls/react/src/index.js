/* jshint esversion: 6 */
/* global wp */
import { ToggleControl } from './toggle/Control.js';
import { BackgroundControl } from './background/Control.js';
import { SpacingControl } from './spacing/Control.js';
import { TypefaceControl } from './typeface/Control.js';
import { StylePresetsControl } from './style-presets/Control.js';
import './style.scss';

wp.customize.controlConstructor.neve_toggle_control = ToggleControl;
wp.customize.controlConstructor.neve_background_control = BackgroundControl;
wp.customize.controlConstructor.neve_spacing = SpacingControl;
wp.customize.controlConstructor.neve_typeface_control = TypefaceControl;
wp.customize.controlConstructor.neve_style_presets_control = StylePresetsControl;

window.addEventListener( 'load', () => {
	let deviceButtons = document.querySelector(
			'#customize-footer-actions .devices, .hfg--cb-devices-switcher a.switch-to' );
	deviceButtons.addEventListener( 'click', function(e) {
		let event = new CustomEvent( 'neveChangedRepsonsivePreview', {
			'detail': e.target.dataset.device
		} );
		document.dispatchEvent( event );
	} );
} );
