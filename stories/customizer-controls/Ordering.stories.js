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
NoToggles.args = {
	customizeValue: ORDERING_NO_TOGGLES,
	allowsToggle: false,
};
