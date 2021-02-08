/* jshint esversion: 6 */
import Toggle from './Toggle';
import PropTypes from 'prop-types';
import { useState, useEffect } from '@wordpress/element';

const ToggleComponent = ({ control }) => {
	const { label, description } = control.params;
	const [value, setValue] = useState(control.setting.get());

	useEffect(() => {
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== control.id) return false;
			toggleValue(e.detail.value);
		});
	}, []);

	const toggleValue = (val) => {
		setValue(val);
		control.setting.set(val);
	};

	return (
		<Toggle
			description={description}
			label={label}
			checked={value}
			onChange={toggleValue}
		/>
	);
};

ToggleComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ToggleComponent;
