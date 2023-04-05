import { TextareaControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import PropTypes from 'prop-types';

const TextareaComponent = ({ control }) => {
	const defaultParams = {
		rows: 4,
	};

	const controlParams = control.params.input_attrs
		? {
				...defaultParams,
				...control.params.input_attrs,
		  }
		: defaultParams;

	const [value, setValue] = useState(control.setting.get());
	const { label } = control.params;

	const updateValues = (newVal) => {
		setValue(newVal);
		control.setting.set(newVal);
	};

	return (
		<div className="neve-white-background-control">
			<div className="neve-control-header">
				{label && (
					<span className="customize-control-title">{label}</span>
				)}
			</div>
			<div className="textarea-wrap">
				<TextareaControl
					rows={controlParams.rows}
					value={value}
					onChange={updateValues}
				/>
			</div>
		</div>
	);
};

TextareaComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default TextareaComponent;
