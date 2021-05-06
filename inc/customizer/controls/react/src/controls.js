import { render } from '@wordpress/element';

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
import { GlobalColorsControl } from './global-colors/Control';
import { NRSpacingControl } from './non-responsive-spacing/Control';
import { InlineSelectControl } from './inline-select/Control';
import { BuilderControl } from './builder/Control';
import { BuilderColumns } from './builder-columns/Control';
import { InstructionsControl } from './builder-instructions/Control';

import './style.scss';
import Instructions from './builder-instructions/Instructions.tsx';

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
controlConstructor.neve_global_colors = GlobalColorsControl;
controlConstructor.neve_non_responsive_spacing = NRSpacingControl;
controlConstructor.neve_inline_select = InlineSelectControl;
controlConstructor.neve_builder_control = BuilderControl;
controlConstructor.neve_builder_columns = BuilderColumns;
controlConstructor.hfg_instructions = InstructionsControl;

const initBlogPageFocus = () => {
	wp.customize.section('neve_blog_archive_layout', (section) => {
		section.expanded.bind((isExpanded) => {
			const front = wp.customize.control('show_on_front').setting();
			let pageId = '';
			if (front === 'page') {
				pageId = wp.customize.control('page_for_posts').setting();
			}

			if (isExpanded) {
				wp.customize.previewer.previewUrl.set(
					pageId ? `/?page_id=${pageId}` : '/'
				);
			}
		});
	});
};

const initQuickLinksSections = () => {
	const quickLinks = document.querySelectorAll(
		'.control-section.neve-quick-links'
	);

	quickLinks.forEach((node) => {
		const slug = node.getAttribute('data-slug');
		const section = wp.customize.section(slug);

		if (!section) {
			return;
		}

		render(<Instructions control={section} />, section.container[0]);
	});
};

window.wp.customize.bind('ready', () => {
	initDynamicFields();
	initQuickLinksSections();
	initBlogPageFocus();
});

window.HFG = {
	getSettings: () => {
		const usedSettings = {};
		const { headerControls } = window.NeveReactCustomize;
		Object.keys(headerControls).forEach((modKey) => {
			const control = window.wp.customize.control(modKey);
			// If the control isn't there don't do anything.
			if (!control) {
				return;
			}

			// If the value is default don't do anything.
			const value = control.setting();

			// Compare stringified versions as this can contain arrays and objects.
			if (
				JSON.stringify(value) === JSON.stringify(headerControls[modKey])
			) {
				return;
			}

			// Save key/value pair.
			usedSettings[modKey] = value;
		});
		return JSON.stringify(usedSettings);
	},
};
