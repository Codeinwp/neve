/* global CustomEvent, NeveReactCustomize, MutationObserver */
import './public-path.js';
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
import { FormTokenFieldControl } from './form-token-field/Control';
import { ResponsiveRadioButtonsControl } from './responsive-radio-buttons/Control';
import { RadioImageControl } from './radio-image/Control';
import { OrderingControl } from './ordering/Control';
import { GlobalColorsControl } from './global-colors/Control';
import { NRSpacingControl } from './non-responsive-spacing/Control';
import { InlineSelectControl } from './inline-select/Control';
import { BuilderControl } from './builder/Control';
import { BuilderColumns } from './builder-columns/Control';
import { InstructionsControl } from './builder-instructions/Control';
import { HeadingControl } from './heading/Control';
import { SkinSwitcherControl } from './skin-switcher/Control';
import { LogoPaletteControl } from './logo-palette/Control';
import { RepeaterControl } from './repeater/Control';
import { RichTextControl } from './rich-text/Control';
import { LinkControl } from './link/Control';
import { GroupSelectControl } from './group-select/Control';

import './style.scss';
import Documentation from './documentation-section/Documentation.tsx';
import Instructions from './builder-instructions/Instructions.tsx';
import Upsells from './builder-upsell/Upsells.tsx';
import { initLocalGoogleFonts } from './typography-extra/LocalGoogleFonts';

import MainSearch from './customizer-search/MainSearch.tsx';

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
controlConstructor.neve_form_token_field = FormTokenFieldControl;
controlConstructor.neve_group_select = GroupSelectControl;
controlConstructor.neve_responsive_radio_buttons_control =
	ResponsiveRadioButtonsControl;
controlConstructor.neve_radio_image_control = RadioImageControl;
controlConstructor.neve_ordering_control = OrderingControl;
controlConstructor.neve_global_colors = GlobalColorsControl;
controlConstructor.neve_non_responsive_spacing = NRSpacingControl;
controlConstructor.neve_inline_select = InlineSelectControl;
controlConstructor.neve_builder_control = BuilderControl;
controlConstructor.neve_builder_columns = BuilderColumns;
controlConstructor.hfg_instructions = InstructionsControl;
controlConstructor.neve_customizer_heading = HeadingControl;
controlConstructor.neve_skin_switcher = SkinSwitcherControl;
controlConstructor.neve_logo_palette_control = LogoPaletteControl;
controlConstructor.neve_repeater_control = RepeaterControl;
controlConstructor.neve_rich_text = RichTextControl;
controlConstructor.neve_link = LinkControl;

const initDeviceSwitchers = () => {
	const deviceButtons = document.querySelector(
		'#customize-footer-actions .devices, .hfg--cb-devices-switcher a.switch-to'
	);
	deviceButtons.addEventListener('click', function (e) {
		const event = new CustomEvent('neveChangedRepsonsivePreview', {
			detail: e.target.dataset.device,
		});
		document.dispatchEvent(event);
	});
};

const initDocSection = () => {
	const docs = document.querySelectorAll(
		'.control-section.neve-documentation'
	);

	docs.forEach((node) => {
		const slug = node.getAttribute('data-slug');
		const section = wp.customize.section(slug);

		if (!section) {
			return;
		}

		render(<Documentation control={section} />, section.container[0]);
	});
};

const initSearchCustomizer = () => {
	// will remove the search icon if another plugin or WordPress add this feature
	const callback = (mutationList, observer) => {
		for (const mutation of mutationList) {
			if (mutation.type === 'childList') {
				const searchCount = document.querySelectorAll(
					'#customize-info .accordion-section-title .dashicons-search'
				).length;
				if (searchCount > 1) {
					observer.disconnect();
					document.getElementById('neve-customize-search')?.remove();
				}
			}
		}
	};

	const targetNodeMutation = document.querySelector(
		'#customize-info .accordion-section-title'
	);
	const observer = new MutationObserver(callback);
	const config = { attributes: false, childList: true, subtree: false };
	observer.observe(targetNodeMutation, config);

	const customizePreview = document.getElementById('customize-controls');
	const mount = document.createElement('div');
	customizePreview.appendChild(mount);

	const title = document.querySelector(
		'#customize-info .accordion-section-title'
	);
	const customizerPanels = document.getElementById(
		'customize-theme-controls'
	);
	const titleSection = document.getElementById('customize-info');

	const targetNode = document.createElement('div');
	const targetFieldNode = document.createElement('div');
	const targetSearchResultsNode = document.createElement('div');

	targetNode.setAttribute('id', 'neve-customize-search');
	targetFieldNode.setAttribute('id', 'neve-customize-search-field');
	targetSearchResultsNode.setAttribute('id', 'neve-customize-search-results');

	title.append(targetNode);
	titleSection.append(targetFieldNode);
	customizerPanels.after(targetSearchResultsNode);

	render(
		<MainSearch
			search={targetFieldNode}
			button={targetNode}
			results={targetSearchResultsNode}
		/>,
		mount
	);
};

const initCustomPagesFocus = () => {
	const { sectionsFocus } = window.NeveReactCustomize;
	if (sectionsFocus !== undefined) {
		Object.keys(sectionsFocus).forEach((sectionKey) => {
			wp.customize.section(sectionKey, (section) => {
				section.expanded.bind((isExpanded) => {
					if (isExpanded) {
						wp.customize.previewer.previewUrl.set(
							sectionsFocus[sectionKey]
						);
					}
				});
			});
		});
	}
};

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

const initUpsellSection = () => {
	const upsell = document.querySelectorAll('.control-section.neve-upsell');

	upsell.forEach((node) => {
		const slug = node.getAttribute('data-slug');
		const section = wp.customize.section(slug);

		if (!section) {
			return;
		}

		render(<Upsells control={section} />, section.container[0]);
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
const bindDataAttrQuickLinks = () => {
	const dataControlFocusElements = document.querySelectorAll(
		'[data-control-focus]'
	);

	if (!dataControlFocusElements) {
		return;
	}

	dataControlFocusElements.forEach((el) => {
		el.addEventListener('click', () => {
			const attribute = el.getAttribute('data-control-focus');

			if (!attribute) {
				return;
			}

			const control = window.wp.customize.control(attribute);

			if (!control) {
				return;
			}

			control.focus();
		});
	});
};
const checkHasElementorTemplates = () => {
	if (NeveReactCustomize.elementor.hasElementorShopTemplate) {
		window.wp.customize
			.section('woocommerce_product_catalog')
			.notifications.add(
				new window.wp.customize.Notification(
					'neve-custom-elementor-shop-template',
					{
						type: 'warning',
						message:
							'Some of the settings might not work as expected because you are using a custom shop template made in Elementor.',
					}
				)
			);
	}

	if (NeveReactCustomize.elementor.hasElementorProductTemplate) {
		window.wp.customize
			.section('neve_single_product_layout')
			.notifications.add(
				new window.wp.customize.Notification(
					'neve-custom-elementor-product-template',
					{
						type: 'warning',
						message:
							'Some of the settings might not work as expected because you are using a custom product template made in Elementor.',
					}
				)
			);
	}
};

window.wp.customize.bind('ready', () => {
	initDocSection();
	initDynamicFields();
	initUpsellSection();
	initQuickLinksSections();
	bindDataAttrQuickLinks();
	initBlogPageFocus();
	initCustomPagesFocus();
	checkHasElementorTemplates();
	initDeviceSwitchers();
	initBlogPageFocus();
	initSearchCustomizer();
	initLocalGoogleFonts();
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
