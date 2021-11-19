import PresetsSelector from '../../assets/apps/customizer-controls/src/presets-selector/PresetsSelector';
import { PRESETS } from '../utils/values';
import { CustomizerDecorator } from '../components/decorators';
import { useState } from '@wordpress/element';
export default {
	title: 'Customizer/Controls/Presets Selector',
	component: PresetsSelector,
	args: {
		label: 'Presets Selector',
		initiallyExpanded: true,
	},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	const [thePreset, setThePreset] = useState(null);

	return (
		<>
			<PresetsSelector
				{...args}
				onSelect={setThePreset}
				presets={PRESETS}
			/>
			<div className="value-previewer">
				<strong>Last Clicked:</strong>
				<pre>{JSON.stringify(thePreset, null, ' ')}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});
