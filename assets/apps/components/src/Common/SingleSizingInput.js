import PropTypes from 'prop-types';
import { useState } from '@wordpress/element';

const SingleSizingInput = ({
	type,
	value,
	min,
	max,
	step,
	onChange,
	label,
	disabled,
}) => {
	// Partial input like "-" reads as empty; rendering 0 would erase it.
	const [isEmptyInput, setIsEmptyInput] = useState(false);

	return (
		<div className="nv-sizing-item">
			<input
				style={disabled ? { backgroundColor: '#dddddd' } : {}}
				disabled={disabled}
				type="number"
				className={type ? type + '-input' : ''}
				value={isEmptyInput ? '' : value}
				min={min}
				max={max}
				step={step}
				onChange={(e) => {
					setIsEmptyInput(e.target.value === '');
					onChange(type, e.target.value === '' ? 0 : e.target.value);
				}}
				onBlur={() => setIsEmptyInput(false)}
			/>
			{label && (
				<label className="label" htmlFor={type + '-input'}>
					{label}
				</label>
			)}
		</div>
	);
};

SingleSizingInput.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
};

export default SingleSizingInput;
