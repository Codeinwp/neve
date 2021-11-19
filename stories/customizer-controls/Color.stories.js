import { useState } from '@wordpress/element';
import { ColorControl } from '../../assets/apps/components/src/components';
import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from '../components/decorators';

export default {
	title: 'Customizer/Controls/Color',
	component: ColorControl,
	args: {
		label: 'Control Label',
		defaultValue: '',
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [color, setColor] = useState('#f00');

	return (
		<>
			<ColorControl {...args} selectedColor={color} onChange={setColor} />
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{color}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});

export const NoGlobal = Template.bind({});
NoGlobal.storyName = 'No global colors';
NoGlobal.args = {
	disableGlobal: true,
};

export const WithDefault = Template.bind({});
WithDefault.storyName = 'Default value for clear';
WithDefault.args = {
	defaultValue: '#000000',
};
