import PropTypes from 'prop-types';
import { FormTokenField } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { useState } from '@wordpress/element';

const FormTokenFieldControl = ({
	label,
	description,
	choices,
	onChange,
	value,
}) => {
	const [suggetions, setSuggestions] = useState([]);
	const [allSuggested, setAllSuggested] = useState(choices);

	const updateValue = (nextVal) => {
		// Convert option labels into ids
		const selectedOptionsArray = [];
		for (const optionName of nextVal) {
			const matchingPost = allSuggested.find((option) => {
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
			const wantedPost = allSuggested.find((option) => {
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
		return allSuggested.map((option) => option.label);
	};

	const hasSubArray = (master, sub) => {
		return sub.every((e) => master.includes(e));
	};

	const validateInput = (newVal) => {
		return hasSubArray(
			allSuggested.map((el) => el.label),
			Array.isArray(newVal) ? newVal : [newVal]
		);
	};

	const MAX_TERMS_SUGGESTIONS = 20;
	const DEFAULT_QUERY = {
		per_page: MAX_TERMS_SUGGESTIONS,
		orderby: 'title',
		order: 'asc',
		_fields: 'id,title',
		context: 'view',
	};

	const updateSuggestions = (nextVal) => {
		if (choices.length > 0) {
			setAllSuggested(choices);
			return;
		}
		fetchTerms({ search: nextVal }).then(function (suggestions) {
			const updatedValue = allSuggested.concat(
				suggestions.filter(
					({ id }) => !allSuggested.find((item) => item.id === id)
				)
			);
			setAllSuggested(updatedValue);
			setSuggestions(suggestions);
		});
	};

	const fetchTerms = (params = {}) => {
		const query = { ...DEFAULT_QUERY, ...params };
		const request = apiFetch({
			path: addQueryArgs(`/wp/v2/posts`, query),
		});
		return request.then((terms) => {
			return terms
				.map((term) => {
					return { id: term.id, label: term.title.rendered };
				})
				.filter((term) => {
					return term.label
						.toLowerCase()
						.includes(params.search.toLowerCase());
				});
		});
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
				maxSuggestions={MAX_TERMS_SUGGESTIONS}
				__experimentalExpandOnFocus={true}
				__experimentalValidateInput={validateInput}
				onChange={updateValue}
				onInputChange={updateSuggestions}
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
