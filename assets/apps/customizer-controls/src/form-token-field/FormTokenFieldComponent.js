import { FormTokenFieldControl, maybeParseJson } from '@neve-wp/components';
import { useState } from '@wordpress/element';

const FormTokenFieldComponent = ({ control }) => {
	const parsedValue = maybeParseJson(control.setting.get());
	const [value, setValue] = useState(parsedValue);
	const { choices, label, description } = control.params;

	const updateValue = (nextVal) => {
		setValue(nextVal);
		control.setting.set(JSON.stringify(nextVal));
	};

	return (
		<FormTokenFieldControl
			label={label}
			description={description}
			choices={choices}
			value={value}
			onChange={updateValue}
		/>
	);
};

export default FormTokenFieldComponent;
