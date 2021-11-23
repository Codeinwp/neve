/* jshint esversion: 6 */

import PropTypes from 'prop-types';
import { ResponsiveControl } from '@neve-wp/components';

import { ToggleControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

const ResponsiveToggleComponent = ({ control }) => {
	useEffect(() => {
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) {
				return false;
			}
			if (e.detail.id !== control.id) {
				return false;
			}
			setValue(e.detail.value);
		});
	}, []);

	const [value, setValue] = useState(control.setting.get());
	const [device, setDevice] = useState('desktop');

	return (
		<div className="neve-white-background-control flex-contents">
			<ToggleControl
				className="neve-toggle-control"
				checked={value[device]}
				label={control.params.label}
				onChange={(newValue) => {
					const nextValue = { ...value };
					nextValue[device] = newValue;
					setValue(nextValue);
					control.setting.set(nextValue);
				}}
			/>
			<ResponsiveControl
				excluded={control.params.excluded || []}
				hideResponsive={control.params.hideResponsive || false}
				onChange={(nextDevice) => {
					setDevice(nextDevice);
				}}
			/>
		</div>
	);
};

ResponsiveToggleComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ResponsiveToggleComponent;
