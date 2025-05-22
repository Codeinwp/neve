/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import { ColorControl } from '@neve-wp/components';

import { useState, useEffect } from '@wordpress/element';

const ColorComponent = ({ control, children, isCompound = false }) => {
	const [value, setValue] = useState(control.setting.get());

	const updateValues = (newVal) => {
		setValue(newVal);
		control.setting.set(newVal);
	};

	useEffect(() => {
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== control.id) return false;
			updateValues(e.detail.value);
		});
	}, []);

	const wrapClasses = [
		isCompound ? '' : 'neve-white-background-control',
		'neve-color-control',
	];

	return (
		<div className={wrapClasses.join(' ')}>
			<ColorControl
				label={control.params.label}
				selectedColor={value}
				defaultValue={control.params.default}
				alphaDisabled={control.params.disableAlpha}
				onChange={updateValues}
				allowGradient={control.params.allowGradient}
			>
				{children}
			</ColorControl>
		</div>
	);
};

ColorComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ColorComponent;
