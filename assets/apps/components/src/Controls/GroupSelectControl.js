import PropTypes from 'prop-types';
import { SelectControl } from '@wordpress/components';

const GroupSelectControl = ({
	multiple,
	label,
	description,
	disabled,
	options,
	onChange,
	value,
}) => {
	const getParsedValue = () => {
		const parsedValue = [];
		Object.entries(value).forEach((groupOption) => {
			const [groupKey, groupValue] = groupOption;
			groupValue.forEach((val) => {
				parsedValue.push(
					JSON.stringify({ group: groupKey, value: val })
				);
			});
		});
		return parsedValue;
	};

	const updateValue = (nextVal) => {
		const saveValue = {};
		nextVal.forEach((option) => {
			const currentOpt = JSON.parse(option);
			if (!saveValue[currentOpt.group]) {
				saveValue[currentOpt.group] = [];
			}
			saveValue[currentOpt.group].push(currentOpt.value);
		});
		onChange(saveValue);
	};

	const getKeyByValue = (obj, objValue) => {
		return Object.keys(obj).find((key) => obj[key] === objValue);
	};

	return (
		<div className="neve-white-background-control neve-group-select-control">
			{label && (
				/* eslint-disable-next-line jsx-a11y/label-has-for */
				<label className="customize-control-title">{label}</label>
			)}
			<SelectControl
				multiple={multiple}
				disabled={disabled}
				aria-label={label}
				style={{ minHeight: '100px' }}
				value={getParsedValue()}
				onChange={updateValue}
			>
				{Object.values(options).map((option) => {
					const objKey = getKeyByValue(options, option);
					return (
						<optgroup key={option.label} label={option.label}>
							{Object.values(option.value).map(
								(groupedOption) => {
									const key = `${option.label}-${groupedOption}`;
									return (
										<option
											key={key}
											value={JSON.stringify({
												group: objKey,
												value: groupedOption,
											})}
										>
											{groupedOption}
										</option>
									);
								}
							)}
						</optgroup>
					);
				})}
			</SelectControl>
			<p style={{ fontSize: '12px', color: '#757575' }}>{description}</p>
		</div>
	);
};

GroupSelectControl.propTypes = {
	multiple: PropTypes.bool,
	label: PropTypes.string,
	description: PropTypes.string,
	disabled: PropTypes.bool,
	options: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.object.isRequired,
};

export default GroupSelectControl;
