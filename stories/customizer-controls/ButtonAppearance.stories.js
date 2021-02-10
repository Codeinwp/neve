import ButtonAppearance from '../../inc/customizer/controls/react/src/button-appearance/ButtonAppearance';
import { CustomizerDecorator } from '../components/decorators';
import { useState } from '@wordpress/element';

export default {
	title: 'Customizer/Controls/Button Appearance',
	component: ButtonAppearance,
	args: {
		label: 'Button Appearance Control',
		defaultVals: {
			type: 'fill',
			background: '#cccccc',
			backgroundHover: '#333333',
			text: '#000000',
			textHover: '#ffffff',
			borderRadius: { top: 10, bottom: 10, right: 10, left: 10 },
			borderWidth: { top: 1, bottom: 1, right: 1, left: 1 },
		},
	},
	argTypes: {
		value: { value: { disable: true } },
	},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState(args.defaultVals);
	const updateValue = (type, val) => {
		setValue({ ...value, [type]: val });
	};

	return (
		<>
			<ButtonAppearance value={value} {...args} onChange={updateValue} />
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{JSON.stringify(value, null, ' ')}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});

export const NoHover = Template.bind({});
NoHover.args = {
	noHover: true,
};

export const EmptyValues = Template.bind({});
EmptyValues.args = {
	defaultVals: {
		type: '',
		background: '',
		backgroundHover: '',
		text: '',
		textHover: '',
		borderRadius: { top: '', bottom: '', right: '', left: '' },
		borderWidth: { top: '', bottom: '', right: '', left: '' },
	},
};
