import { SizingControl } from '../../assets/apps/components/src/components';
import {
	WhiteBackgroundDecorator,
	CustomizerDecorator,
} from '../components/decorators';
import { useState } from '@wordpress/element';
import React from 'react';
export default {
	title: 'Customizer/Controls/Sizing',
	component: SizingControl,
	args: {
		label: 'Sizing Control',
		max: 100,
		min: 0,
		step: 1,
		defaults: {
			top: 10,
			right: 10,
			bottom: 10,
			left: 10,
		},
		linked: false,
		noLinking: false,
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState(args.defaults);

	const options = [
		{
			type: 'top',
			label: 'Top',
			value: value.top,
		},
		{
			type: 'right',
			label: 'Right',
			value: value.right,
		},
		{
			type: 'bottom',
			label: 'Bottom',
			value: value.bottom,
		},
		{
			type: 'left',
			label: 'Left',
			value: value.left,
		},
	];

	const handleReset = () => {
		setValue(args.defaults);
	};

	return (
		<>
			<SizingControl
				{...args}
				value={value}
				options={options}
				onReset={handleReset}
				onChange={setValue}
			/>
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{JSON.stringify(value, null, ' ')}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});
export const UnlinkedDefaults = Template.bind({});

UnlinkedDefaults.args = {
	defaults: {
		top: 0,
		right: 10,
		bottom: 0,
		left: 10,
	},
};

export const NoLinking = Template.bind({});

NoLinking.args = {
	noLinking: true,
	defaults: {
		top: 0,
		right: 10,
		bottom: 0,
		left: 10,
	},
};

export const EmptyValues = Template.bind({});

EmptyValues.args = {
	defaults: {
		top: '',
		right: '',
		bottom: '',
		left: '',
	},
};
