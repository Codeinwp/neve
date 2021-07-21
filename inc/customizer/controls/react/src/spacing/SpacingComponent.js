/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ResponsiveControl from '../common/Responsive.js';
import SizingControl from '../common/Sizing.js';
import { mergeDeep } from '../common/common';

import { useState, useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { mapValues } from 'lodash';

const SpacingComponent = ({ control }) => {
	const defaultParams = {
		min: -300,
		max: 300,
		hideResponsiveButtons: false,
		units: ['px', 'em', '%'],
	};

	const controlParams = control.params.input_attrs
		? {
				...defaultParams,
				...control.params.input_attrs,
		  }
		: defaultParams;

	const baseDefault = {
		mobile: { top: 0, right: 0, bottom: 0, left: 0 },
		tablet: { top: 0, right: 0, bottom: 0, left: 0 },
		desktop: { top: 0, right: 0, bottom: 0, left: 0 },
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

	const updateValueForCurrentDevice = (valueForDevice) => {
		const nextValue = { ...value };
		nextValue[currentDevice] = valueForDevice;
		updateControlValue(nextValue);
	};

	const updateControlValue = (nextVal) => {
		setValue(nextVal);
		control.setting.set(nextVal);
	};

	useEffect(() => {
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== control.id) return false;

			updateControlValue(e.detail.value || defaultValue);
		});
	}, []);

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
			value: value[currentDevice].top,
		},
		{
			type: 'right',
			label: __('Right', 'neve'),
			value: value[currentDevice].right,
		},
		{
			type: 'bottom',
			label: __('Bottom', 'neve'),
			value: value[currentDevice].bottom,
		},
		{
			type: 'left',
			label: __('Left', 'neve'),
			value: value[currentDevice].left,
		},
	];
	const { hideResponsiveButtons } = controlParams;
	const { label } = control.params;
	const { min, max } = controlParams;
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
				step={value[currentDevice + '-unit'] === 'em' ? 0.1 : 1}
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
