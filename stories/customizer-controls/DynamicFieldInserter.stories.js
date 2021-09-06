import DynamicFieldInserter from '../../assets/apps/customizer-controls/src/dynamic-fields/dynamic-field-inserter';
import {
	WhiteBackgroundDecorator,
	CustomizerDecorator,
} from '../components/decorators';
import { useState } from '@wordpress/element';
import { DYNAMIC_FIELDS_OPTIONS } from '../utils/values';

export default {
	title: 'Customizer/Controls/Dynamic Fields Inserter',
	component: DynamicFieldInserter,
	args: {
		allowedOptionsTypes: ['string', 'url', 'custom_cart', 'custom_url'],
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState('');

	const appendToInput = (magicTag) => {
		setValue(`${value}{${magicTag}}`);
	};

	return (
		<>
			<DynamicFieldInserter
				{...args}
				options={DYNAMIC_FIELDS_OPTIONS}
				onSelect={appendToInput}
			/>
			<hr />
			<br />
			<label htmlFor="test-input">
				<strong>Test Input:</strong>
			</label>
			<input
				id="test-input"
				style={{ width: '100%' }}
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</>
	);
};

export const AllOptionsEnabled = Template.bind({});
export const OnlyURLOptions = Template.bind({});
OnlyURLOptions.args = {
	allowedOptionsTypes: ['url'],
};
