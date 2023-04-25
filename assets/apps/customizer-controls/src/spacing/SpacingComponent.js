/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
	mergeDeep,
	ResponsiveControl,
	SizingControl,
} from '@neve-wp/components';

import { useState, useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { mapValues } from 'lodash';

const SpacingComponent = ({ control }) => {
	const defaultParams = {
		min: -300,
		max: 300,
		hideResponsiveButtons: false,
		units: ['px', 'em', 'rem', '%'],
	};

	const controlParams = control.params.input_attrs
		? {
				...defaultParams,
				...control.params.input_attrs,
		  }
		: defaultParams;
	const { axis, dependsOn } = controlParams;

	let deviceInitialValue = { top: 0, right: 0, bottom: 0, left: 0 };
	if (axis) {
		deviceInitialValue =
			axis === 'vertical' ? { top: 0, bottom: 0 } : { right: 0, left: 0 };
	}

	const baseDefault = {
		mobile: deviceInitialValue,
		tablet: deviceInitialValue,
		desktop: deviceInitialValue,
		'mobile-unit': 'px',
		'tablet-unit': 'px',
		'desktop-unit': 'px',
	};

	const defaultValue = control.params.default
		? {
				...baseDefault,
				...control.params.default,
		  }
		: baseDefault;

	const dbVal = control.setting.get();
	const initialVal = mergeDeep(defaultValue, dbVal);

	const [value, setValue] = useState(initialVal);
	const [currentDevice, setCurrentDevice] = useState('desktop');

	let defaultVisibility = true;
	if (dependsOn) {
		const dependentControl = Object.keys(dependsOn)[0];
		const dependentValue = Object.values(dependsOn)[0];
		defaultVisibility =
			wp.customize.control(dependentControl).setting.get() ===
			dependentValue;
	}
	const [visible, setVisible] = useState(defaultVisibility);

	const updateValueForCurrentDevice = (valueForDevice) => {
		const nextValue = { ...value };
		nextValue[currentDevice] = valueForDevice;
		updateControlValue(nextValue);
	};

	const updateControlValue = (nextVal) => {
		setValue(nextVal);
		control.setting.set(nextVal);
	};

	const updateVisibility = (dependencies) => {
		const controlName = Object.keys(dependencies)[0];
		const controlValue = Object.values(dependencies)[0];

		wp.customize(controlName, (setting) => {
			setting.bind((val) => {
				setVisible(val === controlValue);
			});
		});
	};

	useEffect(() => {
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== control.id) return false;

			updateControlValue(e.detail.value || defaultValue);
		});

		if (dependsOn) {
			updateVisibility(dependsOn);
		}
	}, []);

	if (dependsOn && visible === false) {
		return null;
	}

	const isRelativeUnit = ['em', 'rem'].includes(
		value[currentDevice + '-unit']
	);

	const getButtons = () => {
		const { units } = controlParams;

		if (units.length === 1) {
			return (
				<Button isSmall disabled className="active alone">
					{units[0]}
				</Button>
			);
		}

		return units.map((unit, index) => {
			const buttonClass = classnames({
				active: value[currentDevice + '-unit'] === unit,
			});
			return (
				<Button
					isSmall
					key={index}
					className={buttonClass}
					onClick={() => {
						const nextValue = { ...value };
						nextValue[currentDevice + '-unit'] = unit;
						if (unit !== 'em') {
							nextValue[currentDevice] = mapValues(
								nextValue[currentDevice],
								(v) => (v ? parseInt(v) : v)
							);
						}
						updateControlValue(nextValue);
					}}
				>
					{unit}
				</Button>
			);
		});
	};

	const options = [
		{
			type: 'top',
			label: __('Top', 'neve'),
			value: axis === 'horizontal' ? undefined : value[currentDevice].top,
			disabled: axis === 'horizontal',
		},
		{
			type: 'right',
			label: __('Right', 'neve'),
			value: axis === 'vertical' ? undefined : value[currentDevice].right,
			disabled: axis === 'vertical',
		},
		{
			type: 'bottom',
			label: __('Bottom', 'neve'),
			value:
				axis === 'horizontal' ? undefined : value[currentDevice].bottom,
			disabled: axis === 'horizontal',
		},
		{
			type: 'left',
			label: __('Left', 'neve'),
			value: axis === 'vertical' ? undefined : value[currentDevice].left,
			disabled: axis === 'vertical',
		},
	];
	const { min, max, hideResponsiveButtons } = controlParams;
	const { label } = control.params;
	const wrapClasses = classnames([
		'neve-white-background-control',
		'neve-sizing',
	]);
	return (
		<div className={wrapClasses}>
			<div className="neve-control-header">
				{label && (
					<span className="customize-control-title">{label}</span>
				)}
				<ResponsiveControl
					hideResponsive={hideResponsiveButtons}
					onChange={(nextDevice) => {
						setCurrentDevice(nextDevice);
					}}
				/>
				<div className="neve-units">{getButtons()}</div>
			</div>
			<SizingControl
				min={min}
				max={max}
				step={isRelativeUnit ? 0.1 : 1}
				options={options}
				defaults={defaultValue[currentDevice]}
				value={value[currentDevice]}
				onChange={updateValueForCurrentDevice}
				onReset={() => {
					updateControlValue(defaultValue);
				}}
			/>
		</div>
	);
};

SpacingComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default SpacingComponent;
