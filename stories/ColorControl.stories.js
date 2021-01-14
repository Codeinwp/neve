import { useState } from '@wordpress/element';
import React from 'react';
import ColorControl from '../inc/customizer/controls/react/src/common/ColorControl';
import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from './components/decorators';

export default {
	title: 'Customizer/Color Control',
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

const ColorControlWithState = ({ ...props }) => {
	const [color, setColor] = useState('#f00');
	return (
		<ColorControl {...props} selectedColor={color} onChange={setColor} />
	);
};

const Template = (args) => <ColorControlWithState {...args} />;

export const Default = Template.bind({});

export const NoGlobal = Template.bind({});
NoGlobal.storyName = 'Without global colors';
NoGlobal.args = {
	disableGlobal: true,
};

export const WithDefault = Template.bind({});
WithDefault.storyName = 'With default value for clear';
WithDefault.args = {
	defaultValue: '#000000',
};
