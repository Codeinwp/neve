import { SelectControl } from '@wordpress/components';

const InlineSelect = ({ value, onChange, options, label }) => {
	return (
		<div className="select-inline font-weight">
			{label && <span className="customize-control-title">{label}</span>}
			<SelectControl
				aria-label={label}
				value={value}
				onChange={onChange}
				options={options}
			/>
		</div>
	);
};

export default InlineSelect;
