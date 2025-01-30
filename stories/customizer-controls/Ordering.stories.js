import Ordering from '../../assets/apps/customizer-controls/src/ordering/Ordering';
import {
	WhiteBackgroundDecorator,
	CustomizerDecorator,
} from '../components/decorators';
import {
	ORDERING_COMPONENTS,
	ORDERING_DEFAULT,
	ORDERING_NO_TOGGLES,
} from '../utils/values';
import { useState } from '@wordpress/element';
import { maybeParseJson } from '@neve-wp/components';

export default {
	title: 'Customizer/Controls/Ordering',
	component: Ordering,
	args: {
		label: 'Ordering Control',
		customizeValue: ORDERING_DEFAULT,
		components: ORDERING_COMPONENTS,
		allowsToggle: true,
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const normalizeValue = (val) => {
		const normalizedValue = val.map((element) => {
			return { id: element, visible: true };
		});

		const enabledItems = normalizedValue.map((element) => {
			element.visible = true;
			return element;
		});

		const disabledItems = Object.keys(args.components)
			.filter((element) => {
				return (
					enabledItems.filter((el) => {
						return element === el.id;
					}).length === 0
				);
			})
			.map((element) => {
				return { id: element, visible: false };
			});

		return [...enabledItems, ...disabledItems];
	};

	const [value, setValue] = useState(
		normalizeValue(maybeParseJson(args.customizeValue))
	);

	const displayValue = value
		.filter((item) => item.visible)
		.map((item) => item.id);

	return (
		<>
			<Ordering {...args} value={value} onUpdate={setValue} />
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{JSON.stringify(displayValue, null, ' ')}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});
export const NoToggles = Template.bind({});
export const WithSubcontrols = Template.bind({});
NoToggles.args = {
	customizeValue: ORDERING_NO_TOGGLES,
	allowsToggle: false,
};

WithSubcontrols.args = {
	customizeValue: ORDERING_NO_TOGGLES,
	allowsToggle: true,
	components: {
		'title-meta': {
			label: 'Title & Meta',
			controls: {
				neve_post_cover_container: {
					type: 'select',
					choices: {
						contained: 'Contained',
						'full-width': 'Full width',
					},
				},
				neve_post_cover_meta_before_title: {
					type: 'toggle',
				},
				neve_single_post_metadata_separator: {
					label: 'Post meta separator',
					type: 'text',
				},
			},
		},
		thumbnail: {
			label: 'Thumbnail',
			controls: {
				neve_post_cover_hide_thumbnail: {
					label: 'Hide featured image',
					type: 'toggle',
				},
				neve_post_cover_blend_mode: {
					label: 'Blend mode',
					type: 'select',
					choices: {
						normal: 'Normal',
						multiply: 'Multiply',
						screen: 'Screen',
						overlay: 'Overlay',
						darken: 'Darken',
						lighten: 'Lighten',
						'color-dodge': 'Color Dodge',
						saturation: 'Saturation',
						color: 'Color',
						difference: 'Difference',
						exclusion: 'Exclusion',
						hue: 'Hue',
						luminosity: 'Luminosity',
					},
				},
				neve_post_cover_overlay_opacity: {
					label: 'Overlay opacity',
					type: 'range',
				},
			},
		},
		content: {
			label: 'Content',
			controls: [],
		},
		tags: {
			label: 'Tags',
			controls: [],
		},
	},
};
