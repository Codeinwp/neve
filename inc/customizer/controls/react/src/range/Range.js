import { RangeControl } from '@wordpress/components';
import PropTypes from 'prop-types';

const Range = ({
	label,
	defaultVal,
	value,
	onChange,
	min = 0,
	max = 100,
	step = 1,
}) => {
	return (
		<div className="neve-white-background-control neve-range-control">
			<div className="neve-control-header">
				{label && (
					<span className="customize-control-title">{label}</span>
				)}
			</div>
			<div className="range-wrap">
				<RangeControl
					resetFallbackValue={defaultVal === 0 ? 0 : defaultVal || ''}
					value={parseInt(value) === 0 ? 0 : value || ''}
					min={min < 0 ? min : 0}
					max={max}
					step={step}
					allowReset
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

Range.propTypes = {
	defaultVal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	label: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
};

export default Range;
