import { useState } from '@wordpress/element';
import InlineSelect from '../common/InlineSelect';

const InlineSelectComponent = ({ control }) => {
	const { label, options } = control.params;
	const [value, setValue] = useState(control.setting());

	const settings = Object.keys(options).map((key) => {
		return { value: key, label: options[key] };
	});

	const updateValue = (newValue) => {
		setValue(newValue);
		control.setting.set(newValue);
	};

	return (
		<div className="neve-white-background-control">
			<InlineSelect
				value={value}
				onChange={updateValue}
				options={settings}
				label={label}
			/>
		</div>
	);
};

export default InlineSelectComponent;
