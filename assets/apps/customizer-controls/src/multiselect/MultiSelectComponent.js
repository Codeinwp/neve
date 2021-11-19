import { MultiSelect } from '@neve-wp/components';
import { useState } from '@wordpress/element';

const MultiSelectComponent = ({ control }) => {
	const [value, setValue] = useState(control.setting.get());
	const { choices, label } = control.params;

	const updateValues = (nextVal) => {
		setValue(nextVal);
		control.setting.set(nextVal);
	};

	return (
		<MultiSelect
			label={label}
			choices={choices}
			onChange={updateValues}
			currentValue={value}
		/>
	);
};

export default MultiSelectComponent;
