import Typeface from '../../assets/apps/customizer-controls/src/typeface/Typeface';
import { TYPEFACE_DEFAULT, TYPEFACE_EMPTY } from '../utils/values';
import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from '../components/decorators';
import { useState } from '@wordpress/element';
import React from 'react';

export default {
	title: 'Customizer/Controls/Typeface',
	component: Typeface,
	args: {
		label: 'Typeface Label',
		startValue: TYPEFACE_DEFAULT,
		defaultFS: {
			suffix: {
				mobile: 'px',
				tablet: 'px',
				desktop: 'px',
			},
			mobile: 10,
			tablet: 20,
			desktop: 30,
		},
		defaultLH: {
			suffix: {
				mobile: 'em',
				tablet: 'em',
				desktop: 'em',
			},
			mobile: 1,
			tablet: 1.3,
			desktop: 1.6,
		},
		defaultLS: {
			mobile: 0.5,
			tablet: 0.6,
			desktop: 0.8,
		},
		fontFamilyControl: '',
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState(args.startValue);

	const updateValue = (nextValue) => {
		setValue({ ...value, ...nextValue });
	};

	return (
		<>
			<Typeface {...args} value={value} onChange={updateValue} />
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{JSON.stringify(value, null, ' ')}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});
export const EmptyStart = Template.bind({});
EmptyStart.args = {
	defaultValue: TYPEFACE_EMPTY,
	startValue: TYPEFACE_EMPTY,
};
