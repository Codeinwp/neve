import { RadioImage } from '../../assets/apps/components/src/components';
import { CustomizerDecorator } from '../components/decorators';
import { useState } from '@wordpress/element';
import { RADIO_IMAGE_CHOICES } from '../utils/values';

export default {
	title: 'Customizer/Controls/Radio Image',
	component: RadioImage,
	args: {
		label: 'Radio Image Label',
	},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	const [val, setVal] = useState('default');
	return (
		<>
			<RadioImage
				{...args}
				choices={RADIO_IMAGE_CHOICES}
				onClick={setVal}
				value={val}
			/>
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{val}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});
