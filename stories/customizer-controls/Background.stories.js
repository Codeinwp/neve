import Background from '../../inc/customizer/controls/react/src/background/Background';
import { CustomizerDecorator } from '../components/decorators';
import { useState } from '@wordpress/element';

export default {
	title: 'Customizer/Controls/Background',
	component: Background,
	args: {
		label: 'Background Control',
		defaultVal: {
			type: 'color',
			imageUrl: '',
			focusPoint: {
				x: 0.5,
				y: 0.5,
			},
			colorValue: '#ffffff',
			overlayColorValue: '',
			overlayOpacity: 50,
			fixed: false,
			useFeatured: false,
		},
	},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState(args.defaultVal);
	const updateValues = (additionalValues) => {
		setValue({ ...value, ...additionalValues });
	};
	return <Background {...args} value={value} onChange={updateValues} />;
};

export const Default = Template.bind({});
