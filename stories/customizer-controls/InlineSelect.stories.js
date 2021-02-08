import React from 'react';
import { useState } from '@wordpress/element';
import InlineSelect from '../../inc/customizer/controls/react/src/common/InlineSelect';
import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from '../components/decorators';

export default {
	title: 'Customizer/Controls/Inline Select',
	component: InlineSelect,
	args: {
		label: 'Control Label',
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [val, setVal] = useState(false);

	const options = [
		{
			value: 'one',
			label: 'One',
		},
		{
			value: 'two',
			label: 'Two',
		},
		{
			value: 'three',
			label: 'Three',
		},
		{
			value: 'four',
			label: 'Four',
		},
	];

	return (
		<InlineSelect
			onChange={setVal}
			options={options}
			value={val}
			{...args}
		/>
	);
};

export const Default = Template.bind({});
