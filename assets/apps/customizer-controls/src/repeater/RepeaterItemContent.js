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

const RepeaterItemContent = ({
	fields,
	value,
	index,
	onContentChange,
	onRemove,
}) => {
	const changeContent = (type, newData) => {
		const newItemValue = { ...value[index] };
		newItemValue[type] = newData;
		onContentChange(newItemValue);
	};

	const toComponent = (key) => {
		if (fields[key] === undefined) return null;
		switch (fields[key].type) {
			case 'text':
				return (
					<TextControl
						label={fields[key].label}
						value={value[index][key]}
						onChange={(newData) => changeContent(key, newData)}
						key={key + index}
					/>
				);
			case 'icon':
				return (
					<IconSelector
						label={fields[key].label}
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
						label={fields[key].label}
						selectedColor={value[index][key]}
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
						label={fields[key].label}
						value={value[index][key]}
						onChange={(newData) => changeContent(key, newData)}
						options={defaultOption.concat(
							Object.entries(fields[key].choices).map(
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
		}
	};

	return (
		<div className="nv-repeater-content">
			{Object.entries(value[index]).map(([key]) => {
				return toComponent(key);
			})}
			{value.length > 1 && (
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
	value: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	onContentChange: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default RepeaterItemContent;
