/* jshint esversion: 6 */

import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
	ResponsiveControl,
	maybeParseJson,
	getIntValAsResponsive,
} from '@neve-wp/components';

import { RangeControl, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

const ResponsiveRangeComponent = ({ control }) => {
	const parsedValue = maybeParseJson(control.setting.get());
	const [currentDevice, setCurrentDevice] = useState('desktop');
	const [value, setValue] = useState(parsedValue);

	useEffect(() => {
		// If a value is int, make it responsive.
		const responsiveConverted = getIntValAsResponsive(
			control.setting.get()
		);
		if (value !== responsiveConverted) {
			setValue(responsiveConverted);
		}
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) return false;
			if (e.detail.id !== control.id) return false;
			// Make sure we translate int values to responsive values.
			const incomingValue = getIntValAsResponsive(e.detail.value);

			setValue(maybeParseJson(incomingValue));
			control.setting.set(JSON.stringify(incomingValue));
		});
	}, []);

	const { label } = control.params;
	const { hideResponsive, units, defaultVal, min, max } =
		control.params.input_attrs;

	const suffixValue = () => {
		const fallbackSuffix = null;

		if (!units) {
			return fallbackSuffix;
		}

		const defaultSuffix =
			defaultVal.suffix && defaultVal.suffix[currentDevice]
				? defaultVal.suffix[currentDevice]
				: fallbackSuffix;

		return value.suffix && value.suffix[currentDevice]
			? value.suffix[currentDevice]
			: defaultSuffix;
	};

	const isRelativeUnit = () => ['em', 'rem'].includes(suffixValue());

	const unitButtons = () => {
		if (!units) {
			return null;
		}

		if (units.length === 1) {
			return (
				<Button isSmall disabled className="active alone">
					{units[0]}
				</Button>
			);
		}

		return units.map((unit, index) => {
			const buttonClass = classnames({
				active: suffixValue() === unit,
			});

			return (
				<Button
					key={index}
					isSmall
					className={buttonClass}
					onClick={() => {
						const nextValue = { ...value };
						nextValue.suffix = { ...nextValue.suffix };
						nextValue.suffix[currentDevice] = unit;
						if (!isRelativeUnit()) {
							nextValue[currentDevice] = parseInt(
								nextValue[currentDevice]
							);
						}
						setValue(nextValue);
						control.setting.set(JSON.stringify(nextValue));
					}}
				>
					{unit}
				</Button>
			);
		});
	};

	const updateValues = (newValue) => {
		// This happens when the reset button is pressed
		if (newValue === undefined) {
			setValue(defaultVal);
			control.setting.set(JSON.stringify(defaultVal));
			return;
		}

		const nextValue = { ...value };
		nextValue[currentDevice] = newValue;
		setValue(nextValue);
		control.setting.set(JSON.stringify(nextValue));
	};

	let displayValue = parseFloat(value[currentDevice]);
	displayValue =
		displayValue === 0 ? 0 : displayValue || defaultVal.currentDevice;

	return (
		<div className="neve-white-background-control neve-range-control">
			<div className="neve-control-header">
				{label && (
					<span className="customize-control-title">{label}</span>
				)}
				<ResponsiveControl
					onChange={(device) => setCurrentDevice(device)}
					hideResponsive={hideResponsive || false}
				/>
				<div className="neve-units">{unitButtons()}</div>
			</div>
			<div className="range-wrap">
				<RangeControl
					value={displayValue}
					min={min || 0}
					max={max || 100}
					step={isRelativeUnit() ? 0.1 : 1}
					allowReset
					onChange={(nextValue) => {
						updateValues(nextValue);
					}}
				/>
			</div>
		</div>
	);
};

ResponsiveRangeComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ResponsiveRangeComponent;
