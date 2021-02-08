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
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState(args.customizeValue);
	return (
		<>
			<Ordering {...args} value={value} onUpdate={setValue} />
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{JSON.stringify(value, null, ' ')}</pre>
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
