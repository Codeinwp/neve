/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import { RadioImage } from '@neve-wp/components';
import { useState } from '@wordpress/element';

const RadioImageComponent = ({ control }) => {
	const [value, setValue] = useState(control.setting.get());
	const { choices, label, documentation } = control.params;

	const updateValue = (newVal) => {
		setValue(newVal);
		control.setting.set(newVal);
	};

	return (
		<RadioImage
			label={label}
			documentation={documentation}
			choices={choices}
			onClick={updateValue}
			value={value}
		/>
	);
};

RadioImageComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default RadioImageComponent;
