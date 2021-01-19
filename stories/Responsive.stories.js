import { useState } from '@wordpress/element';
import ResponsiveControl from '../inc/customizer/controls/react/src/common/Responsive';
import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from './components/decorators';

export default {
	title: 'Customizer/Responsive',
	component: ResponsiveControl,
	args: {
		excluded: [],
		defaultValue: 'desktop',
	},
	argTypes: {
		onChange: { table: { disable: true } },
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [currentDevice, setCurrentDevice] = useState(args.defaultValue);

	return (
		<ResponsiveControl {...args} onChange={setCurrentDevice}>
			<>
				<hr />
				<strong>Value:</strong>
				<pre>
					<span className="value">{currentDevice}</span>
				</pre>
			</>
		</ResponsiveControl>
	);
};

export const Default = Template.bind({});
export const WithExcludedDevice = Template.bind({});
WithExcludedDevice.args = {
	excluded: ['tablet'],
};
