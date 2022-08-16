import { FormTokenField } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { maybeParseJson } from '@neve-wp/components';

const FormTokenFieldComponent = ({ control }) => {
	const parsedValue = maybeParseJson(control.setting.get());
	const [value, setValue] = useState(parsedValue);
	const { choices, label, description } = control.params;

	const hasLabel =
		choices !== null &&
		Array.isArray(choices) &&
		choices[0].hasOwnProperty('label');
	let optionNames = [];
	let optionValues = [];
	if (hasLabel) {
		optionNames = choices.map((option) => option.label);
		optionValues = value.map((optionId) => {
			const wantedPost = choices.find((option) => {
				return option.id === optionId;
			});
			if (wantedPost === undefined || !wantedPost) {
				return false;
			}
			return wantedPost.label;
		});
	}

	const updateValue = (nextVal) => {
		// Build array of selected posts.
		const selectedOptionsArray = hasLabel ? [] : nextVal;
		if (hasLabel) {
			nextVal.map((optionName) => {
				const matchingPost = choices.find((option) => {
					return option.label === optionName;
				});
				if (matchingPost !== undefined) {
					selectedOptionsArray.push(matchingPost.id);
				}
				return false;
			});
		}
		setValue(selectedOptionsArray);
		control.setting.set(JSON.stringify(selectedOptionsArray));
	};

	return (
		<>
			<div className="neve-white-background-control">
				{label && (
					/* eslint-disable-next-line jsx-a11y/label-has-for */
					<label className="customize-control-title">{label}</label>
				)}
				<FormTokenField
					label={description || ''}
					value={hasLabel ? optionValues : value}
					suggestions={hasLabel ? optionNames : choices}
					maxSuggestions={20}
					__experimentalExpandOnFocus={true}
					__experimentalValidateInput={(newValue) => {
						if (hasLabel) {
							return (
								choices.filter((el) => 'label' in el).length > 0
							);
						}
						return choices.includes(newValue);
					}}
					onChange={updateValue}
				/>
			</div>
		</>
	);
};

export default FormTokenFieldComponent;
