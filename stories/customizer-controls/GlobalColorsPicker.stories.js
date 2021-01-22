import { useState } from '@wordpress/element';
import GlobalColorsPicker from '../../inc/customizer/controls/react/src/common/GlobalColorsPicker';
import { CustomizerDecorator } from '../components/decorators';

export default {
	title: 'Customizer/Controls/Global Colors Picker',
	component: GlobalColorsPicker,
	args: {
		isGlobal: true,
	},
	argTypes: {},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	const [activeColor, setActive] = useState('var(--nv-primary-accent)');
	return (
		<>
			<GlobalColorsPicker
				activeColor={activeColor}
				onChange={setActive}
				{...args}
			/>
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{activeColor}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});
