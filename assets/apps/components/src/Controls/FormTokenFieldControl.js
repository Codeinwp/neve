import PropTypes from 'prop-types';
import { FormTokenField } from '@wordpress/components';

const FormTokenFieldControl = ({
	label,
	description,
	choices,
	onChange,
	value,
}) => {
	const updateValue = (nextVal) => {
		// Convert option labels into ids
		const selectedOptionsArray = [];

		for (const optionName of nextVal) {
			const matchingPost = choices.find((option) => {
				return option.label === optionName;
			});
			if (matchingPost !== undefined) {
				selectedOptionsArray.push(matchingPost.id);
			}
		}

		onChange(selectedOptionsArray);
	};

	const getValueKeys = () => {
		// Convert option ids into labels
		const valueKeys = [];
		for (const optionId of value) {
			const wantedPost = choices.find((option) => {
				return option.id === optionId;
			});
			if (wantedPost === undefined || !wantedPost) {
				continue;
			}
			valueKeys.push(wantedPost.label);
		}
		return valueKeys;
	};

	const getOptionNames = () => {
		return choices.map((option) => option.label);
	};

	const hasSubArray = (master, sub) => {
		return sub.every((e) => master.includes(e));
	};

	const validateInput = (newVal) => {
		return hasSubArray(
			choices.map((el) => el.label),
			Array.isArray(newVal) ? newVal : [newVal]
		);
	};

	return (
		<div className="neve-white-background-control neve-form-token-field-control">
			{label && (
				/* eslint-disable-next-line jsx-a11y/label-has-for */
				<label className="customize-control-title">{label}</label>
			)}
			<FormTokenField
				label={description || ''}
				value={getValueKeys()}
				suggestions={getOptionNames()}
				maxSuggestions={20}
				__experimentalExpandOnFocus={true}
				__experimentalValidateInput={validateInput}
				onChange={updateValue}
			/>
		</div>
	);
};

FormTokenFieldControl.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	choices: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.object.isRequired,
};

export default FormTokenFieldControl;
