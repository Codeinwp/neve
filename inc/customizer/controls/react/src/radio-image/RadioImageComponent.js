/* jshint esversion: 6 */
import RadioImage from './RadioImage';
import PropTypes from 'prop-types';
import { useState } from '@wordpress/element';

const RadioImageComponent = ({ control }) => {
	const [value, setValue] = useState(control.setting.get());
	const { choices, label } = control.params;

	const updateValue = (newVal) => {
		setValue(newVal);
		control.setting.set(newVal);
	};

	return <RadioImage label={label} choices={choices} onClick={updateValue} value={value} />;
};

RadioImageComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default RadioImageComponent;
