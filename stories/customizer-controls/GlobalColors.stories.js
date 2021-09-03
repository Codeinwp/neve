import { useState } from '@wordpress/element';
import GlobalColors from '../../assets/apps/customizer-controls/src/global-colors/GlobalColors';
import { CustomizerDecorator } from '../components/decorators';
import { GLOBAL_COLORS_DEFAULT, GLOBAL_COLORS_FILLED } from '../utils/values';

export default {
	title: 'Customizer/Controls/Global Colors',
	component: GlobalColors,
	args: {
		currentValue: GLOBAL_COLORS_DEFAULT,
		label: 'Control Label',
	},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	// Code gymnastics to remove object reference.
	const [value, setValue] = useState(
		JSON.parse(JSON.stringify(args.currentValue))
	);
	return (
		<>
			<GlobalColors
				onChange={setValue}
				currentValue={value}
				defaultValues={{ ...GLOBAL_COLORS_DEFAULT }}
				label={args.label}
			/>
			<div className="value-previewer">
				<strong>Current Palette:</strong>
				<pre>{value.activePalette}</pre>
				<hr />
				<strong>All Palettes:</strong>
				<pre>{JSON.stringify(Object.keys(value.palettes))}</pre>
				<hr />
				<strong>Current Palette Values:</strong>
				<pre>
					{JSON.stringify(
						value.palettes[value.activePalette].colors,
						null,
						' '
					)}
				</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});

export const AllPalettes = Template.bind({});
AllPalettes.args = {
	currentValue: GLOBAL_COLORS_FILLED,
};
