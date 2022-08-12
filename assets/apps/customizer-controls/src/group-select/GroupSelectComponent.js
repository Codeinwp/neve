import { SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { maybeParseJson } from '@neve-wp/components';

const GroupSelectComponent = ({ control }) => {
	const { options, label, disabled, description } = control.params;
	const [value, setValue] = useState(maybeParseJson(control.setting.get()));

	const onChange = (nextVal) => {
		setValue(nextVal);
		control.setting.set(JSON.stringify(nextVal));
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
					value={value}
					onChange={onChange}
					style={{ minHeight: '100px' }}
				>
					{Object.values(options).map((option, index) => {
						const optGroupKey = `${option.label}-${index}`;
						return (
							<optgroup key={optGroupKey} label={option.label}>
								{Object.values(option.value).map(
									(groupedOption, groupedOptionIndex) => {
										const key = `${groupedOption}-${groupedOptionIndex}`;
										return (
											<option
												key={key}
												value={groupedOption}
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
