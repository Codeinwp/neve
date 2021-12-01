import { useState } from '@wordpress/element';
import { ResponsiveControl } from '../../assets/apps/components/src/components';
import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from '../components/decorators';

export default {
	title: 'Customizer/Controls/Responsive',
	component: ResponsiveControl,
	args: {
		excluded: [],
		defaultValue: 'desktop',
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [currentDevice, setCurrentDevice] = useState(args.defaultValue);

	return (
		<>
			<ResponsiveControl {...args} onChange={setCurrentDevice}>
				<>
					<br />
					CHILDREN COMPONENTS
				</>
			</ResponsiveControl>
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>
					<span className="value">{currentDevice}</span>
				</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});
export const WithExcludedDevice = Template.bind({});
WithExcludedDevice.args = {
	excluded: ['tablet'],
};
