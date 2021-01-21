import Ordering from '../../inc/customizer/controls/react/src/ordering/Ordering';
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

export default {
	title: 'Customizer/Controls/Ordering',
	component: Ordering,
	args: {
		label: 'Ordering Control',
		customizeValue: ORDERING_DEFAULT,
		components: ORDERING_COMPONENTS,
		allowsToggle: true,
	},
	argTypes: {
		onUpdate: { table: { disable: true } },
		value: { table: { disable: true } },
		customizeValue: { table: { disable: true } },
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState(args.customizeValue);
	return (
		<>
			<Ordering {...args} value={value} onUpdate={setValue} />
			<br />
			<hr />
			<strong>Value:</strong>
			<pre>{JSON.stringify(value, null, ' ')}</pre>
		</>
	);
};

export const Default = Template.bind({});
export const NoToggles = Template.bind({});
NoToggles.args = {
	customizeValue: ORDERING_NO_TOGGLES,
	allowsToggle: false,
};
