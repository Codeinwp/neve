import { Textarea } from '@neve-wp/components';
import { useState } from '@wordpress/element';
import PropTypes from 'prop-types';

const TextareaComponent = ({ control }) => {
	const defaultParams = {
		rows: 4,
	};

	const controlParams = control.params.input_attrs
		? {
				...defaultParams,
				...control.params.input_attrs,
		  }
		: defaultParams;

	const [value, setValue] = useState(control.setting.get());
	const { label } = control.params;

	const updateValues = (newVal) => {
		setValue(newVal);
		control.setting.set(newVal);
	};

	return (
		<Textarea
			value={value}
			label={label}
			onChange={updateValues}
			rows={controlParams.rows}
		/>
	);
};

TextareaComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default TextareaComponent;
