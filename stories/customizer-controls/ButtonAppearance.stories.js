import { ButtonAppearance } from '../../assets/apps/components/src/components';
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
			useShadow: false,
			shadowColor: 'rgba(0,0,0,0.5)',
			shadowProperties: { blur: 5, width: 0, height: 0 },
			useShadowHover: false,
			shadowColorHover: 'rgba(0,0,0,0.5)',
			shadowPropertiesHover: { blur: 5, width: 0, height: 0 },
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
		useShadow: false,
		shadowColor: '',
		shadowProperties: { blur: '', width: '', height: '' },
		useShadowHover: false,
		shadowColorHover: '',
		shadowPropertiesHover: { blur: '', width: '', height: '' },
	},
};
