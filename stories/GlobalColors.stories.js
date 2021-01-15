import { useState } from '@wordpress/element';
import GlobalColors from '../inc/customizer/controls/react/src/global-colors/GlobalColors';
import { CustomizerDecorator } from './components/decorators';
import { GLOBAL_COLORS_DEFAULT, GLOBAL_COLORS_FILLED } from './utils/values';

export default {
	title: 'Customizer/Global Colors',
	component: GlobalColors,
	args: {
		currentValue: GLOBAL_COLORS_DEFAULT,
		label: 'Control Label',
	},
	argTypes: {
		currentValue: { table: { disable: true } },
	},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	// Code gymnastics to remove object reference.
	const [value, setValue] = useState(
		JSON.parse(JSON.stringify(args.currentValue))
	);
	return (
		<GlobalColors
			onChange={setValue}
			currentValue={value}
			defaultValues={{ ...GLOBAL_COLORS_DEFAULT }}
			label={args.label}
		/>
	);
};

export const Default = Template.bind({});

export const AllPalettes = Template.bind({});
AllPalettes.args = {
	currentValue: GLOBAL_COLORS_FILLED,
};
