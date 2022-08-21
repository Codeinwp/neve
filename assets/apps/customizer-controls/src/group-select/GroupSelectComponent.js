import { useState } from '@wordpress/element';
import { GroupSelectControl, maybeParseJson } from '@neve-wp/components';

const GroupSelectComponent = ({ control }) => {
	const { options, label, disabled, description } = control.params;
	const [value, setValue] = useState(maybeParseJson(control.setting.get()));

	const onChange = (nextVal) => {
		setValue(nextVal);
		control.setting.set(JSON.stringify(nextVal));
	};

	return (
		<GroupSelectControl
			label={label}
			multiple={true}
			disabled={disabled}
			value={value}
			description={description}
			onChange={onChange}
			options={options}
		/>
	);
};

export default GroupSelectComponent;
