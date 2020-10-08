/* jshint esversion: 6 */
import domReady from '@wordpress/dom-ready';

import { init as initDynamicFields } from './dynamic-fields/index';
import { ToggleControl } from './toggle/Control';
import { ResponsiveToggleControl } from './responsive-toggle/Control';
import { BackgroundControl } from './background/Control';
import { SpacingControl } from './spacing/Control';
import { TypefaceControl } from './typeface/Control';
import { FontFamilyControl } from './font-family/Control';
import { RadioButtonsControl } from './radio-buttons/Control';
import { ButtonAppearanceControl } from './button-appearance/Control';
import { RangeControl } from './range/Control';
import { ResponsiveRangeControl } from './responsive-range/Control';
import { ColorControl } from './color/Control';
import { PresetsSelectorControl } from './presets-selector/Control';
import { MultiSelectControl } from './multiselect/Control';
import { ResponsiveRadioButtonsControl } from './responsive-radio-buttons/Control';
import { RadioImageControl } from './radio-image/Control';
import { OrderingControl } from './ordering/Control';
import { UiControl } from './ui/Control';

import './style.scss';

const { controlConstructor } = wp.customize;

controlConstructor.neve_toggle_control = ToggleControl;
controlConstructor.neve_responsive_toggle_control = ResponsiveToggleControl;
controlConstructor.neve_background_control = BackgroundControl;
controlConstructor.neve_spacing = SpacingControl;
controlConstructor.neve_typeface_control = TypefaceControl;
controlConstructor.neve_font_family_control = FontFamilyControl;
controlConstructor.neve_radio_buttons_control = RadioButtonsControl;
controlConstructor.neve_button_appearance = ButtonAppearanceControl;
controlConstructor.neve_range_control = RangeControl;
controlConstructor.neve_responsive_range_control = ResponsiveRangeControl;
controlConstructor.neve_color_control = ColorControl;
controlConstructor.neve_presets_selector = PresetsSelectorControl;
controlConstructor.neve_multiselect = MultiSelectControl;
controlConstructor.neve_responsive_radio_buttons_control = ResponsiveRadioButtonsControl;
controlConstructor.neve_radio_image_control = RadioImageControl;
controlConstructor.neve_ordering_control = OrderingControl;
controlConstructor.neve_ui_control = UiControl;

const initDeviceSwitchers = () => {
	const deviceButtons = document.querySelector(
		'#customize-footer-actions .devices, .hfg--cb-devices-switcher a.switch-to'
	);
	deviceButtons.addEventListener( 'click', function ( e ) {
		const event = new CustomEvent( 'neveChangedRepsonsivePreview', {
			detail: e.target.dataset.device,
		} );
		document.dispatchEvent( event );
	} );
};

const initBlogPageFocus = () => {
	wp.customize.section( 'neve_blog_archive_layout', ( section ) => {
		section.expanded.bind( ( isExpanded ) => {
			const front = wp.customize.control( 'show_on_front' ).setting();
			let pageId = '';
			if ( front === 'page' ) {
				pageId = wp.customize.control( 'page_for_posts' ).setting();
			}

			if ( isExpanded ) {
				wp.customize.previewer.previewUrl.set(
					pageId ? `/?page_id=${ pageId }` : '/'
				);
			}
		} );
	} );
};

domReady( () => {
	initDeviceSwitchers();
	initDynamicFields();
	initBlogPageFocus();
} );

window.HFG = {
	getSettings: () => {
		const usedSettings = {};
		NeveReactCustomize.headerControls.map( ( item ) => {
			if ( ! wp.customize.control( item ) ) return false;
			usedSettings[ item ] = wp.customize.control( item ).setting.get();
		} );
		return JSON.stringify( usedSettings );
	},
};
