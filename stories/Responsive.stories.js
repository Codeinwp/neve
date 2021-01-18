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

	const updateDevice = (d) => {
		console.log(d);
		setCurrentDevice(d);
	};

	return (
		<ResponsiveControl {...args} onChange={setCurrentDevice}>
			<>
				<hr />
				<pre>
					<h4>Value: {currentDevice}</h4>
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
