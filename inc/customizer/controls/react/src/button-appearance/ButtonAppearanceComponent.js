/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import ButtonAppearance from './ButtonAppearance';
import { useState, useEffect } from '@wordpress/element';

const ButtonAppearanceComponent = ({ control }) => {
	const controlValue = control.setting.get();

	const defaultsFromControl = {
		borderRadius: {
			top: 3,
			right: 3,
			bottom: 3,
			left: 3,
		},
		borderWidth: {
			top: 1,
			right: 1,
			bottom: 1,
			left: 1,
		},
	};

	// If this is the old, non-array version of radius, we convert.
	if (typeof controlValue.borderRadius === 'number') {
		controlValue.borderRadius = {
			top: controlValue.borderRadius,
			right: controlValue.borderRadius,
			bottom: controlValue.borderRadius,
			left: controlValue.borderRadius,
		};
	}
	// If this is the old, non-array version of radius, we convert.
	if (typeof controlValue.borderWidth === 'number') {
		controlValue.borderWidth = {
			top: controlValue.borderWidth,
			right: controlValue.borderWidth,
			bottom: controlValue.borderWidth,
			left: controlValue.borderWidth,
		};
	}

	const defaultVals = control.params.defaultVals
		? {
				...control.params.defaultVals,
				...defaultsFromControl,
		  }
		: defaultsFromControl;

	const [value, setValue] = useState({
		...defaultVals,
		...controlValue,
	});

	const updateValue = (prop, propVal) => {
		const nextValue = { ...value, [prop]: propVal };
		setValue(nextValue);
		control.setting.set(nextValue);
	};

	const { label, no_hover } = control.params;

	useEffect(() => {
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== control.id) return false;
			// Migrate border-radius and border-width
			const r = e.detail.value.borderRadius;
			if (r && (typeof r === 'string' || typeof r === 'number')) {
				e.detail.value.borderRadius = {
					top: r,
					bottom: r,
					right: r,
					left: r,
				};
			}

			const w = e.detail.value.borderWidth;
			if (w && (typeof w === 'string' || typeof w === 'number')) {
				e.detail.value.borderWidth = {
					top: w,
					bottom: w,
					right: w,
					left: w,
				};
			}
			setValue({ ...value, ...e.detail.value });
			control.setting.set(e.detail.value);
		});
	}, []);

	return (
		<ButtonAppearance
			defaultVals={defaultVals}
			onChange={updateValue}
			value={value}
			label={label}
			noHover={no_hover}
		/>
	);
};

ButtonAppearanceComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ButtonAppearanceComponent;
