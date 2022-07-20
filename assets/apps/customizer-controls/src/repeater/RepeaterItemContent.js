import {
	Button,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import IconSelector from './IconSelector';
import { getIcons, ColorControl } from '@neve-wp/components';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import Range from '../range/Range';

const RepeaterItemContent = ({
	fields,
	newItemFields,
	value,
	index,
	onContentChange,
	onRemove,
}) => {
	const isBlocked = value[index].blocked === 'yes';
	const currentFields =
		Object.keys(newItemFields).length > 0 && isBlocked === false
			? newItemFields
			: fields;

	const changeContent = (type, newData) => {
		const newItemValue = { ...value[index] };

		const needsToUpdate = fields[type] ? fields[type].dependent : false;
		if (needsToUpdate) {
			let currentType = fields[needsToUpdate].type;
			if (typeof currentType === 'object') {
				currentType = currentType[newData];
			}

			if (currentType === 'select') {
				let choices = fields[needsToUpdate].choices;
				if (typeof choices === 'object') {
					choices = Object.keys(choices[newData])[0];
				}
				newItemValue[needsToUpdate] = choices;
			} else {
				newItemValue[needsToUpdate] = '';
			}
		}

		newItemValue[type] = newData;
		onContentChange(newItemValue);
	};

	const toComponent = (key, val) => {
		const currentField = { ...currentFields[key] };
		if (currentField.depends_on) {
			const currentValueOfDependent = val[currentField.depends_on];

			for (const [fieldName, fieldValue] of Object.entries(
				currentField
			)) {
				if (typeof fieldValue === 'object') {
					currentField[fieldName] =
						fieldValue[currentValueOfDependent];
				}
			}
		}

		switch (currentField.type) {
			case 'text':
				return (
					<TextControl
						label={currentField.label}
						value={value[index][key] || currentField.default}
						onChange={(newData) => changeContent(key, newData)}
						key={key + index}
					/>
				);
			case 'icon':
				return (
					<IconSelector
						label={currentField.label}
						value={value[index][key]}
						onIconChoice={(newData) => changeContent(key, newData)}
						icons={getIcons(18)}
						key={key + index}
					/>
				);
			case 'color':
				return (
					<ColorControl
						className="repeater-color-control"
						label={currentField.label}
						selectedColor={value[index][key]}
						allowGradient={currentField.gradient || false}
						onChange={(newData) => changeContent(key, newData)}
						key={key + index}
					/>
				);
			case 'select':
				const defaultOption = [
					{ value: '', label: 'Select', disabled: true },
				];

				return (
					<SelectControl
						label={currentField.label}
						value={value[index][key] || ''}
						onChange={(newData) => changeContent(key, newData)}
						options={defaultOption.concat(
							Object.entries(currentField.choices).map(
								([k, v]) => {
									return {
										value: k,
										label: v,
										disabled: false,
									};
								}
							)
						)}
						key={key + index}
					/>
				);
			case 'checkbox':
				return (
					<ToggleControl
						label={fields[key].label}
						checked={value[index][key]}
						onChange={(newData) => changeContent(key, newData)}
						key={key + index}
					/>
				);
			case 'range':
				return (
					<Range
						label={fields[key].label}
						onChange={(newVal) => changeContent(key, newVal)}
						key={key + index}
						value={value[index][key]}
						{...fields[key]}
					/>
				);
		}
	};

	return (
		<div className="nv-repeater-content">
			{Object.entries(currentFields).map(([key]) => {
				return toComponent(key, value[index]);
			})}
			{value.length > 1 && !isBlocked && (
				<Button
					className="nv-repeater-remove-button"
					isDestructive
					isLink
					onClick={() => onRemove(index)}
				>
					{__('Remove', 'neve')}
				</Button>
			)}
		</div>
	);
};

RepeaterItemContent.propTypes = {
	fields: PropTypes.object.isRequired,
	newItemFields: PropTypes.object.isRequired,
	value: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	onContentChange: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default RepeaterItemContent;
