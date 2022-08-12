import { FormTokenField } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { maybeParseJson } from '@neve-wp/components';

const FormTokenFieldComponent = ({ control }) => {
	const parsedValue = maybeParseJson(control.setting.get());
	const [value, setValue] = useState(parsedValue);
	const { choices, label, description } = control.params;

	const updateValue = (nextVal) => {
		setValue(nextVal);
		control.setting.set(JSON.stringify(nextVal));
	};

	return (
		<>
			<div className="neve-white-background-control">
				{label /* TODO: Add proper label id for this */ && (
					/* eslint-disable-next-line jsx-a11y/label-has-for */
					<label className="customize-control-title">{label}</label>
				)}
				<FormTokenField
					label={description || ''}
					value={value}
					suggestions={choices}
					maxSuggestions={20}
					__experimentalExpandOnFocus={true}
					__experimentalValidateInput={(newValue) =>
						choices.includes(newValue)
					}
					onChange={updateValue}
				/>
			</div>
		</>
	);
};

export default FormTokenFieldComponent;
