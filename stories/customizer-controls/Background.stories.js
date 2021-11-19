import { Background } from '../../assets/apps/components/src/components';
import { CustomizerDecorator } from '../components/decorators';
import { useState } from '@wordpress/element';
import bgImg from '../assets/img/Classic.jpg';
export default {
	title: 'Customizer/Controls/Background',
	component: Background,
	args: {
		label: 'Background Control',
		defaultVal: {
			type: 'color',
			imageUrl: bgImg,
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
	return (
		<>
			<Background {...args} value={value} onChange={updateValues} />
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{JSON.stringify(value, null, ' ')}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});
