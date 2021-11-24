import PropTypes from 'prop-types';
import SizingControl from './Sizing';
import classnames from 'classnames';
import ResponsiveControl from '../HOC/Responsive.js';

import { Button } from '@wordpress/components';

const NumberControl = (props) => {
	const {
		label,
		units,
		value,
		className,
		hasResponsive,
		onUnitChange,
		onChangedDevice,
		onChange,
		activeUnit,
		onReset,
		max = 100,
		min = 0,
		step = 1,
	} = props;
	const UnitButtons = () => {
		if (!units) {
			return '';
		}
		if (units.length === 1) {
			return (
				<Button className="alone active" isSmall disabled>
					{units[0]}
				</Button>
			);
		}
		return units.map((unit, index) => {
			return (
				<Button
					key={index}
					isSmall
					onClick={() => {
						onUnitChange(unit);
					}}
					className={classnames({
						active: activeUnit === unit,
					})}
				>
					{unit}
				</Button>
			);
		});
	};

	return (
		<div className={className + ' neve-number-control-wrap'}>
			<div className="neve-control-header">
				{label && (
					<span className="customize-control-title">{label}</span>
				)}
				{hasResponsive && (
					<ResponsiveControl onChange={onChangedDevice} />
				)}
				{units && (
					<div className="neve-units">
						<UnitButtons />
					</div>
				)}
			</div>
			<SizingControl
				noLinking
				options={[{ value }]}
				onChange={onChange}
				max={max}
				min={min}
				step={step}
				defaults={props.default}
				onReset={onReset}
				value={value}
			/>
		</div>
	);
};

NumberControl.propTypes = {
	label: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	units: PropTypes.array || PropTypes.bool,
	default: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	max: PropTypes.number,
	min: PropTypes.number,
	step: PropTypes.number,
	hasResponsive: PropTypes.bool,
	onChangedDevice: PropTypes.func,
	className: PropTypes.string,
};

export default NumberControl;
