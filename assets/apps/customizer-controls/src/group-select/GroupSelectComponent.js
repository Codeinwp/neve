import { SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { maybeParseJson } from '@neve-wp/components';

const GroupSelectComponent = ({ control }) => {
	const { options, label, disabled, description } = control.params;
	const [value, setValue] = useState(maybeParseJson(control.setting.get()));

	const onChange = (nextVal) => {
		const saveValue = {};
		nextVal.forEach((option) => {
			const currentOpt = JSON.parse(option);
			if (!saveValue[currentOpt.group]) {
				saveValue[currentOpt.group] = [];
			}
			saveValue[currentOpt.group].push(currentOpt.value);
		});
		setValue(saveValue);
		control.setting.set(JSON.stringify(saveValue));
	};

	const parsedValue = [];
	Object.entries(value).forEach((groupOption) => {
		const groupKey = groupOption[0];
		groupOption[1].map((val) => {
			parsedValue.push(JSON.stringify({ group: groupKey, value: val }));
			return false;
		});
	});

	const getObjKey = (obj, objValue) => {
		return Object.keys(obj).find((key) => obj[key] === objValue);
	};

	return (
		<>
			<div className="neve-white-background-control">
				{label && (
					/* eslint-disable-next-line jsx-a11y/label-has-for */
					<label className="customize-control-title">{label}</label>
				)}
				<SelectControl
					multiple
					disabled={disabled}
					aria-label={label}
					value={parsedValue}
					onChange={onChange}
					style={{ minHeight: '100px' }}
				>
					{Object.values(options).map((option, index) => {
						const optGroupKey = `${option.label}-${index}`;
						const objKey = getObjKey(options, option);
						return (
							<optgroup key={optGroupKey} label={option.label}>
								{Object.values(option.value).map(
									(groupedOption, groupedOptionIndex) => {
										const key = `${groupedOption}-${groupedOptionIndex}`;
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
				<p style={{ fontSize: '12px', color: '#757575' }}>
					{description}
				</p>
			</div>
		</>
	);
};

export default GroupSelectComponent;
