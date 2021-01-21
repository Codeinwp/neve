import React from 'react';
import { useState } from '@wordpress/element';
import Toggle from '../../inc/customizer/controls/react/src/toggle/Toggle';
import { CustomizerDecorator } from '../components/decorators';

export default {
	title: 'Customizer/Controls/Toggle',
	component: Toggle,
	args: {
		label: 'Control Label',
	},
	decorators: [CustomizerDecorator],
};

const ToggleWithState = ({ ...args }) => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<Toggle
				label={'Toggle'}
				onChange={setChecked}
				checked={checked}
				{...args}
			/>
			<br />
			<hr />
			<strong>Checked:</strong>
			<pre>{JSON.stringify(checked)}</pre>
		</>
	);
};

const Template = (args) => <ToggleWithState {...args} />;

export const Default = Template.bind({});
