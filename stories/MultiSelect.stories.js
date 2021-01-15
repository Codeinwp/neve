import { useState } from '@wordpress/element';
import MultiSelect from '../inc/customizer/controls/react/src/multiselect/MultiSelect';
import {
	MULTISELECT_DEFAULT,
	MULTISELECT_CHOICES,
	MULTISELECT_FULL,
} from './utils/values';
import { CustomizerDecorator } from './components/decorators';

export default {
	title: 'Customizer/Multiselect',
	component: MultiSelect,
	args: {
		label: 'Control Label',
		choices: MULTISELECT_CHOICES,
		default: MULTISELECT_DEFAULT,
	},
	argTypes: {
		choices: { table: { disable: true } },
		onChange: { table: { disable: true } },
		currentValue: { table: { disable: true } },
	},
	decorators: [CustomizerDecorator],
};

const MultiSelectWithState = ({ ...args }) => {
	const [items, setItems] = useState(args.default);

	return (
		<MultiSelect
			{...args}
			currentValue={items}
			choices={args.choices}
			onChange={setItems}
		/>
	);
};

const Template = (args) => <MultiSelectWithState {...args} />;

export const Default = Template.bind({});
export const Empty = Template.bind({});
Empty.args = {
	default: [],
};

export const Full = Template.bind({});
Full.args = {
	default: MULTISELECT_FULL,
};
