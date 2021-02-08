import SingleSizingInput from '../../inc/customizer/controls/react/src/common/SingleSizingInput';
import {
	WhiteBackgroundDecorator,
	CustomizerDecorator,
} from '../components/decorators';
import { useState } from '@wordpress/element';

export default {
	title: 'Customizer/Controls/Single Sizing Input',
	component: SingleSizingInput,
	args: {
		max: 100,
		min: 0,
		step: 1,
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [val, setVal] = useState(10);
	return (
		<>
			<SingleSizingInput
				value={val}
				{...args}
				onChange={(type, newVal) => {
					setVal(newVal);
				}}
				type={'type'}
			/>
		</>
	);
};

export const Default = Template.bind({});
