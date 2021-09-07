import PropTypes from 'prop-types';

const SingleSizingInput = ({
	type,
	value,
	min,
	max,
	step,
	onChange,
	label,
}) => {
	return (
		<div className="nv-sizing-item">
			<input
				type="number"
				className={type ? type + '-input' : ''}
				value={value}
				min={min}
				max={max}
				step={step}
				onChange={(e) =>
					onChange(type, e.target.value === '' ? 0 : e.target.value)
				}
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
};

export default SingleSizingInput;
