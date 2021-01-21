import { useState } from '@wordpress/element';
import ColorControl from '../../inc/customizer/controls/react/src/common/ColorControl';
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
	argTypes: {
		defaultValue: { control: 'color' },
		onChange: { table: { disable: true } },
		selectedColor: { table: { disable: true } },
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [color, setColor] = useState('#f00');

	return (
		<>
			<ColorControl {...args} selectedColor={color} onChange={setColor} />
			<br />
			<hr />
			<strong>Value:</strong>
			<pre>{color}</pre>
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
