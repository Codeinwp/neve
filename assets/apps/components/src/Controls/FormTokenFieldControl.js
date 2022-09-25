import PropTypes from 'prop-types';
import { FormTokenField } from '@wordpress/components';
import { useState, useCallback } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { debounce } from 'lodash';

const FormTokenFieldControl = ({
	label,
	description,
	choices,
	onChange,
	value,
}) => {
	const REQUEST_DEBOUNCE_DELAY = 400;
	const MAX_TERMS_SUGGESTIONS = 20;
	const DEFAULT_QUERY = {
		per_page: MAX_TERMS_SUGGESTIONS,
		order: 'asc',
		_fields: 'id,slug',
		context: 'view',
	};

	const [suggestions, setSuggestions] = useState(
		Array.isArray(choices) ? choices : value
	);

	const updateValue = (nextVal) => {
		// Convert option labels into ids
		const selectedOptionsArray = [];

		for (const optionName of nextVal) {
			const matchingPost = suggestions.find((option) => {
				return option.label === optionName;
			});
			if (matchingPost !== undefined) {
				selectedOptionsArray.push(matchingPost);
			}
		}

		onChange(selectedOptionsArray);
	};

	const getValueKeys = () => {
		// Convert option ids into labels

		// Keep compatibility with previous version
		if (
			suggestions.length !== 0 &&
			value.length > 0 &&
			typeof value[0] !== 'object'
		) {
			const valueKeys = [];
			for (const optionId of value) {
				const wantedPost = suggestions.find((option) => {
					return option.id === optionId;
				});
				if (wantedPost === undefined || !wantedPost) {
					continue;
				}
				valueKeys.push(wantedPost.label);
			}
			return valueKeys;
		}

		return value.map((item) => item.label);
	};

	const getOptionNames = () => {
		if (!Array.isArray(suggestions)) {
			return [];
		}
		return suggestions.map((option) => option.label);
	};

	const hasSubArray = (master, sub) => {
		return sub.every((e) => master.includes(e));
	};

	const validateInput = (newVal) => {
		return hasSubArray(
			suggestions.map((el) => el.label),
			Array.isArray(newVal) ? newVal : [newVal]
		);
	};

	const updateSuggestions = (newVal) => {
		if (typeof choices !== 'string') {
			return;
		}

		const query = {
			...DEFAULT_QUERY,
			...{ post_title_starts_with: newVal },
		};

		const request = apiFetch({
			path: addQueryArgs(`/wp/v2/${choices}`, query),
		});

		request.then((posts) => {
			posts = posts.map((term) => {
				return { id: term.id, label: term.slug };
			});

			const ids = new Set(suggestions.map((item) => item.id));
			const merged = [
				...suggestions,
				...posts.filter((item) => !ids.has(item.id)),
			];

			setSuggestions(merged);
		});
	};

	const debouncedChangeHandler = useCallback(
		debounce(updateSuggestions, REQUEST_DEBOUNCE_DELAY),
		[]
	);

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
				onInputChange={debouncedChangeHandler}
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
