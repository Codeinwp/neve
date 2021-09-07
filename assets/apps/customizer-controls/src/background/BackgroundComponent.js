/* jshint esversion: 6 */
import Background from './Background';
import PropTypes from 'prop-types';
import { useState, useEffect } from '@wordpress/element';

const BackgroundComponent = ({ control }) => {
	const controlVal = control.setting.get();
	const { label } = control.params;
	const [value, setValue] = useState({
		type: controlVal.type || 'color',
		imageUrl: controlVal.imageUrl || '',
		focusPoint: controlVal.focusPoint || {
			x: 0.5,
			y: 0.5,
		},
		colorValue: controlVal.colorValue || '#ffffff',
		overlayColorValue: controlVal.overlayColorValue || '',
		overlayOpacity: controlVal.overlayOpacity || 50,
		fixed: controlVal.fixed || false,
		useFeatured: controlVal.useFeatured || false,
	});

	const updateValue = (updatedValues) => {
		const nextValue = { ...value, ...updatedValues };
		setValue(nextValue);
		control.setting.set(nextValue);
	};

	useEffect(() => {
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== control.id) return false;
			updateValue(e.detail.value);
		});
	}, []);

	return <Background onChange={updateValue} value={value} label={label} />;
};

BackgroundComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default BackgroundComponent;
